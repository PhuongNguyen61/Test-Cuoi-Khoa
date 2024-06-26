const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btnStart = $(".btn-start");
const btnReset = $(".btn-reset");
const dicesItem = $$(".figure:not(.figure-small) .figure-item");
const dices = $$(".figure-small .figure-item");
const figures = [
    {
        index: 0,
        image: './img/bau.png',
        percent: 16.6666,
        coin: 0,
    },
    {
        index: 1,
        image: './img/cua.png',
        percent: 16.6666,
        coin: 0,
    },
    {
        index: 2,
        image: './img/tom.png',
        percent: 16.6666,
        coin: 0,
    },
    {
        index: 3,
        image: './img/ca.png',
        percent: 16.6666,
        coin: 0,
    },
    {
        index: 4,
        image: './img/huou.png',
        percent: 16.6666,
        coin: 0,
    },
    {
        index: 5,
        image: './img/ga.png',
        percent: 16.6666,
        coin: 0,
    },
];


const user = {
    coin: 3,
    betTable: 1
}
function updateData() {
    dicesItem.forEach((e, index) => {
        let img = e.querySelector('.figure-item img');
        let labelCoin = e.querySelector('.figure-item span');
        img.src = figures[index].image;
        labelCoin.innerHTML = figures[index].coin;
    });
}
updateData();


const randomFigure = () => {
    let value = Math.random() * 100;
    console.log(value);
    let sum = 0;
    let element;
    for (let i = 0; i < figures.length; i++) {
        sum += figures[i].percent;
        if (sum > value) {
            element = figures[i];
            break;
        }
    }
    return element;
}


btnStart.onclick = () => {
    let wins = [];
    let t = 0;
    let timer = setInterval(() => {
        t += 1;
        if (t >= 100) {
            clearInterval(timer);
        } else {
            wins = [randomFigure(), randomFigure(), randomFigure()];
            dices[0].querySelector('img').src = wins[0].image;
            dices[1].querySelector('img').src = wins[1].image;
            dices[2].querySelector('img').src = wins[2].image;
        }
    }, 20);
}


dicesItem.forEach((e) => {
    e.onclick = (e) => {
        if (user.coin >= user.betTable) {
            let item = e.target.parentElement;
            user.coin -= user.betTable;
            figures[item.dataset.id].coin += user.betTable;
            updateData();
        }
    }
})


btnReset.onclick = () => {}