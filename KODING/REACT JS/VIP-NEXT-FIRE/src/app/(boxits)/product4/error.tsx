"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <div>Something went wrong</div>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </>
  );
}
