import { SingleProjectProps } from "../components/SingleProject/SingleProject";

import { technologies, } from "./experienceData";

const style = {
    lineHeight: 1.8,
    marginRight: "0.5rem",
};

export const projectsData: { [key: string]: SingleProjectProps; } = {
    mewwt: {
        title: "Mewwt, A Chat App",
        timeline: "September 2021 - October 2021",
        description: [`asdfasdfasdf jalksjdflkj asdfklj alsd asdf. asdfkjasdf asdfasdf assdf asdfasfd asdf asdf asfd asdf asdf asdf asdf asd fasdf asdf asdf as dfasd fasd fasd fasd asdf asdf asdf asdfd fasdfd fasd asd fasdfd asdf f `, `sdfasdfasdf lsdfsdjfkasldkfjaksdf`],
        technologies: [
            {
                ...technologies.react_native,
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
    },
    portfolio: {
        title: "This Portfolio",
        timeline: "June 2021",
        description: [`asdfasdfasdf jalksjdflkj asdfklj alsd asdf. asdfkjasdf asdfasdf assdf asdfasfd asdf asdf asfd asdf asdf asdf asdf asd fasdf asdf asdf as dfasd fasd fasd fasd asdf asdf asdf asdfd fasdfd fasd asd fasdfd asdf f `, `sdfasdfasdf lsdfsdjfkasldkfjaksdf`],
        technologies: [
            {
                ...technologies.react,
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
    }
};