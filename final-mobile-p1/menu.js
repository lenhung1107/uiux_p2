document.addEventListener('DOMContentLoaded', function() {
    const goalElement = document.querySelector('.mygoal');
    if (goalElement) {
        goalElement.addEventListener('click', function() {
            window.location.href = 'my-goal-1.html';
        });
    }
});
///overview
document.addEventListener('DOMContentLoaded', function() {
    const goalElement = document.querySelector('.overview');
    if (goalElement) {
        goalElement.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    }
});