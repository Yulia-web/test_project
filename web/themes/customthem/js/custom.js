(function ($) {
  Drupal.behaviors.portfolioBlock = {
    attach: function (context, settings) {

      $('.view-portfolio-filters > .view-content').once('add-all').prepend('<button class="button all" data-filter="*">All</button>');
      $('.view-portfolio-filters button.all').addClass('active');

      // init Isotope
      var $grid = $('.view-gallery-front > .view-content').isotope({
        itemSelector: '.views-row',
        layoutMode: 'fitRows'
      });

      // bind filter button click
      $('.view-portfolio-filters').once().on( 'click', 'button', function() {
        $('.view-portfolio-filters button').removeClass('active');
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).addClass('active');
      });

    }
  };
})(jQuery);
