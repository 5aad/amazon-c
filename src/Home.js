import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Re:Zero: Starting Life in Another World, Vol. 1"
            price={9.14}
            image="https://images-na.ssl-images-amazon.com/images/I/51Bkfi44gNL._SX332_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product 
           id="2"
           title="Fortnite 7 Llama Loot Plush"
           price={2.14}
           image="https://images-na.ssl-images-amazon.com/images/I/71KUNPdl7dL._AC_SL1500_.jpg"
           rating={3}/>
        </div>
        <div className="home__row">
          <Product 
          id="2"
          title="
          Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
          price={350.14}
          image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
          rating={4}/>
          <Product
          id="3"
          title="
          Elite Series 2 Controller - Black"
          price={99.14}
          image="https://images-na.ssl-images-amazon.com/images/I/71F6eID-ImL._SL1500_.jpg"
          rating={4} />
          <Product
          id="4"
          title="
          Super Smash Bros. Ultimate - Nintendo Switch"
          price={23.14}
          image="https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg"
          rating={4} />
        </div>
        <div className="home__row">
          <Product
          id="5"
          title="
          MSI GAMING GeForce RTX 2080 Ti GDRR6 352-bit HDMI/DP/USB Ray Tracing Turing Architecture Graphics Card (RTX 2080 TI GAMING X TRIO)"
          price={2000.14}
          image="https://images-na.ssl-images-amazon.com/images/I/61aZgZmpHaL._AC_SL1100_.jpg"
          rating={4} />
        </div>
      </div>
    </div>
  );
};

export default Home;
