var mainMenuOpenButton = document.querySelector(".main-header__menu-button");
var mainMenuCloseButton = document.querySelector(".main-nav__close-button");
var mainMenu = document.querySelectorAll(".main-nav__link");

if (screen.width < 768) {
    for (var i = 0; i < mainMenu.length; i++) {
        mainMenu[i].classList.add("main-nav__link--closed");
    }

        mainMenuOpenButton.classList.remove("main-header__menu-button--hide");

        mainMenuOpenButton.addEventListener("click", function (evt) {
            evt.preventDefault();
            for (var i = 0; i < mainMenu.length; i++) {
                mainMenu[i].classList.remove("main-nav__link--closed");
            }
            mainMenuOpenButton.classList.add("main-header__menu-button--hide");
            mainMenuCloseButton.classList.remove("main-nav__close-button--hide");
        });

        mainMenuCloseButton.addEventListener("click", function (evt) {
            evt.preventDefault();
            for (var i =0; i < mainMenu.length; i++) {
                mainMenu[i].classList.add("main-nav__link--closed");
            }
            mainMenuCloseButton.classList.add("main-nav__close-button--hide");
            mainMenuOpenButton.classList.remove("main-header__menu-button--hide");
        });
}
