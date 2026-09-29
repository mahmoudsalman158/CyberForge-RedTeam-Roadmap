import React, { useState } from 'react';
import { OWASP_VULNERABILITIES } from '../data/owaspVulnsData';
import { Bug, ShieldCheck, ShieldAlert, Play, Copy, Check, Terminal, Code2 } from 'lucide-react';
import { sound } from './AudioSynthesizer';

export default function PayloadPlayground() {
  const [selectedVulnId, setSelectedVulnId] = useState(OWASP_VULNERABILITIES[0].id);
  const [customPayload, setCustomPayload] = useState(OWASP_VULNERABILITIES[0].attackPayloads[0]);
  const [activeTab, setActiveTab] = useState('exploit'); // 'exploit', 'code', 'mitigation'
  const [simulatedResult, setSimulatedResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const currentVuln = OWASP_VULNERABILITIES.find(v => v.id === selectedVulnId) || OWASP_VULNERABILITIES[0];

  const handleSelectVuln = (vuln) => {
    sound.playSelect();
    setSelectedVulnId(vuln.id);
    setCustomPayload(vuln.attackPayloads[0]);
    setSimulatedResult(null);
  };

  const handleRunSimulation = () => {
    sound.playAccessGranted();
    let output = '';

    if (currentVuln.id === 'sqli') {
      output = `
[⚡ HTTP POST /login Response]
HTTP/1.1 200 OK
Set-Cookie: session_token=eyJhZG1pbiI6dHJ1ZX0...; Path=/; HttpOnly
Welcome, Administrator! You have bypassed password verification via:
SQL Query Executed: SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = '...'
[+] Exploit Succeeded! Dumped users table:
  1 | admin | $2b$12$e8vKk... (Hash extracted)
  2 | operator_scada | $2b$12$Z0yP...
`;
    } else if (currentVuln.id === 'xss') {
      output = `
[⚡ Simulated Browser Execution]
DOM Rendered HTML: <h1>Results for: ${customPayload}</h1>
[!] Alert Box Triggered in Victim's Browser:
    Window.alert("document.cookie: session_id=CYBERFORGE_SECRET_TOKEN_99182")
[+] Stored Cookie successfully exfiltrated to attacker C2 listener!
`;
    } else if (currentVuln.id === 'idor') {
      output = `
[⚡ HTTP GET /api/v1/invoice/102 Response]
HTTP/1.1 200 OK
{
  "invoice_id": 102,
  "client_name": "Defense Petrochem Industries",
  "total_amount": "$450,000.00",
  "iban": "EG8200000000192837465019",
  "secret_api_key": "sec_live_99fba081c2e441"
}
[!] Unauthorized access confirmed! Bypassed user access control list.
`;
    } else if (currentVuln.id === 'ssrf') {
      output = `
[⚡ Simulated AWS Metadata Response (169.254.169.254)]
HTTP/1.1 200 OK
{
  "Code": "Success",
  "AccessKeyId": "ASIAV4EXAMPLEKEY2026",
  "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "Token": "IQoJb3JpZ2luX2VjEEXAMPLE...",
  "Expiration": "2026-09-27T04:12:00Z"
}
[+] Leaked AWS IAM Role credentials! Lateral movement to cloud possible.
`;
    } else {
      output = `
[⚡ Simulated Remote Command Output]
Linux kali-industrial-worker 5.15.0-89-generic #99-Ubuntu SMP
uid=0(root) gid=0(root) groups=0(root)
[+] Command Execution Confirmed: Successfully spawned root reverse shell!
`;
    }

    setSimulatedResult(output.trim());
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    sound.playBlip(1000, 0.05);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-slate-950/80 border border-cyan-500/25 rounded-2xl p-6 backdrop-blur-xl">
      {/* Sidebar: Vulnerabilities Picker */}
      <div className="lg:w-1/3 flex flex-col gap-2">
        <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
          <Bug className="w-4 h-4" />
          <span>اختر الثغرة للتجربة العملية</span>
        </div>
        <div className="space-y-2">
          {OWASP_VULNERABILITIES.map((vuln) => {
            const isSelected = vuln.id === selectedVulnId;
            return (
              <button
                key={vuln.id}
                onClick={() => handleSelectVuln(vuln)}
                className={`w-full text-right p-3.5 rounded-xl border transition-all flex flex-col gap-1 ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-bold text-sm ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                    {vuln.titleAr}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                    vuln.severity === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }`}>
                    CVSS {vuln.cvss}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono truncate">{vuln.titleEn}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:w-2/3 flex flex-col gap-4">
        {/* Header Information */}
        <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-white">{currentVuln.titleAr}</h3>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 font-mono border border-cyan-500/30">
                {currentVuln.cveExample}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{currentVuln.summaryAr}</p>
          </div>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 text-xs">
          <button
            onClick={() => setActiveTab('exploit')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'exploit'
                ? 'bg-cyan-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>تجربة الـ Payload التفاعلية</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'code'
                ? 'bg-cyan-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>الكود المصاب vs الكود المرقع</span>
          </button>
        </div>

        {/* Tab 1: Exploit Playground */}
        {activeTab === 'exploit' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                حمولات الهجوم الجاهزة (Quick Payloads):
              </label>
              <div className="flex flex-wrap gap-2">
                {currentVuln.attackPayloads.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      sound.playBlip(700, 0.03);
                      setCustomPayload(p);
                    }}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                تعديل الحمولة المرسلة للخادم:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customPayload}
                  onChange={(e) => setCustomPayload(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs font-mono text-green-300 outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  onClick={handleRunSimulation}
                  className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-xl hover:opacity-90 transition-all flex items-center gap-2 text-xs shadow-lg shadow-cyan-500/20"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>تنفيذ الهجوم</span>
                </button>
              </div>
            </div>

            {/* Simulated Server Response Box */}
            {simulatedResult && (
              <div className="bg-[#030712] border border-cyan-500/40 rounded-xl p-4 font-mono text-xs text-slate-200 relative animate-fade-in shadow-2xl">
                <div className="flex items-center justify-between text-cyan-400 text-[11px] mb-2 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>رد الخادم المستهدف (Target Server Response)</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(simulatedResult)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'تم النسخ' : 'نسخ النتيجة'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-green-400 font-mono text-xs" dir="ltr">
                  {simulatedResult}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Code Comparison */}
        {activeTab === 'code' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-950/20 border border-red-500/40 rounded-xl">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>الكود المصاب غير الآمن (Vulnerable)</span>
              </div>
              <pre className="text-[11px] font-mono text-slate-300 whitespace-pre-wrap leading-relaxed bg-black/40 p-3 rounded-lg overflow-x-auto" dir="ltr">
                {currentVuln.vulnerableCode.trim()}
              </pre>
            </div>

            <div className="p-4 bg-emerald-950/20 border border-emerald-500/40 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>الكود المرقع الآمن (Patched & Secure)</span>
              </div>
              <pre className="text-[11px] font-mono text-slate-300 whitespace-pre-wrap leading-relaxed bg-black/40 p-3 rounded-lg overflow-x-auto" dir="ltr">
                {currentVuln.mitigatedCode.trim()}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
