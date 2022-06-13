onload = () => {
    let transition = document.querySelector('#transition');
    setTimeout(() => {
        transition.classList.remove('transition__active');
    }, 350);
}