import Header from "../components/header";
import Hero from "../components/hero";
import Universities from "../components/universities";
import Services from "../components/services";
import News from "../components/news";
import Events from "../components/events";
import Countries from "../components/countries";
import Testimonial from "../components/testimonial";
import Dreams from "../components/dreams";
import Footer from "../components/footer";
export default function Home() {
  return (
    <body className="w-full relative">
      <Header />
      <Hero />
      <Universities />
      <Services />
      <News />
      <Events />
      <Countries />
      <Testimonial />
      <Dreams />
      <Footer />
    </body>
  );
}
