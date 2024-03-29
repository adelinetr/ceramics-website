import HeroComponent from "../../HeroComponent";
import HeroImage from "./Image.png";

export default function Hero() {
  return (
    <section className="mx-auto">
      <HeroComponent
        image={HeroImage}
        heading="Classes"
        paragraph="Ready to dive into the world of ceramics? Become a member today and gain access to all the benefits our club has to offer. "
        buttonClass=""
      />
    </section>
  );
}
