// hamburger function
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function () {
  hamburger.classList.toggle('active-hamburger');
  document.documentElement.classList.toggle('removeScroll');
});

// accordion function
var accordionList = document.querySelectorAll('.accordion-list');
accordionList.forEach(function (list) {
  list.addEventListener('click',function () {
    if (list.classList.contains('active-accordion')) {
      list.classList.remove('active-accordion');
    } else {
      var activeList = document.querySelector('.active-accordion');
      if (activeList) {
        activeList.classList.remove('active-accordion');
      }
      list.classList.add('active-accordion');
    }
  });
});





















