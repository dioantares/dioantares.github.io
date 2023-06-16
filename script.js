function setCookie(){

    // Set Cookies

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;

    document.cookie = "Nama" + name;
    document.cookie = "Jenis Kelamin" + gender;
}

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
    var anggotaAsuransi = document.getElementById("anggotaAsuransi").value;
    var desKesehatan = document.getElementById("desKesehatan").value;
    var cacatTubuh = document.getElementById("cacatTubuh").value;
    var desCacatTubuh = document.getElementById("desCacatTubuh").value;

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
    var statusHubKeluarga = document.getElementById("statusHubKeluarga").value;
    var namaIbuKandung = document.getElementById("namaIbuKandung").value;
    var namaAyahKandung = document.getElementById("namaAyahKandung").value;
    var anakKe = document.getElementById("anakKe").value;
    var anakKe1 = document.getElementById("anakKe1").value;
    var anakKe2 = document.getElementById("anakKe2").value;
    var anakKe3 = document.getElementById("anakKe3").value;
    var anakKe4 = document.getElementById("anakKe4").value;
    var anakKe5 = document.getElementById("anakKe5").value;


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
    var namaBaptis = document.getElementById("namaBaptis").value;
    var jenisBaptis = document.getElementById("jenisBaptis").value;
    var agamaSebelumnya = document.getElementById("agamaSebelumnya").value;
    var gerejaBaptis = document.getElementById("gerejaBaptis").value;
    var tanggalBaptis = document.getElementById("tanggalBaptis").value;
    var parokiBaptis = document.getElementById("parokiBaptis").value;
    var kotaBaptis = document.getElementById("kotaBaptis").value;
    var noSuratKomuni = document.getElementById("noSuratKomuni").value;
    var tanggalKomuni = document.getElementById("tanggalKomuni").value;
    var tempatKomuni = document.getElementById("tempatKomuni").value;
    var namaParoki = document.getElementById("namaParoki").value;
    var kotaParoki = document.getElementById("kotaParoki").value;

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
    var tanggalPenguatan = document.getElementById("tanggalPenguatan").value;
    var namaPenguatan = document.getElementById("namaPenguatan").value;
    var gerejaPenguatan = document.getElementById("gerejaPenguatan").value;
    var namaParokiPenguatan = document.getElementById("namaParokiPenguatan").value;
    var kotaPenguatan = document.getElementById("kotaPenguatan").value;
    var noSuratPerkawinan = document.getElementById("noSuratPerkawinan").value;
    var tanggalPerkawinan = document.getElementById("tanggalPerkawinan").value;
    var gerejaPerkawinan = document.getElementById("gerejaPerkawinan").value;
    var namaParokiPerkawinan = document.getElementById("namaParokiPerkawinan").value;
    var kotaPerkawinan = document.getElementById("kotaPerkawinan").value;
    var namaSuami = document.getElementById("namaSuami").value;
    var namaIstri = document.getElementById("namaIstri").value;
    var kategoriPerkawinan = document.getElementById("kategoriPerkawinan").value;

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
    var alamatPekerjaan = document.getElementById("alamatPekerjaan").value;
    var profesi = document.getElementById("profesi").value;
    var profesiLain = document.getElementById("profesiLain").value;
    var pendapatanPerbulan = document.getElementById("pendapatanPerbulan").value;
    var keahlian = document.getElementById("keahlian").value;
    var kursusGereja = document.getElementById("kursusGereja").value;
    var jenisKursus = document.getElementById("jenisKursus").value;
    var pendidikanSekarang = document.getElementById("pendidikanSekarang").value;
    var pendidikanTerakhir = document.getElementById("pendidikanTerakhir").value;
    var jurusan = document.getElementById("jurusan").value;
    var namaSekolah = document.getElementById("namaSekolah").value;
    var kotaSekolah = document.getElementById("kotaSekolah").value;
    var alamatSekolah = document.getElementById("alamatSekolah").value;
    var kategoriSekolah = document.getElementById("kategoriSekolah").value;

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
    var misaHarian = document.getElementById("misaHarian").value;
    var misaMingguan = document.getElementById("misaMingguan").value;
    var misaHariRaya = document.getElementById("misaHariRaya").value;
    var aktifMasyarakat = document.getElementById("aktifMasyarakat").value;
    var posisiMasyarakat = document.getElementById("posisiMasyarakat").value;
    var aktifKeuskupan = document.getElementById("aktifKeuskupan").value;
    var aktifParoki = document.getElementById("aktifParoki").value;
    var aktifLingkungan = document.getElementById("aktifLingkungan").value;
    var aktifWilayah = document.getElementById("aktifWilayah").value;
    var petugasLiturgi = document.getElementById("petugasLiturgi").value;
    var aktifKategorial = document.getElementById("aktifKategorial").value;
    var namaKategorial = document.getElementById("namaKategorial").value;


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
    var noAPK = document.getElementById("noAPK").value;
    var tanggalMutasiAPK = document.getElementById("tanggalMutasiAPK").value;
    var statusAPK = document.getElementById("statusAPK").value;
    var tanggalKematian = document.getElementById("tanggalKematian").value;
    var pastorPengurusKematian = document.getElementById("pastorPengurusKematian").value;

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