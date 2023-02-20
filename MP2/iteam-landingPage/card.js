const link = document.querySelector('.tour-tabs-nav-link');

// link.addEventListener('click', function() {
//   const targetId = this.getAttribute('href');
//   const targetTab = document.querySelector(targetId);
//   targetTab.classList.add('active');
// });
link.addEventListener('click', function changeActiveTourTab(tabId) {
    const tourTabs = document.querySelectorAll('.tour-tabs-nav-link');
    const selectedTab = document.querySelector(`#${tabId}`);
  
    tourTabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    selectedTab.classList.add('active');
  })


document.querySelectorAll('[data-toggle="card-slider"]').forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(button.getAttribute('data-target'));
      var action = button.getAttribute('data-action');
      if (action === 'prevSlide') {
        target.scrollLeft -= target.offsetWidth;
      } else if (action === 'nextSlide') {
        target.scrollLeft += target.offsetWidth;
      }
    });
  });
