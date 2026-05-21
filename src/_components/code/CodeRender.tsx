import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import './_CodeRender.scss';


type Props ={
    code:string;
    language?:string;
}

export const CodeRender = ({code, language="javascript"} :Props) => {
    const [html, setHtml] = useState("");
    useEffect(()=>{
        codeToHtml(code, {
            lang:language,
            theme:"nord"
        }).then(setHtml);
    },[code, language])
  return (
    <div className='code-block' dangerouslySetInnerHTML={{__html:html}}></div>
  )
}
