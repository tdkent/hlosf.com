import parse from "html-react-parser";

interface Props {
  htmlContent: string;
  styles?: string;
}

export default function ParsedHtml({ htmlContent, styles }: Props) {
  return (
    <div className={`html${styles ? ` ${styles}` : ""}`}>
      {parse(htmlContent)}
    </div>
  );
}
