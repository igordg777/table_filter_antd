import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (e) => {
        console.log(e)
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={() => props.phoneNumber ? showModal(props.phoneNumber) : showModal()}>
                {props.name ? props.name : 'Open Nikex Modal'}
            </Button>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default App;