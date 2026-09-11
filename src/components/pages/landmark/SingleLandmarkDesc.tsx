import DOMPurify from "isomorphic-dompurify";
import styles from "@/styles/SingleLandmark.module.css";

interface Props {
  descText: string;
}

const SingleLandmarkDesc = ({ descText }: Props) => {
  const clean = DOMPurify.sanitize(descText);
  const createDescMarkup = () => {
    return { __html: clean };
  };
  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: will remove later
    <div className={styles.desc} dangerouslySetInnerHTML={createDescMarkup()} />
  );
};

export default SingleLandmarkDesc;
