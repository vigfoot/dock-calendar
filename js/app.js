const unit = ' seconds';
setInterval(() => {
    let date = new Date();
    document.querySelector('#real-time > .hours').innerText = date.getHours();
    document.querySelector('#real-time > .minutes').innerText = date.getMinutes();
    document.querySelector('#real-time > .seconds').innerText = date.getSeconds();

    document.querySelectorAll('#real-time > .time-unit').forEach((node, key) => {
        if (node.innerText.length === 2) return;
        node.innerText = '0' + node.innerText;
    });

    const reloadTimeNode = document.getElementById('reload-time');
    if (reloadTimeNode.innerText === 0 + unit) {
        location.replace(location.origin + '?nocache=' + Date.now());

    } else {
        reloadTimeNode.innerText = Number(reloadTimeNode.innerText?.replace(unit, '')) - 1 + unit;

    }
}, 1000);