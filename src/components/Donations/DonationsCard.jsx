import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg } =
    donation;
  return (
    <div>
      <Link to={`/donationDetails/${id}`}>
        <div
          className="card card-compact w-full bg-base-100 shadow-xl"
          style={{ backgroundColor: `${card_bg}` }}
        >
          <figure>
            <img className="h-[240px] w-full " src={picture} />
          </figure>
          <div className="card-body">
            <p>
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
            {/* <h2 className="card-title"></h2> */}
            <div className="card-actions justify-start">
              <h1
                className="text-xl font-semibold"
                style={{ color: `${text_button_bg}` }}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;
// text-[${text_button_bg}]
