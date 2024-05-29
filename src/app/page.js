import Footer from "@/components/Footer";
import HeaderNavigation from "@/components/HeaderNavigation";

import { Carousel } from "flowbite-react";
import { SLIDER_IMAGES } from "@/constants";

const Home = () => {
  return (
    <main>
      <HeaderNavigation />
      <div className="grow">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="h-72">
            <Carousel
              draggable={false}
              indicators={false}
              slideInterval={5000}
            >
              {SLIDER_IMAGES.map(({src, alt}) => {
                return <img src={`/images/${src}`} alt={`/images/${alt}`} key={new Date().getTime()} />;
              })}
            </Carousel>
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Nothing.me: Anonymous Chat
            </h2>
            <p className="mb-4">
              Nothing.me is more than just an anonymous chat, it's a rapidly
              growing social network where communication and self-expression are
              taken to the next level.
            </p>
            <p>The creators of Nothing.me:</p>
            <ul className="max-w-md space-y-1 list-disc list-inside">
              <li>
                <strong className="font-bold">Experienced team:</strong> Strategists, designers and developers united
                by a desire to create a <strong className="font-bold">simple, fast</strong> and <strong className="font-bold">effective</strong> platform.
              </li>
              <li>
                <strong className="font-bold">Innovative approach:</strong> Nothing.me does not copy existing solutions,
                but offers a fresh look at anonymous communication.
              </li>
              <li>
                <strong className="font-bold">Scalability:</strong> Nothing.me has the potential for <strong className="font-bold">rapid growth</strong> while
                maintaining <strong className="font-bold">convenience</strong> and <strong className="font-bold">functionality</strong>.
              </li>
            </ul>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
