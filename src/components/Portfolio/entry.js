import Image from "next/image";
import PlayIcon from "../../../public/assets/portfolio/play-icon.svg";
import RightArrowIcon from "../../../public/assets/portfolio/right-arrow.svg";
const PortfolioEntry = () => {
  return (
    <div className="max-w-base mx-auto mt-24 mb-48 px-2 base:px-0">
      <section className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start">
        <figure>
          <Image
            src="/assets/portfolio/01.png"
            alt=""
            width={841}
            height={486}
          />
        </figure>
        <div className="w-[440px] ml-14 order-first lg:order-last">
          <span className="text-orange-light text-base uppercase tracking-widest mt-1">
            Film pełnometrażowy
          </span>
          <h2 className="font-bold text-5xl uppercase leading-tight">
            Oh, wie schön ist Panama
          </h2>
          <p className="mt-2">
            dla Papa Lowe Filmproduction i Warner Bros
            <br />
            <span className="block text-2xl font-semibold mt-5 mb-2">
              Wykonaliśmy:
            </span>
            Layout, Modelowanie 3D, Animacja klawiszy, Animacja 2D i 3D
            Pomiędzy, Czyszczenie, Paint
          </p>
        </div>
      </section>
      <section className="flex flex-wrap justify-center  lg:justify-between mt-4">
        <figure>
          <Image
            src="/assets/portfolio/02.png"
            alt=""
            width={684}
            height={380}
          />
        </figure>
        <figure>
          <Image
            src="/assets/portfolio/03.png"
            alt=""
            width={677}
            height={380}
          />
        </figure>
        <div className="mt-12 mx-auto">
          <figure className="relative">
            <Image
              src="/assets/portfolio/04.png"
              alt=""
              width={976}
              height={549}
            />
            <PlayIcon className="absolute top-[44%] left-[48%] z-50" />
            <div className="absolute bg-black bg-opacity-45 top-0 w-full h-cardFix z-40"></div>
          </figure>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 mt-44 justify-items-center">
        <h2 className="font-bold text-5xl justify-self-center lg:justify-self-start col-span-full mb-20">
          Zobacz inne produkcje
        </h2>
        <figure className="relative">
          <Image
            src="/assets/portfolio/05.png"
            alt=""
            width={449}
            height={581}
          />
          <figcaption className="absolute -mt-24 left-8 z-50 text-3xl text-white font-medium uppercase w-3/4">
            <span className="block text-base font-normal text-orange-light tracking-widest">
              Animacja
            </span>
            Kleiner Dodo
          </figcaption>
          <RightArrowIcon className="absolute right-8 bottom-11 z-50" />
          <div className="absolute bg-mask opacity-70 top-0 w-full h-cardFix z-40"></div>
        </figure>
        <figure className="relative">
          <Image
            src="/assets/portfolio/06.png"
            alt=""
            width={448}
            height={581}
          />
          <figcaption className="absolute -mt-32 pb-96 left-16 z-50 text-3xl text-white font-medium uppercase w-3/4">
            <span className="block text-base font-normal tracking-widest text-orange-light">
              Animacja
            </span>
            Ach, jak cudowna jest Panama
          </figcaption>
          <RightArrowIcon className="absolute right-8 bottom-11 z-50" />
          <div className="absolute bg-mask opacity-70 top-0 w-full h-cardFix z-40"></div>
        </figure>
        <figure className="relative">
          <Image
            src="/assets/portfolio/07.png"
            alt=""
            width={448}
            height={581}
          />
          <figcaption className="absolute -mt-24 pb-96 left-16 z-50 text-3xl text-white font-medium uppercase w-3/4">
            <span className="block text-base font-normal tracking-widest text-orange-light">
              Animacja
            </span>
            Pinocchio
          </figcaption>
          <RightArrowIcon className="absolute right-8 bottom-11 z-50" />
          <div className="absolute bg-mask opacity-70 top-0 w-full h-cardFix z-40"></div>
        </figure>
      </section>
    </div>
  );
};

export default PortfolioEntry;
