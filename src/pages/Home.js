import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
    return (
        <>
    
    <Hero>
        <Banner title="Hotels de luxe à Bali" subtitle="Le luxe à portée de main, dès 300 €">
            <Link to="/rooms" className="btn-primary">
                Nos chambres
            </Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms />
        
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </>
    );
}
