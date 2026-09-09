import Image from "next/image";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <article>
      <div className="relative my-4 lg:my-10 mx-auto w-full aspect-3/2 z-[-1]">
        <Image
          className="mx-auto shadow-sm shadow-slate-400 rounded-lg object-cover"
          src={`${config.cloudinaryUrl}/q_80${config.cloudinaryFolder}/lm841-conservatory/Conservatory-site-2_uykjmg.jpg`}
          alt="The Conservatory of Flowers, San Francisco"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </div>
    </article>
  );
}
