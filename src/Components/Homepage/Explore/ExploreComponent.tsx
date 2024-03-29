import Arrow from "./Arrow.svg";

interface Props {
  image: string;
  heading: string;
  text: string;
}

export default function ExploreComponent(props: Props) {
  const { image, heading, text } = props;

  return (
    <div className="mx-2 mb-16">
      <div className="lg:object-cover lg:h-[260px] rounded-xl overflow-hidden lg:w-[420px]">
        <img
          className="rounded-xl w-full h-full transition-all cursor-pointer hover:brightness-90 hover:scale-105 duration-300 object-cover"
          src={image}
          alt=""
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-archivo font-medium">{heading}</h3>
          <img src={Arrow} className="lg:hidden" alt="" />
        </div>
        <p className="text-[0.9rem] font-archivo text-[#535353]">{text}</p>
      </div>
    </div>
  );
}
