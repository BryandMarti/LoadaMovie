import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.counterContainer}>
      <h2>Counter</h2>
      <div style={styles.counterWrapper}>
        <button style={styles.counterButton} onClick={decrement}>-</button>
        <span style={styles.counterValue}>{count}</span>
        <button style={styles.counterButton} onClick={increment}>+</button>
      </div>
    </div>
  );
};

const styles = {
  counterContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  counterWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  counterButton: {
    padding: '10px',
    fontSize: '20px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  counterValue: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Counter;
