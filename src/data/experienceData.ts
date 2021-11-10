
interface IExperienceData {
    company: ICompany;
    timeline: string;
    points: string[];
    technologies: ITechnology[];
}

interface ITechnology {
    label: string;
    link: string;
}

interface ICompany {
    role: string;
    label: string;
    link: string;
}

type ITechnologyKey =
    | "laravel"
    | "react"
    | "next"
    | "material_ui"
    | "chakra_ui"
    | "formik"
    | "mysql"
    | "redis"
    | "react_hook_forms"
    | "livewire"
    | "tailwind"
    | "quickadmin"
    | "orchid"
    | "laravel_websockets";

const technologies:
    {
        [key in ITechnologyKey]: ITechnology;
    }
    = {
    "laravel": { label: "Laravel", link: "https://laravel.com" },
    "react": { label: "ReactJS", link: "https://reactjs.org/" },
    "next": { label: "NextJS", link: "https://nextjs.org/" },
    "material_ui": { label: "MaterialUI", link: "https://mui.com/" },
    "chakra_ui": { label: "ChakraUI", link: "https://chakra-ui.com/" },
    "formik": { label: "Formik", link: "https://formik.org/" },
    "mysql": { label: "MySQL", link: "https://www.mysql.com/" },
    "redis": { label: "Redis", link: "https://redis.io/" },
    "react_hook_forms": { label: "React Hook Forms", link: "https://react-hook-form.com/" },
    "livewire": { label: "Laravel Livewire", link: "https://laravel-livewire.com/" },
    "tailwind": { label: "TailwindCSS", link: "https://tailwindcss.com/" },
    "quickadmin": { label: "Quick Admin Panel", link: "https://quickadminpanel.com/" },
    "orchid": { label: "Laravel Orchid", link: "https://orchid.software/en/" },
    "laravel_websockets": { label: "Laravel Websockets", link: "https://beyondco.de/docs/laravel-websockets/getting-started/introduction" },
};

export const experienceData: { [key: string]: IExperienceData; } = {
    jayed_corp: {
        company: {
            role: "Full Stack Developer",
            label: "@JayedCorp",
            link: "https://jayedcorp.com/",
        },
        timeline: "June 2020 - December 2021(Freelance Contract)",
        points: [
            "Implemented apis and admin dashboards to automate trading.",
            "Implemented propability wise coupon based offer system.",
            "Implemented stripe integration for different kinds of payments.",
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
            "Implemented management systems for various businesses and designed api for chatbots.",
            "Implemented E-Commerce solution for businesses.",
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
            `Implemented a complex quiz management system with highly interactive user experience.`,
            `Implemented a blog management system.`,
            `Implemented auth service which integrates with google oauth and gmail api.`,
        ],
        technologies: [
            technologies.laravel,
            technologies.react,
            technologies.next,
            technologies.material_ui,
            technologies.chakra_ui,
            technologies.formik,
            technologies.mysql,
            technologies.redis,
        ]
    }
};