import Image from "next/image";
import Link from "next/link";
import FacebookIconWhite from "../../public/assets/contact/f-w.svg";
import PhoneWhiteIcon from '../../public/assets/contact/phone-w.svg';
import YoutubeIconWhite from '../../public/assets/contact/y-w.svg';
const Footer = () => {
  return (
    <section className="bg-black mt-32 overflow-hidden">
      <div className="relative max-w-base mx-auto text-white px-2 base:px-0 flex flex-wrap justify-evenly lg:justify-start">
        <figure className="pt-36 mb-12 w-full text-center lg:text-left">
          <Image
            src="/assets/contact/logo.png"
            alt=""
            width={417}
            height={45}
          />
        </figure>
        <div className="w-[270px] sm:w-1/4">
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
          <div className="mt-3 mb-12 lg:mb-0">
            <div className="mt-3 flex items-center">
              <YoutubeIconWhite />
              <FacebookIconWhite className="ml-8" />
            </div>
          </div>
        </div>
        <div className="w-[270px] sm:w-1/4">
          <h4 className="uppercase text-orange-light text-15p tracking-[3px] mb-3">
            Skontaktuj się
          </h4>
          <div className="leading-6 mb-12">
            <span className="font-semibold">
              Maria Rakowska - Office Manager
            </span>
            <div className="flex items-center">
              <PhoneWhiteIcon />
              <span className="ml-2">+48 607 339 459</span>
            </div>
            e-mail:
            <span className="text-orange-light"> ms.rakowska@gmail.com</span>
          </div>
          <div className="leading-6 mb-12">
            <span className="font-semibold">Barbara Pewna - Co-Producer</span>
            <div className="flex items-center">
              <PhoneWhiteIcon />
              <span className="ml-2">+48 693 557 829</span>
            </div>
            <span className="text-orange-light">basiapewna@gmail.com</span>
          </div>
          <div className="leading-6 mb-12">
            <span className="font-semibold">Paweł Pewny - Producent</span>
            <div className="flex items-center">
              <PhoneWhiteIcon />
              <span className="ml-2">+48 720 800 979</span>
            </div>
            <span className="text-orange-light">pawel@orangeanimation.pl</span>
          </div>
          <div className="leading-6">
            <span className="font-semibold">Piotr Reisch - Producent</span>
            <div className="flex items-center">
              <PhoneWhiteIcon />
              <span className="ml-2">+48 603 193 820</span>
            </div>
            <span className="text-orange-light">piotr@spinkafilm.pl</span>
          </div>
        </div>
        <div className="w-2/3 lg:w-1/2 text-center lg:text-left pl-0 lg:pl-12 mt-24 lg:mt-0">
          <h2 className="text-4xl m-w-[609px]">
            Uwielbiamy wyzwania stawiane nam przez producentów i twórców.
            <br />
            Profesjonalnie i solidnie.
          </h2>
          <button
            className="text-orange border border-solid font-semibold rounded-[20px]
            border-orange px-14 py-2 mt-14"
          >
            Skontaktuj się
          </button>
        </div>
        <div className="w-2/3 lg:w-4/5 xl:w-full text-gray-darker mt-24 leading-tight">
          <p className="xl:max-w-[990px]">
            Filmy fabularne - Seriale telewizyjne - Seriale internetowe - Gry
            video - Reklamy - Konsultacje kreatywne
          </p>
          <p className="xl:max-w-[990px] mt-5">
            Kompozycja i malowanie - Wstępny montaż kolorów - Storyboard -CGI -
            2D/3D concept art - Animacja 2D/3D - Modelowanie i rigging- Kolory
            BG - Layouty - Animacja i efekty w grach - Projektowaniepostaci i
            rekwizytów - Tworzenie zasobów do gier - 2D/3D FX -Animatyka -
            Teksturowanie - Cieniowanie
          </p>
        </div>
        <nav className="w-full mt-24 mb-24 lg:mb-32">
          <ul className="text-gray-darker text-base uppercase tracking-wide font-medium flex flex-col sm:flex-row items-center sm:items-start  justify-around md:justify-center lg:justify-start">
            <li className="md:mr-13">
              <Link href="/">
                <a className="text-orange">Home</a>
              </Link>
            </li>
            <li className="md:mr-13">
              <Link href="/oferta">
                <a>Oferta</a>
              </Link>
            </li>
            <li className="md:mr-13">
              <Link href="/produkcje">
                <a>Produkcje</a>
              </Link>
            </li>
            <li className="md:mr-13">
              <Link href="/aktualne">
                <a>Aktualne Projekty</a>
              </Link>
            </li>
            <li className="md:mr-13">
              <Link href="/kariera">
                <a>Kariera</a>
              </Link>
            </li>
            <li className="lg:mr-13">
              <Link href="/kontakt">
                <a>Kontakt</a>
              </Link>
            </li>
          </ul>
        </nav>
        <figure className="-mb-2 lg:absolute lg:mb-0 lg:-bottom-2 lg:-right-20">
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
