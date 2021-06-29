import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../public/assets/career/arrow-r.svg";
import ArrowSmall from "../../../public/assets/home/arrow-orange-small.svg";
const Faq = () => {
  return (
    <section className="max-w-8xl mx-auto">
      <div className="max-w-base mx-auto mt-44 px-4 base:px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-28">
        <div>
          <p className="text-2xl font-light leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
            metus eget dolor condimentum placerat. Vivamus ac hendrerit ligula,
            ac volutpat odio. Sed dapibus lorem id enim vestibulum, ut imperdiet
            sapien pulvinar.
          </p>
          <p className="font-light leading-9 mt-10">
            Sed bibendum quam eu nibh pellentesque, in semper lorem consequat.
            Sed tincidunt vulputate elit quis scelerisque. Sed a imperdiet
            purus. Proin ac molestie nisi. Curabitur scelerisque mauris placerat
            ligula scelerisque dignissim a a neque.
          </p>
          <p className="mt-12 text-2xl text-orange font-bold flex items-center justify-between sm:justify-start lg:justify-between">
            Czy tworzycie animacje metodą ...
            <Arrow className="flex-shrink-0 sm:ml-20 lg:ml-0" />
          </p>
          <p className="font-light leading-6 mt-3">
            Sed bibendum quam eu nibh pellentesque, in semper lorem consequat.
            Sed tincidunt vulputate elit quis scelerisque.
          </p>
          <div className="font-bold mt-12 leading-6">
            <p className="mb-4 flex items-center justify-between ">
              Mauris interdum velit ac lectus sollicitudin, ac congue nunc
              hendrerit
              <ArrowSmall className="flex-shrink-0" />
            </p>
            <p className="mb-4 flex items-center justify-between">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec metus eget dolor condimentum placerat
              <ArrowSmall className="flex-shrink-0" />
            </p>
            <p className="mb-4 flex items-center justify-between">
              Proin ut elit ac lacus commodo imperdiet non eu nisi
              <ArrowSmall className="flex-shrink-0" />
            </p>
            <p className="mb-4 flex items-center justify-between">
              Fusce tempor turpis a interdum consequat
              <ArrowSmall className="flex-shrink-0" />
            </p>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <h2 className="text-3xl sm:leading-tight sm:text-5xl font-bold ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor
            felis, semper quis diam ut, rhoncus ullamcorper ligula.
          </h2>
          <p className="mt-12 font-light leading-9">
            Sed bibendum quam eu nibh pellentesque, in semper lorem consequat.
            Sed tincidunt vulputate elit quis scelerisque. Sed a imperdiet
            purus. Proin ac molestie nisi. Curabitur scelerisque mauris
          </p>
        </div>
      </div>
      <div className="relative flex  justify-between items-end 2xl:justify-center mb-[-9px] pt-20  max-w-8xl mx-auto ">
        <div className="px-10 lg:px-10">
          <Image
            src="/assets/home/crocodile.png"
            alt=""
            width={393}
            height={308}
          />
        </div>
        <div className="px-10 lg:px-0 base:absolute bottom-0 base:right-20 ">
          <Image src="/assets/home/tiger.png" alt="" width={387} height={376} />
        </div>
      </div>
      <div className="relative max-w-8xl h-[650px] lg:h-[800px] xl:h-[976px] mx-auto">
        <Image
          src="/assets/home/video.png"
          alt="video"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div className="flex flex-col items-center">
          <div className="relative md:absolute mt-12 md:mt-0 md:top-16 md:right-10">
            <Image
              src="/assets/home/award.png"
              alt="European Film Award"
              width={218}
              height={143}
            />
          </div>
          <div className="relative md:absolute w-72 sm:w-[443px] md:bottom-28 md:left-40 text-center md:text-left">
            <h2 className="mt-12 md:mt-0 text-4xl sm:text-5xl text-white font-bold leading-tight">
              Różne historie,
              <br />
              różne style
            </h2>
            <p className="text-white text-2xl sm:text-3xl font-medium mt-12">
              Dostarczamy wysokiej jakości animacje na czas
            </p>
            <div className="mt-12 border-b-2 inline-block border-transparent hover:border-white">
              <Link href="/kontakt">
                <a className="inline-block text-orange hover:text-white hover:boder text-2xl sm:text-3xl font-bold">
                  Skontaktuj się
                  <ArrowSmall className="inline-block ml-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
