import React, {useEffect, useRef} from 'react'

const RefFocus = () => {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    },[])

  return (
    <div>
        
        <form action="">
            <label htmlFor=''>Nombre</label>
            <input type='text' ref={inputRef} />
            <label htmlFor=''>Apellido</label>
            <input type='text' />
        </form>

    </div>
  )
}

export default RefFocus