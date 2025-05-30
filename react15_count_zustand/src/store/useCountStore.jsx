import { create } from "zustand";

const useCountStore = create((set) => ({
    count: 0,
    setCount: (value) => set({ count: Number(value) }),
    upCount: () => set((state) => ({ count: state.count + 1 })),
    downCount: () => set((state) => ({
        count: state.count > 0 ? state.count - 1 : 0,})),
    resetCount : ()=>set(() => ({count : 0})),
    // changeCount : newCount=>set(()=>({count : newCount})),
    addCount : (addCount)=>set((state) => ({count : Number(state.count)+Number(addCount)})),
}));

export default useCountStore;