# آموزش ری‌اکت - دکمه تغییر تم (روشن / تاریک)

## 🎯 هدف پروژه

این مخزن با هدف آموزش مفاهیم پایه‌ای ری‌اکت (React) طراحی شده است. تمرکز اصلی بر ساخت یک کامپوننت مستقل برای تغییر تم (Day/Night) است که به دانشجویان نحوه استفاده از state، کامپوننت‌ها و تفکیک کد را آموزش می‌دهد.

---

## 📁 ساختار پروژه

```
src/
├── components/
│   └── ThemeSwitch/
│       ├── index.tsx        ← کامپوننت اصلی دکمه تغییر تم
│       ├── index.css        ← استایل مربوط به دکمه
│       └── cloud-icon.tsx   ← آیکون تزئینی ابر
```

---

## 🧱 توضیح کد ThemeSwitch

### ✅ فایل `index.tsx`

```tsx
import { CloudIcon } from "./cloud-icon";
import "./index.css";
export const ThemeSwitch = () => {
    return (
        <label className="switch">
            <input defaultChecked id="checkbox" type="checkbox" />
            <span className="slider">
                <div className="star star_1" />
                <div className="star star_2" />
                <div className="star star_3" />
                <CloudIcon />
            </span>
        </label>
    );
};
```

<div align="center">
  <img src="Screenshots/day.png" alt="Light Mode" width="100" />
  <img src="Screenshots/night.png" alt="Dark Mode" width="100" />
</div>

---

## 📌 مفاهیم کلیدی که در این پروژه می‌آموزید:

-   تعریف و استفاده از **کامپوننت تابعی** در ری‌اکت
-   استفاده از **useState** برای مدیریت وضعیت (state)
-   مدیریت کلاس‌های CSS بر اساس وضعیت
-   جدا کردن **آیکون‌ها** و اجزای گرافیکی در فایل‌های مستقل
-   استفاده از TypeScript در توسعه کامپوننت‌ها

---

## 🚀 اجرای پروژه

```bash
npm install
npm start
```

سپس پروژه روی `http://localhost:3000` اجرا خواهد شد.

---

## 👨‍🏫 مناسب برای چه کسانی؟

-   دانشجویان تازه‌وارد به ری‌اکت
-   کسانی که می‌خواهند ساختار پروژه‌های کامپوننت‌محور را یاد بگیرند
-   علاقه‌مندان به طراحی رابط کاربری با قابلیت تغییر تم

---

## 📞 اطلاعات تماس

-   **نام:** احسان رشیدی
-   **تلفن:** [+98 913 456 2731](tel:+989134562731)
-   **ایمیل:** [info@ehsanrashidi.ir](mailto:info@ehsanrashidi.ir)
-   **گیت‌هاب:** [github.com/ehsanrashidi](https://github.com/ehsanrashidi)
-   **اینستاگرام:** [instagram.com/ehsanrashidi.dev](https://www.instagram.com/ehsanrashidi.dev)
-   **لینکدین:** [linkedin.com/in/ehsanabdoalrashidi](https://www.linkedin.com/in/ehsanabdoalrashidi)
-   **واتساپ:** [wa.me/989134562731](https://wa.me/989134562731)
-   **وبسایت:** [ehsanrashidi.ir](https://ehsanrashidi.ir/)

---

موفق باشید 🌟
