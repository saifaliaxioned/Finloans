// hamburger function
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function () {
  hamburger.classList.toggle('active-hamburger');
});

// accordion function
var accordionList = document.querySelectorAll('.accordion-list');
accordionList.forEach(function (list) {
  list.addEventListener('click',function () {
    if (list.classList.contains('active-accordion')) {
      list.classList.remove('active-accordion');
    } else {
      // accordionList.forEach(function (list) {
      //   if (list.classList.contains('active-list')) {
      //     list.classList.remove('active-list');
      //   }
      // })
      var activeList = document.querySelector('.active-accordion');
      if (activeList) {
        activeList.classList.remove('active-accordion');
      }
      list.classList.add('active-accordion');
    }
  });
});





















