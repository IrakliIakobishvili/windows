const Windows = {
    startMenu       : document.querySelector('#startMenu'),
    startMenuBtn    : document.querySelector('#startMenuBtn'),
    passwordInput   : document.querySelector('#passwordInput'),
    loginBtn        : document.querySelector('#loginBtn'),
    loginPage       : document.querySelector('#loginPage'),
    desktopPage     : document.querySelector('#desktopPage'),
    toggleMenu: function () {
        (Windows.startMenu.classList.contains('flex')) ? Windows.startMenu.classList.remove('flex') : Windows.startMenu.classList.add('flex');
    },
    login: function () {
        let enteredPassword = Windows.passwordInput.value.trim();
        if(enteredPassword !== "") {
            if(enteredPassword === "irakli123") {
                Windows.desktopPage.style.zIndex = 5;
            }
        }
    }
}

Windows.startMenuBtn.addEventListener('click',Windows.toggleMenu);
Windows.loginBtn.addEventListener('click',Windows.login);
document.addEventListener('keydown',function (e) {
    if(e.key === "Enter") {
        Windows.login();
    }
});