import anime from "animejs";
import styled from "styled-components";
import { useIntersection } from "../../customHooks/useIntersection";
import { projectsData } from "../../data/projectsData";
import { SingleProject } from "../SingleProject/SingleProject";

export const Projects = () => {
    const { ref } = useIntersection(() => {
        anime.timeline({ loop: false })
            .add({
                targets: `.projects-container`,
                opacity: [0, 1],
                translateY: '-30px',
                easing: "easeInOutQuad",
                duration: 1000,
            });

    });

    return <Container className="projects-container" ref={ref}>
        <Header>
            Things I've Built.
        </Header>
        {Object.keys(projectsData).map((key: string) => {
            return <SingleProject
                {...projectsData[key]}
            />;
        })}
    </Container>;
};

const Container = styled.div`
    height: 200px;
    padding: 0rem 2rem;
    opacity: 0;
    overflow: hidden;
    height: 100%;
    padding-bottom: 20rem;
`;

const Header = styled.div`
    padding: 0.5rem 0rem;
    line-height: 1.8;
    font-size: clamp(20px, 1.5vw, 40px);
    color: rgb(204, 214, 246);
    font-weight: bold;
`;
