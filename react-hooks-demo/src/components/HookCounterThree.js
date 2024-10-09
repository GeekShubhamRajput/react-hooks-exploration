import {useState} from 'react'

export const HookCounterThree = () => {
  const [name, setName] = useState({firstName: '', lastName: ''})

  return(
    <div>
      <form>
        <input type='text' name='firstName' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
        <input type='text' name='lastName' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
        <h2>First Name: {name.firstName}, Last Name: {name.lastName}</h2>
      </form>
      <hr /><br />
      </div>
  )
}
