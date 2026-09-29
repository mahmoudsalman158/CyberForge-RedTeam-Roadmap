import React from 'react';
import { STAGES_DATA, THEMED_ZONES } from '../data/stagesData';
import { Shield, CheckCircle2, Lock, ArrowLeft, Trophy, Terminal, Globe, Crosshair, Radar, FileText, Cloud, Award } from 'lucide-react';
import { sound } from './AudioSynthesizer';

const ZONE_ICONS = {
  'zone-foundations': Shield,
  'zone-terminal': Terminal,
  'zone-recon': Radar,
  'zone-web': Globe,
  'zone-arenas': Trophy,
  'zone-ad': Lock,
  'zone-redteam': Crosshair,
  'zone-reporting': FileText,
  'zone-cloud': Cloud,
  'zone-capstone': Award
};

export default function InteractiveMapGrid({ onSelectStage, completedChecklist = [] }) {
  return (
    <div className="space-y-10 py-6 max-w-7xl mx-auto px-4 animate-fade-in">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          The 20-Milestone Red Team Master Journey
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          خارطة مسارات الأكاديمية السيبرانية التفاعلية
        </h2>
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
          رحلة تعليمية ممنهجة تبدأ من التأسيس العتادي والشبكات، مروراً باحتراف لينكس وثغرات OWASP Top 10 و Burp Suite، وحتى كسر أكتيف دايركتوري وإدارة عمليات الريد تيم المتقدمة.
        </p>
      </div>

      {/* Themed Zones Sections */}
      <div className="space-y-12">
        {THEMED_ZONES.map((zone) => {
          const zoneStages = STAGES_DATA.filter(s => zone.stages.includes(s.id));
          const IconComp = ZONE_ICONS[zone.id] || Shield;

          return (
            <div key={zone.id} className="space-y-4">
              {/* Zone Header Banner */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-lg"
                  style={{
                    backgroundColor: `${zone.color}15`,
                    borderColor: `${zone.color}40`,
                    color: zone.color
                  }}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{zone.nameAr}</h3>
                  <span className="text-xs font-mono text-slate-500">{zone.nameEn}</span>
                </div>
              </div>

              {/* Stages Grid in this Zone */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {zoneStages.map((stage) => {
                  const completedCount = stage.checklist.filter(c => completedChecklist.includes(c.id)).length;
                  const totalCount = stage.checklist.length;
                  const isDone = totalCount > 0 && completedCount === totalCount;

                  return (
                    <div
                      key={stage.id}
                      onClick={() => {
                        sound.playSelect();
                        onSelectStage(stage.id);
                      }}
                      className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400 hover:bg-slate-900 transition-all flex flex-col justify-between gap-4 shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden"
                    >
                      {/* Top Accent Line */}
                      <div
                        className="absolute top-0 right-0 left-0 h-1 transition-all group-hover:h-1.5"
                        style={{ backgroundColor: zone.color }}
                      />

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                            المحطة {stage.id}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-slate-400">
                              {stage.difficulty}
                            </span>
                            {isDone && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </div>
                        </div>

                        <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors leading-snug">
                          {stage.titleAr}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                          {stage.brief}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span className="text-amber-400 font-bold">+{stage.xpReward} XP</span>
                        <div className="flex items-center gap-1.5 text-cyan-400 group-hover:translate-x-[-4px] transition-transform font-bold">
                          <span>فتح المحطة</span>
                          <ArrowLeft className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
