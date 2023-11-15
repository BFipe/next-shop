import type { Metadata } from "next";
import "./globals.scss";
import ReduxStoreProvider from "./reduxCore/ReduxStoreProvider";
import Header from "./components/layout/Header/Header";
import style from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Next-Shop",
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
        <Header />
        <ReduxStoreProvider>{children}</ReduxStoreProvider>
      </body>
    </html>
  );
}
