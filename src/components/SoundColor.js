import React, { useRef } from 'react';

const SoundColor = () => {
    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;

        alert(`${soundVal} sounds like ${colorVal}`)
    }

    return (
        <form onSubmit={submit}>
            <input ref={sound} type='text' placeholder='Sound..'/>
            <input ref={color} type='color'/>
            <button>ADD</button>
        </form>
    );
}

export default SoundColor;