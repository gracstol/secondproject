(() => {
    const button = document.querySelector(".js-main-navigation__mobile-button");
    const list = document.querySelector(".js-main-navigation__list")

    const toggleClass = () => {
        list.classList.toggle("main-navigation__list--open");
    };

    button.addEventListener("click", toggleClass);
    list.addEventListener("click", toggleClass);
})();