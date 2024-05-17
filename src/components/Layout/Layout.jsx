import { Suspense } from "react";
import css from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Loading from "../Loading/Loading";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
