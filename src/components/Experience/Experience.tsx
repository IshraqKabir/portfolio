import { ReactElement } from "react";
import anime from "animejs";
import styled from "styled-components";
import { useIntersection } from "../../customHooks/useIntersection";
import { CustomLink } from "../CustomLink/CustomLink";
import { experienceData } from "../../data/experienceData";

export default function Experience(): ReactElement | null {
    const { ref } = useIntersection(() => {
        anime.timeline({ loop: false })
            .add({
                targets: `.experience-container`,
                opacity: [0, 1],
                translateY: '-30px',
                easing: "easeInOutQuad",
                duration: 1000,
            });
    });

    return <div
        ref={ref}
        className="experience-container"
        style={{
            minWidth: "100vw",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "2rem",
            padding: "0rem 1rem",
            opacity: 0,
            paddingBottom: "10rem"
        }}>
        <InnerContainer>
            <Header>
                Places I've Worked at.
            </Header>
            {Object.keys(experienceData).map(key => {
                const experience = experienceData[key];

                return (
                    <SingleExperience>
                        <SingleExperienceHeader>
                            {experience.company.role} <CustomLink label={experience.company.label} link={experience.company.link} />
                        </SingleExperienceHeader>
                        <Timeline>
                            {experience.timeline}
                        </Timeline>
                        {experience.points.map(point => {
                            return (
                                <PointContainer>
                                    <PointIcon />
                                    <div>
                                        {point}
                                    </div>
                                </PointContainer>
                            );
                        })}
                        <PointContainer>
                            <PointIcon />
                            <div>
                                Technologies used: {experience.technologies.map((tech, index) => {
                                    return (
                                        <span>
                                            <CustomLink label={tech.label} link={tech.link} showUnderLine={false} /> {index === experience.technologies.length - 1 ? "." : ","}
                                        </span>
                                    );
                                })}
                            </div>
                        </PointContainer>
                    </SingleExperience>
                );
            })}
        </InnerContainer>
    </div>;
}

const InnerContainer = styled.div`
    max-width: 65ch;
    padding: 0rem 1rem;
`;

const Header = styled.div`
    padding: 0.5rem 0rem;
    line-height: 1.8;
    font-size: clamp(20px, 1.5vw, 40px);
    color: rgb(204, 214, 246);
    font-weight: bold;
`;

const SingleExperience = styled.div`
    padding: 0rem 0rem 3rem 1rem;
`;

const SingleExperienceHeader = styled.div`
    padding: 0.5rem 0rem;
    line-height: 1.8;
    color: rgb(204, 214, 246);
    font-size: min(16px, 1.2rem);
`;


const Timeline = styled.div`
    color: rgb(136, 146, 176);
    padding: 0.2rem 0rem;
    font-size: min(14px, 1.2rem);
`;

const PointContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem 0rem 0rem 0rem;
    color: rgb(136, 146, 176);
    line-height: 1.7;
    position: relative;
    font-size: min(14px, 1.2rem);
`;

const PointIcon = styled.div`
    margin-right: 1rem;
    height: 15px;
    width: 15px;
    margin-top: 2.5px;
    margin-right: 15px;
    overflow: hidden;

    &:before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: rgb(105, 55, 255);
        font-size: 20px;
        line-height: 12px;
    }
`;
