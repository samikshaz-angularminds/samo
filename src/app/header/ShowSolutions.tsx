import HeaderDropdown from "./HeaderDropDown";

const ShowSolutions = ({
  setShowSolutionsList,
}: {
  setShowSolutionsList: (value: boolean) => void;
}) => {
  // Remove this console.log from here
  // console.log("show solutions list");

  return (
    <HeaderDropdown onMouseLeave={() => setShowSolutionsList(false)}>
      <div>ShowSolutions</div>
    </HeaderDropdown>
  );
};

export default ShowSolutions;
