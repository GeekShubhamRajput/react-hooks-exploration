import useInput from '../hooks/useInput'

function UserForm(){
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }
  
  return(
      <form onSubmit={handleSubmit}>
        <label>FirstName: </label>
        <input type='text' {...bindFirstName} /><br /><br />
        <label>LastName: </label>
        <input type='text' {...bindLastName} /><br /><br />
        <button type="submit">Submit</button>
      </form>
  )
}

export default UserForm
