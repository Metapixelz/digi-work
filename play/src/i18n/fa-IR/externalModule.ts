import type { Translation } from "../i18n-types";

const translation: Translation = {
    status: {
        onLine: "وضعیت آنلاین است ✅",
        offLine: "وضعیت آفلاین است ❌",
        warning: "وضعیت هشدار است ⚠️",
        sync: "وضعیت در حال همگام‌سازی است 🔄",
    },
    teams: {
        openingMeeting: "در حال باز کردن جلسه Teams...",
        unableJoinMeeting: "امکان پیوستن به جلسه Teams وجود ندارد!",
        userNotConnected: "شما با حساب Outlook یا Google خود همگام‌سازی نشده‌اید!",
        connectToYourTeams: "به حساب Outlook یا Google خود متصل شوید 🙏",
        temasAppInfo:
            "Teams یک برنامه Microsoft 365 است که به تیم شما کمک می‌کند تا در ارتباط و سازماندهی بماند. شما می‌توانید در یک مکان چت، ملاقات، تماس و همکاری کنید 😍",
        buttonSync: "همگام‌سازی Teams من 🚀",
        buttonConnect: "اتصال Teams من 🚀",
    },
    discord: {
        integration: "یکپارچه‌سازی",
        explainText:
            "با اتصال حساب Discord خود در اینجا، می‌توانید پیام‌های خود را مستقیماً در چت digi-work دریافت کنید. پس از همگام‌سازی یک سرور، ما اتاق‌های موجود در آن را ایجاد خواهیم کرد، شما فقط باید در چت digi-work به آنها بپیوندید.",
        login: "اتصال به Discord",
        fetchingServer: "در حال دریافت سرورهای Discord شما... 👀",
        qrCodeTitle: "برای ورود، کد QR را با برنامه Discord خود اسکن کنید.",
        qrCodeExplainText:
            "برای ورود، کد QR را با برنامه Discord خود اسکن کنید. کدهای QR محدودیت زمانی دارند، گاهی اوقات باید یکی جدید تولید کنید",
        qrCodeRegenerate: "دریافت کد QR جدید",
        tokenInputLabel: "توکن Discord",
        loginToken: "ورود با توکن",
        loginTokenExplainText: "شما باید توکن Discord خود را وارد کنید. برای انجام یکپارچه‌سازی Discord ببینید",
        sendDiscordToken: "ارسال",
        tokenNeeded: "شما باید توکن Discord خود را وارد کنید. برای انجام یکپارچه‌سازی Discord ببینید",
        howToGetTokenButton: "چگونه توکن ورود Discord خود را دریافت کنم",
        loggedIn: "متصل با:",
        saveSync: "ذخیره و همگام‌سازی",
        logout: "خروج",
        guilds: "سرورهای Discord",
        guildExplain: "کانال‌هایی را که می‌خواهید به رابط چت digi-work اضافه کنید، انتخاب کنید.\n",
        back: "Back",
        tokenPlaceholder: "Your Discord Token",
        loginWithQrCode: "Login with QR Code",
    },
    outlook: {
        signIn: "ورود با Outlook",
        popupScopeToSync: "اتصال حساب Outlook من",
        popupScopeToSyncExplainText:
            "ما برای همگام‌سازی تقویم و/یا وظایف شما باید به حساب Outlook شما متصل شویم. این به شما امکان می‌دهد جلسات و وظایف خود را در digi-work مشاهده کرده و مستقیماً از نقشه به آنها بپیوندید.",
        popupScopeToSyncCalendar: "همگام‌سازی تقویم من",
        popupScopeToSyncTask: "همگام‌سازی وظایف من",
        popupCancel: "لغو",
        isSyncronized: "همگام‌سازی شده با Outlook",
        popupScopeIsConnectedExplainText: "شما از قبل متصل هستید، لطفاً برای خروج و اتصال مجدد روی دکمه کلیک کنید.",
        popupScopeIsConnectedButton: "خروج",
        popupErrorTitle: "⚠️ Outlook or Teams module synchronization failed",
        popupErrorDescription:
            "Outlook or Teams module initialization synchronization has failed. To be connected, please try to reconnect.",
        popupErrorContactAdmin: "If the problem persists, please contact your administrator.",
        popupErrorShowMore: "Show more information",
        popupErrorMoreInfo1:
            "There could be a problem with the Sign In process. Please check that the SSO Azure provider is correctly configured.",
        popupErrorMoreInfo2:
            'Please check that the scope "offline_access" is enabled for the SSO Azure provider. This scope is required to get the refresh token and keep the Teams or Outlook module connected.',
    },
    google: {
        signIn: "ورود با Google",
        popupScopeToSync: "اتصال حساب Google من",
        popupScopeToSyncExplainText:
            "ما برای همگام‌سازی تقویم و/یا وظایف شما باید به حساب Google شما متصل شویم. این به شما امکان می‌دهد جلسات و وظایف خود را در digi-work مشاهده کرده و مستقیماً از نقشه به آنها بپیوندید.",
        popupScopeToSyncCalendar: "همگام‌سازی تقویم من",
        popupScopeToSyncTask: "همگام‌سازی وظایف من",
        popupCancel: "لغو",
        isSyncronized: "همگام‌سازی شده با Google",
        popupScopeToSyncMeet: "ایجاد جلسات آنلاین",
        openingMeet: "در حال باز کردن Google Meet... 🙏",
        unableJoinMeet: "امکان پیوستن به Google Meet وجود ندارد 😭",
        googleMeetPopupWaiting: {
            title: "Google Meet 🎉",
            subtitle: "در حال ایجاد فضای Google شما... این فقط چند ثانیه طول می‌کشد 💪",
            guestError: "شما متصل نیستید، بنابراین نمی‌توانید یک Google Meet ایجاد کنید 😭",
            guestExplain:
                "لطفاً برای ایجاد یک Google Meet وارد پلتفرم شوید، یا از مالک بخواهید یکی برای شما ایجاد کند 🚀",
            error: "تنظیمات Google Workspace شما اجازه ایجاد Meet را نمی‌دهد.",
            errorExplain:
                "نگران نباشید، هنوز هم می‌توانید وقتی شخص دیگری لینکی را به اشتراک می‌گذارد به جلسات بپیوندید 🙏",
        },
        popupScopeIsConnectedButton: "خروج",
        popupScopeIsConnectedExplainText: "شما از قبل متصل هستید، لطفاً برای خروج و اتصال مجدد روی دکمه کلیک کنید.",
    },
    calendar: {
        title: "جلسه امروز شما",
        joinMeeting: "برای پیوستن به جلسه اینجا کلیک کنید",
    },
    todoList: {
        title: "انجام دادنی",
        sentence: "یک استراحت کنید 🙏 شاید یک قهوه یا چای بنوشید؟ ☕",
    },
};

export default translation;
