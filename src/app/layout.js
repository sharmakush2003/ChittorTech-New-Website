// ─── Google Analytics 4 — ChittorTech ────────────────────────────────────────
// Property: ChittorTech (.in) | Measurement ID: G-CYREXRYVLN
const GA4_ID = "G-CYREXRYVLN";
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
  metadataBase: new URL("https://chittortech.in"),
  title: {
    default: "ChittorTech | IT Services, Web & Mobile App Development",
    template: "%s | ChittorTech",
  },
  description: "ChittorTech is a premier IT company in India specializing in custom mobile apps, web development, cloud ERP, and enterprise AI software solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ChittorTech | IT Services, Web & Mobile App Development",
    description: "ChittorTech is a premier IT company in India specializing in custom mobile apps, web development, cloud ERP, and enterprise AI software solutions.",
    url: "https://chittortech.in",
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
    title: "ChittorTech | IT Services, Web & Mobile App Development",
    description: "ChittorTech is a premier IT company in India specializing in custom mobile apps, web development, cloud ERP, and enterprise AI software solutions.",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="CY_ChPltJ7jb_m5ZzUqCb63jBILSU2uOv7bYNgJc3y8" />
        <meta name="yandex-verification" content="495c64862381b7b9" />
        <meta name="p:domain_verify" content="83a539ac9f26d5e2f0b714eee5cca03f"/>
        <meta name="facebook-domain-verification" content="opaaiyfyje7nkw6e2xqtbk7cz4llul" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
        {/* B2B Generative Engine Optimization (GEO) & AEO Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              "name": "ChittorTech",
              "legalName": "ChittorTech",
              "url": "https://chittortech.in",
              "logo": "https://chittortech.in/favicon.png",
              "image": "https://chittortech.in/favicon.png",
              "description": "ChittorTech is a premier IT services, mobile app and custom software development company based in Chittorgarh, Rajasthan, India, delivering high-performance Next.js web applications, enterprise cloud ERPs, and AI solutions to clients across India and globally including the United States.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chittorgarh",
                "addressLocality": "Chittorgarh",
                "addressRegion": "Rajasthan",
                "postalCode": "312001",
                "addressCountry": "IN"
              },
              "telephone": "+91-7597451057",
              "email": "contact@chittortech.in",
              "priceRange": "$$",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7597451057",
                  "email": "business@chittortech.in",
                  "contactType": "sales",
                  "areaServed": ["IN", "US", "GB", "AE", "Global"],
                  "availableLanguage": ["en", "hi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7597451057",
                  "email": "contact@chittortech.in",
                  "contactType": "customer support",
                  "areaServed": ["IN", "US", "GB", "AE", "Global"],
                  "availableLanguage": ["en", "hi"]
                }
              ],
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Rajasthan" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "United Arab Emirates" }
              ],
              "knowsAbout": [
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Next.js Development",
                "React Development",
                "Full Stack Development",
                "Cloud Solutions",
                "Enterprise ERP & CRM Software",
                "Property Management Systems (PMS)",
                "Temple Management Systems",
                "Artificial Intelligence Chatbots & Automation",
                "IT Consulting & Offshore Software Development",
                "Top IT Companies in Rajasthan"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ChittorTech IT Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Web Development",
                      "description": "High-speed, scalable web applications built with Next.js, React, and Node.js."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile Application Development",
                      "description": "Cross-platform and native mobile apps for iOS and Android using Flutter and React Native."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enterprise Cloud Software & ERP",
                      "description": "Bespoke business software including Hotel PMS, Temple ERP, and CRM solutions."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Chatbot Engineering",
                      "description": "Custom conversational AI, intelligent support agents, and workflow automation."
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/chittortech",
                "https://maps.google.com/?q=ChittorTech+Chittorgarh",
                "https://istart.rajasthan.gov.in/profile/11478/startups",
                "https://github.com/sharmakush2003"
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
