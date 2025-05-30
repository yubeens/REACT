import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import PhoneForm from "./PhoneForm.jsx";

function PhoneItem({ id, name, phone, onDelete, onUpdate }) {
    const handleRemove = () => {
        onDelete(id);
    };

    const [data, setData] = useState({
        id: id,
        name: name,
        phone: phone
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (updatedData) => {
        onUpdate(updatedData);
        handleClose();
    };

    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>phone : {phone}</div>
            <Button variant="outline-danger" onClick={handleRemove}>삭제</Button>
            <Button variant="outline-secondary" onClick={handleShow}>수정</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>수정</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PhoneForm initData={data} onCreate={handleUpdate} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PhoneItem;
