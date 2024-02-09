<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Tüm İçeriklerim</h6>

    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>Başlık</th>
            <th>İçerik</th>
            <th v-if="$auth.$state.user.role === 'admin'" >İşlemler</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="content in listContent" :key="content._id">
            <td>{{ content.title }}</td>
            <td>{{ content.content }}</td>
            <td class="w-25" v-if="$auth.$state.user.role === 'admin'">
              <div class="d-flex justify-content-around">
                <nuxt-link tag="a" :to="{ path: `/Admin/ListContent/${content._id}` , params: { id: content._id } }"
                           class="btn btn-primary btn-sm">
                  <i class="far fa-edit"></i>&nbsp; Düzenle
                </nuxt-link>
                <button class="btn btn-danger btn-sm" @click="deleteContent(content._id)">
                  <i class="far fa-trash-alt"></i>&nbsp; Sil
                </button>
              </div>
            </td>
          </tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'ListContent',
  layout: 'admin',

  async asyncData({store}) {
    try {
      const response = await store.dispatch('getListContent');
      return {
        listContent: response,
      }
    } catch (error) {
      console.error("Hata oluştu:", error);
      // Hata oluştuğunda boş bir array döndürebilirsiniz ya da başka bir hatayı ele alabilirsiniz.
      return {
        listContent: [],
      }
    }
  },


  methods: {
    async deleteContent(id) {
      await this.$store.dispatch('deleteContent', id);
      await this.$toast().fire({
        icon: 'success',
        title: 'Silme işlemi başarılı.'
      });
    }
  },

  mounted() {
    console.log(this.$auth);
  }

}
</script>
