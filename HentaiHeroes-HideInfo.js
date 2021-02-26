// ==UserScript==
// @name         HaremHeroes HideInfo
// @namespace    HentaiHeroe-Helpers
// @updateURL    https://github.com/RuperSama/HentaiHeroesScripts
// @version      1.0
// @description  HideStuffs for the UI
// @author       RuperSama, cossname
// @match        http*://*.hentaiheroes.com/*
// ==/UserScript==


function modulePathOfAttractionHide(){
    let array = $('#path_of_attraction div.poa.container div.all-objectives .objective.completed');
    if (array.length == 0){
        return;
    }
    let lengthNeeded = $('.golden-block.locked').length > 0 ? 1 : 2;
    for (let i = array.length - 1; i >= 0; i--) {
        if ($(array[i]).find('.picked-reward').length == lengthNeeded){
            array[i].style.display = "none";
        }
    }
}

function moduleSimSeasonReward(){
    var nbReward;
    var arrayz = $('.rewards_pair');
    if ($("div#gsp_btn_holder[style='display: block;']").length){
        nbReward=1;
    }
    else{
        nbReward=2;
    }

    var obj;
    if (arrayz.length > 0) {
        for (var i2 = arrayz.length - 1; i2 >= 0; i2--) {
            obj = $(arrayz[i2]).find('.tick_s:not([style="display: none;"])');
            if (obj.length >= nbReward) {
                arrayz[i2].style.display = "none";
            }
        }
    }
}

function moduleTowerOfFame(){
    var table = document.getElementsByClassName("leadTable")[0];
    for(var i = 0; i < table.rows.length; i++){
        var row = table.rows[i];
        var challenges = row.childNodes[7].innerText;
        if(challenges == "3/3"){
            table.deleteRow(i);
        }
    }
}

function moduleBuildTeam(){
    var listGirls = document.getElementById("battle_team_girlslist");
    for(var i = 0; i < listGirls.childNodes.length; i++){
        var node = listGirls.childNodes[i];
        if(node.nodeName == "#text"){
            continue;
        }
        var rarity = node.getAttribute("rarity");
        if(rarity == "legendary"){
            continue;
        }
       node.remove();
    }
}

function moduleAd(){
    var ad = document.getElementById("iframe_wrapper");
    if(ad != null){
        ad.remove();
    }
}

function load()
{
    moduleAd();
    if(document.getElementsByClassName("path-event-preview-girls").length > 0){
        modulePathOfAttractionHide();
    }
    else if(document.getElementById("seasons_main_container") != null){
        moduleSimSeasonReward();
    }
    else if(document.getElementById("leagues_middle") != null){
        moduleTowerOfFame();
    }
    else if(document.getElementById("battle_team_girlslist") != null){
        moduleBuildTeam();
    }
    setTimeout(load,3000);
}

window.onload = load();