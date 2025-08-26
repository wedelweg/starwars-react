import React from "react";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";

const MainBlock = ({ currentPage }) => {
    switch (currentPage) {
        case "Home":
            return <Home />;
        case "AboutMe":
            return <AboutMe />;
        case "StarWars":
            return <StarWars />;
        case "Contact":
            return <Contact />;
        default:
            return <Home />;
    }
};

export default MainBlock;
