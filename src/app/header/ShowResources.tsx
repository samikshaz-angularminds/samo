import HeaderDropdown from "./HeaderDropDown";

const ShowResources = ({
  setShowResourcesList,
}: {
  setShowResourcesList: (value: boolean) => void;
}) => {
  // Remove this console.log from here
  // console.log("show resources list");

  return (
    <HeaderDropdown onMouseLeave={() => setShowResourcesList(false)}>
      <div>ShowResources</div>
    </HeaderDropdown>
  );
};

export default ShowResources;
