import React from 'react';
import { message, Button } from 'antd';

const Message = () => {

    const hey = () => {
        message.success('Авторизация успешна!')
        message.warning('Осторожно!')
        message.error('Ошибка!')
        message.info('info!')
        message.loading('loading!')

    }

    return (
        <>
            <Button type='primary' onClick={() => hey()}>Message</Button>
        </>
    )
}

export default Message;