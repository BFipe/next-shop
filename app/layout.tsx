import type { Metadata } from "next";
import "./globals.scss";

import { Rubik } from "next/font/google";
import style from "./layout.module.scss";
import Header from "@/src/components/layout/Header/Header";
import ReduxStoreProvider from "@/src/reduxCore/ReduxStoreProvider";
import ApplyClientSideActions from "@/src/components/layout/ApplyClientSideActions/ApplyClientSideActions";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const rubik = Rubik({
  subsets: ["cyrillic-ext", "latin-ext"],
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
        {/* AntD config provider */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#34af61",
            },
            components: {
              Modal: {
                contentBg: "#1A1A1A",
                headerBg: "transparent",
                titleColor: "white",
              },
            },
          }}
        >
          <ReduxStoreProvider>
            <Header />
            <ApplyClientSideActions />
            <AntdRegistry>
              <main className={style.container}>{children}</main>
            </AntdRegistry>
          </ReduxStoreProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
