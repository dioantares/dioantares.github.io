function generateQRCode(event) {
    event.preventDefault();

    // Form Data Diri dan Identitas
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var birthDate = document.getElementById("birthdate").value;
    var birthPlace = document.getElementById("birthplace").value;
    var religion = document.getElementById("religion").value;
    var diocese = document.getElementById("diocese").value;
    var parish = document.getElementById("parish").value;
    var community = document.getElementById("community").value;
    var bloodType = document.getElementById("bloodtype").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var nationality = document.getElementById("nationality").value;
    var mainLanguage = document.getElementById("mainLanguage").value;
    var protestantType = document.getElementById("protestantType").value;
    var previousReligion = document.getElementById("previousReligion").value;

    // Create a JSON object
    var data = {

        name: name,
        gender: gender,
        birthDate: birthDate,
        birthPlace: birthPlace,
        religion: religion,
        diocese: diocese,
        parish: parish,
        community: community,
        bloodType: bloodType,
        ethnicity: ethnicity,
        nationality: nationality,
        mainLanguage: mainLanguage,
        protestantType: protestantType,
        previousReligion: previousReligion,
    };

    // Convert the JSON object to a string
    var jsonString = JSON.stringify(data);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";

    // Create a QRCode instance
    var qrcode = new QRCode(qrcodeContainer, {
        text: jsonString,
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////


    // Form Kontak

    var alamat = document.getElementById("alamat").value;
    var kabupaten = document.getElementById("kabupaten").value;
    var kota = document.getElementById("kota").value;
    var kecamatan = document.getElementById("kecamatan").value;
    var kelurahan = document.getElementById("kelurahan").value;
    var rt = document.getElementById("rt").value;
    var rw = document.getElementById("rw").value;
    var bulanTinggal = document.getElementById("bulanTinggal").value;
    var tahunTinggal = document.getElementById("tahunTinggal").value;
    var noTel = document.getElementById("noTel").value;
    var noHP = document.getElementById("noHP").value;
    var email = document.getElementById("email").value;

    var dataKontak = {

        alamat: alamat,
        kabupaten: kabupaten,
        kota: kota,
        kecamatan: kecamatan,
        kelurahan: kelurahan,
        rt: rt,
        rw: rw,
        bulanTinggal: bulanTinggal,
        tahunTinggal: tahunTinggal,
        noTel: noTel,
        noHP: noHP,
        email: email,
    }

    var jsonString = JSON.stringify(dataKontak);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer2 = document.getElementById("qrcode2");
    qrcodeContainer2.innerHTML = "";

    // Create a QRCode instance
    var qrcode2 = new QRCode(qrcodeContainer2, {
        text: jsonString,
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // Form Data Pribadi

    var hobi = document.getElementById("hobi").value;
    var anggotaAsuransi = document.get.getElementById("anggotaAsuransi").value;
    var desKesehatan = document.get.getElementById("desKesehatan").value;
    var cacatTubuh = document.get.getElementById("cacatTubuh").value;
    var desCacatTubuh = document.get.getElementById("desCacatTubuh").value;

    var dataPribadi = {

        hobi: hobi,
        anggotaAsuransi: anggotaAsuransi,
        desKesehatan: desKesehatan,
        cacatTubuh: cacatTubuh,
        desCacatTubuh: desCacatTubuh,
    }

    var jsonString = JSON.stringify(dataPribadi);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer3 = document.getElementById("qrcode3");
    qrcodeContainer3.innerHTML = "";

    // Create a QRCode instance
    var qrcode3 = new QRCode(qrcodeContainer3, {
        text: jsonString,
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // Form Keluarga

    var statusPerkawinan = document.getElementById("statusPerkawinan").value;
    var statusHubKeluarga = document.get.getElementById("statusHubKeluarga").value;
    var namaIbuKandung = document.get.getElementById("namaIbuKandung").value;
    var namaAyahKandung = document.get.getElementById("namaAyahKandung").value;
    var anakKe = document.get.getElementById("anakKe").value;
    var anakKe1 = document.get.getElementById("anakKe1").value;
    var anakKe2 = document.get.getElementById("anakKe2").value;
    var anakKe3 = document.get.getElementById("anakKe3").value;
    var anakKe4 = document.get.getElementById("anakKe4").value;
    var anakKe5 = document.get.getElementById("anakKe5").value;


    var dataKeluarga = {

        statusPerkawinan: statusPerkawinan,
        statusHubKeluarga: statusHubKeluarga,
        namaIbuKandung: namaIbuKandung,
        namaAyahKandung: namaAyahKandung,
        anakKe: anakKe,
        anakKe1: anakKe1,
        anakKe2: anakKe2,
        anakKe3: anakKe3,
        anakKe4: anakKe4,
        anakKe5: anakKe5,
    }

    var jsonString = JSON.stringify(dataKeluarga);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer4 = document.getElementById("qrcode4");
    qrcodeContainer4.innerHTML = "";

    // Create a QRCode instance
    var qrcode4 = new QRCode(qrcodeContainer4, {
        text: jsonString,
        width: 256,
        height: 256,
    });


    ///////////////////////////////////////////////////////////////

    // Form Sakramen [Baptis + Komuni Pertama]

    var noSuratBaptis = document.getElementById("noSuratBaptis").value;
    var namaBaptis = document.get.getElementById("namaBaptis").value;
    var jenisBaptis = document.get.getElementById("jenisBaptis").value;
    var agamaSebelumnya = document.get.getElementById("agamaSebelumnya").value;
    var gerejaBaptis = document.get.getElementById("gerejaBaptis").value;
    var tanggalBaptis = document.get.getElementById("tanggalBaptis").value;
    var parokiBaptis = document.get.getElementById("parokiBaptis").value;
    var kotaBaptis = document.get.getElementById("kotaBaptis").value;
    var noSuratKomuni = document.get.getElementById("noSuratKomuni").value;
    var tanggalKomuni = document.get.getElementById("tanggalKomuni").value;
    var tempatKomuni = document.get.getElementById("tempatKomuni").value;
    var namaParoki = document.get.getElementById("namaParoki").value;
    var kotaParoki = document.get.getElementById("kotaParoki").value;

    var dataSakramen = {

        noSuratBaptis: noSuratBaptis,
        namaBaptis: namaBaptis,
        jenisBaptis: jenisBaptis,
        agamaSebelumnya: agamaSebelumnya,
        gerejaBaptis: gerejaBaptis,
        tanggalBaptis: tanggalBaptis,
        parokiBaptis: parokiBaptis,
        kotaBaptis: kotaBaptis,
        noSuratKomuni: noSuratKomuni,
        tanggalKomuni: tanggalKomuni,
        tempatKomuni: tempatKomuni,
        namaParoki: namaParoki,
        kotaParoki: kotaParoki,
    }

    var jsonString = JSON.stringify(dataSakramen);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer5 = document.getElementById("qrcode5");
    qrcodeContainer5.innerHTML = "";

    // Create a QRCode instance
    var qrcode5 = new QRCode(qrcodeContainer5, {
        text: jsonString,
        width: 256,
        height: 256,
    });



    // Form Sakramen [Penguatan + Perkawinan]

    var noSuratPenguatan = document.getElementById("noSuratPenguatan").value;
    var tanggalPenguatan = document.get.getElementById("tanggalPenguatan").value;
    var namaPenguatan = document.get.getElementById("namaPenguatan").value;
    var gerejaPenguatan = document.get.getElementById("gerejaPenguatan").value;
    var namaParokiPenguatan = document.get.getElementById("namaParokiPenguatan").value;
    var kotaPenguatan = document.get.getElementById("kotaPenguatan").value;
    var noSuratPerkawinan = document.get.getElementById("noSuratPerkawinan").value;
    var tanggalPerkawinan = document.get.getElementById("tanggalPerkawinan").value;
    var gerejaPerkawinan = document.get.getElementById("gerejaPerkawinan").value;
    var namaParokiPerkawinan = document.get.getElementById("namaParokiPerkawinan").value;
    var kotaPerkawinan = document.get.getElementById("kotaPerkawinan").value;
    var namaSuami = document.get.getElementById("namaSuami").value;
    var namaIstri = document.get.getElementById("namaIstri").value;
    var kategoriPerkawinan = document.get.getElementById("kategoriPerkawinan").value;

    var dataSakramen2 = {

        noSuratPenguatan: noSuratPenguatan,
        tanggalPenguatan: tanggalPenguatan,
        namaPenguatan: namaPenguatan,
        gerejaPenguatan: gerejaPenguatan,
        namaParokiPenguatan: namaParokiPenguatan,
        kotaPenguatan: kotaPenguatan,
        noSuratPerkawinan: noSuratPerkawinan,
        tanggalPerkawinan: tanggalPerkawinan,
        gerejaPerkawinan: gerejaPerkawinan,
        namaParokiPerkawinan: namaParokiPerkawinan,
        kotaPerkawinan: kotaPerkawinan,
        namaSuami: namaSuami,
        namaIstri: namaIstri,
        kategoriPerkawinan: kategoriPerkawinan,
    }

    var jsonString = JSON.stringify(dataSakramen2);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer51 = document.getElementById("qrcode51");
    qrcodeContainer51.innerHTML = "";

    // Create a QRCode instance
    var qrcode51 = new QRCode(qrcodeContainer51, {
        text: jsonString,
        width: 256,
        height: 256,
    });




    ///////////////////////////////////////////////////////////////

    // Form Pekerjaan Pendidikan

    var pekerjaan = document.getElementById("pekerjaan").value;
    var alamatPekerjaan = document.get.getElementById("alamatPekerjaan").value;
    var profesi = document.get.getElementById("profesi").value;
    var profesiLain = document.get.getElementById("profesiLain").value;
    var pendapatanPerbulan = document.get.getElementById("pendapatanPerbulan").value;
    var keahlian = document.get.getElementById("keahlian").value;
    var kursusGereja = document.get.getElementById("kursusGereja").value;
    var jenisKursus = document.get.getElementById("jenisKursus").value;
    var pendidikanSekarang = document.get.getElementById("pendidikanSekarang").value;
    var pendidikanTerakhir = document.get.getElementById("pendidikanTerakhir").value;
    var jurusan = document.get.getElementById("jurusan").value;
    var namaSekolah = document.get.getElementById("namaSekolah").value;
    var kotaSekolah = document.get.getElementById("kotaSekolah").value;
    var alamatSekolah = document.get.getElementById("alamatSekolah").value;
    var kategoriSekolah = document.get.getElementById("kategoriSekolah").value;

    var dataPekerjaan = {

        pekerjaan: pekerjaan,
        alamatPekerjaan: alamatPekerjaan,
        profesi: profesi,
        profesiLain: profesiLain,
        pendapatanPerbulan: pendapatanPerbulan,
        keahlian: keahlian,
        kursusGereja: kursusGereja,
        jenisKursus: jenisKursus,
        pendidikanSekarang: pendidikanSekarang,
        pendidikanTerakhir: pendidikanTerakhir,
        jurusan: jurusan,
        namaSekolah: namaSekolah,
        kotaSekolah: kotaSekolah,
        alamatSekolah: alamatSekolah,
        kategoriSekolah: kategoriSekolah,
    }

    var jsonString = JSON.stringify(dataPekerjaan);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer6 = document.getElementById("qrcode6");
    qrcodeContainer6.innerHTML = "";

    // Create a QRCode instance
    var qrcode6 = new QRCode(qrcodeContainer6, {
        text: jsonString,
        width: 256,
        height: 256,
    });


    ///////////////////////////////////////////////////////////////

    // Form Aktifitas

    var jenisRohaniwan = document.getElementById("jenisRohaniwan").value;
    var misaHarian = document.get.getElementById("misaHarian").value;
    var misaMingguan = document.get.getElementById("misaMingguan").value;
    var misaHariRaya = document.get.getElementById("misaHariRaya").value;
    var aktifMasyarakat = document.get.getElementById("aktifMasyarakat").value;
    var posisiMasyarakat = document.get.getElementById("posisiMasyarakat").value;
    var aktifKeuskupan = document.get.getElementById("aktifKeuskupan").value;
    var aktifParoki = document.get.getElementById("aktifParoki").value;
    var aktifLingkungan = document.get.getElementById("aktifLingkungan").value;
    var aktifWilayah = document.get.getElementById("aktifWilayah").value;
    var petugasLiturgi = document.get.getElementById("petugasLiturgi").value;
    var aktifKategorial = document.get.getElementById("aktifKategorial").value;
    var namaKategorial = document.get.getElementById("namaKategorial").value;


    var dataAktifitas = {

        jenisRohaniwan: jenisRohaniwan,
        misaHarian: misaHarian,
        misaMingguan: misaMingguan,
        misaHariRaya: misaHariRaya,
        aktifMasyarakat: aktifMasyarakat,
        posisiMasyarakat: posisiMasyarakat,
        aktifKeuskupan: aktifKeuskupan,
        aktifParoki: aktifParoki,
        aktifLingkungan: aktifLingkungan,
        aktifWilayah: aktifWilayah,
        petugasLiturgi: petugasLiturgi,
        aktifKategorial: aktifKategorial,
        namaKategorial: namaKategorial,
    }

    var jsonString = JSON.stringify(dataAktifitas);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer7 = document.getElementById("qrcode7");
    qrcodeContainer7.innerHTML = "";

    // Create a QRCode instance
    var qrcode7 = new QRCode(qrcodeContainer7, {
        text: jsonString,
        width: 256,
        height: 256,
    });


    ///////////////////////////////////////////////////////////////

    // Form APK

    var anggotaAPK = document.getElementById("anggotaAPK").value;
    var noAPK = document.get.getElementById("noAPK").value;
    var tanggalMutasiAPK = document.get.getElementById("tanggalMutasiAPK").value;
    var statusAPK = document.get.getElementById("statusAPK").value;
    var tanggalKematian = document.get.getElementById("tanggalKematian").value;
    var pastorPengurusKematian = document.get.getElementById("pastorPengurusKematian").value;

    var dataAPK = {

        anggotaAPK: anggotaAPK,
        noAPK: noAPK,
        tanggalMutasiAPK: tanggalMutasiAPK,
        statusAPK: statusAPK,
        tanggalKematian: tanggalKematian,
        pastorPengurusKematian: pastorPengurusKematian,
    }

    var jsonString = JSON.stringify(dataAPK);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer8 = document.getElementById("qrcode8");
    qrcodeContainer8.innerHTML = "";

    // Create a QRCode instance
    var qrcode8 = new QRCode(qrcodeContainer8, {
        text: jsonString,
        width: 256,
        height: 256,
    });

    // Render the QR code
    // qrcode.make();
}

function setCookie(){

    // Set Cookies

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;

    document.cookie = "Nama" + name;
    document.cookie = "Jenis Kelamin" + gender;
}