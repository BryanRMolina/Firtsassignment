import React, { useState } from "react"

const useCounter = (initialValue, stock) => {
    const [ count, setCount ] = useState(initialValue)

    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {
        setCount(count - 1)
    }


  return {count, incrementar, decrementar}
}

export default useCounter