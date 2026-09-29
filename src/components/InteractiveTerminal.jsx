import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2, HelpCircle, Check, Copy } from 'lucide-react';
import { sound } from './AudioSynthesizer';

const COMMAND_RESPONSES = {
  help: `
أوامر التيرمينال التفاعلية المتاحة:
  nmap [target]       - إجراء فحص منافذ متقدم (مثال: nmap -sV 192.168.10.20)
  whoami              - عرض المستخدم والصلاحيات الحالية
  id                  - عرض معرف المستخدم والمجموعات
  ifconfig / ip a     - فحص كروت الشبكة وعناوين الـ IP للـ VLANs
  sqlmap [target]     - أداة فحص واستغلال ثغرات حقن قواعد البيانات
  curl [url]          - إرسال طلب HTTP وفحص ترويسات الاستجابة
  ping [target]       - اختبار الاتصال بالأجهزة والمحطات
  scada-check         - فحص أمان محطات المصنع الأربعة وبروتوكول Modbus/MQTT
  clear               - تنظيف شاشة التيرمينال
`,
  whoami: `cyber-operative@kali-redteam (UID: 1000 - Infiltrator)`,
  id: `uid=1000(cyber-operative) gid=1000(redteam) groups=1000(redteam),27(sudo),44(video),100(users)`,
  'ip a': `
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 state UP
    inet 192.168.40.50/24 brd 192.168.40.255 scope global eth0 (VLAN 40: Mgmt)
3: wg0: <POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1420 state UNKNOWN
    inet 10.100.0.2/24 scope global wg0 (WireGuard AWS Cloud Tunnel)
`,
  ifconfig: `
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.40.50  netmask 255.255.255.0  broadcast 192.168.40.255
        ether 00:0c:29:8a:4b:1c  txqueuelen 1000  (Ethernet)
wg0: flags=209<UP,POINTOPOINT,RUNNING,NOARP>  mtu 1420
        inet 10.100.0.2  netmask 255.255.255.0  destination 10.100.0.2
`,
  'scada-check': `
[+] Scanning Industrial SCADA Floor (VLAN 10: 192.168.10.0/24)...
[✓] Station 1 (Chemical Mixer): 192.168.10.21 [ESP32] - Port 502 (Modbus TCP) OPEN [NO AUTH]
[✓] Station 2 (Centrifuge Valve): 192.168.10.22 [ESP32] - Port 502 (Modbus TCP) OPEN [Vulnerable]
[✓] Station 3 (Boiler Temp): 192.168.10.23 [ESP32] - Port 1883 (MQTT Broker) LISTENING
[✓] Station 4 (Power Relay): 192.168.10.24 [ESP32] - Relay Kill-Switch ARM ACTIVE
[!] ALERT: Industrial protocol unencrypted! Ready for red team injection testing.
`
};

export default function InteractiveTerminal({ defaultCommand = 'nmap -sV -p 502,1883 192.168.10.20' }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '🛡️ CyberForge Kali Red Team Terminal [v2026.3 Release] — Ready for live commands.'
    },
    {
      type: 'system',
      text: 'اكتب help لعرض الأوامر المتاحة أو جرب فحص أمان المنظومة.'
    }
  ]);
  const [inputVal, setInputVal] = useState(defaultCommand);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCmd = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'cmd', text: trimmed }];

    if (trimmed.toLowerCase() === 'clear') {
      sound.playWarp();
      setHistory([]);
      setInputVal('');
      return;
    }

    let response = '';
    const lower = trimmed.toLowerCase();

    if (COMMAND_RESPONSES[lower]) {
      sound.playAccessGranted();
      response = COMMAND_RESPONSES[lower];
    } else if (lower.startsWith('nmap')) {
      response = `
Starting Nmap 7.95 ( https://nmap.org ) at 2026-09-26 21:30 EET
Nmap scan report for industrial-target (192.168.10.20)
Host is up (0.0014s latency).
PORT     STATE SERVICE VERSION
502/tcp  open  modbus  Modbus TCP (Industrial PLC Controller - Siemens Sim)
1883/tcp open  mqtt    Mosquitto MQTT v2.0.18 (Industrial Broker)
8000/tcp open  http    FastAPI CyberForge Core Monitoring API (Python 3.10)
Service Info: Device: SCADA Controller; OS: FreeRTOS / Linux

MAC Address: 24:6F:28:XX:XX:XX (Espressif Systems ESP32 DevKit)
Nmap done: 1 IP address (1 host up) scanned in 2.14 seconds.
`;
    } else if (lower.startsWith('sqlmap')) {
      response = `
        ___
       __H__
 ___ ___["]_____ ___ ___  {1.8.2#stable}
|_ -| . [']     | .'| . |
|___|_  ["]_|_|_|__,|  _|
      |_|V...       |_|   https://sqlmap.org

[*] testing connection to the target URL
[INFO] testing if the target URL content is stable
[INFO] target URL content is stable
[CRITICAL] parameter 'id' is vulnerable to Error-Based SQL injection!
    Type: error-based
    Title: PostgreSQL OR error-based - WHERE or HAVING clause
    Payload: id=1' OR 1=CAST((SELECT table_name FROM information_schema.tables LIMIT 1) AS int)--
[+] Database: cyberforge_industrial_db
[+] Tables: users, sensor_telemetry, alarm_logs, system_keys
`;
    } else if (lower.startsWith('curl')) {
      response = `
HTTP/1.1 200 OK
Server: uvicorn / FastAPI
Content-Type: application/json
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Date: Sat, 26 Sep 2026 18:30:00 GMT

{
  "status": "online",
  "system": "CyberForge AI Industrial Defense Core",
  "active_vlans": 5,
  "mqtt_status": "CONNECTED",
  "anomaly_engine": "ACTIVE"
}
`;
    } else if (lower.startsWith('ping')) {
      response = `
PING 192.168.10.20 (192.168.10.20) 56(84) bytes of data.
64 bytes from 192.168.10.20: icmp_seq=1 ttl=64 time=0.824 ms
64 bytes from 192.168.10.20: icmp_seq=2 ttl=64 time=0.741 ms
64 bytes from 192.168.10.20: icmp_seq=3 ttl=64 time=0.795 ms
--- 192.168.10.20 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 0.741/0.786/0.824/0.034 ms
`;
    } else {
      sound.playGlitch();
      response = `bash: command not found: ${trimmed}. Type 'help' to list available commands.`;
    }

    newHistory.push({ type: 'output', text: response.trim() });
    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCmd(inputVal);
  };

  return (
    <div className="flex flex-col h-full bg-[#030712] border border-cyan-500/30 rounded-xl overflow-hidden font-mono text-xs shadow-2xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-cyan-500/20 text-slate-300">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 mr-3 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-bold">kali@cyberforge-redteam: ~</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => executeCmd('scada-check')}
            className="px-2 py-1 bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded hover:bg-cyan-900 transition-all text-[11px]"
          >
            ⚡ فحص SCADA سريع
          </button>
          <button
            onClick={() => setHistory([])}
            className="p-1 hover:text-red-400 transition-colors"
            title="مسح الشاشة"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 text-slate-200 select-text max-h-[380px]" dir="ltr">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed whitespace-pre-wrap">
            {item.type === 'system' && (
              <span className="text-cyan-400 font-semibold">{item.text}</span>
            )}
            {item.type === 'cmd' && (
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-pink-500 font-bold">┌──(kali㉿redteam)-[~]</span>
              </div>
            )}
            {item.type === 'cmd' && (
              <div className="flex items-center gap-2 text-white">
                <span className="text-pink-500 font-bold">└─$</span>
                <span className="text-green-400 font-bold">{item.text}</span>
              </div>
            )}
            {item.type === 'output' && (
              <span className="text-slate-300">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Bar */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-2 bg-slate-950 border-t border-cyan-500/20" dir="ltr">
        <span className="text-pink-500 font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
            sound.playTerminalKeystroke();
          }}
          placeholder="Type command here... (try: nmap, whoami, help, sqlmap)"
          className="flex-1 bg-transparent text-green-300 outline-none font-mono text-xs placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="px-3 py-1.5 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition-all flex items-center gap-1"
        >
          <Send className="w-3 h-3" />
          <span>Run</span>
        </button>
      </form>
    </div>
  );
}
