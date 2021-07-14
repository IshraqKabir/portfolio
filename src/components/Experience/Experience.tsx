import anime from "animejs";
import { ReactElement, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

export default function Experience(): ReactElement | null {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        const callBack: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (!entry.isIntersecting) return;

                anime.timeline({ loop: false })
                    .add({
                        targets: `.experience-container`,
                        opacity: [0, 1],
                        translateY: '-30px',
                        easing: "easeInOutQuad",
                        duration: 1000,
                    })

                if (element) {
                    observer.unobserve(element);
                }
            });
        }

        const options: IntersectionObserverInit = {};

        const observer: IntersectionObserver = new IntersectionObserver(callBack, options);

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        }

    }, [])

    return <div ref={ref} className="experience-container" style={{
        minWidth: "100vw",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "2rem",
    }}>
        <InnerContainer>
            <Header
            >
                Places I've Worked at 👍 .
            </Header>
            <SingleExperience>
                <SingleExperienceHeader>
                    Full Stack Developer <PlaceLink label="Smartifier" link="https://smartifier.org" />
                </SingleExperienceHeader>
                <Timeline>
                    September 2020 - Present
                </Timeline>
                <PointContainer>
                    <PointIcon>

                    </PointIcon>
                    <div>
                        Hellojlkadsfj l;kajsdfl; jas;ldf j;alsdfj;lkasjdf l; al;sdjf ;laskjdf ;lkasj df;lkjasd;lf jas;ldfj;laskdkjf ;laskd jf
                    </div>
                </PointContainer>
            </SingleExperience>
        </InnerContainer>
    </div>
}

const InnerContainer = styled.div`
    max-width: 40ch;
`;

const Header = styled.div`
    padding: 0.5rem 0rem;
    line-height: 1.8;
    font-size: clamp(20px, 1.5vw, 40px);
    color: rgb(204, 214, 246);
    font-weight: bold;
`;

const SingleExperience = styled.div`
    padding: 0rem 0rem 0rem 1rem;
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
    justify-content: center;
    padding: 1rem 0rem;
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

    &:before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: rgb(105, 55, 255);
        font-size: 20px;
        line-height: 12px;
    }
`;

const PlaceLink = ({ label, link }: { label: string; link: string; }) => {
    return <PlaceLinkContainer href={link} target="_blank" rel="noreferrer">@{label}
        <span></span>
    </PlaceLinkContainer>
}

const PlaceLinkAnimation = keyframes`
    from {
        width: 0px;
    }

    to {
        width: calc(100% - 1ch);
    }
`;

const PlaceLinkContainer = styled.a`
    color: rgb(105, 55, 255);
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: all 1s;

    &:hover {
        &:after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 1ch;
            width: calc(100% - 1ch);
            height: 2px;
            background-color: rgb(105, 55, 255);
            animation: ${PlaceLinkAnimation} 0.5s;
        }
    }
`;
