import React, {useState} from "react"

const Input = (props) => {
    const [hide, setHide] = useState(false)
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState("")
    const hideLabel = hide || focus || value



    return (
        <label className="input-container">
            <span className={`label ${hideLabel ? "hide" : ""}`}>{props.label}</span>
            <input className="input" value={value} name={props.name} onAnimationStart={handleAutoFill} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={event => {setValue(event.target.value)}}/>
        </label>
    )
}

export default Input