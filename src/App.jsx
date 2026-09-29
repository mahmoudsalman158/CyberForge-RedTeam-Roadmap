import React, { useState, useEffect } from 'react';
import TopNavHUD from './components/TopNavHUD';
import CyberWorld3D from './components/CyberWorld3D';
import InteractiveMapGrid from './components/InteractiveMapGrid';
import PayloadPlayground from './components/PayloadPlayground';
import PentestReportBuilder from './components/PentestReportBuilder';
import LiveFeedUpdater from './components/LiveFeedUpdater';
import MilestoneModal from './components/MilestoneModal';
import { STAGES_DATA } from './data/stagesData';
import { sound } from './components/AudioSynthesizer';
import { Radio, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

import CharacterCustomizerModal from './components/CharacterCustomizerModal';

export default function App() {
  const [activeView, setActiveView] = useState('3d'); // '3d', 'map', 'playground', 'report', 'livefeeds'
  const [activeStageId, setActiveStageId] = useState(null);
  const [selectedStageModal, setSelectedStageModal] = useState(null);

  // Character Customization State
  const [characterGender, setCharacterGender] = useState(() => {
    try {
      return localStorage.getItem('cyberforge_gender') || 'female';
    } catch {
      return 'female';
    }
  });

  const [characterName, setCharacterName] = useState(() => {
    try {
      return localStorage.getItem('cyberforge_name') || 'رقية وسام';
    } catch {
      return 'رقية وسام';
    }
  });

  const [characterColor, setCharacterColor] = useState(() => {
    try {
      return localStorage.getItem('cyberforge_color') || '#00f3ff';
    } catch {
      return '#00f3ff';
    }
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('cyberforge_gender', characterGender);
      localStorage.setItem('cyberforge_name', characterName);
      localStorage.setItem('cyberforge_color', characterColor);
    } catch {}
  }, [characterGender, characterName, characterColor]);

  // LocalStorage-backed progress state
  const [completedChecklist, setCompletedChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem('cyberforge_checklist');
      return saved ? JSON.parse(saved) : ['c1_1', 'c1_2'];
    } catch {
      return ['c1_1', 'c1_2'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cyberforge_checklist', JSON.stringify(completedChecklist));
    } catch {}
  }, [completedChecklist]);

  // Calculate total items & XP
  const allChecklistItems = STAGES_DATA.flatMap(s => s.checklist);
  const totalChecklistCount = allChecklistItems.length;
  const totalCompletedCount = completedChecklist.length;

  // Level & XP Logic
  const totalXP = completedChecklist.length * 120;
  const characterLevel = Math.max(1, Math.floor(totalXP / 350) + 1);

  const handleToggleChecklist = (id) => {
    let updated;
    if (completedChecklist.includes(id)) {
      updated = completedChecklist.filter(item => item !== id);
    } else {
      updated = [...completedChecklist, id];
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f3ff', '#ff0055', '#00ff88', '#f59e0b']
      });
      sound.playSuccess();
    }
    setCompletedChecklist(updated);
  };

  const handleSelectStage = (stageId) => {
    setActiveStageId(stageId);
    const stage = STAGES_DATA.find(s => s.id === stageId);
    if (stage) {
      setSelectedStageModal(stage);
    }
  };

  const handleNextStage = () => {
    if (selectedStageModal && selectedStageModal.id < STAGES_DATA.length) {
      handleSelectStage(selectedStageModal.id + 1);
    }
  };

  const handlePrevStage = () => {
    if (selectedStageModal && selectedStageModal.id > 1) {
      handleSelectStage(selectedStageModal.id - 1);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#060913] text-slate-100 select-none font-cairo">
      {/* 1. Fullscreen 3D World (Always rendered across 100vw x 100vh) */}
      <CyberWorld3D
        activeStageId={activeStageId}
        onSelectStage={handleSelectStage}
        characterGender={characterGender}
        characterName={characterName}
        characterColor={characterColor}
      />

      {/* 2. Floating Top HUD (Pointer events on UI elements only) */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-auto">
        <TopNavHUD
          activeView={activeView}
          setActiveView={setActiveView}
          characterLevel={characterLevel}
          characterXP={totalXP}
          totalChecklistCompleted={totalCompletedCount}
          totalChecklistCount={totalChecklistCount}
          onSelectStage={handleSelectStage}
          characterGender={characterGender}
          characterName={characterName}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
      </div>

      {/* 3. Bottom Waypoints Drawer (Visible in 3D Mode) */}
      {activeView === '3d' && (
        <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-auto">
          <div className="max-w-7xl mx-auto p-3.5 bg-slate-950/90 rounded-2xl border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-2 text-xs">
              <span className="text-cyan-400 font-mono font-bold flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                <span>محطات الريد تيم الـ 20 التفاعلية (انقر للتوجه المباشر للأفاتار):</span>
              </span>
              <span className="text-slate-400 font-mono text-[11px]">اسحب بالماوس للتدوير 360° واستخدم W,A,S,D للتحرك</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {STAGES_DATA.map((st) => (
                <button
                  key={st.id}
                  onClick={() => {
                    sound.playSelect();
                    handleSelectStage(st.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    activeStageId === st.id
                      ? 'bg-cyan-500 text-black border-cyan-300 shadow-lg shadow-cyan-500/40 scale-105'
                      : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-white'
                  }`}
                >
                  <span className="text-cyan-400">#{st.id}</span>
                  <span className="font-sans font-medium">{st.titleAr.split(':')[1] || st.titleAr}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Full Overlay Panels for other Views */}
      {activeView !== '3d' && (
        <div className="absolute inset-0 top-16 z-20 overflow-y-auto bg-slate-950/85 backdrop-blur-xl p-4 md:p-8 animate-fade-in pointer-events-auto">
          <div className="max-w-7xl mx-auto pb-16">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => {
                  sound.playSelect();
                  setActiveView('3d');
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-cyan-400 font-bold rounded-xl border border-cyan-500/40 text-xs shadow-lg transition-all"
              >
                <X className="w-4 h-4" />
                <span>الرجوع للعالم ثلاثي الأبعاد 3D</span>
              </button>
            </div>

            {activeView === 'map' && (
              <InteractiveMapGrid
                onSelectStage={handleSelectStage}
                completedChecklist={completedChecklist}
              />
            )}

            {activeView === 'playground' && (
              <div className="space-y-4">
                <div className="text-center max-w-2xl mx-auto mb-6">
                  <h2 className="text-2xl font-bold text-white">معمل اختبار ثغرات الويب الشائعة (OWASP Playground)</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    جرب الحمولات الهجومية، شاهد نتائج استجابة الخادم اللحظية، وافهم الفرق بين الكود المصاب والكود المرقع.
                  </p>
                </div>
                <PayloadPlayground />
              </div>
            )}

            {activeView === 'report' && (
              <PentestReportBuilder />
            )}

            {activeView === 'livefeeds' && (
              <LiveFeedUpdater />
            )}
          </div>
        </div>
      )}

      {/* 5. Deep-Dive Milestone Modal */}
      {selectedStageModal && (
        <MilestoneModal
          stage={selectedStageModal}
          onClose={() => setSelectedStageModal(null)}
          completedChecklist={completedChecklist}
          onToggleChecklist={handleToggleChecklist}
          onNextStage={handleNextStage}
          onPrevStage={handlePrevStage}
          hasNext={selectedStageModal.id < STAGES_DATA.length}
          hasPrev={selectedStageModal.id > 1}
        />
      )}

      {/* 6. Character Customizer Modal */}
      <CharacterCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        gender={characterGender}
        setGender={setCharacterGender}
        name={characterName}
        setName={setCharacterName}
        color={characterColor}
        setColor={setCharacterColor}
      />
    </div>
  );
}
