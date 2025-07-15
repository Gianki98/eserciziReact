import React, { useMemo } from 'react';

/**
 * Componente che filtra e mostra solo gli elementi con età > 18
 * @param {Array} list - Array di oggetti con {id, name, age}
 */
function FilteredList({ list }) {
  // useMemo per memorizzare la lista filtrata
  // Si ricalcola solo quando 'list' cambia
  const filteredList = useMemo(() => {
    console.log('Filtering list...'); // Per debug
    return list.filter(item => item.age > 18);
  }, [list]); // Dipendenza: si ricalcola solo se list cambia
  
  // useMemo per calcolare statistiche (esempio di ottimizzazione extra)
  const stats = useMemo(() => {
    return {
      total: list.length,
      filtered: filteredList.length,
      avgAge: filteredList.length > 0 
        ? (filteredList.reduce((sum, item) => sum + item.age, 0) / filteredList.length).toFixed(1)
        : 0
    };
  }, [list, filteredList]);
  
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px'
    }}>
      <h2>Filtered List (Age {'>'} 18)</h2>
      
      {/* Statistiche */}
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '15px'
      }}>
        <p>Total items: {stats.total}</p>
        <p>Filtered items: {stats.filtered}</p>
        <p>Average age (filtered): {stats.avgAge}</p>
      </div>
      
      {/* Lista filtrata */}
      {filteredList.length === 0 ? (
        <p>No items with age greater than 18</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredList.map(item => (
            <li 
              key={item.id}
              style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: '#f9f9f9',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span><strong>{item.name}</strong></span>
              <span>Age: {item.age}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilteredList;