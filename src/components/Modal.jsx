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
                {props.user
                    ?
                    <div>
                        <p>name: {props.user.name}</p>
                        <p>phone: {props.user.phone}</p>
                        <p>username: {props.user.username}</p>
                        <p>website: {props.user.website}</p>
                        <p>id: {props.user.id}</p>
                        <p>email: {props.user.email}</p>
                        <p>address:
                            <ul>
                                <li>city: {props.user.address.city}</li>
                                <li>street: {props.user.address.street}</li>
                                <li>suite: {props.user.address.suite}</li>
                                <li>zipcode: {props.user.address.zipcode}</li>
                                <li>geo_lat: {props.user.address.geo.lat}</li>
                                <li>geo_lng: {props.user.address.geo.lng}</li>
                            </ul>
                        </p>
                        <p>company:
                            <ul>
                                <li>bs: {props.user.company.bs}</li>
                                <li>catchPhrase: {props.user.company.catchPhrase}</li>
                                <li>name: {props.user.company.name}</li>
                            </ul>
                        </p>
                    </div>
                    :
                    "нету юзера"
                }
            </Modal>
        </>
    );
};
export default App;