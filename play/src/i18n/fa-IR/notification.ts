import type { Translation } from "../i18n-types";

const translation: Translation = {
    discussion: "{name} می‌خواهد با شما صحبت کند",
    message: "{name} یک پیام ارسال می‌کند",
    chatRoom: "در اتاق چت",
    askToMuteMicrophone: "می‌توانم میکروفون شما را بی‌صدا کنم؟",
    askToMuteCamera: "می‌توانم دوربین شما را بی‌صدا کنم؟",
    microphoneMuted: "میکروفون شما توسط یک مدیر بی‌صدا شد",
    cameraMuted: "دوربین شما توسط یک مدیر بی‌صدا شد",
    announcement: "اطلاعیه",
    open: "باز کردن",
    help: {
        title: "دسترسی به اعلان‌ها رد شد",
        permissionDenied: "دسترسی رد شد",
        content:
            "هیچ بحثی را از دست ندهید. اعلان‌ها را فعال کنید تا زمانی که کسی می‌خواهد با شما صحبت کند، حتی اگر در تب digi-work نیستید، مطلع شوید.",
        firefoxContent:
            'لطفاً کادر "این تصمیم را به خاطر بسپار" را علامت بزنید، اگر نمی‌خواهید فایرفاکس مدام از شما اجازه بگیرد.',
        refresh: "رفرش",
        continue: "ادامه بدون اعلان",
        screen: {
            firefox: "/resources/help-setting-notification-permission/en-US-chrome.png",
            chrome: "/resources/help-setting-notification-permission/en-US-chrome.png",
        },
    },
    addNewTag: "افزودن یک تگ جدید: '{tag}'",
    screenSharingError: "نمی‌توان اشتراک‌گذاری صفحه را شروع کرد",
    notificationSentToMuteMicrophone: "A notification was sent to {name} to mute their microphone",
    notificationSentToMuteCamera: "A notification was sent to {name} to mute their camera",
    recordingStarted: "One person in the discussion has started a recording.",
    urlCopiedToClipboard: "Url copied to clipboard",
};

export default translation;
