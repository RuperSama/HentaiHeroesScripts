// ==UserScript==
// @name         HaremHeroes Sell
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sell all items in the inventory, Stop when a legendary items with good stats is in the first slot (User should sell or equip that item then refresh for the script continue)
// @author       RuperSama
// @match        http*://*.hentaiheroes.com/*
// @grant        none
// ==/UserScript==
function sell(){
    var continuar = false;
    try{
        //Check if the Armor is selected
        var armor = document.getElementsByClassName("armor selected");
        if(armor.length == 3)
        {
            //Get the stats of equiped items
            var statsItems = getItemsStats();
            var inventory = document.getElementsByClassName("inventory_slots")[0];
            var items = inventory.childNodes[0].childNodes;
            //Check if the inventory have items
            if(items.length == 0) continuar = false;
            for(var i = 0; i < items.length; i++){
                //Skip the node that only say "text" this nodes are created
                if(items[i].nodeName == "#text") continue;
                var rarity = items[i].getAttribute("rarity");
                //var clase = items[i].getAttribute("class");
                //If item is legendary make other checks before sell it
                if(rarity == "legendary"){
                    var diferencia = 0;
                    var json = JSON.parse(items[i].getAttribute("data-d"));
                    //The list is in order by "subtype" when is created because array start in pos 0, making "item.subtype-1" is the best way to access the equiped items information.
                    var equipado = statsItems[json.subtype-1]
                    diferencia = diferencia + (json.carac1 - equipado.c1);
                    diferencia = diferencia + (json.carac2 - equipado.c2);
                    diferencia = diferencia + (json.carac3 - equipado.c3);
                    diferencia = diferencia + (json.chance - equipado.ch);
                    diferencia = diferencia + (json.endurance - equipado.en);
                    //Check the stats of the item for sell and the equiped one
                    //If the item for sell have more stats AND sell for more then the script stop in other case the item is sold
                    if(diferencia > 0 && json.price > equipado.price) {
                        continuar = false;
                        alert("Item positivo: " + diferencia);
                        break;
                    }
                    else{
                        document.getElementsByClassName("green_text_button")[0].click();
                        continuar = true;
                        break;
                    }
                }
                else
                {
                    document.getElementsByClassName("green_text_button")[0].click();
                    continuar = true;
                    break;
                }
            }
        }
    }catch(error){
        //Lets hope never come here
        alert("Error al vender")
        console.log("Error el vender");
        return;
    }finally{
        //Because i cant find where the button for sell storage the item that is going to be sell resfresh the site for get all nodes clear
        if(continuar) location.reload();
        else return;
    }
}

function clearList(){
    statsItems = [];
}

function getItemsStats(){
    var statsItems = [];
    var items = document.getElementsByClassName("armor")[2].childNodes;
    for(var i = 0; i < items.length; i++){
        //Nodes with text are ignored, they are for visual things and dont have data
        if(items[i].nodeName == "#text") continue;
        //Desarm all the Json with the information of the items and save in list the important inf.
        var json = JSON.parse(document.getElementsByClassName("armor")[2].childNodes[i].getAttribute("data-d"));
        var item = {
            c1 : json.carac1,
            c2 : json.carac2,
            c3 : json.carac3,
            ch : json.chance,
            en : json.endurance,
            lvl : json.level,
            pr : json.price
        };
        statsItems.push(item);
    }
    return statsItems
}

function load(){
    if(window.location.pathname.includes("shop"))
    {
        if(document.getElementById("inventory") != null){
            setTimeout(sell(),2000);
            return;
        }
    }
}

window.onload = load();