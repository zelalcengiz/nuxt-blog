import Vue from 'vue'

// Components
import FormContentCreate from '@/components/admin/FormContentCreate'
import FormContentUpdate from '@/components/admin/FormContentUpdate'
import BlogCard from '@/components/BlogCard'



Vue.component('form-content-create', FormContentCreate);
Vue.component('form-content-update', FormContentUpdate);
Vue.component('blog-card', BlogCard);







// Components that are registered globaly.
/* [
  Admin
].forEach(Component => {
  Vue.component(Component.name, Component)
})
*/
