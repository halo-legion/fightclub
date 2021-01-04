import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { _init } from "./_functions";

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
      if(window.location.pathname == "/" && val) {
        router.push('/dashboard');
      }
    });
  }, []);
  return (
    <div className="bg-bgblack">
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
