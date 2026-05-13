import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Scale,
  Shield,
  BriefcaseBusiness,
  CheckCircle2,
  Gavel,
  Clock3,
  Users,
  FileText,
  Menu,
  X,
  Award,
  AlertTriangle,
  Search,
  MessageCircle,
  ClipboardCheck,
  Landmark,
  Lock,
} from "lucide-react";

const img = {
  gromov: "/gromov.jpg.png",
  rogozhkina: "/rogojkina1.jpg.png",
  kichigina: "/kichigina.jpg.png",
  lagutaev: "/lagutaev.jpg.png",
  about: "https://www.gromp.ru/assets/sp/img/dsc07687.jpg",
  caseDrug:
    "https://gromp.ru/upload/iblock/54d/crovxemypisj4cx93yi1m20s48ndnyy3.jpg",
};

const servicesPrivate = [
  "Адвокат по уголовным делам",
  "Адвокат по гражданским делам",
  "Юрист по административным делам",
  "Юрист по наследственным делам",
  "Юрист по банкротству",
  "Жилищные споры",
  "Налоговые споры",
  "Семейные дела",
  "Исполнительное производство",
];

const servicesBusiness = [
  "Арбитражный адвокат",
  "Адвокат по корпоративным спорам",
  "Абонентское обслуживание юридических лиц",
  "Ликвидация ООО",
  "Юрист по налоговым спорам",
  "Правовая защита бизнеса",
  "Банкротство юридических лиц",
  "Страховые споры",
  "Обжалование решений ФАС",
];

const team = [
  ["Громов Артур Степанович", "Председатель МКА «Громов & Партнеры»", img.gromov],
  ["Кичигина Виталия Васильевна", "Адвокат по уголовным делам", img.kichigina],
  ["Лагутаев Антон Владимирович", "Адвокат по уголовным делам", img.lagutaev],
  ["Рогожкина Виктория Валерьевна", "Помощник председателя — секретарь", img.rogozhkina],
];

const detailText = {
  prolog: [
    "В ходе оперативно-профилактических мероприятий, нацеленных на выявление лиц, причастных к незаконному сбыту наркотических средств, сотрудники полиции остановили автомобиль на 47-м километре МКАД в 14:00.",
    "Подсудимый, заблаговременно приобретя наркотические вещества с целью их дальнейшей перепродажи, сел за руль и отправился в путь. При проверке документов полицейские обратили внимание на его нервозное поведение и отчётливый запах марихуаны в салоне автомобиля, что послужило основанием для задержания.",
    "В ходе последующего обыска у водителя в правом наружном кармане был обнаружен свёрток из фольги, а также папироса с марихуаной. Кроме того, под ковриками салона нашли три брикета, которые по результатам проведённой экспертизы оказались каннабисом.",
  ],
  zav: [
    "Суд, руководствуясь положениями части 4 статьи 228.1 УК РФ, вынес обвинительный приговор, назначив подсудимому наказание в виде восьми лет лишения свободы с отбыванием в исправительной колонии строгого режима.",
    "В ходе защиты адвокаты провели комплекс процессуальных мероприятий: детально обсудили с подзащитным обстоятельства совершённых им действий, осуществили сбор и систематизацию доказательств, взаимодействовали с органами следствия и судом.",
    "В результате профессиональной юридической работы удалось добиться зачёта в срок наказания периодов фактического задержания и содержания под стражей — на основании части 3.2 статьи 72 УК РФ.",
  ],
  result:
    "Итогом работы защиты стало назначение наказания ниже минимального предела, предусмотренного санкцией статьи. Для доверителя это существенно изменило правовые последствия дела и позволило добиться более мягкого результата.",
};

const tasks = [
  [
    "minimalnoe-nakazanie-228",
    "Суд назначил минимально возможное наказание по ч. 2 ст. 228 УК РФ",
    "2026-02-01",
    "02.10.2025",
    "Кичигина Виталия Васильевна",
    img.kichigina,
    "Уголовное",
    "10+ лет",
    "3 года условно",
  ],
  [
    "zamena-domashnego-aresta",
    "Суд заменил домашний арест на запрет определённых действий",
    "2026-01-30",
    "30.01.2026",
    "Громов Артур Степанович",
    img.gromov,
    "Мера пресечения",
    "домашний арест",
    "запрет действий",
  ],
  [
    "nakazanie-nizhe-minimalnogo-sbyt",
    "Назначено наказание ниже минимального по сбыту наркотиков",
    "2025-11-12",
    "12.11.2025",
    "Лагутаев Антон Владимирович",
    img.lagutaev,
    "Уголовное",
    "10+ лет",
    "8 лет ниже минимума",
  ],
  [
    "nakazanie-nizhe-minimalnogo",
    "Адвокат добился наказания ниже минимально возможного",
    "2025-10-31",
    "31.10.2025",
    "Кичигина Виталия Васильевна",
    img.kichigina,
    "Уголовное",
    "строгий режим",
    "ниже минимума",
  ],
  [
    "moshennichestvo-kreditovanie",
    "Мошенничество в сфере кредитования",
    "2025-10-02",
    "02.10.2025",
    "Лагутаев Антон Владимирович",
    img.lagutaev,
    "Уголовное",
    "крупный размер",
    "защита",
  ],
  [
    "zadolzhennost-po-oferte",
    "Взыскана задолженность по договору оферты",
    "2025-08-04",
    "04.08.2025",
    "Кичигина Виталия Васильевна",
    img.kichigina,
    "Арбитраж",
    "задолженность",
    "взыскание",
  ],
  [
    "rassrochka-300-millionov",
    "Предоставление рассрочки на 300 миллионов рублей",
    "2025-06-30",
    "30.06.2025",
    "Кичигина Виталия Васильевна",
    img.kichigina,
    "Арбитраж",
    "300 млн ₽",
    "рассрочка",
  ],
  [
    "shtraf-10000",
    "Назначен штраф 10 тысяч рублей за тяжкое преступление",
    "2025-06-20",
    "20.06.2025",
    "Лагутаев Антон Владимирович",
    img.lagutaev,
    "Уголовное",
    "тяжкое обвинение",
    "штраф 10 000 ₽",
  ],
  [
    "zaschita-biznesa",
    "Защита бизнеса при исполнительных действиях",
    "2025-05-01",
    "2025",
    "Громов Артур Степанович",
    img.gromov,
    "Бизнес",
    "арест счетов",
    "защита активов",
  ],
  [
    "razboj-samoupravstvo",
    "Переквалификация с квартирного разбоя на самоуправство",
    "2024-04-10",
    "10.04.2024",
    "Громов Артур Степанович",
    img.gromov,
    "Уголовное",
    "разбой",
    "самоуправство",
  ],
  [
    "otkaz-v-sizo",
    "Отказ в заключении под стражу",
    "2024-03-04",
    "04.03.2024",
    "Кичигина Виталия Васильевна",
    img.kichigina,
    "Мера пресечения",
    "СИЗО",
    "запрет действий",
  ],
  [
    "sbyt-na-hranenie",
    "Переквалификация со сбыта на хранение наркотиков",
    "2023-08-28",
    "28.08.2023",
    "Громов Артур Степанович",
    img.gromov,
    "Уголовное",
    "сбыт",
    "хранение",
  ],
  [
    "sbyt-narkotikov-2023",
    "Назначено наказание ниже минимально возможного по сбыту наркотиков",
    "2023-01-31",
    "31.01.2023",
    "Громов Артур Степанович",
    img.gromov,
    "Уголовное",
    "сбыт",
    "ниже минимума",
  ],
  [
    "prekraschenie-dela",
    "Прекращение уголовного дела и освобождение в зале суда",
    "2023-01-31",
    "31.01.2023",
    "Громов Артур Степанович",
    img.gromov,
    "Уголовное",
    "до 5 лет",
    "освобождение",
  ],
  [
    "trudovoj-spor",
    "Трудовой спор с работодателем",
    "2021-06-17",
    "17.06.2021",
    "Кичигина Виталия Васильевна",
    img.kichigina,
    "Трудовое",
    "увольнение",
    "защита прав",
  ],
  [
    "uvolnenie-za-progul",
    "Увольнение за прогул",
    "2021-02-10",
    "10.02.2021",
    "Кичигина Виталия Васильевна",
    img.kichigina,
    "Трудовое",
    "увольнение",
    "оспаривание",
  ],
].map(([slug, title, sortDate, date, lawyer, photo, category, risk, resultBadge]) => ({
  slug,
  title,
  sortDate,
  date,
  lawyer,
  photo,
  category,
  risk,
  resultBadge,
  role: lawyer.includes("Громов")
    ? "Председатель МКА «Громов & Партнеры»"
    : "Адвокат по уголовным делам",
  short:
    "Дело потребовало комплексной правовой позиции, анализа доказательств и защиты интересов доверителя.",
  caseImage: img.caseDrug,
  ...detailText,
}));

const latestTasks = [...tasks].sort(
  (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
);

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function getTask() {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  return tasks.find((i) => i.slug === slug) || tasks[0];
}

function SafeImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Услуги", "/#services"],
    ["О коллегии", "/company"],
    ["Команда", "/team"],
    ["Наши дела", "/tasks"],
    ["Контакты", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060c]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="font-semibold text-white">
          Громов & Партнеры
        </a>

        <nav className="hidden gap-7 text-sm text-white/60 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+79667967777"
          className="hidden rounded-full bg-[#d7c6a0] px-5 py-2 text-sm font-semibold text-black md:inline-flex"
        >
          Позвонить
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-full border border-white/10 p-2 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          <div className="grid gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-white/70"
              >
                {label}
              </a>
            ))}

            <a
              href="tel:+79667967777"
              className="mt-2 rounded-full bg-[#d7c6a0] px-5 py-3 text-center text-sm font-semibold text-black"
            >
              Позвонить
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer id="contacts" className="bg-black px-5 py-14 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Громов & Партнеры</h2>

          <p className="mt-4 max-w-md text-white/50">
            Московская коллегия адвокатов. Юридическая помощь гражданам и бизнесу.
          </p>
        </div>

        <div className="grid gap-4 text-white/70">
          <a href="tel:+79667967777" className="flex items-center gap-3">
            <Phone size={18} /> +7 966 796 77 77
          </a>

          <a href="mailto:advokat_gromov@mail.ru" className="flex items-center gap-3">
            <Mail size={18} /> advokat_gromov@mail.ru
          </a>

          <p className="flex items-center gap-3">
            <MapPin size={18} /> Москва, Арбат, 30/3, строение 3, офис 1
          </p>
        </div>
      </div>
    </footer>
  );
}

function TaskCard({ item }) {
  return (
   <a
  href={`/task/${item.slug}`}
  className="group flex h-full min-h-[560px] flex-col rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-white shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"
>
      <div className="flex items-start gap-5">
        <SafeImage
          src={item.photo}
          alt={item.lawyer}
          className="h-16 w-16 shrink-0 rounded-full object-cover object-top"
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#d7c6a0]/30 px-3 py-1 text-xs text-[#d7c6a0]">
              {item.category}
            </span>

            <span className="text-sm text-white/40">{item.date}</span>
          </div>

          <h3 className="mt-4 text-xl font-semibold leading-tight md:text-2xl">
            {item.title}
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-red-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-red-200/70">
                Риск
              </p>
              <p className="mt-2 text-sm font-semibold text-red-100">
                {item.risk}
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/70">
                Результат
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-100">
                {item.resultBadge}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-white/55">{item.short}</p>
          <p className="mt-6 text-sm font-semibold text-[#d7c6a0]">{item.lawyer}</p>
          <p className="mt-1 text-sm text-white/40">{item.role}</p>

          <span className="mt-6 inline-flex items-center text-sm font-semibold text-white">
            Подробнее
            <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={16} />
          </span>
        </div>
      </div>
    </a>
  );
}


function FloatingContacts() {
  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-3">
      <a
        href="https://t.me/yourtelegram"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-[#111827]/90 px-5 py-4 text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-[#1f2937]"
      >
        <span className="h-3 w-3 rounded-full bg-[#2AABEE] animate-pulse" />
        <span className="text-sm font-medium">Telegram</span>
      </a>

      <a
        href="https://wa.me/79667967777"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-[#111827]/90 px-5 py-4 text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-[#1f2937]"
      >
        <span className="h-3 w-3 rounded-full bg-[#25D366] animate-pulse" />
        <span className="text-sm font-medium">WhatsApp</span>
      </a>
    </div>
  );
}

function PremiumLoader() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#050507] text-white">
      <div className="text-center">
        <div className="animate-pulse text-5xl font-light tracking-[0.4em] text-[#d7c6a0] md:text-7xl">
          GROMOV
        </div>
        <div className="mt-4 text-sm uppercase tracking-[0.6em] text-white/40">
          & PARTNERS
        </div>
      </div>
    </div>
  );
}

function Consultation() {
  return (
    <section id="form" className="bg-[#070a12] px-5 py-24 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 md:grid-cols-2">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
            Консультация
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Расскажите о ситуации
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-white/60">
            Оставьте заявку и мы свяжемся с вами.
          </p>
        </div>

        <form className="rounded-[2rem] bg-white p-6 text-black">
          <div className="grid gap-4">
            <input
              className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              placeholder="Ваше имя"
            />

            <input
              className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              placeholder="Телефон"
            />

            <textarea
              className="min-h-32 rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              placeholder="Кратко опишите вопрос"
            />

            <button
              type="button"
              className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white"
            >
              Получить консультацию
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070914] text-white">
      <Header />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_20%,rgba(215,198,160,0.20),transparent_30%),radial-gradient(circle_at_15%_15%,rgba(72,88,155,0.22),transparent_28%),linear-gradient(135deg,#030407,#101625_52%,#060812)] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
          <Reveal>
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#d7c6a0]/70">
              Московская коллегия адвокатов
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl xl:text-8xl">
              Юридическая защита нового уровня.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              МКА «Громов & Партнеры» оказывает юридическую помощь гражданам и бизнесу.
              Сложные споры, уголовная защита и сопровождение дел до результата.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#d7c6a0]/25 bg-[#d7c6a0]/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d7c6a0]/70">
                Лучший кейс
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-white/45">Риск</p>
                  <p className="mt-1 text-3xl font-semibold text-red-100">10+ лет</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Категория</p>
                  <p className="mt-1 text-3xl font-semibold">228 УК РФ</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Итог</p>
                  <p className="mt-1 text-3xl font-semibold text-emerald-100">3 года условно</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#case-check"
                className="inline-flex items-center justify-center rounded-full border border-[#d7c6a0] px-7 py-4 text-sm font-semibold text-[#d7c6a0] transition hover:bg-[#d7c6a0] hover:text-black"
              >
                Разобрать дело за 15 минут
                <ArrowRight className="ml-2" size={18} />
              </a>

              <a
                href="/tasks"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Смотреть дела
              </a>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                [Clock3, "24/7", "защита клиентов"],
                [Users, "12", "адвокатов и юристов"],
                [FileText, "15+", "лет опыта"],
                [Award, "100%", "работа по договору"],
              ].map(([Icon, n, t]) => (
                <div
                  key={n}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                >
                  <div className="flex items-end gap-3 text-[#d7c6a0]">
                    <Icon size={28} />
                    <span className="text-4xl font-light">{n}</span>
                  </div>

                  <p className="mt-3 text-sm text-white/60">{t}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto max-w-[520px]">
              <div className="absolute inset-0 rounded-full bg-[#d7c6a0]/10 blur-3xl" />

              <div className="relative z-10 rounded-full border border-[#d7c6a0]/20 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
                <SafeImage
                  src={img.gromov}
                  alt="Громов Артур Степанович"
                  className="aspect-square w-full rounded-full object-cover object-top"
                />
              </div>

              <div className="relative z-20 mt-6 text-center">
                <p className="text-2xl font-semibold">Громов Артур Степанович</p>

                <p className="mt-2 text-sm text-white/55">
                  Председатель МКА «Громов & Партнеры»
                </p>

                <p className="mx-auto mt-5 max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm leading-6 text-white/65">
                  «Лично оцениваем перспективу дела до начала работы.
                  Не обещаем невозможного — строим правовую позицию».
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="case-check" className="bg-[#070a12] px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
              Быстрый разбор
            </p>

            <h2 className="text-4xl font-semibold md:text-6xl">
              Разбор дела за 15 минут
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Выберите ситуацию — и адвокат сразу поймёт, с чего начать разговор.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              [AlertTriangle, "Задержали / вызвали на допрос"],
              [Lock, "Арестовали счета или имущество"],
              [BriefcaseBusiness, "Бизнес-конфликт"],
              [Scale, "Судебный спор"],
              [MessageCircle, "Срочная консультация"],
            ].map(([Icon, title]) => (
              <Reveal key={title}>
                <a
                  href="#form"
                  className="block h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <Icon className="text-[#d7c6a0]" size={30} />

                  <p className="mt-8 text-lg font-semibold leading-6">{title}</p>

                  <span className="mt-6 inline-flex items-center text-sm text-white/60">
                    Выбрать <ArrowRight className="ml-2" size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <AboutPreview />
      <ProcessSection />
      <WhyUsSection />
      <CasesPreview />
      <Consultation />
      <FloatingContacts />
      <Footer />
    </main>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[linear-gradient(180deg,#0b1020,#111423)] px-5 py-24 text-white md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
            Услуги
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Помощь физическим и юридическим лицам
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <a
              href="#private-services"
              className="block rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 transition hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              <Scale size={34} className="text-[#d7c6a0]" />

              <h3 className="mt-8 text-3xl font-semibold">Физическим лицам</h3>

              <p className="mt-4 text-white/60">
                Уголовные, гражданские, семейные, наследственные и другие споры.
              </p>

              <span className="mt-8 inline-flex items-center text-[#d7c6a0]">
                Перейти к услугам <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          </Reveal>

          <Reveal>
            <a
              href="#business-services"
              className="block rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 transition hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              <BriefcaseBusiness size={34} className="text-[#d7c6a0]" />

              <h3 className="mt-8 text-3xl font-semibold">Юридическим лицам</h3>

              <p className="mt-4 text-white/60">
                Арбитраж, сопровождение бизнеса, корпоративные и налоговые споры.
              </p>

              <span className="mt-8 inline-flex items-center text-[#d7c6a0]">
                Перейти к услугам <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div
              id="private-services"
              className="rounded-[2rem] border border-white/10 bg-black/25 p-8"
            >
              <h3 className="text-2xl font-semibold">Помощь физическим лицам</h3>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {servicesPrivate.map((s) => (
                  <a
                    href="#form"
                    key={s}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/20"
                  >
                    <CheckCircle2 size={16} /> {s}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div
              id="business-services"
              className="rounded-[2rem] border border-white/10 bg-black/25 p-8"
            >
              <h3 className="text-2xl font-semibold">Помощь юридическим лицам</h3>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {servicesBusiness.map((s) => (
                  <a
                    href="#form"
                    key={s}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/20"
                  >
                    <CheckCircle2 size={16} /> {s}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section id="about" className="bg-[#181b2a] px-5 py-24 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <SafeImage
            src={img.about}
            alt="Громов и Партнеры"
            className="h-[520px] w-full rounded-[2rem] object-cover"
          />
        </Reveal>

        <Reveal>
          <p className="mb-5 text-3xl italic text-[#d7c6a0]">О нас</p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Громов и Партнеры
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Московская коллегия адвокатов оказывает профессиональную правовую помощь
            на всей территории Российской Федерации.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Команда квалифицированных защитников представляет интересы доверителей
            в судах по уголовным, гражданским, арбитражным и иным категориям дел.
          </p>

          <a
            href="/company"
            className="mt-10 inline-flex items-center rounded-full border border-[#d7c6a0] px-7 py-4 text-sm font-semibold text-[#d7c6a0] hover:bg-[#d7c6a0] hover:text-black"
          >
            Подробнее о компании <ArrowRight className="ml-2" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#0b1020] px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
            Карта защиты
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Как мы ведём дело
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            [Search, "Анализ", "Изучаем документы, риски, сроки и доказательства."],
            [ClipboardCheck, "Стратегия", "Формируем правовую позицию и план действий."],
            [Landmark, "Представительство", "Работаем со следствием, судом и оппонентами."],
            [FileText, "Результат", "Фиксируем итог и предоставляем понятную отчётность."],
          ].map(([Icon, title, text]) => (
            <Reveal key={title}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
                <Icon className="text-[#d7c6a0]" size={30} />

                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-white/60">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="bg-[#111423] px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="text-4xl font-semibold md:text-6xl">
            Почему стоит выбрать <span className="italic text-[#d7c6a0]">нас?</span>
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            [
              "Опыт",
              "За годы работы нами были рассмотрены и успешно выиграны дела самого разного уровня сложности.",
            ],
            [
              "Гарантия",
              "Вы заключаете договор о предоставлении юридической помощи. Мы работаем до получения результата.",
            ],
            [
              "Конфиденциальность",
              "Вся конфиденциальная информация используется только в ваших целях.",
            ],
            [
              "Репутация",
              "Если дело бесперспективно — предупредим заранее.",
            ],
          ].map(([title, text]) => (
            <Reveal key={title}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <h3 className="min-h-[84px] max-w-full break-words text-[26px] font-semibold italic leading-[34px] text-[#d7c6a0]">
  {title}
</h3>

                <p className="mt-6 text-lg leading-8 text-white/60">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesPreview() {
  return (
    <section
      id="cases"
      className="bg-[linear-gradient(180deg,#111423,#070914)] px-5 py-24 text-white md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
              Наши дела
            </p>

            <h2 className="text-4xl font-semibold md:text-6xl">
              Последняя судебная практика
            </h2>
          </div>

          <a
            href="/tasks"
            className="rounded-full bg-[#d7c6a0] px-6 py-3 text-sm font-semibold text-black"
          >
            Все дела
          </a>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latestTasks.slice(0, 6).map((item) => (
            <Reveal key={item.slug}>
              <TaskCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <main className="min-h-screen bg-[#070914] text-white">
      <Header />

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
              Команда
            </p>

            <h1 className="mt-6 text-5xl font-semibold md:text-8xl">
              Наша команда
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
              В коллегии трудится сплоченная команда опытных, целеустремленных
              и высококвалифицированных адвокатов и юристов.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([name, role, photo]) => (
              <Reveal key={name}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-5">
                  <SafeImage
                    src={photo}
                    alt={name}
                    className="aspect-square w-full rounded-[1.5rem] object-cover object-top"
                  />

                  <h3 className="mt-5 text-xl font-semibold">{name}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">{role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Consultation />
      <FloatingContacts />
      <Footer />
    </main>
  );
}

function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#070914] text-white">
      <Header />

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
              О коллегии
            </p>

            <h1 className="mt-6 text-5xl font-semibold md:text-8xl">
              МКА «Громов & Партнеры»
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-white/65">
              Московская коллегия адвокатов оказывает профессиональную правовую
              помощь на всей территории Российской Федерации. Услуги оказываются
              командой квалифицированных защитников с богатым опытом представления
              интересов в судах.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SafeImage
                src={img.about}
                alt="О коллегии"
                className="h-[520px] w-full rounded-[2rem] object-cover"
              />
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
                <h2 className="text-4xl font-semibold">
                  Мы дорожим своим именем и вашим доверием
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/65">
                  Профессиональный подход с максимальной отдачей и чуткое отношение
                  к доверителю — главные принципы нашей деятельности.
                </p>

                <p className="mt-6 text-lg leading-8 text-white/65">
                  Наша команда защищает права, свободы и законные интересы граждан
                  и юридических лиц в судебных и государственных органах по уголовным,
                  гражданским, наследственным, земельным, арбитражным и налоговым делам.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <Consultation />
      <FloatingContacts />
      <Footer />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070914] text-white">
      <Header />

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7c6a0]/70">
              Контакты
            </p>

            <h1 className="mt-6 text-5xl font-semibold md:text-8xl">
              Свяжитесь с нами
            </h1>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              [Phone, "Телефон", "+7 966 796 77 77", "tel:+79667967777"],
              [Mail, "Email", "advokat_gromov@mail.ru", "mailto:advokat_gromov@mail.ru"],
              [
                MapPin,
                "Адрес",
                "г. Москва, ул. Арбат, 30/3, строение 3, офис 1",
                "https://yandex.ru/maps/",
              ],
            ].map(([Icon, title, text, href]) => (
              <Reveal key={title}>
                <a
                  href={href}
                  className="block h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 hover:bg-white/[0.1]"
                >
                  <Icon className="text-[#d7c6a0]" size={32} />

                  <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

                  <p className="mt-4 leading-7 text-white/60">{text}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
              <p className="text-2xl font-semibold">Схема проезда</p>

              <div className="mt-6 flex h-[360px] items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(215,198,160,0.18),transparent_35%),#0b1020] text-center">
                <div>
                  <MapPin className="mx-auto text-[#d7c6a0]" size={44} />

                  <p className="mt-4 text-lg text-white/70">
                    Москва, Арбат, 30/3, строение 3, офис 1
                  </p>

                  <a
                    href="https://yandex.ru/maps/"
                    className="mt-5 inline-flex rounded-full bg-[#d7c6a0] px-6 py-3 text-sm font-semibold text-black"
                  >
                    Открыть карту
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Consultation />
      <FloatingContacts />
      <Footer />
    </main>
  );
}

function TasksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#050505,#111423_45%,#070914)] text-white">
      <Header />

      <section className="px-5 pb-16 pt-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm text-white/40">Главная / Наши дела</p>

            <h1 className="mt-10 text-5xl font-semibold md:text-8xl">
              Наши дела
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
              Судебная практика МКА «Громов & Партнеры».
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latestTasks.map((item) => (
            <Reveal key={item.slug}>
              <TaskCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <FloatingContacts />
      <Footer />
    </main>
  );
}

function TaskDetailPage() {
  const task = getTask();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1020] text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-5 py-24 md:px-8">
        <Reveal>
          <a
            href="/tasks"
            className="mb-10 inline-flex items-center text-sm text-white/60 hover:text-white"
          >
            ← Вернуться ко всем делам
          </a>

          <div className="mb-10 flex items-center gap-5">
            <SafeImage
              src={task.photo}
              alt={task.lawyer}
              className="h-20 w-20 rounded-full object-cover object-top"
            />

            <div>
              <p className="text-2xl font-semibold">{task.lawyer}</p>
              <p className="mt-1 text-white/60">{task.role}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 md:p-8">
            <SafeImage
              src={task.caseImage}
              alt={task.title}
              className="h-[420px] w-full rounded-[2rem] object-cover"
            />

            <p className="mt-10 text-sm uppercase tracking-[0.25em] text-[#d7c6a0]/70">
              {task.category} • {task.date}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              {task.title}
            </h1>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] bg-red-500/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-red-200/70">
                  Риск
                </p>

                <p className="mt-3 text-3xl font-semibold text-red-100">
                  {task.risk}
                </p>
              </div>

              <div className="rounded-[2rem] bg-emerald-500/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-200/70">
                  Результат
                </p>

                <p className="mt-3 text-3xl font-semibold text-emerald-100">
                  {task.resultBadge}
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-white/70">{task.short}</p>

            <div className="mt-14 border-t border-white/10 pt-12">
              <h2 className="text-4xl font-semibold italic text-[#d7c6a0]">
                Пролог
              </h2>

              {task.prolog.map((p, i) => (
                <p key={i} className="mt-6 text-lg leading-9 text-white/70">
                  {p}
                </p>
              ))}

              <h2 className="mt-16 text-4xl font-semibold italic text-[#d7c6a0]">
                Завязка
              </h2>

              {task.zav.map((p, i) => (
                <p key={i} className="mt-6 text-lg leading-9 text-white/70">
                  {p}
                </p>
              ))}

              <h2 className="mt-16 text-4xl font-semibold italic text-[#d7c6a0]">
                Результат
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/70">
                {task.result}
              </p>

              <a
                href="/#form"
                className="mt-12 inline-flex items-center rounded-full bg-[#d7c6a0] px-7 py-4 text-sm font-semibold text-black"
              >
                Обсудить похожее дело <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <FloatingContacts />
      <Footer />
    </main>
  );
}

export default function App() {
  const path = window.location.pathname;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PremiumLoader />;

  if (path.startsWith("/task/")) return <TaskDetailPage />;
  if (path.startsWith("/tasks")) return <TasksPage />;
  if (path.startsWith("/team")) return <TeamPage />;
  if (path.startsWith("/company")) return <CompanyPage />;
  if (path.startsWith("/contact")) return <ContactPage />;

  return <HomePage />;
}
