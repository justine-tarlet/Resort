import React, { Component } from "react";
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Cocktail de bienvenue",
                info: "A votre arrivée, nous vous offrons un cocktail gratuit par personne"
            },
            {
                icon:<FaHiking/>,
                title:"Activités à Bali",
                info: "Randonnées, balades en ville, activités à sensations : nous nous adaptons à vos envies"
            },
            {
                icon:<FaShuttleVan />,
                title:"Navette gratuite",
                info: "Nous venons vous chercher à l'aéroport"
            },
            {
                icon:<FaBeer />,
                title:"Nourriture locale",
                info: "Découvrez les spécialités culinaires du pays."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Nos services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
