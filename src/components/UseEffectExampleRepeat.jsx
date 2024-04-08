import React, { useState, useEffect } from 'react'

function UseEffectExampleRepeat() {
    const [dateSunduk, setDateSunduk] = useState('')
    const [dateSunduk2, setDateSunduk2] = useState('')


    useEffect(() => {
        console.log('Hello ITED')
    }, [])

    useEffect(() => {
        console.log('Срабатывает всегда при любом обновлении компонента')
    })

    useEffect(() => {
        console.log('Обновился useState с названием dateSunduk2')
    }, [dateSunduk2])

    return (
        <>
            UseEffectExampleRepeat работает
            <div>
                <button onClick={() => setDateSunduk(new Date())}>but</button>
            </div>
            {JSON.stringify(dateSunduk)}
            <div>
                <button onClick={() => setDateSunduk2(new Date())}>but 2</button>
            </div>
            {JSON.stringify(dateSunduk2)}
        </>
    )
}

export default UseEffectExampleRepeat;