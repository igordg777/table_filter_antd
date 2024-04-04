import React, { useState } from 'react';
import { Button, Card, Table } from 'antd'
import './ButtonUseState.css'
import Modal from './Modal'

function ButtonUseState() {
  const [users, setText] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      //Преобразуем в json()
      .then(res => res.json())
      //
      .then(res => setText(res))

  }


  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Сайт',
      dataIndex: 'website',
      key: 'website',
      render: (website) => <span style={{ color: 'yellow', background: 'black' }}>{website}</span>
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Почта',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Позвонить',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone) => <a tel={phone}><Modal name={'Позвонить'} phoneNumber={phone} /></a>,
    },
    {
      title: 'Подробнее',
      // dataIndex: 'phone',
      key: 'column_key',
      render: object => <Modal name={'Подробнее'} user={object} />
    },
  ];
  return (
    <>

      <h1> Компонент ButtonUseState работает </h1>

      <Button type='primary' onClick={() => getData()}>Активировать useState</Button>
      {users.map((item, index) => {
        return <div>{index + 1}. {item.name}, {item.website}, {item.address.city}</div>
      })}
      <div className='cards'>



        {users.map((item, index) => {
          // return <div>{index + 1}. {item.name}, {item.website}, {item.address.city}</div>
          return <Card
            title="Пользователь"
            bordered={false}
            style={{
              width: 300,
              margin: 10,
            }}
          >
            <p>{index + 1}</p>
            <p>{item.name}</p>
            <p>{item.website}</p>
            <p>{item.address.city}</p>
            <Button type='primary'>info</Button>
          </Card>
        })}

      </div>
      <div style={{ width: '80%', margin: '0 auto', border: '1px solid black' }}>
        <Table dataSource={users} columns={columns} />
      </div>

    </>
  )
}

export default ButtonUseState