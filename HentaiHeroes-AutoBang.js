// ==UserScript==
// @name         HH AutoBang
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       RuperSama, cossname, YotoTheOne
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
    // attempting to stop the script when boss bang event is completed, not properly tested :
        let url = window.location.href.split("?");
        if(url.length != 2){
            //console.log("Not on Boss Bang page.");
            return;
        }
        else if(url[1].slice(4, 19) != "boss_bang_event"){
            //console.log("Not on Boss Bang page.");
            return;
        }
        if(document.getElementsByClassName("boss-bang-event-info completed-event") != null){
            //console.log("Boss Bang event completed.");
            return;
        }
        let btn = document.getElementById("new-battle-skip-btn");
        if(btn != null){
            btn.click();
            //console.log("new-battle-skip-btn clicked");
        }
        btn = document.getElementById("start-bang-button");
        if(btn != null){
            btn.click();
            //console.log("start-bang-button clicked");
        }
        let btn_list = document.getElementsByClassName("blue_button_L");
        let lg = btn_list.length;
        if(lg > 1){
            for(let i = 0; i < lg; i++){
                //console.log(btn_list[i].id)
                if(btn_list[i].id == ""){
                    btn_list[i].click();
                    //console.log("blue_button_L clicked");
                    break;
                }
            }
        }
    }
    catch(e){
        console.log(e);
    }
    finally{
        setTimeout(startScript, 1000);
    }
}


window.onload = startScript();
