import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ShowProducts from "./ShowProducts";
import ShowResources from "./ShowResources";
import ShowSolutions from "./ShowSolutions";

const LeftSection = () => {
  const [showProductsList, setShowProductsList] = useState(false);
  const [showSolutionsList, setShowSolutionsList] = useState(false);
  const [showResourcesList, setShowResourcesList] = useState(false);

  const handleProductsMouseEnter = () => {
    console.log("show products list"); // Move console.log here if needed
    setShowProductsList(true);
    setShowSolutionsList(false);
    setShowResourcesList(false);
  };

  const handleProductsMouseLeave = () => {
    setTimeout(() => {
      if (!showProductsList) {
        setShowProductsList(false);
      }
    }, 1000);
  };

  const handleSolutionsMouseEnter = () => {
    console.log("show solutions list"); // Move console.log here if needed
    setShowProductsList(false);
    setShowSolutionsList(true);
    setShowResourcesList(false);
  };

  const handleSolutionsMouseLeave = () => {
    setTimeout(() => {
      if (!showSolutionsList) {
        setShowSolutionsList(false);
      }
    }, 1000);
  };

  const handleResourcesMouseEnter = () => {
    console.log("show resources list"); // Move console.log here if needed
    setShowProductsList(false);
    setShowSolutionsList(false);
    setShowResourcesList(true);
  };

  const handleResourcesMouseLeave = () => {
    setTimeout(() => {
      if (!showResourcesList) {
        setShowResourcesList(false);
      }
    }, 1000);
  };

  return (
    <div className="flex items-center gap-4 ">
      <div className="cursor-pointer">Logo</div>
      <div className="flex items-center " >
        <div
          onMouseEnter={handleProductsMouseEnter}
          onMouseLeave={handleProductsMouseLeave}
          className="cursor-pointer flex items-center gap-1.5 relative hover:bg-gray-200 rounded-lg p-2"
        >
          Product <IoIosArrowDown size={17} />
          {showProductsList && (
            <ShowProducts setShowProductsList={setShowProductsList} />
          )}
        </div>
        <div
          className="cursor-pointer flex items-center gap-1.5 relative hover:bg-gray-200 rounded-lg p-2"
          onMouseEnter={handleSolutionsMouseEnter}
          onMouseLeave={handleSolutionsMouseLeave}
        >
          Solutions <IoIosArrowDown size={17} />
          {showSolutionsList && (
            <ShowSolutions setShowSolutionsList={setShowSolutionsList} />
          )}
        </div>

        <div
          className="cursor-pointer flex items-center gap-1.5 relative hover:bg-gray-200 rounded-lg p-2"
          onMouseEnter={handleResourcesMouseEnter}
          onMouseLeave={handleResourcesMouseLeave}
        >
          Resources <IoIosArrowDown size={17} />
          {showResourcesList && (
            <ShowResources setShowResourcesList={setShowResourcesList} />
          )}
        </div>
      </div>
      <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
        Pricing
      </div>
    </div>
  );
};

export default LeftSection;
