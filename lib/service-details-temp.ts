export interface ServiceDetail {
  id: string;
  slug: string;
  whatIs: {
    en: string;
    ar: string;
  };
  whyNeed: {
    en: string[];
    ar: string[];
  };
  howWeDo: {
    en: { step: string; description: string }[];
    ar: { step: string; description: string }[];
  };
  faqs: {
    en: { question: string; answer: string }[];
    ar: { question: string; answer: string }[];
  };
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "web-development": {
    id: "web-development",
    slug: "web-development",
    whatIs: {
      en: "Web development is the process of creating powerful, scalable, and responsive websites and web applications that drive your business forward. We use cutting-edge technologies like Next.js, React, and Node.js to build solutions that are fast, secure, and user-friendly.",
      ar: "تطوير الويب هو عملية إنشاء مواقع وتطبيقات ويب قوية وقابلة للتوسع ومتجاوبة تدفع عملك للأمام. نستخدم أحدث التقنيات مثل Next.js و React و Node.js لبناء حلول سريعة وآمنة وسهلة الاستخدام.",
    },
    whyNeed: {
      en: [
        "Your website is often the first impression customers have of your business. A professional, modern website builds trust and credibility.",
        "In today's digital world, customers expect seamless online experiences. Without a strong web presence, you're losing potential customers to competitors.",
        "A well-built website works 24/7 as your best salesperson, generating leads and converting visitors into customers even while you sleep.",
        "Modern web applications can automate business processes, saving you time and money while improving efficiency.",
      ],
      ar: [
        "موقعك الإلكتروني غالباً ما يكون أول انطباع لدى العملاء عن عملك. موقع احترافي وحديث يبني الثقة والمصداقية.",
        "في عالم اليوم الرقمي، يتوقع العملاء تجارب سلسة عبر الإنترنت. بدون حضور قوي على الويب، تخسر عملاء محتملين لصالح المنافسين.",
        "الموقع المبني جيداً يعمل على مدار الساعة كأفضل بائع لك، ويولد عملاء محتملين ويحول الزوار إلى عملاء حتى أثناء نومك.",
        "تطبيقات الويب الحديثة يمكنها أتمتة العمليات التجارية، مما يوفر لك الوقت والمال مع تحسين الكفاءة.",
      ],
    },
    howWeDo: {
      en: [
        {
          step: "Discovery & Planning",
          description: "We start by understanding your business goals, target audience, and unique requirements. We create a detailed project roadmap and wireframes.",
        },
        {
          step: "Design & Prototyping",
          description: "Our designers create beautiful, intuitive interfaces that align with your brand. You'll see interactive prototypes before development begins.",
        },
        {
          step: "Development",
          description: "Our developers build your website using modern technologies, ensuring it's fast, secure, and scalable. We follow best practices and clean code standards.",
        },
        {
          step: "Testing & Quality Assurance",
          description: "We rigorously test every feature across devices and browsers to ensure flawless performance and user experience.",
        },
        {
          step: "Launch & Support",
          description: "We handle the deployment and provide ongoing support to ensure your website continues to perform optimally.",
        },
      ],
      ar: [
        {
          step: "الاكتشاف والتخطيط",
          description: "نبدأ بفهم أهداف عملك والجمهور المستهدف والمتطلبات الفريدة. نقوم بإنشاء خريطة طريق مفصلة للمشروع وإطارات سلكية.",
        },
        {
          step: "التصميم والنماذج الأولية",
          description: "يقوم مصممونا بإنشاء واجهات جميلة وبديهية تتماشى مع علامتك التجارية. سترى نماذج أولية تفاعلية قبل بدء التطوير.",
        },
        {
          step: "التطوير",
          description: "يقوم مطورونا ببناء موقعك باستخدام تقنيات حديثة، مع ضمان أن يكون سريعاً وآمناً وقابلاً للتوسع. نتبع أفضل الممارسات ومعايير الكود النظيف.",
        },
        {
          step: "الاختبار وضمان الجودة",
          description: "نختبر كل ميزة بدقة عبر الأجهزة والمتصفحات لضمان أداء مثالي وتجربة مستخدم.",
        },
        {
          step: "الإطلاق والدعم",
          description: "نتعامل مع النشر ونقدم دعماً مستمراً لضمان استمرار موقعك في الأداء بشكل مثالي.",
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "How long does it take to build a website?",
          answer: "Timeline varies based on complexity. A basic website takes 2-4 weeks, while a complex web application can take 2-6 months. We provide a detailed timeline during the planning phase.",
        },
        {
          question: "What technologies do you use?",
          answer: "We use modern, industry-standard technologies like Next.js, React, TypeScript, Node.js, and cloud platforms like Vercel and AWS. We choose the best tech stack for your specific needs.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely! All our websites are fully responsive and optimized for all devices - desktop, tablet, and mobile. We follow a mobile-first approach to ensure the best experience on all screen sizes.",
        },
        {
          question: "Can you help with content and SEO?",
          answer: "Yes! We can assist with content strategy and implement SEO best practices to help your website rank better in search engines. We also offer ongoing SEO services.",
        },
        {
          question: "What if I need changes after launch?",
          answer: "We provide ongoing support and maintenance packages. You can request updates, add new features, or make changes anytime. We're here to help your website grow with your business.",
        },
        {
          question: "Do you provide hosting?",
          answer: "Yes, we offer reliable hosting solutions with SSL certificates, automatic backups, and 24/7 monitoring. We can also work with your existing hosting provider if preferred.",
        },
      ],
      ar: [
        {
          question: "كم من الوقت يستغرق بناء موقع ويب؟",
          answer: "يختلف الجدول الزمني بناءً على التعقيد. الموقع الأساسي يستغرق 2-4 أسابيع، بينما تطبيق الويب المعقد يمكن أن يستغرق 2-6 أشهر. نقدم جدولاً زمنياً مفصلاً خلال مرحلة التخطيط.",
        },
        {
          question: "ما هي التقنيات التي تستخدمونها؟",
          answer: "نستخدم تقنيات حديثة ومعايير صناعية مثل Next.js و React و TypeScript و Node.js ومنصات سحابية مثل Vercel و AWS. نختار أفضل مجموعة تقنية لاحتياجاتك المحددة.",
        },
        {
          question: "هل سيكون موقعي متوافقاً مع الأجهزة المحمولة؟",
          answer: "بالتأكيد! جميع مواقعنا متجاوبة تماماً ومحسّنة لجميع الأجهزة - سطح المكتب والكمبيوتر اللوحي والهاتف المحمول. نتبع نهج الهاتف المحمول أولاً لضمان أفضل تجربة على جميع أحجام الشاشات.",
        },
        {
          question: "هل يمكنكم المساعدة في المحتوى وتحسين محركات البحث؟",
          answer: "نعم! يمكننا المساعدة في استراتيجية المحتوى وتنفيذ أفضل ممارسات SEO لمساعدة موقعك على الترتيب بشكل أفضل في محركات البحث. نقدم أيضاً خدمات SEO مستمرة.",
        },
        {
          question: "ماذا لو احتجت إلى تغييرات بعد الإطلاق؟",
          answer: "نقدم حزم دعم وصيانة مستمرة. يمكنك طلب تحديثات أو إضافة ميزات جديدة أو إجراء تغييرات في أي وقت. نحن هنا لمساعدة موقعك على النمو مع عملك.",
        },
        {
          question: "هل تقدمون الاستضافة؟",
          answer: "نعم، نقدم حلول استضافة موثوقة مع شهادات SSL ونسخ احتياطية تلقائية ومراقبة على مدار الساعة. يمكننا أيضاً العمل مع موفر الاستضافة الحالي الخاص بك إذا كنت تفضل ذلك.",
        },
      ],
    },
  },
  "custom-systems": {
    id: "custom-systems",
    slug: "custom-systems",
    whatIs: {
      en: "Custom systems development means building tailored software solutions designed specifically for your business needs. Unlike off-the-shelf software, custom systems are built to match your exact workflows, integrate with your existing tools, and scale with your growth.",
      ar: "تطوير الأنظمة المخصصة يعني بناء حلول برمجية مصممة خصيصاً لاحتياجات عملك. على عكس البرامج الجاهزة، الأنظمة المخصصة مبنية لتتناسب مع سير عملك بالضبط، وتتكامل مع أدواتك الحالية، وتتوسع مع نموك.",
    },
    whyNeed: {
      en: [
        "Generic software forces you to adapt your business to its limitations. Custom systems adapt to YOUR business processes.",
        "Automation of repetitive tasks saves countless hours and reduces human error, allowing your team to focus on high-value work.",
        "Custom integrations connect all your tools and data sources, eliminating manual data entry and streamlining workflows.",
        "As your business grows, custom systems can evolve with you - adding features and scaling capacity as needed.",
      ],
      ar: [
        "البرامج العامة تجبرك على تكييف عملك مع قيودها. الأنظمة المخصصة تتكيف مع عمليات عملك.",
        "أتمتة المهام المتكررة توفر ساعات لا حصر لها وتقلل من الأخطاء البشرية، مما يسمح لفريقك بالتركيز على العمل ذي القيمة العالية.",
        "التكاملات المخصصة تربط جميع أدواتك ومصادر بياناتك، مما يلغي إدخال البيانات يدوياً ويبسط سير العمل.",
        "مع نمو عملك، يمكن للأنظمة المخصصة أن تتطور معك - بإضافة ميزات وتوسيع القدرة حسب الحاجة.",
      ],
    },
    howWeDo: {
      en: [
        {
          step: "Process Analysis",
          description: "We analyze your current workflows, identify pain points, and map out how a custom system can improve efficiency.",
        },
        {
          step: "System Design",
          description: "We design the system architecture, database structure, and user interfaces tailored to your needs.",
        },
        {
          step: "Agile Development",
          description: "We build the system in sprints, delivering working features regularly so you can see progress and provide feedback.",
        },
        {
          step: "Integration",
          description: "We connect your new system with existing tools, databases, and third-party services to create a seamless ecosystem.",
        },
        {
          step: "Training & Support",
          description: "We train your team on using the system and provide ongoing support to ensure smooth operations.",
        },
      ],
      ar: [
        {
          step: "تحليل العملية",
          description: "نحلل سير عملك الحالي، ونحدد نقاط الضعف، ونخطط كيف يمكن لنظام مخصص تحسين الكفاءة.",
        },
        {
          step: "تصميم النظام",
          description: "نصمم هندسة النظام وبنية قاعدة البيانات وواجهات المستخدم المصممة حسب احتياجاتك.",
        },
        {
          step: "التطوير السريع",
          description: "نبني النظام في سباقات سريعة، ونقدم ميزات عمل بانتظام حتى تتمكن من رؤية التقدم وتقديم التعليقات.",
        },
        {
          step: "التكامل",
          description: "نربط نظامك الجديد بالأدوات وقواعد البيانات والخدمات الخارجية الموجودة لإنشاء نظام بيئي سلس.",
        },
        {
          step: "التدريب والدعم",
          description: "ندرب فريقك على استخدام النظام ونقدم دعماً مستمراً لضمان عمليات سلسة.",
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "How much does custom software cost?",
          answer: "Cost varies based on complexity and features. Simple systems start around $10k-$20k, while complex enterprise solutions can be $50k+. We provide detailed quotes after understanding your needs.",
        },
        {
          question: "How long does development take?",
          answer: "Simple systems take 2-3 months, moderate complexity 3-6 months, and complex systems 6-12+ months. We use agile development so you see working features throughout the process.",
        },
        {
          question: "Can you integrate with our existing systems?",
          answer: "Yes! We specialize in creating integrations with virtually any system - CRMs, ERPs, payment processors, APIs, and databases.",
        },
        {
          question: "What happens after launch?",
          answer: "We offer maintenance and support packages to handle updates, bug fixes, and new features. We're here for the long term as your business partner.",
        },
      ],
      ar: [
        {
          question: "كم تكلفة البرامج المخصصة؟",
          answer: "التكلفة تختلف بناءً على التعقيد والميزات. الأنظمة البسيطة تبدأ من حوالي 10 ألف دولار إلى 20 ألف دولار، بينما الحلول المؤسسية المعقدة يمكن أن تكون أكثر من 50 ألف دولار. نقدم عروض أسعار مفصلة بعد فهم احتياجاتك.",
        },
        {
          question: "كم من الوقت يستغرق التطوير؟",
          answer: "الأنظمة البسيطة تستغرق 2-3 أشهر، والتعقيد المتوسط 3-6 أشهر، والأنظمة المعقدة 6-12+ شهراً. نستخدم التطوير السريع حتى ترى ميزات العمل طوال العملية.",
        },
        {
          question: "هل يمكنكم التكامل مع أنظمتنا الحالية؟",
          answer: "نعم! نحن متخصصون في إنشاء تكاملات مع أي نظام تقريباً - CRMs و ERPs ومعالجات الدفع و APIs وقواعد البيانات.",
        },
        {
          question: "ماذا يحدث بعد الإطلاق؟",
          answer: "نقدم حزم صيانة ودعم للتعامل مع التحديثات وإصلاح الأخطاء والميزات الجديدة. نحن هنا على المدى الطويل كشريك تجاري لك.",
        },
      ],
    },
  },
  "cybersecurity-solutions": {
    id: "cybersecurity-solutions",
    slug: "cybersecurity-solutions",
    whatIs: {
      en: "Cybersecurity is the practice of protecting your digital assets, sensitive data, and IT infrastructure from cyber threats, unauthorized access, and malicious attacks. Our comprehensive security solutions combine advanced technologies, expert analysis, and proactive monitoring to safeguard your business from evolving cyber risks including ransomware, data breaches, phishing attacks, and insider threats.",
      ar: "الأمن السيبراني هو ممارسة حماية أصولك الرقمية والبيانات الحساسة والبنية التحتية لتكنولوجيا المعلومات من التهديدات السيبرانية والوصول غير المصرح به والهجمات الخبيثة. تجمع حلول الأمان الشاملة لدينا بين التقنيات المتقدمة والتحليل الخبير والمراقبة الاستباقية لحماية عملك من المخاطر السيبرانية المتطورة بما في ذلك برامج الفدية واختراقات البيانات وهجمات التصيد والتهديدات الداخلية.",
    },
    whyNeed: {
      en: [
        "Cyber attacks are increasing in frequency and sophistication. A single data breach can cost your business millions in financial losses, legal fees, and reputational damage.",
        "Customer trust is everything. Protecting client data and maintaining privacy compliance (GDPR, PCI DSS) is not optional—it's essential for business survival.",
        "Downtime from cyber attacks can halt your operations completely. Every minute offline means lost revenue, productivity, and customer confidence.",
        "Regulatory requirements mandate strong security measures. Non-compliance can result in hefty fines, legal consequences, and loss of business licenses.",
        "Your competitors are investing in cybersecurity. Falling behind in security makes you an easy target and gives competitors a strategic advantage.",
        "Remote work and cloud adoption have expanded your attack surface. Traditional security perimeters no longer exist—you need modern protection.",
      ],
      ar: [
        "تتزايد الهجمات السيبرانية في التكرار والتعقيد. يمكن أن يكلف اختراق بيانات واحد عملك ملايين الخسائر المالية والرسوم القانونية والأضرار التي تلحق بالسمعة.",
        "ثقة العميل هي كل شيء. حماية بيانات العملاء والحفاظ على الامتثال للخصوصية (GDPR، PCI DSS) ليس اختيارياً - إنه ضروري لبقاء الأعمال.",
        "التوقف عن العمل بسبب الهجمات السيبرانية يمكن أن يوقف عملياتك تماماً. كل دقيقة دون اتصال تعني خسارة الإيرادات والإنتاجية وثقة العملاء.",
        "تفرض المتطلبات التنظيمية تدابير أمنية قوية. عدم الامتثال يمكن أن يؤدي إلى غرامات باهظة وعواقب قانونية وفقدان تراخيص العمل.",
        "منافسوك يستثمرون في الأمن السيبراني. التخلف عن الركب في الأمن يجعلك هدفاً سهلاً ويمنح المنافسين ميزة استراتيجية.",
        "العمل عن بُعد واعتماد السحابة قد وسّعا سطح الهجوم الخاص بك. محيطات الأمان التقليدية لم تعد موجودة - تحتاج إلى حماية حديثة.",
      ],
    },
    howWeDo: {
      en: [
        {
          step: "Security Assessment & Risk Analysis",
          description: "We begin with a comprehensive security audit of your systems, networks, and applications. Our experts identify vulnerabilities, assess risks, and map your current security posture against industry standards.",
        },
        {
          step: "Threat Modeling & Strategy Development",
          description: "Based on your specific business context, we develop a tailored security strategy. We identify your most valuable assets, potential threat actors, and likely attack vectors to prioritize protection efforts.",
        },
        {
          step: "Implementation & Hardening",
          description: "We deploy security solutions including firewalls, intrusion detection systems, encryption, access controls, and endpoint protection. We harden configurations and close security gaps throughout your infrastructure.",
        },
        {
          step: "Penetration Testing & Validation",
          description: "Our ethical hackers simulate real-world attacks to test your defenses. We identify weaknesses before malicious actors do and validate that security controls are working effectively.",
        },
        {
          step: "Monitoring & Incident Response",
          description: "We provide 24/7 security monitoring to detect threats in real-time. Our incident response team is ready to contain and remediate security incidents quickly, minimizing damage and downtime.",
        },
        {
          step: "Training & Continuous Improvement",
          description: "We train your team on security best practices and emerging threats. Security is an ongoing process—we continuously update defenses, conduct regular audits, and adapt to new threats.",
        },
      ],
      ar: [
        {
          step: "تقييم الأمن وتحليل المخاطر",
          description: "نبدأ بتدقيق أمني شامل لأنظمتك وشبكاتك وتطبيقاتك. يحدد خبراؤنا نقاط الضعف ويقيّمون المخاطر ويقارنون وضعك الأمني الحالي بمعايير الصناعة.",
        },
        {
          step: "نمذجة التهديدات وتطوير الاستراتيجية",
          description: "بناءً على سياق عملك المحدد، نطور استراتيجية أمنية مخصصة. نحدد أصولك الأكثر قيمة والجهات الفاعلة المحتملة للتهديد ونواقل الهجوم المحتملة لتحديد أولويات جهود الحماية.",
        },
        {
          step: "التنفيذ والتعزيز",
          description: "ننشر حلول الأمان بما في ذلك جدران الحماية وأنظمة كشف التطفل والتشفير وضوابط الوصول وحماية نقاط النهاية. نعزز التكوينات ونغلق الفجوات الأمنية في جميع أنحاء بنيتك التحتية.",
        },
        {
          step: "اختبار الاختراق والتحقق",
          description: "يحاكي قراصنتنا الأخلاقيون الهجمات الواقعية لاختبار دفاعاتك. نحدد نقاط الضعف قبل أن يفعل المهاجمون الضارون ونتحقق من أن ضوابط الأمان تعمل بفعالية.",
        },
        {
          step: "المراقبة والاستجابة للحوادث",
          description: "نوفر مراقبة أمنية على مدار الساعة لاكتشاف التهديدات في الوقت الفعلي. فريق الاستجابة للحوادث لدينا جاهز لاحتواء الحوادث الأمنية ومعالجتها بسرعة، مما يقلل الضرر والتوقف.",
        },
        {
          step: "التدريب والتحسين المستمر",
          description: "ندرب فريقك على أفضل ممارسات الأمان والتهديدات الناشئة. الأمن عملية مستمرة - نحدث الدفاعات باستمرار ونجري تدقيقات منتظمة ونتكيف مع التهديدات الجديدة.",
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "How much does cybersecurity cost?",
          answer: "Security investment varies based on your business size, industry, and risk profile. We offer flexible packages from basic protection for small businesses ($2,000-5,000) to enterprise solutions ($25,000+). Consider that the average data breach costs $4.45 million—prevention is far more affordable than recovery.",
        },
        {
          question: "Do I really need cybersecurity if I'm a small business?",
          answer: "Absolutely. 43% of cyber attacks target small businesses, and 60% of small companies go out of business within 6 months of a cyber attack. Small businesses are often targeted because they have weaker defenses but valuable data like customer information and financial records.",
        },
        {
          question: "What's the difference between penetration testing and vulnerability scanning?",
          answer: "Vulnerability scanning is automated and identifies known weaknesses. Penetration testing is manual, conducted by expert ethical hackers who simulate real attack scenarios, exploit vulnerabilities, and test your entire security posture. Pen testing is more comprehensive and finds complex issues automated tools miss.",
        },
        {
          question: "How quickly can you respond to a security incident?",
          answer: "Our incident response team operates 24/7/365 with initial response within 1 hour for critical incidents. For clients with managed security services, we often detect and contain threats before they cause damage. Response time is critical—every minute counts in stopping an attack.",
        },
        {
          question: "Will security measures slow down my systems?",
          answer: "Modern security solutions are designed for minimal performance impact. We optimize configurations to balance strong protection with system performance. In most cases, users won't notice any difference, and the protection is worth any minor overhead.",
        },
        {
          question: "What compliance standards can you help with?",
          answer: "We specialize in GDPR, PCI DSS, HIPAA, ISO 27001, SOC 2, and industry-specific regulations. We provide gap analysis, implementation roadmaps, documentation, and ongoing compliance monitoring to help you achieve and maintain certification.",
        },
      ],
      ar: [
        {
          question: "كم تكلف الأمن السيبراني؟",
          answer: "يختلف الاستثمار الأمني بناءً على حجم عملك والصناعة وملف المخاطر. نقدم حزماً مرنة من الحماية الأساسية للشركات الصغيرة (2,000-5,000 دولار) إلى حلول المؤسسات (25,000 دولار +). ضع في اعتبارك أن متوسط تكلفة اختراق البيانات 4.45 مليون دولار - الوقاية أرخص بكثير من التعافي.",
        },
        {
          question: "هل أحتاج حقاً للأمن السيبراني إذا كنت شركة صغيرة؟",
          answer: "بالتأكيد. 43٪ من الهجمات السيبرانية تستهدف الشركات الصغيرة، و 60٪ من الشركات الصغيرة تخرج من العمل في غضون 6 أشهر من الهجوم السيبراني. غالباً ما يتم استهداف الشركات الصغيرة لأن لديها دفاعات أضعف ولكن بيانات قيمة مثل معلومات العملاء والسجلات المالية.",
        },
        {
          question: "ما الفرق بين اختبار الاختراق ومسح الثغرات؟",
          answer: "مسح الثغرات تلقائي ويحدد نقاط الضعف المعروفة. اختبار الاختراق يدوي، يتم إجراؤه بواسطة قراصنة أخلاقيين خبراء يحاكون سيناريوهات هجوم حقيقية، ويستغلون الثغرات، ويختبرون وضعك الأمني بالكامل. اختبار الاختراق أكثر شمولاً ويجد مشكلات معقدة تفوتها الأدوات الآلية.",
        },
        {
          question: "ما مدى سرعة استجابتك لحادث أمني؟",
          answer: "يعمل فريق الاستجابة للحوادث لدينا على مدار الساعة طوال أيام الأسبوع مع استجابة أولية في غضون ساعة واحدة للحوادث الحرجة. بالنسبة للعملاء الذين لديهم خدمات أمنية مُدارة، غالباً ما نكتشف التهديدات ونحتويها قبل أن تسبب ضرراً. وقت الاستجابة حرج - كل دقيقة مهمة في إيقاف الهجوم.",
        },
        {
          question: "هل ستبطئ تدابير الأمان أنظمتي؟",
          answer: "حلول الأمان الحديثة مصممة لأدنى تأثير على الأداء. نقوم بتحسين التكوينات لتحقيق التوازن بين الحماية القوية وأداء النظام. في معظم الحالات، لن يلاحظ المستخدمون أي فرق، والحماية تستحق أي عبء بسيط.",
        },
        {
          question: "ما معايير الامتثال التي يمكنك المساعدة بها؟",
          answer: "نتخصص في GDPR و PCI DSS و HIPAA و ISO 27001 و SOC 2 واللوائح الخاصة بالصناعة. نقدم تحليل الفجوات وخرائط طريق التنفيذ والتوثيق والمراقبة المستمرة للامتثال لمساعدتك على تحقيق الشهادة والحفاظ عليها.",
        },
      ],
    },
  },
};
