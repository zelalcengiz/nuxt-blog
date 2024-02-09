<template>
  <div v-if="content.status" class="alert alert-warning text-center p-3">
    <p class="lead mt-3 mb-3">Veri bulunamadı</p>
    <nuxt-link to="/Admin/ListContent" class="btn btn-primary">Listeye Dön</nuxt-link>
  </div>
  <div v-else>
    <form-content-update @form-submit="formSubmit" :content-object="content"></form-content-update>
  </div>
</template>

<script>
export default {
  name: "EditContent",
  layout: 'admin',
  middleware: 'checkAdmin',


  async asyncData({store, params}) {
    try {
      const response = await store.dispatch('getContentById', params.id)
      return {content: response}
    } catch (e) {
      return {content: {status: 404}}
    }
  },


  methods: {
    async formSubmit(formObj) {
      this.$store.dispatch('updateContent', formObj);
      this.$router.push('/Admin/ListContent');
      await this.$toast().fire({
        icon: 'success',
        title: 'Güncelleme işlemi başarılı.'
      });
    }
  }

}
</script>
