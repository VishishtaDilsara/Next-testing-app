import Link from "next/link";
import React from "react";
import styles from "./contact.module.css";

function page() {
  const meatItems = [
    {
      id: 1,
      meatName: "Chicken",
    },
    {
      id: 2,
      meatName: "Mutton",
    },
    {
      id: 3,
      meatName: "Beef",
    },
    {
      id: 4,
      meatName: "Pork",
    },
  ];

  return (
    <>
      <h1>Meat Page</h1>
      <ul>
        {meatItems.map((item) => {
          return (
            <li>
              <Link
                href={`/products/meat/${item.meatName}`}
                className={styles.link}
              >
                {item.meatName}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default page;
