import type { Metadata } from "next";
import "./globals.scss";

import { Rubik } from "next/font/google";
import style from "./layout.module.scss";
import Header from "@/src/components/layout/Header/Header";
import ReduxStoreProvider from "@/src/reduxCore/ReduxStoreProvider";
import ApplyClientSideActions from "@/src/components/layout/ApplyClientSideActions/ApplyClientSideActions";

const rubik = Rubik({
  subsets: ["cyrillic-ext", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next | Shop by BFipe",
  description: "Pet-Project by BFipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body className={style.body}>
        <ReduxStoreProvider>
          <Header />
          <ApplyClientSideActions />
          <main className={style.container}>{children}</main>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
