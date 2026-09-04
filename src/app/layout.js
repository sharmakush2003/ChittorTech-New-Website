// ─── Google Analytics 4 — ChittorTech ────────────────────────────────────────
// Property: ChittorTech Website | Measurement ID: G-G9QX6M81EL
const GA4_ID = "G-G9QX6M81EL";
// ─────────────────────────────────────────────────────────────────────────────

import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/chatbot.css";
import "../../public/assets/css/design-system.css";

import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import TrialModal from "@/components/TrialModal";
import SliderInitializer from "@/components/SliderInitializer";

export const metadata = {
  metadataBase: new URL("https://chittortech.online"),
  title: {
    default: "ChittorTech™ | Leading IT Services, Mobile App & Web Development Company",
    template: "%s | ChittorTech",
  },
  description: "ChittorTech is a premier IT & Software company in India specializing in custom Mobile App Development, Web Development, Cloud PMS, Temple Management Systems, and Enterprise AI Solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ChittorTech™ | Leading IT Services, Mobile App & Web Development Company",
    description: "ChittorTech is a premier IT & Software company in India specializing in custom Mobile App Development, Web Development, Cloud PMS, Temple Management Systems, and Enterprise AI Solutions.",
    url: "https://chittortech.online",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChittorTech™ | Leading IT Services, Mobile App & Web Development Company",
    description: "ChittorTech is a premier IT & Software company in India specializing in custom Mobile App Development, Web Development, Cloud PMS, Temple Management Systems, and Enterprise AI Solutions.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="yandex-verification" content="8aa7f02fca63d52d" />
        <meta name="p:domain_verify" content="83a539ac9f26d5e2f0b714eee5cca03f"/>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* Modern Google Fonts — Inter + Plus Jakarta Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
        />
        {/* Icon & UI Libraries */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <style>{`
          /* ── Global Mobile Overflow Prevention ── */
          html, body {
            overflow-x: hidden !important;
            max-width: 100% !important;
          }
          * { box-sizing: border-box; }
          img { max-width: 100%; }
          /* Global Fix for City Landing Page Badges */
          .premium-city-hero .badge {
            white-space: normal !important;
            line-height: 1.6 !important;
            max-width: 90% !important;
            display: inline-block !important;
            height: auto !important;
            padding: 10px 15px !important;
          }
          @media (max-width: 576px) {
            .premium-city-hero .badge { font-size: 0.85rem !important; letter-spacing: 1px !important; }
            .premium-city-hero h1 { font-size: 2.2rem !important; }
          }
          .sub-menu, .mega-menu { z-index: 10000 !important; }
        `}</style>
        {/* B2B Generative Engine Optimization (GEO) Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ChittorTech",
              "url": "https://chittortech.online",
              "logo": "https://chittortech.online/favicon.png",
              "description": "Transforming businesses through innovative, cloud-based software solutions. AI & IT Solutions, AI Knowledge Base, AI Support Chatbot and website development.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chittorgarh",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7597451057",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/chittortech",
                "https://maps.google.com/?q=ChittorTech+Chittorgarh",
                "https://istart.rajasthan.gov.in/profile/11478/startups"
              ]
            })
          }}
        />
      </head>
      <body>
        <SliderInitializer />
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <TrialModal />

        {/* ── Google Analytics GA4 ── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
            });
          `}
        </Script>

        {/* ── Meta Pixel (Facebook/Instagram Ads Tracking Infrastructure) ── */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Legacy jQuery/Bootstrap/plugins — required by inner pages */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
