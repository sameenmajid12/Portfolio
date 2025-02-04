function Home(){
  return(
  <div className="flex pl-50 pr-50 pt-3 pb-3">
    <div className="flex-col">
      <div className="flex-col">
        <div className="w-max relative text-6xl font-bold"><span className=" w-[50%] h-[65%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#E5DCF1] from-[#DECFF3] z-10"></span><h1 className="z-20 relative">Hi, I'm Sameen.</h1></div>
        <h2 className="text-xl">Welcome to my portfolio! Explore how I combine creativity 
        with functionality to bring ideas to life.</h2>
      </div>
      <div className="flex gap-x-[15px]">
        <button className="cursor-pointer text-sm rounded-full shadow-xl w-[170px] h-[40px] bg-primary text-white">Projects</button>
        <button className="cursor-pointer text-sm rounded-full shadow-xl w-[170px] h-[40px] bg-primary text-white hover:bg-red-500 transition-all duration-300">Experience</button>
        <button className="cursor-pointer text-sm rounded-full shadow-xl w-[170px] h-[40px] bg-primary text-white hover:bg-red-500">Skills</button>
      </div>
    </div>
    <div>
      <div></div>
      <img></img>
    </div>
  </div>)
}
export default Home;