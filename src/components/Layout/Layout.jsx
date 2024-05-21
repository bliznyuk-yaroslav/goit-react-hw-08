import { Suspense } from "react";
import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import Loading from "../Loading/Loading";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
