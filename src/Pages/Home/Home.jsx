import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../../components/Donations/Donations";

const Home = () => {
    const donations = useLoaderData();
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
