import React, { useState, useEffect } from 'react';
import {
  X,
  BookOpen,
  Wrench,
  Terminal,
  Trophy,
  CheckSquare,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Shield,
  AlertCircle,
  Copy,
  Check,
  Zap,
  Sparkles,
  Video,
  FileText,
  Download,
  Trash2,
  PlayCircle,
  Code2,
  Lightbulb,
  Save,
  CheckCircle2
} from 'lucide-react';
import { THEMED_ZONES, STAGES_DATA } from '../data/stagesData';
import { sound } from './AudioSynthesizer';
import InteractiveTerminal from './InteractiveTerminal';
import PayloadPlayground from './PayloadPlayground';

export default function MilestoneModal({
  stage,
  onClose,
  completedChecklist = [],
  onToggleChecklist,
  onNextStage,
  onPrevStage,
  hasNext,
  hasPrev
}) {
  const [activeTab, setActiveTab] = useState('guide'); // 'guide', 'steps', 'videos', 'notes', 'interactive', 'labs', 'checklist', 'resources'
  const [copiedCode, setCopiedCode] = useState(null);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // LocalStorage-backed Personal Notes System
  const [stageNotes, setStageNotes] = useState('');
  const [notesSaveStatus, setNotesSaveStatus] = useState('saved'); // 'saved', 'saving'

  useEffect(() => {
    if (!stage) return;
    try {
      const saved = localStorage.getItem(`cyberforge_notes_stage_${stage.id}`);
      setStageNotes(saved || '');
    } catch {
      setStageNotes('');
    }
  }, [stage]);

  const handleNotesChange = (text) => {
    setStageNotes(text);
    setNotesSaveStatus('saving');
    try {
      localStorage.setItem(`cyberforge_notes_stage_${stage.id}`, text);
      setTimeout(() => setNotesSaveStatus('saved'), 400);
    } catch {
      setNotesSaveStatus('saved');
    }
  };

  const insertTemplate = (templateType) => {
    let snippet = '';
    const now = new Date().toLocaleDateString('ar-EG');

    switch (templateType) {
      case 'vuln':
        snippet = `\n\n### 🛡️ تقرير ثغرة مكتشفة (${now})\n- **اسم الثغرة:** \n- **الخطورة:** [Critical / High / Medium / Low]\n- **معيار CVSS:** 7.5 (مثال)\n- **رابط / مسار الهدف:** http://target.ip/vuln_path\n- **خطوات إعادة الإنتاج (PoC):**\n  1. إرسال الطلب التالي:\n  2. استلام النتيجة:\n- **طريقة الترقيع الموصى بها:** \n`;
        break;
      case 'recon':
        snippet = `\n\n### 🌐 ملاحظات الاستطلاع والفحص (${now})\n- **عنوان الـ IP المستهدف:** \n- **المنافذ المفتوحة (Open Ports):** \n  * Port 22 (SSH): \n  * Port 80 (HTTP): \n  * Port 445 (SMB): \n- **نظام التشغيل التقديري:** Linux / Windows\n- **الخدمات والنسخ المكتشفة:** \n`;
        break;
      case 'flag':
        snippet = `\n\n### 🚩 فلاج مكتشف (Flag Captured - ${now})\n- **الماكينة / الغرفة:** ${stage?.titleAr || ''}\n- **نوع الفلاج:** [User Flag / Root Flag]\n- **قيمة الفلاج:** THM{example_flag_hash_here}\n- **طريقة الحصول عليه:** \n`;
        break;
      case 'cheatsheet':
        snippet = `\n\n### ⚡ أوامري المفضلة لهذه المحطة\n\`\`\`bash\n# الأمر الأول:\n\n# الأمر الثاني:\n\`\`\`\n`;
        break;
      default:
        break;
    }

    const updated = stageNotes + snippet;
    handleNotesChange(updated);
    sound.playBlip(1200, 0.05);
  };

  const copyNotesToClipboard = () => {
    navigator.clipboard.writeText(stageNotes);
    sound.playSelect();
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const downloadNotesFile = () => {
    const blob = new Blob([stageNotes || `# ملاحظات المحطة: ${stage?.titleAr}\n\nلا توجد ملاحظات مسجلة بعد.`], {
      type: 'text/markdown;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Stage-${stage?.id || 1}-Notes.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    sound.playSuccess();
  };

  const clearNotes = () => {
    if (window.confirm('هل أنت متأكد من مسح جميع ملاحظاتك لهذه المحطة؟')) {
      handleNotesChange('');
      sound.playBlip(400, 0.08);
    }
  };

  if (!stage) return null;

  const zone = THEMED_ZONES.find(z => z.id === stage.zoneId) || {
    nameAr: 'المنطقة التكتيكية',
    color: '#00f3ff'
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    sound.playBlip(1000, 0.04);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const stageCompletedCount = stage.checklist.filter(c => completedChecklist.includes(c.id)).length;
  const stageTotalCount = stage.checklist.length;
  const isFullyCompleted = stageTotalCount > 0 && stageCompletedCount === stageTotalCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-6xl max-h-[94vh] flex flex-col bg-[#070c18] border border-cyan-500/40 rounded-3xl shadow-2xl shadow-cyan-500/20 overflow-hidden font-cairo">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-cyan-500/30">
          <div className="flex items-center gap-3.5">
            <span
              className="w-4 h-4 rounded-full animate-ping"
              style={{ backgroundColor: zone.color }}
            />
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-extrabold">
                  {zone.nameAr}
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-xs font-mono text-slate-300 font-semibold">{stage.difficulty}</span>
                <span className="text-slate-600">|</span>
                <span className="text-xs font-mono font-bold text-amber-400">+{stage.xpReward} XP</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white mt-1 tracking-wide">{stage.titleAr}</h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isFullyCompleted && (
              <span className="hidden md:flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full text-xs font-extrabold font-mono">
                <Check className="w-4 h-4" />
                <span>محطة مكتملة 100%</span>
              </span>
            )}
            <button
              onClick={() => {
                sound.playBlip(600, 0.05);
                onClose();
              }}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="إغلاق المحطة"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 px-6 bg-slate-950 border-b border-slate-800 overflow-x-auto text-sm py-2.5 scrollbar-thin">
          <button
            onClick={() => { sound.playSelect(); setActiveTab('guide'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'guide'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>📖 الشرح النظري والسيناريوهات</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveTab('steps'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'steps'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>🛠️ خطوات التنفيذ الميداني والأوامر</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveTab('videos'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'videos'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Video className="w-4 h-4 text-red-400" />
            <span>🎥 شروحات الفيديو واليوتيوب</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveTab('notes'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'notes'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>📝 المفكرة والتدوين الأمني</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveTab('interactive'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'interactive'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>⚡ اللاب التفاعلي والتيرمينال</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveTab('labs'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'labs'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>🎯 غرف TryHackMe و HTB</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveTab('checklist'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'checklist'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>📋 قائمة التحقق ({stageCompletedCount}/{stageTotalCount})</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveTab('resources'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
              activeTab === 'resources'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>📚 المراجع الرسمية</span>
          </button>

          {stage.writeup && (
            <button
              onClick={() => { sound.playSelect(); setActiveTab('writeup'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
                activeTab === 'writeup'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>📑 رايت أب وحلول عملية</span>
            </button>
          )}

          {stage.secretTradecraft && stage.secretTradecraft.length > 0 && (
            <button
              onClick={() => { sound.playSelect(); setActiveTab('tradecraft'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${
                activeTab === 'tradecraft'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>🥋 أسرار الريد تيم</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6 text-slate-200 leading-relaxed">
          {/* TAB 1: GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-6 animate-fade-in">
              {/* Highlight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 bg-slate-900/90 rounded-2xl border border-cyan-500/30 shadow-lg">
                  <div className="flex items-center gap-2.5 text-cyan-400 font-extrabold text-base mb-2.5">
                    <Zap className="w-5 h-5" />
                    <span>لماذا نتعلم هذه المحطة؟ (Why Learn)</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal">{stage.whyLearn}</p>
                </div>

                <div className="p-5 bg-slate-900/90 rounded-2xl border border-purple-500/30 shadow-lg">
                  <div className="flex items-center gap-2.5 text-purple-400 font-extrabold text-base mb-2.5">
                    <Shield className="w-5 h-5" />
                    <span>التطبيق المهني الميداني (Enterprise Application)</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal">{stage.professionalApplication}</p>
                </div>
              </div>

              {/* Case Study Alert */}
              {stage.caseStudy && (
                <div className="p-5 bg-amber-950/30 border border-amber-500/50 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm md:text-base mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>دراسة حالة واقعية من كبرى الهجمات (Real-world Case Study):</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-100 leading-relaxed">{stage.caseStudy}</p>
                </div>
              )}

              {/* Detailed Technical Guide */}
              <div className="p-6 md:p-8 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
                <div className="text-base md:text-lg leading-loose text-slate-200 whitespace-pre-line font-cairo">
                  {stage.detailedGuide.trim()}
                </div>
              </div>

              {/* Common Mistakes */}
              {stage.commonMistakes && stage.commonMistakes.length > 0 && (
                <div className="p-5 bg-red-950/25 border border-red-500/40 rounded-2xl">
                  <h4 className="text-sm md:text-base font-bold text-red-400 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>⚠️ أخطاء شائعة يقع فيها المبتدئون ويجب تجنبها:</span>
                  </h4>
                  <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-slate-200 leading-relaxed">
                    {stage.commonMistakes.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PRACTICAL STEPS & COMMANDS */}
          {activeTab === 'steps' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-cyan-400" />
                    <span>دليل التنفيذ الميداني والأوامر التشغيلية</span>
                  </h3>
                  <p className="text-sm text-slate-400">
                    أوامر حقيقية خطوة بخطوة مع شرح معاملات كل أداة والمخرجات المتوقعة في شاشة التيرمينال.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-xl border border-cyan-500/30">
                  {stage.practicalSteps.length} خطوات عملية
                </span>
              </div>

              <div className="space-y-6">
                {stage.practicalSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 md:p-6 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl transition-all space-y-4 shadow-xl"
                  >
                    {/* Step Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 font-mono font-black text-lg flex items-center justify-center shrink-0 border border-cyan-500/40 shadow-md">
                        {step.step}
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h4 className="font-extrabold text-white text-base md:text-lg">{step.title}</h4>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                    {/* Command Block if present */}
                    {step.command && (
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                          <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>الأمر الميداني (Terminal Command):</span>
                          </span>
                          <button
                            onClick={() => copyCode(step.command, `cmd_${step.step}`)}
                            className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-400 rounded-lg transition-all font-sans font-bold"
                          >
                            {copiedCode === `cmd_${step.step}` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">تم النسخ بنجاح!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>نسخ الأمر</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="relative group">
                          <pre className="p-4 bg-black/90 border border-cyan-500/30 rounded-xl text-cyan-300 font-mono text-sm md:text-base overflow-x-auto selection:bg-cyan-500 selection:text-black">
                            <code>{step.command}</code>
                          </pre>
                        </div>
                      </div>
                    )}

                    {/* Flags Explanation if present */}
                    {step.flags && step.flags.length > 0 && (
                      <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
                        <div className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>شرح المعاملات والـ Flags للأمر:</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                          {step.flags.map((f, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                              <span className="font-mono font-bold text-cyan-300 shrink-0">{f.flag}</span>
                              <span className="text-slate-300">{f.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expected Output if present */}
                    {step.expectedOutput && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>المخرجات المتوقعة في التيرمينال (Expected Terminal Output):</span>
                        </div>
                        <pre className="p-3.5 bg-slate-950/95 border border-emerald-500/20 rounded-xl text-emerald-400 font-mono text-xs md:text-sm overflow-x-auto whitespace-pre leading-relaxed">
                          <code>{step.expectedOutput}</code>
                        </pre>
                      </div>
                    )}

                    {/* Pro Tip if present */}
                    {step.proTip && (
                      <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-xl flex items-start gap-2.5 text-xs md:text-sm text-amber-200">
                        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-400">نصيحة ميدانية / eJPT Pro Tip: </strong>
                          <span>{step.proTip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CURATED VIDEO LECTURES */}
          {activeTab === 'videos' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-3 border-b border-slate-800">
                <h3 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                  <Video className="w-5 h-5 text-red-500" />
                  <span>أفضل الشروحات المرئية والماستر كلاس على YouTube</span>
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  محاضرات ومقاطع فيديو من كبار خبراء ومدرسي الأمن السيبراني في العالم (NetworkChuck, David Bombal, John Hammond, The Cyber Mentor, PortSwigger).
                </p>
              </div>

              {stage.youtubeVideos && stage.youtubeVideos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {stage.youtubeVideos.map((vid, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-slate-900/80 border border-slate-800 hover:border-red-500/40 rounded-2xl flex flex-col justify-between gap-4 transition-all shadow-xl group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-red-950/60 text-red-400 border border-red-500/30 rounded-lg text-xs font-mono font-bold">
                            <PlayCircle className="w-3.5 h-3.5 text-red-400" />
                            <span>{vid.channel}</span>
                          </span>
                          <span className="text-xs font-mono text-slate-400 font-semibold">{vid.duration || 'فيديو'}</span>
                        </div>

                        <h4 className="font-extrabold text-white text-base md:text-lg group-hover:text-red-400 transition-colors leading-snug">
                          {vid.title}
                        </h4>

                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                          {vid.keyTakeaway}
                        </p>
                      </div>

                      <a
                        href={vid.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-red-950/40 hover:bg-red-600 hover:text-white text-red-300 font-bold rounded-xl border border-red-500/30 transition-all text-sm group-hover:shadow-lg group-hover:shadow-red-500/20"
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span>مشاهدة الفيديو على YouTube</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
                  <PlayCircle className="w-12 h-12 text-slate-600 mx-auto" />
                  <p className="text-base text-slate-400">جاري تجميع شروحات الفيديو لهذه المحطة.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: PERSONAL STAGE NOTES & SCRATCHPAD */}
          {activeTab === 'notes' && (
            <div className="space-y-5 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" />
                    <span>المفكرة الأمنية وتوثيق المحطة (Personal Scratchpad)</span>
                  </h3>
                  <p className="text-sm text-slate-400">
                    اكتب ملاحظاتك، أوامرك المخصصة، الفلاجات المكتشفة، أو مسودة تقريرك. يتم الحفظ تلقائياً في متصفحك.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{notesSaveStatus === 'saving' ? 'جاري الحفظ...' : 'تم الحفظ تلقائياً ⚡'}</span>
                  </span>
                </div>
              </div>

              {/* Quick Template Injection Buttons */}
              <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-900/90 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 ml-1">قوالب جاهزة سريعة:</span>
                <button
                  onClick={() => insertTemplate('vuln')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-300 text-xs font-bold rounded-xl transition-all border border-cyan-500/20"
                >
                  + قالب تقرير ثغرة
                </button>
                <button
                  onClick={() => insertTemplate('recon')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-300 text-xs font-bold rounded-xl transition-all border border-cyan-500/20"
                >
                  + قالب استطلاع هدف
                </button>
                <button
                  onClick={() => insertTemplate('flag')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-300 text-xs font-bold rounded-xl transition-all border border-cyan-500/20"
                >
                  + تسجيل فلاج 🚩
                </button>
                <button
                  onClick={() => insertTemplate('cheatsheet')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-300 text-xs font-bold rounded-xl transition-all border border-cyan-500/20"
                >
                  + أوامر مخصصة
                </button>
              </div>

              {/* Text Area */}
              <div className="relative">
                <textarea
                  value={stageNotes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder={`اكتب هنا كل ما ترغب بتسجيله أثناء دراسة وتطبيق هذه المحطة...\n- أوامر جربتها ونجحت\n- ملاحظات حول إعدادات معينة\n- فلاج حصلت عليه من TryHackMe\n- سيناريو ثغرة اختبرتها`}
                  className="w-full h-80 p-5 bg-slate-950/90 border border-slate-800 rounded-2xl text-slate-200 text-sm md:text-base font-mono leading-relaxed focus:outline-none focus:border-cyan-400 transition-all resize-y selection:bg-cyan-500 selection:text-black"
                />
              </div>

              {/* Note Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyNotesToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-all"
                  >
                    {copyFeedback ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">تم نسخ الملاحظات!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>نسخ الملاحظات بالكامل</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={downloadNotesFile}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500 hover:text-black text-cyan-400 border border-cyan-500/40 rounded-xl text-sm font-bold transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>تصدير كملف Markdown (.md)</span>
                  </button>
                </div>

                <button
                  onClick={clearNotes}
                  className="flex items-center gap-2 px-3.5 py-2 bg-red-950/30 hover:bg-red-600 hover:text-white text-red-400 rounded-xl text-xs font-bold transition-all border border-red-500/30"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>مسح المفكرة</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: INTERACTIVE LAB */}
          {activeTab === 'interactive' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg md:text-xl font-black text-white">المختبر التفاعلي المباشر (Interactive Sandbox)</h3>
                <p className="text-sm text-slate-400 mt-1">جرب الأوامر الحقيقية واختبر الثغرات مباشرة من داخل المتصفح بأمان تام.</p>
              </div>

              {stage.id === 8 || stage.id === 9 || stage.id === 10 ? (
                <PayloadPlayground />
              ) : (
                <InteractiveTerminal defaultCommand={stage.id === 7 ? "nmap -sV -p- 192.168.10.20" : "help"} />
              )}
            </div>
          )}

          {/* TAB 6: TRYHACKME & HTB */}
          {activeTab === 'labs' && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-3 border-b border-slate-800">
                <h3 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span>غرف التطبيق العملي المعتمدة (TryHackMe & Hack The Box)</span>
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  روابط مباشرة لغرف تدريب معتمدة ومطابقة لمحتوى هذه المحطة تحديداً.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {stage.tryHackMeRooms.map((room, idx) => (
                  <div
                    key={idx}
                    className="p-5 md:p-6 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col justify-between gap-4 hover:border-cyan-500/40 transition-all shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-400 font-extrabold border border-cyan-500/30">
                          {room.difficulty}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-bold">TryHackMe Room</span>
                      </div>
                      <h4 className="font-black text-white text-base md:text-lg leading-snug">{room.name}</h4>
                      <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">{room.whyMatters}</p>
                    </div>

                    <a
                      href={room.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-300 font-bold rounded-xl transition-all text-sm shadow-md"
                    >
                      <span>فتح الغرفة على TryHackMe</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white">قائمة مهام إتقان المحطة</h3>
                  <p className="text-sm text-slate-400">حدد المهام التي أتممتها لحفظ تقدمك والحصول على نقاط الخبرة (XP).</p>
                </div>
                <div className="text-sm font-mono font-bold text-cyan-400 bg-cyan-950 px-3.5 py-1.5 rounded-xl border border-cyan-500/30">
                  {stageCompletedCount} / {stageTotalCount} منجز
                </div>
              </div>

              <div className="space-y-3">
                {stage.checklist.map((item) => {
                  const isChecked = completedChecklist.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        sound.playBlip(isChecked ? 500 : 900, 0.05);
                        onToggleChecklist(item.id);
                      }}
                      className={`w-full text-right p-4 md:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 shadow-md ${
                        isChecked
                          ? 'bg-cyan-500/10 border-cyan-400/50 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="text-sm md:text-base font-semibold leading-relaxed">{item.text}</span>
                      <div className={`w-6 h-6 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? 'bg-cyan-500 border-cyan-400 text-black' : 'border-slate-600 bg-slate-950'
                      }`}>
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 8: RESOURCES */}
          {activeTab === 'resources' && (
            <div className="space-y-4 animate-fade-in">
              <div className="pb-2 border-b border-slate-800">
                <h3 className="text-lg md:text-xl font-black text-white">المراجع والتوثيقات الرسمية العالمية</h3>
                <p className="text-sm text-slate-400">روابط نشطة وموثقة من كبرى المنظمات الأمنية ومشاريع الأمان العالمية:</p>
              </div>
              <div className="space-y-3">
                {stage.officialResources.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-center justify-between hover:border-cyan-400 transition-all group shadow-md"
                  >
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                        {res.name}
                      </h4>
                      <span className="text-xs font-mono text-slate-400 mt-1 block">{res.type}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: WRITEUP */}
          {activeTab === 'writeup' && stage.writeup && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    REAL ENGAGEMENT CASE STUDY
                  </span>
                  <span className="text-xs text-slate-400 font-mono">خطوات تطبيق حقيقية مع آليات الاكتشاف والروابط</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2.5">
                  <Code2 className="w-6 h-6 text-emerald-400" />
                  {stage.writeup.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  {stage.writeup.scenario}
                </p>
              </div>

              <div className="space-y-4">
                {stage.writeup.steps.map((step, idx) => {
                  const isObject = typeof step === 'object' && step !== null;
                  return (
                    <div
                      key={idx}
                      className="p-5 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl transition-all shadow-xl space-y-3"
                    >
                      {/* Step Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/40">
                            {idx + 1}
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-emerald-400">
                              {isObject ? (step.phase || `Step 0${idx + 1}`) : `المرحلة 0${idx + 1}`}
                            </span>
                            <h4 className="text-base font-bold text-white">
                              {isObject ? step.title : step.split(':')[0]}
                            </h4>
                          </div>
                        </div>
                        {isObject && step.mitreId && (
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-cyan-300 font-mono text-[11px]">
                            {step.mitreId}
                          </span>
                        )}
                      </div>

                      {/* Action / Execution */}
                      <div className="space-y-1.5">
                        <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                          <span className="text-emerald-400">⚔️</span>
                          <span>التنفيذ التكتيكي (Red Team Attack Action):</span>
                        </div>
                        <p className="text-sm md:text-base text-slate-200 leading-relaxed bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/70 font-sans">
                          {isObject ? step.action : step}
                        </p>
                      </div>

                      {/* Detection & Forensics */}
                      {isObject && step.detection && (
                        <div className="space-y-1.5 pt-1">
                          <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5 text-cyan-400" />
                            <span>طريقة الاكتشاف والرصد الأمني (Blue Team & SOC Detection):</span>
                          </div>
                          <div className="p-3.5 bg-cyan-950/20 border border-cyan-500/30 rounded-xl text-xs md:text-sm text-cyan-100/90 leading-relaxed font-sans">
                            {step.detection}
                          </div>
                        </div>
                      )}

                      {/* Reference Link */}
                      {isObject && step.link && (
                        <div className="pt-2 flex justify-end">
                          <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/50 text-xs font-mono text-emerald-300 hover:text-emerald-200 transition-all group"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <span>{step.linkText || 'قراءة المقال والرايت أب الكامل'}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {stage.writeup.lessonLearned && (
                <div className="p-5 bg-gradient-to-r from-amber-950/40 to-slate-900/90 border border-amber-500/50 rounded-2xl shadow-xl">
                  <h4 className="text-sm font-bold text-amber-400 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    <span>الدرس المستفاد والدرع الدفاعي (Defense-in-Depth Takeaway):</span>
                  </h4>
                  <p className="text-sm md:text-base text-slate-100 leading-relaxed">{stage.writeup.lessonLearned}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 10: SECRET TRADECRAFT */}
          {activeTab === 'tradecraft' && stage.secretTradecraft && stage.secretTradecraft.length > 0 && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    ADVANCED EVASION TRADECRAFT
                  </span>
                  <span className="text-xs text-slate-400 font-mono">طرق العمل، آليات الاكتشاف، والروابط والمقالات البحثية</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2.5">
                  <Sparkles className="w-6 h-6 text-rose-400" />
                  أسرار الريد تيم وحيل الاحتراف (Secret Tradecraft)
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  حيل ونصائح متقدمة من مطوري برمجيات الريد تيم — مع شرح تفصيلي لآلية عملها البرمجية، وكيف ترصدها فرق الدفاع:
                </p>
              </div>

              <div className="space-y-4">
                {stage.secretTradecraft.map((tip, idx) => {
                  const isObject = typeof tip === 'object' && tip !== null;
                  return (
                    <div
                      key={idx}
                      className="p-5 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 border border-slate-800 hover:border-rose-500/40 rounded-2xl transition-all shadow-xl space-y-3.5"
                    >
                      {/* Technique Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm border border-rose-500/40">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white flex items-center gap-2">
                              <span>{isObject ? tip.title : tip.split(':')[0]}</span>
                            </h4>
                            {isObject && tip.category && (
                              <span className="text-[11px] font-mono text-slate-400">
                                {tip.category}
                              </span>
                            )}
                          </div>
                        </div>

                        {isObject && tip.mitreId && (
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 font-mono text-[11px]">
                            {tip.mitreId}
                          </span>
                        )}
                      </div>

                      {/* Explanation */}
                      <div className="space-y-1.5">
                        <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                          <span>⚡</span>
                          <span>الآلية البرمجية والخدعة التكتيكية (How It Works):</span>
                        </div>
                        <p className="text-sm md:text-base text-slate-200 leading-relaxed bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/70">
                          {isObject ? tip.explanation : tip}
                        </p>
                      </div>

                      {/* Detection Methodology */}
                      {isObject && tip.detection && (
                        <div className="space-y-1.5">
                          <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5 text-amber-400" />
                            <span>طريقة الاكتشاف والرصد الأمني (Blue Team Detection & IoCs):</span>
                          </div>
                          <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs md:text-sm text-amber-100/90 leading-relaxed font-sans">
                            {tip.detection}
                          </div>
                        </div>
                      )}

                      {/* Reference Link */}
                      {isObject && tip.link && (
                        <div className="pt-2 flex justify-end">
                          <a
                            href={tip.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-500/50 text-xs font-mono text-rose-300 hover:text-rose-200 transition-all group"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform" />
                            <span>{tip.linkText || 'قراءة الدليل والبحث التقني'}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/95 border-t border-slate-800 text-sm">
          <button
            onClick={() => { sound.playSelect(); onPrevStage(); }}
            disabled={!hasPrev}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${
              hasPrev ? 'bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700' : 'opacity-40 cursor-not-allowed text-slate-600'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
            <span>المحطة السابقة</span>
          </button>

          <span className="font-mono text-slate-400 text-xs md:text-sm font-bold">
            المحطة {stage.id} من {STAGES_DATA.length}
          </span>

          <button
            onClick={() => { sound.playSelect(); onNextStage(); }}
            disabled={!hasNext}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${
              hasNext ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-md shadow-cyan-500/20' : 'opacity-40 cursor-not-allowed text-slate-600'
            }`}
          >
            <span>المحطة التالية</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
