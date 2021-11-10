import styled, { CSSProperties, keyframes } from "styled-components";

export interface CustomLinkProps {
    label: string;
    link: string;
    showUnderLine?: boolean;
    style?: CSSProperties;
}

export const CustomLink = ({ label, link, showUnderLine = true, style }: CustomLinkProps) => {
    if (!showUnderLine) {
        return <ContainerWithoutAnimation href={link} target="_blank" rel="noreferrer" style={style ? { ...style } : {}}>{label}</ContainerWithoutAnimation>;
    }

    return <Container href={link} target="_blank" rel="noreferrer" style={style ? { ...style } : {}}>
        {label}
        <span></span>
    </Container>;
};

const Animation = keyframes`
    from {
        width: 0px;
    }

    to {
        width: calc(100% - 1ch);
    }
`;

const ContainerWithoutAnimation = styled.a`
    color: rgb(105, 55, 255);
    cursor: pointer;
    text-decoration: none;
    position: relative;
`;

const Container = styled.a`
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
            animation: ${Animation} 0.5s;
        }
    }
`;