import React, { useState, useEffect } from 'react';
import {
  Shield,
  Compass,
  Trophy,
  Volume2,
  VolumeX,
  FileText,
  Zap,
  Layers,
  Search,
  CheckCircle2,
  Terminal,
  Bug,
  Music,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { STAGES_DATA } from '../data/stagesData';
import { sound } from './AudioSynthesizer';

export default function TopNavHUD({
  activeView,
  setActiveView,
  characterLevel,
  characterXP,
  totalChecklistCompleted,
  totalChecklistCount,
  onSelectStage,
  characterGender = 'female',
  characterName = 'رقية وسام',
  onOpenCustomizer
}) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bgmActive, setBgmActive] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key.toLowerCase() === 'h') {
        setIsNavHidden(prev => {
          const next = !prev;
          sound.playSelect();
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const toggleSound = () => {
    const isNowOn = sound.toggle();
    setSoundEnabled(isNowOn);
    if (isNowOn) sound.playSuccess();
  };

  const toggleBgm = () => {
    const isNowActive = sound.toggleBgm();
    setBgmActive(isNowActive);
    if (isNowActive) sound.playSuccess();
  };

  const completionPercentage = totalChecklistCount > 0
    ? Math.round((totalChecklistCompleted / totalChecklistCount) * 100)
    : 0;

  const filteredStages = STAGES_DATA.filter(s =>
    s.titleAr.includes(searchQuery) ||
    s.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating Reveal Button when Navbar is Hidden */}
      {isNavHidden && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 pointer-events-auto animate-fade-in">
          <button
            onClick={() => {
              sound.playSelect();
              setIsNavHidden(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/90 border border-cyan-500/60 text-cyan-300 shadow-2xl shadow-cyan-500/30 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all font-cairo text-xs font-bold"
            title="إظهار القائمة الرئيسية (اضغط H)"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>إظهار القائمة العلوية (اضغط H)</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Header Bar with Smooth Collapse Animation */}
      <header
        className={`sticky top-0 z-40 w-full px-4 py-3 bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/25 transition-all duration-300 ease-in-out ${
          isNavHidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'
        }`}
      >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Platform Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
              <Shield className="w-5 h-5 text-black stroke-[2.5]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-500 animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cyber font-black tracking-wider text-base text-white">
                  CYBER<span className="text-cyan-400">FORGE</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/40">
                  RED TEAM 3D
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                أكاديمية تدريب الريد تيم واختبار الاختراق التفاعلية
              </p>
            </div>
          </div>

          {/* Mobile Sound Toggle */}
          <button
            onClick={toggleSound}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>
        </div>

        {/* View Mode Switcher Buttons */}
        <nav className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-2xl border border-cyan-500/20 text-xs overflow-x-auto max-w-full">
          <button
            onClick={() => { sound.playSelect(); setActiveView('3d'); }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeView === '3d'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>العالم 3D التفاعلي</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveView('map'); }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeView === 'map'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>خريطة الـ 20 محطة</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveView('playground'); }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeView === 'playground'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bug className="w-3.5 h-3.5" />
            <span>معمل الثغرات OWASP</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveView('report'); }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeView === 'report'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>التقارير و CVSS</span>
          </button>

          <button
            onClick={() => { sound.playSelect(); setActiveView('livefeeds'); }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeView === 'livefeeds'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>تحديث المصادر الحية</span>
          </button>
        </nav>

        {/* Character Status, Level & Sound */}
        <div className="flex items-center gap-4">
          {/* Quick Search */}
          <div className="relative hidden lg:block">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="ابحث عن محطة أو ثغرة..."
                value={searchQuery}
                onFocus={() => setShowSearchDropdown(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white outline-none w-36 placeholder:text-slate-600 font-mono text-[11px]"
              />
            </div>

            {showSearchDropdown && searchQuery && (
              <div
                className="absolute top-full mt-2 right-0 w-72 bg-slate-950 border border-cyan-500/40 rounded-xl p-2 shadow-2xl z-50 max-h-64 overflow-y-auto"
                onMouseLeave={() => setShowSearchDropdown(false)}
              >
                {filteredStages.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      sound.playSelect();
                      onSelectStage(s.id);
                      setShowSearchDropdown(false);
                      setSearchQuery('');
                    }}
                    className="w-full text-right p-2 rounded-lg hover:bg-slate-900 transition-colors text-xs text-slate-300 hover:text-cyan-300 flex items-center justify-between"
                  >
                    <span className="truncate">{s.titleAr}</span>
                    <span className="text-[10px] font-mono text-cyan-400">المحطة {s.id}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Operator Avatar Customizer Button */}
          <button
            onClick={() => {
              sound.playSelect();
              onOpenCustomizer && onOpenCustomizer();
            }}
            className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 rounded-2xl shadow-lg shadow-cyan-500/10 transition-all group"
            title="تغيير شخصية العميل (ولد/بنت) والاسم والألوان"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center text-base group-hover:scale-110 transition-transform">
              {characterGender === 'male' ? '👨‍💻' : '👩‍💻'}
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                {characterName || 'العميل السيبراني'}
              </div>
              <div className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                <span>تخصيص الأفاتار</span>
                <span className="text-slate-500">⚙️</span>
              </div>
            </div>
          </button>

          {/* Level & XP HUD Badge */}
          <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-1.5 rounded-2xl border border-cyan-500/30">
            <div className="text-right">
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <span className="text-slate-400">الرتبة:</span>
                <span className="text-cyan-300 font-bold">LVL {characterLevel}</span>
              </div>
              <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden mt-1">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-pink-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-mono font-bold text-xs">
              {completionPercentage}%
            </div>
          </div>

          {/* Cyberpunk Ambient Music Toggle */}
          <button
            onClick={toggleBgm}
            className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-mono font-bold transition-all ${
              bgmActive
                ? 'bg-pink-950/70 border-pink-500/70 text-pink-300 shadow-lg shadow-pink-500/25'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
            title="تشغيل / إيقاف موسيقى السايبربانك المحيطية (BGM)"
          >
            <Music className={`w-3.5 h-3.5 ${bgmActive ? 'animate-pulse text-pink-400' : ''}`} />
            <span>{bgmActive ? 'موسيقى: مشغلة 🎵' : 'موسيقى 🎵'}</span>
          </button>

          {/* Sound Toggle (Desktop) */}
          <button
            onClick={toggleSound}
            className="hidden md:flex p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-400 transition-colors"
            title="تبديل مؤثرات الصوت السيبرانية"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Hide Nav Bar Button */}
          <button
            onClick={() => {
              sound.playSelect();
              setIsNavHidden(true);
            }}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors flex items-center gap-1.5"
            title="إخفاء شريط القائمة لشاشة كاملة (أو اضغط H في أي وقت)"
          >
            <EyeOff className="w-4 h-4" />
            <span className="hidden xl:inline text-xs font-mono">إخفاء (H)</span>
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
