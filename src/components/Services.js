import React, { Component } from "react";
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Cocktail de bienvenue",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },
            {
                icon:<FaHiking/>,
                title:"Activités de randonnée",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },
            {
                icon:<FaShuttleVan />,
                title:"Navette gratuite",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },
            {
                icon:<FaBeer />,
                title:"Bières lcoales",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
