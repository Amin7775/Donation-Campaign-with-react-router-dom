const ShowDonationDetails = ({ donation }) => {
  // console.log(donation);
  const {
    id,picture,title,description,price,
  } = donation; 

  const handleDonateBtn=()=>{
    const addedDonationArrays =[];


    const getStoredDonation=JSON.parse(localStorage.getItem('donationDetails'));

    if(!getStoredDonation){
      addedDonationArrays.push(donation);
      localStorage.setItem('donationDetails',JSON.stringify(addedDonationArrays));
    }else{
      const isExist = getStoredDonation.find(item => item.id ===id);
      if(!isExist){
        addedDonationArrays.push(...getStoredDonation,donation)

        localStorage.setItem('donationDetails',JSON.stringify(addedDonationArrays));
      }
    }

  }


  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className="hero h-[80vh] relative"
        style={{
          backgroundImage:
            `url(${picture})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 absolute bottom-0 h-1/6 flex items-center">
        <button 
        onClick={handleDonateBtn}
         className="btn bg-[#FF444A] text-white py-4 px-8  rounded-none border-0 rounded-r-lg font-semibold text-xl h-auto ml-10">
              Donate ${price}
            </button>
        </div>
        
      </div>
        {/* Text Content */}
      <div className="mt-10 mb-20 space-y-6">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ShowDonationDetails;