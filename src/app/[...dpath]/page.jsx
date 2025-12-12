import React from "react";

async function page({ params }) {
  const { dpath } = await params;
  return (
    <>
      <div>Catch All routes</div>
      <ul>
        {dpath.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default page;
