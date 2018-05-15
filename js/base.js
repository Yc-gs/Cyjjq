/**
 * Created by hp on 2018/5/9.
 */
$(function () {
    $(".top-nav li").on("mouseover", function () {
        $(this).addClass('current').siblings().removeClass('current');
    })
});