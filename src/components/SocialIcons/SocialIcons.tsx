import { ReactElement } from "react";
import { GithubIcon } from "./GithubIcon/GithubIcon";
import './socialIcons.css';

export default function SocialIcons(): ReactElement | null {
    return <div className="social-icons-container">
                <GithubIcon link="https://linkedin.com/in/ishraq-kabir" />
        <div className="social-icon">
            <a href="https://linkedin.com/in/ishraq-kabir" aria-label="Github" target="_blank" rel="noreferrer">
                <svg role="img" viewBox="0 0 24 24" className="social-icon-svg">
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            </a>
        </div>
        <div className="social-icon-line">
        </div>
    </div >;
}
