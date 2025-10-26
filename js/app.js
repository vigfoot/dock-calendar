const unit = ' seconds';
setInterval(() => {
    let date = new Date();
    document.querySelector('.real-time > .hours').innerText = date.getHours();
    document.querySelector('.real-time > .minutes').innerText = date.getMinutes();
    document.querySelector('.real-time > .seconds').innerText = date.getSeconds();

    document.querySelector('.real-time.korea > .hours').innerText = date.getUTCHours() + 9 >= 24 ? date.getUTCHours() + 9 - 24 : date.getUTCHours() + 9;
    document.querySelector('.real-time.korea > .minutes').innerText = date.getUTCMinutes();
    document.querySelector('.real-time.korea > .seconds').innerText = date.getUTCSeconds();

    document.querySelectorAll('.real-time > .time-unit, .real-time.korea > .time-unit').forEach((node, key) => {
        if (node.innerText.length === 2) return;
        node.innerText = '0' + node.innerText;
    });
}, 1000);

let xhr = new XMLHttpRequest();
xhr.open('GET', '');
xhr.onreadystatechange = res => {
    if (xhr.readyState !== xhr.DONE || xhr.status > 210) return;

    const profilesNode = document.getElementById('profiles');
    const wallNode = document.createElement('div');
    wallNode.setAttribute('class', 'wall');

    const linkNode = document.createElement('a');
    linkNode.setAttribute('href', 'https://www.tiktok.com/@james_with_dori');
    linkNode.setAttribute('target', '_blank');

    const imageNode = document.createElement('img');
    imageNode.setAttribute('alt', 'profile-image');
    imageNode.setAttribute('src', 'favicon.ico');

    const titleNode = document.createElement('p');
    titleNode.innerHTML= 'james';

    const vioNode = document.createElement('div');
    vioNode.innerHTML= 'vio';

    linkNode.appendChild(imageNode);
    linkNode.appendChild(titleNode);
    linkNode.appendChild(vioNode);
    wallNode.appendChild(linkNode);
    profilesNode.appendChild(wallNode);
}

xhr.send();

