import Image from "next/image";
const OurWork = () => {
  return (
    <section className="grid grid-cols-3 max-w-base mx-auto mt-32  px-2 xl:px-0 ">
      <div>
        <p>1.</p>
        <h2>Do dzisiaj wyprodukowaliśmy</h2>
        <p>
          ponad 600 odcinków animowanych seriali telewizyjnych o łącznej
          długości 5.600 minut oraz 7 pełnometrażowych filmów animowanych
        </p>
      </div>
      <div>
        <Image src="/assets/contact/01.png" alt="" width={427} height={526} />
      </div>
      <div>
        <p>2.</p>
        <h2>Dla producentów z krajów</h2>
        <p>
          Belgia, Francja, Niemcy, Włochy, Kanada, Wielka Brytania, Hiszpania,
          Słowacja, Czechy, Indie, Iran, Luksemburg, Izrael i Polska.
        </p>
      </div>
      <div>
        <Image src="/assets/contact/02.png" alt="" width={434} height={349} />
      </div>
      <div>
        <p>3.</p>
        <h2>Liderzy naszych zespołów</h2>
        <p>
          Belgia, Francja, Niemcy, Włochy, Kanada, Wielka Brytania, Hiszpania,
          Słowacja, Czechy, Indie, Iran, Luksemburg, Izrael i Polska.
        </p>
      </div>
      <div>
        <Image src="/assets/contact/03.png" alt="" width={434} height={349} />
      </div>
      <div className="col-span-2">
        <Image src="/assets/contact/04.png" alt="" width={912} height={412} />
      </div>
      <div>
        <p>4.</p>
        <h2>Z reżyserami m.in.</h2>
        <p>
          Od Ariego Folmana, Kena Loacha, Romana Polańskiego, Wojtka
          Smarzowskiego i Witka Adamka
        </p>
      </div>
    </section>
  );
};

export default OurWork;
