import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/");
  // }, []);
  return <div>This page will be the home page for Reusejs-react docs site</div>;
}
