import './_Example.scss';
import { CodeRender } from '../code/CodeRender';
import { useState } from 'react';
type Props = {
    code?: string;
    language?: string;
    name?: string
}
export const Example = ({ code, language, name }: Props) => {

    const [copied, setCopied] = useState(false);

    async function copyCode() {
        try {
            await navigator.clipboard.writeText(code!);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='example-section'>
            <div className="header">
                <div>
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <span>{name + ".jsx"}</span>
                </div>
                <span onClick={copyCode} className={`${copied && "active"} `}>{copied ? "copied" : "copy"}</span>
            </div>
            <div className="code-box">
                <CodeRender code={code || ""} language={language} />
            </div>
        </div>
    )
}

            