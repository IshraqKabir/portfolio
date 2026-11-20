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
    link?: string;
}

export const experienceData: { [key: string]: IExperienceData; } = {
    transmedia_lead: {
        company: {
            role: "Associate Tech Lead",
            label: "@Transmedia",
        },
        timeline: "October 2024 - Present (Remote)",
        points: [
            "Take on the hardest front-end and back-end problems when other engineers are stuck.",
            "Design the architecture for new products and features, built to scale from day one.",
            "Lead a team of 5 software engineers and set the team's coding standards through code review.",
            "Shipped multiple breaking releases with zero downtime.",
        ],
        technologies: [
            technologies.react,
            technologies.next,
            technologies.typescript,
            technologies.node,
            technologies.mongodb,
            technologies.aws,
            technologies.docker,
            technologies.kubernetes,
            technologies.jenkins,
        ]
    },
    transmedia_senior: {
        company: {
            role: "Senior Frontend Engineer",
            label: "@Transmedia",
        },
        timeline: "January 2022 - September 2024 (Remote)",
        points: [
            "Played a key role in scaling the platform from 700K to over 8M monthly active users.",
            "Built complex, intuitive interfaces in React/Next.js and Vue/Nuxt that improved user engagement.",
            "Built asset delivery on Cloudflare CDN and S3 that sped up the site and fixed hard SEO problems, raising search rankings.",
        ],
        technologies: [
            technologies.react,
            technologies.next,
            technologies.vue,
            technologies.nuxt,
            technologies.typescript,
            technologies.tailwind,
            technologies.redux_toolkit,
            technologies.cloudflare,
            technologies.aws,
        ]
    },
    corsphere: {
        company: {
            role: "Full Stack Engineer",
            label: "@Corsphere",
        },
        timeline: "June 2022 - Present (Part-time, Remote)",
        points: [
            "Built the frontend, backend and deployment pipeline from scratch.",
            "Optimized heavy PostgreSQL queries and added data sampling so charts render large datasets without UI lag.",
            "Built and maintain APIs that serve large datasets to the machine learning team.",
        ],
        technologies: [
            technologies.react,
            technologies.typescript,
            technologies.node,
            technologies.postgresql,
            technologies.docker,
        ]
    },
    next_ventures: {
        company: {
            role: "Full Stack Developer",
            label: "@NEXT Ventures (formerly Jayed Corp)",
        },
        timeline: "June 2021 - November 2021 (Contract)",
        points: [
            "Built per-user dashboards for real-time trading, purchases and plan management.",
            "Integrated Stripe recurring payments.",
        ],
        technologies: [
            technologies.laravel,
            technologies.livewire,
            technologies.tailwind,
            technologies.laravel_websockets,
            technologies.mysql,
            technologies.redis,
            technologies.stripe,
        ]
    },
    orderbot: {
        company: {
            role: "Full Stack Developer",
            label: "@Orderbot",
            link: "https://orderbot.online",
        },
        timeline: "March 2020 - October 2021 (Contract)",
        points: [
            "Built an e-commerce platform from scratch with custom product and order management.",
            "Designed the chatbot APIs and built management systems for several businesses.",
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
};
