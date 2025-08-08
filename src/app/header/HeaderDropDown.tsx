import { ReactNode } from "react";

const HeaderDropdown = ({ children, onMouseLeave }: { children: ReactNode, onMouseLeave: () => void }) => (
  <div
    className="absolute z-10 top-16 bg-white shadow py-4 px-7 rounded-2xl subpixel-antialiased tracking-wide transition delay-200 duration-1000 ease-in-out  opacity-100 translate-y-0"
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);

export default HeaderDropdown;