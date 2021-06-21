const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry : path.resolve(__dirname, 'index.js'), //번들 작업할 파일
    output : {
        path : path.resolve(__dirname, 'dist'), //번들화 된 파일 경로
        filename : 'bundle.js' // 번들 파일명

    },
    watch : true, //자동 번들화 작업 여부

    //추가 부분
    plugins: [
        new BrowserSyncPlugin({
            host : 'locallhost',
            port: 3000, // 포트 3000 사용( 이미 사용중이면 1씩 증가된 포트 사용)
            files : ['./dist/*.html'], // 해당 경로 내 html 파일이 자동으로 동기화 
            server : { baseDir : ['dist']} //server의 Base 디렉토리를 dist로 지정
        })
    ],
    module: {
        rules : [{

        }]
    }
}