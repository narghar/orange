import Clients from "../src/components/Clients";
import Footer from "../src/components/Footer";
import Advantages from "../src/components/Offer/Advantages";
import OfferContact from "../src/components/Offer/OfferContact";
import OfferInfo from "../src/components/Offer/OfferInfo";


const Offer = () => {
  return (
    <>
      <OfferInfo />
      <Advantages />
      <OfferContact />
      <Clients />
      <Footer />
    </>
  );
};

export default Offer;
