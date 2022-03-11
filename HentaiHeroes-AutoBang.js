// ==UserScript==
// @name         HH AutoBang
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       RuperSama, cossname
// @match        http*://*.haremheroes.com/*
// @match        http*://*.hentaiheroes.com/*
// @match        http*://*.gayharem.com/*
// @match        http*://*.comixharem.com/*
// @match        http*://*.hornyheroes.com/*
// @updateURL    https://github.com/RuperSama/HentaiHeroesScripts/blob/main/HentaiHeroes-AutoBang.js
// @downloadURL  https://github.com/RuperSama/HentaiHeroesScripts/blob/main/HentaiHeroes-AutoBang.js
// @grant        none
// ==/UserScript==

function startScript(){
    try{
        if(document.getElementById("new-battle-skip-btn") != null){
            document.getElementById("new-battle-skip-btn").click()
        }
        if(document.getElementById("start-bang-button") != null){
            document.getElementById("start-bang-button").click()
            }
        if(document.getElementsByClassName("blue_button_L").length > 0){
            document.getElementsByClassName("blue_button_L")[0].click();
            }
    }
    catch(e){
        var a = e;
    }
    finally{
        setTimeout(startScript, 1000);
    }
}






window.onload = startScript();
