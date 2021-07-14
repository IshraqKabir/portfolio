import "./topbar.css";
import Link from "../Link/Link";
import NavModal from "../NavModal/NavModal";
import { useState } from "react";
import BurgerIcon from "../BurgerIcon/BurgerIcon.tsx";

const Topbar = () => {
    const [showNavModal, setShowNavModal] = useState(false);

    const show = () => setShowNavModal(true);
    const close = () => setShowNavModal(false);

    return (
        <>
            {showNavModal && (
                <NavModal closeNavModal={close} />
            )}
            <ul className="topbar-container">
                <Link label="Home" />
                <Link label="Experience" />
                <Link label="Projects" />
                <BurgerIcon openNavModal={show} />
            </ul>
        </>
    );
};

export default Topbar;

