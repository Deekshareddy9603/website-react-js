import React from 'react'

export default function DestructuringProps(name) {
  return (
    <div>
      function ChildComponent({ name }) { 
       return <p>Hello, {name}!</p>;
      }
    </div>
  )
}
