import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { config } from "@/lib/config";

export default function HomePage() {
  return (
    <div>
      <div className="relative lg:my-10 mx-auto w-full aspect-3/2 z-[-1]">
        <Image
          className="mx-auto shadow-sm shadow-slate-400 rounded-lg object-cover"
          src={`${config.cloudinaryUrl}/q_80${config.cloudinaryFolder}/lm841-conservatory/Conservatory-site-2_uykjmg.jpg`}
          alt="The Conservatory of Flowers, San Francisco"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </div>

      <details className="my-8">
        <summary className="cursor-pointer w-fit">
          A note on the content
        </summary>

        <p className="font-light mt-2 bg-background-secondary border p-4">
          Much of the content on this site was created in 1976, and the text
          herein often refers to that year. This material was intended to be
          published at that time; it never was. But through the magic of the
          internet, it has been resurrected in the form you see. The great thing
          about most historic sites, and the plaques that commemorate them, is
          that they don’t change much, if at all, through time. Telegraph Hill
          is still Telegraph Hill, and Union Square is still Union Square. So
          the stuff I wrote in that remote, antediluvian time is still for the
          most part valid today. I have, nonetheless, carefully reviewed the
          text and made changes and updates where appropriate.
        </p>
      </details>

      <article className="font-light">
        <h1>Welcome to the historic landmarks of San Francisco!</h1>
        <p className="text-lg mt-2">
          For San Francisco 1976 is a twin bicentennial, the anniversary of the
          founding of both the Nation and the City.
        </p>
        <p className="mt-2">
          It seems therefore particularly appropriate for residents and visitors
          alike to become more aware of the City's past. One way of reaching
          this goal is by visiting the 38 California State Registered Historical
          Landmarks to be found within San Francisco.
        </p>
        <p className="mt-2">
          Anyone who has traveled in California has seen the handsome bronze
          plaques which designate State Historical Landmarks. These tablets are
          placed at sites of <q>statewide historical significance</q> which have{" "}
          <q>
            anthropological, cultural, military, political, architectural,
            economic, scientific or technical, religious, experimental, or other
            values
          </q>
          , according to the State Department of Parks and Recreation handbook
          California Historical Landmarks. A seven member advisory committee
          appointed by the Governor determines whether a given site is worthy of
          landmark status or not. There are well over 800 such landmarks
          throughout the state, with new ones being added each year.
        </p>
        <p className="mt-2">
          Not all sites have official state plaques. Some have tablets provided
          by private organizations, e.g. the Native Sons of Daughters of the
          Golden West, the California Historical Society, the Society of
          California Pioneers, the Daughters of the American Revolution, etc.,
          while other sites remain unmarked.
        </p>
        <div className="flex flex-row items-center mt-4 text-lg gap-2">
          <FaArrowCircleRight className="mr-1" />
          <Link href="/landmarks" className="link">
            Go To Landmarks Page
          </Link>
        </div>
      </article>
    </div>
  );
}
