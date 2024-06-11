import React, { useState } from 'react';
const Home = (props) => {

    const [text, setText] = useState('');

    const lowerCase = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase()
            setText(newText);
            props.showAlert("Converted in lower-case", "success");
        }
        else {
            props.showAlert("Empty Input!", "warning");
        }
    }
    const sentenceCase = () => {
        if (text.length > 0) {
            let sentences = text.split(' ');
            let newText = sentences.map((sentence) => {
                if (sentence.length > 0) {
                    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
                } else {
                    return sentence;
                }
            }).join(' ');
            setText(newText);
            props.showAlert("Converted in sentence-case", "success");
        } else {
            props.showAlert("Empty Input!", "warning");
        }
    }

    const upperCase = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase()
            setText(newText);
            props.showAlert("Converted in upper-case", "success");
        }
        else {
            props.showAlert("Empty Input!", "warning");
        }
    }

    const removeExtraSpaces = () => {
        if (text.length > 0) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed", "success");
        }
        else {
            props.showAlert("Empty Input!", "warning");
        }
    }

    const clearText = () => {
        if (text.length > 0) {
            setText('');
            props.showAlert("Cleared Successfully", "success");
        }
        else {
            props.showAlert("Already Empty!", "warning");
        }
    }
    const copyText = () => {
        if (text.length > 0) {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied Successfully", "success");
        }
        else {
            props.showAlert("Empty Input!", "warning");
        }
    }


    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    let wordCount = text ? text.trim().split(/\s+/).length : 0;
    let readTime = 0.008 * wordCount + "mins";
    return (
        <>
            <div className="container justify-content-center">
                <h1 className="heading my-3 text-center">{props.heading}</h1>
                <textarea type="text" id="mybox" className={`border bg-${props.mode} border-2 border-info form-control text-${props.mode === 'light' ? 'dark' : 'light'} ${props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'}`} placeholder='Enter Text Here...' rows={4} value={text} onChange={handleOnChange} />
                <div className="container-fluid">
                    <div className="row d-flex justify-content-around">
                        <button className="col-lg-3 col-md-6 col-sm-12 btn btn-primary my-2" style={{ width: "150px" }} onClick={lowerCase}>Lower-Case</button>
                        <button className="col-lg-3 col-md-6 col-sm-12 btn btn-primary my-2" style={{ width: "150px" }} onClick={sentenceCase}>Sentence-Case</button>
                        <button className="col-lg-3 col-md-6 col-sm-12 btn btn-primary my-2" style={{ width: "150px" }} onClick={upperCase}>Upper-Case</button>
                        <button className="col-lg-3 col-md-6 col-sm-12 btn btn-primary my-2" style={{ width: "150px" }} onClick={removeExtraSpaces}>Remove Spaces</button>
                        <button className="col-lg-3 col-md-6 col-sm-12 btn btn-primary my-2" style={{ width: "150px" }} onClick={copyText}>Copy Text</button>
                        <button className="col-lg-3 col-md-6 col-sm-12 btn btn-primary my-2" style={{ width: "150px" }} onClick={clearText}>Clear Text</button>
                    </div>
                </div>
                <div className="textSummary">
                    <h3>Text Summary</h3>
                    <p>Total Words: {wordCount} , Read-Time: {readTime}</p>
                    <h3>Preview:</h3>
                    <p className='preview'>{text.length > 0 ? text : "Write Something For Preview..."}</p>
                </div>
            </div>
        </>
    )
}
export default Home;
