# Sinux

سایت مستندات و معرفی برای هسته‌ی سیستم‌عامل Sinux
([CyberSinook/Sinux](https://github.com/CyberSinook/Sinux))،
ساخته‌شده با [Docusaurus](https://docusaurus.io/) و یک صحنه‌ی سه‌بعدی Three.js.

**آدرس زنده:** https://amdevelopercp-dotcom.github.io/Sinux/

## امکانات سایت

- **بخش مخزن گیت‌هاب:** نمایش آخرین کامیت‌ها و تعداد ستاره‌ها به‌صورت زنده از GitHub API.
- **صفحه‌ی مشارکت‌کنندگان:** نمایش همه‌ی مشارکت‌کنندگان با تشخیص مشارکت‌کنندگان اصلی.
- **مودال حمایت مالی:** دکمه‌ی حمایت با لینک حمایت و آدرس کیف پول ارز دیجیتال (قابل ویرایش در `docusaurus.config.ts`).
- **پشتیبانی دو‌زبانه:** انگلیسی و فارسی (RTL).

## توسعه‌ی محلی

```bash
cd website
npm install      # فقط دفعه اول
npm start        # سرور توسعه در http://localhost:3000
```

## ساخت

```bash
npm run build    # فایل‌های استاتیک در website/build/
npm run serve    # پیش‌نمایش ساخت تولید به‌صورت محلی
```

## پیکربندی

تمام مقادیر قابل پیکربندی (مالک/نام مخزن گیت‌هاب، تنظیمات حمایت مالی) در فیلد
`customFields` در `website/docusaurus.config.ts` قرار دارند و بدون تغییر کد قابل ویرایش هستند.

## محلی‌سازی

برای به‌روزرسانی ترجمه‌های فارسی:

```bash
npm run write-translations -- --locale fa
```

سپس فایل‌های `website/i18n/fa/` را ویرایش کنید.

## استقرار

استقرار از طریق GitHub Actions خودکار است. هر push به `main` که `website/**` را تغییر دهد،
سایت را دوباره می‌سازد و در GitHub Pages منتشر می‌کند. ورک‌فلو در
`.github/workflows/deploy.yml` (ریشه‌ی مخزن) قرار دارد.
