"use strict";
if (!window.elevensight) {
    function elevensight() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        elevensight.queue.push(args);
    }
    elevensight.queue = [];
    window.elevensight = elevensight;
}
if (!document.getElementById('elevensight-widget')) {
    var js = document.createElement('script');
    js.id = 'elevensight-widget';
    js.src = 'https://app.11sight.com/assets/buttonv2-3a76a05d913124670e00e9634fc981a0a192f193feea29afa6ae759459325691.js';
    js.async = true;
    js.type = 'text/javascript';
    document.body.appendChild(js);

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@import url(\'https://iisight-fonts.s3.us-west-1.amazonaws.com/font.css\')';
    document.getElementsByTagName('head')[0].appendChild(style);
}

window.elevensightBtnConfig = {
    "debug_mode": null,
    "domain": "https://app.11sight.com",
    "delay": 0,
    "request_domain": "www.enbiosis.com",
    "force_show_form": null
};

! function() {
    window.elevensight('init', window.elevensightBtnConfig);
    document.addEventListener('turbolinks:render', function() {
        if (window.elevensightApp) {
            setTimeout(() => {
                window.elevensightApp.reloadButtons();
            }, 1000);
        }
    })
}();