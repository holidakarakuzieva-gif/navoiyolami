import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { teacherLessonPlan } from '../../data/teacherData';
import {
  GraduationCap,
  Clock,
  Printer,
  Users,
  CheckCircle2,
  FileText,
  QrCode,
  Award,
  Layers,
  Sparkles,
  Download
} from 'lucide-react';

export const TeacherDeskView: React.FC = () => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'plan' | 'rubric' | 'worksheets' | 'qrcode'>('plan');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6 no-print">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
            <span>{language === 'uz' ? 'Metodik xona' : 'Методический кабинет'}</span>
            <span>·</span>
            <span>{language === 'uz' ? 'O‘qituvchi kabineti va Print Lab' : 'Педагогическая поддержка'}</span>
          </div>

          <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-emerald-800 dark:text-emerald-400" />
            <span>{language === 'uz' ? 'O‘qituvchi uchun' : 'Кабинет учителя'}</span>
          </h1>

          <p className="text-stone-600 dark:text-stone-300 text-sm max-w-2xl">
            {language === 'uz'
              ? 'Umumiy o‘rta ta’lim maktablarining 8-sinf rusiyzabon sinflarida o‘zbek tili darslarini zamonaviy mezonlar asosida tashkil etish uchun 45 daqiqalik dars ishlanmasi, rubrikalar va tarqatma materiallar.'
              : 'Готовые поурочные планы на 45 минут, критериальное оценивание (рубрикатор), дифференцированные раздатки и материалы для печати.'}
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-colors cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-xs"
        >
          <Printer className="w-4 h-4" />
          <span>{language === 'uz' ? 'Dars ishlanmasini chop etish' : 'Распечатать план урока'}</span>
        </button>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-3 no-print">
        <button
          onClick={() => setActiveTab('plan')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'plan'
              ? 'bg-emerald-800 text-white'
              : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>{language === 'uz' ? '45 daqiqalik dars rejasi' : '45-минутный план'}</span>
        </button>

        <button
          onClick={() => setActiveTab('rubric')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'rubric'
              ? 'bg-emerald-800 text-white'
              : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>{language === 'uz' ? 'Baholash mezonlari (Rubrika)' : 'Критерии оценивания'}</span>
        </button>

        <button
          onClick={() => setActiveTab('worksheets')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'worksheets'
              ? 'bg-emerald-800 text-white'
              : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>{language === 'uz' ? 'Tarqatma ish varaqlari (Print Lab)' : 'Раздаточные листы (Print)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('qrcode')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'qrcode'
              ? 'bg-emerald-800 text-white'
              : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
          }`}
        >
          <QrCode className="w-4 h-4" />
          <span>{language === 'uz' ? 'Sinf uchun QR-kod' : 'QR-код для класса'}</span>
        </button>
      </div>

      {/* TAB 1: 45-MINUTE STRUCTURED LESSON PLAN */}
      {activeTab === 'plan' && (
        <div className="space-y-8 print-page">
          {/* Passport / Overview Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                {teacherLessonPlan.grade} · {teacherLessonPlan.classType}
              </span>
              <h2 className="font-display-title text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                {teacherLessonPlan[language === 'uz' ? 'themeUz' : 'themeRu']}
              </h2>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {language === 'uz' ? 'Darsning maqsadlari:' : 'Цели урока:'}
              </h4>
              <ul className="space-y-1">
                {teacherLessonPlan[language === 'uz' ? 'objectivesUz' : 'objectivesRu'].map((obj, oIdx) => (
                  <li key={oIdx} className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-xs text-stone-500">
              <span className="font-semibold">{language === 'uz' ? 'Zarur vositalar: ' : 'Оборудование: '}</span>
              <span>{teacherLessonPlan[language === 'uz' ? 'equipmentUz' : 'equipmentRu'].join(', ')}</span>
            </div>
          </div>

          {/* Timing Breakdown Table */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100">
              {language === 'uz' ? '45 daqiqalik dars bosqichlari (Xronometraj)' : 'Хронометраж урока (45 минут)'}
            </h3>

            <div className="space-y-3">
              {teacherLessonPlan.timing.map((item, tIdx) => (
                <div
                  key={tIdx}
                  className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 grid grid-cols-1 md:grid-cols-12 gap-3 items-start"
                >
                  <div className="md:col-span-3">
                    <span className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 block">
                      {item[language === 'uz' ? 'stageUz' : 'stageRu']}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded inline-block mt-1">
                      {item.minutes} {language === 'uz' ? 'daqiqa' : 'минут'}
                    </span>
                  </div>

                  <div className="md:col-span-6 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    <span className="font-semibold block mb-0.5 text-stone-900 dark:text-stone-100">
                      {language === 'uz' ? 'O‘quvchilar faoliyati:' : 'Деятельность учащихся:'}
                    </span>
                    {item[language === 'uz' ? 'activityUz' : 'activityRu']}
                  </div>

                  <div className="md:col-span-3 text-[11px] text-stone-600 dark:text-stone-400">
                    <span className="font-semibold block mb-0.5 text-stone-800 dark:text-stone-200">
                      {language === 'uz' ? 'O‘qituvchi roli:' : 'Роль педагога:'}
                    </span>
                    {item[language === 'uz' ? 'teacherRoleUz' : 'teacherRoleRu']}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Activities & Differentiated Homework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <h4 className="font-display-title text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-700" />
                <span>{language === 'uz' ? 'Guruhli faoliyat (3 ta jamoa)' : 'Групповая работа (3 команды)'}</span>
              </h4>
              <div className="space-y-2.5">
                {teacherLessonPlan[language === 'uz' ? 'groupWorkUz' : 'groupWorkRu'].map((gw, gIdx) => (
                  <div key={gIdx} className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800 text-xs space-y-1">
                    <span className="font-bold text-emerald-800 dark:text-emerald-400 block">{gw.groupName}</span>
                    <p className="text-stone-600 dark:text-stone-300">{gw.task}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <h4 className="font-display-title text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{language === 'uz' ? 'Uyga vazifa variantlari' : 'Варианты домашнего задания'}</span>
              </h4>
              <div className="space-y-2.5">
                {teacherLessonPlan[language === 'uz' ? 'homeworkOptionsUz' : 'homeworkOptionsRu'].map((hw, hIdx) => (
                  <div key={hIdx} className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800 text-xs text-stone-700 dark:text-stone-300">
                    {hw}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CRITERIA RUBRICS */}
      {activeTab === 'rubric' && (
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-3">
            <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100">
              {language === 'uz' ? 'O‘quvchilarni baholash mezonlari (100 ballik tizim)' : 'Критерии оценивания (100-балльная шкала)'}
            </h3>
            <p className="text-xs text-stone-500">
              {language === 'uz' ? 'Har bir mezon 25 balldan iborat bo‘lib, o‘quvchining amaliy ko‘nikmalarini adolatli baholaydi.' : '4 критерия по 25 баллов для всесторонней и объективной оценки знаний.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teacherLessonPlan.assessmentRubric.map((rubric, rIdx) => (
              <div
                key={rIdx}
                className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                    {rubric[language === 'uz' ? 'criterionUz' : 'criterionRu']}
                  </h4>
                  <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    {rubric.maxScore} {language === 'uz' ? 'ball' : 'баллов'}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {rubric[language === 'uz' ? 'descriptorsUz' : 'descriptorsRu']}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PRINT LAB (Worksheets) */}
      {activeTab === 'worksheets' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-amber-300 uppercase">Print Lab</span>
              <h3 className="font-display-title text-xl font-bold">
                {language === 'uz' ? 'Darslik tarqatma ish varaqasi' : 'Раздаточный рабочий лист'}
              </h3>
              <p className="text-xs text-stone-300 max-w-xl">
                {language === 'uz'
                  ? 'Sinfda internet yo‘q bo‘lsa yoki qog‘ozda ishlash zarur bo‘lganda ushbu varaqni to‘g‘ridan-to‘g‘ri printerga yuboring.'
                  : 'Готовый двухсторонний лист для самостоятельной или контрольной работы на уроке.'}
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 self-start sm:self-auto"
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'uz' ? 'Chop etish (Print)' : 'Печать листа'}</span>
            </button>
          </div>

          {/* Printable Worksheet Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white text-stone-900 border border-stone-300 shadow-sm space-y-6 print-page">
            <div className="text-center space-y-1 border-b pb-4">
              <span className="text-[11px] uppercase font-bold text-stone-500">
                O‘ZBEKISTON RESPUBLIKASI MAKTAB TA’LIMI · 8-SINF
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-stone-950">
                O‘ZBEK TILI DARSI BO‘YICHA MUSTAQIL ISH VARAQASI
              </h3>
              <p className="text-xs text-stone-500 italic">
                Mavzu: Alisher Navoiy hayoti, ijodi va «Xamsa» dostonlari
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs py-2 border-b">
              <div>
                <span className="font-semibold">O‘quvchining F.I.Sh: </span>
                <span className="inline-block border-b border-stone-400 w-48"></span>
              </div>
              <div>
                <span className="font-semibold">Sana va sinf: </span>
                <span className="inline-block border-b border-stone-400 w-32"></span>
              </div>
            </div>

            {/* Task 1 */}
            <div className="space-y-2 text-xs">
              <span className="font-bold block">1-topshiriq. Tarixiy faktlarni to‘ldiring:</span>
              <p className="leading-loose">
                Alisher Navoiy ...............-yilda ............... shahrida tug‘ilgan. U turkiy tilda birinchi marta ............... deb nomlangan beshta doston yaratdi.
              </p>
            </div>

            {/* Task 2 */}
            <div className="space-y-2 text-xs">
              <span className="font-bold block">2-topshiriq. So‘zlarni ma’nosi bilan chiziqlar yordamida tutashtiring:</span>
              <div className="grid grid-cols-2 gap-4 p-3 bg-stone-50 border rounded-lg">
                <div className="space-y-1">
                  <div>1. Ilm</div>
                  <div>2. Adolat</div>
                  <div>3. Saxovat</div>
                  <div>4. Sadoqat</div>
                </div>
                <div className="space-y-1">
                  <div>A. Справедливость</div>
                  <div>B. Преданность, верность</div>
                  <div>C. Знание, наука</div>
                  <div>D. Щедрость</div>
                </div>
              </div>
            </div>

            {/* Task 3 */}
            <div className="space-y-2 text-xs">
              <span className="font-bold block">3-topshiriq. Quyidagi hikmatni o‘zbek tilida 2-3 jumla bilan sharhlang:</span>
              <p className="italic font-serif-title text-sm">
                «Odamiy ersang demagil odamiy, Onikim yo‘q xalq g‘amidin g‘ami».
              </p>
              <div className="border-b border-stone-300 h-6"></div>
              <div className="border-b border-stone-300 h-6"></div>
              <div className="border-b border-stone-300 h-6"></div>
            </div>

            <div className="flex justify-between text-xs pt-4 border-t text-stone-500">
              <span>Baho: ___________</span>
              <span>O‘qituvchi imzosi: ___________</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: QR CODE CLASSROOM SIMULATOR */}
      {activeTab === 'qrcode' && (
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs text-center space-y-6">
          <div>
            <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100">
              {language === 'uz' ? 'Sinf uchun tezkor kirish QR-kodi' : 'QR-код для учащихся'}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              {language === 'uz'
                ? 'Proyektorda ko‘rsatib, o‘quvchilarga platformaning dars yoki test sahifasini telefonlarida ochish imkonini bering.'
                : 'Продемонстрируйте на интерактивной доске, чтобы класс открыл платформу на смартфонах.'}
            </p>
          </div>

          {/* SVG QR Code Simulation */}
          <div className="w-56 h-56 mx-auto p-4 bg-white rounded-2xl border-2 border-stone-900 flex items-center justify-center shadow-md">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              {/* Outer corners */}
              <rect x="10" y="10" width="24" height="24" fill="#064e3b" />
              <rect x="14" y="14" width="16" height="16" fill="white" />
              <rect x="18" y="18" width="8" height="8" fill="#064e3b" />

              <rect x="66" y="10" width="24" height="24" fill="#064e3b" />
              <rect x="70" y="14" width="16" height="16" fill="white" />
              <rect x="74" y="18" width="8" height="8" fill="#064e3b" />

              <rect x="10" y="66" width="24" height="24" fill="#064e3b" />
              <rect x="14" y="70" width="16" height="16" fill="white" />
              <rect x="18" y="74" width="8" height="8" fill="#064e3b" />

              {/* Data modules */}
              <rect x="40" y="12" width="6" height="6" fill="#064e3b" />
              <rect x="50" y="12" width="6" height="6" fill="#064e3b" />
              <rect x="42" y="24" width="8" height="8" fill="#064e3b" />
              <rect x="54" y="28" width="6" height="6" fill="#064e3b" />
              <rect x="12" y="44" width="6" height="6" fill="#064e3b" />
              <rect x="24" y="48" width="6" height="6" fill="#064e3b" />
              <rect x="36" y="42" width="10" height="10" fill="#064e3b" />
              <rect x="52" y="44" width="8" height="8" fill="#064e3b" />
              <rect x="68" y="46" width="6" height="6" fill="#064e3b" />
              <rect x="80" y="42" width="8" height="8" fill="#064e3b" />
              <rect x="40" y="64" width="8" height="8" fill="#064e3b" />
              <rect x="52" y="68" width="8" height="8" fill="#064e3b" />
              <rect x="68" y="66" width="8" height="8" fill="#064e3b" />
              <rect x="80" y="72" width="8" height="8" fill="#064e3b" />
            </svg>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-xs text-stone-900 dark:text-stone-100 block">
              JOZIBALI O‘ZBEK TILI · 8-SINF
            </span>
            <span className="text-[11px] text-stone-500 block">
              https://jozibali-uzbek-tili.edu.uz
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
