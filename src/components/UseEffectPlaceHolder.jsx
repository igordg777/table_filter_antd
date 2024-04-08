import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import { Carousel } from 'antd';

function UseEffectPlaceHolder() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(res => {
                let newArr = []

                for (let i = 0; i < 3; i++) {
                    newArr.push(res[i])
                }

                setPhotos(newArr)
            }
            )
    }, [])


    const contentStyle = {
        margin: 0,
        height: '260px',
        color: '#fff',
        lineHeight: '260px',
        textAlign: 'center',
        background: '#364d79',
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <>
            <div>
                <h2>1 способ - простой вывод списка</h2>
                {
                    photos.map((item, index) => {
                        return <div>{index + 1}. {item.url}</div>
                    })
                }
                <hr />
                <h2>2 способ - вывод картинок через тег img</h2>
                {
                    photos.map((item, index) => {
                        return <img src={item.url} width='200px' />
                    })
                }
                <hr />
                <h2>3 способ - вывод картинок через antd элемент Image</h2>
                {
                    photos.map((item, index) => {
                        return <div>
                            <Image
                                width={200}
                                src={item.url}
                            />
                        </div>
                    })
                }
                <hr />
                <h2>4 способ - вывод картинок через antd элемент Carousel</h2>
                <Carousel autoplay afterChange={onChange}>
                    {
                        photos.map((item, index) => {
                            return <div><h3 style={contentStyle}>
                                <img style={{ margin: '0 auto' }} src={item.url} width='200px' />
                                {/* Hello */}
                            </h3></div>
                        })
                    }
                </Carousel>
                <hr />
                <h2>5 способ - вывод картинок через antd элемент Carousel и  Image</h2>
                <Carousel autoplay afterChange={onChange}>
                    {
                        photos.map((item, index) => {
                            return <div><h3 style={contentStyle}>
                                <Image
                                    width={200}
                                    src={item.url}
                                />
                                {/* Hello */}
                            </h3></div>
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default UseEffectPlaceHolder;