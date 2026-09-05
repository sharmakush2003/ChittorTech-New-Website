export const metadata = {
  title: "Admin Dashboard | ChittorTech™ CRM",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({ children }) {
  return (
    <>
      <style>{`
        /* Isolate Admin Portal: hide public header, footer, floating chatbot & trial modals */
        .ct-header,
        .ct-strip,
        header.header-area,
        header.main-header,
        footer,
        .footer-area,
        #chatbot-root,
        .chatbot-container,
        .chatbot-bubble,
        .chat-toggler,
        #trialModal,
        .modal-backdrop,
        .whatsapp-chat-button,
        .floating-whatsapp {
          display: none !important;
        }
        body {
          background-color: #ffffff !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      <div id="admin-portal-root">
        {children}
      </div>
    </>
  );
}
