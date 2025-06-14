import { create } from "zustand";

const useTopicStore = create((set) => ({
  topic: "",
  setTopic: (value) => set({topic:value})
}))

export default useTopicStore