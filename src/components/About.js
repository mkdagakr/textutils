import React from 'react'

export default function About (prop) {
    return (
        <div className={`text-${prop.mode === 'light'? 'dark':'light'}`}>
            <h1>About</h1>
            <p>TextUtils is a utility which can be used to manipulate your text in way you want.</p>
        </div>

    )
}
