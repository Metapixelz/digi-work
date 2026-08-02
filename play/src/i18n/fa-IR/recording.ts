import type { Translation } from "../i18n-types";

const translation: Translation = {
    refresh: "تازه کردن",
    title: "لیست ضبط شما",
    noRecordings: "هیچ ضبطی یافت نشد",
    errorFetchingRecordings: "هنگام واکشی ضبط‌ها خطایی روی داد",
    expireIn: "{days} روز منقضی می شود{s}",
    expiresOn: "در {date} منقضی می شود",
    download: "دانلود کنید",
    close: "بستن",
    recordingList: "ضبط ها",
    viewList: "نمای فهرستی",
    viewCards: "نمای کارت",
    back: "برگشت",
    actions: "اقدامات",
    contextMenu: {
        openInNewTab: "در تب جدید باز کنید",
        delete: "حذف کنید",
    },
    notification: {
        deleteNotification: "ضبط با موفقیت حذف شد",
        deleteFailedNotification: "ضبط حذف نشد",
        startFailedNotification: "شروع ضبط ناموفق بود",
        stopFailedNotification: "ضبط متوقف نشد",
        recordingStarted: "{name} ضبط را آغاز کرده است.",
        downloadFailedNotification: "فایل ضبط شده دانلود نشد",
        recordingComplete: "ضبط کامل شد",
        recordingIsInProgress: "ضبط در حال انجام است",
        unexpectedlyStoppedNotification: "ضبط به طور غیرمنتظره ای متوقف شد",
        recordingSaved: "ضبط شما با موفقیت ذخیره شد.",
        howToAccess: "برای دسترسی به ضبط های خود:",
        viewRecordings: "مشاهده موارد ضبط شده",
    },
    actionbar: {
        title: {
            start: "شروع به ضبط کنید",
            stop: "ضبط را متوقف کنید",
            inProgress: "یک ضبط در حال انجام است",
        },
        desc: {
            needLogin: "برای ضبط باید وارد سیستم شوید.",
            needPremium: "برای ضبط باید حق بیمه باشید.",
            advert: "به همه شرکت کنندگان اطلاع داده می شود که در حال شروع ضبط هستید.",
            yourRecordInProgress: "ضبط در حال انجام است، برای توقف آن کلیک کنید.",
            inProgress: "یک ضبط در حال انجام است",
            notEnabled: "ضبط برای این دنیا غیرفعال است.",
        },
        spacePicker: {
            megaphone: "ضبط مگافون",
            discussion: "ضبط بحث",
        },
    },
};

export default translation;
