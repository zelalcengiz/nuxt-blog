<template>

  <div class="col-4 card m-3" style="max-width: 20rem;">
    <div class="card-header d-flex justify-content-center">
      <img src="https://pbs.twimg.com/media/F9Yoe0zXMAA5RxT.jpg" class="rounded img-fluid" width="150px" height="auto"/>
    </div>
    <div class="card-body" style="
    max-height: 300px;
    overflow: scroll;
">

      <h5 class="card-title">{{ content.title }}</h5>
      <p class="card-text" v-if="content.content.length > 50">
        {{ content.content.substr(0, substrLength) }}...
        <br>
        <b  v-if="content.content.length !== substrLength" @click="substrLength = content.content.length"
            style="cursor: pointer" class="text-success">Devamını gör</b>
      </p>
      <p class="card-text" v-else>
        {{ content.content }}
      </p>


    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      substrLength: 50,
    }
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
