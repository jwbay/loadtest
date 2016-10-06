import * as http from 'http';

function request() {
    setTimeout(() => {
        const then = Date.now();
        http.request({
            localAddress: '127.0.0.1',
            port: 3000
        }, resp => {
            let data = '';
            resp.on('data', (chunk: string) => { });
            resp.on('end', () => {
                console.log((Date.now() - then) + 'ms');
            });
        }).end();
        process.nextTick(request);
    }, 10);
}

request();