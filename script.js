function saveDataUmat() {

    var datadiri = getDataDiri();
    var dataKontak = getDataKontak();
    var dataPribadi = getDataPribadi();
    var dataKeluarga = getDataKeluarga();
    var dataSakramenBaptis = getDataSakramenBaptis();
    var dataSakramenPenguatan = getDataSkramenPenguatan();
    var dataPekerjaanPendidikan = getDataPekerjaan();
    var dataAktifitas = getDataAktifitas();
    var dataAPK = getDataAPK();

    setCookie("data_diri", datadiri, 365);
    setCookie("dataKontak", dataKontak, 365);
    setCookie("dataPribadi", dataPribadi, 365);
    setCookie("dataKeluarga", dataKeluarga, 365);
    setCookie("dataSakramenBaptis", dataSakramenBaptis, 365);
    setCookie("dataSakramenPenguatan", dataSakramenPenguatan, 365);
    setCookie("dataPekerjaanPendidikan", dataPekerjaanPendidikan, 365);
    setCookie("dataAktifitas", dataAktifitas, 365);
    setCookie("dataAPK", dataAPK, 365);

    alert("Data Berhasil di Save");
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadDataUmat() {

    // Load Cookie Data Diri

    const dataDiri = JSON.parse(getCookie("data_diri"));

    document.formUmat.name.value = dataDiri.name;
    document.formUmat.nik.value = dataDiri.nik;
    document.formUmat.gender.value = dataDiri.gender;
    document.formUmat.birthdate.value = dataDiri.birthdate;
    document.formUmat.birthplace.value = dataDiri.birthplace;
    document.formUmat.religion.value = dataDiri.religion;
    document.formUmat.diocese.value = dataDiri.diocese;
    document.formUmat.parish.value = dataDiri.parish;
    document.formUmat.community.value = dataDiri.community;
    document.formUmat.bloodtype.value = dataDiri.bloodtype;
    document.formUmat.ethnicity.value = dataDiri.ethnicity;
    document.formUmat.nationality.value = dataDiri.nationality;
    document.formUmat.mainLanguage.value = dataDiri.mainLanguage;
    document.formUmat.protestantType.value = dataDiri.protestantType;
    document.formUmat.previousReligion.value = dataDiri.previousReligion;

    // Load Cookie Data Kontak

    const dataKontak = JSON.parse(getCookie("dataKontak"));

    document.formUmat.alamat.value = dataKontak.alamat;
    document.formUmat.kabupaten.value = dataKontak.kabupaten;
    document.formUmat.kota.value = dataKontak.kota;
    document.formUmat.kecamatan.value = dataKontak.kecamatan;
    document.formUmat.kelurahan.value = dataKontak.kelurahan;
    document.formUmat.rt.value = dataKontak.rt;
    document.formUmat.rw.value = dataKontak.rw;
    document.formUmat.bulanTinggal.value = dataKontak.bulanTinggal;
    document.formUmat.tahunTinggal.value = dataKontak.tahunTinggal;
    document.formUmat.noTel.value = dataKontak.noTel;
    document.formUmat.noHP.value = dataKontak.noHP;
    document.formUmat.email.value = dataKontak.email;

    // Load Cookie Data Pribadi

    const dataPribadi = JSON.parse(getCookie("dataPribadi"));

    document.formUmat.hobi.value = dataPribadi.hobi;
    document.formUmat.anggotaAsuransi.value = dataPribadi.anggotaAsuransi;
    document.formUmat.statusKesehatan.value = dataPribadi.statusKesehatan;
    document.formUmat.desKesehatan.value = dataPribadi.desKesehatan;
    document.formUmat.cacatTubuh.value = dataPribadi.cacatTubuh;
    document.formUmat.desCacatTubuh.value = dataPribadi.desCacatTubuh;

    // Load Cookie Data Keluarga

    const dataKeluarga = JSON.parse(getCookie("dataKeluarga"));

    document.formUmat.statusPerkawinan.value = dataKeluarga.statusPerkawinan;
    document.formUmat.statusHubKeluarga.value = dataKeluarga.statusHubKeluarga;
    document.formUmat.namaIbuKandung.value = dataKeluarga.namaIbuKandung;
    document.formUmat.namaAyahKandung.value = dataKeluarga.namaAyahKandung;
    document.formUmat.anakKe.value = dataKeluarga.anakKe;
    document.formUmat.anakKe1.value = dataKeluarga.anakKe1;
    document.formUmat.anakKe2.value = dataKeluarga.anakKe2;
    document.formUmat.anakKe3.value = dataKeluarga.anakKe3;
    document.formUmat.anakKe4.value = dataKeluarga.anakKe4;
    document.formUmat.anakKe5.value = dataKeluarga.anakKe5;

    // Load Cookie Data Sakramen Baptis

    const dataSakramenBaptis = JSON.parse(getCookie("dataSakramenBaptis"));

    document.formUmat.noSuratBaptis.value = dataSakramenBaptis.noSuratBaptis;
    document.formUmat.namaBaptis.value = dataSakramenBaptis.namaBaptis;
    document.formUmat.jenisBaptis.value = dataSakramenBaptis.jenisBaptis;
    document.formUmat.agamaSebelumnya.value = dataSakramenBaptis.agamaSebelumnya;
    document.formUmat.gerejaBaptis.value = dataSakramenBaptis.gerejaBaptis;
    document.formUmat.tanggalBaptis.value = dataSakramenBaptis.tanggalBaptis;
    document.formUmat.parokiBaptis.value = dataSakramenBaptis.parokiBaptis;
    document.formUmat.kotaBaptis.value = dataSakramenBaptis.kotaBaptis;
    document.formUmat.noSuratKomuni.value = dataSakramenBaptis.noSuratKomuni;
    document.formUmat.tanggalKomuni.value = dataSakramenBaptis.tanggalKomuni;
    document.formUmat.tempatKomuni.value = dataSakramenBaptis.tempatKomuni;
    document.formUmat.namaParoki.value = dataSakramenBaptis.namaParoki;
    document.formUmat.kotaParoki.value = dataSakramenBaptis.kotaParoki;

    // Load Cookie Data Sakramen Penguatan

    const dataSakramenPenguatan = JSON.parse(getCookie("dataSakramenPenguatan"));

    document.formUmat.noSuratPenguatan.value = dataSakramenPenguatan.noSuratPenguatan;
    document.formUmat.tanggalPenguatan.value = dataSakramenPenguatan.tanggalPenguatan;
    document.formUmat.namaPenguatan.value = dataSakramenPenguatan.namaPenguatan;
    document.formUmat.gerejaPenguatan.value = dataSakramenPenguatan.gerejaPenguatan;
    document.formUmat.namaParokiPenguatan.value = dataSakramenPenguatan.namaParokiPenguatan;
    document.formUmat.kotaPenguatan.value = dataSakramenPenguatan.kotaPenguatan;
    document.formUmat.noSuratPerkawinan.value = dataSakramenPenguatan.noSuratPerkawinan;
    document.formUmat.tanggalPerkawinan.value = dataSakramenPenguatan.tanggalPerkawinan;
    document.formUmat.gerejaPerkawinan.value = dataSakramenPenguatan.gerejaPerkawinan;
    document.formUmat.namaParokiPerkawinan.value = dataSakramenPenguatan.namaParokiPerkawinan;
    document.formUmat.kotaPerkawinan.value = dataSakramenPenguatan.kotaPerkawinan;
    document.formUmat.namaSuami.value = dataSakramenPenguatan.namaSuami;
    document.formUmat.namaIstri.value = dataSakramenPenguatan.namaIstri;
    document.formUmat.kategoriPerkawinan.value = dataSakramenPenguatan.kategoriPerkawinan;

    // Load Cookie Data Pekerjaan

    const dataPekerjaanPendidikan = JSON.parse(getCookie("dataPekerjaanPendidikan"));

    document.formUmat.pekerjaan.value = dataPekerjaanPendidikan.pekerjaan;
    document.formUmat.alamatPekerjaan.value = dataPekerjaanPendidikan.alamatPekerjaan;
    document.formUmat.profesi.value = dataPekerjaanPendidikan.profesi;
    document.formUmat.profesiLain.value = dataPekerjaanPendidikan.profesiLain;
    document.formUmat.pendapatanPerbulan.value = dataPekerjaanPendidikan.pendapatanPerbulan;
    document.formUmat.keahlian.value = dataPekerjaanPendidikan.keahlian;
    document.formUmat.kursusGereja.value = dataPekerjaanPendidikan.kursusGereja;
    document.formUmat.jenisKursus.value = dataPekerjaanPendidikan.jenisKursus;
    document.formUmat.pendidikanSekarang.value = dataPekerjaanPendidikan.pendidikanSekarang;
    document.formUmat.pendidikanTerakhir.value = dataPekerjaanPendidikan.pendidikanTerakhir;
    document.formUmat.jurusan.value = dataPekerjaanPendidikan.jurusan;
    document.formUmat.namaSekolah.value = dataPekerjaanPendidikan.namaSekolah;
    document.formUmat.kotaSekolah.value = dataPekerjaanPendidikan.kotaSekolah;
    document.formUmat.alamatSekolah.value = dataPekerjaanPendidikan.alamatSekolah;
    document.formUmat.kategoriSekolah.value = dataPekerjaanPendidikan.kategoriSekolah;

    // Load Cookie Data Aktifitas

    const dataAktifitas = JSON.parse(getCookie("dataAktifitas"));

    document.formUmat.jenisRohaniwan.value = dataAktifitas.jenisRohaniwan;
    document.formUmat.misaHarian.value = dataAktifitas.misaHarian;
    document.formUmat.misaMingguan.value = dataAktifitas.misaMingguan;
    document.formUmat.misaHariRaya.value = dataAktifitas.misaHariRaya;
    document.formUmat.aktifMasyarakat.value = dataAktifitas.aktifMasyarakat;
    document.formUmat.posisiMasyarakat.value = dataAktifitas.posisiMasyarakat;
    document.formUmat.aktifKeuskupan.value = dataAktifitas.aktifKeuskupan;
    document.formUmat.aktifParoki.value = dataAktifitas.aktifParoki;
    document.formUmat.aktifLingkungan.value = dataAktifitas.aktifLingkungan;
    document.formUmat.aktifWilayah.value = dataAktifitas.aktifWilayah;
    document.formUmat.petugasLiturgi.value = dataAktifitas.petugasLiturgi;
    document.formUmat.aktifKategorial.value = dataAktifitas.aktifKategorial;
    document.formUmat.namaKategorial.value = dataAktifitas.namaKategorial;

    // Load Cookie Data APK

    const dataAPK = JSON.parse(getCookie("dataAPK"));

    document.formUmat.anggotaAPK.value = dataAPK.anggotaAPK;
    document.formUmat.noAPK.value = dataAPK.noAPK;
    document.formUmat.tanggalMutasiAPK.value = dataAPK.tanggalMutasiAPK;
    document.formUmat.statusAPK.value = dataAPK.statusAPK;
    document.formUmat.tanggalKematian.value = dataAPK.tanggalKematian;
    document.formUmat.pastorPengurusKematian.value = dataAPK.pastorPengurusKematian;

    alert("Data Berhasil di Load");
}


function getDataDiri() {

    var name = document.getElementById("name").value;
    var nik = document.getElementById("nik").value;
    var gender = document.getElementById("gender").value;
    var birthdate = document.getElementById("birthdate").value;
    var birthplace = document.getElementById("birthplace").value;
    var religion = document.getElementById("religion").value;
    var diocese = document.getElementById("diocese").value;
    var parish = document.getElementById("parish").value;
    var community = document.getElementById("community").value;
    var bloodtype = document.getElementById("bloodtype").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var nationality = document.getElementById("nationality").value;
    var mainLanguage = document.getElementById("mainLanguage").value;
    var protestantType = document.getElementById("protestantType").value;
    var previousReligion = document.getElementById("previousReligion").value;

    // Create a JSON object
    var data = {

        name: name,
        nik: nik,
        gender: gender,
        birthdate: birthdate,
        birthplace: birthplace,
        religion: religion,
        diocese: diocese,
        parish: parish,
        community: community,
        bloodtype: bloodtype,
        ethnicity: ethnicity,
        nationality: nationality,
        mainLanguage: mainLanguage,
        protestantType: protestantType,
        previousReligion: previousReligion,
    };

    // Convert the JSON object to a string
    var jsonString = JSON.stringify(data);
    return jsonString;
}

function getDataKontak() {

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
    return jsonString;
}

function getDataPribadi() {

    var hobi = document.getElementById("hobi").value;
    var anggotaAsuransi = document.getElementById("anggotaAsuransi").value;
    var statusKesehatan = document.getElementById("statusKesehatan").value;
    var desKesehatan = document.getElementById("desKesehatan").value;
    var cacatTubuh = document.getElementById("cacatTubuh").value;
    var desCacatTubuh = document.getElementById("desCacatTubuh").value;

    var dataPribadi = {

        hobi: hobi,
        anggotaAsuransi: anggotaAsuransi,
        statusKesehatan: statusKesehatan,
        desKesehatan: desKesehatan,
        cacatTubuh: cacatTubuh,
        desCacatTubuh: desCacatTubuh,
    }

    var jsonString = JSON.stringify(dataPribadi);
    return jsonString;
}

function getDataKeluarga() {

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
    return jsonString;
}

function getDataSakramenBaptis() {

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
    return jsonString;
}

function getDataSkramenPenguatan() {

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
    return jsonString;
}

function getDataPekerjaan() {

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
    return jsonString;
}

function getDataAktifitas() {

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
    return jsonString;
}

function getDataAPK() {

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
    return jsonString;
}

function generateQRCode(event) {
    event.preventDefault();
    jsonString = getDataDiri();

    console.log(jsonString);

    ///////////////////////////////////////////////////////////////

    // QR Code Data Diri

    // Get the canvas element
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";

    // Create a QRCode instance
    var qrcode = new QRCode(qrcodeContainer, {
        text: getDataDiri(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code Data Kontak

    // Get the canvas element
    var qrcodeContainer2 = document.getElementById("qrcode2");
    qrcodeContainer2.innerHTML = "";

    // Create a QRCode instance
    var qrcode2 = new QRCode(qrcodeContainer2, {
        text: getDataKontak(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code Data Pribadi

    // Get the canvas element
    var qrcodeContainer3 = document.getElementById("qrcode3");
    qrcodeContainer3.innerHTML = "";

    // Create a QRCode instance
    var qrcode3 = new QRCode(qrcodeContainer3, {
        text: getDataPribadi(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code Keluarga

    // Get the canvas element
    var qrcodeContainer4 = document.getElementById("qrcode4");
    qrcodeContainer4.innerHTML = "";

    // Create a QRCode instance
    var qrcode4 = new QRCode(qrcodeContainer4, {
        text: getDataKeluarga(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code Sakramen [Baptis + Komuni Pertama]

    // Get the canvas element
    var qrcodeContainer5 = document.getElementById("qrcode5");
    qrcodeContainer5.innerHTML = "";

    // Create a QRCode instance
    var qrcode5 = new QRCode(qrcodeContainer5, {
        text: getDataSakramenBaptis(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code Sakramen [Penguatan + Perkawinan]

    // Get the canvas element
    var qrcodeContainer51 = document.getElementById("qrcode51");
    qrcodeContainer51.innerHTML = "";

    // Create a QRCode instance
    var qrcode51 = new QRCode(qrcodeContainer51, {
        text: getDataSkramenPenguatan(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code Pekerjaan Pendidikan

    // Get the canvas element
    var qrcodeContainer6 = document.getElementById("qrcode6");
    qrcodeContainer6.innerHTML = "";

    // Create a QRCode instance
    var qrcode6 = new QRCode(qrcodeContainer6, {
        text: getDataPekerjaan(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code Aktifitas

    // Get the canvas element
    var qrcodeContainer7 = document.getElementById("qrcode7");
    qrcodeContainer7.innerHTML = "";

    // Create a QRCode instance
    var qrcode7 = new QRCode(qrcodeContainer7, {
        text: getDataAktifitas(),
        width: 256,
        height: 256,
    });

    ///////////////////////////////////////////////////////////////

    // QR Code APK

    // Get the canvas element
    var qrcodeContainer8 = document.getElementById("qrcode8");
    qrcodeContainer8.innerHTML = "";

    // Create a QRCode instance
    var qrcode8 = new QRCode(qrcodeContainer8, {
        text: getDataAPK(),
        width: 256,
        height: 256,
    });

    // Render the QR code
    // qrcode.make();
}