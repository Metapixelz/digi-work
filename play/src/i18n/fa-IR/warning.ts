import type { BaseTranslation } from "../i18n-types";

const warning: BaseTranslation = {
    title: "هشدار!",
    content: `این جهان به حد خود نزدیک است! می‌توانید ظرفیت آن را <a href="{upgradeLink}" target="_blank">اینجا</a> ارتقا دهید.`,
    limit: "این جهان به حد خود نزدیک است!",
    accessDenied: {
        camera: "دسترسی به دوربین رد شد. اینجا کلیک کنید و مجوزهای مرورگر خود را بررسی کنید.",
        screenSharing: "اشتراک‌گذاری صفحه رد شد. اینجا کلیک کنید و مجوزهای مرورگر خود را بررسی کنید.",
        teleport: "شما حق تله‌پورت به این کاربر را ندارید.",
        room: "دسترسی به اتاق رد شد. شما اجازه ورود به این اتاق را ندارید.",
    },
    importantMessage: "پیام مهم",
    connectionLost: "اتصال قطع شد. در حال اتصال مجدد...",
    connectionLostTitle: "اتصال قطع شد",
    connectionLostSubtitle: "در حال اتصال مجدد",
    waitingConnectionTitle: "در انتظار اتصال",
    waitingConnectionSubtitle: "در حال اتصال",
    megaphoneNeeds: "برای استفاده از مگافون، باید دوربین یا میکروفون خود را فعال کنید یا صفحه خود را به اشتراک بگذارید.",
    mapEditorShortCut: "هنگام تلاش برای باز کردن ویرایشگر نقشه خطایی رخ داد.",
    mapEditorNotEnabled: "ویرایشگر نقشه در این جهان فعال نیست.",
    popupBlocked: {
        title: "پاپ‌آپ مسدود شد",
        content: "لطفاً پاپ‌آپ‌ها را برای این وب‌سایت در تنظیمات مرورگر خود فعال کنید.",
        done: "باشه",
    },
};

export default warning;