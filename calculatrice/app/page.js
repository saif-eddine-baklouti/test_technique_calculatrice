'use client'
import {useState } from "react";

export default function Home() {

  const [result, setResult] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-blod mb-10" >Calculatrice</h1>
    </main>
  );
}

