import { useState } from "react";

export const HookCounterFour = () =>{
  const [items, setItem] = useState([])

  const addItem = () => {
    setItem([...items, {
      id: items.length + 1,
      value: Math.floor(Math.random() * 100)
    }])
    console.log(items)
  }

  return(
    <div>
      <button onClick={addItem}>Add an Item</button>
      <ol>
        {
          items.map(item => <li key={item.id}>{item.value}</li>)
        }
      </ol>
    </div>
  )
}
