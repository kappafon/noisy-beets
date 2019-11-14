import * as React from 'react'
import './pad.scss'

export interface PadProps {
    id: string
    value: string
    src: string
    pressed: boolean

    onButtonClicked(id: string): void
}

const Pad: React.FC<PadProps> = props => {
    let audio: React.RefObject<HTMLAudioElement> = React.createRef()

    React.useEffect(() => {
        if (props.pressed) audio.current!.play()
    })

    const onButtonClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.onButtonClicked(props.id)
        audio.current!.play()
    }

    return (
        <div id={props.id} className="drum-pad button" onClick={onButtonClicked}>
            {props.value}
            <audio ref={audio} id={props.value} className="clip" src={props.src} />
        </div>
    )
}

export default Pad
