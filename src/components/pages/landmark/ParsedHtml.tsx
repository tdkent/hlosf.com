import parse, { type HTMLReactParserOptions } from "html-react-parser";
import Link from "next/link";

interface Props {
  htmlContent: string;
  styles?: string;
}

export default function ParsedHtml({ htmlContent, styles }: Props) {
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode.type === "tag" && domNode.name === "a") {
        const href = domNode.attribs?.href;
        const children = domNode.children[0];

        let text = "";

        // Text is child of <a> tag, e.g. <a>Text</a>
        if (children.type === "text") text = children.data;
        // Fallback text
        else text = "UNKNOWN TEXT";

        return (
          <Link className="underline link hover:no-underline" href={href}>
            {text}
          </Link>
        );
      }
    },
  };

  return (
    <div className={`html${styles ? ` ${styles}` : ""}`}>
      {parse(htmlContent, options)}
    </div>
  );
}
