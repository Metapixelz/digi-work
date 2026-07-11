import type { BaseTranslation } from "../i18n-types";

const area: BaseTranslation = {
    noAccess: "متاسفانه شما به این منطقه دسترسی ندارید.",
    personalArea: {
        claimDescription: "این یک منطقه شخصی است. آیا می‌خواهید آن را برای خودتان کنید؟",
        buttons: {
            yes: "بله",
            no: "خیر",
        },
        personalSpaceWithNames: "فضای شخصی {name}",
        alreadyHavePersonalArea: "شما از قبل یک منطقه شخصی دارید. اگر این یکی را ادعا کنید، قبلی حذف خواهد شد.",
    },
};

export default area;