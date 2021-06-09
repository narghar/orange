import Image from "next/image";
const Footer = () => {
  return (
    <section className="bg-black mt-32">
      <div className="relative max-w-base mx-auto text-white px-2 xl:px-0 flex flex-wrap">
        <figure className="pt-36 mb-12 w-full">
          <Image
            src="/assets/contact/logo.png"
            alt=""
            width={417}
            height={45}
          />
        </figure>
        <div className="w-1/4">
          <h4 className="uppercase text-orange-light text-15p tracking-[3px] mb-3">
            Dane fakturowe
          </h4>
          <p className="leading-6">
            <span className="font-semibold">Orangeanimation Sp. z o.o.</span>
            <br />
            Ul. Działy 20D;
            <br />
            43-340 Kozy, Poland
            <br />
            NIP: 9372372688
            <br />
            <span className="block mt-3">
              Zobacz na <a className="text-orange font-semibold">Google Maps</a>
            </span>
          </p>
          <h4 className="uppercase text-orange-light text-15p tracking-[3px] mb-3 mt-12">
            Studio animacji
          </h4>
          <p className="leading-6">
            Ul. Odysei 29;
            <br />
            43-344 Bielsko-Biała, Poland
            <br />
            <span className="block mt-3">
              Zobacz na <a className="text-orange font-semibold">Google Maps</a>
            </span>
          </p>
          <h4 className="uppercase text-orange-light text-15p tracking-[3px] mt-12">
            Social Media
          </h4>
          <div className="mt-3">
            <span>
              <Image
                src="/assets/contact/y.png"
                alt=""
                width={20}
                height={16}
              />
            </span>
            <span className="ml-8 align-middle">
              <Image
                src="/assets/contact/f.png"
                alt=""
                width={13}
                height={22}
              />
            </span>
          </div>
        </div>
        <div className="w-1/4">
          <h4 className="uppercase text-orange-light text-15p tracking-[3px] mb-3">
            SKONTAKTUJ SIĘ
          </h4>
          <p className="leading-6 mb-12">
            <span className="font-semibold">
              Maria Rakowska - Office Manager
            </span>
            <br />
            <span className="align-middle mr-2">
              <Image
                src="/assets/contact/phone.png"
                alt=""
                width={11}
                height={15}
              />
            </span>
            +48 607 339 459
            <br />
            e-mail:
            <span className="text-orange-light"> ms.rakowska@gmail.com</span>
          </p>
          <p className="leading-6 mb-12">
            <span className="font-semibold">Barbara Pewna - Co-Producer</span>
            <br />
            <span className="align-middle mr-2">
              <Image
                src="/assets/contact/phone.png"
                alt=""
                width={11}
                height={15}
              />
            </span>
            +48 693 557 829
            <br />
            <span className="text-orange-light">basiapewna@gmail.com</span>
          </p>
          <p className="leading-6 mb-12">
            <span className="font-semibold">Paweł Pewny - Producent</span>
            <br />
            <span className="align-middle mr-2">
              <Image
                src="/assets/contact/phone.png"
                alt=""
                width={11}
                height={15}
              />
            </span>
            +48 720 800 979
            <br />
            <span className="text-orange-light">pawel@orangeanimation.pl</span>
          </p>
          <p className="leading-6">
            <span className="font-semibold">Piotr Reisch - Producent</span>
            <br />
            <span className="align-middle mr-2">
              <Image
                src="/assets/contact/phone.png"
                alt=""
                width={11}
                height={15}
              />
            </span>
            +48 603 193 820
            <br />
            <span className="text-orange-light">piotr@spinkafilm.pl</span>
          </p>
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl  m-w-[609px]">
            Uwielbiamy wyzwania stawiane nam przez producentów i twórców.
          </h2>
          <button
            className="text-orange border border-solid rounded-[20px]
            border-orange px-14 py-2 mt-11"
          >
            Skontaktuj się
          </button>
        </div>
        <div className="w-full text-gray-darker">
          <p className="max-w-[971px]">
            Filmy fabularne - Seriale telewizyjne - Seriale internetowe - Gry
            video - Reklamy - Konsultacje kreatywne
          </p>
          <p className="max-w-[971px]">
            Kompozycja i malowanie - Wstępny montaż kolorów - Storyboard -CGI -
            2D/3D concept art - Animacja 2D/3D - Modelowanie i rigging- Kolory
            BG - Layouty - Animacja i efekty w grach - Projektowaniepostaci i
            rekwizytów - Tworzenie zasobów do gier - 2D/3D FX -Animatyka -
            Teksturowanie - Cieniowanie
          </p>
        </div>
        <figure className="absolute bottom-0 right-0">
          <Image
            src="/assets/contact/bot-image.png"
            alt=""
            width={303}
            height={437}
          />
        </figure>
      </div>
    </section>
  );
};

export default Footer;
