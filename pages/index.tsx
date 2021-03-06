import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push({
      pathname: "/main",
    });
  }, []);
  return <div />;
};

export default Home;
