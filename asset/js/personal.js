$(document).ready(function (){
    function activeTab(obj){
        $('.contain .nav .menu ul li a').removeClass('active');

        $(obj).addClass('active');

        var id = $(obj).attr('href');

        $('.tab-item').hide();

        $(id).show();
    }

    $('.contain .nav .menu ul li a').click(function(){
        activeTab(this);
    });
    activeTab($('.contain .nav .menu ul li:first-child a'));
})