 // Khai báo biến

 const userlink = document.getElementById('userlink');
 const sc = document.getElementById('sc');
 const signoutlink = document.getElementById('signoutlink');
 var curUsername = null;
 // document.getElementById('userInp');

 // trạng thái họ tên

 function getCurUsername() {
     let keepLogIn = localStorage.getItem("keepLogIn");

     if (keepLogIn == "Yes") {
         console.log(3);
         curUsername = JSON.parse(localStorage.getItem('user'));
         console.log(44);

     } else {
         console.log(4);

         curUsername = JSON.parse(sessionStorage.getItem('user'));
         console.log(42);

     }
 }

 //signout
 function Signout() {
     sessionStorage.removeItem('user');
     localStorage.removeItem('user');
     localStorage.removeItem('keepLogIn');
     window.location = "index.html";
 }

 //reload
 window.onload = function () {
     getCurUsername();
     if (curUsername == null) {
         console.log("1");
         userlink.remove();
         sc.remove();
         // userlink.href = "#";

         signoutlink.innerText = "Đăng Nhập";
         signoutlink.href ="log.html";
     } else {
         console.log("2");

         userlink.innerText = " Xin chào - " + curUsername.name;
         userlink.href = "#";

         signoutlink.innerText = "";
         signoutlink.href = "javascript:Signout()";
     }
 }