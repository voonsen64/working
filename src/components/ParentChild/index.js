import { useState, useEffect } from 'react';
import Child from './Child';

export default function ParentChild() {

  console.log("render Parent", new Date().toISOString());
  const [data, setData] = useState((new Date()).toISOString());
  useEffect(() => {
    console.log("render Parent inside useEffect", new Date().toISOString());
  });
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-6">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12"
            src="https://voonsen64.github.io/assets/img/chat.png"
            alt="ChitChat Logo"
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-row space-x-4">
            <div className="text-xl font-medium text-black">Parent</div>
            <button className="rounded-full bg-green-300 px-4 pb-1" onClick={() => setData((new Date()).toISOString())}>Change state</button>
          </div>
          <div>{data}</div>
          <Child />
        </div>
      </div>
    </>
  );

}
