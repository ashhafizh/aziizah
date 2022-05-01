var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
var vara = new Vara(
  "#container", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Bismillah,",
      y: 150,
      fromCurrentPosition: { y: false },
      duration: 3000
    },
    {
      text: "Dear Aziizah,",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Temanku sayang....",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4500
    },
    {
      text: "Ramadhan sudah pergi meninggalkan kita, dan syawal telah menyambut kita...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 6500
    },
    {
      text: "Candaku mungkin pernah menyakiti hatimu...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 5000
    },
    {
      text: "Tawaku mungkin pernah mengusik damaimu...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 5000
    },
    {
      text: "Perkataanku mungkin pernah melukai perasaanmu...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 5000
    },
    {
      text: "Maafkan diri ini yang begitu banyak salah..",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4500
    },
    {
      text: "Karna cewe yang selalu benar...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 800
    },
    {
      text: "Gk\'' maksudnya...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Karena saya juga manusia biasa yang memiliki banyak kekhilafan...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 6000
    },
    {
      text: "Mohon dimaafkan apabila ada salah perbuatan,",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4500
    },
    {
      text: "salah kata,",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 2000
    },
    {
      text: "salah cinta,",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 2000
    },
    {
      text: "dan salah menaruh rasa...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 3000
    },
    {
      text: "Minal \'Aidin Wal Faizin",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Mohon Maaf Sering Ngangenin",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Ehh...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 1000
    },
    {
      text: "Mohon Maaf Lahir Dan Batin",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Kupat duduhe santen. Kathah lepat kulo nyuwun ngapunten.",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 5000
    },
    {
      text: "Kupat janure tuwo. Kathah lepat kulo nyuwun pangapuro.",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 5000
    },
    {
      text: "Semoga kedepannya bisa lebih baik & dipertemukan kembali dengan ramadhan selanjutnya...",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 6500
    },
    {
      text: "Happy Eid Mubarak 1443 H",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Saya Muhammad Hafizh Ashshiddiqy beserta seluruh keluarga mengucapkan...",
      y: 150,
      id: "no_erase",
      delay: 4000
    },
    {
      text:
        "SELAMAT HARI RAYA IDUL FITRI 1443 H",
      y: 200,
      x: 50,
      duration: 6000
    },
    {
      text: "klik untuk lihat selengkapnya",
      color: "#421e82",
      id: "klikdisini"
    }
  ],
  {
    strokeWidth: 2,
    color: "#523c33",
    fontSize: fontSize,
    textAlign: "center"
  }
);
vara.ready(function() {
  var erase = true;
  vara.animationEnd(function(i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
      o.container.style.transition = "opacity 1s 1s";
      o.container.style.opacity = 0;
    }
  });
  vara.get("klikdisini").container.style.cursor = "pointer";
  vara.get("klikdisini").container.onclick = function() {
    document.querySelector("#link").click();
  };
});