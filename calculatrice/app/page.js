'use client'
import {useState } from "react";

export default function Home() {

  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const buttons = [ '7', '8', '9', '/',
                    '4', '5', '6', '*',
                    '1', '2', '3', '-',
                    '0', '.', '=', '+',
                    'C' 
                  ];

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        console.log(error)
        setResult('Expression invalide');
        setExpression('');
      }
    } else if (value === 'C') {
        setResult('')
        setExpression('')
    } else {
      setExpression((prevExpression) => prevExpression + value)
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-blod mb-10" >Calculatrice</h1>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <input 
        type="text" 
        className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none" 
        value={expression}
        readOnly
      />
      <input 
        type="text"  
        className="w-full text-1xl mb-4 focus:outline"
        value={result}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2" >
        {buttons.map((btn, index) => (
          <button 
            key={index}
            onClick={() => handleButtonClick(btn)}
            className="text-4xl bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
          >
            {btn}
          </button>
        ))}
      </div>
        
    </div>
    </main>
  );
}

