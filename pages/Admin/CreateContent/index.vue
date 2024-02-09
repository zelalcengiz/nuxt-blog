<template>
  <form-content-create @form-submit="formSubmit"></form-content-create>
</template>
<script>

export default {
  name: 'CreateContent',
  layout: "admin",
//data ?
  data() {
    return {
      toast: null,
    }
  },
  methods: {
    async formSubmit(contentObject) {
      try {
        const response = await this.$axios.post("/admin/content", contentObject);
        this.$router.push('/Admin/ListContent');
        await this.$toast().fire({
          icon: 'success',
          title: 'Ekleme işlemi başarılı.'
        });

      } catch (error) {
        if (error.response) {
          const errorMessage = error.response.data.error;
          this.$swal(errorMessage, '', 'warning');
        } else {
          // Başka bir hata durumu (örneğin, ağ hatası)
          alert("Bir hata oluştu, lütfen tekrar deneyin.");
        }
      }
    }
  },

}
</script>
