import React, { useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)

    const Display = (props) => {
        return (
            <div>{props.counter}</div>
        )
    }

    const Button = (props) => {
        return (
            <button onClick={props.onClick}>
                {props.text}
            </button>
        )
    }

    const handleClick = () => {
        console.log('clicked')
    }

    const increase1 = () => setCounter(counter + 1)
    const set0 = () => setCounter(0)
    const decrease1 = () => setCounter(counter - 1)

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increase1}
                text='plus' />
            <Button onClick={set0}
                text='zero' />
            <Button onClick={decrease1}
                text='minus' />
        </div>
    )
}

export default App