import { Link } from "react-router-dom";

const ShowDonations = ({ donation }) => {
  const {
    id,
    picture,
    title,
    price,
    text_button_bg,
    category,
    category_bg,
    card_bg,
  } = donation;
  console.log(donation,"from showdonate")
  return (
    <div className="">
      <div
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: `${card_bg}` }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full  md:h-[250px] md:w-[400px] object-cover"
          />
        </div>
        <div className="py-1 px-3 md:p-6">
          <p className="mt-5 md:mt-0 mb-4">
            <span
              className="font-medium py-1 px-3"
              style={{
                backgroundColor: `${category_bg}`,
                color: `${text_button_bg}`,
              }}
            >
              {category}
            </span>
          </p>
          <div className="card-actions justify-start mb-1">
            <h1
              className="text-xl md:text-2xl font-semibold"
            >
              {title}
            </h1>
          </div>
          <p className="text-base md:text-lg font-semibold mb-5" style={{ color: `${text_button_bg}` }}>${price}</p>
              <Link to={`/donationDetails/${id}`}>
          <button style={{backgroundColor: `${text_button_bg}`}} className="btn text-white font-medium md:font-semibold mb-3 md:mb-0">View Details</button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDonations;
