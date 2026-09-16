import parse from "html-react-parser";

interface Props {
  htmlContent: string;
}

export default function ParsedHtml({ htmlContent }: Props) {
  return <div>{parse(htmlContent)}</div>;
}
