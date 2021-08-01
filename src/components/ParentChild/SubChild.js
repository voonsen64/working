import { useEffect } from 'react';

export default function SubChild() {
  console.log("render SubChild", new Date().toISOString());
  useEffect(() => {
    console.log("render SubChild inside useEffect", new Date().toISOString());
  });
  return <p className="text-gray-500">This is subchild!</p>;
}