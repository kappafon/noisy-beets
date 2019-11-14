import * as React from 'react'
import './pad.scss'

export interface PadProps {
    id: string
    value: string | number
    className?: string

    onButtonClicked(value: string): void
}

const Pad: React.FC<PadProps> = props => {
    const onButtonClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onButtonClicked(e.currentTarget.value)
    }
    return (
        <button
            id={props.id}
            className={`button ${props.className}`}
            onClick={onButtonClicked}
            value={props.value.toString()}
        >
            <audio id={props.id} className={`button drum-pad ${props.className}`}>
                {props.value}
            </audio>
        </button>
    )
}

export default Pad
