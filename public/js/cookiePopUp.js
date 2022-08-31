
    // // 쿠키 가져오기
    // var getCookie = function (cname) {
    //     var name = cname + "=";
    //     var ca = document.cookie.split(';');
    //     for(var i=0; i<ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0)==' ') c = c.substring(1);
    //         if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    //     }
    //     return "";
    // }

    // 12시간 기준 쿠키 설정하기  
    var setCookie = function (cname, cvalue, exdays) {
        var expirydate = new Date();
        expirydate.setTime(expirydate.getTime() + (exdays*12*60*60*1000));    
        var expires = "expires=" + expirydate.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    var popupClose = function(){
        if($("chkday").checked == true){
            setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $("#pop").hide();
    }
    
    $(document).ready(function(){
        cookiedata = document.cookie;
        //console.log(cookiedata);
        if(cookiedata.indexOf("close=Y")<0){
            $("#pop").show();
        }else{
            $("#pop").hide();
        }
        $("#close").click(function(){
            popupClose();
        });
    });