import React, { useState, useEffect } from 'react';

function UseEffectPlaceHolder() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(res => {
                let newArr = []

                for (let i = 0; i < 100; i++) {
                    newArr.push(res[i])
                }

                setPhotos(newArr)
            }
            )
    }, [])

    return (
        <>
            useEffectPlaceHolder работает
            <div>
                {
                    photos.map((item, index) => {
                        return <div>{index + 1}. {item.url}</div>
                    })
                }
            </div>
        </>
    )
}

export default UseEffectPlaceHolder;