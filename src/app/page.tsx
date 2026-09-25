import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import CustomImage from "@/components/features/image/CustomImage";

const title = "Explore SF history | Historic Landmarks of San Francisco";

export const metadata: Metadata = {
  title,
  openGraph: {
    description:
      "A guide to the 48 officially designated historical landmarks of California that are located in the city and county of San Francisco, including Union Square, Mission Dolores, and the Presidio.",
    title,
    type: "website",
    url: "https://www.hlosf.com",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      <CustomImage
        altText="The Conservatory of Flowers, San Francisco"
        containerStyles="aspect-3/2 rounded-lg shadow-lg shadow-foreground-secondary lg:my-10 dark:shadow-none"
        fetchPriority="high"
        lazyLoading="eager"
        sizes="(max-width: 900px) 100vw, 900px"
        slug="the-conservatory-2"
      />

      <details className="my-8">
        <summary className="cursor-pointer w-fit">
          A note on the content
        </summary>

        <p className="my-2 bg-background-secondary border p-4">
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

      <article>
        <h1 className="text-balance">
          Welcome to the historic landmarks of San Francisco!
        </h1>
        <p>
          For San Francisco 1976 is a twin bicentennial, the anniversary of the
          founding of both the Nation and the City.
        </p>
        <p>
          It seems therefore particularly appropriate for residents and visitors
          alike to become more aware of the City's past. One way of reaching
          this goal is by visiting the 48 registered California Historical
          Landmarks to be found within San Francisco.
        </p>
        <p>
          Anyone who has traveled in California has seen the handsome bronze
          plaques which designate State Historical Landmarks. These tablets are
          placed at sites of "statewide historical significance" which have{" "}
          "anthropological, cultural, military, political, architectural,
          economic, scientific or technical, religious, experimental, or other
          values", according to the State Department of Parks and Recreation
          handbook California Historical Landmarks. A seven member advisory
          committee appointed by the Governor determines whether a given site is
          worthy of landmark status or not. There are well over 800 such
          landmarks throughout the state, with new ones being added each year.
        </p>
        <p>
          Not all sites have official state plaques. Some have tablets provided
          by private organizations, e.g. the Native Sons of Daughters of the
          Golden West, the California Historical Society, the Society of
          California Pioneers, the Daughters of the American Revolution, etc.,
          while other sites remain unmarked.
        </p>
        <div className="flex flex-row items-center mt-8 gap-2">
          <FaArrowCircleRight className="mr-1" />
          <Link href="/landmarks" className="link hover:underline">
            Go To Landmarks Page
          </Link>
        </div>
      </article>
    </div>
  );
}
