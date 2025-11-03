const JAMES = 'james_with_dori';
const TIKTOK_LOGO = '<img src="img/tiktok.png" alt="TikTok" style="width: 2rem; height: 2rem;">';
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
paypalMentionNode.innerText = `I'll give you `;

const paypalDollarBoxNode = document.createElement('div');
paypalDollarBoxNode.id = 'paypal-dollar-box'

const paypalDollarUnitNode = document.createElement('div');
paypalDollarUnitNode.id = 'paypal-dollar-unit'
paypalDollarUnitNode.innerText = '$'

const paypalDollarNode = document.createElement('input');
paypalDollarNode.setAttribute('type', 'number');
paypalDollarNode.setAttribute('min', '10');
paypalDollarNode.id = 'paypal-amount';
paypalDollarNode.value = '10';

const paypalLinkNode = document.createElement('div');
paypalLinkNode.id = 'paypal';

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

paypalDollarBoxNode.appendChild(paypalMentionNode);
paypalDollarBoxNode.appendChild(paypalDollarUnitNode);
paypalDollarBoxNode.appendChild(paypalDollarNode);
paypalBoxNode.appendChild(paypalDollarBoxNode);
paypalBoxNode.appendChild(paypalLinkNode);
wallNode.appendChild(paypalBoxNode);
profilesNode.appendChild(wallNode);

paypal.Buttons({
    createOrder: function(data, actions) {
        const amount = document.getElementById('paypal-amount').value;
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: amount
                },
                description: 'Payment for James'
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name +
                '\nAmount: $' + details.purchase_units[0].amount.value);
        });
    },
    onError: function(err) {
        console.error(err);
        alert('An error occurred during the transaction.');
    }
}).render('#paypal');