__cmp('getVendorConsents',null,function (x,y) {
    if (typeof googletag.pubads == 'function') {
        if(x.purposeConsents && x.purposeConsents[1] && x.purposeConsents[3]) { //consent
            googletag.pubads().setRequestNonPersonalizedAds(0);
            console.log('consent');
        } else {
            googletag.pubads().setRequestNonPersonalizedAds(1);
            console.log('no consent');
        }
        //googletag.pubads().refresh();
    }
});

// tag gpt /////////////////////////
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement("script");
gads.async = true;
gads.type = "text/javascript";
var useSSL = "https:" == document.location.protocol;
gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
var node =document.getElementsByTagName("script")[0];
node.parentNode.insertBefore(gads, node);
})();
//var crtg_split = (crtg_content || '').split(';');
//crtg_bnzm_split = (crtg_content_bnzm || '').split(';');
//fine head tag gpt /////////////////////////////////////

function refreshTag(e) {
    if (e == 'flashes') {
        if (typeof googletag.pubads == 'function') {
            googletag.pubads().refresh([slot1]);
        }
    } else {
        if( (ilpostgal.imgIndex % 2) == 0 && ilpostgal.imgIndex > 1 ) {
            if (typeof googletag.pubads == 'function') {
                googletag.pubads().refresh([slot1]);
            }
        }
    }

}

googletag.cmd.push(function() {
    if (typeof noskin !== 'undefined') { // se la variabile noskin e' settata
            googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/Top', [[320, 50]], 'div-gpt-ad-Top').addService(googletag.pubads());
    } else { // se la variabile noskin non c'e'
        if (typeof flashes !== 'undefined') { // se siamo in flashes tolgo la strip
            googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/Top', [[1, 1]], 'div-gpt-ad-Top').addService(googletag.pubads());
        } else {
            googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/Top', [[320, 50], [320, 100], [1, 1]], 'div-gpt-ad-Top').addService(googletag.pubads());
        }
    }

    if (isMobileDevice() == false && typeof showMaxTicker !== 'undefined' && showMaxTicker == "true") {
    	googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/MaxTicker', [[728, 90], [970, 250], [990, 30], [990, 250]], 'div-gpt-ad-MaxTicker').addService(googletag.pubads());
    }

    // Foglia + box
    if (typeof custom_adv !== 'undefined') { // se c'e' custom_adv non definisco lo slot del box perche' c'e' l'adv personalizzato
    } else {
    	//if (typeof flashes == 'undefined') {
    	//console.log("uno");
		slot1 = googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/MPU_Top', [[300, 600], [300, 250]], 'div-gpt-ad-MPU_Top').addService(googletag.pubads());
		$('#main').on('slide-change', function (e){ // refresh allo slide delle gallery
		    refreshTag();
		});
        //}
    }

    if (typeof showTextbox_1 !== 'undefined' && showTextbox_1 == "true") {
    	//alert("TextBox");
    	googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/Textbox_1', [300, 100], 'div-gpt-ad-Textbox_1').addService(googletag.pubads());
    }

    //if (document.querySelector('.adv_inread') !== null) {
    if ($(".adv_inread").length > 0) {
        googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/Inread', [1, 1], 'div-gpt-ad-Inread').addService(googletag.pubads());
    }

    //if (document.querySelector('.adv_bottom') !== null) {
    if ($(".adv_bottom").length > 0) {
        googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/MPU_Bottom', [300, 252], 'div-gpt-ad-MPU_Bottom').addService(googletag.pubads());
    }    

    if (typeof showMPU_Middle !== 'undefined' && showMPU_Middle == "true") {
    	googletag.defineSlot('/57491254/ilpost.it/' + sezione + '/MPU_Middle', [300, 251], 'div-gpt-ad-MPU_Middle').addService(googletag.pubads());
    }
    // Out of page
    googletag.defineOutOfPageSlot('/57491254/ilpost.it/' + sezione + '/Overlay', 'div-gpt-ad-Overlay').addService(googletag.pubads());

    //if (getCookie(POLICY_COOKIE_NAME) != "true") {
    //    googletag.pubads().setCookieOptions(1);
    //} else {
        //googletag.pubads().setCookieOptions(0);
    //}
    
    //window.__cmp("addEventListener",["consent",fireGoogle,false],null);


    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().enableVideoAds();
    googletag.companionAds().setRefreshUnfilledSlots(true);

    googletag.pubads().disableInitialLoad();
    googletag.enableServices();

    //GMN
	//if (getCookie(POLICY_COOKIE_NAME) != "true") {
		if (typeof showMPU_Middle !== 'undefined' && showMPU_Middle == "true") {
			googletag.cmd.push(function() { googletag.display('div-gpt-ad-MPU_Middle'); });
		}
		if (typeof showTextbox_1 !== 'undefined' && showTextbox_1 == "true") {
			googletag.cmd.push(function() { googletag.display('div-gpt-ad-Textbox_1'); });
		}
    //}
    
});

document.write("<div id='div-gpt-ad-Top' class='gpt-new'>");
googletag.cmd.push(function() { googletag.display('div-gpt-ad-Top'); });
document.write("</div>");

document.write("<div id='div-gpt-ad-Overlay' class='gpt-new'>");
googletag.cmd.push(function() { googletag.display('div-gpt-ad-Overlay'); });
document.write("</div>");



