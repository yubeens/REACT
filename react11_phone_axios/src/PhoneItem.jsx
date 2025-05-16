export default function PhoneItem({name,phone}) {
    return(
        <div>
            <p>이름 : {name}</p>
            <p>
                전화번호 : {phone}<br/><br/>
                <button>삭제</button>
            </p>
            <hr/>
        </div>
    )
}