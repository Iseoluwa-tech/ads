function showMenu() {
    document.getElementById('menu').style.display = 'flex';
    document.querySelector('.hamburger').style.display = 'none';
    document.querySelector('.cancel').style.display = 'inline-block';
}

function hideMenu() {
    document.getElementById('menu').style.display = 'none';
    document.querySelector('.hamburger').style.display = 'inline-block';
    document.querySelector('.cancel').style.display = 'none';
}