import { useEffect, useState } from "react";
import ShowDonations from "../../components/ShowDonations/ShowDonations";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
      const showlocalStorage = JSON.parse(localStorage.getItem("donationDetails"));
      if(showlocalStorage){
          setDonated(showlocalStorage);

      }
  }, []);
//   console.log(showlocalStorage);
  return (
    <div className="max-w-[1440px] mx-auto mb-10 p-5 lg:p-0">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 my-10 lg:my-20 ">
        {isShow ? donated.map((donation) => (
          <ShowDonations key={donation.id} donation={donation}></ShowDonations>
        )):
        donated.slice(0,4).map((donation) => <ShowDonations key={donation.id} donation={donation}></ShowDonations>)
         
    }
      </div>
        {/* btn */}
      <div className="flex justify-center my-10">
      {donated.length > 4 ? (
        <button
          onClick={() => setIsShow(!isShow)}
          className=" bg-[#009444] text-white text-lg py-2 px-7 rounded-lg"
        >
          {!isShow ? "Show All" : "Show Less"}
        </button>
      ) : 
        ""
      }
      </div>
    </div>
  );
};

export default Donation;
