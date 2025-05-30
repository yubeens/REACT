import PhoneItem from "./PhoneItem";
import usePhoneStore from "../store/usePhoneStore";

function PhoneList() {
    const data = usePhoneStore((state) => state.data);
    const search = usePhoneStore((state) => state.search);
    const setSearch = usePhoneStore((state) => state.setSearch);
    const remove = usePhoneStore((state) => state.remove);

    const filtered = search === ""
        ? data
        : data.filter((item) => item.name.includes(search));

    return (
        <div>
            <br />
            <hr />
            <br />
            <input
                className="searchbar"
                placeholder="검색어를 입력하세요"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            /><br /><br />

            {filtered.map((item) => (
                <PhoneItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    phone={item.phone}
                    onRemove={remove}
                />
            ))}
        </div>
    );
}

export default PhoneList;
