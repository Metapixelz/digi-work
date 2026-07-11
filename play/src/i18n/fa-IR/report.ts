import type { BaseTranslation } from "../i18n-types";

const report: BaseTranslation = {
    block: {
        title: "مسدود کردن",
        content: "مسدود کردن هرگونه ارتباط از و به {userName}. این عمل قابل بازگشت است.",
        unblock: "رفع مسدودیت این کاربر",
        block: "مسدود کردن این کاربر",
    },
    title: "گزارش",
    content: "ارسال یک پیام گزارش به مدیران این اتاق. آنها ممکن است بعداً این کاربر را مسدود کنند.",
    message: {
        title: "پیام شما: ",
        empty: "پیام گزارش نمی‌تواند خالی باشد.",
        error: "خطای پیام گزارش، می‌توانید با مدیر تماس بگیرید.",
    },
    submit: "گزارش این کاربر",
    moderate: {
        title: "مدیریت {userName}",
        block: "مسدود کردن",
        report: "گزارش",
        noSelect: "خطا: هیچ اقدامی انتخاب نشده است.",
    },
};

export default report;