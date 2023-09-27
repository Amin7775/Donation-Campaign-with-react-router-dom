// import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";


const Donations = ({donations}) => {
    

    // console.log(donations)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 max-w-[1440px] p-5 mx-auto">
            {
                donations.map(donation =><DonationsCard key={donation.id} donation={donation}></DonationsCard>)
            }
        </div>
    );
};

export default Donations;