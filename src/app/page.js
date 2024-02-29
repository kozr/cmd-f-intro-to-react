"use client"

import React, { useState } from 'react';
import TreasureClicker from './TreasureClicker';
import styles from './page.module.css';

function Home() {
  const [name, setName] = useState('');
  const [entered, setEntered] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEnterGame = () => {
    setEntered(true);
  };

  if (entered) {
    return <TreasureClicker playerName={name} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Coin Clicker</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className={styles.input}
      />
      <button onClick={handleEnterGame} className={styles.button}>Enter Game</button>
    </div>
  );
}

export default Home;
