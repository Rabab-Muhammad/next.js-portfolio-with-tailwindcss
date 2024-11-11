import Header from "./Header";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" h-screen bg-no-repeat bg-[url('/profile-picture.png')] bg-cover  bg-left flex justify-center items-center ml-20 "
      style={{ backgroundSize: "23%" }}
    >
      <Header />
      <div className="container h-[Calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-start items-start pr-32">
          <div>
            <p data-aos="zoom-in-left">I'm</p>
            <p data-aos="zoom-in-left">Rabab</p>
            <p data-aos="zoom-in-left">Muhammad</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Hero;

