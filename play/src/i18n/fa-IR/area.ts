import type { Translation } from "../i18n-types";

const translation: Translation = {
    noAccess: "متاسفانه شما به این منطقه دسترسی ندارید.",
    personalArea: {
        claimDescription: "این یک منطقه شخصی است. آیا می‌خواهید آن را برای خودتان کنید؟",
        buttons: {
            yes: "بله",
            no: "خیر",
            confirm: "تایید کنید",
        },
        personalSpaceWithNames: "فضای شخصی {name}",
        alreadyHavePersonalArea: "شما از قبل یک منطقه شخصی دارید. اگر این یکی را ادعا کنید، قبلی حذف خواهد شد.",
    },
    blocked: {
        locked: "این منطقه قفل است. نمی توانید وارد شوید.",
        maxUsers: "این منطقه پر است. نمی توانید وارد شوید.",
        noAccess: "متأسفیم، شما به این منطقه دسترسی ندارید.",
        unlockWithTrigger: "{trigger} برای باز کردن قفل این ناحیه.",
    },
};

export default translation;
