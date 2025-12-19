import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <h1>Services Page</h1>
      <Link href="/">Go to Home</Link>
      <Link href="/products">Go to Products</Link>
    </>
  );
}

export default page;
