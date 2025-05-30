import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

function PhoneItem({id, name, phone , onRemove , onChange}){
    const onClickDelete = () => {
        onRemove(id);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editphone, setEditPhone] = useState(
        {
            id,
            name,
            phone
        }
    );
    const onChangeUpdate = (e) => {
        setEditPhone({
            ...editphone,
            [e.target.name] : e.target.value
        })

    }
    const onClickUpdate = () => {
        onChange(editphone)
        handleClose()
    }

    return(
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> phone : {phone}</div>
            {/*<button onClick={onClickDelete}>삭제</button>*/}
            <Button variant={'outline-danger'} onClick={onClickDelete}> 삭제 </Button>
            <Button variant={'outline-secondary'} onClick={handleShow} > 수정 </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>수정</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    이름 : <input placeholder='이름'
                                name={'name'}
                                value={editphone.name}
                                onChange={onChangeUpdate}
                />
                    <br/>
                    전화번호 : <input placeholder='전화번호'
                                  name={'phone'}
                                  value={editphone.phone}
                                  onChange={onChangeUpdate}
                />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={onClickUpdate}>
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default PhoneItem