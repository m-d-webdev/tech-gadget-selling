import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Bricolage_Grotesque } from "next/font/google"
const Bbricolage_Grotesque = Bricolage_Grotesque({
  // weight: ["400"]
});
import MainContext from "@/context/MainContext";
import Header from "@/Client/layout/header";
import Footer from "@/Client/layout/Footer";
import IderkaouiToast from "@/components/global/Toast/MyToas";

export default function RootLayout({ children, modal }) {

  return (
    <html lang="en">
      <body className={`${Bbricolage_Grotesque.className} bg-sidebar `}>
        <MainContext>
          <IderkaouiToast />
          <Header />
          {children}
          {modal}
          <Footer />
        </MainContext>
      </body>
    </html>
  );
}
