import React from 'react';
import useInput from '../Hooks/useInput';

const SoundColorWithHook = () => {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${titleProps.value} sounds like ${colorProps.value}`);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type='text' placeholder='Sound..'/>
            <input {...colorProps} type='color'/>
            <button>ADD</button>
        </form>
    );
}

export default SoundColorWithHook;