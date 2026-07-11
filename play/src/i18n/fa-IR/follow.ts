import type { Translation } from "../i18n-types";

const translation: Translation = {
    interactStatus: {
        following: "در حال دنبال کردن {leader}",
        waitingFollowers: "در انتظار تأیید دنبال‌کنندگان",
        followed: {
            one: "{follower} شما را دنبال می‌کند",
            two: "{firstFollower} و {secondFollower} شما را دنبال می‌کنند",
            many: "{followers} و {lastFollower} شما را دنبال می‌کنند",
        },
    },
    interactMenu: {
        title: {
            interact: "تعامل",
            follow: "آیا می‌خواهید {leader} را دنبال کنید؟",
        },
        stop: {
            leader: "آیا می‌خواهید از هدایت کردن دست بردارید؟",
            follower: "آیا می‌خواهید دنبال کردن {leader} را متوقف کنید؟",
        },
        yes: "بله",
        no: "خیر",
    },
    actionName: "Locate",
};

export default translation;
