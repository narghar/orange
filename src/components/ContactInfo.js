import Image from "next/image";

const ContactInfo = () => {
  return (
    <section className="max-w-base mx-auto px-2 xl:px-0 flex flex-wrap">
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
            <Image src="/assets/contact/y.png" alt="" width={20} height={16} />
          </span>
          <span className="ml-8 align-middle">
            <Image src="/assets/contact/f.png" alt="" width={13} height={22} />
          </span>
        </div>
      </div>
      <div className="w-1/4">
        <h4 className="uppercase text-orange-light text-15p tracking-[3px] mb-3">
          SKONTAKTUJ SIĘ
        </h4>
        <p className="leading-6 mb-12">
          <span className="font-semibold">Maria Rakowska - Office Manager</span>
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
      <form method="GET" action="/kontakt" className="w-1/2 mt-5">
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
          className="text-orange border border-solid rounded-[20px]
            border-orange px-14 py-2 mt-11"
        >
          Wyślij Wiadomość
        </button>
      </form>
      <div className="bg-gray-light h-[521px] w-full mt-16"></div>
    </section>
  );
};

export default ContactInfo;
