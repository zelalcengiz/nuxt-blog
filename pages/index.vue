<template>
  <div class="row">

    <blog-card v-for="content in listContent" :key="content._id" :content="content"></blog-card>

  </div>

</template>

<script>
import Cookie from 'js-cookie';

export default {
  layout: 'uiGuest',

  async asyncData({req, res, $axios}) {
    try {
      let cookieToken = req.headers.cookie;
      let searchToken = cookieToken.split(";").filter(cookie => cookie.trim().startsWith("token="));
      if (searchToken) {
        const responseData = await fetch("http://localhost:8000/api/admin/content", {
          method: 'GET',
          headers: {'Authorization': `Bearer ${searchToken[0].split("=")[1]}`}
        });
        return {listContent: await responseData.json()}
      }
    } catch (e) {
      const response = await $axios.post("/auth/auth-token");
      let token = response.data.token;
      res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly`);
      const responseData = await fetch("http://localhost:8000/api/admin/content", {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`}
      });
      return {listContent: await responseData.json()}

    }
  }


}
</script>
