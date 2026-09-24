# Historic Landmarks of San Francisco

> Documentation for the website [hlosf.com](https://www.hlosf.com/).

## About

### Description

`hlosf.com` is a content-driven website featuring historical analysis, sightseeing guides, maps, and images of the registered California Historical Landmarks located in San Francisco, California.

### Features Overview

- Fully responsive and accessible UI with light and dark mode color schemes.
- Images rendered in efficient preprocessed AVIF and WebP formats and delivered via AWS CloudFront CDN for high performance and low latency.
- Google Maps displays the location of individual landmarks and sightseeing groups.
- Improved search engine optimization (SEO) via server-side rendering (SSR) and enhanced metadata.

### Tech Stack

- Language: `TypeScript`
- UI Library: `Next.js v16`, `React v19`
- Components & Styling: `Tailwind CSS`, `Swiper`
- Maps: `Google Maps JavaScript API`, `react-google-maps`
- Lint &amp; Format: `Biome`
- Image Processing: `sharp`
- Asset Hosting & Delivery: `AWS S3`, `AWS CloudFront`
- Deploy: `Vercel`

## UI

### HTML Parsing

Text content is fetched as raw HTML strings and parsed for rendering using `html-react-parser`.

`<a>` tags are parsed and replaced with the Next's built-in `Link` component to utilize client-side routing. 

### Images

Each of the site's image assets have been preprocessed by `sharp`, a Node.js image processing library, into multiple AVIF, WebP, and JPEG files of different sizes. Using the HTML `picture` element, the browser fetches the best available size and format for their device and display.

Images are cached and served via a CloudFront CDN.

"Lazy loading" of images, a process that delays loading images until they are actually in the user's display, is utilized to improve performance and load times.

## SEO

Search engine optimization for `hlosf.com` is managed using:

- Server-side rendering (SSR) to ensure that search engines can crawl content-rich webpages after they have been compiled on the server and fetched by the browser.
  - Components with user interaction, effects, or state values are client-side rendered (CSR).
- Metadata tags including programmatically-created `<title>`, `<meta>`, and canonical URL `<link>` tags.
  - Open Graph (OG) and Twitter `<meta>` tags improve social media sharing.
- Icons, including Favicon and Apple Touch files that boost visibility and branding on mobile devices, take advantage of Next.js file-naming conventions to automatically generate `<link>` tags in the document `<head>`. 

### Accessibility

Semantic HTML and element attributes, including `type`, `role`, and ARIA-specific attributes, are applied where applicable to help make the website accessible to screen readers.

## Additional Information

### Links

- [Visit Historic Landmarks of San Francisco (hlosf.com)](https://www.hlosf.com)

### Local Development

> How to run the application locally. Requires Node.

```bash
# Install deps and run
npm install
npm run dev

# Lint and fix
npm run lint
npm run format

# Build and run
npm run build
npm run start
```

#### Environment variables

```
.env

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<Google API key>

NEXT_PUBLIC_MAP_ID=<Google Map ID>

NEXT_PUBLIC_IMG_ASSETS_URL=<CDN URL>
```