import React, { useState, useEffect } from 'react';

function UseEffectExample() {

    const [text, setText] = useState('htreyn ahbylt');
    const [sunduk, setSunduk] = useState(123);

    useEffect(() => {
        console.log('юзэффект text сработал')
    }, [text])

    useEffect(() => {
        console.log('юзэффект sunduk сработал')
    }, [sunduk])

    // useEffect(() => {
    //     console.log('юзэффект, который срабатывает всегда')
    // })

    useEffect(() => {
        console.log('юзэффект, который срабатывает один раз, только при загрузке страницы')
    }, [])



    return (
        <>
            <button onClick={() => setText(JSON.stringify(new Date()))}>Кнопка которая меняет текст</button>
            <br />
            <button onClick={() => setSunduk(JSON.stringify(new Date()))}>Кнопка которая меняет sunduk</button>
            <div>
                {text}
            </div>
        </>
    )
}

export default UseEffectExample;