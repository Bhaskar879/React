import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // UseRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_{}|?><:`-=[]\;',./";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log(char);
      
      pass += str.charAt(char)
      // console.log(pass);
      
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();    // hilight selection portion
    passwordRef.current?.setSelectionRange(0, 20);  //range select
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-400'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={20}
              value={length}
              className='curser-pointer'
              onChange={(e) =>  setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={(e) => setNumAllowed((prev) => !prev)}
            />
            <label>Number {numAllowed}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={(e) => setCharAllowed((prev) => !prev)}
            />
            <label>Character {charAllowed}</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
