import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filterValue, setFilter }) => {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name:
        <input
          type="text"
          value={filterValue}
          onChange={e => setFilter(e.target.value)}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default Filter;
