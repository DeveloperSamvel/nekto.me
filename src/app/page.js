import Footer from "@/components/Footer";
import HeaderNavigation from "@/components/HeaderNavigation";
import NewsLetter from "@/components/Newsletter";

import { Carousel } from "flowbite-react";
import { SLIDER_IMAGES } from "@/constants";

const Home = () => {
  return (
    <main>
      <HeaderNavigation />
      <div className="grow">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="h-full">
              <Carousel
                draggable={false}
                indicators={false}
                slideInterval={5000}
              >
                {SLIDER_IMAGES.map(({src, alt}) => {
                  return (
                    <img
                      src={`/images/${src}`}
                      alt={`/images/${alt}`}
                    />
                  )
                })}
              </Carousel>
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900"></section>
      {/* </div> */}
      <Footer />
    </main>
  );
};

export default Home;
