// ==UserScript==
// @name         HaremHeroes Login
// @namespace    https://github.com/Roukys/HHauto
// @version      0.2
// @description  AutoLogin
// @author       RuperSama
// @match        http*://eggs-ext.kinkoid.com/*
// @match        http*://*.hentaiheroes.com/*
// @match        http*://*.comixharem.com/*
// @grant        none
// ==/UserScript==

var userEmail = "";
var userPass = "";
var timerRefresh = null;
function login(){
    var email = document.getElementById("auth-email");
    var pass = document.getElementById("auth-password");
    if(email != null) email.value = userEmail;
    if(pass != null)pass.value = userPass;
    setTimeout(submitlogin,3000);
}

function submitlogin()
{
    var btn = document.getElementById("submit-authenticate");
    var btn2 = document.getElementById("sso-submit");
    try{btn2.click();}catch(error){}
    try{btn.click();}catch(error){}
}

function hhFrame(){
    var iframe = document.getElementById("hh_game");
    if(iframe == null) return;
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var btns = innerDoc.getElementsByClassName("igreen");
    if(btns.length > 0){
        btns[0].click();
    }
}

function refresh(){
    if(timerRefresh == null){
        timerRefresh = new Date();
    }
    var nDate = new Date();
    var diff = nDate.getTime() - timerRefresh.getTime();
    diff = diff / (1000 * 60 * 30)
    if(diff > 1){
        document.location.reload();
    }
    else{
        setTimeout(refresh,5000);
    }
}

function load(){
    try{
        refresh();
        if(window.location.href.includes("kinkoid")){
            setTimeout(login,5000);
        }
        else{
            setTimeout(hhFrame,5000);
        }
    }catch(error){
        setTimeout(load,2000);
    }

}

window.onload = load();
