import * as React from 'react'
import './drumMachine.scss'
import Display from '../components/display'
import DrumPad from '../containers/drumPad'

export interface CalculatorProps {}
const DrumMachine: React.FC<CalculatorProps> = props => {
    // const [result, setResult] = React.useState<Number | undefined>()

    return (
        <div className="drum-machine">
            <main className="drum-machine__container" id="drum-machine">
                <Display />
                <DrumPad />
            </main>
        </div>
    )
}

export default DrumMachine
