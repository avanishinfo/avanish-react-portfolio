import React from 'react';
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

// import { Application } from '@splinetool/runtime';
    
// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/Md35uQyny7j-LEMl/scene.splinecode');

const Home = () => {
    
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
            

                <div className="home__content grid">
                    <Social />

                    <div className="home__img"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home