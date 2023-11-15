import type { Metadata } from "next";
import "./globals.scss";
import ReduxStoreProvider from "./reduxCore/ReduxStoreProvider";
import Navbar from "./components/layout/Navbar/Navbar";
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
          href="https://fonts.googleapis.com/css?family=Comfortaa"
          rel="stylesheet"
        />
      </head>
      <body className={style.body}>
        <Navbar />
        <ReduxStoreProvider>{children}</ReduxStoreProvider>
      </body>
    </html>
  );
}
