import type { Translation } from "../i18n-types";

const translation: Translation = {
    title: "هشدار!",
    content:
        'این جهان به حد خود نزدیک است! می‌توانید ظرفیت آن را <a href="{upgradeLink}" target="_blank">اینجا</a> ارتقا دهید.',
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
    megaphoneNeeds:
        "برای استفاده از مگافون، باید دوربین یا میکروفون خود را فعال کنید یا صفحه خود را به اشتراک بگذارید.",
    mapEditorShortCut: "هنگام تلاش برای باز کردن ویرایشگر نقشه خطایی رخ داد.",
    mapEditorNotEnabled: "ویرایشگر نقشه در این جهان فعال نیست.",
    popupBlocked: {
        title: "پاپ‌آپ مسدود شد",
        content: "لطفاً پاپ‌آپ‌ها را برای این وب‌سایت در تنظیمات مرورگر خود فعال کنید.",
        done: "باشه",
    },
    backgroundProcessing: {
        failedToApply: "Failed to apply background effects",
    },
    duplicateUserConnected: {
        title: "Already connected",
        message:
            "You are already connected to this room from another tab or device. To avoid conflicts, please close the other tab or window.",
        confirmContinue: "I understand, continue",
        dontRemindAgain: "Don't show this message again",
    },
    browserNotSupported: {
        title: "😢 Browser Not Supported",
        message: "Your browser ({browserName}) is no longer supported by WorkAdventure.",
        description: "Your browser is too old to run WorkAdventure. Please update to the latest version to continue.",
        whatToDo: "What can you do?",
        option1: "Update {browserName} to the latest version",
        option2: "Leave WorkAdventure and use a different browser",
        updateBrowser: "Update Browser",
        leave: "Leave",
    },
    pwaInstall: {
        title: "Install WorkAdventure",
        description:
            "Install the app for a better experience: quick access, load on startup and an app-like experience.",
        descriptionIos: "Add WorkAdventure to your Home Screen for a better experience and quick access.",
        feature1Title: "Quick access",
        feature1Description: "Launch WorkAdventure from your Start menu, Dock, or desktop.",
        feature2Title: "Dedicated app window",
        feature2Description:
            "Keep WorkAdventure separate from your browser tabs and find WorkAdventure at a glance in your taskbar.",
        feature3Title: "Start with your computer",
        feature3Description: "Launch WorkAdventure when your device starts.",
        iosStepsTitle: "How to install",
        iosStep1: "Tap the Share button (square with arrow) at the bottom of Safari.",
        iosStep2: 'Scroll down and tap "Add to Home Screen".',
        iosStep3: 'Tap "Add" to confirm.',
        install: "Install WorkAdventure App",
        installing: "Installing…",
        skip: "Continuing in browser",
        continue: "Continue in browser",
        neverShowPage: "Don't ask again",
    },
};

export default translation;
