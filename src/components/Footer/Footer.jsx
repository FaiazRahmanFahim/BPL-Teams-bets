import React from "react";
import bgShadow from "../../assets/bg-shadow.png";
import footerLogo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    // <footer className="flex flex-col justify-center items-center mt-8 bg-black pb-12 p-4 space-y-8">
    //   <div className="p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-md">
    //     <div
    //       className="w-full bg-white lg:w-[1320px] lg:h-80 rounded-2xl p-8 shadow-lg border border-white/20 flex flex-col justify-center items-center space-y-4"
    //       style={{
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         backgroundImage: `url(${bgShadow})`,
    //       }}
    //     >
    //       <h6 className="text-4xl font-bold">Subscribe to our Newsletter</h6>
    //       <p className="text-2xl font-semibold text-gray-500">
    //         Get the latest updates and news right in your inbox!
    //       </p>
    //       <div className="flex gap-3">
    //         <input
    //           type="text"
    //           placeholder="Enter your email"
    //           className="input join-item w-full lg:w-[460px] text-gray-600 font-medium"
    //         />
    //         <button className="btn btn-warning lg:w-[120px] join-item text-black">
    //           Subscribe
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <img className="w-32" src={footerLogo} alt="" />
    //   <div className="max-w-[1320px] mx-auto footer sm:footer-horizontal justify-between">
    //     <nav>
    //       <h6 className="footer-title text-white">About Us</h6>
    //       <p className="text-gray-400 font-medium">
    //         We are a passionate team <br />
    //         dedicated to providing the best
    //         <br /> services to our customers.
    //       </p>
    //     </nav>
    //     <nav>
    //       <h6 className="footer-title text-white">Quick Links</h6>
    //       <ul className="text-gray-400">
    //         <li className="link link-hover">Home</li>
    //         <li className="link link-hover">Services</li>
    //         <li className="link link-hover">About</li>
    //         <li className="link link-hover">Contact</li>
    //       </ul>
    //     </nav>
    //     <form>
    //       <h6 className="footer-title text-white">Subscribe</h6>
    //       <fieldset className="w-80 space-y-3 text-gray-400">
    //         <p>
    //           Subscribe to our newsletter for the <br /> latest updates.
    //         </p>
    //         <div className="join">
    //           <input
    //             type="text"
    //             placeholder="Enter your email"
    //             className="input input-bordered join-item text-gray-600 font-medium"
    //           />
    //           <button className="btn btn-warning join-item text-black">
    //             Subscribe
    //           </button>
    //         </div>
    //       </fieldset>
    //     </form>
    //   </div>
    // </footer>
    <footer className="flex flex-col justify-center items-center mt-8 bg-black pb-12 p-4 space-y-8">
      <div className="w-full max-w-[1320px] px-4">
        <div className="p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-md">
          <div
            className="w-full h-full bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 flex flex-col justify-center items-center space-y-4"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${bgShadow})`,
            }}
          >
            <h6 className="text-2xl md:text-4xl font-bold text-center">
              Subscribe to our Newsletter
            </h6>
            <p className="text-base md:text-2xl font-semibold text-gray-500 text-center">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="input join-item w-full sm:w-[300px] md:w-[460px] text-gray-600 font-medium"
              />
              <button className="btn btn-warning w-full sm:w-auto join-item text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="w-24 md:w-32" src={footerLogo} alt="" />
      <div className="w-full max-w-[1320px] mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-4 text-center sm:text-left">
        <nav className="flex-1">
          <h6 className="footer-title text-white">About Us</h6>
          <p className="text-gray-400 font-medium">
            We are a passionate team <br />
            dedicated to providing the best
            <br /> services to our customers.
          </p>
        </nav>
        <nav className="flex-1">
          <h6 className="footer-title text-white">Quick Links</h6>
          <ul className="text-gray-400 space-y-1">
            <li className="link link-hover">Home</li>
            <li className="link link-hover">Services</li>
            <li className="link link-hover">About</li>
            <li className="link link-hover">Contact</li>
          </ul>
        </nav>
        <form className="flex-1">
          <h6 className="footer-title text-white">Subscribe</h6>
          <fieldset className="w-full space-y-3 text-gray-400">
            <p>
              Subscribe to our newsletter for the <br /> latest updates.
            </p>
            <div className="join flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item text-gray-600 font-medium w-full sm:w-auto"
              />
              <button className="btn btn-warning join-item text-black w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
