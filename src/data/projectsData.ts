import { SingleProjectProps } from "../components/SingleProject/SingleProject";

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
                label: "React Native",
                link: "",
                showUnderLine: false,
                style: style
            },
            {
                label: "Node JS",
                link: "",
                showUnderLine: false,
                style: style,
            },
            {
                label: "Redux Toolkit",
                link: "",
                showUnderLine: false,
                style: style,
            },
            {
                label: "React Native Reanimated 2",
                link: "",
                showUnderLine: false,
                style: style,
            },
            {
                label: "Socket.IO",
                link: "",
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
                label: "ReactJS",
                link: "",
                showUnderLine: false,
                style: style
            },
            {
                label: "AnimeJS",
                link: "",
                showUnderLine: false,
                style: style,
            },
            {
                label: "Styled Components",
                link: "",
                showUnderLine: false,
                style: style,
            },
        ],
    }
};