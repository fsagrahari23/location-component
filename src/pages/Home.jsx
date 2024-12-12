import Hero from "@/components/main/Hero";
import { usePreloadImages } from "@/constants/heroImages";
import { FloatingDock } from "@/components/main/Nav";
import Loader from "@/components/main/Loader";
import { useState } from "react";
import { PreLoader } from "@/components/main/preLoader/PreLoader";

const Home = () => {
  const { isLoading: isLoadingImages, loadedImages } =
    usePreloadImages();
  const [isLoadingPreLoader, setIsLoadingPreLoader] =
    useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 relative">
      {isLoadingImages ? (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader></Loader>
        </div>
      ) : (
        <>
          <PreLoader
            onLoadingComplete={() =>
              setIsLoadingPreLoader(() => false)
            }
          />
          {!isLoadingPreLoader && (
            <>
              <div className="top-[85vh] left-[50vw] -translate-x-1/2 z-10 fixed">
                <FloatingDock></FloatingDock>
              </div>
              <Hero products={loadedImages} />{" "}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
