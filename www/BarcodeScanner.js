var exec = require('cordova/exec');

var myFunc = function(){};

myFunc.prototype.scan = function () {
    exec(
        function(message){},
        function(message){},
        'BarcodeScanner', 'scan', []);
};

myFunc.prototype.show = function (msg) {
    document.dispatchEvent(new CustomEvent("barcodescanned", {
        detail: msg
    }));
};

myFunc.prototype.scanSetting = function (para) {
exec(
        function(message){},
        function(message){},
        'BarcodeScanner', 'scanSetting', para);

};
var func = new myFunc();
module.exports = func;


