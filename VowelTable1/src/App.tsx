import React from 'react';
import './App.css'; 

const App: React.FC = () => {

  const generateRandomChar = (): string => {
    const characters = 'abcdefghijk';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  };


  const isVowel = (char: string): boolean => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    return vowels.has(char);
  };


  const generateRandomGrid = (): string[][] => {
    const grid: string[][] = [];
    for (let i = 0; i < 4; i++) {
      const row: string[] = [];
      for (let j = 0; j < 5; j++) {
        const char = generateRandomChar();
        row.push(char);
      }
      grid.push(row);
    }
    return grid;
  };

  const randomGrid = generateRandomGrid();

  return (
    <div className="container">
      <div className="table-container">
        <h1>Random Character Table</h1>
        <table>
          <tbody>
            {randomGrid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((char, colIndex) => (
                  <td
                    key={colIndex}
                    className={isVowel(char) ? 'highlight' : ''}
                  >
                    {char}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
