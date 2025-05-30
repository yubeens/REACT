import { create } from 'zustand';

// mock 데이터
export const mockData = [
    {
        id: 1,
        date: new Date().getTime() - 1,
        content: "mock1",
        emotionId: 1,
    },
    {
        id: 2,
        date: new Date().getTime() - 2,
        content: "mock2",
        emotionId: 2,
    },
    {
        id: 3,
        date: new Date().getTime() - 3,
        content: "mock3",
        emotionId: 3,
    },
];

const useDiaryStore = create((set) => ({
    data: mockData,              // 초기값 세팅
    nextId: 4,                   // 다음 ID 시작값
    setData: (newData) => set({ data: newData }),
    create: (date, content, emotionId) =>
        set((state) => ({
            data: [
                {
                    id: state.nextId,
                    date: new Date(date).getTime(),
                    content,
                    emotionId,
                },
                ...state.data,
            ],
            nextId: state.nextId + 1,
        })),
    update: (targetId, date, content, emotionId) =>
        set((state) => ({
            data: state.data.map((item) =>
                String(item.id) === String(targetId)
                    ? { id: targetId, date: new Date(date).getTime(), content, emotionId }
                    : item
            ),
        })),
    remove: (targetId) =>
        set((state) => ({
            data: state.data.filter((item) => String(item.id) !== String(targetId)),
        })),
}));

export default useDiaryStore;
