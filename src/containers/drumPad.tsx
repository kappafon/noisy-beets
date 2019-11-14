import * as React from 'react'
import './drumPad.scss'
import Pad from '../components/pad'

export interface DrumPadProps {
    // onButtonClicked(value: string): void
}

const DrumPad: React.FC<DrumPadProps> = props => {
    const onButtonClicked = (value: string) => {
        // props.onButtonClicked(value)
    }
    return (
        <section className="buttons__container">
            <div className="buttons__numbers">
                <Pad id="seven" value="Q" onButtonClicked={onButtonClicked} />
                <Pad id="eight" value="W" onButtonClicked={onButtonClicked} />
                <Pad id="nine" value="E" onButtonClicked={onButtonClicked} />
                <Pad id="four" value="A" onButtonClicked={onButtonClicked} />
                <Pad id="five" value="S" onButtonClicked={onButtonClicked} />
                <Pad id="six" value="D" onButtonClicked={onButtonClicked} />
                <Pad id="one" value="Z" onButtonClicked={onButtonClicked} />
                <Pad id="two" value="X" onButtonClicked={onButtonClicked} />
                <Pad id="three" value="C" onButtonClicked={onButtonClicked} />
            </div>
        </section>
    )
}

export default DrumPad
