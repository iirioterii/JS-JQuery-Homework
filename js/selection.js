(function($){

    console.log($('ul li:last').text());
    console.log($('li:last').text());
    console.log($('#main').parents('ul').find('li:last').text());
    console.log($('#main').parent().parent().find('li:last').text());

})(jQuery);

var c = document.getElementById('main')
                .parentNode
                .parentNode
                .lastElementChild
                .innerText;
console.log(c);
