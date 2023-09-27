

const Banner = ({setSearch,search}) => {
  
  // form 
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target.searchBar.value)
  }

  // search
  const handleSearch=(e)=>{
    let searchChange = e.target.value;
    setSearch(searchChange)
  }

    return (
        <div
      style={{
        backgroundImage: "url(https://i.ibb.co/x1xMyzk/banner-img.jpg)",
      }}
      className="w-full h-[60vh] bg-gray-300 bg-cover bg-no-repeat bg-center"
    >
      <div className="h-full bg-white opacity-95">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center h-full p-5">
          <h1 className="text-3xl md:text-4xl  text-center lg:text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h1>
          <div>
            <form className="flex flex-col md:flex-row max-w-[600px] mx-auto justify-center items-center gap-5 md:gap-0" onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="searchBar"
              className=" border-2 border-gray-200 w-[350px] lg:w-[500px] p-[14px] rounded-lg md:rounded-r-none md:rounded-l-lg"
              placeholder="Search Here ..."
              onChange={handleSearch}
            />

            <input type="submit" value="Submit" className="btn bg-[#FF444A] text-white px-4 py-5 w-36 h-full md:rounded-none border-0 md:rounded-r-lg font-semibold"/>
            
            {/* <button className="btn bg-[#FF444A] text-white p-4 w-36 h-full rounded-none border-0 rounded-r-lg font-semibold">
              Search
            </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;