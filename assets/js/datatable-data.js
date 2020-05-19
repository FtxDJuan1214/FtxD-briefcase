(function ($) {
    'use strict';
    $(document).ready(function () {
        $('#example').DataTable({
            //DataTable Options
        });
        $('#general-table').DataTable({
            
            scrollCollapse: true,
            paging:         true,
            
        });
        $('#example-multi').DataTable({
            //DataTable Options
        });
        $('#general-table tbody').on( 'click', 'tr', function () {
            $(this).toggleClass('bg-gray-400');
        });     
           

    });

})(window.jQuery);
