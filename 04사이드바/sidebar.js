var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");


menuBtn.addEventListener('click', function () {

    console.log(sidenav.style.width);
    console.log(window.innerWidth);//브라우저의 너비

    var wid = sidenav.style.width;
    
    /* if(wid === ''||wid==='200px'){
        sidenav.style.width = '0px';
    }else{
        sidenav.style.width = '200px';
    } */


    if (window.innerWidth <= 767) {//모바일
        /* 모바일에서는 기본적으로 0인 상태이므로 반대임 */
        if (wid === '' || wid === '0px') {
            sidenav.style.width = '200px';
        } else {
            sidenav.style.width = '0px';
        }

    } else {//브라우저

        if (wid === '' || wid === '200px') {
            sidenav.style.width = '0px';
        } else {
            sidenav.style.width = '200px';
        }

    }
})