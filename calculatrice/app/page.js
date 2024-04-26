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
      setExpression((pvValue) => pvValue + value)
    }
  };

  return (
    <main className="bg-slate-400 flex min-h-screen min-w-[320px] flex-col items-center p-16">
      <h1 className="text-4xl font-bold mb-8" >Calculatrice</h1>
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">
      <input 
        data-testid="expression"
        type="text" 
        className="w-full mb-2 text-3xl bg-slate-300 rounded-xl focus:outline-none" 
        value={expression}
        readOnly
      />
      <input 
        data-testid="result"
        type="text"  
        className="w-full text-1xl mb-4 focus:outline-none bg-slate-300 rounded-lg"
        value={result}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2" >
        {buttons.map((btn, index) => (
          <button 
            data-testid={`btn-${btn}`}
            key={index}
            onClick={() => handleButtonClick(btn)}
            className="text-4xl text-slate-50 bg-slate-700 hover:bg-slate-500 p-1 rounded-lg"
            value={btn}
          >
            {btn}
          </button>
        ))}
      </div>
        
    </div>
    </main>
  );
}

