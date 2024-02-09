const contentStore = {
  state: {
    content: [],
  },
  getters: {
    getContent(state) {
      return state.content;
    },
  },
  mutations: {
    setContent(state, contentObj) {
      state.content = contentObj;
    },
    addContent(state, contentObj) {
      state.content.push(contentObj);
    },
    removeContent(state, contentId) {
      const findIndex = state.content.findIndex((content) => content._id === contentId);
      state.content.splice(findIndex, 1);


    },
    updateContent(state, contentObj) {
      const findIndex = state.content.findIndex((content) => content._id === contentObj._id);
      state.content.splice(findIndex, 1, contentObj);
    },
  },
  actions: {
    async getListContent({commit}) {
      let response = await this.$axios.get('/admin/content');
      commit('setContent', response.data);
      return response.data;
    },

    async getContentById({commit}, id) {
      let response = await this.$axios.get(`/admin/content/${id}`);
      return response.data;

    },

    updateContent({commit}, contentObj) {
      let response = this.$axios.put(`/admin/content/${contentObj._id}`, contentObj).then((response) => {
        commit('updateContent', response.data);
        return response.data;
      }).catch((err) => {
        throw new Error(err.response.data.error);
      });
    },

    addContent({commit}, contentObj) {
      let response = this.$axios.post('/admin/content', contentObj).then((response) => {
        commit('addContent', response.data);
        return response.data;
      }).catch((err) => {
        throw new Error(err.response.data.error);
      });

    },

    async deleteContent({commit}, id) {
      let response = await this.$axios.delete(`/admin/content/${id}`);
      commit('removeContent', id);

    }
  },
}


export default contentStore;
