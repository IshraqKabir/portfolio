import anime from "animejs";
import { ReactElement, useEffect, useState } from "react";
import CloseIcon from "../CloseIcon/CloseIcon";
import Link from "../Link/Link";
import "./navModal.css";

interface IProps {
    closeNavModal: Function;
}

export default function NavModal({ closeNavModal }: IProps): ReactElement | null {
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        open();

        const onKeyDown = ({ key }: KeyboardEvent) => {
            if (key === "Escape") {
                close();
            }
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, []);

    const open = () => {
        anime.timeline({
            loop: false,
            endDelay: 100,
            complete: () => {
                setShowChildren(true)
            }
        })
            .add({
                targets: '.navModal-underlay',
                width: ['0%', "100vw"],
                duration: 300,
                easing: "easeInOutQuad",
            })
            .add({
                targets: '.navModal-container',
                width: ['0%', "100vw"],
                duration: 300,
                easing: "easeInOutQuad",
            })
    }

    const close = () => {
        anime.timeline({
            loop: false,
            endDelay: 100,
            begin: () => {
                setShowChildren(false);
            },
            complete: () => {
                closeNavModal();
            }
        })
            .add({
                targets: '.navModal-container',
                width: ["100vw", '0%'],
                duration: 300,
                easing: "easeInOutQuad",
            })
            .add({
                targets: '.navModal-underlay',
                width: ["100vw", '0%'],
                duration: 300,
                easing: "easeInOutQuad",
            });
    }


    return (<>
        <div className="navModal-underlay"></div>
        <div className="navModal-container">
            {showChildren && (
                <>
                    <div className="close-icon-container">
                        <CloseIcon handleClick={close} />
                    </div>
                    <div className="navModal-links">
                        <Link label="Home" color="#fff" show_underline={false} />
                        <Link label="Experience" color="#fff" show_underline={false} />
                        <Link label="Projects" color="#fff" show_underline={false} />
                        <Link label="About Me" color="#fff" show_underline={false} />
                    </div>
                </>
            )}
        </div>
    </>)

}
