import * as React from 'react'
import './drumMachine.scss'

export interface CalculatorProps {}
const DrumMachine: React.FC<CalculatorProps> = props => {
    // const [result, setResult] = React.useState<Number | undefined>()

    return (
        <div className="drum-machine">
            <main className="drum-machine__container" id="drum-machine">
                test
            </main>
        </div>
    )
}

export default DrumMachine
