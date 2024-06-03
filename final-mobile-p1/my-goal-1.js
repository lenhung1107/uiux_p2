document.addEventListener('DOMContentLoaded', function() {
    const goalElement = document.querySelector('.mygoal2');
    if (goalElement) {
        goalElement.addEventListener('click', function() {
            window.location.href = 'my-goal-2.html';
            console.log("hello")
        });
    }
});