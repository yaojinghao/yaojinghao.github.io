$(function () {
    var OriginTitle = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        // 解决pjax冲突bug
        if (document.title !== '(つェ⊂) 我藏好了哦~') {
            OriginTitle = document.title
        }
        if (document.hidden) {
            $('[rel="icon"]').attr('href', "/img/e.png");
            $('[rel="shortcut icon"]').attr('href', "/img/e.png");
            document.title = '(つェ⊂) 我藏好了哦~ ';
            clearTimeout(titleTime);
        } else {
            $('[rel="icon"]').attr('href', "/img/e.png");
            $('[rel="shortcut icon"]').attr('href', "/img/e.png");
            document.title = 'o(^▽^)o 被你发现啦~ ';
            titleTime = setTimeout(function () {
                document.title = OriginTitle;
            }, 2000);
        }
    });
})