import Image from "next/image";
const OfferInfo = () => {
  return (
    <div>
      <section className="max-w-base mx-auto px-2 base:px-0 py-12 lg:pt-24 lg:pb-44">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 lg:mb-24 text-center lg:text-left">
          Filmy fabularne
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-16  gap-y-16 lg:gap-y-32 ">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="text-xl sm:text-2xl my-10 font-light leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis eu ligula blandit semper. Praesent porttitor nisl orci, at
              dictum tortor hendrerit in. Duis scelerisque at ipsum in sagittis.
              Fusce nec dictum dui.
            </p>
            <p className="leading-9">
              Nullam blandit tincidunt lobortis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris suscipit consequat velit.
              Donec nec tellus in nulla finibus feugiat. Integer ut venenatis
              lectus, vitae ullamcorper felis. Quisque vitae felis dui. Nulla
              suscipit ex justo, id scelerisque eros pellentesque a. Donec
              volutpat posuere neque vitae vestibulum. Quisque imperdiet
              volutpat aliquet. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Suspendisse volutpat sagittis ex, sit amet gravida
              massa venenatis in. Suspendisse euismod diam vel rutrum eleifend.
            </p>
          </div>
          <figure className="text-center">
            <Image
              src="/assets/offer/01.png"
              alt="film"
              layout="intrinsic"
              width={678}
              height={678}
            />
          </figure>
          <figure className="order-last lg:order-none text-center">
            <Image
              src="/assets/offer/01.png"
              alt="film"
              layout="intrinsic"
              width={678}
              height={678}
            />
          </figure>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="text-xl sm:text-2xl my-10 font-light leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis eu ligula blandit semper. Praesent porttitor nisl orci, at
              dictum tortor hendrerit in. Duis scelerisque at ipsum in sagittis.
              Fusce nec dictum dui.
            </p>
            <p className="leading-9">
              Nullam blandit tincidunt lobortis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris suscipit consequat velit.
              Donec nec tellus in nulla finibus feugiat. Integer ut venenatis
              lectus, vitae ullamcorper felis. Quisque vitae felis dui. Nulla
              suscipit ex justo, id scelerisque eros pellentesque a. Donec
              volutpat posuere neque vitae vestibulum. Quisque imperdiet
              volutpat aliquet. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Suspendisse volutpat sagittis ex, sit amet gravida
              massa venenatis in. Suspendisse euismod diam vel rutrum eleifend.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferInfo;
