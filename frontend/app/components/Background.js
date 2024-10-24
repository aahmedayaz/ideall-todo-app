import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute w-[100%] h-full z-10 overflow-hidden">
      <Image
        src="/media1.png"
        alt="a"
        width={1000}
        height={1000}
        className="rotate-[75deg] translate-x-[-700px]"
      />
      <Image
        src="/media1.png"
        alt="a"
        width={1000}
        height={1000}
        className="rotate-[75deg] translate-x-[1400px] absolute top-0"
      />
    </div>
  );
}

export default Background;