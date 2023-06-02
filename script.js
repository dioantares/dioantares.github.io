function generateQRCode(event) {
    event.preventDefault();
    // Form Data Diri
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

        //Form Data Diri
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

    var dataPribadi = {

        hobi: hobi,
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

    // Form Data Pribadi

    var statusPerkawinan = document.getElementById("statusPerkawinan").value;

    var dataKeluarga = {

        statusPerkawinan: statusPerkawinan,
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

    // Form Sakramen

    var noSuratBaptis = document.getElementById("noSuratBaptis").value;

    var dataSakramen = {
        
        noSuratBaptis: noSuratBaptis,
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


    ///////////////////////////////////////////////////////////////

    // Form Pekerjaan Pendidikan

    var pekerjaan = document.getElementById("pekerjaan").value;

    var dataPekerjaan = {
        
        pekerjaan: pekerjaan,
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

    var dataAktifitas = {
        
        jenisRohaniwan: jenisRohaniwan,
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

    var dataAPK = {
        
        anggotaAPK: anggotaAPK,
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