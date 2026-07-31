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

  useEffect(() => {
    // Only run on the client side
    const trialModalEl = document.getElementById("trialModal");
    if (!trialModalEl) return;

    let popupCount = parseInt(sessionStorage.getItem("trial_popup_count")) || 0;
    const maxPopups = 2;
    let isPermanentlyDismissed = false;
    let timerId = null;
    let startTime = null;
    let remainingTime = 0;

    function shouldShowModal() {
      const lastDismissed = localStorage.getItem("trial_modal_dismissed_v2_at");
      if (!lastDismissed) return true;
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
      return Date.now() - parseInt(lastDismissed) > sevenDaysInMs;
    }

    function showModal() {
      // Bootstrap's modal integration via window
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
        if (!isAnyModalShow && !isPermanentlyDismissed) {
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
          if (!isAnyModalShow && !isPermanentlyDismissed) {
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
      if (popupCount >= maxPopups || isPermanentlyDismissed || !shouldShowModal()) return;
      const delay = popupCount === 0 ? 3000 : 6000;
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
        isPermanentlyDismissed = true;
        clearTimer();
      }
    };

    const onHiddenModal = () => {
      if (!isPermanentlyDismissed) {
        scheduleNext();
      }
    };

    trialModalEl.addEventListener("hide.bs.modal", onHideModal);
    trialModalEl.addEventListener("hidden.bs.modal", onHiddenModal);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      trialModalEl.removeEventListener("hide.bs.modal", onHideModal);
      trialModalEl.removeEventListener("hidden.bs.modal", onHiddenModal);
      clearTimer();
    };
  }, []);

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.status === "success") {
        setStatusType("success");
        setStatusMsg("Thank you! We will contact you soon.");
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
        localStorage.setItem("trial_modal_dismissed_v2_at", Date.now().toString());
      } else {
        setStatusType("danger");
        setStatusMsg(data.msg || "There was a problem submitting the form.");
      }
    } catch (err) {
      console.error(err);
      setStatusType("danger");
      setStatusMsg("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
        }
        #trialModal .modal-dialog {
          max-width: 800px;
          width: 95%;
        }
        #trialModal .modal-content {
          border-radius: 15px;
          overflow: hidden;
          border: none;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          max-height: 85vh;
        }
        #trialModal .modal-body {
          padding: 0;
          overflow-y: auto;
          max-height: 85vh;
        }
        .trial-flex {
          display: flex;
          flex-direction: row;
          min-height: 400px;
        }
        .trial-banner {
          flex: 0 0 35%;
          background: url('/assets/images/free_trial_banner_1778579466613.png');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 20px;
        }
        .trial-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.85) 0%, rgba(10, 88, 202, 0.6) 100%);
        }
        .trial-banner-content {
          position: relative;
          z-index: 1;
        }
        .trial-banner-content h2 {
          font-size: 1.4rem;
          font-weight: 800;
        }
        .trial-banner-content p {
          font-size: 0.8rem;
        }
        .trial-form-side {
          flex: 1;
          padding: 25px 30px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .trial-title {
          font-weight: 800;
          color: #333;
          margin-bottom: 5px;
          font-size: 1.3rem;
        }
        .trial-subtitle {
          color: #666;
          margin-bottom: 15px;
          font-size: 0.85rem;
        }
        .trial-form-side .input-group {
          margin-bottom: 10px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #ddd;
        }
        .trial-form-side .input-group-text {
          background: #f8f9fa;
          border: none;
          color: #0d6efd;
          width: 40px;
          justify-content: center;
        }
        .trial-form-side .form-control, .trial-form-side .form-select {
          border: none;
          padding: 8px 12px;
          font-size: 0.85rem;
        }
        .trial-form-side .form-control:focus {
          box-shadow: none;
          background: #fff;
        }
        .trial-btn {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #0d6efd;
          border: none;
          color: white;
          transition: all 0.3s ease;
          margin-top: 5px;
        }
        .trial-btn:hover {
          background: #0a58ca;
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
        }
        .close-modal-custom {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 1001;
          background: #eee;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.7;
        }
        .close-modal-custom:hover {
          opacity: 1;
          background: #ddd;
        }
        .dont-show-box {
          margin-top: 10px;
          font-size: 0.75rem;
          color: #888;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dont-show-box input {
          cursor: pointer;
        }

        @media (max-width: 767px) {
          .trial-flex {
            flex-direction: column;
          }
          .trial-banner {
            display: none;
          }
          .trial-form-side {
            padding: 20px;
          }
        }
      `}</style>

      <div className="modal fade" id="trialModal" tabIndex="-1" aria-hidden="true" data-bs-focus="false">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="close-modal-custom" data-bs-dismiss="modal">
              <i className="bi bi-x"></i>
            </div>
            <div className="modal-body">
              <div className="trial-flex">
                {/* Left Side: Banner (Visible on Desktop) */}
                <div className="trial-banner">
                  <div className="trial-banner-content">
                    <h2 className="mb-2">Scale Your Success</h2>
                    <p className="mb-0 small">Join the future of retail with Chittortech.</p>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="trial-form-side">
                  <div className="text-center text-md-start">
                    <h3 className="trial-title">Special Offer - Free Trial</h3>
                    <p className="trial-subtitle">Experience AI-driven AI & IT Solutions today.</p>
                  </div>

                  {statusMsg && (
                    <div className={`alert alert-${statusType} mt-3`}>
                      {statusMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} id="trialForm">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-user small"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-envelope small"></i></span>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-building small"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-industry small"></i></span>
                          <select
                            name="industry"
                            className="form-select"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Industry*</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Trading">Trading</option>
                            <option value="Retail">Retail</option>
                            <option value="Services">Services</option>
                            <option value="Any other">Any other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-concierge-bell small"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="firm"
                            value={formData.firm}
                            onChange={handleChange}
                            placeholder="Business*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-phone small"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Contact*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fas fa-map-marker-alt small"></i></span>
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
                        className="form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Brief requirements..."
                        style={{ border: "1px solid #ddd", borderRadius: "8px", fontSize: "0.8rem" }}
                      ></textarea>
                    </div>

                    <button type="submit" className="trial-btn" disabled={submitting}>
                      {submitting ? "Submitting..." : "Get Free Trial Now"}
                    </button>

                    <div className="dont-show-box">
                      <input
                        type="checkbox"
                        id="dontShowTrial"
                        checked={dontShow}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="dontShowTrial">Don't show this for 7 days</label>
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
