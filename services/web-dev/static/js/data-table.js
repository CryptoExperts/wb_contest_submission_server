jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "fruit-pre": function ( a ) {
        if (a.endsWith('&nbsp;🍓') || a.endsWith('&nbsp;🍌')) {
            a = a.substring(a, a.length - 8);
        }
        return parseFloat(a);
    },
} );

(function(crx_wb, $, undefined) {
    $(document).ready(function() {
        $('.data-table').each(function() {
            col_to_sort = $(this).find('.column-to-sort-first');
            if (col_to_sort.length == 0) {
                return;
            }
            col_to_sort_index = col_to_sort.parent().children().index(col_to_sort);
            if (col_to_sort.hasClass('asc')) {
                order = 'asc';
            } else {
                order = 'desc';
            }
            $(this).DataTable({
                "pageLength": 25,
                "order": [[ col_to_sort_index, order ]],
                "columnDefs": [
                    { "orderable": false, "targets": 'no-sort' }
                ],
            });
        });
    });
}(window.crx_wb = window.crx_wb || {}, jQuery));
