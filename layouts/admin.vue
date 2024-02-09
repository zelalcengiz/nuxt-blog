<template>
  <section>

    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" :class="{'toggled' :toggled }"
          id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">FC Blog<sup></sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">


        <!-- Nav Item - Charts -->
        <li class="nav-item" v-if="$auth.$state.user.role === 'admin'">
          <nuxt-link tag="a" class="nav-link" to="/Admin/ListContent">
            <i class="fas fa-fw fa-list"></i>
            <span>İçeriklerim</span>
          </nuxt-link>
        </li>

        <!-- Nav Item - Tables -->
        <li class="nav-item">
          <nuxt-link tag="a" class="nav-link" to="/Admin/CreateContent">
            <i class="fas fa-fw fa-plus"></i>
            <span>İçerik oluştur</span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link">
            <i class="fas fa-fw fa-sign-out-alt"></i>
            <span>Çıkış Yap</span></a>
        </li>

      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

          <!-- Topbar -->
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <!-- Sidebar Toggle (Topbar) -->
            <button id="sidebarToggleTop" @click="toggled = !toggled"
                    class="btn btn-link d-md-none rounded-circle mr-3">
              <i class="fa fa-bars"></i>
            </button>


            <multiselect @input="contentSelected" v-model="value" placeholder="İçerik Ara" label="title"
                         track-by="title" :reset-after="true"
                         :options="options" :option-height="104" :custom-label="customLabel" :show-labels="false">

              <template slot="option" slot-scope="props">
                <div class="option__desc">
                  <span class="option__title"><b>{{ props.option.title }}</b></span>
                  <!--<br><br>-->
                  <!--<span class="option__small text-muted">{{ props.option.content }}</span>-->
                </div>
              </template>

            </multiselect>


            <!-- Topbar Navbar -->

            <ul class="navbar-nav ml-auto">

              <!-- Nav Item - Search Dropdown (Visible Only XS) -->
              <li class="nav-item dropdown no-arrow d-sm-none">
                <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-search fa-fw"></i>
                </a>
                <!-- Dropdown - Messages -->
                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                     aria-labelledby="searchDropdown">
                  <form class="form-inline mr-auto w-100 navbar-search">
                    <div class="input-group">
                      <input type="text" class="form-control bg-light border-0 small"
                             placeholder="Search for..." aria-label="Search"
                             aria-describedby="basic-addon2">
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>


              <div class="topbar-divider d-none d-sm-block"></div>

              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">Ferhat Cengiz</span>
                  <img class="img-profile rounded-circle"
                       src="https://avatars.githubusercontent.com/u/79553498?v=4">
                </a>
                <!-- Dropdown - User Information -->
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                     aria-labelledby="userDropdown">
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>

            </ul>

          </nav>
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">

            <!-- Page Heading -->
            <!--            <pre>{{listContent}}</pre>-->
            <nuxt></nuxt>

          </div>
          <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->


      </div>
      <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Multiselect from 'vue-multiselect'


export default {
  name: 'AdminLayout',
  middleware: 'auth',

  components: {
    Multiselect
  },


  data() {
    return {
      toggled: false,
      value: null,
      options: [],
    }
  },

  methods: {
    contentSelected(contentObj) {
      this.$router.push(`/Admin/ListContent/${contentObj._id}`)


    },
    customLabel({title}) {
      return `${title}`
    },
    async logout() {
      this.$auth.logout().then(() => {
        this.$router.push('/Login')
      });
    },
    sidebarControl() {
      if (window.innerWidth < 768) {
        this.toggled = true
      } else {
        this.toggled = false
      }
    }
  },
  head() {
    return {
      title: 'Admin',
      link: [
        {
          rel: 'stylesheet',
          href: '/css/vue-multiselect.min.css'
        },
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
  async mounted() {
    this.sidebarControl();
    this.options = await this.$store.dispatch('getListContent');


  }
}
</script>


<style>

.colored-toast.swal2-icon-success {
  background-color: #a5dc86 !important;
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}

.colored-toast.swal2-icon-warning {
  background-color: #f8bb86 !important;
}

.colored-toast.swal2-icon-info {
  background-color: #3fc3ee !important;
}

.colored-toast.swal2-icon-question {
  background-color: #87adbd !important;
}

.colored-toast .swal2-title {
  color: white;
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
}

</style>
