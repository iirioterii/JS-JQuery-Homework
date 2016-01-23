// плагины

// расскраска для таблиц
(function($){
    $.fn.tableStyler = function(params){
        // входные параметры
        var params = $.extend({
            thBgColor: '#4CAF50',
            thTxtColor: 'white',
            trEven: '#f2f2f2',
            trOdd: 'white',
            trHover: 'grey'
        }, params);
        return this.each(function(){
            // стили для таблицы
            $(this).css({
                'width': '100%',
                'text-align': 'center',
                'border-spacing': '2px'
            });
            // стили для th
            $(this).find('th').css({'background-color':params.thBgColor, 'color': params.thTxtColor});
            // стили для четных tr
            $(this).find('tr:even')
                .css('background-color', params.trEven)
                .hover(
                    function(){
                        $(this).css('background-color', params.trHover)
                    },
                    function(){
                        $(this).css('background-color', params.trEven)
                    }
                );
            // стили для нечетных tr
            $(this).find('tr:odd')
                .css('background-color', params.trOdd)
                .hover(
                    function(){
                        $(this).css('background-color', params.trHover)
                    },
                    function(){
                        $(this).css('background-color', params.trOdd)
                    }
                );

        });

    };

    // использование
    $(document).ready(function(){
        $(".test").tableStyler()
    });

})(jQuery);


// shake
(function($) {
    $.fn.shake = function (power) {
        this.each(function () {
            $(this).css("position", "relative");
            for (var x = 1; x < 4; x++) {
                $(this)
                    .animate({left: power}, 50)
                    .animate({left: 0}, 25);
            }
        });
        return this;
    };

    // импользование
    $(".target").click(function () {
        $(".target").shake(5);
    });
})(jQuery);




// sum
function sum (arg) {
    var sum = arg;
    // накапливаем счетчик, прибавляем каждое значение
    function func(num) {
        sum = sum + num;
        return func;
    }
    // преобразуем функцию число и возвращаем
    func.toString = function() {
        return sum;
    };
    return func;
}

console.log(sum(10)(20)(-20));

// sort
// функция сортировки таблицы
function tableSort(col) {
    // получаем у таблицы, tbody
    var tbody = tab.getElementsByTagName('tbody')[0];

    // делаем массив из тегов tr
    var rows = [].slice.call(tbody.rows);

    // сравниваем и сортируем
    rows.sort(function(a, b) {
        return a.cells[col].innerHTML > b.cells[col].innerHTML;
    });

    // добавляем отсортированные строки в tbody
    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
    // добавялем tbody в таблицу
    tab.appendChild(tbody);
}

// Получаем таблицу по id
var tab = document.getElementById('tab');

// По клику на таблицу, если кликнули по заголовку - начать сортировку
tab.onclick = function(event) {
    if (event.target.tagName = 'th') tableSort(event.target.cellIndex)
};

