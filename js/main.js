const dropItems = document.getElementById('caja-items')

new Sortable(dropItems, {
    animation: 350,
    dragClass: "mover",
});