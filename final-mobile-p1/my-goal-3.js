//update
document.addEventListener('DOMContentLoaded', function() {
    const goalElement = document.querySelector('.update');
    if (goalElement) {
        goalElement.addEventListener('click', function() {
            window.location.href = 'update.html';
         
        });
    }
});
//chart_analys
document.addEventListener('DOMContentLoaded', function() {
    const goalElement = document.querySelector('.chart_analys');
    if (goalElement) {
        goalElement.addEventListener('click', function() {
            window.location.href = 'my-goal-4.html';
         
        });
    }
});
//mygoal2
document.addEventListener('DOMContentLoaded', function() {
    const goalElement = document.querySelector('.mygoal2');
    if (goalElement) {
        goalElement.addEventListener('click', function() {
            window.location.href = 'my-goal-2.html';
            console.log("hello")
        });
    }
});