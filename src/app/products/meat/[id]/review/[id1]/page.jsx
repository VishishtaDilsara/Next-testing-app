import React from "react";

async function page({ params }) {
  const { id, id1 } = await params;
  return (
    <div>
      Meat item {id} Review {id1}
    </div>
  );
}

export default page;
