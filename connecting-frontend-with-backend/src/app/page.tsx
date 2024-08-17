'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [handleJoke, setJoke] = useState<any[]>([])

  const handleJokes = async () => {
    try {
      const response = await fetch('/api/jokes');
      if (!response.ok) {
        throw new Error('Network response was not ok from page');
      }

      const res = await response.json();
      console.log(res);
      setJoke(res);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleJokes();
  }, [])
  return (
    <>
      <button onClick={handleJokes}>Get Joke</button>
      {handleJoke && <p>{handleJoke}</p>
      }
    </>
  );
}
