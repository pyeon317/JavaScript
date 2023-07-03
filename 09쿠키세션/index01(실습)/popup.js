

function addCookie(name, value){

    //시간설정
    var date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    console.log(date);

    //쿠키 생성

    var cookie = "";
    cookie += name + "=" + value + "; ";
    cookie += "expires="+ date.toUTCString() + "; path=/";

    document.cookie = cookie;
}

//쿠키확인하기
function getCookie(name){
    var arr = document.cookie.split('; ');
    
    if(arr.length != 0){
    
        for(var i = 0; i < arr.length; i++){
            
            if(arr[i].indexOf(name + "=") != -1){
                return true;//쿠키가 있다는 뜻
            }
         }
    }
}