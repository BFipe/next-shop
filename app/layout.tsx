import type { Metadata } from "next";
import "./globals.scss";

import style from "./layout.module.scss";
import Header from "@/src/components/layout/Header/Header";
import ReduxStoreProvider from "@/src/reduxCore/ReduxStoreProvider";
import ApplyClientSideActions from "@/src/components/layout/ApplyClientSideActions/ApplyClientSideActions";

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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik"
          rel="stylesheet"
        />
      </head>
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
