import React from 'react';
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import axios from 'axios';

// import { Application } from '@splinetool/runtime';
    
// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/Md35uQyny7j-LEMl/scene.splinecode');

const Home = () => {
    
    const onType = async (e) => {
        const search = e.target.value 

        axios.post('/api/v1/shorturl', {
            "longUrl" : "https://www.avanish.dev/guitar",
            "expirationDate": ""
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        console.table(result.data)
    }

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
            
                <div style={{marginTop: "4em", textAlign: "center"}}>
                    <input type="text" placeholder='enter search' />

                    <button name='onClick' onClick={onType}>onClick</button>
                </div>

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