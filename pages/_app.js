import "bootstrap/dist/css/bootstrap.min.css";
import "@component/styles/globals.css";
import NavBar from "@component/components/navBar";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
export default function App({ Component, pageProps:{session,...pageProps} }) {
  useEffect(()=>{
    import ("bootstrap/dist/js/bootstrap.min.js");
  },[])
    if (Component.getLayout){
    return <Component {...pageProps} />
  }
  return (
    <>
      <SessionProvider session={session} >
      <NavBar></NavBar>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  );
}
