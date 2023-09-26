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
            className="h-[250px] w-[400px] object-cover"
          />
        </div>
        <div className="p-6">
          <p className="mb-4">
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
              className="text-2xl font-semibold"
            >
              {title}
            </h1>
          </div>
          <p className=" text-lg font-semibold" style={{ color: `${text_button_bg}` }}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDonations;
