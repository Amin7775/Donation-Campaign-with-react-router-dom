import ShowDonations from "../../components/ShowDonations/ShowDonations";

const Donation = () => {
  const showlocalStorage = JSON.parse(localStorage.getItem("donationDetails"));
  console.log(showlocalStorage);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-20">
        {showlocalStorage?.map((donation) => (
          <ShowDonations key={donation.id} donation={donation}></ShowDonations>
        ))}
      </div>
    </div>
  );
};

export default Donation;
