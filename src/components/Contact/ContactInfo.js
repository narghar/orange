import FacebookIcon from '../../../public/assets/contact/f.svg';
import PhoneIcon from '../../../public/assets/contact/phone.svg';
import YoutubeIcon from '../../../public/assets/contact/y.svg';

const ContactInfo = () => {
  return (
    <section className="max-w-base mx-auto px-2 base:px-0 mt-20 justify-evenly lg:justify-start flex flex-wrap">
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
            Zobacz na
            <a
              href="https://goo.gl/maps/apMXELKNYqrsJuXL9"
              target="_blank"
              className="text-orange font-semibold ml-1"
            >
              Google Maps
            </a>
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
            Zobacz na
            <a
              href="https://goo.gl/maps/LHBy2WG69fn4pVnbA"
              target="_blank"
              className="text-orange font-semibold ml-1"
            >
              Google Maps
            </a>
          </span>
        </p>
        <h4 className="uppercase text-orange-light text-15p tracking-[3px] mt-12">
          Social Media
        </h4>
        <div className="mt-3 flex items-center mb-12 lg:mb-0">
          <a
            href="https://www.youtube.com/channel/UClf-uJs2joQapM9CVQt8N6Q"
            target="_blank"
          >
            <YoutubeIcon />
          </a>
          <a href="https://www.facebook.com/Orangeanimation/" target="_blank">
            <FacebookIcon className="ml-8" />
          </a>
        </div>
      </div>
      <div className="w-[270px] sm:w-1/4">
        <h4 className="uppercase text-orange-light text-15p tracking-[3px] mb-3">
          Skontaktuj się
        </h4>
        <div className="leading-6 mb-12">
          <span className="font-semibold">Maria Rakowska - Office Manager</span>
          <br />
          <div className="flex items-center">
            <PhoneIcon />
            <span className="ml-2">+48 607 339 459</span>
          </div>
          <br />
          e-mail:
          <a
            href="mailto:ms.rakowska@gmail.com"
            className="text-orange-light ml-1"
          >
            ms.rakowska@gmail.com
          </a>
        </div>
        <div className="leading-6 mb-12">
          <span className="font-semibold">Barbara Pewna - Co-Producer</span>
          <br />
          <div className="flex items-center">
            <PhoneIcon />
            <span className="ml-2">+48 693 557 829</span>
          </div>
          <br />
          <a href="mailto:basiapewna@gmail.com" className="text-orange-light">
            basiapewna@gmail.com
          </a>
        </div>
        <div className="leading-6 mb-12">
          <span className="font-semibold">Paweł Pewny - Producent</span>
          <br />
          <div className="flex items-center">
            <PhoneIcon />
            <span className="ml-2">+48 720 800 979</span>
          </div>
          <br />
          <a
            href="mailto:pawel@orangeanimation.pl"
            className="text-orange-light"
          >
            pawel@orangeanimation.pl
          </a>
        </div>
        <div className="leading-6">
          <span className="font-semibold">Piotr Reisch - Producent</span>
          <br />
          <div className="flex items-center">
            <PhoneIcon />
            <span className="ml-2">+48 603 193 820</span>
          </div>
          <br />
          <a href="mailto:piotr@spinkafilm.pl" className="text-orange-light">
            piotr@spinkafilm.pl
          </a>
        </div>
      </div>
      <form
        method="GET"
        action="/kontakt"
        className="w-4/5 sm:w-2/3 lg:w-1/2 mt-5"
      >
        <fieldset className="text-gray-dark">
          <input
            type="text"
            id="name"
            name="name"
            aria-label="Imię"
            required
            className="bg-gray-light placeholder-gray-dark  w-full rounded-2xl py-3 pl-5 mb-2"
            placeholder="Imię"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-label="Numer telefonu"
            required
            className="bg-gray-light placeholder-gray-dark  w-full rounded-2xl py-3 pl-5 mb-2"
            placeholder="Numer telefonu"
          />
          <input
            type="email"
            id="email"
            name="email"
            aria-label="Adres E-mail"
            required
            className="bg-gray-light placeholder-gray-dark  w-full rounded-2xl py-3 pl-5 mb-2"
            placeholder="Adres E-mail"
          />
        </fieldset>
        <textarea
          rows="8"
          placeholder="Wiadomość"
          aria-label="Wiadomość"
          className="w-full bg-gray-light text-gray-dark placeholder-gray-dark rounded-2xl py-3 pl-5 mb-2"
        ></textarea>
        <div className="mt-3">
          <input
            type="checkbox"
            name="accept-terms"
            id="accept-terms"
            required
            value="true"
            className="checkbox"
          />
          <label
            htmlFor="accept-terms"
            className="flex items-center justify-items-center cursor-pointer text-gray-dark text-base"
          >
            <span className="w-4 h-4"></span>
            Akceptuję regulamin
          </label>
        </div>
        <button
          type="submit"
          className="text-orange hover:bg-black border border-solid font-semibold rounded-[20px]
            border-orange px-14 py-2 mt-11"
        >
          Wyślij Wiadomość
        </button>
      </form>
      <div className="w-full mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10293.939998921573!2d19.062316!3d49.8333439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9905027725c4e31!2sOrange%20Studio%20Animacji%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1624535939177!5m2!1spl!2spl"
          width="100%"
          height="521"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactInfo;
