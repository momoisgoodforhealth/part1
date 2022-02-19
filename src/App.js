import React, { useState } from 'react'


const Statistics = (props) => {

    const Heading = () => <div><h1>give feedback</h1></div>
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

    const Total = ({ total }) => <div>all {total}</div>
    const Avg = ({ ave }) => <div>average {ave}</div>
    const Pos = ({ posi }) => <div>positive {posi}%</div>

    const Button = ({ onClick, text }) => {
        return (
            <button onClick={onClick}>
                {text}
            </button>
        )
    }

    const good1 = () => props.setGood(props.good + 1)
    const neutral1 = () => props.setNeutral(props.neutral + 1)
    const bad1 = () => props.setBad(props.bad + 1)

    var tot = props.good + props.bad + props.neutral
    var avg = (props.good - props.bad) / tot
    var poscent = (props.good / tot) * 100

    if (tot != 0) {
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
                <Goodval v={props.good} />
                <Neutralval v={props.neutral} />
                <Badval v={props.bad} />
                <Total total={tot} />
                <Avg ave={avg} />
                <Pos posi={poscent} />
            </div>
        )

    }
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
            <div>No feedback given</div>
        </div>
    )


}


const App = () => {
    // save clicks of each button to its own state





    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)




    /* const Total = ({ total }) => <div>all {total}</div>
    const Avg = ({ ave }) => <div>average {ave}</div>
    const Pos = ({posi}) => <div>positive {posi}%</div>

    const good1 = () => setGood(good + 1)
    const neutral1 = () => setNeutral(neutral + 1)
    const bad1 = () => setBad(bad + 1)

    var tot = good + bad + neutral
    var avg = (good - bad) / tot
    var poscent = (good/tot) *100
    */
    return (
        <div>
            <Statistics setGood={setGood} good={good} setBad={setBad} bad={bad} setNeutral={setNeutral} neutral={neutral} />
        </div>
    )
} 
  
export default App