import type { Translation } from "../i18n-types";

const translation: Translation = {
    editCam: "ویرایش دوربین",
    editMic: "ویرایش میکروفون",
    editSpeaker: "ویرایش خروجی صدا",
    active: "فعال",
    disabled: "غیرفعال",
    notRecommended: "توصیه نمی‌شود",
    enable: {
        title: "دوربین و میکروفون خود را روشن کنید",
        start: "به صفحه پیکربندی دستگاه صوتی و تصویری ما خوش آمدید! ابزارهایی برای بهبود تجربه آنلاین خود را اینجا پیدا کنید. تنظیمات را به دلخواه خود تغییر دهید تا مشکلات احتمالی را برطرف کنید. اطمینان حاصل کنید که سخت‌افزار شما به درستی متصل و به‌روز است. پیکربندی‌های مختلف را بررسی و تست کنید تا بهترین گزینه را برای خود پیدا کنید.",
    },
    help: {
        title: "دسترسی به دوربین / میکروفون لازم است",
        permissionDenied: "دسترسی رد شد",
        content: "شما باید اجازه دسترسی به دوربین و میکروفون را در مرورگر خود بدهید.",
        firefoxContent:
            'لطفاً کادر "این تصمیم را به خاطر بسپار" را علامت بزنید، اگر نمی‌خواهید فایرفاکس مدام از شما اجازه بگیرد.',
        allow: "اجازه دادن به وب‌کم",
        continue: "ادامه بدون وب‌کم",
        screen: {
            firefox: "/resources/help-setting-camera-permission/en-US-firefox.png",
            chrome: "/resources/help-setting-camera-permission/en-US-firefox.png",
        },
        cameraTitle: "Camera access needed",
        microphoneTitle: "Microphone access needed",
        cameraPermissionDenied: "Camera permission denied",
        microphonePermissionDenied: "Microphone permission denied",
        cameraMicrophonePermissionDenied: "Camera and microphone permissions denied",
        cameraContent: "You must allow camera access in your browser.",
        microphoneContent: "You must allow microphone access in your browser.",
        allowMicrophone: "Allow microphone",
        allowCameraMicrophone: "Allow webcam and microphone",
        continueWithoutMicrophone: "Continue without microphone",
        continueCameraMicrophone: "Continue without webcam and microphone",
        tooltip: {
            permissionDeniedTitle: "Camera access blocked",
            permissionDeniedDesc:
                "Your browser denied camera access for this site. Allow it from the address bar (lock or camera icon) or in site settings. The illustration below matches your browser.",
            noDeviceTitle: "No usable camera",
            noDeviceDesc:
                "Your browser does not see any camera you can use. Try another browser, check that a camera is connected, check your computer's settings (privacy, devices), or restart your computer if the device should work.",
            permissionMedia: {
                firefox: "/resources/help-setting-camera-permission/en-US-firefox.png",
                chrome: "/resources/help-setting-camera-permission/en-US-firefox.png",
                safari: "/resources/help-setting-camera-permission/en-US-firefox.png",
                android: "/resources/help-setting-camera-permission/en-US-firefox.png",
                default: "/resources/help-setting-camera-permission/en-US-firefox.png",
            },
        },
        microphoneTooltip: {
            permissionDeniedTitle: "Microphone access blocked",
            permissionDeniedDesc:
                "Your browser denied microphone access for this site. Allow it from the address bar (lock or microphone icon) or in site settings. The illustration below matches your browser.",
            noDeviceTitle: "No usable microphone",
            noDeviceDesc:
                "Your browser does not see any microphone you can use. Try another browser, check that a microphone is connected, check your computer's settings (privacy, devices), or restart your computer if the device should work.",
            permissionMedia: {
                firefox: "/resources/help-setting-camera-permission/en-US-firefox.png",
                chrome: "/resources/help-setting-camera-permission/en-US-firefox.png",
                safari: "/resources/help-setting-camera-permission/en-US-firefox.png",
                android: "/resources/help-setting-camera-permission/en-US-firefox.png",
                default: "/resources/help-setting-camera-permission/en-US-firefox.png",
            },
        },
    },
    webrtc: {
        title: "خطای اتصال سرور رله ویدیو",
        titlePending: "در انتظار اتصال سرور رله ویدیو",
        error: "سرور TURN در دسترس نیست",
        content: "سرور رله ویدیو در دسترس نیست. ممکن است نتوانید با دیگران ارتباط برقرار کنید.",
        solutionVpn: "اگر از طریق <strong>VPN</strong> متصل هستید، لطفاً از VPN خود خارج شده و صفحه وب را رفرش کنید.",
        solutionVpnNotAskAgain: "متوجه شدم. دیگر به من هشدار نده 🫡",
        solutionHotspot:
            "اگر در یک شبکه محدود (شبکه شرکت...) هستید، سعی کنید شبکه را تغییر دهید. به عنوان مثال، با گوشی خود یک <strong>هات‌اسپات وای‌فای</strong> ایجاد کنید و از طریق گوشی خود متصل شوید.",
        solutionNetworkAdmin: "اگر شما یک <strong>مدیر شبکه</strong> هستید، ",
        preparingYouNetworkGuide: 'راهنمای "آماده‌سازی شبکه شما"',
        refresh: "رفرش",
        continue: "ادامه",
        newDeviceDetected: "دستگاه جدید شناسایی شد {device} 🎉 تغییر می‌دهید؟ [فاصله]",
    },
    my: {
        silentZone: "منطقه سکوت",
        silentZoneDesc:
            "شما در یک منطقه سکوت هستید. فقط می‌توانید افرادی را که با آنها هستید ببینید و بشنوید. نمی‌توانید دیگر افراد حاضر در اتاق را ببینید یا بشنوید.",
        nameTag: "شما",
        loading: "در حال بارگیری دوربین شما...",
    },
    disable: "دوربین خود را خاموش کنید",
    menu: {
        moreAction: "اقدامات بیشتر",
        closeMenu: "بستن منو",
        senPrivateMessage: "ارسال پیام خصوصی (به زودی)",
        kickoffUser: "اخراج کاربر",
        muteAudioUser: "بی‌صدا کردن صدا",
        muteAudioEveryBody: "بی‌صدا کردن صدای همه",
        muteVideoUser: "بی‌صدا کردن ویدیو",
        muteVideoEveryBody: "بی‌صدا کردن ویدیوی همه",
        blockOrReportUser: "مدیریت",
        askToMuteAudioUser: "Ask to mute audio",
        askToMuteVideoUser: "Ask to turn off video",
    },
    backgroundEffects: {
        imageTitle: "تصاویر پس‌زمینه",
        videoTitle: "ویدیوهای پس‌زمینه",
        blurTitle: "تاری پس‌زمینه",
        resetTitle: "غیرفعال کردن جلوه‌های پس‌زمینه",
        title: "جلوه‌های پس‌زمینه",
        close: "بستن",
        blurAmount: "میزان تاری",
    },
};

export default translation;
