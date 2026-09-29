# 🛡️ CYBERFORGE — 3D Red Team Academy & Interactive Learning Platform

<p align="center">
  <img src="https://img.shields.io/badge/CyberForge-3D%20Red%20Team%20Academy-00f3ff?style=for-the-badge&logo=shield&logoColor=white" alt="CyberForge 3D Academy"/>
  <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"/>
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TailwindCSS-v3-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Status-Live%20Ready-00ff88?style=for-the-badge" alt="Status"/>
</p>

---

## 🌟 نظرة عامة على المنصة (Project Vision)

منصة **CyberForge 3D Red Team Academy** ليست مجرد موقع أو رود ماب عادية، بل هي **أكاديمية وعالم سيبراني تفاعلي ثلاثي الأبعاد بالكامل** مبني بأحدث تقنيات الويب ثلاثي الأبعاد (`Three.js`, `WebGL`, `React`, `Tailwind CSS`).

تم تصميم المنصة لتأخذ المتعلمة (رقية وسام وكل باحث في مجال اختبار الاختراق) في **رحلة تفاعلية متكاملة (Interactive Cyber Journey)** عبر شخصية ثلاثية الأبعاد تفاعلية (**3D Female Cyber Operative Avatar**) تتحرك عبر **18 محطة وميداناً تكتيكياً**، وتغطي المسار من الصفر المطلق وحتى احتراف عمليات الريد تيم المتقدمة (Red Team Operations & Adversary Emulation).

---

## 🎮 المكونات الرئيسية للمنصة

### 1. العالم ثلاثي الأبعاد والأفاتار التفاعلية (`CyberWorld3D.jsx` + `CharacterModel.js`)
* **موديل ثلاثي الأبعاد كامل للأفاتار:** مجسم أنثوي تكتيكي عالي التفاصيل بدرع سيبراني، خوذة ذكية (Cyber Visor)، جهاز هولوجرام على المعصم، وطائرة مرافقة (Cyber Drone Companion).
* **نظام تحريك ديناميكي:** حركات تنفس (Idle)، مشي وركض طبيعي (Walk/Run)، كتابة هولوجرامية عند فتح المحطات (Hacking Pose).
* **تحكم مرن:**
  * **Click-to-Move:** انقر على أي محطة لتتحرك الأفاتار بسلاسة وتتجه نحوها.
  * **WASD / الأسهم:** تحكم يدوي حر في حركة الشخصية داخل العالم.
  * **وضعي كاميرا:** منظور الشخص الثالث (Third-Person Follow Cam) أو الرؤية التكتيكية الشاملة (Tactical Orbit Cam).

### 2. المنهج التعليمي المتعمق — 18 محطة تكتيكية (`stagesData.js`)
تم تقسيم المنهج إلى **8 مناطق تكتيكية (Themed Zones)** تضم **18 محطة تفصيلية لا تحتوي على أي اختصار سطحي**:
1. **قلعة التأسيس السيبراني (Foundations Citadel):**
   * المرحلة 1: مدخل الأمن السيبراني والأخلاقيات وقوانين الـ Red Team وثالوث CIA.
   * المرحلة 2: معمارية الحاسب وسجلات المعالج (Registers) ومخططات الذاكرة (Stack vs Heap).
   * المرحلة 3: بروتوكولات الشبكات، نموذج OSI، المصافحة الثلاثية (3-Way Handshake)، وتحليل الحزم بـ Wireshark.
2. **برج اللينكس والمختبرات الافتراضية (Terminal & Virtual Spire):**
   * المرحلة 4: احتراف لينكس، شجرة الملفات، الصلاحيات، SUID، والبرمجة بالباش (Bash Scripting).
   * المرحلة 5: معمارية المختبرات الافتراضية وعزل الشبكات (Type-1 vs Type-2 Hypervisors, NAT vs Host-Only).
   * المرحلة 6: التثبيت والتسليح الشامل لكالي لينكس (Bare Metal vs VM, Guest Additions, Repositories, Hardening).
3. **مخفر الاستطلاع والاستخبارات (Recon & Intelligence Outpost):**
   * المرحلة 7: الاستطلاع السلبي (OSINT) والنشط، واحتراف Nmap ومحرك سكربتات NSE ومحركات Shodan.
4. **حي أمن الويب والواجهات البرمجية (Web Security Neon District):**
   * المرحلة 8: معمارية الويب، ترويسات HTTP، الكوكيز، الجلسات، وتوكنز JWT، وأمن REST APIs.
   * المرحلة 9: الغوص العميق في ثغرات OWASP Top 10 (SQLi, XSS, IDOR, SSRF, CSRF, RCE) مع مقارنة الكود المصاب بالمرقع.
   * المرحلة 10: احتراف أداة Burp Suite (Proxy, Repeater, Intruder, Match & Replace, Extensions).
5. **ساحات التحدي والقتال العملي (Colosseum of Cyber Combat):**
   * المرحلة 11: مسارات التدريب المنهجي على TryHackMe (مسار Jr Penetration Tester خطوة بخطوة).
   * المرحلة 12: تحديات Hack The Box وماكينات Starting Point ومنهجيات الـ CTF.
6. **حصن أكتيف دايركتوري وتصعيد الصلاحيات (AD & Escalation Fortress):**
   * المرحلة 13: معمارية Active Directory، بروتوكول Kerberos، رسم المسارات بـ BloodHound، وهجمات Roasting.
   * المرحلة 14: تصعيد الصلاحيات في ويندوز (Unquoted Service Paths, SeImpersonatePrivilege, WinPEAS).
   * المرحلة 15: تصعيد الصلاحيات في لينكس (Sudo Rights, GTFOBins, Capabilities, Kernel Exploits, LinPEAS).
7. **ميدان معارك الريد تيم (Red Team Warfare & C2 Operations):**
   * المرحلة 16: محاكاة الخصوم المتقدمين، مصفوفة MITRE ATT&CK، خوادم القيادة والسيطرة (C2: Sliver & Havoc)، وهجمات SCADA/ICS.
8. **غرفة العمليات وكتابة التقارير (War Room & Executive Reporting):**
   * المرحلة 17: تقييم مخاطر الثغرات بنظام CVSS 3.1 & 4.0 وخطط الترقيع الهندسية (Remediation).
   * المرحلة 18: كتابة تقرير اختبار الاختراق الاحترافي (Executive Summary + Technical PoCs) ونصائح العرض الحي (Live Demo).

### 3. المختبرات التفاعلية والأدوات المدمجة
* **محاكي التيرمينال الحي (`InteractiveTerminal.jsx`):** تيرمينال كالي لينكس تفاعلي ينفذ أوامر `nmap`, `sqlmap`, `curl`, `whoami`, `ifconfig`, `scada-check` مع مخرجات واقعية ملونة.
* **معمل الثغرات OWASP Playground (`PayloadPlayground.jsx`):** تجربة حية لحقن الـ Payloads، استعراض ردود الخادم الافتراضية، ومقارنة الكود المصاب بالكود الآمن جنباً إلى جنب.
* **حاسبة CVSS 3.1 ومولد التقارير (`PentestReportBuilder.jsx`):** حاسبة معيارية للمقاييس (Attack Vector, Complexity, Impact) مع تصدير تقرير اختبار اختراق مهني بصيغة Markdown جاهزة للمناقشة.
* **بنية التحديث التلقائي للمصادر (`LiveFeedUpdater.jsx`):** ربط المنصة بمصادر التوثيق الرسمية لـ OWASP, MITRE ATT&CK, Kali Linux, TryHackMe, NIST لمنع تقادم المعلومات وتحديثها بضغطة زر.
* **مؤثرات صوتية سيبرانية (`AudioSynthesizer.js`):** محرك أصوات تفاعلية مدمج يعمل عبر Web Audio API دون أي ملفات خارجية.
* **نظام التقدّم وحفظ الإنجازات:** حفظ علامات التحقق (Checklists) في `localStorage` مع احتساب نقاط الخبرة (XP) ومستوى الرتبة التكتيكية (Level 1 Novice -> Level 18 Apex Operative).

---

## 🚀 تشغيل المنصة محلياً

المنصة تعمل ومبنية بالكامل! لتشغيلها في أي وقت:

```bash
cd "E:\roudmap for Red Teamer"
npm run dev
```

ثم افتح المتصفح على:
**http://localhost:3000**

---

*CyberForge Red Team Academy © 2026 — مصممة بكل فخر لرحلة التميز في الأمن السيبراني واختبار الاختراق.*
