import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  FileText,
  Box,
} from "lucide-react";

export default function Resume() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-4xl mx-auto" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* 實習經歷 */}
        <div className="border-b border-dashed border-slate-700/50 pb-12">
          <div className="mb-8">
            <h2 className="inline-flex items-center gap-2 bg-teal-600/80 text-white px-3 py-1.5 font-bold tracking-widest text-xl rounded shadow-lg shadow-teal-500/20">
              <Briefcase className="w-5 h-5" />
              實習經歷
            </h2>
          </div>
          <div className="space-y-8 pl-4 border-l-2 border-teal-500/30">
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-teal-400"></div>
              <h3 className="text-xl font-bold text-teal-400 mb-2">2025-6</h3>
              <ul className="list-disc list-inside text-slate-300 ml-2 marker:text-slate-500">
                <li>御風輪實習</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-teal-400"></div>
              <h3 className="text-xl font-bold text-teal-400 mb-2">2025-7</h3>
              <ul className="list-disc list-inside text-slate-300 ml-2 marker:text-slate-500">
                <li>大島丸操船訓練</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 學歷 */}
        <div className="border-b border-dashed border-slate-700/50 pb-12">
          <div className="mb-8">
            <h2 className="inline-flex items-center gap-2 bg-teal-600/80 text-white px-3 py-1.5 font-bold tracking-widest text-xl rounded shadow-lg shadow-teal-500/20">
              <GraduationCap className="w-5 h-5" />
              學歷
            </h2>
          </div>
          <div className="pl-4 border-l-2 border-teal-500/30">
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-teal-400"></div>
              <h3 className="text-xl font-bold text-teal-400 mb-2">2022</h3>
              <p className="text-slate-300">東海國中：國中畢業</p>
            </div>
          </div>
        </div>

        {/* 語言能力 */}
        <div className="border-b border-dashed border-slate-700/50 pb-12">
          <div className="mb-8">
            <h2 className="inline-flex items-center gap-2 bg-teal-600/80 text-white px-3 py-1.5 font-bold tracking-widest text-xl rounded shadow-lg shadow-teal-500/20">
              <Languages className="w-5 h-5" />
              語言能力
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-teal-400">英文</h3>
                <span className="bg-slate-300 text-slate-800 text-xs px-2 py-0.5 rounded font-medium">
                  精通
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-1 marker:text-slate-500">
                <li>TOEIC 300</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-teal-400">台語</h3>
                <span className="bg-slate-300 text-slate-800 text-xs px-2 py-0.5 rounded font-medium">
                  精通
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 專業證照 */}
        <div className="border-b border-dashed border-slate-700/50 pb-12">
          <div className="mb-8">
            <h2 className="inline-flex items-center gap-2 bg-teal-600/80 text-white px-3 py-1.5 font-bold tracking-widest text-xl rounded shadow-lg shadow-teal-500/20">
              <Award className="w-5 h-5" />
              專業證照
            </h2>
          </div>
          <div className="pl-4 border-l-2 border-teal-500/30">
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-teal-400"></div>
              <h3 className="text-xl font-bold text-teal-400 mb-4">航海</h3>
              <ul className="list-disc list-inside text-slate-300 ml-2 space-y-2 marker:text-slate-500">
                <li>基安四小證</li>
                <li>保全證照</li>
                <li>ARPA證照</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 自傳 */}
        <div className="border-b border-dashed border-slate-700/50 pb-12">
          <div className="mb-8">
            <h2 className="inline-flex items-center gap-2 bg-teal-600/80 text-white px-3 py-1.5 font-bold tracking-widest text-xl rounded shadow-lg shadow-teal-500/20">
              <FileText className="w-5 h-5" />
              自傳
            </h2>
          </div>
          <div className="pl-4 border-l-2 border-teal-500/30 space-y-4 text-slate-300 leading-relaxed">
            <p>
              我叫邱新諺，來自台東，是家中的長子，有一個就讀高中的弟弟。從小我對學習充滿好奇心，理解能力也比同齡人快很多，我他媽超強，因此在求學過程中參加過不少比賽，累積了許多不同的經驗與成果。國中時考上數理資優班，讓我接觸到更扎實也更具挑戰性的課程，培養了我獨立思考與解決問題的能力。
            </p>
            <p>
              成長過程中，我逐漸明白責任的重要。身為長子，我希望能成為家人的依靠，因此做事一向認真踏實，不輕易放棄。面對困難時，我習慣先冷靜分析，再一步一步找出解決方法，而不是逃避問題。這樣的態度也幫助我在課業與生活中持續進步。
            </p>
            <p>
              除了學習之外，我也重視自我成長與視野的拓展。我喜歡接觸不同領域的新知，無論是閱讀、音樂或與人交流，都讓我對世界有更多理解。我相信，一個人真正的實力不只來自成績，更來自持續學習的習慣與面對挑戰的勇氣。未來，我希望能在穩定中不斷突破自己，成為一個更成熟、更有能力承擔責任的人。
            </p>
          </div>
        </div>

        {/* 3D模型 */}
        <div className="pb-4">
          <div className="mb-8">
            <h2 className="inline-flex items-center gap-2 bg-teal-600/80 text-white px-3 py-1.5 font-bold tracking-widest text-xl rounded shadow-lg shadow-teal-500/20">
              <Box className="w-5 h-5" />
              3D模型
            </h2>
          </div>
          <div className="pl-4 border-l-2 border-teal-500/30">
            <a
              href="https://studio.tripo3d.ai/3d-model/eae20fce-a427-4f4a-8353-204348c1cf86?invite_code=INWEUT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline break-all font-mono"
            >
              https://studio.tripo3d.ai/3d-model/eae20fce-a427-4f4a-8353-204348c1cf86?invite_code=INWEUT
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
