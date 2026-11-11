/* Data undangan (nama, tanggal, acara, rekening, galeri, cerita) — edit di file ini. */
/* ============ DATA — edit di sini ============ */
// Foto ada di folder img/ (tulis sebagai "img/nama-file.jpg"). Untuk pesanan baru, ganti file di img/ dan sesuaikan nama file di bawah.
const I = (name) => `img/${name}.jpg`;
// Kosongkan ("" / []) bagian opsional bila tidak dipakai: live, giftAddress, gifts, story.
const C = {
  bride: {
    full: "Nadia Safira Rahma", // nama + gelar
    nick: "Nadia", // nama panggilan (tampil di cover)
    ig: "nadia.safira", // tanpa @
    wa: "6281234567890", // format 62xxx
    father: "Budi Santoso",
    mother: "Siti Aminah",
    role: "Putri", // Putri / Putri pertama / Putri kedua ...
    address: "Jl. Melati No. 10 RT 01 RW 02, Kec. Contoh, Kota Contoh",
    // 2 foto = carousel otomatis (bergeser ke kanan). Isi 1 foto saja bila tidak ingin carousel.
    photos: [I("rafie"), I("IMG_7964")],
  },
  groom: {
    full: "Raka Pratama Wijaya",
    nick: "Raka",
    ig: "raka.pratama",
    wa: "6281298765432",
    father: "Hendra Wijaya",
    mother: "Ratna Dewi",
    role: "Putra",
    address: "Jl. Kenanga No. 25 RT 03 RW 04, Kec. Contoh, Kota Contoh",
    // 2 foto = carousel otomatis (bergeser ke kiri).
    photos: [I("roma"), I("IMG_7473")],
  },
  date: "2028-12-12T07:30:00", // tanggal & jam mulai acara (Sabtu, 12 Desember 2026)
  // Identitas & teks undangan
  site: {
    title: "The Wedding of Nadia & Raka", // judul tab browser
    copyright: "© 2026 Aisyae Digital Invitation",
    designer: { name: "saevitation.com", url: "https://saevitation.com/" }, // kredit desainer
    instagram: {
      handle: "@saevitation",
      url: "https://www.instagram.com/saevitation",
    },
  },
  text: {
    greeting: "Assalamu'alaikum Wr. Wb.",
    intro:
      "Segala puji bagi Allah SWT yang telah menjadikan hamba-Nya hidup berpasang-pasangan. Dengan memohon ridho, rahmat, dan berkah-Nya, kami bermaksud mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami.",
    quote:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    quoteSource: "AR-RUM AYAT : 21",
    closing:
      "Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Terima kasih.",
  },
  // URL Web App Google Apps Script (berakhiran /exec) untuk RSVP & ucapan. Kosongkan = disimpan di browser saja (hanya untuk uji coba)
  rsvp: "https://script.google.com/macros/s/AKfycbyVJ5ra4Cm0C0KAatcYpzuRjwtBxk9cBWauW_HI9URO2Uyi8VqcqgDajZO70wY-Qvbg/exec",
  // foto latar tiap bagian
  bg: {
    cover: I("IMG_8202"),
    quote: I("IMG_8202sdsdsd-scaled"),
    foot: I("IMG_7760"),
    date: I("IMG_8070"),
  },
  events: [
    {
      t: "Akad Nikah",
      // photos: 2 foto = carousel otomatis; date (opsional) = tanggal khusus acara ini, kosong = tanggal utama
      photos: [I("IMG_7944"), I("IMG_7818")],
      time: "07.30 - 09.00 WIB",
      place: "Gedung Serbaguna Mawar",
      addr: "Jl. Contoh Raya No. 123, Kec. Contoh, Kota Contoh, Provinsi Contoh 12345",
      map: "https://maps.google.com/?q=Gedung+Serbaguna+Mawar",
    },
    {
      t: "Resepsi",
      photos: [I("IMG_7625"), I("IMG_8137")],
      time: "10.00 - 15.00 WIB",
      place: "Gedung Serbaguna Mawar",
      addr: "Jl. Contoh Raya No. 123, Kec. Contoh, Kota Contoh, Provinsi Contoh 12345",
      map: "https://maps.google.com/?q=Gedung+Serbaguna+Mawar",
    },
  ],
  live: "", // link live streaming (kosongkan jika tidak ada)
  music: "sound/Calum-Scott-You-Are-The-Reason-Official-Video.mp3", // lagu latar: taruh file mp3 di folder sound/
  // alamat pengiriman kado (kosongkan {} jika tidak dipakai)
  giftAddress: {
    name: "Nadia",
    addr: "Jl. Melati No. 10 RT 01 RW 02, Kec. Contoh, Kota Contoh",
  },
  // rekening amplop digital (boleh lebih dari satu; kosongkan [] jika tidak dipakai)
  gifts: [{ bank: "BCA", no: "1234567890", name: "Nadia Safira Rahma" }],
  // galeri: slider + thumbnail (boleh berapa saja; foto lebih banyak = halaman lebih berat)
  gallery: [
    I("IMG_8202"),
    I("IMG_7964"),
    I("IMG_7947"),
    I("IMG_7760"),
    I("IMG_8474"),
    I("IMG_8070"),
    I("IMG_7944"),
    I("IMG_7473"),
    I("IMG_8258"),
    I("IMG_7640"),
    I("IMG_8407"),
    I("rafie"),
    I("IMG_8137"),
    I("roma"),
    I("IMG_7818"),
    I("IMG_7625"),
    I("IMG_8202sdsdsd-scaled"),
    I("IMG_7944-768x512"),
    I("IMG_7944-300x200"),
  ],
  // cerita (kosongkan [] jika tidak dipakai)
  // 2 foto cerita (carousel otomatis bergeser ke bawah)
  storyPhotos: [I("IMG_8258"), I("IMG_8474")],
  // contoh isi (hapus tanda // di depan, lalu isi dengan cerita asli):
  // story: [
  //   { d: "09 September 2016", t: "Awal Bertemu", p: "Tulis cerita singkat di sini." },
  //   { d: "12 Desember 2016", t: "Menjalin Hubungan", p: "Tulis cerita singkat di sini." },
  //   { d: "15 Januari 2023", t: "Bertunangan", p: "Tulis cerita singkat di sini." },
  // ],
  // CERITA DUMMY — ganti dengan cerita asli kostumer (kosongkan [] jika tidak dipakai)
  story: [
    {
      d: "09 September 2018",
      t: "Awal Bertemu",
      p: "Awal mula kami bertemu adalah dalam sebuah acara sederhana yang tidak pernah kami duga akan menjadi awal dari perjalanan panjang ini.",
    },
    {
      d: "12 Desember 2018",
      t: "Menjalin Hubungan",
      p: "Setelah berkomunikasi beberapa bulan dan menemukan kecocokan, akhirnya kami memutuskan untuk menjalin sebuah komitmen.",
    },
    {
      d: "15 Januari 2026",
      t: "Bertunangan",
      p: "Setelah menjalin hubungan beberapa tahun, akhirnya kami memantapkan hati untuk membawa hubungan ini ke jenjang yang lebih serius.",
    },
  ],
};
/* =============================================== */
