

const Banner = () => {
    return (
        <div
      style={{
        backgroundImage: "url(https://i.ibb.co/x1xMyzk/banner-img.jpg)",
      }}
      className="w-full h-[60vh] bg-gray-300 bg-cover bg-no-repeat bg-center"
    >
      <div className="h-full bg-white opacity-95">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center h-full p-5">
          <h1 className="text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h1>
          <div className="flex flex-col md:flex-row max-w-[600px] mx-auto justify-center items-center gap-5 md:gap-0">
            <input
              type="text"
              className=" border-2 border-gray-200 w-[400px] lg:w-[500px] p-[14px] rounded-l-lg"
              placeholder="Search Here ..."
            />
            <button className="btn bg-[#FF444A] text-white p-4 w-36 h-full rounded-none border-0 rounded-r-lg font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;