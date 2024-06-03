document.addEventListener('DOMContentLoaded', function () {
    var noti = document.querySelector('.navigation-items_list');
    var list = document.querySelector('.noti-item-list');
  
    noti.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent this event from bubbling up to the document
      list.style.display = list.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', function (event) {
      if (!list.contains(event.target) && list.style.display === 'block') {
        list.style.display = 'none';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const goalElement = document.querySelector('.mygoal1');
    if (goalElement) {
        goalElement.addEventListener('click', function() {
            window.location.href = 'my-goal-1.html';
        });
    }
});