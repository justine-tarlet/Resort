import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };

    }

    static contextType = RoomContext;

    //componentDidMount(){}

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return(
                <div className="error"><h3>Cette page n'existe pas !</h3>
            <Link to=".rooms" className="btn-primary">Retour aux chambres</Link>
            </div>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImg] = images
        return (
        <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner title={`${name}`}>
                <Link to="/rooms" className="btn-primary">
                    Retour aux chambres
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item, index)=>{
                   return <img key={index} src={item} alt={name} />;
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>Détails</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Informations</h3>
                    <p>Prix : {price} €</p>
                    <p>Superficie : {size} m2</p>
                    <p>Capacité : {" "} {
                    capacity > 1 ? `${capacity} personnes`:
                    `${capacity} personne`}</p>
                    <p> {pets?"Animaux autorisés":"Animaux non autorisés"}</p>
                    <p>{breakfast && "Petit déjeuner inclus" }</p>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h3>Extras</h3>
            <ul className="extras">
                {extras.map((item ,index)=>{
                    return <li key={index}>- {item}</li>
                })}
            </ul>
        </section>
        </>
        );
            
    }
}
