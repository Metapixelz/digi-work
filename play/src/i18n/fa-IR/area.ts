import type { Translation } from "../i18n-types";

const translation: Translation = {
    noAccess: "متاسفانه شما به این منطقه دسترسی ندارید.",
    personalArea: {
        claimDescription: "این یک منطقه شخصی است. آیا می‌خواهید آن را برای خودتان کنید؟",
        buttons: {
            yes: "بله",
            no: "خیر",
            confirm: "Confirm",
        },
        personalSpaceWithNames: "فضای شخصی {name}",
        alreadyHavePersonalArea: "شما از قبل یک منطقه شخصی دارید. اگر این یکی را ادعا کنید، قبلی حذف خواهد شد.",
    },
    blocked: {
        locked: "This area is locked. You cannot enter.",
        maxUsers: "This area is full. You cannot enter.",
        noAccess: "Sorry, you don't have access to this area.",
        unlockWithTrigger: "{trigger} to unlock this area.",
    },
};

export default translation;
