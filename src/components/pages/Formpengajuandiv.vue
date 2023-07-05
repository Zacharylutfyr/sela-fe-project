<template lang="">
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Topbar -->
      <nav
        class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
      >
        <!-- Sidebar Toggle (Topbar) -->
        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i class="fa fa-bars"></i>
        </button>

        <!-- Topbar Search -->
        <form
          class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
        >
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-success" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Nav Item - Search Dropdown (Visible Only XS) -->
          <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-search fa-fw"></i>
            </a>
            <!-- Dropdown - Messages -->
            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <!-- Nav Item - Alerts -->
          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-bell fa-fw"></i>
              <!-- Counter - Alerts -->
              <span class="badge badge-danger badge-counter">3+</span>
            </a>
            <!-- Dropdown - Alerts -->
            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 class="dropdown-header">Alerts Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold"
                    >A new monthly report is ready to download!</span
                  >
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <i class="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#"
                >Show All Alerts</a
              >
            </div>
          </li>

          <!-- Nav Item - Messages -->
          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-envelope fa-fw"></i>
              <!-- Counter - Messages -->
              <span class="badge badge-danger badge-counter">7</span>
            </a>
            <!-- Dropdown - Messages -->
            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 class="dropdown-header">Message Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div class="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div class="status-indicator"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div class="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div class="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#"
                >Read More Messages</a
              >
            </div>
          </li>

          <div class="topbar-divider d-none d-sm-block"></div>

          <!-- Nav Item - User Information -->
          <li class="nav-item dropdown no-arrow">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                >Nicola Tesla</span
              >
              <img
                class="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              />
            </a>
            <!-- Dropdown - User Information -->
            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
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
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i
                  class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                ></i>
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
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>

        <!-- Form pengajuan with Rest API -->
        <div class="card shadow mb-4 border-left-success">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold">Form Pengajuan Sewa Laptop</h6>
          </div>
          <div class="card-body">
            <form v-on:keyup.enter="postPengajuanApi()" v-on:submit.prevent>
              <div class="row">
                <div class="col-xl-12 col-md-12 mb-1">
                  <div class="mb-3">
                    <label class="form-label">Spesifikasi</label>
                    <input
                      type="number"
                      v-model="spekId"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="spekId"
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-md-12 mb-1">
                  <div class="mb-3">
                    <label class="form-label">ID Karyawan</label>
                    <input
                      type="number"
                      v-model="karyawanId"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="karyawanId"
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-md-12 mb-1">
                  <div class="mb-3">
                    <label class="form-label">No Memo</label>
                    <input
                      type="text"
                      v-model="noMemo"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="noMemo"
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-md-12 mb-1">
                  <div class="mb-3">
                    <label class="form-label">Tanggal Pengajuan</label>
                    <input
                      type="text"
                      v-model="tglPengajuan"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="tglPengajuan"
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-md-12 mb-1">
                  <div class="mb-3">
                    <label class="form-label">Tanggal Penerima</label>
                    <input
                      type="text"
                      v-model="tglPenerima"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="tglPenerima"
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-md-12 mb-1">
                  <div class="mb-3">
                    <label class="form-label">Status</label>
                    <input
                      type="text"
                      v-model="status"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="status"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label>Spek</label>
                  <select class="form-control">
                    <option
                      v-for="(data, index) in allspek.data"
                      v-bind:key="index"
                    >
                      {{
                        data.deviceName +
                        " " +
                        data.storage +
                        " " +
                        data.processor +
                        " " +
                        data.ram +
                        " " +
                        data.graphicCard
                      }}
                    </option>
                  </select>
                </div>
              </div>

<<<<<<< HEAD
              <div class="col-xl-12 col-md-12 mb-1">
                <div class="my-2 float-right">
                  <a
                    href="#"
                    class="btn btn-success btn-icon-split"
                    @click="postPengajuanApi"
                  >
                    <span class="icon text-white-50">
                      <i class="fas fa-check"></i>
                    </span>
                    <span class="text">Ajukan Data Pengaju</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
=======
                <form v-on:keyup.enter="postPengajuanApi()" v-on:submit.prevent>
                    <div class="row">
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="mb-3">
                          <label class="form-label">Spesifikasi</label>
                                <input type="number" v-model="spekId" class="form-control" id="formGroupExampleInput"
                                    placeholder="spekId">
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="mb-3">
                          <label class="form-label">ID Karyawan</label>
                                <input type="number" v-model="karyawanId" class="form-control" id="formGroupExampleInput"
                                    placeholder="karyawanId">
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="mb-3">
                          <label class="form-label">No Memo</label>
                                <input type="text" v-model="noMemo" class="form-control" id="formGroupExampleInput"
                                    placeholder="noMemo">
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="mb-3">
                          <label class="form-label">Tanggal Pengajuan</label>
                                <input type="text" v-model="tglPengajuan" class="form-control" id="formGroupExampleInput"
                                    placeholder="tglPengajuan">
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="mb-3">
                          <label class="form-label">Tanggal Penerima</label>
                                <input type="text" v-model="tglPenerima" class="form-control" id="formGroupExampleInput"
                                    placeholder="tglPenerima">
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="mb-3">
                          <label class="form-label">Status</label>
                                <input type="text" v-model="status" class="form-control" id="formGroupExampleInput"
                                    placeholder="status">
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="mb-3">
                                <label>Spek</label>
                                <select class="form-control">
                                    <option v-for="(data, index) in allspek.data" v-bind:key="index">
                                        {{data.deviceName + 
                                          ' ' + 
                                          data.storage + 
                                          ' ' + 
                                          data.processor + 
                                          ' ' + 
                                          data.ram + 
                                          ' ' + 
                                          data.graphicCard 
                                          }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-12 mb-1">
                            <div class="my-2 float-right">
                                <a
                                href="#"
                                class="btn btn-success btn-icon-split"
                                @click="postPengajuanApi"
                                >
                                <span class="icon text-white-50">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="text">Ajukan Data Pengaju</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
>>>>>>> a6f6c6901962cbe8be903f9f0454a939532365d1
        </div>
        <div class="card shadow mb-4 border-left-success">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold">Form Pengajuan Sewa Laptop</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr class="bg-gray-100 text-dark">
                    <th>No</th>
                    <th>Spek Laptop</th>
                    <th>NIK Karyawan</th>
                    <th>Karyawan</th>
                    <th>No Memo</th>
                    <th>Tanggal Pengajuan</th>
                    <th>Tanggal Penerimaan</th>
                    <th>Status</th>
                  </tr>
                  <tr
                    v-for="(data, index) in pengajuan.data"
                    v-bind:key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>
                      {{
                        data.device.deviceName +
                        " " +
                        data.spesifikasi.storage +
                        " " +
                        data.spesifikasi.processor +
                        " " +
                        data.spesifikasi.ram +
                        " " +
                        data.spesifikasi.graphicCard
                      }}
                    </td>
                    <td>{{ data.karyawan.nikKaryawan }}</td>
                    <td>
                      {{
                        data.karyawan.namaDepan +
                        " " +
                        data.karyawan.namaBelakang
                      }}
                    </td>
                    <td>{{ data.noMemo }}</td>
                    <td>{{ data.tglPengajuan }}</td>
                    <td>{{ data.tglPenerima }}</td>
                    <td>{{ data.status }}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <!-- Content Row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->
  </div>
  <!-- End of Content Wrapper -->
</template>
<script lang="js">
import { loginApi } from "@/api";
import {
  getPengajuan,
  postPengajuan,
  getDevice,
  getSpek
} from "@/api";

export default {
  name: "Formpengajuandiv",
  data() {
    return {
      pengajuan: [],
      alldevice: [],
      allspek: []
    };
  },
  methods: {
    // baca data pengajuan sewa laptop
    async getPengajuanApi() {
      try {
        const token = localStorage.getItem("token");
        this.pengajuan = await getPengajuan(token);
        this.totalData = await getPengajuan.length; // Set the total count
      } catch (error) {
        console.error(error);
      }
    },
    // Hubungkan fungsi dibawah ke API postPengajuan
    async postPengajuanApi() {
      try {
        console.log("Satu data Pengajuan sewa laptop berhasil ditambah!")
        const token = localStorage.getItem("token");
        this.pengajuan = await postPengajuan(
          token,
          this.spekId,
          this.karyawanId,
          this.noMemo,
          this.tglPengajuan,
          this.tglPenerima,
          this.status
        );
      } catch (error) {
        console.error("Data gagal ditambah.");
      }
    },
    // get all device
    async getAllDeviceApi() {
      try {
        const token = localStorage.getItem("token");
        this.alldevice = await getDevice(token);
      } catch (error) {
        console.error(error);
      }
    },
    // get all spek
    async getSpekApi() {
      try {
        const token = localStorage.getItem("token");
        this.allspek = await getSpek(token);
      } catch (error) {
        console.error(error);
      }
    },

  },
  mounted() {
    this.getPengajuanApi();

    // dummy pengajuan
    // this.pengajuanId = 99;
    // this.spekId = 402;
    // this.karyawanId = 153;
    // this.noMemo = "1998/07/12";
    // this.tglPengajuan = "99";
    // this.tglPenerima = "99";
    // this.status = "diterima";

    this.getAllDeviceApi();
    this.getSpekApi();
  },
};
</script>
