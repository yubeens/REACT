import PhoneItem from "./PhoneItem";
import {useState} from "react";

function PhoneList({ data, onRemove }) {
    console.log('PhoneList item :', data)
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        console.log('search :', search)
        setSearch(e.target.value);
    }
    const getSearchResult = () => {
        return search ===""? data : data.filter(item => item.name.includes(search));
    }


    return (
        <div>
            <input className='searchbar'
                   placeholder='검색어를 입력하세요' vlause={search} onChange={onChangeSearch}/>

            {
                getSearchResult().map(item => (
                <PhoneItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    phone={item.phone}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}

export default PhoneList;
