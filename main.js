document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.avatar');

    avatar.addEventListener('click', function() {
        avatar.classList.add('bounce');
        
        // Remove the class after the animation completes to allow for repeated clicks
        avatar.addEventListener('animationend', function() {
            avatar.classList.remove('bounce');
        }, { once: true });
    });
});