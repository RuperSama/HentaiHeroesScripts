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
    // attempting to stop the script when boss bang event is completed, not properly tested :
    if(document.getElementsByClassName("boss-bang-event-info completed-event") != null){
        return;
    }
    try{
        if(document.getElementById("new-battle-skip-btn") != null){
            document.getElementById("new-battle-skip-btn").click();
            //console.log("new-battle-skip-btn clicked");
        }
        if(document.getElementById("start-bang-button") != null){
            document.getElementById("start-bang-button").click();
            //console.log("start-bang-button clicked");
        }
        if(document.getElementsByClassName("blue_button_L").length > 1){
            for(i = 0; i <= document.getElementsByClassName("blue_button_L").length; i++){
                //console.log(document.getElementsByClassName("blue_button_L")[i].id)
                if(document.getElementsByClassName("blue_button_L")[i].id == ""){
                    document.getElementsByClassName("blue_button_L")[i].click();
                    //console.log("blue_button_L clicked");
                    break;
                }
            }
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
