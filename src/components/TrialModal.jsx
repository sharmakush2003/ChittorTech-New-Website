"use client";

import React, { useState, useEffect } from "react";

export default function TrialModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    firm: "",
    contact: "",
    location: "",
    message: "",
  });
  const [dontShow, setDontShow] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "danger"
  const [submitting, setSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Only run on the client side
    const trialModalEl = document.getElementById("trialModal");
    if (!trialModalEl) return;

    // Check if submitted in this session
    const wasSubmitted = sessionStorage.getItem("trial_modal_submitted") === "true" || isSubmitted;
    if (wasSubmitted) {
      return; // Do absolutely nothing if already submitted
    }

    let popupCount = parseInt(sessionStorage.getItem("trial_popup_count")) || 0;
    const maxPopups = 3;
    let timerId = null;
    let startTime = null;
    let remainingTime = 0;

    function shouldShowModal() {
      if (sessionStorage.getItem("trial_modal_submitted") === "true" || isSubmitted) return false;
      const lastDismissed = localStorage.getItem("trial_modal_dismissed_v2_at");
      if (!lastDismissed) return true;
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
      return Date.now() - parseInt(lastDismissed) > sevenDaysInMs;
    }

    function showModal() {
      if (sessionStorage.getItem("trial_modal_submitted") === "true" || isSubmitted) return;
      if (window.bootstrap && window.bootstrap.Modal) {
        const modalInstance = window.bootstrap.Modal.getOrCreateInstance(trialModalEl);
        modalInstance.show();
      }
    }

    function startTimer(delay) {
      clearTimer();
      startTime = Date.now();
      remainingTime = delay;

      timerId = setTimeout(() => {
        const isAnyModalShow = document.querySelector(".modal.show");
        if (!isAnyModalShow && shouldShowModal()) {
          showModal();
          popupCount++;
          sessionStorage.setItem("trial_popup_count", popupCount.toString());
        }
        timerId = null;
      }, remainingTime);
    }

    function pauseTimer() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
        remainingTime -= Date.now() - startTime;
        if (remainingTime < 0) remainingTime = 0;
      }
    }

    function resumeTimer() {
      if (remainingTime > 0 && !timerId) {
        startTime = Date.now();
        timerId = setTimeout(() => {
          const isAnyModalShow = document.querySelector(".modal.show");
          if (!isAnyModalShow && shouldShowModal()) {
            showModal();
            popupCount++;
            sessionStorage.setItem("trial_popup_count", popupCount.toString());
          }
          timerId = null;
        }, remainingTime);
      }
    }

    function clearTimer() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      remainingTime = 0;
    }

    function scheduleNext() {
      if (popupCount >= maxPopups || sessionStorage.getItem("trial_modal_submitted") === "true" || isSubmitted || !shouldShowModal()) return;
      
      // Delay intervals:
      // Show 1: 3 seconds after page load (popupCount === 0)
      // Show 2: 6 seconds after first close (popupCount === 1)
      // Show 3: 15 seconds after second close (popupCount === 2)
      let delay = 3000;
      if (popupCount === 1) {
        delay = 6000;
      } else if (popupCount === 2) {
        delay = 15000;
      }

      startTimer(delay);
    }

    if (shouldShowModal()) {
      scheduleNext();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseTimer();
      } else {
        resumeTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const onHideModal = () => {
      const isChecked = document.getElementById("dontShowTrial")?.checked;
      if (isChecked) {
        localStorage.setItem("trial_modal_dismissed_v2_at", Date.now().toString());
        clearTimer();
      }
    };

    const onHiddenModal = () => {
      if (sessionStorage.getItem("trial_modal_submitted") === "true" || isSubmitted) {
        clearTimer();
        return;
      }
      scheduleNext();
    };

    trialModalEl.addEventListener("hide.bs.modal", onHideModal);
    trialModalEl.addEventListener("hidden.bs.modal", onHiddenModal);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      trialModalEl.removeEventListener("hide.bs.modal", onHideModal);
      trialModalEl.removeEventListener("hidden.bs.modal", onHiddenModal);
      clearTimer();
    };
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setDontShow(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg("");

    // Validate required fields client-side to ensure complete data
    if (!formData.name || !formData.email || !formData.company || !formData.contact || !formData.location) {
      setStatusType("danger");
      setStatusMsg("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    // Capture the submission data before resetting the form
    const submissionPayload = { ...formData };

    // 1. Show instant success to the user so they do not have to wait 5-10 seconds
    setStatusType("success");
    setStatusMsg("Thank you! We will contact you soon.");
    
    // 2. Clear the form fields immediately
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      firm: "",
      contact: "",
      location: "",
      message: "",
    });

    // 3. Mark as permanently dismissed in session/local state so the modal doesn't show again
    localStorage.setItem("trial_modal_dismissed_v2_at", Date.now().toString());
    sessionStorage.setItem("trial_modal_submitted", "true");
    setIsSubmitted(true);

    // 4. Hide the modal dynamically after 2 seconds
    setTimeout(() => {
      const trialModalEl = document.getElementById("trialModal");
      if (trialModalEl && window.bootstrap && window.bootstrap.Modal) {
        const modalInstance = window.bootstrap.Modal.getInstance(trialModalEl);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    }, 2000);
    // 5. Send the API request in the background (asynchronously) directly to Google Apps Script
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      try {
        fetch(scriptUrl, {
          method: "POST",
          body: JSON.stringify(submissionPayload),
        }).catch((err) => {
          console.error("Background lead submission fetch failed:", err);
        });
      } catch (err) {
        console.error("Background lead submission error:", err);
      }
    }

    setSubmitting(false);
  };

  return (
    <>
      <style>{`
        #trialModal {
          z-index: 9999999 !important;
        }
        #trialModal.show {
          display: block !important;
          opacity: 1 !important;
        }
        #trialModal.show .modal-dialog {
          opacity: 1 !important;
          transform: none !important;
        }
        .modal-backdrop {
          z-index: 9999998 !important;
          background-color: rgba(15, 23, 42, 0.75) !important;
          backdrop-filter: blur(6px);
        }
        #trialModal .modal-dialog {
          max-width: 820px;
          width: 95%;
        }
        #trialModal .modal-content {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.45);
          max-height: 90vh;
          background: #ffffff;
        }
        #trialModal .modal-body {
          padding: 0;
          overflow-y: auto;
          max-height: 90vh;
        }
        .trial-flex {
          display: flex;
          flex-direction: row;
          min-height: 440px;
        }
        .trial-banner {
          flex: 0 0 38%;
          background: #f8fafc;
          border-right: 1px solid #e2e8f0;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #0f172a;
          padding: 32px 24px;
          overflow: hidden;
        }
        .trial-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .trial-banner-content {
          position: relative;
          z-index: 2;
        }
        .trial-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          background: #eef2ff;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4f46e5;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          border: 1px solid #c7d2fe;
        }
        .trial-banner-content h2 {
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 12px;
          color: #0f172a;
        }
        .trial-banner-content p {
          font-size: 0.82rem;
          color: #475569;
          line-height: 1.5;
        }
        .trial-features {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }
        .trial-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: #334155;
        }
        .trial-feature-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #e0e7ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          flex-shrink: 0;
        }
        .trial-form-side {
          flex: 1;
          padding: 32px 36px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        .trial-title {
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
          font-size: 1.35rem;
          letter-spacing: -0.3px;
        }
        .trial-subtitle {
          color: #64748b;
          margin-bottom: 20px;
          font-size: 0.85rem;
        }
        .trial-form-side .input-group {
          margin-bottom: 12px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
          background: #f8fafc;
        }
        .trial-form-side .input-group:focus-within {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
          background: #ffffff;
        }
        .trial-form-side .input-group-text {
          background: transparent;
          border: none;
          color: #6366f1;
          width: 42px;
          justify-content: center;
          font-size: 0.85rem;
        }
        .trial-form-side .form-control, .trial-form-side .form-select {
          border: none;
          padding: 10px 14px;
          font-size: 0.85rem;
          background: transparent;
          color: #1e293b;
        }
        .trial-form-side .form-control::placeholder {
          color: #94a3b8;
        }
        .trial-form-side .form-control:focus, .trial-form-side .form-select:focus {
          box-shadow: none;
          background: transparent;
        }
        .trial-textarea {
          border: 1px solid #e2e8f0 !important;
          border-radius: 10px !important;
          padding: 10px 14px !important;
          font-size: 0.85rem !important;
          background: #f8fafc !important;
          transition: all 0.2s ease;
        }
        .trial-textarea:focus {
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15) !important;
          background: #ffffff !important;
        }
        .trial-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          background: linear-gradient(135deg, #4f46e5 0%, #0284c7 100%);
          border: none;
          color: white;
          transition: all 0.3s ease;
          margin-top: 8px;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
          letter-spacing: 0.3px;
        }
        .trial-btn:hover {
          background: linear-gradient(135deg, #4338ca 0%, #0369a1 100%);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
          transform: translateY(-1px);
        }
        .close-modal-custom {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 1001;
          background: #f1f5f9;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s ease;
        }
        .close-modal-custom:hover {
          background: #e2e8f0;
          color: #0f172a;
        }
        .dont-show-box {
          margin-top: 14px;
          font-size: 0.78rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dont-show-box input {
          cursor: pointer;
          accent-color: #4f46e5;
          width: 15px;
          height: 15px;
        }

        @media (max-width: 767px) {
          .trial-flex {
            flex-direction: column;
          }
          .trial-banner {
            display: none;
          }
          .trial-form-side {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="modal fade" id="trialModal" tabIndex="-1" aria-hidden="true" data-bs-focus="false">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="close-modal-custom" data-bs-dismiss="modal">
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="modal-body">
              <div className="trial-flex">
                {/* Left Side: ChittorTech Modern AI Banner */}
                <div className="trial-banner">
                  <div className="trial-banner-content">
                    <div className="trial-badge">
                      <i className="fas fa-sparkles"></i> ChittorTech Exclusive
                    </div>
                    <h2>Transform Your Business With AI</h2>
                    <p className="mb-2">Request a personalized demo and discover custom AI chatbots, workflows, and automation built for your growth.</p>
                    <div className="my-3">
                      <img
                        src="/assets/images/ct-logo.png"
                        alt="ChittorTech Logo"
                        style={{ height: "80px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                  </div>

                  <div className="trial-features">
                    <div className="trial-feature-item">
                      <div className="trial-feature-icon"><i className="fas fa-bolt"></i></div>
                      <span>24/7 Intelligent Automation</span>
                    </div>
                    <div className="trial-feature-item">
                      <div className="trial-feature-icon"><i className="fas fa-shield-alt"></i></div>
                      <span>Enterprise Security & Privacy</span>
                    </div>
                    <div className="trial-feature-item">
                      <div className="trial-feature-icon"><i className="fas fa-chart-line"></i></div>
                      <span>High ROI Custom Solutions</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Sleek Modern Form */}
                <div className="trial-form-side">
                  <div>
                    <h3 className="trial-title">Get Free Consultation & Trial</h3>
                    <p className="trial-subtitle">Tell us about your project and receive a tailored demo.</p>
                  </div>

                  {statusMsg && (
                    <div className={`alert alert-${statusType} py-2 px-3 mb-3 small`}>
                      {statusMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} id="trialForm">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-user"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Work Email*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-building"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-industry"></i></span>
                          <select
                            name="industry"
                            className="form-select"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Industry*</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Trading & Retail">Trading & Retail</option>
                            <option value="Hospitality & Hotel">Hospitality & Hotel</option>
                            <option value="IT & Tech Services">IT & Tech Services</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-briefcase"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="firm"
                            value={formData.firm}
                            onChange={handleChange}
                            placeholder="Business Type*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Phone / WhatsApp*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            id="trialLocation"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location (City/State)*"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <textarea
                        className="form-control trial-textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Brief project details or requirements..."
                      ></textarea>
                    </div>

                    <button type="submit" className="trial-btn" disabled={submitting}>
                      {submitting ? "Submitting Request..." : "Request Free Trial & Demo"}
                    </button>

                    <div className="dont-show-box">
                      <input
                        type="checkbox"
                        id="dontShowTrial"
                        checked={dontShow}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="dontShowTrial">Don't show this popup for 7 days</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

