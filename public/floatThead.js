function table(action){
    if(action == 'init'){
        init()
    } else if(action == 'remove'){
        remove()
    }
}



function init(){
    $(() => $('table').floatThead());
    var $table = $('table.demo');
    $table.floatThead({
        scrollContainer: function($table){
            return $table.closest('.wrapper');
        }
    });
}
table('init')