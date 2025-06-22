const unit = ' seconds';
setInterval(() => {
    let date = new Date();
    document.querySelector('#real-time > .hours').innerText = date.getHours();
    document.querySelector('#real-time > .minutes').innerText = date.getMinutes();
    document.querySelector('#real-time > .seconds').innerText = date.getSeconds();

    const reloadTimeNode = document.getElementById('reload-time');
    if (reloadTimeNode.innerText === 0 + unit || reloadTimeNode.innerText === '') {
        reloadTimeNode.innerText = 60 + unit;
        history.pushState(null, null, location.href);

    } else {
        reloadTimeNode.innerText = Number(reloadTimeNode.innerText?.replace(unit, '')) - 1 + unit;

    }
}, 1000);