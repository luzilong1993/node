const fs = require('fs');

let phoneArr = ['华为', '小米', '红米', '锤子', 'oppo', '三星', '荣耀', 'vivo', '天际', '联想'];
let data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        "brand": phoneArr[Math.floor(Math.random() * 10)],
        "title": `${phoneArr[Math.floor(Math.random() * 10)]}${Math.floor(Math.random() * 10)}`,
        "price": Math.floor(Math.random() * 10000),
        "score": Math.floor(Math.random() * 100) / 10,
        "voteCnt": Math.floor(Math.random() * 100),
        "url": "www.baidu.com",
        "pid": `${Math.floor(Math.random() * 100000)}`
    })
}

fs.writeFile('./phone.json', JSON.stringify(data), (err) => {
    console.log(err);
})