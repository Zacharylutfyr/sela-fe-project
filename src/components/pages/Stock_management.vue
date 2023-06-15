<template>
  <div id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

  

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <form class="form-inline">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
                    </form>

                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
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

                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
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
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_2.svg" alt="...">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_3.svg" alt="...">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img class="img-profile rounded-circle" src="img/undraw_profile.svg">
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
                    <h1 class="h3 mb-2 text-gray-800">Stok Manajemen</h1>
                    <p class="mb-4">Stok manajemen merupakan fitur aplikasi SELA yang dapat melakukan Tambah, Baca, Ubah
                        dan Hapus data sesuai dengan kebutuhan MAT.</p>
                    <div class="d-flex justify-content-between">

                        <a href="#" class="btn btn-primary btn-icon-split" data-toggle="modal"
                            data-target="#TambahDataModal">
                            <span class="icon text-white-50">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="text">Tambah Data Laptop</span>
                        </a>
                        <a href="#" class="btn btn-info btn-icon-split" data-toggle="modal"
                            data-target="#DownloadDataModal">
                            <span class="icon text-white-50">
                                <i class="fas fa-download"></i>
                            </span>
                            <span class="text">Download</span>
                        </a>
                    </div>
                    <div class="mb-4"></div>

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold">Data Stok Laptop</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Merk Laptop</th>
                                            <th>Spek</th>
                                            <th>Stok</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>No</th>
                                            <th>Merk Laptop</th>
                                            <th>Spek</th>
                                            <th>Stok</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>ASUS</td>
                                            <td>Republic of Gamers, Ryzen 7 6300U, RAM 32GB, Storage 2TB, CPU 48-core,
                                                GPU 24-core</td>
                                            <td>50</td>
                                            <td class="d-flex justify-content-center">
                                                <!-- <a href="#" class="btn btn-success btn-circle mr-1" data-toggle="modal"
                                                    data-target="#TrackDataModal">
                                                    <i class="fas fa-street-view"></i>
                                                </a> -->
                                                <a href="#" class="btn btn-warning btn-circle mr-1" data-toggle="modal"
                                                    data-target="#EditDataModal">
                                                    <i class="fas fa-pen"></i>
                                                </a>
                                                <a href="#" class="btn btn-danger btn-circle" data-toggle="modal"
                                                    data-target="#HapusDataModal">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>LENOVO</td>
                                            <td>Ideapad Slim 3, RYZEN 5 4300U, RAM 8GB, Storage 1TB, CPU 12-core</td>
                                            <td>10</td>
                                            <td class="d-flex justify-content-center">
                                                <!-- <a href="#" class="btn btn-success btn-circle mr-1" data-toggle="modal"
                                                    data-target="#TrackDataModal">
                                                    <i class="fas fa-street-view"></i>
                                                </a> -->
                                                <a href="#" class="btn btn-warning btn-circle mr-1" data-toggle="modal"
                                                    data-target="#EditDataModal">
                                                    <i class="fas fa-pen"></i>
                                                </a>
                                                <a href="#" class="btn btn-danger btn-circle" data-toggle="modal"
                                                    data-target="#HapusDataModal">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Apple</td>
                                            <td>Macbook Pro, Chip Apple M2 Pro, RAM 16GB, Storage 2TB, CPU 12-core, GPU
                                                38-core</td>
                                            <td>12</td>
                                            <td class="d-flex justify-content-center">
                                                <!-- <a href="#" class="btn btn-success btn-circle mr-1" data-toggle="modal"
                                                    data-target="#TrackDataModal">
                                                    <i class="fas fa-street-view"></i>
                                                </a> -->
                                                <a href="#" class="btn btn-warning btn-circle mr-1" data-toggle="modal"
                                                    data-target="#EditDataModal">
                                                    <i class="fas fa-pen"></i>
                                                </a>
                                                <a href="#" class="btn btn-danger btn-circle" data-toggle="modal"
                                                    data-target="#HapusDataModal">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>HP</td>
                                            <td>Flipbook 4, Intel i7 Gen. 12, RAM 8GB, Storage 1TB, CPU 12-core,
                                                GPU-12core</td>
                                            <td>35</td>
                                            <td class="d-flex justify-content-center">
                                                <!-- <a href="#" class="btn btn-success btn-circle mr-1" data-toggle="modal"
                                                    data-target="#TrackDataModal">
                                                    <i class="fas fa-street-view"></i>
                                                </a> -->
                                                <a href="#" class="btn btn-warning btn-circle mr-1" data-toggle="modal"
                                                    data-target="#EditDataModal">
                                                    <i class="fas fa-pen"></i>
                                                </a>
                                                <a href="#" class="btn btn-danger btn-circle" data-toggle="modal"
                                                    data-target="#HapusDataModal">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                    <!-- TABEL DATA DUMMY -->
                                    <!-- <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nota Dinas</th>
                                            <th>Tanggal</th>
                                            <th>Barcode</th>
                                            <th>Divisi</th>
                                            <th>Nama</th>
                                            <th>NIK</th>
                                            <th>Nama NIK</th>
                                            <th>Merk</th>
                                            <th>Spek</th>
                                            <th>Serial Number</th>
                                            <th>Vendor</th>
                                            <th>Mulai Sewa</th>
                                            <th>Habis Sewa</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>No</th>
                                            <th>Nota Dinas</th>
                                            <th>Tanggal</th>
                                            <th>Barcode</th>
                                            <th>Divisi</th>
                                            <th>Nama</th>
                                            <th>NIK</th>
                                            <th>Nama NIK</th>
                                            <th>Merk</th>
                                            <th>Spek</th>
                                            <th>Serial Number</th>
                                            <th>Vendor</th>
                                            <th>Mulai Sewa</th>
                                            <th>Habis Sewa</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>SPK 039/00020.05/2020</td>
                                            <td>03/12/2020</td>
                                            <td>Ahmad Albar - P83789 - Dell 5310 2 in 1 - Milik POJ - SN. 6X73F63 -
                                                06/12/2023</td>
                                            <td>MAT</td>
                                            <td>Ahmad Albar</td>
                                            <td>P83789</td>
                                            <td>Ahmad Albar_P83789</td>
                                            <td>Dell 5310 2 in 1</td>
                                            <td>Core i7, RAM 16GB, Storage 1TB SSD</td>
                                            <td>6X73F63</td>
                                            <td>POJ</td>
                                            <td>07/12/2020</td>
                                            <td>06/12/2023</td>
                                            <td class="d-flex">
                                                <a href="#" class="btn btn-warning btn-circle mr-1" data-toggle="modal"
                                                    data-target="#EditDataModal">
                                                    <i class="fas fa-pen"></i>
                                                </a>
                                                <a href="#" class="btn btn-danger btn-circle" data-toggle="modal"
                                                    data-target="#HapusDataModal">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr> -->
                                </table>
                            </div>
                        </div>
                    </div>

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

    <!-- Tambah Data Modal-->
    <div class="modal fade" id="TambahDataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Tambah Data Laptop</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label for="exampleDataList" class="form-label">Merk</label>
                    <input class="form-control mb-3" list="datalistOptions" id="exampleDataList"
                        placeholder="Merk Laptop">
                    <datalist id="datalistOptions">
                        <option value="ASUS"></option>
                        <option value="LENOVO"></option>
                        <option value="HP"></option>
                        <option value="DELL"></option>
                        <option value="Apple"></option>
                    </datalist>
                    <label for="exampleFormControlTextarea1" class="form-label">Spek:</label>
                    <textarea class="form-control mb-3" placeholder="Spek Laptop" aria-label="default input example"
                        rows="3" id="exampleFormControlTextarea1"> </textarea>
                    <!-- <div class="ml-2">
                        <label for="exampleDataList" class="form-label">Processor:</label>
                        <input class="form-control mb-3" type="text" placeholder="Processor Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">RAM:</label>
                        <input class="form-control mb-3" type="text" placeholder="RAM Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">Storage:</label>
                        <input class="form-control mb-3" type="text" placeholder="Storage Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">Graphics Card:</label>
                        <input class="form-control mb-3" type="text" placeholder="Graphics Card Laptop"
                            aria-label="default input example">

                    </div> -->
                    <label for="exampleDataList" class="form-label">Stok</label>
                    <input class="form-control" type="text" placeholder="Stok Laptop"
                        aria-label="default input example">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Batal</button>
                    <a class="btn btn-primary" href="login.html">Tambah Data</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Track Data Modal-->
    <div class="modal fade" id="TrackDataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Track Data Laptop</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label for="exampleDataList" class="form-label">Merk</label>
                    <input class="form-control mb-3" list="datalistOptions" id="exampleDataList"
                        placeholder="Merk Laptop">
                    <datalist id="datalistOptions">
                        <option value="ASUS"></option>
                        <option value="LENOVO"></option>
                        <option value="HP"></option>
                        <option value="DELL"></option>
                        <option value="Apple"></option>
                    </datalist>
                    <label for="exampleDataList" class="form-label">Spek:</label>
                    <div class="ml-2">
                        <label for="exampleDataList" class="form-label">Processor:</label>
                        <input class="form-control mb-3" type="text" placeholder="Processor Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">RAM:</label>
                        <input class="form-control mb-3" type="text" placeholder="RAM Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">Storage:</label>
                        <input class="form-control mb-3" type="text" placeholder="Storage Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">Graphics Card:</label>
                        <input class="form-control mb-3" type="text" placeholder="Graphics Card Laptop"
                            aria-label="default input example">

                    </div>
                    <label for="exampleDataList" class="form-label">Stok</label>
                    <input class="form-control" type="text" placeholder="Stok Laptop"
                        aria-label="default input example">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Edit Data</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Data Modal-->
    <div class="modal fade" id="EditDataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Data Laptop</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label for="exampleDataList" class="form-label">Merk</label>
                    <input class="form-control mb-3" list="datalistOptions" id="exampleDataList"
                        placeholder="Merk Laptop">
                    <datalist id="datalistOptions">
                        <option value="ASUS"></option>
                        <option value="LENOVO"></option>
                        <option value="HP"></option>
                        <option value="DELL"></option>
                        <option value="Apple"></option>
                    </datalist>
                    <label for="exampleDataList" class="form-label">Spek:</label>
                    <div class="ml-2">
                        <label for="exampleDataList" class="form-label">Processor:</label>
                        <input class="form-control mb-3" type="text" placeholder="Processor Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">RAM:</label>
                        <input class="form-control mb-3" type="text" placeholder="RAM Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">Storage:</label>
                        <input class="form-control mb-3" type="text" placeholder="Storage Laptop"
                            aria-label="default input example">
                        <label for="exampleDataList" class="form-label">Graphics Card:</label>
                        <input class="form-control mb-3" type="text" placeholder="Graphics Card Laptop"
                            aria-label="default input example">

                    </div>
                    <label for="exampleDataList" class="form-label">Stok</label>
                    <input class="form-control" type="text" placeholder="Stok Laptop"
                        aria-label="default input example">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Edit Data</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Hapus Data Modal-->
    <div class="modal fade" id="HapusDataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Hapus Data Laptop</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h5>Apakah anda yakin ingin <span class="text-danger"> menghapus </span> satu data ini?</h5>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-danger" href="login.html">Hapus Data</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Data Modal-->
    <div class="modal fade" id="EditDataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Download Data Laptop</h5>
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

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
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

  

</div>
</template>

<script>
export default {
  name: "StockManagement",
};
</script>