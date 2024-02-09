<template>
  <form class="m-5" @submit.prevent="$emit('form-submit' , contentObject)">
    <div class="col-12 mt-3 mb-3">
      <input class="form-control" v-model="contentObject.title" placeholder="İçerik Başlığı">
    </div>
    <div class="col-12 mt-3 mb-3">
      <textarea rows="5" cols="5" class="form-control" v-model="contentObject.content"
                placeholder="İçerik Yazısı"></textarea>
    </div>

    <div class="d-flex justify-content-center mt-3 mb-3">
      <button class="btn btn-success"><i class="fa fa-plus"></i>&nbsp;Oluştur</button>
    </div>
  </form>
</template>


<script>
export default {
  data: () => {
    return {
      contentObject: {
        title: "",
        content: ""
      }
    }
  }
}
</script>
