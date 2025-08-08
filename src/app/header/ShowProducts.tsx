import Link from "next/link";
import HeaderDropdown from "./HeaderDropDown";

const LeftProductsSection = () => {
  return (
    <div className="flex flex-col  gap-3.5">
      <div className=" text-gray-400 text-sm">Platform</div>
      <Link href={""}>Intelligent Canvas</Link>
      <Link href={""}>AI</Link>
      <Link href={""}>Integrations</Link>
      <Link href={""}>Security</Link>
      <Link href={""} className="text-nowrap">
        Developer Platform
      </Link>
    </div>
  );
};

const RightProductsSection = () => {
  return (
    <div className="flex flex-col gap-3.5 ">
      <div className=" text-sm text-gray-400">Capabilities</div>
      <Link href={""}>Docs</Link>
      <Link href={""}>Tables</Link>
      <Link href={""}>Spaces</Link>
      <Link href={""}>Slides</Link>
      <Link href={""}>Diagramming</Link>
    </div>
  );
};

const ShowProducts = ({
  setShowProductsList,
}: {
  setShowProductsList: (value: boolean) => void;
}) => {
  // Remove this console.log from here
  console.log("show products list");

  return (
    <HeaderDropdown onMouseLeave={() => setShowProductsList(false)}>
      <div className="flex gap-10">
        <LeftProductsSection />
        <RightProductsSection />
      </div>
    </HeaderDropdown>
  );
};

export default ShowProducts;
