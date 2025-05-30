import { create } from 'zustand';

const usePhoneStore = create((set) => ({
    data: [
        { id: 0, name: '조유빈', phone: '010-1111-1111' },
        { id: 1, name: '이승준', phone: '010-2222-2222' },
    ],
    nextId: 2,
    search: '',
    setSearch: (value) => set({ search: value }),
    create: (newItem) =>
        set((state) => ({
            data: [...state.data, { id: state.nextId, ...newItem }],
            nextId: state.nextId + 1,
        })),
    remove: (targetId) =>
        set((state) => ({
            data: state.data.filter((item) => item.id !== targetId),
        })),
    getFiltered: (state) =>
        state.search
            ? state.data.filter((item) => item.name.includes(state.search))
            : state.data

}));

export default usePhoneStore;
