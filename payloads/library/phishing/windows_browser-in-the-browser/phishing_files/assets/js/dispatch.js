var theme;

switch (BITB_THEME) {
    case 'dark':
        theme = ' bg-dark text-white';
        break;
    case 'light':
        theme = ' bg-light text-dark';
        break;
    default:
        theme = ' bg-dark text-white';
}

document.querySelectorAll('.row').forEach((row) => (row.className += theme));
document.querySelector('#title-text').innerText = BITB_TITLE;
document.querySelector('#url-input').value = BITB_URL;
document.querySelector('#phishing-iframe').src = ('./templates/' + BITB_TEMPLATE);