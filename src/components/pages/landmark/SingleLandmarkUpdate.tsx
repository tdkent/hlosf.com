import DOMPurify from "isomorphic-dompurify";
import styles from "@/styles/SingleLandmark.module.css";

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
      <h2 className="mb-2 text-lg font-medium">Update (2020)</h2>
      <div
        className={styles.desc}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: will remove later
        dangerouslySetInnerHTML={createUpdateMarkup()}
      />
    </>
  );
}
