import { technologies } from "./technologies";

interface IExperienceData {
    company: ICompany;
    timeline: string;
    points: string[];
    technologies: ITechnology[];
}

export interface ITechnology {
    label: string;
    link: string;
}

interface ICompany {
    role: string;
    label: string;
    link: string;
}

export const experienceData: { [key: string]: IExperienceData; } = {
    jayed_corp: {
        company: {
            role: "Full Stack Developer",
            label: "@JayedCorp",
            link: "https://jayedcorp.com/",
        },
        timeline: "June 2020 - December 2021(Freelance Contract)",
        points: [
            "Stripe Integration with recurring payment systems",
            "Built and designed apis for integrating with Telegram bots",
            "Created Services to assist with trading and designing apis",
            "Built User wise dashboards to see real time trading and buying and managing plans.",
            "Built and designed user devices limiting system",
        ],
        technologies: [
            technologies.laravel,
            technologies.livewire,
            technologies.tailwind,
            technologies.quickadmin,
            technologies.orchid,
            technologies.laravel_websockets,
            technologies.mysql,
            technologies.redis,
        ]
    },
    orderbot: {
        company: {
            role: "Full Stack Developer",
            label: "@Orderbot",
            link: "https://orderbot.online",
        },
        timeline: "March 2020 - October 2021(Freelance Contract)",
        points: [
            "Built management systems for various businesses and designed api for chatbots.",
            "Created E-Commerce solution for businesses.",
            "Implemented customized product and order management systems for businesses.",
        ],
        technologies: [
            technologies.laravel,
            technologies.react,
            technologies.chakra_ui,
            technologies.react_hook_forms,
            technologies.mysql,
            technologies.redis,
        ]
    },
    smartifier: {
        company: {
            role: "Full Stack Developer",
            label: "@Smartifier",
            link: "https://smartifier.org",
        },
        timeline: "September 2020 - September 2021 (Freelance Contract)",
        points: [
            `built a complex quiz management system with highly interactive user experience.`,
            `Implemented a blog management system.`,
            `Implemented auth service which integrates with google oauth and gmail api.`,
        ],
        technologies: [
            technologies.laravel,
            technologies.react,
            technologies.next,
            technologies.typescript,
            technologies.material_ui,
            technologies.chakra_ui,
            technologies.formik,
            technologies.mysql,
            technologies.redis,
        ]
    }
};
