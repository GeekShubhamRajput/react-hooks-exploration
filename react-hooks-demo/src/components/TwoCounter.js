import {useState, useMemo} from 'react' 

export const TwoCounter = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(1)

  const isEven = useMemo(() => {
    let i = 0; 
    while(i < 1000000000) i++;
    return countOne % 2 === 0;
  }, [countOne])

  return(
    <div>
      <div>
        <span>Count One : {countOne}</span><br />
        <span>Count is : {isEven ? 'Even' : 'Odd'}</span><br />
        <button onClick={() => setCountOne(countOne + 1)}>Increment Count One</button><br /><br />
      </div>
      <div>
        <span>Count One : {countTwo}</span><br />
        <button onClick={() => setCountTwo(countTwo + 1)}>Increment Count Two</button>
      </div>
    </div>
  )
}
