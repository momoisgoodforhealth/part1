/*import React, { useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)

    const Display = ({counter}) => <div>{counter}</div>

    const Button = ({ onClick,text }) => {
        return (
            <button onClick={onClick}>
                {text}
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
}  */

 import React, { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const Heading = () => <div><h1>give feedback dong</h1></div>
    const Heading2 = () => <div><h1>statistics</h1></div>


    const Goodval = ({ v }) => {
        return (<div>good {v}</div>)

    }

    const Neutralval = ({ v }) => {
        return (<div>neutral {v}</div>)
    }

    const Badval = ({ v }) => {
        return (<div>bad {v}</div>)
    }

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const Button = ({ onClick, text }) => {
        return (
            <button onClick={onClick}>
                {text}
            </button>
        )
    }

    const Total = ({ total }) => <div>all {total}</div>
    const Avg = ({ ave }) => <div>average {ave}</div>
    const Pos = ({posi}) => <div>positive {posi}%</div>

    const good1 = () => setGood(good + 1)
    const neutral1 = () => setNeutral(neutral + 1)
    const bad1 = () => setBad(bad + 1)

    var tot = good + bad + neutral
    var avg = (good - bad) / tot
    var poscent = (good/tot) *100

    return (
        <div>
            <Heading />
            <Button onClick={good1}
                text='good' />
            <Button onClick={neutral1}
                text='neutral' />
            <Button onClick={bad1}
                text='bad' />
            <Heading2 />
            <Goodval v={good} />
            <Neutralval v={neutral} />
            <Badval v={bad} />
            <Total total={tot} />
            <Avg ave={avg} />
            <Pos posi={poscent} />
           
        </div>
    )
} 
  
export default App