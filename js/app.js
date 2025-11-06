const JAMES = 'james_with_dori';
const PAYPAL_ID = 'jamesdori';
const TIKTOK_LOGO = '<img src="img/tiktok.png" alt="TikTok" style="width: 2rem; height: 2rem;">';
const PAYPAL_LOGO = '<img src="img/paypal.png" alt="PayPal" style="height: 2rem;">';
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

const profilesNode = document.getElementById('profiles');
const wallNode = document.createElement('div');
wallNode.setAttribute('class', 'wall');

const paypalBoxNode = document.createElement('div');
paypalBoxNode.setAttribute('class', 'wall display-block');

const paypalMentionNode = document.createElement('div');
paypalMentionNode.innerHTML = `Please make sure to select the <p style="color: white; margin: 0;">“Sending to a friend”</p> option when you send the donation.`;
paypalMentionNode.style.fontSize = '1rem';
paypalMentionNode.style.textAlign = 'center';

const paypalDollarBoxNode = document.createElement('div');
paypalDollarBoxNode.id = 'paypal-dollar-box'

const paypalBtnNode = document.createElement('button');
paypalBtnNode.id = 'paypal-btn-node'
paypalBtnNode.innerHTML = PAYPAL_LOGO + ' Donation'

const paypalLinkNode = document.createElement('div');
paypalLinkNode.id = 'paypal';

const tiktokLinkNode = document.createElement('a');
tiktokLinkNode.setAttribute('href', 'https://www.tiktok.com/@' + JAMES);
tiktokLinkNode.setAttribute('class', 'wall display-block');
tiktokLinkNode.setAttribute('target', '_blank');
tiktokLinkNode.innerHTML = TIKTOK_LOGO + 'TikTok Profile';
tiktokLinkNode.style.textAlign = 'center';

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

paypalDollarBoxNode.appendChild(paypalMentionNode);
paypalBoxNode.appendChild(paypalDollarBoxNode);
paypalBoxNode.appendChild(paypalLinkNode);
paypalBoxNode.appendChild(paypalBtnNode);
wallNode.appendChild(paypalBoxNode);
profilesNode.appendChild(wallNode);

paypalBtnNode.addEventListener('click', () => window.open(`https://paypal.me/${PAYPAL_ID}`, '_blank'));