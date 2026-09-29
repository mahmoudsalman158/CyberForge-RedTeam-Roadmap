import React, { useState } from 'react';
import { User, Sparkles, X, Check, Shield, Palette, Award } from 'lucide-react';
import { sound } from './AudioSynthesizer';

const COLOR_PRESETS = [
  { name: 'Cyber Cyan', hex: '#00f3ff' },
  { name: 'Neon Emerald', hex: '#00ff88' },
  { name: 'Plasma Pink', hex: '#ff0055' },
  { name: 'Amber Hazard', hex: '#f59e0b' },
  { name: 'Quantum Purple', hex: '#a855f7' }
];

export default function CharacterCustomizerModal({
  isOpen,
  onClose,
  gender,
  setGender,
  name,
  setName,
  color,
  setColor
}) {
  if (!isOpen) return null;

  const [inputName, setInputName] = useState(name);
  const [selectedGender, setSelectedGender] = useState(gender);
  const [selectedColor, setSelectedColor] = useState(color);

  const handleSave = (e) => {
    e.preventDefault();
    sound.playSuccess();
    setGender(selectedGender);
    setName(inputName.trim() || (selectedGender === 'female' ? 'رقية وسام' : 'محمود سلمان'));
    setColor(selectedColor);
    onClose();
  };

  const applyPreset = (presetName, presetGender, presetColor) => {
    sound.playSelect();
    setInputName(presetName);
    setSelectedGender(presetGender);
    setSelectedColor(presetColor);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#070c18] border border-cyan-500/40 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden font-cairo">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">تخصيص واختيار شخصية العميل السايبراني</h2>
              <p className="text-xs text-slate-400 font-mono">Cyber Operative 3D Customizer & Identity Hub</p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playBlip(600, 0.05);
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-6 text-xs text-slate-200">
          {/* Quick Presets for Graduation Project Team */}
          <div>
            <label className="block text-slate-400 font-mono mb-2">شخصيات فريق مشروع التخرج (CyberForge Quick Presets):</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => applyPreset('رقية وسام', 'female', '#00f3ff')}
                className={`p-3 rounded-2xl border transition-all flex items-center gap-3 text-right ${
                  selectedGender === 'female' && inputName === 'رقية وسام'
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-2xl">👩‍💻</div>
                <div>
                  <div className="font-bold text-white text-sm">رقية وسام</div>
                  <div className="text-[11px] text-cyan-400 font-mono">Red Team Analyst</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => applyPreset('محمود سلمان', 'male', '#00f3ff')}
                className={`p-3 rounded-2xl border transition-all flex items-center gap-3 text-right ${
                  selectedGender === 'male' && inputName === 'محمود سلمان'
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-2xl">👨‍💻</div>
                <div>
                  <div className="font-bold text-white text-sm">محمود سلمان</div>
                  <div className="text-[11px] text-cyan-400 font-mono">Red Team & AI Core</div>
                </div>
              </button>
            </div>
          </div>

          {/* 1. Choose Gender (Male vs Female) */}
          <div>
            <label className="block text-slate-400 font-mono mb-2">نوع الشخصية ثلاثية الأبعاد (3D Model Rig):</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  sound.playSelect();
                  setSelectedGender('female');
                }}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  selectedGender === 'female'
                    ? 'bg-pink-500/15 border-pink-400 text-white shadow-lg shadow-pink-500/10'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👩‍💻</span>
                  <div className="text-right">
                    <div className="font-bold text-sm">عميلة سيبرانية (بنت)</div>
                    <div className="text-[11px] text-slate-400">درع خفيف، بدلة استطلاع، مهارات فحص ويب</div>
                  </div>
                </div>
                {selectedGender === 'female' && <Check className="w-4 h-4 text-pink-400" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playSelect();
                  setSelectedGender('male');
                }}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  selectedGender === 'male'
                    ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👨‍💻</span>
                  <div className="text-right">
                    <div className="font-bold text-sm">عميل تكتيكي (ولد)</div>
                    <div className="text-[11px] text-slate-400">درع ثقيل، درع صدري، خوذة عمليات وهجمات</div>
                  </div>
                </div>
                {selectedGender === 'male' && <Check className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>
          </div>

          {/* 2. Custom Operator Name */}
          <div>
            <label className="block text-slate-400 font-mono mb-1.5">
              اسم الشخصية (يظهر كيافطة 3D هولوجرامية فوق رأسها في اللعبة):
            </label>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="اكتب اسم الشخصية التي تريدها..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 text-sm font-bold font-cairo shadow-inner"
            />
          </div>

          {/* 3. Neon Accent Color */}
          <div>
            <label className="block text-slate-400 font-mono mb-2">لون الإضاءة النيون للدرع والخوذة:</label>
            <div className="flex items-center gap-3">
              {COLOR_PRESETS.map((p) => (
                <button
                  key={p.hex}
                  type="button"
                  onClick={() => {
                    sound.playBlip(700, 0.04);
                    setSelectedColor(p.hex);
                  }}
                  className={`w-9 h-9 rounded-full border-2 transition-transform flex items-center justify-center ${
                    selectedColor === p.hex ? 'scale-125 border-white shadow-glow' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: p.hex }}
                  title={p.name}
                >
                  {selectedColor === p.hex && <Check className="w-4 h-4 text-black stroke-[3]" />}
                </button>
              ))}
            </div>
          </div>


          {/* Action Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl font-bold transition-all"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-extrabold rounded-xl shadow-lg shadow-cyan-500/30 transition-all flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>تطبيق وتحديث الأفاتار فوراً</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
