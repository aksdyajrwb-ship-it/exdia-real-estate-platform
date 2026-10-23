import Link from "next/link";

export default function PropertiesPage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/"><span className="brand-mark">E</span><span><strong>EXDIA</strong><small>REAL ESTATE</small></span></Link>
        <div className="side-label">القائمة الرئيسية</div>
        <Link className="nav-link" href="/">◫ <span>لوحة التحكم</span></Link>
        <Link className="nav-link active" href="/properties">⌂ <span>العقارات</span></Link>
        <div className="side-label">إدارة الأعمال</div>
        <div className="nav-link muted">♙ <span>العملاء والملاك</span></div>
        <div className="nav-link muted">⇄ <span>الصفقات</span></div>
        <div className="nav-link muted">▤ <span>الحسابات والعمولات</span></div>
        <div className="sidebar-bottom"><span className="status-dot" /><span>نسخة تأسيسية</span></div>
      </aside>
      <section className="main-area">
        <header className="topbar">
          <div><Link className="back-link" href="/">← لوحة التحكم</Link><h1>إدارة العقارات</h1></div>
          <div className="user-chip"><span className="avatar">E</span><span><strong>إدارة EXDIA</strong><small>مساحة الإدارة</small></span></div>
        </header>
        <section className="page-intro">
          <div><span className="gold-kicker">PROPERTY MANAGEMENT</span><h2>بيانات عقاراتك تبدأ من هنا</h2><p>هذه شاشة تأسيسية. لم يتم حفظ عقارات أو إنشاء بيانات تجريبية.</p></div>
          <span className="intro-icon">⌂</span>
        </section>
        <section className="empty-state">
          <div className="empty-icon">⌂</div>
          <h3>قاعدة العقارات جاهزة للتوصيل</h3>
          <p>الخطوة التالية هي إعداد PostgreSQL وربط نموذج إضافة العقار بقاعدة البيانات، حتى تبقى البيانات محفوظة بعد تسجيل الخروج أو إعادة النشر.</p>
          <div className="checklist">
            <div><span className="check-number">01</span><span><strong>إعداد قاعدة البيانات</strong><small>إضافة رابط PostgreSQL الآمن في متغيرات البيئة.</small></span></div>
            <div><span className="check-number">02</span><span><strong>تفعيل عمليات الحفظ والتعديل</strong><small>واجهات API مرتبطة بقاعدة البيانات الفعلية.</small></span></div>
            <div><span className="check-number">03</span><span><strong>رفع الصور والنشر</strong><small>ربط الصور وحالة العقار بالموقع العام بعد الاختبار.</small></span></div>
          </div>
          <Link className="secondary-button" href="/">العودة للوحة التحكم</Link>
        </section>
        <footer className="footer"><span>© {new Date().getFullYear()} EXDIA GROUP</span><span>بيانات حقيقية فقط — بدون بيانات وهمية</span></footer>
      </section>
    </main>
  );
}
