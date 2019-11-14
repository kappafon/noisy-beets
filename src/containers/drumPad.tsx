import * as React from 'react'
import './drumPad.scss'
import Pad from '../components/pad'

function useKey(key: any) {
    // Keep track of key state
    const [pressed, setPressed] = React.useState(false)

    // Does an event match the key we're watching?
    const match = (event: { key: { toLowerCase: () => void } }) =>
        key.toLowerCase() == event.key.toLowerCase()

    // Event handlers
    const onDown = (event: { key: { toLowerCase: () => void } }) => {
        if (match(event)) setPressed(true)
    }

    const onUp = (event: { key: { toLowerCase: () => void } }) => {
        if (match(event)) setPressed(false)
    }

    // Bind and unbind events
    React.useEffect(() => {
        window.addEventListener('keydown', onDown)
        window.addEventListener('keyup', onUp)
        return () => {
            window.removeEventListener('keydown', onDown)
            window.removeEventListener('keyup', onUp)
        }
    }, [key])

    return pressed
}

export interface DrumPadProps {
    onButtonClicked(value: string): void
}

const DrumPad: React.FC<DrumPadProps> = props => {
    const qKey = useKey('q')
    const wKey = useKey('w')
    const eKey = useKey('e')
    const aKey = useKey('a')
    const sKey = useKey('s')
    const dKey = useKey('d')
    const zKey = useKey('z')
    const xKey = useKey('x')
    const cKey = useKey('c')
    console.log(qKey)

    const onButtonClicked = (value: string) => {
        props.onButtonClicked(value)
    }
    return (
        <section className="pads__container">
            <div className="pads">
                <Pad
                    pressed={qKey}
                    id="chord-one"
                    value="Q"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                />
                <Pad
                    pressed={wKey}
                    id="chord-two"
                    value="W"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
                />
                <Pad
                    pressed={eKey}
                    id="chord-three"
                    value="E"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                />
                <Pad
                    pressed={aKey}
                    id="light"
                    value="A"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                />
                <Pad
                    pressed={sKey}
                    id="dry"
                    value="S"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                />
                <Pad
                    pressed={dKey}
                    id="hat"
                    value="D"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                />
                <Pad
                    pressed={zKey}
                    id="kick"
                    value="Z"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                />
                <Pad
                    pressed={xKey}
                    id="stick"
                    value="X"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                />
                <Pad
                    pressed={cKey}
                    id="snare"
                    value="C"
                    onButtonClicked={onButtonClicked}
                    src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                />
            </div>
        </section>
    )
}

export default DrumPad
