const JAMES = 'james_with_dori';
const TIKTOK_LOGO = '<img src="img/tiktok.png" alt="TikTok" style="width: 2rem; height: 2rem;">';
const PAYPAL_LOGO = '<img src="img/paypal.png" alt="PayPal" style="width: 2rem; height: 2rem;">';
const PROFILE_IMAGE_DIR = 'img/james.jpeg';

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

// const url = 'https://www.tiktok.com/@' + JAMES;
// const proxy = "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(url);
// let xhr = new XMLHttpRequest();
// xhr.open('GET', proxy);
// xhr.onreadystatechange = res => {
//     if (xhr.readyState !== xhr.DONE || xhr.status > 210) return;
//
//     const html = xhr.response;
//
//     const img = html.match(/property="og:image" content="([^"]+)"/)?.[1];
//     const name = html.match(/property="og:title" content="([^"]+)"/)?.[1];
//     const bio = html.match(/property="og:description" content="([^"]+)"/)?.[1];

const profilesNode = document.getElementById('profiles');
const wallNode = document.createElement('div');
wallNode.setAttribute('class', 'wall');

const paypalLinkNode = document.createElement('a');
paypalLinkNode.setAttribute('href', 'https://paypal.me/vigfoot');
paypalLinkNode.setAttribute('class', 'wall display-block');
paypalLinkNode.setAttribute('target', '_blank');
paypalLinkNode.innerHTML = PAYPAL_LOGO + 'PayPal - vigfoot';

const tiktokLinkNode = document.createElement('a');
tiktokLinkNode.setAttribute('href', 'https://www.tiktok.com/@' + JAMES);
tiktokLinkNode.setAttribute('class', 'wall display-block');
tiktokLinkNode.setAttribute('target', '_blank');
tiktokLinkNode.innerHTML = TIKTOK_LOGO + 'TikTok Profile';

const imageNode = document.createElement('img');
imageNode.style.width = '10rem';
imageNode.style.height = '10rem';
imageNode.style.margin = '0 auto';
imageNode.style.borderRadius = '1rem';
imageNode.setAttribute('class', 'display-block');
imageNode.setAttribute('alt', 'profile-image');
imageNode.setAttribute('src', PROFILE_IMAGE_DIR);

const pontNode = document.createElement('p');
pontNode.style.color = 'white';
pontNode.style.margin = '1rem auto';
pontNode.innerText = `Welcome James's family`;

wallNode.appendChild(imageNode);
wallNode.appendChild(pontNode);
wallNode.appendChild(tiktokLinkNode);
wallNode.appendChild(paypalLinkNode);
profilesNode.appendChild(wallNode);
// }
//
// xhr.send();