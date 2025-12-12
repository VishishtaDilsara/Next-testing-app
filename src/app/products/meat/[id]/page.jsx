import React from "react";

async function page({ params }) {
  const { id } = await params;
  return <div>Meat number : {id}</div>;
}

export default page;
