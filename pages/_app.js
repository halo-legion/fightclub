import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { ToastProvider } from "react-toast-notifications";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { _init } from "../utils/_functions";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    _init().then((val) => {
      if (window.location.pathname !== "/" && !val) {
        router.push("/");
      }
      if (window.location.pathname == "/" && val) {
        router.push("/dashboard");
      }
    });
  }, []);
  return (
    <div className="bg-bgblack">
      <RecoilRoot>
        <ToastProvider
          autoDismissTimeout={4000}
          autoDismiss
        >
          <Component {...pageProps} />
        </ToastProvider>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
