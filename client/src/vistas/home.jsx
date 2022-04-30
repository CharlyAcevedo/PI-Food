import React from "react";
import CardContainer from "../components/cards/CardContainer";
import NavHome from "../components/navs/navHome";
import Paginated from "../components/paginated/paginated";

export default function Home() {

    return (
        <div className="home">
            <NavHome />
            <Paginated />            
            <CardContainer />         
        </div>
    )
}