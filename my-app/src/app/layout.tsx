import { Metadata } from "next";
import "./globals.css";
import styles from './layout.module.css'


export const metadata:Metadata = {
  title: "멋진 제펌 사이트",
  description: "멋진 제품을 판매하는 곳입니다",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo Note APP</h1>
          <nav className={styles.nav}>
            <a href="">Contact</a>
            <a href="">About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
