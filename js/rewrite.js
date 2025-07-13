let HOST_LIST = ['localhost', 'nogeek.cn']

// hostname + port
console.log('location:' + location);
console.log('location.host:' + location.host);
console.log('location.hostname:' + location.hostname);
console.log('location.href:' + location.href);
console.log('location:path' + location.path);
console.log('location:pathname:' + location.pathname);
console.log('location:protocol:' + location.protocol);



if (HOST_LIST.includes(location.hostname)) {
    console.log('yes include: ' + location.hostname);
} else {
    // todo: 未来可以做校验，非法域名下给他做跳转到另外的页面上
    // window.location.href = 'https://baidu.com'
}


window.setInterval(
    function () {
        console.log("rewrite check start ...")
        if (location.pathname === '/REWRITE_TO_UMLCN.html') {
            console.log('yes :  /REWRITE_TO_UMLCN.html');

            if (HOST_LIST.includes(location.hostname)) {
                console.log('yes include: ' + location.hostname);
                console.log('while to rewrite');
                window.location.href = 'https://umlcn.com';
                // window.open("https://umlcn.com");
            }
        }
    }, 1000);