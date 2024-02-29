"use client"

import React, { useState } from 'react';
import TreasureClicker from './TreasureClicker';
import styles from './page.module.css';

function Home() {

  // TODO: Load the game instead of the form
  const handleEnterGame = () => {

  };

  // TODO: Store user's name when the user types in the input field
  const handleNameChange = (event) => {

  };

  // TODO: Render the game instead of the form once the user has entered their name
  if (false) {
    return <TreasureClicker />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Coin Clicker</h2>
      <input
        type="text"
        onChange={handleNameChange}
        placeholder="Enter your name"
        className={styles.input}
      />
      <button onClick={handleEnterGame} className={styles.button}>Enter Game</button>
    </div>
  );
}

export default Home;
