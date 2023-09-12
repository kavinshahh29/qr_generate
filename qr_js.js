let imageqr = document.querySelector("#image_qr");
// let imagebox = document.querySelector("#imagebox");
let input = document.querySelector("#inputid");

function qrgenerate(){
    imageqr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    // console.log("YOU CLICK");

}
