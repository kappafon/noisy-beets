import * as React from 'react'
import './display.scss'

export interface DisplayProps {
    // input?: string
    // formula?: string
}

const Display: React.FC<DisplayProps> = props => {
    // const { input = '0', formula = ' ' } = props
    return (
        <section id="display" className="drum-machine__display">
            display
        </section>
    )
}

export default Display
