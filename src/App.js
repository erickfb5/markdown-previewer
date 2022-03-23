import "./App.css";
import React from "react";
import { marked } from 'marked';
import { markdownSyntaxGuide } from './markdownSyntaxGuide';

function App() {

    const [preview, setPreview] = React.useState(marked.parse(markdownSyntaxGuide));

    const markedText = () => {
        const text = document.getElementById("txt-area-markdown").value;
        const parsedText = marked.parse(text)
        setPreview(parsedText);
    };

    return ( <
        div className = "App"
        id = '' >
        <
        h1 className = 'main-h1' > MARKDOWN PREVIEWER < /h1> <
        header className = "App-header" > { " " } <
        div className = "container" >
        <
        div className = "markdown" > { " " } <
        h3 > EDITOR < /h3>{" "}  <
        textarea name = ""
        id = "txt-area-markdown"
        defaultValue = { markdownSyntaxGuide }
        onChange = { markedText }
        /> < /
        div > <
        div className = "preview" > { " " } <
        h3 > PREVIEW < /h3>


        <
        div id = "txt-area-preview"
        dangerouslySetInnerHTML = {
            { __html: preview }
        }
        />


        <
        / div >  < /
        div > < /
        header > { " " } < /
        div >
    );
}

export default App;