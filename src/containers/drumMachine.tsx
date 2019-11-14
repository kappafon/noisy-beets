import * as React from 'react'
import './drumMachine.scss'
import Display from '../components/display'
import DrumPad from '../containers/drumPad'
import { useState, useEffect } from 'react'

export interface CalculatorProps {}
const DrumMachine: React.FC<CalculatorProps> = props => {
    const [result, setResult] = React.useState<string | undefined>()

    const onButtonClicked = (value: string) => {
        setResult(value)
    }

    return (
        <div className="drum-machine">
            <main className="drum-machine__container" id="drum-machine">
                <Display value={result} />
                <DrumPad onButtonClicked={onButtonClicked} />
            </main>
        </div>
    )
}

export default DrumMachine
