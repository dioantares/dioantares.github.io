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

    //Form Kontak

    var alamat = document.getElementById("alamat").value;
    var kabupaten = document.getElementById("kabupaten").value;
    var kota = document.getElementById("kota").value;


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

    var dataKontak = {
        //Form Kontak

        alamat: alamat,
        kabupaten: kabupaten,
        kota: kota,
    }
    
    var jsonString = JSON.stringify(dataKontak);
    console.log(jsonString);

    // Get the canvas element
    var qrcodeContainer = document.getElementById("qrcode2");
    qrcodeContainer.innerHTML = "";

    // Create a QRCode instance
    var qrcode2 = new QRCode(qrcodeContainer, {
        text: jsonString,
        width: 256,
        height: 256,
    });



    // Render the QR code
    // qrcode.make();
}