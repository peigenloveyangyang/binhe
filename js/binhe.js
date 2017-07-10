//音乐控制
$(function(){
    //图片预加载
    var imgArr=[
        'img/1-1.gif',
        'img/1-2.png',
        'img/1-3.jpg',
        'img/2-1.gif',
        'img/2-2.png',
        'img/2-3.png',
        'img/2-4.png',
        'img/2-5.png',
        'img/2-6.png',
        'img/2-7.png',
        'img/3-1.gif',
        'img/3-2-1.png',
        'img/3-3.png',
        'img/3-4.png',
        'img/3-5.png',
        'img/3-6.png',
        'img/3-7.png',
        'img/3-8.png',
        'img/4-1.gif',
        'img/4-2.gif',
        'img/4-3.png',
        'img/4-4.png',
        'img/4-5.png',
        'img/4-6.jpg',
        'img/5-1.gif',
        'img/5-2.png',
        'img/5-3.png',
        'img/5-4.png',
        'img/5-5.png',
        'img/5-6.png',
        'img/5-7.jpg',
        'img/6-1.gif',
        'img/6-2.gif',
        'img/6-3.png',
        'img/6-4.png',
        'img/6-5.png',
        'img/6-6.png',
        'img/7-1.gif',
        'img/7-2.gif',
        'img/7-3.png',
        'img/7-4.png',
        'img/7-5.png',
        'img/7-6.png',
        'img/7-7.png',
        'img/7-8.jpg',
        'img/8-1.png',
        'img/8-2.png',
        'img/8-3.png',
        'img/8-4.png',
        'img/8-5.png',
        'img/8-6.png',
        'img/8-7.jpg',
        'img/logo.png',
        'img/mus.png',
        'img/mus2.png',
        'img/next.png',
        'mus/bg.mp3',
        'img/bg1.png',
        'img/bg2.jpg'
    ];

    var L = imgArr.length;
    var startNum = 0;
    for(var i =0;i<L;i++){
        var imgObj = new Image();
        imgObj.src = imgArr[i];
        imgObj.onload = function(){
            startNum++;
            var percent = (startNum/L).toFixed(2)*100+"%";
            $('.loading span').html(percent);
            if(startNum == L-1){
                $(".loading").hide();
            }
        }
    }
});

$("#mus1").click(function () {
    if($("#mus-bg")[0].paused){
        $("#mus-bg")[0].play();
        $("#mus1").css('opacity','1');
        $("#mus2").css('opacity','0');
    }
    else{
        $("#mus-bg")[0].pause();
        $("#mus1").css('opacity','0');
        $("#mus2").css('opacity','1');
    }
});

$("#con1btn").click(function () {
    $("#bg1").css('display','block');
    $("#bg2").css('display','block');
});
$("#bg2").click(function () {
    $("#bg1").css('display','none');
    $("#bg2").css('display','none');
});
$("#bg1").click(function () {
    $("#bg1").css('display','none');
    $("#bg2").css('display','none');
});