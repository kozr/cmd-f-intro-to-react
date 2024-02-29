"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./TreasureClicker.module.css"; // Ensure you have this CSS module for styling

function TreasureClicker(props) {
  // TODO: Increase the number of coins when the treasure is clicked
  const handleClick = () => {

  };

  // TODO: Change Title when number of coins changes
  // ??

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
    <h1 className={styles.text}>Welcome ??</h1>
    <h2 className={styles.text}>Coins: ??</h2>
  </div>
  );  
}

export default TreasureClicker;
