"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import Confetti from "react-dom-confetti";

const FullScreenConfetti = () => {
  const searchParams = useSearchParams();

  const subscribe = searchParams.get("subscribe");
  return (
    <>
      <Confetti active={subscribe == "true"} />
    </>
  );
};

export default FullScreenConfetti;
