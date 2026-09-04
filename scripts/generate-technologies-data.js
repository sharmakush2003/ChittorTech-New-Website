const fs = require('fs');

const TECH_CATALOG = [
  // ── Frontend & Web ──
  {
    slug: "javascript",
    name: "JavaScript",
    category: "Programming Languages",
    icon: "fa-brands fa-js",
    color: "#f7df1e",
    tagline: "The Core Language of Modern Web & Interactive Software",
    overview: "JavaScript is the foundation of interactive web experiences. At ChittorTech, we leverage ES6+ modern JavaScript to build ultra-responsive client dashboards, offline-first billing sync engines, and dynamic user interfaces that engage users across devices.",
    useCases: [
      { title: "Dynamic Web Applications", desc: "Building interactive, event-driven web applications with real-time UI updates." },
      { title: "Browser-Based Business Dashboards", desc: "Interactive charts, financial reports, and live data telemetry for retail owners." },
      { title: "Cross-Platform Scripting", desc: "Reusable business logic running across Node.js backends and browser frontends." },
      { title: "Custom Widget Integrations", desc: "WhatsApp floating leads, real-time chat widgets, and CRM checkout counters." }
    ],
    pros: [
      "Supported natively by every modern web browser with zero installation needed.",
      "Vast global open-source ecosystem (NPM) with millions of pre-built packages.",
      "Enables full-stack development using a single unified language for client & server."
    ],
    cons: [
      "Dynamic typing can lead to subtle runtime bugs if strict linting or TypeScript is not used.",
      "Client-side execution depends on end-user device performance and browser settings."
    ],
    deliverables: "High-performance JavaScript frontends, custom modular widgets, and optimized script bundles under 50KB.",
    projects: ["Mewari Achaar E-Commerce Portal", "ChittorTech Interactive Support Chatbot", "Sabari Mala Mandir Counter POS"]
  },
  {
    slug: "typescript",
    name: "TypeScript",
    category: "Programming Languages",
    icon: "fa-brands fa-js",
    color: "#3178c6",
    tagline: "Type-Safe Enterprise Architecture for Mission-Critical Code",
    overview: "TypeScript adds static typing to JavaScript, catching errors before they reach production. ChittorTech enforces TypeScript for enterprise ERPs, inventory systems, and complex financial calculations where mathematical precision and zero bugs are non-negotiable.",
    useCases: [
      { title: "Enterprise ERPs & Billing", desc: "Strict GST calculation, multi-currency invoicing, and zero-runtime-error data schemas." },
      { title: "Large-Scale SaaS Products", desc: "Refactorable architecture that scales across teams without breaking contracts." },
      { title: "API Contract Synchronization", desc: "Shared types between frontend client and backend REST/GraphQL services." },
      { title: "Complex State Management", desc: "Predictable application states in high-volume inventory and retail POS carts." }
    ],
    pros: [
      "Catches 85% of common programming bugs at compile time before deployment.",
      "Superior developer ergonomics with instant auto-completion and documentation in IDEs.",
      "Maintains clean, self-documenting codebases for long-term multi-year enterprise maintenance."
    ],
    cons: [
      "Requires an extra compilation step before running in browser environments.",
      "Slightly steeper learning curve and initial boilerplate for small one-page sites."
    ],
    deliverables: "Strictly typed Next.js applications, automated type-generation scripts, and robust enterprise software.",
    projects: ["Enterprise Dharamshala Management System", "Multi-Store Retail POS Engine", "ChittorTech Certificate Portal"]
  },
  {
    slug: "html5",
    name: "HTML5",
    category: "Frontend & Web",
    icon: "fa-brands fa-html5",
    color: "#e34f26",
    tagline: "Semantic, Accessible & SEO-Optimized Web Structuring",
    overview: "HTML5 provides the structural skeleton for every digital platform. ChittorTech builds semantic, accessible, and ultra-clean HTML5 templates with rich Schema.org microdata, guaranteeing top Google Search visibility and 100/100 Lighthouse SEO scores.",
    useCases: [
      { title: "SEO Semantic Structuring", desc: "Using proper headings, article tags, and breadcrumb structures for search crawlers." },
      { title: "Rich Media Embedding", desc: "Native video, audio players, and interactive canvas graphics with zero external plugins." },
      { title: "Local Storage & Offline Web", desc: "Web workers, service workers, and IndexedDB caching for offline POS capabilities." },
      { title: "Accessible Web (a11y)", desc: "Screen-reader friendly markup compliant with WCAG 2.1 international standards." }
    ],
    pros: [
      "Maximum search engine crawling efficiency with clean semantic tags.",
      "Zero dependencies; loads with blistering speed even on slow 2G/3G mobile networks.",
      "Universal device compatibility across mobile, tablet, desktop, and smart TVs."
    ],
    cons: [
      "Provides structure only; requires CSS for styling and JavaScript for dynamic interactivity.",
      "Complex interactive animations require integration with modern rendering libraries."
    ],
    deliverables: "SEO-first semantic layouts, Schema microdata integration, and 100/100 Lighthouse performance structures.",
    projects: ["ChittorTech Core Web Platform", "Visit Chittorgarh Tourism Portal", "Rajasthan City Landing Directories"]
  },
  {
    slug: "css3",
    name: "CSS3",
    category: "Frontend & Web",
    icon: "fa-brands fa-css3-alt",
    color: "#1572b6",
    tagline: "High-Fidelity Animations, Fluid Layouts & Modern Aesthetics",
    overview: "CSS3 transforms raw web pages into visually breathtaking, interactive brand experiences. We write modular, modern CSS3 using Flexbox, CSS Grid, custom properties (CSS variables), and hardware-accelerated 60fps micro-animations that captivate visitors.",
    useCases: [
      { title: "Responsive Multi-Device Layouts", desc: "Fluid designs adapting seamlessly from 320px mobile screens to 4K ultra-wide monitors." },
      { title: "Dark Mode & Dynamic Theming", desc: "Custom HSL design systems with instant light/dark mode transitions." },
      { title: "Hardware-Accelerated Animations", desc: "Smooth keyframe animations, glassmorphism backdrops, and gradient hover states." },
      { title: "Print-Ready Billing Invoices", desc: "Specialized @media print stylesheets for 80mm thermal receipt and A4 GST printing." }
    ],
    pros: [
      "GPU-accelerated animations that don't block the JavaScript main execution thread.",
      "Extensive modern layout power with CSS Grid and Flexbox eliminating layout bugs.",
      "CSS variables allow dynamic theme changes with minimal overhead."
    ],
    cons: [
      "Large unmanaged CSS files can become difficult to maintain without strict scoping.",
      "Browser prefix quirks can occur on outdated or legacy mobile webview browsers."
    ],
    deliverables: "Lightweight CSS architectures, 60fps micro-animations, and thermal receipt print stylesheets.",
    projects: ["ChittorTech Dark Mode Portal", "POS Thermal Receipt Formatting System", "Luxury Retail Boutique Showcase"]
  },
  {
    slug: "react",
    name: "React",
    category: "Frontend & Web",
    icon: "fa-brands fa-react",
    color: "#61dafb",
    tagline: "Declarative Component-Driven Web Engineering",
    overview: "React powers interactive single-page and multi-page web applications. ChittorTech designs modular React components with efficient state lifecycles, virtual DOM diffing, and reactive data streams to build responsive admin panels and SaaS tools.",
    useCases: [
      { title: "Real-Time SaaS Dashboards", desc: "Live business metrics, sales tracking, and operational dashboards." },
      { title: "Complex Inventory Interfaces", desc: "Dynamic tables with multi-filter sorting, inline editing, and barcode lookup." },
      { title: "Customer Portals & Booking", desc: "Self-service booking portals for hotels, clinics, and service centers." },
      { title: "Interactive AI Agent Frontends", desc: "Streaming AI chat interfaces with real-time markdown and token rendering." }
    ],
    pros: [
      "Component-based reusability cuts multi-screen development time by 50%.",
      "Huge ecosystem with battle-tested libraries for state, forms, and charts.",
      "Declarative UI paradigm makes complex interactive state changes easy to track."
    ],
    cons: [
      "Requires a metaframework like Next.js for server-side rendering and top-tier SEO.",
      "High frequency of dependency updates requires proactive version maintenance."
    ],
    deliverables: "Modular React component libraries, high-performance dashboards, and responsive frontends.",
    projects: ["Dharamshala Management Admin Portal", "Vehicle Fuel Analytics Dashboard", "ChittorTech AI Chatbot Interface"]
  },
  {
    slug: "nextjs",
    name: "Next.js",
    category: "Frontend & Web",
    icon: "fa-solid fa-layer-group",
    color: "#0f172a",
    tagline: "The Full-Stack React Framework for High-Performance SEO & SaaS",
    overview: "Next.js is the crown jewel of our production web stack. By combining Static Site Generation (SSG), Incremental Static Regeneration (ISR), and automated image optimization, Next.js allows ChittorTech to build sub-second loading enterprise websites that dominate Google search results.",
    useCases: [
      { title: "High-Traffic SEO Platforms", desc: "Generating 800+ static HTML pages that rank on Google instantly with 0ms server lag." },
      { title: "Enterprise B2B Software", desc: "Secure server-rendered web applications with built-in API route handlers." },
      { title: "E-Commerce Storefronts", desc: "Ultra-fast product catalogs with instant search filtering and checkout flows." },
      { title: "Serverless Micro-Frontends", desc: "Edge-deployed applications with global CDN routing on Vercel and AWS." }
    ],
    pros: [
      "Unmatched SEO performance through pre-rendering and automatic metadata generation.",
      "Integrated image optimization and code splitting reduce initial bundle sizes by up to 70%.",
      "Hybrid rendering: mix SSG, SSR, and client components in a single unified codebase."
    ],
    cons: [
      "Frequent architectural updates between major releases require deep framework expertise.",
      "Strict static export rules require careful routing design to prevent build-time 404s."
    ],
    deliverables: "Production Next.js applications, 100/100 Core Web Vitals optimizations, and static multi-page sites.",
    projects: ["ChittorTech New Web Platform (790+ Pages)", "Mewari Achaar Web Storefront", "Visit Chittorgarh Tourism Guide"]
  },
  {
    slug: "vuejs",
    name: "Vue.js",
    category: "Frontend & Web",
    icon: "fa-brands fa-vuejs",
    color: "#4fc08d",
    tagline: "Progressive, Approachable & High-Speed Frontend Framework",
    overview: "Vue.js offers an intuitive, progressive framework with gentle learning curves and fine-grained reactivity. ChittorTech utilizes Vue.js for custom client portals and lightweight frontend widgets where rapid delivery and low bundle sizes are essential.",
    useCases: [
      { title: "Interactive Client Portals", desc: "Self-service customer account dashboards with minimal setup overhead." },
      { title: "Embedded POS Widgets", desc: "Fast-loading billing calculation components embedded inside legacy systems." },
      { title: "Internal Admin Tools", desc: "Rapidly built internal workflow management tools for small business owners." },
      { title: "Lightweight Prototyping", desc: "Creating functional MVPs in record time to validate business concepts." }
    ],
    pros: [
      "Extremely gentle learning curve with clean single-file component (.vue) architecture.",
      "Very compact runtime bundle size, ensuring snappy performance on lower-end devices.",
      "Highly readable template syntax that integrates easily with existing backend engines."
    ],
    cons: [
      "Smaller corporate enterprise adoption compared to React in major global enterprises.",
      "Fewer third-party ready-made enterprise component libraries than React."
    ],
    deliverables: "Single-file component suites, embedded POS modules, and lightweight client portal interfaces.",
    projects: ["Client Self-Service Dashboard", "Interactive Store Catalog Widget", "Lightweight Invoicing UI"]
  },
  {
    slug: "angular",
    name: "Angular",
    category: "Frontend & Web",
    icon: "fa-brands fa-angular",
    color: "#dd0031",
    tagline: "Opinionated Enterprise Framework for Complex Web Architectures",
    overview: "Angular provides a battery-included, strictly architected framework backed by Google. ChittorTech deploys Angular for large institutional applications, banking software, and hospital ERPs that demand rigid architectural patterns and standardized dependency injection.",
    useCases: [
      { title: "Hospital & Medical ERPs", desc: "Multi-department patient tracking, pharmacy inventories, and doctor scheduling." },
      { title: "Government & Institutional Portals", desc: "Rigid form validations, role-based workflows, and audit-compliant interfaces." },
      { title: "Large Banking & Financial Systems", desc: "Strict MVC architectures with enterprise dependency injection." },
      { title: "Enterprise Field Force Portals", desc: "Complex offline data capture systems with two-way data binding." }
    ],
    pros: [
      "Complete all-in-one framework: routing, HTTP client, forms, and testing are built-in.",
      "Standardized architecture makes onboarding and maintaining massive enterprise codebases predictable.",
      "Built-in TypeScript support with robust dependency injection for clean code separation."
    ],
    cons: [
      "Steep learning curve with concepts like RxJS observables, decorators, and modules.",
      "Heavier initial bundle size compared to lightweight alternatives like Next.js."
    ],
    deliverables: "Enterprise-grade Angular SPAs, structured state modules, and hospital workflow portals.",
    projects: ["Multi-Specialty Hospital Management System", "Trust Institutional Billing Portal", "Government Contractor CRM"]
  },
  {
    slug: "nodejs",
    name: "Node.js",
    category: "Backend & APIs",
    icon: "fa-brands fa-node-js",
    color: "#339933",
    tagline: "High-Concurrency Asynchronous Backend Runtime",
    overview: "Node.js powers our scalable API servers, microservices, and asynchronous background queues. With its non-blocking event-driven architecture, ChittorTech builds backend engines capable of handling tens of thousands of simultaneous socket connections with minimal RAM footprint.",
    useCases: [
      { title: "High-Speed RESTful & GraphQL APIs", desc: "Serving data to mobile apps and web frontends with sub-50ms latency." },
      { title: "WhatsApp & SMS Automation Bots", desc: "Event-driven webhook listeners that reply to customer inquiries instantly." },
      { title: "Real-Time WebSocket Servers", desc: "Live kitchen order ticketing (KOT), chat systems, and ride-hailing tracking." },
      { title: "Automated Data Processing Queues", desc: "Background invoice generation, PDF exports, and database sync jobs." }
    ],
    pros: [
      "Non-blocking I/O handles thousands of concurrent connections efficiently on single threads.",
      "Enables shared JavaScript/TypeScript models across client and server for faster delivery.",
      "Vast NPM ecosystem covering integrations for payment gateways, WhatsApp APIs, and databases."
    ],
    cons: [
      "Heavy CPU-bound mathematical operations can block the event loop if not offloaded to worker threads.",
      "Callback/promise complexity requires disciplined async/await patterns to avoid unhandled errors."
    ],
    deliverables: "Express/Fastify backend APIs, WebSocket streaming servers, and automated lead webhook handlers.",
    projects: ["WhatsApp Automated Lead Router", "Real-Time KOT Kitchen Billing Server", "Cloud Background Worker Engine"]
  },
  {
    slug: "python",
    name: "Python",
    category: "Programming Languages",
    icon: "fa-brands fa-python",
    color: "#3776ab",
    tagline: "The Unrivaled Powerhouse for Artificial Intelligence, ML & Automation",
    overview: "Python is the heartbeat of our AI and data engineering practice. ChittorTech builds custom LLM fine-tuning pipelines, RAG vector search engines, automated web scrapers, and predictive algorithms using Python's mature scientific computing stack.",
    useCases: [
      { title: "Custom LLM & Agentic AI Workflows", desc: "Multi-agent autonomous systems using LangChain, LlamaIndex, and OpenAI APIs." },
      { title: "RAG Vector Knowledge Search", desc: "Converting enterprise PDF manuals and SQL databases into semantic AI knowledge bases." },
      { title: "Predictive Analytics & Forecasting", desc: "Retail stock demand prediction and crop yield forecasting for agribusinesses." },
      { title: "Automated Data Pipelines & Scraping", desc: "Extracting market intelligence and competitor pricing with automated headless crawlers." }
    ],
    pros: [
      "The undisputed global standard for AI, machine learning, data science, and computer vision.",
      "Clean, readable syntax that accelerates development and algorithmic iteration by 3x.",
      "Massive ecosystem of libraries including PyTorch, TensorFlow, Pandas, NumPy, and Scikit-learn."
    ],
    cons: [
      "Slower raw execution speed for general loops compared to compiled languages like C++ or Go.",
      "High memory consumption for massive in-memory datasets without proper generator streaming."
    ],
    deliverables: "Autonomous AI agent pipelines, RAG semantic search backends, and predictive machine learning models.",
    projects: ["ChittorTech Enterprise AI Knowledge Agent", "Retail Stock Demand Predictor", "Historical Document OCR Digitizer"]
  },
  {
    slug: "java",
    name: "Java",
    category: "Programming Languages",
    icon: "fa-brands fa-java",
    color: "#007396",
    tagline: "Rock-Solid Enterprise Scalability & Proven Stability",
    overview: "Java has been the backbone of global enterprise IT for decades. ChittorTech utilizes modern Java (Spring Boot) for ultra-reliable banking ledgers, mission-critical ERP backends, and multi-tenant systems requiring strict object-oriented architecture and thread safety.",
    useCases: [
      { title: "Core Banking & Accounting Engines", desc: "ACID-compliant ledgers processing millions of transactions without data loss." },
      { title: "Enterprise Manufacturing ERPs", desc: "Multi-factory bill of materials (BOM), production cycles, and supply chain management." },
      { title: "High-Throughput Microservices", desc: "Spring Boot microservice clusters with distributed tracing and resilience." },
      { title: "Legacy Modernization", desc: "Upgrading outdated on-premise Java systems to modern cloud-ready microservices." }
    ],
    pros: [
      "Exceptional long-term backward compatibility and proven enterprise stability.",
      "Industry-leading multi-threading and garbage collection tuned for enterprise servers.",
      "Vast pool of enterprise libraries, ORMs (Hibernate), and security frameworks (Spring Security)."
    ],
    cons: [
      "More verbose syntax compared to modern dynamic languages like Python.",
      "Higher initial JVM memory footprint, making it less ideal for tiny serverless functions."
    ],
    deliverables: "Spring Boot REST microservices, enterprise ERP backend engines, and financial ledger services.",
    projects: ["Industrial Cement & Marble Manufacturing ERP", "Multi-Branch Banking Ledger System", "Trust Accounting Backend"]
  },
  {
    slug: "kotlin",
    name: "Kotlin",
    category: "Programming Languages",
    icon: "fa-solid fa-code",
    color: "#7f52ff",
    tagline: "Modern, Concise & Expressive Language for Android & Multiplatform",
    overview: "Kotlin is Google's preferred language for modern Android engineering. ChittorTech builds native Android applications with Kotlin Coroutines and Jetpack Compose, delivering fluid 120Hz interfaces, zero null-pointer crashes, and full hardware integration.",
    useCases: [
      { title: "Native Android App Development", desc: "Consumer and B2B apps running natively on Google Play Store." },
      { title: "Offline POS Handheld Terminals", desc: "Touch POS software for Sunmi, PAX, and handheld Android billing machines." },
      { title: "Bluetooth & Thermal Printer Sync", desc: "Direct hardware communication for barcode scanners and ESC/POS thermal printers." },
      { title: "Background Service Syncing", desc: "WorkManager pipelines syncing offline sales records to cloud servers seamlessly." }
    ],
    pros: [
      "100% interoperable with Java while eliminating null-pointer exceptions via null-safety.",
      "Coroutines provide ultra-clean, non-blocking asynchronous programming for smooth UI threads.",
      "Officially recommended by Google with full support in Android Studio and Jetpack libraries."
    ],
    cons: [
      "Compilation times can be slightly longer than pure Java for very large codebases.",
      "Fewer native web-oriented libraries compared to the massive Node.js ecosystem."
    ],
    deliverables: "Native Android APKs/AAB bundles, Bluetooth printer drivers, and handheld POS applications.",
    projects: ["Sunmi Handheld Mobile POS App", "Visit Chittorgarh Tourism Native App", "Delivery Driver Field Tracker"]
  },
  {
    slug: "android-sdk",
    name: "Android SDK",
    category: "Mobile Development",
    icon: "fa-brands fa-android",
    color: "#3ddc84",
    tagline: "Direct Access to the World's Largest Mobile Ecosystem",
    overview: "The Android SDK provides low-level APIs to harness mobile hardware — cameras, GPS, Bluetooth, NFC, and sensors. ChittorTech uses Android SDK APIs to build specialized industrial apps, driver tracking systems, and merchant POS software tailored for India's mobile market.",
    useCases: [
      { title: "Hardware Sensor Integration", desc: "Accessing camera barcode scanners, biometric fingerprint scanners, and GPS sensors." },
      { title: "Google Play Console Publishing", desc: "Navigating Google's 20-tester requirement and strict policy compliance for launch." },
      { title: "Kiosk Mode & Lock-Down Systems", desc: "Turning off-the-shelf tablets into dedicated single-purpose store billing kiosks." },
      { title: "Push Notification Pipelines", desc: "Targeted FCM notifications to engage customers with promotions and order alerts." }
    ],
    pros: [
      "Direct hardware-level performance with zero abstraction penalty.",
      "Access to the massive Android user base dominating 95%+ of the Indian smartphone market.",
      "Rich support for enterprise device management (EDM) and retail kiosk configurations."
    ],
    cons: [
      "Device fragmentation across hundreds of screen sizes and manufacturer skins (MIUI, OneUI, etc.).",
      "Requires dedicated testing across low-end and high-end devices to ensure uniform speed."
    ],
    deliverables: "Fully signed production Android App Bundles (AAB), Play Console compliance audits, and Kiosk apps.",
    projects: ["Google Play Store Publishing Service", "Retail Counter Kiosk App", "Field Executive Geolocation Tracker"]
  },
  {
    slug: "swift-ios",
    name: "Swift / iOS",
    category: "Mobile Development",
    icon: "fa-brands fa-swift",
    color: "#f05138",
    tagline: "Premium, Ultra-Smooth Native Applications for the Apple Ecosystem",
    overview: "Swift delivers native iOS experiences for iPhone and iPad. ChittorTech architects premium consumer apps and executive dashboards using SwiftUI, ensuring silky smooth 120fps animations, Apple Pay integration, and strict App Store security compliance.",
    useCases: [
      { title: "Premium Consumer iOS Apps", desc: "E-commerce and booking applications designed specifically for high-income Apple users." },
      { title: "Executive Decision Dashboards", desc: "iPad dashboards for business owners to review real-time profit ledgers and sales." },
      { title: "Apple Pay & Wallet Integration", desc: "Seamless single-touch checkout flows and digital loyalty card storage." },
      { title: "High-Security Enterprise Apps", desc: "Biometric FaceID authentication and encrypted keychain storage for corporate data." }
    ],
    pros: [
      "Blistering native performance tailored to Apple's custom Silicon processors.",
      "Modern, declarative UI development with SwiftUI cuts iOS development timelines significantly.",
      "iOS users represent higher average order value (AOV) and subscription conversion rates."
    ],
    cons: [
      "Higher developer tool costs: requires macOS hardware for compilation and testing.",
      "Strict Apple App Store review guidelines with longer review turnaround times."
    ],
    deliverables: "SwiftUI native applications, TestFlight beta deployments, and App Store submission packages.",
    projects: ["Luxury Brand Storefront App", "Executive Sales Analytics iPad Suite", "Hotel Guest Concierge iOS App"]
  },
  {
    slug: "flutter",
    name: "Flutter",
    category: "Mobile Development",
    icon: "fa-solid fa-mobile-screen-button",
    color: "#02569b",
    tagline: "Single-Codebase Native Apps for Android, iOS & Web",
    overview: "Flutter by Google allows us to build pixel-perfect native mobile applications for both Android and iOS from a single codebase. ChittorTech uses Flutter to deliver cross-platform mobile apps in half the time and budget without compromising on 60fps performance.",
    useCases: [
      { title: "Cross-Platform Retail Apps", desc: "Single codebase powering customer ordering apps on both Play Store and App Store." },
      { title: "Field Agent & Service Apps", desc: "Offline-ready data collection apps for delivery personnel and maintenance technicians." },
      { title: "Real-Time Tracking & Delivery", desc: "Interactive map interfaces with real-time GPS fleet tracking and routing." },
      { title: "Unified Brand Experiences", desc: "Identical, pixel-perfect design system replicated exactly on Android and iOS." }
    ],
    pros: [
      "Build for Android and iOS simultaneously from a single Dart codebase, cutting costs by 45%.",
      "Skia/Impeller rendering engine draws its own pixels, guaranteeing identical UI across all devices.",
      "Hot Reload enables rapid design iteration and instant bug fixing during development."
    ],
    cons: [
      "Initial application package size (APK/IPA) is larger than pure bare-metal native apps.",
      "Very specialized native device SDKs may require writing custom platform channels."
    ],
    deliverables: "Production Flutter codebases, dual Android/iOS builds, and shared API integration layers.",
    projects: ["Mewari Achaar Mobile Ordering App", "Visit Chittorgarh Tourism Multiplatform App", "Service CRM Field App"]
  },
  {
    slug: "react-native",
    name: "React Native",
    category: "Mobile Development",
    icon: "fa-brands fa-react",
    color: "#61dafb",
    tagline: "Harness React Skills to Build Genuine Native Mobile Apps",
    overview: "React Native connects the power of React with true native mobile views. ChittorTech uses React Native to enable companies with existing web teams to share business logic, design tokens, and state management between their web dashboard and mobile app.",
    useCases: [
      { title: "Shared Web & Mobile Codebases", desc: "Reusing up to 70% of business logic between Next.js web portals and mobile apps." },
      { title: "E-Commerce Shopping Apps", desc: "High-speed shopping carts, push notification campaigns, and instant payment flows." },
      { title: "Social & Community Applications", desc: "Interactive feeds, image sharing, and instant messaging for community apps." },
      { title: "Rapid Mobile Prototyping", desc: "Deploying working mobile apps to testers within days using the Expo ecosystem." }
    ],
    pros: [
      "Enables high code reuse between React web applications and mobile mobile apps.",
      "Renders actual native platform controls, ensuring genuine OS look and feel.",
      "Massive community with battle-tested packages for almost every device feature."
    ],
    cons: [
      "Bridge architecture can cause performance bottlenecks in heavy 3D rendering or animations.",
      "Platform-specific styling differences still require occasional OS-level tweaking."
    ],
    deliverables: "React Native applications, shared web/mobile state packages, and OTA update pipelines.",
    projects: ["Community Booking Mobile App", "Affiliate Partner Mobile Dashboard", "Retail Customer Loyalty App"]
  },
  {
    slug: "expo-go",
    name: "Expo Go",
    category: "Mobile Development",
    icon: "fa-solid fa-mobile-screen",
    color: "#0f172a",
    tagline: "Streamlined Mobile Development & Over-The-Air Instant Updates",
    overview: "Expo streamlines React Native development, eliminating complex Xcode and Android Studio compilation hurdles. ChittorTech uses Expo to deliver rapid prototypes, push over-the-air (OTA) bug fixes without waiting for app store reviews, and manage automated EAS cloud builds.",
    useCases: [
      { title: "Rapid MVP Mobile Launches", desc: "Getting working mobile apps into client hands for testing in under 7 days." },
      { title: "Over-The-Air (OTA) Instant Patches", desc: "Fixing critical bugs instantly on users' devices without app store re-review." },
      { title: "Cloud EAS Build Pipelines", desc: "Automated cloud compilation generating signed release binaries without local Mac hardware." },
      { title: "Client Live Preview Demos", desc: "Clients scan a QR code on their own phone to instantly test the app in development." }
    ],
    pros: [
      "Dramatically reduces mobile app setup complexity and local toolchain maintenance.",
      "EAS Build and Submit automate the tedious process of publishing to Google Play and Apple App Store.",
      "Instant client preview via QR code accelerates user feedback and design validation."
    ],
    cons: [
      "Some highly custom native C++ libraries may require prebuilding via Expo Config Plugins.",
      "Slightly less low-level control compared to maintaining bare Android and iOS project folders."
    ],
    deliverables: "Expo EAS configured repositories, automated OTA update pipelines, and instant client demo QR links.",
    projects: ["Client Prototype Mobile Portals", "Rapid Store Demo Applications", "Internal Testing Mobile Suites"]
  },
  {
    slug: "php",
    name: "PHP",
    category: "Backend & APIs",
    icon: "fa-brands fa-php",
    color: "#777bb4",
    tagline: "The Proven Foundation of Modern Web Applications & E-Commerce",
    overview: "Modern PHP 8+ is fast, typed, and powers more than 75% of the web. ChittorTech leverages modern PHP for cost-effective server-rendered applications, WooCommerce custom plugins, legacy portal refactoring, and high-performance LAMP/LEMP stacks.",
    useCases: [
      { title: "Cost-Effective Web Hosting", desc: "Running business web portals on economical cloud servers with minimal memory." },
      { title: "Custom WooCommerce & WordPress Engines", desc: "Customizing checkout flows, payment gateways, and inventory sync hooks." },
      { title: "Legacy System Modernization", desc: "Refactoring and securing legacy PHP billing portals to modern security standards." },
      { title: "Rapid CRUD Web Portals", desc: "Fast-to-market backends for directories, classifieds, and catalog sites." }
    ],
    pros: [
      "Massive hosting compatibility and low operational server costs.",
      "PHP 8+ features JIT compilation, strict typing, and benchmark speeds matching Node.js.",
      "Unmatched global talent pool and thousands of production-ready packages."
    ],
    cons: [
      "Historic legacy code in the ecosystem gives it an outdated reputation if modern PHP 8 is not used.",
      "Not suited for long-lived socket connections without specialized servers like Swoole."
    ],
    deliverables: "Secure PHP 8 backends, custom WooCommerce extensions, and optimized database queries.",
    projects: ["Regional Business Directory Portal", "Custom E-Commerce Payment Gateway Plugin", "School Student Fee Management System"]
  },
  {
    slug: "laravel",
    name: "Laravel",
    category: "Backend & APIs",
    icon: "fa-brands fa-laravel",
    color: "#ff2d20",
    tagline: "The PHP Framework for Web Artisans & Rapid Business Software",
    overview: "Laravel provides an elegant, expressive MVC framework that makes building complex web applications a joy. ChittorTech builds enterprise CRM portals, multi-tenant subscription software, and robust REST APIs with Laravel's built-in authentication, queue management, and Eloquent ORM.",
    useCases: [
      { title: "Multi-Tenant SaaS Platforms", desc: "Database-isolated software serving hundreds of business clients securely." },
      { title: "Enterprise CRM Systems", desc: "Lead pipeline tracking, automatic email/WhatsApp notifications, and team permissions." },
      { title: "Complex Invoicing & Billing Portals", desc: "Automated monthly recurring billing, GST invoices, and PDF generation." },
      { title: "Secure API Gateways", desc: "Sanctum and Passport token authentication for mobile app backends." }
    ],
    pros: [
      "Exceptional out-of-the-box feature set: Auth, Queues, Mail, Caching, and Validation built-in.",
      "Eloquent ORM provides the most elegant and readable database query syntax in the industry.",
      "Massive ecosystem tools like Laravel Horizon, Nova, and Telescope for monitoring."
    ],
    cons: [
      "Slightly heavier execution overhead compared to minimal microframeworks like FastAPI.",
      "Requires proper caching configuration (route, config, view) for optimal production speed."
    ],
    deliverables: "Production Laravel backends, automated queue workers, and role-based admin consoles.",
    projects: ["Enterprise CRM & Lead Routing Portal", "Multi-Tenant Dharamshala Billing SaaS", "Automated Recurring Billing Engine"]
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    category: "Databases & Vector DBs",
    icon: "fa-solid fa-leaf",
    color: "#47a248",
    tagline: "Flexible NoSQL Document Database for Fast-Evolving Schemas",
    overview: "MongoDB stores data in flexible, JSON-like BSON documents. ChittorTech deploys MongoDB for high-write logging systems, product catalogs with varying attributes (like garments, hardware, and cosmetics), and dynamic content management systems where rigid SQL tables cause bottlenecks.",
    useCases: [
      { title: "Dynamic Product Catalogs", desc: "Handling items with varying attributes (sizes, colors, specs) without complex SQL joins." },
      { title: "Real-Time Event & Chat Logging", desc: "Ingesting thousands of user activity logs, clickstreams, and chatbot conversations." },
      { title: "User Profile & Preference Storage", desc: "Storing nested JSON structures for customer preferences and application settings." },
      { title: "Geospatial Queries & Store Finders", desc: "Fast location-based queries to locate the nearest store or delivery hub." }
    ],
    pros: [
      "Schema flexibility allows data structures to evolve without blocking database migrations.",
      "Horizontal sharding and replica sets provide seamless horizontal scaling and high availability.",
      "Native aggregation pipeline allows powerful data transformation directly within the database."
    ],
    cons: [
      "Complex multi-document transactions consume more overhead than native relational databases.",
      "Requires careful index design to prevent unindexed full-collection memory scans."
    ],
    deliverables: "MongoDB Atlas production clusters, optimized compound indexes, and aggregation pipelines.",
    projects: ["Dynamic Retail Product Catalog", "AI Chatbot Conversation History Store", "Real-Time GPS Fleet Geolocation Store"]
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    category: "Databases & Vector DBs",
    icon: "fa-solid fa-database",
    color: "#4169e1",
    tagline: "The World's Most Advanced Open-Source Relational Database",
    overview: "PostgreSQL is our go-to database for enterprise workloads requiring absolute data integrity, ACID compliance, and advanced extensions like pgvector for AI search. We use PostgreSQL to power financial ledgers, inventory trackers, and high-concurrency relational systems.",
    useCases: [
      { title: "Financial Ledgers & Accounting", desc: "Strict double-entry bookkeeping ledgers where mathematical accuracy is critical." },
      { title: "Hybrid SQL + Vector AI Storage", desc: "Using the pgvector extension to store and search vector embeddings alongside relational data." },
      { title: "Multi-Table Inventory Systems", desc: "Relational tracking across suppliers, warehouses, batches, and retail counters." },
      { title: "JSONB Semi-Structured Data", desc: "Querying raw JSON payloads at relational speeds using native GIN indexes." }
    ],
    pros: [
      "Unrivaled data integrity, ACID compliance, and bulletproof transaction safety.",
      "Extensible with extensions like pgvector (vector search), PostGIS (spatial), and timescaledb.",
      "Native JSONB support bridges the gap between relational tables and document storage."
    ],
    cons: [
      "Requires careful tuning of vacuuming, shared buffers, and connection pooling (PgBouncer).",
      "Slightly more complex replication setup compared to native cloud document stores."
    ],
    deliverables: "Tuned PostgreSQL databases, normalized relational schemas, and pgvector semantic indexing.",
    projects: ["Enterprise Accounting Ledger Database", "RAG Vector AI Embedding Store", "Centralized Multi-Store Inventory Engine"]
  },
  {
    slug: "mysql",
    name: "MySQL",
    category: "Databases & Vector DBs",
    icon: "fa-solid fa-database",
    color: "#00758f",
    tagline: "High-Speed Relational Storage for Web Applications & E-Commerce",
    overview: "MySQL is the battle-tested workhorse powering millions of web platforms. ChittorTech deploys MySQL for retail POS databases, high-speed read-heavy web catalogs, and WordPress/WooCommerce backends, fine-tuning InnoDB buffer pools for sub-millisecond query responses.",
    useCases: [
      { title: "Retail Counter POS Systems", desc: "Handling fast barcode lookups and rapid billing transactions at cash counters." },
      { title: "E-Commerce Order Management", desc: "Reliable order processing, customer records, and product inventory tables." },
      { title: "Read-Heavy Content Portals", desc: "Serving millions of page views with optimized master-replica read distributions." },
      { title: "Legacy System Integration", desc: "Connecting custom modern web apps directly into existing client MySQL servers." }
    ],
    pros: [
      "Extremely fast read performance and low latency for standard relational queries.",
      "Ubiquitous support across all cloud providers, hosting environments, and monitoring tools.",
      "Proven reliability in production across the largest web companies in the world."
    ],
    cons: [
      "Less advanced JSON handling and analytic window functions compared to PostgreSQL.",
      "No native vector search extension; requires pairing with dedicated vector databases for AI."
    ],
    deliverables: "Optimized MySQL schemas, custom query index tuning, and automated replication backups.",
    projects: ["ChittorTech Retail POS Database", "Temple Billing Donation Records", "E-Commerce Customer Order Hub"]
  },
  {
    slug: "redis",
    name: "Redis",
    category: "Databases & Vector DBs",
    icon: "fa-solid fa-server",
    color: "#dc382d",
    tagline: "In-Memory Data Store for Sub-Millisecond Caching & Real-Time Queues",
    overview: "Redis operates entirely in system RAM, returning queries in microseconds. ChittorTech deploys Redis to cache database queries, manage user authentication sessions, handle rate limiting, and power high-throughput message brokers and background queues.",
    useCases: [
      { title: "Sub-Millisecond Query Caching", desc: "Caching repetitive SQL results to reduce database CPU loads by up to 80%." },
      { title: "Distributed User Session Storage", desc: "Maintaining persistent user logins across autoscaling server clusters." },
      { title: "High-Speed Rate Limiting", desc: "Protecting API endpoints and login forms against brute-force bot attacks." },
      { title: "Pub/Sub Real-Time Messaging", desc: "Broadcasting live notifications, inventory changes, and counter order updates." }
    ],
    pros: [
      "Blazing fast sub-millisecond response times because all data resides in RAM.",
      "Rich data structures: Strings, Hashes, Lists, Sets, Sorted Sets, and Streams.",
      "Built-in key expiration (TTL) eliminates manual cache garbage collection logic."
    ],
    cons: [
      "Data size is constrained by physical server RAM capacity, making large datasets costly.",
      "Data persistence is asynchronous; not intended as a primary ACID relational store."
    ],
    deliverables: "High-speed Redis cache layers, BullMQ asynchronous worker queues, and API rate-limiting rules.",
    projects: ["High-Concurrency API Cache Engine", "Background WhatsApp Notification Queue", "Distributed Session Authentication Hub"]
  },
  {
    slug: "pinecone-vector-db",
    name: "Pinecone Vector DB",
    category: "Databases & Vector DBs",
    icon: "fa-solid fa-brain",
    color: "#06b6d4",
    tagline: "Managed Vector Database Engineered for Enterprise AI & Semantic Search",
    overview: "Pinecone is a purpose-built cloud vector database that makes semantic similarity search instant. ChittorTech uses Pinecone to store and query high-dimensional embeddings for RAG (Retrieval-Augmented Generation) systems, enabling AI agents to search millions of corporate records in milliseconds.",
    useCases: [
      { title: "Enterprise RAG Systems", desc: "Searching millions of company PDFs and manuals by meaning rather than exact keywords." },
      { title: "AI Customer Support Bots", desc: "Retrieving the exact policy or product manual page needed to answer a customer question." },
      { title: "Semantic Recommendation Engines", desc: "Recommending relevant products based on conceptual similarity and user intent." },
      { title: "Duplicate Content Detection", desc: "Identifying plagiarism or duplicate customer tickets using cosine similarity matching." }
    ],
    pros: [
      "Fully serverless and managed: zero index tuning or infrastructure maintenance required.",
      "Ultra-low latency vector searches across billions of high-dimensional vectors.",
      "Built-in metadata filtering allows combining semantic search with strict category filters."
    ],
    cons: [
      "Cloud-hosted proprietary service: requires active internet connectivity and monthly SaaS pricing.",
      "Not designed for traditional relational transactional queries."
    ],
    deliverables: "Serverless Pinecone vector indexes, automated embedding upsert pipelines, and hybrid search filters.",
    projects: ["Enterprise Policy Q&A Knowledge Engine", "Retail Semantic Product Search", "Automated Legal Document Parser"]
  },
  {
    slug: "openai-gpt4",
    name: "OpenAI GPT-4",
    category: "AI & Machine Learning",
    icon: "fa-solid fa-robot",
    color: "#10a37f",
    tagline: "State-of-the-Art Generative Intelligence for Business Automation",
    overview: "OpenAI GPT-4 represents the frontier of natural language reasoning. ChittorTech integrates GPT-4 into client operations to build conversational digital coworkers, automated document summarizers, multilingual customer agents, and autonomous operational decision engines.",
    useCases: [
      { title: "24/7 Conversational AI Agents", desc: "Handling complex customer inquiries, lead qualification, and appointment booking." },
      { title: "Document Analysis & Extraction", desc: "Extracting invoice numbers, line items, and tax totals from scanned receipts." },
      { title: "Multilingual Indian Language Support", desc: "Interacting naturally in Hindi, English, Gujarati, and regional dialects." },
      { title: "Code & Logic Generation", desc: "Automating structured JSON creation and business report generation." }
    ],
    pros: [
      "Unmatched reasoning ability and understanding of complex, nuanced user instructions.",
      "Handles long context windows allowing complete business manuals to be processed at once.",
      "Supports structured JSON mode and function calling for seamless integration into software APIs."
    ],
    cons: [
      "Requires internet API calls with usage-based token costs.",
      "Requires strict system prompt engineering and guardrails to prevent hallucinations."
    ],
    deliverables: "Custom system prompts, function-calling agent pipelines, and secure prompt-injection defenses.",
    projects: ["ChittorTech AI Customer Concierge", "Automated Invoice OCR Extractor", "Multilingual WhatsApp Lead Agent"]
  },
  {
    slug: "tensorflow",
    name: "TensorFlow",
    category: "AI & Machine Learning",
    icon: "fa-solid fa-diagram-project",
    color: "#ff6f00",
    tagline: "End-to-End Open-Source Machine Learning Platform",
    overview: "Developed by Google, TensorFlow is an end-to-end framework for training and deploying deep learning models. ChittorTech deploys TensorFlow and TensorFlow Lite for computer vision quality inspection on factory floors, mobile on-device object detection, and custom neural networks.",
    useCases: [
      { title: "Industrial Quality Inspection", desc: "Camera-based detection of surface defects on manufactured marble and tiles." },
      { title: "On-Device Mobile Vision (TFLite)", desc: "Real-time barcode, QR, and document scanning inside offline mobile apps." },
      { title: "Predictive Machine Maintenance", desc: "Analyzing industrial sensor vibrations to predict factory machinery failure." },
      { title: "Custom Classification Models", desc: "Categorizing thousands of incoming support tickets and customer documents." }
    ],
    pros: [
      "Production-ready deployment pipelines with TensorFlow Serving and TFLite for edge devices.",
      "Exceptional tooling with TensorBoard for visualizing training performance and losses.",
      "Backed by Google with extensive hardware acceleration support for Google TPUs and GPUs."
    ],
    cons: [
      "Steeper learning curve and more boilerplate compared to PyTorch.",
      "Less intuitive debugging compared to dynamic imperative frameworks."
    ],
    deliverables: "Trained TensorFlow models, TFLite mobile models, and industrial vision defect detectors.",
    projects: ["Marble Slab Defect Computer Vision System", "Mobile Fast-Scan Barcode Engine", "Predictive Factory Sensor Monitor"]
  },
  {
    slug: "pytorch",
    name: "PyTorch",
    category: "AI & Machine Learning",
    icon: "fa-solid fa-fire",
    color: "#ee4c2c",
    tagline: "The Preferred Deep Learning Framework for Researchers & AI Innovators",
    overview: "PyTorch offers dynamic computation graphs and clean Pythonic syntax, making it the top choice for modern generative AI and LLM fine-tuning. ChittorTech uses PyTorch to train proprietary domain-specific models, fine-tune open-source LLMs (like LLaMA and Mistral), and develop custom embeddings.",
    useCases: [
      { title: "Open-Source LLM Fine-Tuning", desc: "Fine-tuning LLaMA, Mistral, and Gemma on proprietary company datasets." },
      { title: "Custom Text Embedding Models", desc: "Training specialized embedding vectors tuned for Indian business terminology." },
      { title: "Audio & Speech Recognition", desc: "Deploying Whisper speech-to-text models for customer call center transcription." },
      { title: "Computer Vision & OCR", desc: "Training custom OCR engines to recognize handwritten regional Indian invoices." }
    ],
    pros: [
      "Dynamic computation graphs (eager mode) make building and debugging models intuitive.",
      "The dominant framework in cutting-edge AI research: 80%+ of HuggingFace models are built in PyTorch.",
      "Seamless integration with modern quantization frameworks like bitsandbytes and vLLM."
    ],
    cons: [
      "Historical deployment tooling was less unified than TensorFlow (mitigated by modern ONNX/TorchScript).",
      "Requires dedicated GPU hardware (NVIDIA CUDA) for efficient model training."
    ],
    deliverables: "Fine-tuned model weights, quantization pipelines (4-bit/8-bit), and vLLM inference servers.",
    projects: ["Custom Indian Accounting LLM Fine-Tune", "Call Center Hindi-English Voice Transcriber", "Handwritten Invoice OCR Engine"]
  },
  {
    slug: "graphql",
    name: "GraphQL",
    category: "Backend & APIs",
    icon: "fa-solid fa-diagram-next",
    color: "#e10098",
    tagline: "Precise, Flexible Data Querying Without Over-Fetching",
    overview: "GraphQL allows frontends to request exactly the data they need and nothing more. ChittorTech designs GraphQL schemas for multi-screen applications and mobile apps, eliminating multiple round-trip API calls and dramatically speeding up mobile performance on slow network connections.",
    useCases: [
      { title: "Multi-Screen Dashboard APIs", desc: "Single endpoint serving different data shapes to mobile, tablet, and desktop views." },
      { title: "Complex Nested Data Fetching", desc: "Retrieving customer orders, shipping details, and invoice items in a single query." },
      { title: "Real-Time Subscriptions", desc: "Pushing live order status updates and chat messages to clients over websockets." },
      { title: "Unified Microservice Aggregator", desc: "Presenting multiple backend microservices behind a unified GraphQL gateway." }
    ],
    pros: [
      "Completely prevents over-fetching and under-fetching of data, cutting network payload sizes.",
      "Strongly typed schema acts as a living, self-documenting contract between frontend and backend.",
      "Built-in introspection powers interactive GraphQL playground tools for rapid testing."
    ],
    cons: [
      "More complex HTTP caching compared to standard REST URLs.",
      "Requires query complexity depth-limiting to prevent malicious clients from executing expensive queries."
    ],
    deliverables: "Strictly typed GraphQL schemas, Apollo Server/Client integrations, and query depth protections.",
    projects: ["Unified Multi-Store Analytics API", "Real-Time POS Order Subscription Engine", "Mobile App Single-Query Data Layer"]
  },
  {
    slug: "socket-io",
    name: "Socket.IO",
    category: "Backend & APIs",
    icon: "fa-solid fa-bolt",
    color: "#0f172a",
    tagline: "Low-Latency, Bidirectional Real-Time Communication",
    overview: "Socket.IO enables real-time, event-based bidirectional communication between web browsers and servers. ChittorTech uses Socket.IO to build instant kitchen order displays (KOT), live fleet location trackers, real-time counter stock alerts, and customer support chat channels.",
    useCases: [
      { title: "Kitchen Order Ticketing (KOT)", desc: "Instant order firing from restaurant table tablets directly to kitchen screens." },
      { title: "Live Fleet & Delivery Tracking", desc: "Streaming vehicle GPS coordinates to customer tracking maps with zero lag." },
      { title: "Real-Time Stock Depletion Alerts", desc: "Notifying all cash counters immediately when an inventory item sells out." },
      { title: "Live Customer Support Chat", desc: "Instant typing indicators, read receipts, and message delivery in web chats." }
    ],
    pros: [
      "Automatic fallback from WebSockets to HTTP long-polling if restrictive firewalls block sockets.",
      "Built-in reconnection logic, room broadcasting, and namespace isolation.",
      "Extremely low latency and minimal bandwidth consumption for high-frequency events."
    ],
    cons: [
      "Requires persistent stateful connections, necessitating sticky sessions in multi-server clusters.",
      "Higher memory consumption per concurrent active connection compared to raw stateless REST."
    ],
    deliverables: "Production Socket.IO clusters with Redis adapters, custom room broadcasters, and client hooks.",
    projects: ["Restaurant Real-Time Kitchen Screen System", "Live Store Multi-Counter Sync", "Customer Live Support Chat Hub"]
  },
  {
    slug: "aws-cloud",
    name: "AWS Cloud",
    category: "Cloud & DevOps",
    icon: "fa-brands fa-aws",
    color: "#ff9900",
    tagline: "The World's Most Comprehensive & Resilient Cloud Infrastructure",
    overview: "Amazon Web Services (AWS) provides the global cloud foundation for enterprise scale. ChittorTech architects secure, highly available AWS environments using EC2, S3, RDS, Lambda, and CloudFront, ensuring 99.99% uptime and enterprise-grade data sovereignty.",
    useCases: [
      { title: "High-Availability Web Hosting", desc: "Autoscaling server clusters distributed across multiple availability zones." },
      { title: "Secure Cloud Storage & CDN", desc: "Storing millions of media assets on S3 and delivering via CloudFront edge locations." },
      { title: "Managed Relational Databases (RDS)", desc: "Automated daily backups, multi-AZ failovers, and read replicas for PostgreSQL and MySQL." },
      { title: "Serverless Event Processing", desc: "Running event-driven AWS Lambda functions for background image optimization and reports." }
    ],
    pros: [
      "Industry-standard reliability with 99.99% uptime SLAs across global data centers.",
      "Comprehensive enterprise security certifications (ISO 27001, SOC 2, HIPAA, PCI-DSS).",
      "Vast suite of over 200 fully managed cloud services covering databases, storage, and AI."
    ],
    cons: [
      "Complex billing and pricing tiers requiring continuous cost optimization and budget alerts.",
      "Steep learning curve and security configuration complexity (IAM roles, VPC subnets)."
    ],
    deliverables: "Terraform/CloudFormation architectures, hardened VPC security groups, and automated S3 backup lifecycles.",
    projects: ["Enterprise ERP Cloud Infrastructure", "Global Fast-Asset CDN Pipeline", "High-Availability Managed Database Cluster"]
  },
  {
    slug: "google-cloud",
    name: "Google Cloud",
    category: "Cloud & DevOps",
    icon: "fa-brands fa-google-cloud",
    color: "#4285f4",
    tagline: "Cutting-Edge AI Infrastructure, Big Data Analytics & Kubernetes",
    overview: "Google Cloud Platform (GCP) delivers world-leading infrastructure for big data, containerized microservices, and AI models. ChittorTech uses GCP's Vertex AI, BigQuery, and Google Kubernetes Engine (GKE) to execute complex data analytics and scale enterprise AI models.",
    useCases: [
      { title: "Vertex AI & Foundation Models", desc: "Deploying and fine-tuning Google's Gemini models for enterprise applications." },
      { title: "BigQuery Enterprise Analytics", desc: "Running SQL queries over terabytes of retail sales data in seconds." },
      { title: "Google Kubernetes Engine (GKE)", desc: "Orchestrating containerized enterprise microservices with automated node scaling." },
      { title: "Google Workspace & Auth Integration", desc: "Single Sign-On (SSO) and automated data sync with Google Sheets and Drive." }
    ],
    pros: [
      "Unmatched big data analytical power with BigQuery's serverless architecture.",
      "Best-in-class Kubernetes hosting on GKE, where Kubernetes was originally conceived.",
      "Premier AI ecosystem with seamless access to Google's specialized TPU hardware."
    ],
    cons: [
      "Slightly smaller corporate enterprise ecosystem footprint compared to AWS in legacy sectors.",
      "Rapidly evolving product naming and interface updates require continuous administrative review."
    ],
    deliverables: "GKE cluster deployments, BigQuery analytical schemas, and Vertex AI enterprise pipelines.",
    projects: ["Retail Multi-Store Analytics Pipeline", "Enterprise SSO Authentication Gateway", "Custom Computer Vision Pipeline"]
  },
  {
    slug: "microsoft-azure",
    name: "Microsoft Azure",
    category: "Cloud & DevOps",
    icon: "fa-brands fa-microsoft",
    color: "#0089d6",
    tagline: "Enterprise Cloud Tailored for Corporate IT & Microsoft Ecosystems",
    overview: "Microsoft Azure is the enterprise cloud of choice for corporations running Active Directory, Windows Server, and Office 365. ChittorTech deploys Azure for enterprise corporate clients requiring strict compliance, enterprise SSO integration, and private Azure OpenAI deployments.",
    useCases: [
      { title: "Private Azure OpenAI Deployments", desc: "Hosting GPT-4 inside enterprise private virtual networks with zero public data sharing." },
      { title: "Active Directory & SSO", desc: "Seamless corporate employee authentication across enterprise internal tools." },
      { title: "Hybrid On-Premise Cloud", desc: "Connecting physical factory on-premise servers to cloud analytics using Azure Arc." },
      { title: "Enterprise SQL Server Hosting", desc: "Managed Azure SQL databases with automated threat detection and performance tuning." }
    ],
    pros: [
      "Unbeatable integration with existing corporate Microsoft licenses, Active Directory, and Windows tools.",
      "Premier enterprise privacy guarantees for AI models via Azure OpenAI Service.",
      "Strong hybrid cloud capabilities connecting physical on-premise servers to cloud storage."
    ],
    cons: [
      "Interface and documentation can be dense and corporate-heavy compared to minimalist cloud providers.",
      "Pricing for enterprise licensing tiers can be high for early-stage startups."
    ],
    deliverables: "Private Azure OpenAI deployments, Active Directory RBAC configurations, and Azure App Service hosting.",
    projects: ["Corporate Private AI Knowledge Engine", "Hybrid Factory Synchronization Gateway", "Enterprise Azure SQL Database"]
  },
  {
    slug: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    icon: "fa-brands fa-docker",
    color: "#2496ed",
    tagline: "Containerization for Predictable, Identical Deployments Anywhere",
    overview: "Docker packages code and its dependencies into lightweight, self-contained containers. ChittorTech utilizes Docker to eliminate 'it works on my machine' issues, ensuring that our development, staging, and production environments run identically across all cloud servers.",
    useCases: [
      { title: "Consistent Development Environments", desc: "Onboarding engineers in minutes with pre-configured multi-container Docker Compose stacks." },
      { title: "Microservice Isolation", desc: "Running Python AI workers, Node.js APIs, and databases independently without port conflicts." },
      { title: "CI/CD Automated Testing", desc: "Spinning up isolated test containers during automated GitHub Actions builds." },
      { title: "Rapid Cloud Migration", desc: "Moving containerized workloads between AWS, GCP, and on-premise servers with zero code changes." }
    ],
    pros: [
      "Complete environment isolation guarantees software runs identically on every computer.",
      "Significantly lighter and faster to boot than traditional hardware virtual machines (VMs).",
      "Massive Docker Hub repository with pre-configured official base images for every language."
    ],
    cons: [
      "Requires careful multi-stage build optimization to prevent bloated image file sizes.",
      "Managing persistent storage volumes across container restarts requires disciplined volume mounting."
    ],
    deliverables: "Optimized multi-stage Dockerfiles, Docker Compose production templates, and minimal container images.",
    projects: ["Containerized Enterprise ERP Stack", "AI Inference Microservice Container", "Automated CI/CD Testing Container Pipeline"]
  },
  {
    slug: "kubernetes",
    name: "Kubernetes",
    category: "Cloud & DevOps",
    icon: "fa-solid fa-dharmachakra",
    color: "#326ce5",
    tagline: "Automated Container Orchestration, Self-Healing & Autoscaling",
    overview: "Kubernetes (K8s) automates the deployment, scaling, and management of containerized applications. ChittorTech architects Kubernetes clusters for high-traffic enterprise systems, ensuring zero-downtime rolling updates, automatic node recovery, and horizontal pod autoscaling.",
    useCases: [
      { title: "Autoscaling Web Traffic", desc: "Automatically scaling API pods from 2 to 50 during flash sales and marketing spikes." },
      { title: "Zero-Downtime Rolling Deployments", desc: "Deploying updates without dropping a single user connection or interrupting billing." },
      { title: "Self-Healing Infrastructure", desc: "Automatically restarting crashed service pods and redirecting traffic to healthy nodes." },
      { title: "Multi-Cloud Load Balancing", desc: "Distributing traffic intelligently across distributed microservices." }
    ],
    pros: [
      "The undisputed global standard for high-scale enterprise container orchestration.",
      "Automated self-healing, rolling updates, and dynamic resource autoscaling.",
      "Declarative YAML manifests provide full infrastructure-as-code tracking in Git."
    ],
    cons: [
      "High operational complexity requiring experienced DevOps engineers to manage.",
      "Overkill for small single-server websites or simple static applications."
    ],
    deliverables: "Production Helm charts, Kubernetes deployment manifests, and autoscaling HPA configurations.",
    projects: ["Multi-Tenant Retail SaaS Cluster", "Zero-Downtime Payment Gateway Engine", "Distributed AI Inference Fleet"]
  },
  {
    slug: "github",
    name: "GitHub",
    category: "Cloud & DevOps",
    icon: "fa-brands fa-github",
    color: "#181717",
    tagline: "The World's Leading Code Collaboration & CI/CD Platform",
    overview: "GitHub is the central nervous system of our software engineering lifecycle. ChittorTech uses GitHub for version control, collaborative code reviews, automated CI/CD deployment workflows (GitHub Actions), and security vulnerability scanning.",
    useCases: [
      { title: "Automated CI/CD Deployments", desc: "Building, testing, and deploying websites to Firebase and cloud hosts on every git push." },
      { title: "Strict Code Review Workflows", desc: "Enforcing pull request peer reviews and automated linting before code enters production." },
      { title: "Dependency Vulnerability Audits", desc: "Dependabot alerts automatically detecting security vulnerabilities in third-party packages." },
      { title: "Issue & Sprint Tracking", desc: "Managing agile sprint deliverables, bug tickets, and feature milestones." }
    ],
    pros: [
      "Industry standard code repository platform with unmatched integration ecosystem.",
      "Powerful GitHub Actions automation workflows handle builds, tests, and deployments for free/cheap.",
      "Comprehensive branch protection rules safeguard production code against unauthorized edits."
    ],
    cons: [
      "Public repositories require strict secret-scanning to prevent accidental exposure of API keys.",
      "Advanced enterprise security features require paid GitHub Enterprise tiers."
    ],
    deliverables: "Production GitHub Actions workflows, branch protection rules, and automated release tags.",
    projects: ["ChittorTech Automated Firebase Merge Pipeline", "Multi-Project Client Source Control", "Automated Linting & Test Matrix"]
  },
  {
    slug: "gitlab",
    name: "GitLab",
    category: "Cloud & DevOps",
    icon: "fa-brands fa-gitlab",
    color: "#fc6d26",
    tagline: "Complete DevSecOps Lifecycle Platform for Private Enterprise Teams",
    overview: "GitLab provides an all-in-one DevSecOps platform with deep CI/CD pipelines, container registries, and self-hosting options. ChittorTech deploys GitLab for government, banking, and private enterprise clients who demand 100% on-premise source code control.",
    useCases: [
      { title: "Self-Hosted Private Code Storage", desc: "Running on private corporate servers to satisfy strict data sovereignty laws." },
      { title: "End-to-End DevSecOps Pipelines", desc: "Static application security testing (SAST) and license compliance checks built-in." },
      { title: "Internal Container Registries", desc: "Storing and versioning proprietary Docker container images securely." },
      { title: "Agile Project Portfolios", desc: "Epics, roadmaps, and issue boards for multi-department software initiatives." }
    ],
    pros: [
      "Complete single-application platform covering planning, code, CI/CD, and security.",
      "Can be completely self-hosted on private company hardware for absolute privacy.",
      "Extremely powerful built-in CI/CD pipeline syntax with native Kubernetes integration."
    ],
    cons: [
      "Self-hosted instances require dedicated sysadmin maintenance and server resources.",
      "Interface is feature-dense and can feel overwhelming for non-technical team members."
    ],
    deliverables: "Private GitLab CI/CD configurations, automated SAST security pipelines, and self-hosted runners.",
    projects: ["On-Premise Banking Source Control", "Government Data Portal CI/CD", "Private Enterprise Code Registry"]
  },
  {
    slug: "vs-code",
    name: "VS Code",
    category: "Design & Tools",
    icon: "fa-solid fa-laptop-code",
    color: "#007acc",
    tagline: "The Modern Developer's High-Velocity Integrated Environment",
    overview: "Visual Studio Code is our primary software craftsmanship cockpit. With customized linting, TypeScript typing, and AI copilot extensions, ChittorTech engineers write ultra-clean, standardized, and bug-free code at maximum development velocity.",
    useCases: [
      { title: "Standardized Team Code Quality", desc: "Shared workspace settings and Prettier/ESLint configs for uniform code styling." },
      { title: "Remote Server Development", desc: "Editing and debugging code running directly on remote cloud VMs via SSH." },
      { title: "Integrated Full-Stack Debugging", desc: "Setting breakpoints across client Next.js and backend Node.js runtimes simultaneously." },
      { title: "AI-Augmented Engineering", desc: "Accelerating repetitive boilerplate generation and refactoring using AI extensions." }
    ],
    pros: [
      "Extremely fast and lightweight compared to heavy traditional IDEs.",
      "Massive extension marketplace supporting every modern programming language and framework.",
      "Seamless integration with Git, integrated terminals, and remote SSH servers."
    ],
    cons: [
      "Can become sluggish if overloaded with dozens of unmonitored third-party extensions.",
      "Requires initial configuration of launch.json and settings.json for advanced debugging."
    ],
    deliverables: "Team workspace configurations, standardized linting rules, and remote development environments.",
    projects: ["ChittorTech Core Development Stack", "Standardized Team Code Standards Suite", "Remote Cloud Debugging Configs"]
  },
  {
    slug: "vercel",
    name: "Vercel",
    category: "Cloud & DevOps",
    icon: "fa-solid fa-play",
    color: "#0f172a",
    tagline: "The Native Global Edge Platform for Next.js & Serverless Web",
    overview: "Created by the creators of Next.js, Vercel is the gold standard for deploying full-stack web applications. ChittorTech uses Vercel for instant Git-integrated deployments, global Edge network caching, serverless API execution, and real-time Core Web Vitals monitoring.",
    useCases: [
      { title: "Instant Global Edge Deployments", desc: "Deploying production updates with 0ms downtime via automated git integrations." },
      { title: "Edge Function Execution", desc: "Executing geolocation routing and A/B testing at the closest edge server to the user." },
      { title: "Automatic Preview Environments", desc: "Generating a live preview URL for every single pull request for instant client review." },
      { title: "Real-Time Web Vitals Analytics", desc: "Monitoring real-world user page speed and First Contentful Paint (FCP) metrics." }
    ],
    pros: [
      "The native home of Next.js with automatic zero-configuration optimizations.",
      "Global Edge Network ensures sub-second page loads anywhere in the world.",
      "Automatic preview deployments transform client approval and feedback cycles."
    ],
    cons: [
      "Serverless execution time limits (e.g. 10-60s) require offloading long background tasks.",
      "Bandwidth and serverless function invocations can become costly for massive video streaming."
    ],
    deliverables: "Production Vercel deployments, custom domain SSL routing, and Edge middleware rules.",
    projects: ["Client Web Application Showcase", "Instant Pull-Request Preview Suite", "Edge Geolocation Redirect Hub"]
  },
  {
    slug: "figma",
    name: "Figma",
    category: "Design & Tools",
    icon: "fa-brands fa-figma",
    color: "#f24e1e",
    tagline: "Collaborative UI/UX Design Systems & High-Fidelity Prototyping",
    overview: "Figma is where every ChittorTech project begins. We design pixel-perfect, accessible design systems, interactive mobile prototypes, and responsive UI components in Figma before writing a single line of code, ensuring clients approve the exact look and feel first.",
    useCases: [
      { title: "Interactive Client Prototypes", desc: "Clickable mobile and desktop mockups that allow clients to test user flows before coding." },
      { title: "Design System & Component Libraries", desc: "Standardized typography, color palettes, spacing tokens, and button states." },
      { title: "Responsive Layout Specifications", desc: "Auto-layout designs that show developers exactly how screens adapt to mobile devices." },
      { title: "Live Client Design Reviews", desc: "Collaborative design workshops where clients comment and review mockups in real-time." }
    ],
    pros: [
      "Cloud-based collaboration: multiple designers and clients can review and comment in real-time.",
      "Auto-layout mirrors modern CSS Flexbox, making design-to-code translation effortless.",
      "Extensive component variant system ensures design consistency across hundreds of screens."
    ],
    cons: [
      "Requires constant internet connectivity to work with team files.",
      "Very heavy files with thousands of raster images can consume significant browser memory."
    ],
    deliverables: "Complete Figma design files, clickable client prototypes, and exported SVG design tokens.",
    projects: ["ChittorTech Modern Design System", "Mewari Achaar Mobile App UX Blueprint", "Retail POS Cashier Interface Mockup"]
  },
  {
    slug: "tailwind-css",
    name: "Tailwind CSS",
    category: "Frontend & Web",
    icon: "fa-brands fa-css3",
    color: "#38bdf8",
    tagline: "Utility-First CSS Framework for Rapid, Custom & Maintainable Styling",
    overview: "Tailwind CSS revolutionizes styling by providing composable utility classes directly in your markup. ChittorTech uses Tailwind CSS to build bespoke, highly custom user interfaces without writing thousands of lines of disjointed CSS stylesheets.",
    useCases: [
      { title: "Rapid Custom UI Development", desc: "Styling modern components directly in JSX without context-switching to CSS files." },
      { title: "Consistent Spacing & Color Scales", desc: "Restricting designs to harmonious mathematical scales for margins, padding, and text." },
      { title: "Dark Mode Implementations", desc: "Simple 'dark:' class prefixes enabling instant theme toggles across all components." },
      { title: "Zero Dead CSS in Production", desc: "Purging unused classes to produce production stylesheets smaller than 10KB." }
    ],
    pros: [
      "Production stylesheets are ultra-compact (typically under 12KB) regardless of site size.",
      "Eliminates the mental overhead of inventing hundreds of custom class names.",
      "Encourages component-driven design where styles are co-located with HTML structure."
    ],
    cons: [
      "Initial HTML markup can appear cluttered with multiple utility classes.",
      "Requires learning Tailwind's specific class abbreviations and utility syntax."
    ],
    deliverables: "Tailwind configuration files, custom color tokens, and optimized production CSS bundles.",
    projects: ["ChittorTech Premium Product Interface", "Retail Dashboard UI Framework", "Client Landing Page Suite"]
  },
  {
    slug: "bootstrap",
    name: "Bootstrap",
    category: "Frontend & Web",
    icon: "fa-brands fa-bootstrap",
    color: "#7952b3",
    tagline: "Battle-Tested Responsive Grid & Universal Component Framework",
    overview: "Bootstrap is the world's most proven responsive web framework. ChittorTech uses Bootstrap's 12-column flexbox grid, accessible modals, and offcanvas navigation menus to guarantee rock-solid stability and flawless mobile responsiveness across diverse devices.",
    useCases: [
      { title: "12-Column Responsive Grid Layouts", desc: "Predictable, fluid column arrangements across mobile, tablet, and desktop." },
      { title: "Accessible UI Components", desc: "Pre-tested dropdowns, collapse accordions, modals, and carousel sliders." },
      { title: "Admin Portal Backbones", desc: "Rapidly structured enterprise dashboard tables, forms, and input groups." },
      { title: "Universal Legacy Compatibility", desc: "Ensuring broad compatibility with older browsers still used by government portals." }
    ],
    pros: [
      "World-class 12-column responsive grid system that handles complex layouts effortlessly.",
      "Huge library of ready-to-use accessible components (modals, tooltips, accordions).",
      "Extremely well documented and familiar to virtually every web developer worldwide."
    ],
    cons: [
      "Default components have a recognizable 'Bootstrap look' unless heavily customized.",
      "Includes unused utility classes unless compiled from custom SCSS modules."
    ],
    deliverables: "Customized Bootstrap 5 templates, responsive grid structures, and accessible modal dialogs.",
    projects: ["ChittorTech Global Grid System", "Dharamshala Booking Form Dialogs", "Enterprise Admin Grid Architecture"]
  },
  {
    slug: "lottie-animations",
    name: "Lottie Animations",
    category: "Design & Tools",
    icon: "fa-solid fa-film",
    color: "#00dab6",
    tagline: "Lightweight, Vector-Based 60fps Micro-Animations for the Web",
    overview: "Lottie parses Adobe After Effects animations exported as JSON and renders them natively on mobile and web. ChittorTech uses Lottie to add engaging, lightweight micro-animations — checkmarks, loading states, and hero illustrations — at a fraction of the file size of GIFs or videos.",
    useCases: [
      { title: "Interactive Success Animations", desc: "Delightful animated checkmarks on successful order placement and form submissions." },
      { title: "Engaging Empty State Graphics", desc: "Animated illustrations for empty shopping carts and zero search results." },
      { title: "Micro-Interaction Feedback", desc: "Subtle animated icons that react dynamically to user clicks and hover gestures." },
      { title: "Brand Identity Storytelling", desc: "Animated hero process diagrams that illustrate how software systems operate." }
    ],
    pros: [
      "Vector-based scalability: looks crisp on 4K Retina screens without pixelation.",
      "Up to 600% smaller file size compared to heavy animated GIFs or MP4 videos.",
      "Can be dynamically controlled via code: play, pause, reverse, and speed adjustments."
    ],
    cons: [
      "Requires specialized design tools (After Effects / Bodymovin) to author custom animations.",
      "Complex animations with thousands of vector points can cause CPU spikes on low-end phones."
    ],
    deliverables: "Optimized Lottie JSON assets, interactive player integrations, and responsive animation triggers.",
    projects: ["Lead Submission Success Animation", "Interactive AI Chatbot Avatar", "Homepage Hero Dynamic Micro-Elements"]
  },
  {
    slug: "postman",
    name: "Postman",
    category: "Design & Tools",
    icon: "fa-solid fa-paper-plane",
    color: "#ff6c37",
    tagline: "API Engineering, Automated Contract Testing & Documentation Hub",
    overview: "Postman is our core tool for designing, testing, and documenting APIs. ChittorTech builds comprehensive Postman collections with automated test scripts, mock servers, and interactive API documentation to ensure backend endpoints are bulletproof before frontend integration.",
    useCases: [
      { title: "Automated API Contract Testing", desc: "Verifying that API endpoints return correct HTTP status codes, schemas, and data types." },
      { title: "Client API Documentation", desc: "Generating interactive, runnable API documentation for third-party developer integrations." },
      { title: "Environment Variable Management", desc: "Switching seamlessly between Local, Staging, and Production API environments." },
      { title: "Automated Regression Test Suites", desc: "Running Newman CLI collections inside CI/CD pipelines to catch breaking API changes." }
    ],
    pros: [
      "Simplifies API testing and debugging with visual request builders and history logs.",
      "Automated test assertions with Chai.js verify response times and JSON payload integrity.",
      "Interactive collections allow clients to test endpoints without writing any code."
    ],
    cons: [
      "Desktop application can consume significant RAM with dozens of open tabs.",
      "Team collaboration features require paid cloud workspace tiers for large teams."
    ],
    deliverables: "Published Postman API collections, automated Newman CI test suites, and environment files.",
    projects: ["WhatsApp Lead API Postman Suite", "POS Billing API Test Collection", "External Partner Integration Hub"]
  },
  {
    slug: "fastapi",
    name: "FastAPI",
    category: "Backend & APIs",
    icon: "fa-solid fa-bolt",
    color: "#059669",
    tagline: "High-Performance Python Web Framework for AI APIs & Async Workloads",
    overview: "FastAPI is a modern, high-speed Python web framework built on Starlette and Pydantic. ChittorTech uses FastAPI to serve custom AI models, RAG search endpoints, and high-concurrency microservices, delivering asynchronous throughput on par with NodeJS and Go.",
    useCases: [
      { title: "High-Speed AI Model Serving", desc: "Exposing custom PyTorch and OpenAI AI pipelines via asynchronous REST endpoints." },
      { title: "Automatic OpenAPI & Swagger Docs", desc: "Generating live interactive API documentation with zero extra documentation code." },
      { title: "Strict Data Validation (Pydantic)", desc: "Validating incoming JSON payloads automatically with clear error feedback." },
      { title: "High-Concurrency Async Endpoints", desc: "Handling thousands of simultaneous streaming connections using Python's asyncio." }
    ],
    pros: [
      "One of the fastest Python frameworks available, matching NodeJS and Go in benchmarks.",
      "Automatic interactive documentation (Swagger UI / ReDoc) generated directly from type hints.",
      "Seamless integration with Python's AI/ML ecosystem (PyTorch, HuggingFace, LangChain)."
    ],
    cons: [
      "Requires disciplined asynchronous programming (async/await) to avoid blocking the event loop.",
      "Smaller monolithic ecosystem than Django (requires pairing with external libraries for ORM and Auth)."
    ],
    deliverables: "Production FastAPI microservices, Swagger interactive API docs, and Docker deployment configs.",
    projects: ["ChittorTech AI Semantic Search API", "Real-Time Document Extraction Microservice", "High-Speed Predictive Analytics Gateway"]
  }
];

// Verify 44 items
console.log(`Total Technologies to Write: ${TECH_CATALOG.length}`);

// Write to src/data/technologies.json
fs.writeFileSync('src/data/technologies.json', JSON.stringify(TECH_CATALOG, null, 2), 'utf8');
console.log(`Successfully generated src/data/technologies.json with ${TECH_CATALOG.length} items!`);
