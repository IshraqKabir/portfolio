import { ITechnology } from "./experienceData";

export type ITechnologyKey =
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
    | "laravel_websockets"
    | "react_native"
    | "node"
    | "redux_toolkit"
    | "reanimated"
    | "socket_io"
    | "anime_js"
    | "styled_components"
    | "typescript"
    | "vue"
    | "nuxt"
    | "postgresql"
    | "mongodb"
    | "aws"
    | "cloudflare"
    | "docker"
    | "kubernetes"
    | "jenkins"
    | "stripe";


export const technologies: {
    [key in ITechnologyKey]: ITechnology;
} = {
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
    "react_native": { label: "React Native", link: "https://reactnative.dev/" },
    "node": { label: "Node JS", link: "https://nodejs.org" },
    "redux_toolkit": { label: "Redux Toolkit", link: "https://redux-toolkit.js.org/" },
    "reanimated": { label: "React Native Reanimated 2", link: "https://docs.swmansion.com/react-native-reanimated/" },
    "socket_io": { label: "Socket.IO", link: "https://socket.io" },
    "anime_js": { label: "AnimeJS", link: "https://animejs.com/" },
    "styled_components": { label: "Styled Components", link: "https://styled-components.com/" },
    "typescript": { label: "TypeScript", link: "https://www.typescriptlang.org/" },
    "vue": { label: "Vue", link: "https://vuejs.org/" },
    "nuxt": { label: "Nuxt", link: "https://nuxt.com/" },
    "postgresql": { label: "PostgreSQL", link: "https://www.postgresql.org/" },
    "mongodb": { label: "MongoDB", link: "https://www.mongodb.com/" },
    "aws": { label: "AWS", link: "https://aws.amazon.com/" },
    "cloudflare": { label: "Cloudflare", link: "https://www.cloudflare.com/" },
    "docker": { label: "Docker", link: "https://www.docker.com/" },
    "kubernetes": { label: "Kubernetes", link: "https://kubernetes.io/" },
    "jenkins": { label: "Jenkins", link: "https://www.jenkins.io/" },
    "stripe": { label: "Stripe", link: "https://stripe.com/" },
};
