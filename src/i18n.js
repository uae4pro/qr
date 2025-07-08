import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      pricing: "Pricing",
      login: "Login",
      getStarted: "Get Started Now",
      
      // Hero Section
      heroTitle: "Launch Your Digital Menu Now",
      heroSubtitle: "Transform to the world of digital hospitality and get rid of traditional menu hassles with an interactive digital menu that supports receiving orders directly, and provides you with a flexible control panel for editing and changing anytime, anywhere.",
      startFree: "Get Your Menu Now for Free",
      viewDemo: "View Demo Menu",
      
      // Trust Section
      trustTitle: "Trusted by hundreds of customers worldwide",
      
      // Features
      featuresTitle: "Features",
      
      // Feature 1
      feature1Title: "Control Your Appearance",
      feature1Description: "Customize your visual identity by changing colors, logo, and cover, and connect with different social media platforms. The cover allows you to display images for a new product or support specific discount campaigns, and create suitable ways for you to display. You can also customize the menu display in different languages such as Arabic, English and Turkish.",
      
      // Feature 2
      feature2Title: "Full Control of Sections and Items",
      feature2Description: "Add sections and control their order to appear in the menu to make it easier for users to reach their order, add items with complete flexibility and ease and control prices, descriptions and attached images. You can also hide items from the menu if they are not available or expired.",
      
      // Feature 3
      feature3Title: "Track Orders Easily",
      feature3Description: "Receive your customers' orders easily from the table, for pickup or delivery, with the ability to track the status of each order and update it directly, in addition to receiving order notifications on your number via WhatsApp to ensure a smooth management experience.",
      
      // Feature 4
      feature4Title: "Analytics to Track Growth",
      feature4Description: "To track your growth, we have monitored visits to you, your sections and your products so that you can develop and follow up continuously, and improve based on numbers.",
      
      // Feature 5
      feature5Title: "QR Code and Custom Link",
      feature5Description: "Get your custom code so you can place it on your restaurant tables or next to the cashier, and own your custom link to make it easier for your customers to access while ordering from different social media platforms.",
      
      // Pricing
      pricingTitle: "Choose the perfect package to manage your menu professionally!",
      monthly: "Monthly",
      yearly: "Yearly",
      twoMonthsFree: "Two months free",
      
      // Starter Package
      starterTitle: "Starter Package",
      starterPrice: "Free",
      starterFeatures: {
        items: "Ability to add 15 items",
        sections: "Ability to add 5 sections",
        social: "Control social media links",
        noAds: "No ads included",
        analytics: "Advanced analytics",
        seo: "SEO optimization",
        multiView: "Multiple display modes",
        multiLang: "Multiple languages",
        about: "About us",
        hours: "Working hours",
        reviews: "Reviews",
        orders: "Order system through menu",
        tables: "Table management"
      },
      
      // Basic Package
      basicTitle: "Basic Package",
      basicPrice: "$59 annually",
      basicPriceMonthly: "$5.9 monthly",
      basicSavings: "Two months free compared to monthly payment! ≈ Save $11.8",
      
      // Premium Package
      premiumTitle: "Premium Package",
      premiumPrice: "$99 annually",
      premiumPriceMonthly: "$9.9 monthly",
      premiumSavings: "Two months free compared to monthly payment! ≈ Save $19.8",
      mostPopular: "Most Popular",
      unlimited: "Unlimited",
      
      // CTA
      ctaTitle: "Get Your Electronic Menu Now for Free",
      ctaSubtitle: "Contact us and transform to the world of digital hospitality, launch to make the experience easier for your customers and increase your sales",
      
      // Footer
      allRightsReserved: "All rights reserved to QR Menu © 2025",
      
      // Form Labels
      restaurantName: "Restaurant Name",
      ownerName: "Owner Name",
      email: "Email",
      phone: "Phone Number",
      submit: "Submit",
      
      // Success Messages
      successTitle: "Success!",
      successMessage: "Your information has been submitted successfully. We will contact you soon to set up your digital menu.",
      
      // Language Toggle
      language: "Language",
      arabic: "العربية",
      english: "English"
    }
  },
  ar: {
    translation: {
      // Navigation
      home: "الرئيسية",
      pricing: "الأسعار",
      login: "دخول",
      getStarted: "ابدأ الآن",
      
      // Hero Section
      heroTitle: "اطلق المنيو الرقمي الآن",
      heroSubtitle: "تحوّل لعالم الضيافة الرقمية وتخلص من هموم المنيو التقليدي مع منيو رقمي تفاعلي يدعم استقبال الطلبات مباشرة، ويوفر لك لوحة تحكم مرنة للتعديل والتغيير في أي وقت ومن أي مكان.",
      startFree: "امتلك منيو الآن مجاناً",
      viewDemo: "معاينة المنيو التجريبي",
      
      // Trust Section
      trustTitle: "حصلنا على ثقة المئات من العملاء حول العالم",
      
      // Features
      featuresTitle: "المميزات",
      
      // Feature 1
      feature1Title: "تحكم بشكل ظهورك",
      feature1Description: "خصص الهوية البصرية من خلال تغيير الألوان، والشعار، والغلاف، وقم بالربط مع وسائل التواصل الاجتماعي المختلفة. يمكنك الغلاف من عرض صور لمنتج جديد أو دعم حملة تخفيضات معينة، وابتكر الطرق المناسبة لك للعرض. كما يمكنك تخصيص عرض المنيو بلغات مختلفة مثل العربية، الإنجليزية والتركية.",
      
      // Feature 2
      feature2Title: "تحكم بالكامل بالأقسام والعناصر",
      feature2Description: "قم باضافة الاقسام والتحكم بترتيبها لتظهر بالقائمة تسهل على المستخدم الوصول لطلبه، اضف العناصر بكل مرونة وسهولة وتحكم بالأسعار، الاوصاف والصور المرفقة. يمكنك أيضاً اخفاء عناصر عن القائمة في حال عدم توفرها او انتهاء صلاحيتها.",
      
      // Feature 3
      feature3Title: "تابع الطلبات بسهولة",
      feature3Description: "استقبل طلبات عملائك بسهولة من الطاولة أو للاستلام أو للتوصيل، مع إمكانية متابعة حالة كل طلب وتحديثها مباشرة، بالإضافة إلى استلام إشعارات الطلب على رقمك عبر الواتساب لضمان تجربة إدارة سلسة.",
      
      // Feature 4
      feature4Title: "احصائيات لمتابعة النمو",
      feature4Description: "من اجل متابعة نموك قمنا برصد الزيارات لك ولاقسامك ومنتجاتك لتتمكن من التطوير والمتابعة المستمرة، والتحسين بناء على الأرقام.",
      
      // Feature 5
      feature5Title: "Qr كود ورابط مخصص",
      feature5Description: "احصل على الرمز المخصص لتتمكن من وضعه على طاولات مطعمك او بجانب الكاشير، وامتلك رابطك المخصص لتسهل الوصول لعملائك اثناء طلبهم من منصات التواصل الاجتماعي المختلفة.",
      
      // Pricing
      pricingTitle: "اختر الباقة المثالية لإدارة قائمتك باحترافية!",
      monthly: "شهرياً",
      yearly: "سنوياً",
      twoMonthsFree: "شهرين مجاناً",
      
      // Starter Package
      starterTitle: "باقة الانطلاق",
      starterPrice: "مجاناً",
      starterFeatures: {
        items: "امكانية اضافة 15 عنصر",
        sections: "امكانية اضافة 5 أقسام",
        social: "التحكم بروابط التواصل الاجتماعي",
        noAds: "لا تتضمن إعلانات",
        analytics: "احصائيات متقدمة",
        seo: "تحسين ظهور محركات البحث",
        multiView: "تعدد طرق العرض",
        multiLang: "تعدد اللغات",
        about: "نبذة عنا",
        hours: "أوقات العمل",
        reviews: "التقييمات",
        orders: "نظام الطلبات من خلال القائمة",
        tables: "إدارة الطاولات"
      },
      
      // Basic Package
      basicTitle: "الباقة الأساسية",
      basicPrice: "59$ سنوياً",
      basicPriceMonthly: "5.9$ شهرياً",
      basicSavings: "شهرين مجانًا مقارنة بالدفع الشهري! ≈ وفر 11.8$",
      
      // Premium Package
      premiumTitle: "باقة التميز",
      premiumPrice: "99$ سنوياً",
      premiumPriceMonthly: "9.9$ شهرياً",
      premiumSavings: "شهرين مجانًا مقارنة بالدفع الشهري! ≈ وفر 19.8$",
      mostPopular: "الأكثر طلباً",
      unlimited: "عدد لا نهائي",
      
      // CTA
      ctaTitle: "احصل الآن على المنيو الإلكتروني مجاناً",
      ctaSubtitle: "تواصل معنا وتحول لعالم الضيافة الرقمية، انطلق لتسهل التجربة لعملائك وتزيد من مبيعاتك",
      
      // Footer
      allRightsReserved: "جميع الحقوق محفوظة لـ QR Menu © 2025",
      
      // Form Labels
      restaurantName: "اسم المطعم",
      ownerName: "اسم المالك",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      submit: "إرسال",
      
      // Success Messages
      successTitle: "تم بنجاح!",
      successMessage: "تم إرسال معلوماتك بنجاح. سنتواصل معك قريباً لإعداد منيوك الرقمي.",
      
      // Language Toggle
      language: "اللغة",
      arabic: "العربية",
      english: "English"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
