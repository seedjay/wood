/**
 * ISO Custom JavaScript
 */
jQuery(document).ready(function ($) {
  // Accordions
  $('.accordion-container .collapse').on('hide.bs.collapse', function () {
    $(this).fadeOut();
  }).on('show.bs.collapse', function () {
    $(this).fadeIn();
  });

  // Navbars
  // Used on Header ISO (2011)
  $('.header .collapse').on('hide.bs.collapse', function () {
    $(this).parents('.header').removeClass('nav-open');
  }).on('show.bs.collapse', function () {
    $(this).parents('.header').addClass('nav-open');
  });

  // Adds a class (with more padding-top) to the .main.container below an opened nav-level1 menu (in nav-3levels for example)
  $('.header ul.nav-level1 > li.open').parents('.header').siblings('.main.container').first().addClass('level1-open-above');

  // Enable Hover for Bootstrap Nav Dropdowns
  // Using jQuery's event delegation..
  $(document).on('mouseenter', 'ul.navbar-nav li.dropdown.hover', function () {
    $(this).find('a').first().dropdown('toggle');
  }).on('mouseleave', 'ul.navbar-nav li.dropdown.hover.open', function () {
    $(this).removeClass('open');
  });
  // overwrite boostrap click event to allow links on dropdown menus
  $(document).on('mouseup', 'ul.navbar-nav li.dropdown.hover a', function () {
    if ($(this).attr('href')) {
      if ($(this).attr('target')=='_blank'){
        window.open($(this).attr('href'));
      } else {
        window.location.href = $(this).attr('href');
      }
    }
  });

  // Enable link to tab (https://github.com/twbs/bootstrap/issues/2415#issuecomment-4450768)
  if (location.hash) {
    var hash = location.hash;
    var hashPieces = hash.split('?');
    var activeTab = $('[href="' + hashPieces[0] + '"]');
    activeTab && activeTab.tab('show'); // jshint ignore:line
  }

  // Fancybox
  /*$('.fancybox').fancybox({
    helpers: {
      title: {
        type: 'inside'
      },
      overlay: {
        showEarly: false
      }
    }
  });

  $('.fancybox.width-100pct').fancybox({
    autoSize: true,
    scrolling: 'auto',
    fitToView: false,
    width: 'auto',
    maxWidth: '100%'
  });

  $('.fancybox.width-100pct-iframe').fancybox({
    autoSize: false,
    width: '100%',
    height: '100%',
    maxWidth: '100%'
  });

  // Bootstrap Datepicker
  $('.datepicker').datepicker({
    format: "yyyy/mm/dd",
    todayBtn: "linked",
    autoclose: true,
    todayHighlight: true
  });

  // Bootstrap datatables
  $('table[id^="datatable"]').DataTable({
    "paging": false,
    "info": false,
    "searching": false
  });

  // Selectize
  $("select.selectize").selectize({
    create: false,
    sortField: 'text',
    searchField: ['text', 'value']
  });*/

  // Off Canvas menu
  // Press on the off-canvas menu
  // Using jQuery's event delegation..
  $(document).on('click', '[data-toggle="offcanvas"]', function () {
    $('#offcanvas-menu').toggleClass('collapse');
    $(this).toggleClass('active');
    $('body > *:not(#offcanvas-menu):not(script)').toggleClass('offcanvas-active');

    // When offcanvas menu (iPhone resolution), we don't have hover but need to click
    $('#offcanvas-menu li.hasChildren.dropdown').removeClass("hover");

    // Expand each menu inPath that has children (handles data-toggle as well..)
    $('li.hasChildren.inPath').addClass('open').each(function () {
      var dataToggle = $(this).find('[data-toggle]');
      if (dataToggle.attr('data-toggle') === 'dropdown') {
        dataToggle.attr('data-toggle', 'null');
      }
      else if (dataToggle.attr('data-toggle') === 'null') {
        dataToggle.attr('data-toggle', 'dropdown');
      }
    });

    // Add dropdown button when #offcanvas-menu is activated (and remove when not)
    $('#offcanvas-menu:not(.collapse) ul li.hasChildren > a').append('<span class="offcanvas-dropdown-btn"><span class="caretIcon">></span></span>');
    $('#offcanvas-menu.collapse .offcanvas-dropdown-btn').remove();

    // Add a class "current" on the last active menu
    $('#offcanvas-menu:not(.collapse) li.active > a').last().addClass('current');

    // Press on the dropdown menu
    $('span.offcanvas-dropdown-btn').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).parent().parent().siblings().removeClass('open');
      $(this).parent().parent().toggleClass('open');
    });
  });

  // Initialize tokenfield for input with class .tokenfield
  /*$('input.tokenfield').tokenfield();*/
});

// Function that filters a list within '.filterList'
var filterList = function (filter, parent) {
  jQuery.expr[':'].Contains = function (a, i, m) {
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
  };
  if (filter) {
    $(parent).find(".filterList").find("a:not(:Contains(" + filter + "))").parent().hide();
    $(parent).find(".filterList").find("a:Contains(" + filter + ")").parent().show();
  } else {
    $(parent).find(".filterList").find("li").show();
  }
};
