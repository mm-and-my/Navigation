
jQuery.extend({  
    browser: function()   
    {  
    	var  
    	rwebkit = /(webkit)\/([\w.]+)/,  
    	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,  
    	rmsie = /(msie) ([\w.]+)/,  
    	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,
        browser = {},  
        ua = window.navigator.userAgent,  
        browserMatch = uaMatch(ua,rwebkit,ropera,rmsie,rmozilla);
        if (browserMatch.browser) {  
            browser[browserMatch.browser] = true;  
            browser.msie = browserMatch.browser;  
            browser.version = browserMatch.version;  
        }
        return { browser: browser };  
    }
});  
	function uaMatch(ua,rwebkit,ropera,rmsie,rmozilla)   
	{  
	   ua = ua.toLowerCase();  
	
	   var match = rwebkit.exec(ua)  
	               || ropera.exec(ua)  
	               || rmsie.exec(ua)  
	               || ua.indexOf("compatible") < 0 && rmozilla.exec(ua)  
	               || [];  
	
	   return {  
	       browser : match[1] || "",  
	       version : match[2] || "0"  
	   };  
	}

  
var $browser=$.browser();


try {
	if ($.browser.msie && $.browser.version == "6.0") {
		document.execCommand("BackgroundImageCache", false, true)
	}
} catch (e) {}
if (typeof Fai == "undefined") {
	Ele = {};
	Ele.top = top
}
Ele.openLog = false;
Ele.isDbg = function() {
	var a = Ele.Cookie.get("_fai_debug");
	return a == "true"
};
(function(FUNC, undefined) {
	FUNC.fkEval = function(data) {
		return eval(data)
	}
})(Ele);


Ele.isIE8 = function() {
    // console.log('webkit='+$browser.browser.webkit);
    // console.log('msie='+$browser.browser.msie);
    // console.log('version'+$browser.browser.version);
    if($browser.browser.webkit){
        return false;
    }else{
        if($browser.browser.version=="8.0"){
            return true;
        }
    }
    return false;
};

Ele.encodeUrl = function(a) {
	return typeof a === "undefined" ? "" : encodeURIComponent(a)
};