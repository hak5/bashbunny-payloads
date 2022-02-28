function fullscreen() {
    let document_element;
    document_element = document.documentElement;
    document.querySelector('#fullscreen').style.display = "none";
    if (document_element.requestFullscreen) {
        document_element.requestFullscreen();
        document.querySelector('.password').focus();
    }
}