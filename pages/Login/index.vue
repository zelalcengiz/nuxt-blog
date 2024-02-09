<template>
  <div class="container">
    <br><br>
    <!-- Outer Row -->
    <div class="row justify-content-center mt-5">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row m-auto">
              <div class="col-lg-12">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">FC Blog Admin Giriş</h1>
                  </div>
                  <form class="user" @submit.prevent="authLogin">
                    <div class="form-group">
                      <input v-model="user.email" type="email" class="form-control form-control-user"
                             id="exampleInputEmail" aria-describedby="emailHelp"
                             placeholder="E-Mail Adresiniz">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user"
                             id="exampleInputPassword" placeholder="Parolanız" v-model="user.password">
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Beni Hatırla</label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-user btn-block">
                      Giriş Yap
                    </button>
                    <hr>
                    <button @click="authGoogle" class="btn btn-google btn-user btn-block">
                      <i class="fab fa-google fa-fw"></i> Google
                    </button>

                  </form>
                  <hr>
                  <!--                  <div class="text-center">-->
                  <!--                    <a class="small" href="forgot-password.html">Forgot Password?</a>-->
                  <!--                  </div>-->
                  <!--                  <div class="text-center">-->
                  <!--                    <a class="small" href="register.html">Create an Account!</a>-->
                  <!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },


  methods: {
    async authLogin() {
      await this.$auth.loginWith("local", {
        data: this.user
      }).then((res) => {
        console.log("resresresres => ", res);
        this.$router.push("/Admin/ListContent");
      }).catch((err) => {
        this.$swal.fire(err.response.data.error, '', 'warning');
      });
    },
    async authGoogle() {
      await this.$auth.loginWith("google").then((res) => {
        console.log("resresresres => ", res);
        this.$router.push("/Admin/CreateContent");
      }).catch((err) => {
        this.$swal.fire("Google : ", err.response.data.error, '', 'warning');
      });
    }
  },


  head() {
    return {
      title: 'Login',
      link: [
        {
          rel: 'stylesheet',
          href: '/css/sb-admin-2.min.css',

        },
        {
          rel: 'stylesheet',
          href: '/vendor/fontawesome-free/css/all.min.css',

        },
        {
          rel: 'stylesheet',
          href: '/vendor/datatables/dataTables.bootstrap4.css',

        },
        {
          href: "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",
          rel: "stylesheet",
        }
      ],

      script: [
        {
          src: '/vendor/jquery/jquery.js',
          type: "text/javascript"
        },
        {
          src: '/vendor/bootstrap/js/bootstrap.bundle.js',
          type: "text/javascript"
        },
        {
          src: '/vendor/jquery-easing/jquery.easing.js',
          type: "text/javascript"
        },
        {
          src: '/js/sb-admin-2.js',
          type: "text/javascript"
        },


      ]
    }
  },
}
</script>
