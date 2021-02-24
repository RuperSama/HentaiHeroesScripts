// ==UserScript==
// @name         HaremHeroes Login
// @namespace    HentaiHeroe-Helpers
// @updateURL    https://github.com/RuperSama/HentaiHeroesScripts
// @version      0.1
// @description  AutoLogin
// @author       RuperSama
// @match        http*://eggs-ext.kinkoid.com/*
// @match        http*://*.hentaiheroes.com/*
// @grant        none
// ==/UserScript==


/*
For this script to work you need to edit the "userEmail" and "userPass" value
here an example.
Current:
var userEmail = "";
var userPass = "";

Objetive:
var userEmail = "hi@gmail.com";
var userPass = "987987987";
*/

var userEmail = "";
var userPass = "";

//This function work for write the info in the text box for login
function login(){
    var email = document.getElementById("auth-email");
    var pass = document.getElementById("auth-password");
    email.value = userEmail;
    pass.value = userPass;
    //Make a delay before pressing the login button for be sure the text box are updated
    setTimeout(submitlogin,3000);
}

//This function just click the "login" button
function submitlogin()
{
    var btn = document.getElementById("submit-authenticate");
    btn.click();
}

//This function work for click in the "connect" button in the top-left corner
function hhFrame(){
    var iframe = document.getElementById("hh_game");
    if(iframe == null) return;
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var btns = innerDoc.getElementsByClassName("igreen");
    if(btns.length > 0){
        btns[0].click();
    }
}

function load(){
    try{
        if(pass == "" || userEmail == "") alert("Cant make autoLogin, you need to edit the script for add your userName and Password")
        else if(window.location.href.includes("kinkoid")) setTimeout(login,5000);
        else setTimeout(hhFrame,5000);
    }catch(error){
        setTimeout(load,2000);
    }
}

window.onload = load();