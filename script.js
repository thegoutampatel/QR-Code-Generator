const input = document.getElementsByTagName("input");
const img = document.getElementsById("image");


function getQr(){
    let QR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    
    
}
