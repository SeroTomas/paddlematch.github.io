import { LoginForm } from './LoginForm';
import { Modal } from 'antd';
import React from 'react';

export function LoginModal({
    onClose
}) {
    return (
        <Modal
            title="Se requiere inicio de sesion"
            visible={true}
            width={400}
            centered
            onCancel={onClose}
            onOk={onClose}
            footer={null}
        >
            <LoginForm />
        </Modal>
    );
}