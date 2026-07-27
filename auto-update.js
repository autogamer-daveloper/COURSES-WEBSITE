(function() {
    let url = window.location.href.split('?')[0];
    let newUrl = url + '?t=' + new Date().getTime();
    
    if (window.location.href !== newUrl) {
        window.location.replace(newUrl);
    }
})();