function imgResize() {
    $('.square').each(function() {  
        $x = $(this).width();
        $x += 30;
        $(this).height($x);
        $width = $(this).children('img').width();
        $height = $(this).children('img').height();
        if( $width > $height ){
            $left = ($width - $height) * $x / 2 / $x;
            $(this).children('img').height($x);
            $(this).children('img').css({left: - $left});
        }else{
            $top = ($height - $width) * ( $x - 30 ) / 2 / $x;
            $(this).children('img').width($x);
            $(this).children('img').css({top: - $top});
        } 
    });
}
$(document).ready(function() {
    imgResize();
});
$(window).resize(function() {
    imgResize();
});
$( window ).on( "load", function() {
    imgResize();
});