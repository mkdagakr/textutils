import React, { useState } from 'react';


export default function TextForm(prop) {

    const [text, setText] = useState('Enter text here...');
    const [previewText, setPreviewText] = useState('');


    const resetToggle = () => {

        setText('Enter text here...');
    }

    const upperCaseToggle = () => {

        let upperCase = text.toUpperCase();
        setPreviewText(upperCase);

    }

    const lowerCaseToggle = () => {

        let lowerCase = text.toLowerCase();
        setPreviewText(lowerCase);

    }

    const removeSpaceToggle = () => {

        let extraSpaces = text.split(/[ ]+/);
        setPreviewText(extraSpaces.join(" "));

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const previewChange = (event) => {
        setPreviewText(event.target.value);
    }

    // copy the preview text
    const previewCopyText = () => {

        // let copyPreviewText = document.getElementById("previewTextarea");
        // copyPreviewText.select();
        // navigator.clipboard.writeText(copyPreviewText.value);
        navigator.clipboard.writeText(previewText);
    }

    return (
        <>
            <div className={`mb-3 text-${prop.mode === 'light' ? 'dark' : 'light'}`}>

                <h1>{prop.heading}</h1>
                <textarea className={`form-control bg-${prop.mode === 'light' ? 'light' : 'dark'} text-${prop.mode === 'light' ? 'dark' : 'light'}`} id="Textarea" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={resetToggle}>Reset Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={upperCaseToggle}>Convert to UpperCase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={lowerCaseToggle}>Convert to LowerCase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={removeSpaceToggle}>Remove Extra Space</button>
            <div className={`my-3 text-${prop.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>You text summary</h3>
                <p><b>Word Count: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} | Character Count: {text.length} | Minutes to read: {(0.008 * text.length).toFixed(3)}</b></p>
                <div className={`d-flex justify-content-between`}>
                <h4>Preview</h4>
                <button disabled={previewText.length===0} type="button" className="btn btn-primary" onClick={previewCopyText}>Copy Text</button>
                </div>
                <textarea className={`form-control bg-${prop.mode === 'light' ? 'light' : 'dark'} text-${prop.mode === 'light' ? 'dark' : 'light'}`} id="previewTextarea" value={previewText} onChange={previewChange} rows="8"></textarea>
            </div>

        </>
    )
}
