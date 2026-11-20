import { SingleProjectProps } from "../components/SingleProject/SingleProject";

import { technologies } from "./technologies";

const style = {
    lineHeight: 1.8,
    marginRight: "0.5rem",
};

export const projectsData: { [key: string]: SingleProjectProps; } = {
    mewwt: {
        title: "Mewwt, A Chat App",
        timeline: "September 2021 - October 2021",
        description: [
            `This is a mobile based chat application built with React Native. It's designed and user flow is inspired from messenger.`,
            `For state management Redux Toolkit is used here and React Native Reanimated 2 for animations.`,
            `It's backend is built with NodeJS and express. For real time experience it uses Socket.IO.`,
        ],
        technologies: [
            {
                ...technologies.react_native,
                showUnderLine: false,
                style: style
            },
            {
                ...technologies.typescript,
                showUnderLine: false,
                style: style
            },
            {
                ...technologies.node,
                showUnderLine: false,
                style: style,
            },
            {
                ...technologies.redux_toolkit,
                showUnderLine: false,
                style: style,
            },
            {
                ...technologies.reanimated,
                showUnderLine: false,
                style: style,
            },
            {
                ...technologies.socket_io,
                showUnderLine: false,
                style: style,
            }
        ],
        repositories: [
            {
                title: "Frontend Code",
                link: "https://github.com/IshraqKabir/mewwt",
            },
            {
                title: "Backend Code",
                link: "https://github.com/IshraqKabir/mewwt-server",
            },
        ],
    },
    portfolio: {
        title: "This Portfolio",
        timeline: "June 2021",
        description: [
            `I started building this portfolio to show my animation and ui skills. But still there is lot of development to be done.`,
            `It is made with create react app and uses Anime js library for animation and it is written in typescript.`,
        ],
        technologies: [
            {
                ...technologies.react,
                showUnderLine: false,
                style: style
            },
            {
                ...technologies.typescript,
                showUnderLine: false,
                style: style
            },
            {
                ...technologies.anime_js,
                showUnderLine: false,
                style: style,
            },
            {
                ...technologies.styled_components,
                showUnderLine: false,
                style: style,
            },
        ],
        repositories: [
            {
                link: "https://github.com/IshraqKabir/portfolio",
                title: "Repository"
            }
        ],
    }
};
