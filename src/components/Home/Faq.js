import Image from "next/image";
import Link from "next/link";
const Faq = () => {
  return (
    <section>
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
          <p className="mt-12 text-2xl text-orange font-bold">
            Czy tworzycie animacje metodą ...
          </p>
          <p className="font-light leading-6 mt-3">
            Sed bibendum quam eu nibh pellentesque, in semper lorem consequat.
            Sed tincidunt vulputate elit quis scelerisque.
          </p>
          <div className="font-bold mt-12 leading-6">
            <p className="mb-5">
              Mauris interdum velit ac lectus sollicitudin, ac congue nunc
              hendrerit
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec metus eget dolor condimentum placerat
            </p>
            <p className="mb-4">
              Proin ut elit ac lacus commodo imperdiet non eu nisi
            </p>
            <p className="mb-4">Fusce tempor turpis a interdum consequat</p>
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor
            felis, semper quis diam ut, rhoncus ullamcorper ligula.
          </h2>
          <p>
            Sed bibendum quam eu nibh pellentesque, in semper lorem consequat.
            Sed tincidunt vulputate elit quis scelerisque. Sed a imperdiet
            purus. Proin ac molestie nisi. Curabitur scelerisque mauris
          </p>
        </div>
      </div>
      <div className="max-w-8xl mx-auto">
        <Image
          src="/assets/home/video.png"
          alt="video"
          width={1920}
          height={976}
        />
      </div>
      <div>
        <p>Różne historie, różne style</p>
        <p>Dostarczamy wysokiej jakości animacje na czas</p>
        <Link href="/kontakt">
          <a className="">Skontaktuj się</a>
        </Link>
      </div>
      <div>
        <Image
          src="/assets/home/award.png"
          alt="European Film Award"
          width={218}
          height={143}
        />
      </div>
    </section>
  );
};

export default Faq;
