import styled, { CSSProperties } from "styled-components";
import { CustomLink, CustomLinkProps } from "../CustomLink/CustomLink";
import { GithubIcon } from "../SocialIcons/GithubIcon/GithubIcon";

export interface SingleProjectProps {
    title: String;
    timeline: String;
    description: String[];
    technologies: (CustomLinkProps & { style?: CSSProperties; })[];
}

export const SingleProject = ({ title, timeline, description, technologies }: SingleProjectProps) => {
    return <Container>
        <Header>{title}</Header>
        <Timeline>{timeline}</Timeline>
        <div style={{
            position: "relative",
            overflow: "hidden",
        }}> <Description>
                {description.map((line, index) => {
                    return <p key={index} style={{ overflow: "hidden", lineHeight: 1.8, marginBottom: "0.5rem" }}>{line}</p>;
                })}
                <TechnologiesContainer>
                    {technologies.map((tech, index) => {
                        return <CustomLink
                            key={index}
                            label={tech.label}
                            link={tech.link}
                            showUnderLine={!!tech.showUnderLine}
                            style={tech.style ?? {}}
                        />;
                    })}
                </TechnologiesContainer>
            </Description>
            <BannerImageContainer>
                <img src="https://images.unsplash.com/photo-1635434033429-827adfad864b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" height="100%" width="100%" />
            </BannerImageContainer>
        </div>
        <a href="https://facebook.com" style={{ textDecoration: "none" }} target="_blank">
            <RepoWithTextContainer>
                <div>Frontend Code</div>
                <div style={{ marginLeft: "0.5rem" }}><GithubIcon link="" className="asdf" /></div>
            </RepoWithTextContainer>
        </a>
        <a href="https://facebook.com" style={{ textDecoration: "none" }} target="_blank">
            <RepoWithTextContainer>
                <div>Backend Code</div>
                <div style={{ marginLeft: "0.5rem" }}>
                    <GithubIcon link="" className="asdf" />
                </div>
            </RepoWithTextContainer>
        </a>
    </Container>;
};

const Container = styled.div`
    color: rgb(204, 214, 246);
    margin-block: 1rem;
    margin-left: 1rem;
    padding-bottom: 5rem;
    overflow: hidden;
`;

const Header = styled.div`
    line-height: 1.8;
    color: rgb(204, 214, 246);
    font-size: min(16px, 1.2rem);
    margin-bottom: 1rem;
`;

const Timeline = styled.div`
    color: rgb(136, 146, 176);
    padding: 0.2rem 0rem;
    font-size: min(14px, 1.2rem);
`;

const Description = styled.div`
    color: rgb(136, 146, 176);
    background-color: #292a36;
    overflow: hidden;
    display: inline-block;
    margin-block: 1rem; 
    padding: 1rem;
    border-radius: 0.5rem;
    max-width: 30ch;292a36;
    overflow: hidden;
    display: inline-block;
    margin-block: 1rem; 
    padding: 1rem;
    border-radius: 0.5rem;
    max-width: 30ch;
    height: 100%;
    z-index: 3;
    opacity: 0.9;
`;

const BannerImageContainer = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 400px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
    filter: grayscale(100%) contrast(1) brightness(90%);
    transition: 0.25s all;

    &:hover {
        filter: none;
    }
`;

const TechnologiesContainer = styled.div`
    overflow: hidden;
    max-width: 30ch;
    font-size: 14px;
`;

const RepoWithTextContainer = styled.div`
    color: rgb(136, 146, 176);
    background-color: #292a36;
    padding: 0.5rem 1rem;
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem; 
    margin-right: 0.5rem;
`;
