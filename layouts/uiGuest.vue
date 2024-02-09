<template>
  <section>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid d-flex justify-content-center">
        <a class="navbar-brand" href="#">FC Blog</a>
      </div>
    </nav>
    <nuxt></nuxt>
  </section>
</template>


<script>
export default {

  name: 'IndexPage',
  head() {
    return {
      title: 'Haberler',
      link: [
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css',

        },

      ],


    }
  },


}
</script>
