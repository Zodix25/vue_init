var yt = yt || {};

yt.namespace = function() {
    var a = arguments,
        o = null,
        i, j, pkgFragments, rt, np;
    for(i = 0; i < a.length; i = i + 1) {
        pkgFragments = a[i].split(".");
        rt = pkgFragments[0];
        eval('if (typeof ' + rt + ' == "undefined"){' + rt + ' = {};} o = ' + rt + ';');
        np = rt;
        o.__namespace = rt;
        for(j = 1; j < pkgFragments.length; j = j + 1) {
            o[pkgFragments[j]] = o[pkgFragments[j]] || {};
            o = o[pkgFragments[j]];
            o.rt = o.rt + pkgFragments[j];
            np += '.' + pkgFragments[j];
            o.__namespace = np;
        }
    }
    return o;
};

yt.namespace("yt.run");
(function(run) {
    var browserType = "";
    var browserVesion = "";
    var _browserRedirect = function() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if(bIsIpad || bIsIphoneOs) {
            browserType = "ios";
            var temp = sUserAgent.split("os ");
            browserVesion = temp[1].substring(0, 1);
        } else if(bIsAndroid) {
            browserType = "android";
        } else if(bIsWM) {
            browserType = "winphone";
        } else {
            browserType = "";
        }
    };

    var Util = {
        slice: Array.prototype.slice
    };
    run.execfun = function() {
        var args = Util.slice.call(arguments);
        if(!args) {
            alert('arguments error');
        }
        try {
            var funName = args[0];
            var callBackName = args[1];
            var jsonData = args[2];
            
            if(browserType.length == 0) {
                _browserRedirect();
            }
            var jsonObject = {
                funName : funName,
                callBackName : callBackName
            };
            if (jsonData != undefined) {
                jsonObject["jsonData"] = jsonData;
            }    
            var parameterString = JSON.stringify(jsonObject);
            if(browserType == "ios") {
                prompt(parameterString);
            }
            if (browserType == "android") {
                phoneContact.publicInterface(parameterString);
            }
        } catch(e) {
            alert("" + e.message);
            alert("" + e.stack);
        }
    }

})(yt.run);
