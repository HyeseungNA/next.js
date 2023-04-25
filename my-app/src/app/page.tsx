// import { Inter } from 'next/font/google'
import { notFound } from "next/navigation";

import os from 'os'//노드 APIs

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log('안녕👻👻👻👻👻')
  console.log(os.hostname());
  return <h1>홈페이지</h1>;
}
