import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      resumes: [],
      name: "",
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
    setResumes(state: any, resumess: { resumes: any; name: string }) {
      state.resumes = resumess.resumes;
      state.name = resumess.name;
    },
  },
});

export default store;
