function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let value = Object.fromEntries(data.entries());
    let jsonstring = JSON.stringify(value);
    console.log("JSONstring: " + jsonstring);
    console.log("JSONstring length: " + jsonstring.length);
    
    //mengkompress JSON
    let jsonstringcompressed = LZString.compressToBase64(jsonstring); 
    console.log("compressed: " + jsonstringcompressed);
    console.log("compressed length: " + jsonstringcompressed.length);
    
    // menentukan jumlah qrcode yang dibutuhkan untuk mencakup seluruh data kompresi JSON 
    // masing-masing qrcode panjangnya 128
    let max = Math.ceil(jsonstringcompressed.length / 128); 
    console.log(max);
    
    let qrDiv = document.getElementById("qrcode");

    let i = 1;
    
    while(i <= max){
      //membuat string hasil pecahan untuk qrcode
      let currStr = jsonstringcompressed.substring(0, 129);
      jsonstringcompressed = jsonstringcompressed.substring(129);
      let jsonPecahan = "{seq:"+i+",max:"+ max +","+currStr+"}";
      console.log(jsonPecahan);

      //membuat qrcode
        new QRCode(qrDiv, jsonPecahan);
        i++;
    }
  }