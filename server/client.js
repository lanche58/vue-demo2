const https = require('https');
https.get('https://www.imooc.com/search/hotwords', res => { 
    let data = '';
    // 接收数据，并不能一次性接收
    res.on('data', chunk => {
        data += chunk.toString();
    });
    // 接收完
    res.on('end', () => {
        const result = JSON.parse(data);
        console.log(result);
    });
});