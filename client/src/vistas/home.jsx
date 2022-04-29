import React from "react";
import CardContainer from "../components/cards/CardContainer";
import NavHome from "../components/navs/navHome";

export default function Home() {

    return (
        <div className="home">
            <NavHome />
            <CardContainer />         
        </div>
    )
}