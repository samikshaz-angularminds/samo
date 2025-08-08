import Image from "next/image";
import Header from "./header/page";
import SignUp from "./components/SignUp";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <SignUp />
    </div>
  );
}
