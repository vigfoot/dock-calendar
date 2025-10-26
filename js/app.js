const JAMES = 'james_with_dori';
const TIKTOK_LOGO = '<img src="img/tiktok.png" alt="TikTok" style="width: 2rem; height: 2rem;">';
const PAYPAL_LOGO = '<img src="img/paypal.png" alt="PayPal" style="width: 2rem; height: 2rem;">';

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

const url = 'https://www.tiktok.com/@' + JAMES;
const proxy = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);

let xhr = new XMLHttpRequest();
xhr.open('GET', proxy);
xhr.onreadystatechange = res => {
    if (xhr.readyState !== xhr.DONE || xhr.status > 210) return;

    const html = xhr.responseText;

    const img = html.match(/property="og:image" content="([^"]+)"/)?.[1];
    const name = html.match(/property="og:title" content="([^"]+)"/)?.[1];
    const bio = html.match(/property="og:description" content="([^"]+)"/)?.[1];

    console.log("프로필 이미지:", img);
    console.log("닉네임:", name);
    console.log("소개:", bio);

    const profilesNode = document.getElementById('profiles');
    const wallNode = document.createElement('div');
    wallNode.setAttribute('class', 'wall');

    const paypalLinkNode = document.createElement('a');
    paypalLinkNode.setAttribute('href', 'https://paypal.me/vigfoot');
    paypalLinkNode.setAttribute('class', 'wall display-block');
    paypalLinkNode.setAttribute('target', '_blank');
    paypalLinkNode.innerHTML = PAYPAL_LOGO + 'PayPal - vigfoot';

    const tiktokLinkNode = document.createElement('a');
    tiktokLinkNode.setAttribute('href', 'https://www.tiktok.com/@james_with_dori');
    tiktokLinkNode.setAttribute('class', 'wall display-block');
    tiktokLinkNode.setAttribute('target', '_blank');
    tiktokLinkNode.innerHTML = TIKTOK_LOGO + 'TikTok Profile';

    const imageNode = document.createElement('img');
    imageNode.setAttribute('class', 'display-block');
    imageNode.setAttribute('alt', 'profile-image');
    imageNode.setAttribute('src', 'favicon.ico');

    const titleNode = document.createElement('p');
    titleNode.innerHTML = 'james';

    const bioNode = document.createElement('div');
    bioNode.innerHTML = 'not yet bio';

    wallNode.appendChild(imageNode);
    wallNode.appendChild(paypalLinkNode);
    wallNode.appendChild(tiktokLinkNode);
    wallNode.appendChild(titleNode);
    wallNode.appendChild(bioNode);
    profilesNode.appendChild(wallNode);
}

xhr.send();

