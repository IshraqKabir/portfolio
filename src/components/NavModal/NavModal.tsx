import anime from "animejs";
import { ReactElement, useEffect, useState } from "react";
import CloseIcon from "../CloseIcon/CloseIcon";
import "./navModal.css";

interface IProps {
    closeNavModal: Function;
}

export default function NavModal({ closeNavModal }: IProps): ReactElement | null {
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        open();

        return () => {
            close();
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
                </>
            )}
        </div>
    </>)

}

