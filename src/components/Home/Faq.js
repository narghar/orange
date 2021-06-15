import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../public/assets/career/arrow-r.svg";
import ArrowSmall from "../../../public/assets/home/arrow-orange-small.svg";
const Faq = () => {
  return (
    <section className="max-w-8xl mx-auto">
      <div className="max-w-base mx-auto mt-44 px-2 base:px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-28">
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
          <p className="mt-12 text-2xl text-orange font-bold flex items-center justify-between">
            Czy tworzycie animacje metodą ...
            <Arrow />
          </p>
          <p className="font-light leading-6 mt-3">
            Sed bibendum quam eu nibh pellentesque, in semper lorem consequat.
            Sed tincidunt vulputate elit quis scelerisque.
          </p>
          <div className="font-bold mt-12 leading-6">
            <p className="mb-5">
              Mauris interdum velit ac lectus sollicitudin, ac congue nunc
              hendrerit
              <ArrowSmall className="inline ml-2" />
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec metus eget dolor condimentum placerat
              <ArrowSmall className="inline ml-2" />
            </p>
            <p className="mb-4">
              Proin ut elit ac lacus commodo imperdiet non eu nisi
              <ArrowSmall className="inline ml-2" />
            </p>
            <p className="mb-4">
              Fusce tempor turpis a interdum consequat
              <ArrowSmall className="inline ml-2" />
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor
            felis, semper quis diam ut, rhoncus ullamcorper ligula.
          </h2>
          <p className="mt-14 font-light leading-9">
            Sed bibendum quam eu nibh pellentesque, in semper lorem consequat.
            Sed tincidunt vulputate elit quis scelerisque. Sed a imperdiet
            purus. Proin ac molestie nisi. Curabitur scelerisque mauris
          </p>
        </div>
      </div>
      <div className="relative flex flex-wrap justify-between items-end 2xl:justify-center mb-[-9px] pt-20  max-w-8xl  mx-auto">
        <div className="">
          <Image
            src="/assets/home/crocodile.png"
            alt=""
            width={393}
            height={308}
          />
        </div>
        <div className="base:absolute bottom-0 right-20 ">
          <Image src="/assets/home/tiger.png" alt="" width={387} height={376} />
        </div>
      </div>
      <div className="relative max-w-8xl mx-auto">
        <Image
          src="/assets/home/video.png"
          alt="video"
          width={1920}
          height={976}
        />
        <div className="absolute top-16 right-10">
          <Image
            src="/assets/home/award.png"
            alt="European Film Award"
            width={218}
            height={143}
          />
        </div>
        <div className="absolute w-[443px] top-0 left-0">
          <h2 className="text-5xl text-white">
            Różne historie,
            <br />
            różne style
          </h2>
          <p className="text-white text-3xl">
            Dostarczamy wysokiej jakości animacje na czas
          </p>
          <Link href="/kontakt">
            <a className="text-orange text-3xl">Skontaktuj się</a>
          </Link>
          <ArrowSmall className="inline-block mb-[6px]" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
