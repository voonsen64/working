import { useEffect } from 'react';
import SubChild from './SubChild';

export default function Child() {
  console.log("render Child", new Date().toISOString());
  useEffect(() => {
    console.log("render Child inside useEffect", new Date().toISOString());
  });
  return (
    <>
      <p className="text-gray-500">This is child!</p>
      <SubChild />
    </>
  );
}
