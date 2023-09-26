// import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../../components/Donations/Donations";
// import { useEffect } from "react";
import { useEffect, useState } from "react";

const Home = () => {
    const [donations,setDonations]= useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=> setDonations(data))
    },[])

    // console.log(donations)
  return (
    <div>
        <Banner></Banner>
        <div className="my-14">
        <Donations donations={donations}></Donations>
        </div>
    </div>
  );
};

export default Home;
