import { useState, useEffect } from "react";
import { HiDesktopComputer } from "react-icons/hi";

const DESKTOP_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < DESKTOP_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

function DesktopOnlyMessage({ children }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center px-6 text-white selection:bg-lime selection:text-black">
        <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
          <div className="rounded-full bg-neutral-800 p-6">
            <HiDesktopComputer className="size-16 text-lime lime:text-lime yellow:text-yellow indigo:text-indigo red:text-red rose:text-rose orange:text-orange purple:text-purple" />
          </div>
          <h1 className="font-gothic text-2xl md:text-3xl text-white">
            Use desktop for the best experience
          </h1>
          <p className="text-neutral-400 font-medium text-base leading-relaxed">
            This site is not developed for mobile devices. Please open Liminal on a desktop or laptop for a better experience.
          </p>
        </div>
      </div>
    );
  }

  return children;
}

export default DesktopOnlyMessage;
