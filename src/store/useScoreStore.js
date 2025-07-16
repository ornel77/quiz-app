import { create } from "zustand";

const useScoreStore = create((set) => ({
  score: 0,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
}));

export default useScoreStore;
