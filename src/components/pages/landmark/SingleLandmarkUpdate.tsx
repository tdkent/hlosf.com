import DOMPurify from "isomorphic-dompurify";

interface Props {
  updateText: string;
}

export default function SingleLandmarkUpdate({ updateText }: Props) {
  const clean = DOMPurify.sanitize(updateText);
  const createUpdateMarkup = () => {
    return { __html: clean };
  };
  return (
    <>
      <h2>Update (2020)</h2>
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: will remove later
        dangerouslySetInnerHTML={createUpdateMarkup()}
      />
    </>
  );
}
