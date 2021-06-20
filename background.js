chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: details.url + 
                (details.url.indexOf("?theme=dark") == -1 ? "?theme=dark" : "")
        };
    },
    {urls: ['*://*.instagram.com/*'], types: ['main_frame']},
    ['blocking']
);