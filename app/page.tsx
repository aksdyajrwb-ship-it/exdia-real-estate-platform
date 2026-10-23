import Link from "next/link";

const modules = [
  { icon: "⌂", title: "العقارات", desc: "إدارة الوحدات والأسعار والصور وحالة النشر", status: "المرحلة الأولى", href: "/properties" },
  { icon: "♙", title: "العملاء والملاك", desc: "ملفات العملاء والملاك وربطها بالعقارات", status: "لاحقًا", href: "#" },
  { icon: "⇄", title: "الصفقات", desc: "متابعة مراحل البيع والإيجار", status: "لاحقًا", href: "#" },
  { icon: "▤", title: "الحسابات والعمولات", desc: "الإيرادات والمصروفات وعمولات المسوقين", status: "لاحقًا", href: "#" },
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <span className="brand-mark">E</span>
          <span><strong>EXDIA</strong><small>REAL ESTATE</small></span>
        </Link>
        <div className="side-label">القائمة الرئيسية</div>
        <Link className="nav-link active" href="/">◫ <span>لوحة التحكم</span></Link>
        <Link className="nav-link" href="/properties">⌂ <span>العقارات</span></Link>
        <div className="side-label">إدارة الأعمال</div>
        <div className="nav-link muted">♙ <span>العملاء والملاك</span></div>
        <div className="nav-link muted">⇄ <span>الصفقات</span></div>
        <div className="nav-link muted">▤ <span>الحسابات والعمولات</span></div>
        <div className="sidebar-bottom">
          <span className="status-dot" />
          <span>نسخة تأسيسية</span>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <div><span className="eyebrow">مساحة العمل</span><h1>لوحة التحكم</h1></div>
          <div className="user-chip"><span className="avatar">E</span><span><strong>إدارة EXDIA</strong><small>مساحة الإدارة</small></span></div>
        </header>

        <section className="welcome-panel">
          <div className="welcome-copy">
            <span className="gold-kicker">EXDIA REAL ESTATE MANAGEMENT</span>
            <h2>كل أعمالك العقارية،<br /><em>في مكان واحد.</em></h2>
            <p>منصة موحّدة لإدارة العقارات والعملاء والصفقات والحسابات، مع تجهيز الربط بقاعدة بيانات دائمة.</p>
            <Link href="/properties" className="primary-button">فتح إدارة العقارات <span>←</span></Link>
          </div>
          <div className="welcome-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="building building-back" />
            <div className="building building-front"><div className="building-windows" /></div>
            <div className="art-caption">BUILD WITH CONFIDENCE</div>
          </div>
        </section>

        <div className="section-heading"><div><h2>أقسام المنصة</h2><p>سيتم تفعيل الأقسام تدريجيًا مع الحفاظ على البيانات.</p></div><span className="section-count">04 أقسام</span></div>
        <div className="module-grid">
          {modules.map((item) => (
            <Link className={`module-card ${item.href === "#" ? "module-disabled" : ""}`} href={item.href} key={item.title}>
              <div className="module-card-top"><span className="module-icon">{item.icon}</span><span className={`module-status ${item.status === "المرحلة الأولى" ? "status-ready" : ""}`}>{item.status}</span></div>
              <h3>{item.title}</h3><p>{item.desc}</p><span className="card-arrow">←</span>
            </Link>
          ))}
        </div>
        <footer className="footer"><span>© {new Date().getFullYear()} EXDIA GROUP</span><span>إدارة عقارية أكثر وضوحًا</span></footer>
      </section>
    </main>
  );
}
