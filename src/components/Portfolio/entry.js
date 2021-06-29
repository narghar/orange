import Image from "next/image";
import PlayIcon from "../../../public/assets/portfolio/play-icon.svg";
import RightArrowIcon from "../../../public/assets/portfolio/right-arrow.svg";
const PortfolioEntry = () => {
  return (
    <div className="max-w-base mx-auto mt-24 mb-48 px-2 base:px-0">
      <section className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start">
        <figure className="mt-6 lg:mt-0">
          <Image
            src="/assets/portfolio/01.png"
            alt=""
            width={841}
            height={486}
          />
        </figure>
        <div className="w-[440px] lg:ml-14 text-center lg:text-left order-first lg:order-last">
          <span className="text-orange-light text-base uppercase tracking-widest mt-1">
            Film pełnometrażowy
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl xl:text-5xl uppercase leading-tight">
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
      <section className="grid grid-cols-2 mt-4 gap-x-2">
        <figure className="relative base:w-[684px] base:h-[380px] h-[25vw]">
          <Image
            src="/assets/portfolio/02.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <figure className="relative base:w-[677px] base:h-[380px]">
          <Image
            src="/assets/portfolio/03.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <div className="mt-6 base:mt-12 mx-auto col-span-2">
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
        <h2 className="font-bold text-5xl  text-center xl:justify-self-start  col-span-full mb-20">
          Zobacz inne produkcje
        </h2>
        <figure className="relative">
          <Image
            src="/assets/portfolio/05.png"
            alt=""
            width={449}
            height={581}
          />
          <figcaption className="absolute bottom-9 left-8 z-50 text-3xl text-white font-medium uppercase w-3/4">
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
          <figcaption className="absolute bottom-9 left-8 z-50 text-3xl text-white font-medium uppercase w-3/4">
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
          <figcaption className="absolute bottom-9 left-8 z-50 text-3xl text-white font-medium uppercase w-3/4">
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
