import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDonationDetails from "./ShowDonationDetails";

const DonationDetails = () => {
  const [donation, setDonation] = useState([]);

  const { id } = useParams();
  // console.log(id);
  const donations = useLoaderData();
  // console.log(donations);

  useEffect(() => {
    const findDonation = donations?.find((find) => find.id == id);
    setDonation(findDonation);
  }, [id, donations]);

  // console.log(donation);
  return <div>
    <ShowDonationDetails donation={donation}></ShowDonationDetails>
  </div>;
};

export default DonationDetails;
