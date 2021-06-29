import Link from "next/link";
const OfferContact = () => {
  return (
    <section className="max-w-base mx-auto text-center">
      <div className="sm:px-20 pt-14 sm:pt-36">
        <h3 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className="text-2xl mt-9 mb-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis eu ligula blandit semper. Praesent porttitor nisl orci, at
          dictum tortor hendrerit in. Duis scelerisque at ipsum in sagittis.
          Fusce nec dictum dui.
        </p>
        <Link href="/kontakt">
          <a
            className="inline-block text-orange hover:bg-black hover:text-white hover:border-black border border-solid font-semibold rounded-[20px]
                border-orange px-14 py-2"
          >
            Skontaktuj się
          </a>
        </Link>
      </div>
    </section>
  );
};

export default OfferContact;
