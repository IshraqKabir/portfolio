import { ReactElement } from "react";
import anime from "animejs";
import styled from "styled-components";
import { useIntersection } from "../../customHooks/useIntersection";
import { CustomLink } from "../CustomLink/CustomLink";

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
            <SingleExperience>
                <SingleExperienceHeader>
                    Full Stack Developer <CustomLink label="@Smartifier" link="https://smartifier.org" />
                </SingleExperienceHeader>
                <Timeline>
                    September 2020 - Present
                </Timeline>
                <PointContainer>
                    <PointIcon />
                    <div>
                        Implemented a complex quiz management system with highly interactive user experience.
                    </div>
                </PointContainer>
                <PointContainer>
                    <PointIcon />
                    <div>
                        Implemented a blog management system.
                    </div>
                </PointContainer>
                <PointContainer>
                    <PointIcon />
                    <div>
                        Implemented auth service which integrates with google oauth and gmail api.
                    </div>
                </PointContainer>
                <PointContainer>
                    <PointIcon />
                    <div>
                        Technologies used: <CustomLink label="Laravel" link="https://laravel.com" showUnderLine={false} />, <CustomLink label="ReactJS" link="https://reactjs.org/" showUnderLine={false} />, <CustomLink label="NextJS" link="https://nextjs.org/" showUnderLine={false} /> , <CustomLink label="MaterialUI" link="https://mui.com/" showUnderLine={false} />, <CustomLink label="ChakraUI" link="https://chakra-ui.com/" showUnderLine={false} />, <CustomLink label="Formik" link="https://formik.org/" showUnderLine={false} />, <CustomLink label="MySQL" link="https://www.mysql.com/" showUnderLine={false} />, <CustomLink label="Redis" link="https://redis.io/" showUnderLine={false} /> .
                    </div>
                </PointContainer>
            </SingleExperience>
            <SingleExperience>
                <SingleExperienceHeader>
                    Full Stack Developer <CustomLink label="@Orderbot" link="https://orderbot.online" />
                </SingleExperienceHeader>
                <Timeline>
                    March 2020 - September 2020
                </Timeline>
                <PointContainer>
                    <PointIcon />
                    <div>
                        Implemented management systems for various businesses and designed api for chatbots.
                    </div>
                </PointContainer>
                <PointContainer>
                    <PointIcon />
                    <div>
                        Implemented customized product and order management systems for businesses.
                    </div>
                </PointContainer>
                <PointContainer>
                    <PointIcon />
                    <div>
                        Technologies used: <CustomLink label="Laravel" link="https://laravel.com" showUnderLine={false} />, <CustomLink label="ReactJS" link="https://reactjs.org/" showUnderLine={false} />, <CustomLink label="ChakraUI" link="https://chakra-ui.com/" showUnderLine={false} />, <CustomLink label="React Hook Forms" link="https://react-hook-form.com/" showUnderLine={false} />, <CustomLink label="MySQL" link="https://www.mysql.com/" showUnderLine={false} />.
                    </div>
                </PointContainer>
            </SingleExperience>
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
