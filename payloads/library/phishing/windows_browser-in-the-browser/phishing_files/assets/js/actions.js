var draggable;
draggable = document.querySelector('#draggable');

$('#draggable').draggable();

document.querySelector('#container-minimize').onclick = function() {
    draggable.classList.remove('w-75');
    draggable.classList.add('w-50');
}

document.querySelector('#container-maximize').onclick = function() {
    draggable.classList.remove('w-50');
    draggable.classList.add('w-75');
}

document.querySelector('#container-exit').onclick = function() {
    draggable.style.display = 'none';
    setTimeout(function() { location.reload();	}, 2000);
}