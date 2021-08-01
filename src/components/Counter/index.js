import { useState } from 'react';

export default function Counter() {
  // console.log("render Counter", new Date().toISOString());
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex-col flex space-y-2">
        <div className="text-xl font-bold">Counter: {count}</div>
        <div className="space-x-4">
          <button
            className="px-4 pb-2 text-xl text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={() => setCount((prev) => prev + 1)}
          >
            count + 1
          </button>
          <button
            className="px-4 pb-2 text-xl text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={() => setCount((prev) => prev - 1)}
          >
            count - 1
          </button>
        </div>
      </div>
    </>
  );
}