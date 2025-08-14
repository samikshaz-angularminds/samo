import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const ConnectedCompanies = () => {
  const [hovered, setHovered] = useState(false);

  const row1Companies = [
    { company: "Accenture", path: "/images/companyLogos/Logo-Accenture.svg" },
    { company: "Comcast", path: "/images/companyLogos/Logo-Comcast.svg" },
    { company: "CVS-Health", path: "/images/companyLogos/Logo-CVS-Health.svg" },
    { company: "Danaher", path: "/images/companyLogos/Logo-Danaher.svg" },
    { company: "Delloite", path: "/images/companyLogos/Logo-Delloite.svg" },
    { company: "Dropbox", path: "/images/companyLogos/Logo-Dropbox.svg" },
    { company: "Hanes", path: "/images/companyLogos/Logo-Hanes.svg" },
    { company: "Hr-block", path: "/images/companyLogos/Logo-Hr-block.svg" },
    {
      company: "Kimberly-Clark",
      path: "/images/companyLogos/Logo-Kimberly-Clark.svg",
    },
  ];

  const row2Companies = [
    { company: "Pepsico", path: "/images/companyLogos/Logo-Pepsico.svg" },
    { company: "Publix", path: "/images/companyLogos/Logo-Publix.svg" },
    { company: "Rabobank", path: "/images/companyLogos/Logo-Rabobank.svg" },
    { company: "Slalom", path: "/images/companyLogos/Logo-Slalom.svg" },
    { company: "Total", path: "/images/companyLogos/Logo-Total.svg" },
    { company: "Ubisoft", path: "/images/companyLogos/Logo-Ubisoft.svg" },
    { company: "Wp-Energy", path: "/images/companyLogos/Logo-Wp-Energy.svg" },
    { company: "Yamaha", path: "/images/companyLogos/Logo-Yamaha.svg" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="text-3xl w-2/3 text-center ">
        More than 90M users and 250,000 companies collaborate in the Innovation
        Workspace.
      </div>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col gap-10 items-center justify-center w-full relative mt-6 "
      >
        {hovered && (
          <div className="absolute flex items-center gap-2 text-black font-bold text-2xl h-10 overflow-hidden ">
            <span
              className="animate-rise-up"
              style={{
                animationDelay: "0.1s",
              }}
            >
              Meet
            </span>
            <span
              className="animate-rise-up"
              style={{
                animationDelay: "0.17s",
              }}
            >
              Our
            </span>
            <span
              className="animate-rise-up"
              style={{
                animationDelay: "0.24s",
              }}
            >
              Customers
            </span>
            <span className="animate-right-to-left">
              <IoIosArrowForward />
            </span>
          </div>
        )}

        <div
          className={`flex flex-col gap-10 items-center justify-center w-full relative ${
            hovered ? "opacity-10" : ""
          }`}
        >
          <div className="flex   flex-wrap justify-center ">
            <div className="flex ticker flex-nowrap relative overflow-hidden">
              <div className="flex gap-14 animate-slide-right ">
                {row1Companies.map((company) => (
                  <img
                    key={company.company}
                    src={company.path}
                    className="mx-3"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-14 justify-center ">
            <div className="flex ticker flex-nowrap relative overflow-hidden">
              <div className="flex gap-14 animate-slide-left ">
                {row2Companies.map((company) => (
                  <img
                    key={company.company}
                    src={company.path}
                    className="mx-3"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedCompanies;
