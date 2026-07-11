import type { BaseTranslation } from "../i18n-types";

const login: BaseTranslation = {
    input: {
        name: {
            placeholder: "نام خود را وارد کنید",
            empty: "نام خالی است",
            tooLongError: "نام بیش از حد طولانی است",
            notValidError: "فرمت نام نادرست است",
        },
    },
    genericError: "خطایی رخ داد",
    terms: "با ادامه، شما با {links} ما موافقت می‌کنید.",
    termsOfUse: "شرایط استفاده",
    privacyPolicy: "سیاست حفظ حریم خصوصی",
    cookiePolicy: "سیاست کوکی",
    continue: "ادامه",
};

export default login;