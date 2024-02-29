"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./TreasureClicker.module.css"; // Ensure you have this CSS module for styling

const DEFAULT_TREASURE_SIZE = 300;

function TreasureClicker(props) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(DEFAULT_TREASURE_SIZE); // Initial size of the image

  const handleClick = () => {
    setCount(count + 1);
    setSize(DEFAULT_TREASURE_SIZE * 1.1); // Increase size by 10%
    setTimeout(() => setSize(DEFAULT_TREASURE_SIZE), 100); // Shrink back after 100ms
  };

  useEffect(() => {
    // Update the title of the page
    document.title = `Treasure Clicker - ${count} coins`;
  }, [count]);

  return (
    <div className={styles.gameContainer}>
      <Image
        src="/treasure-map.svg"
        alt="Treasure Map"
        layout="fill"
        priority
        style={{ zIndex: -1 }}
      />
      <div onClick={handleClick} style={{ cursor: 'pointer', display: 'inline-block' }}>
        <Image
          alt="Treasure"
          src="/treasure.svg"
          width={size}
          height={size}
          priority
        />
      </div>
    <h1 className={styles.text}>Welcome {props.playerName}</h1>
    <h2 className={styles.text}>Coins: {count}</h2>
  </div>
  );  
}

export default TreasureClicker;
