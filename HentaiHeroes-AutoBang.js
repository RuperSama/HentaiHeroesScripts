// ==UserScript==
// @name         HH AutoBang
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       RuperSama
// @match        http*://*.haremheroes.com/*
// @match        http*://*.hentaiheroes.com/*
// @match        http*://*.gayharem.com/*
// @match        http*://*.comixharem.com/*
// @match        http*://*.hornyheroes.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=comixharem.com
// @grant        none
// ==/UserScript==

function startScript(){
    try{
        if(document.getElementById("start-bang-button") != null)
            document.getElementById("start-bang-button").click()
        if(document.getElementsByClassName("blue_button_L").length > 0)
            document.getElementsByClassName("blue_button_L")[0].click();
    }
    catch(e){
        var a = e;
    }
    finally{
        setTimeout(startScript, 1000);
    }
}






window.onload = startScript();
