"use client"

import React, { useState } from 'react';
import TreasureClicker from './TreasureClicker';
import styles from './page.module.css';

function Home() {
  // TODO: Store user's name when the user types in the input field
  const handleNameChange = (event) => {

  };

  // TODO: Load the game instead of the form
  const handleEnterGame = () => {

  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Coin Clicker</h2>
      <input
        type="text"
        // value=??
        onChange={handleNameChange}
        placeholder="Enter your name"
        className={styles.input}
      />
      <button onClick={handleEnterGame} className={styles.button}>Enter Game</button>
    </div>
  );
}

export default Home;
