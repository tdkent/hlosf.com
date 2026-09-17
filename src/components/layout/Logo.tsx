import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center h-25 lg:h-32.5 2xl:h-40 bg-[url(/us-mint-bg.webp)] bg-no-repeat bg-cover bg-center">
      <p className="z-10 drop-shadow-[0.125rem_0.125rem_0.125rem_black] font-serif text-center text-[6vw] sm:text-4xl 2xl:text-5xl text-white select-none">
        Historic Landmarks <span className="italic">of</span>{" "}
        <span className="text-sky-400">San Francisco</span>
      </p>
      <Image
        className="absolute w-20 aspect-square top-2.5 lg:w-27.5 2xl:w-35 rounded-full shadow shadow-black"
        src="/us-mint-fg.webp"
        alt="Exterior of the US Mint building"
        width={330}
        height={220}
        sizes="(max-width: 1024px) 80px, (max-width: 1536px) 110px, 140px"
        priority
      />
    </div>
  );
}
