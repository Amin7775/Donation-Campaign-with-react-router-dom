// import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../../components/Donations/Donations";
// import { useEffect } from "react";
import { useEffect, useState } from "react";

const Home = () => {
    const [donations,setDonations]= useState([]);
    // const [state,setState]=useState(null);
    const [search,setSearch]=useState(null);
    
    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=> setDonations(data))
    },[])

    
    // console.log(search)
    // useEffect(()=>{
    //   if(search===null){
    //     setState(donations)
    //   }else{
    //     const data = donations.filter(search)
    //     setState(data);
    //   }
    // },[])

    // console.log(state,"State")
  return (
    <div>
        <Banner setSearch={setSearch} search={search}></Banner>
        <div className="my-14">
        <Donations  donations={donations}></Donations>
        </div>
    </div>
  );
};

export default Home;
