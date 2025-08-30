const unit = ' seconds';
setInterval(() => {
    let date = new Date();
    document.querySelector('#real-time > .hours').innerText = date.getHours();
    document.querySelector('#real-time > .minutes').innerText = date.getMinutes();
    document.querySelector('#real-time > .seconds').innerText = date.getSeconds();

    document.querySelector('#real-time-korea > .hours').innerText = date.getUTCHours() + 9;
    document.querySelector('#real-time-korea > .minutes').innerText = date.getUTCMinutes();
    document.querySelector('#real-time-korea > .seconds').innerText = date.getUTCSeconds();

    document.querySelectorAll('#real-time > .time-unit, #real-time-korea > .time-unit').forEach((node, key) => {
        if (node.innerText.length === 2) return;
        node.innerText = '0' + node.innerText;
    });

}, 1000);