import React, { useEffect, useState } from 'react'
export default function TextStyle({ typeText , type}) {
    const [typedText, setTypedText] = useState('');
    const fullText = typeText;
    useEffect(() => {
        const typeText = () => {
            for (let i = 0; i < fullText.length; i++) {
                setTimeout(() => {
                    setTypedText(fullText.substring(0, i + 1));
                }, 12 * i);
            }
        };
        typeText();
    }, []);
    return (
        
        <span>
            { type === 'python' &&   <span><span style={{ color: 'purple', fontWeight: '600' }}>print</span>("{typedText}") </span>}
            { type === 'php' &&   <span><span style={{ color: '#aeb91bc7', fontWeight: '600' }}>echo</span>  "{typedText}" </span>}
            { type === 'javaScript' &&   <span><span style={{ color: 'gray', fontWeight: '600' }}>console.log</span>("{typedText}")</span>}
            { type === 'sql' &&   <span><span style={{ color: '#3c3ceb', fontWeight: '600' }}>SELECT </span>"{typedText}"</span>}
        </span>
    )
}
