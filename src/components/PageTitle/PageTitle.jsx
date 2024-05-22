import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return <p className={css.heading}>{children}</p>;
}
