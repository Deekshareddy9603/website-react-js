import React from 'react'

export default function UseStateHook() {
    const[count,setcount]=usestate(0)
  return (
    <div>
      <h1>count:{count}</h1>
    </div>
  );
}
