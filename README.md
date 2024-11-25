# Praktikum Mobile Pertemuan 9

Nama : Muthia Khanza
NIM : H1D022008
Shift Baru : C
Shift Lama : A

1. **Tampilan Halaman Login**:

![Lampiran Tampilan](1.png)

Ketika pengguna membuka halaman login, mereka akan melihat tombol "Sign In with Google.". Ketika pengguna menekan tombol login, fungsi `loginWithGoogle` dipanggil. Fungsi ini ada di dalam **store** yang dikelola oleh Pinia. Di dalam fungsi `loginWithGoogle`, aplikasi pertama-tama menginisialisasi **GoogleAuth** dengan konfigurasi seperti `clientId` dan izin akses ke profil dan email pengguna. Selanjutnya aplikasi membuka antarmuka login Google di perangkat pengguna.

2. **Tampilan Halaman Login**:

![Lampiran Tampilan](2.png)

Ketika pengguna menekan tombol login, fungsi `loginWithGoogle` dipanggil. Fungsi ini ada di dalam **store** yang dikelola oleh Pinia. Di dalam fungsi `loginWithGoogle`, aplikasi pertama-tama menginisialisasi **GoogleAuth** dengan konfigurasi seperti `clientId` dan izin akses ke profil dan email pengguna. Selanjutnya aplikasi membuka antarmuka login Google di perangkat pengguna. Setelah pengguna berhasil login, aplikasi menerima **ID Token** yang mewakili autentikasi pengguna dari Google. Token yang diterima dari Google digunakan untuk membuat kredensial baru dengan **GoogleAuthProvider** dari Firebase. Kredensial ini dikirimkan ke Firebase untuk memvalidasi pengguna dan masuk ke sistem. Setelah berhasil login, Firebase memberikan informasi pengguna (seperti email dan nama) yang kemudian disimpan di variabel `user` dalam **store**.

3. **Tampilan Halaman Home**:

![Lampiran Tampilan](list.png)

Setelah login sukses, aplikasi mengarahkan pengguna ke halaman home seperti gambar di atas. Jika terjadi kesalahan, aplikasi menampilkan pesan peringatan dengan dialog yang menjelaskan bahwa login gagal.

Pada halaman setelah login, terdapat tampilan dengan tab menu yang ada pada tampilan bawah, menu berupa home dan profile

Pada menu home akan ditampilkan daftar todo list dari kegiatan yang dilakukan oleh user. Pengguna dapat menambhakan todo listnya dengan mengklik ikon tambah yang ada di kanan bawah tampilan.

**Tambah**:

![Lampiran Tampilan](add.png)

Ketika pengguna telah mengklik ikon tambah maka akan muncul tampilan seperti gambar diatas. Pada halaman ini fungsi addTodo digunakan untuk menambahkan dokumen baru ke koleksi todos dalam Firestore.
Fungsi ini memerlukan input berupa objek todo yang akan diisi dengan data title, description, status, createdAt, dan updatedAt. Data dikirim ke fungsi handleSubmit() melalui event @submit. Dalam handleSubmit(), data diperiksa harus memiliki title. Jika valid, data baru dikirim ke Firestore melalui firestoreService.addTodo.

![Lampiran Tampilan](afteradd.png)

Setalah pengguna menambhakan todo listnya maka akan betambah dan tampil di halaman home seperti gambar diatas.

**Completed**:

![Lampiran Tampilan](ceklist.png)

Pengguna dapat menandai bahwa todo list tersebut sudah dilakukan atau selesai dengan cara menggeser list ke kanan hingga menampilkan tampilan sepeti pada gambar. Pada tahap ini todos dengan status true dianggap selesai dan ditampilkan dalam accordion bertuliskan Completed. sepeti gambar di bawah ini

![Lampiran Tampilan](afterceklist.png)

**Uncompleted**

![Lampiran Tampilan](unceklist.png)

Pengguna juga dapat mengubah status kembali ke active dengan tombol close atau geser ke kanan, memicu fungsi handleStatus(todo) yang memanggil firestoreService.updateStatus() untuk mengatur status: false. Maka todo list akan kembali bagaian atas sperti gambar dibawah ini.

![Lampiran Tampilan](afteruncelist.png)

**Edit**

![Lampiran Tampilan](edit.png)

Pengguna juga bisa melakukan edit tehadat todo list yang dibuatnya denga cara menggser salah satu todo listnya hingga menampilan tampilan sperti gambar diatas. Ketika pengguna menekan ikon edit (@click="handleEdit(todo)"), modal input terbuka dengan data todo yang akan diedit seperti gambar di bawah ini.

![Lampiran Tampilan](inedit.png)

Fungsi handleEdit() mengisi properti todo dengan nilai dari data todo yang sedang diedit dan menyimpan ID-nya di editingId. Saat modal dikonfirmasi handleSubmit, jika editingId terisi, todo diperbarui di Firestore melalui firestoreService.updateTodo()

![Lampiran Tampilan](afteredit.png)

Setalah edit berhasil dilakukan maka akan tampil data yang telah diperbarui pada halaman home, seperti gambar diatas ini dan menampilkan alert sukses.

**Delete**

![Lampiran Tampilan](delete.png)

Untuk melakukan penghapusan terhadap data todo list pengguna dapat menggeser toto listnya ke samping kiri maka akan menampilkan tampilan seperti gambar diatas. Fungsi handleDelete() memanggil firestoreService.deleteTodo() dengan ID todo yang akan dihapus, kemudian memuat ulang daftar todo.

![Lampiran Tampilan](afterdelete.png)

Setalah delete berhasil dilakukan maka data yang telah dihapus akan hidalng pada halaman home, seperti gambar diatas ini dan menampilkan alert sukses.

4. **Tampilan Halaman Profile**:

![Lampiran Tampilan](4.png)

Ketika pengguna menekan menuprofile maka halaman akan menampilkan tampil seperti gambar di atas. Halaman profil ini menampilkan nama, email, dan foto pengguna yang diambil dari Firebase Authentication. Data pengguna disimpan dalam store `authStore` yang dikelola menggunakan Pinia, dan properti `user` diakses dengan `computed()` untuk mengambil nilai `displayName` dan `email`. Foto profil pengguna diambil dari `photoURL`, dan jika tidak tersedia, gambar default digunakan. Data tersebut kemudian ditampilkan menggunakan komponen Ionic seperti `ion-input` untuk nama dan email, serta `ion-avatar` untuk foto profil. Tombol logout memungkinkan pengguna untuk keluar dari aplikasi dan mengarahkan mereka kembali ke halaman login.
