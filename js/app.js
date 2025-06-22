const unit = ' seconds';
setInterval(() => {
    const reloadTimeNode = document.getElementById('reload-time');
    if (reloadTimeNode.innerText === 0 + unit) {
        reloadTimeNode.innerText = 60 + unit;
        location.reload();

    } else {
        reloadTimeNode.innerText = Number(reloadTimeNode.innerText?.replace(unit, '')) - 1 + unit

    }
}, 1000);
