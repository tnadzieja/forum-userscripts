// ==UserScript==
// @name         hf auto-rep
// @namespace    https://github.com/tnadzieja
// @version      1.0
// @description  rep all them niggas lmaoo
// @author       https://github.com/tnadzieja
// @match        https://hackforums.net/memberlist.php
// @grant        none
// ==/UserScript==

(function() {
    var minRep = 15;
    'use strict';
    for(var x = 0; x < 40; x++){
        var profile = document.getElementsByClassName("memberlistprofile")[x].innerHTML;
        var uid = profile.substring(profile.indexOf('uid=')+4, profile.indexOf('>')-1);
        var rep = document.getElementsByClassName("memberlistprofile")[x].innerText;
        rep = rep.substring(rep.indexOf('Popularity:')+12, rep.indexOf(' Posts:'));
        console.log(uid + ", " + rep);
        var button = '<div class="rep-button" style="display: inline-block;"><a href="javascript:MyBB.reputation(' + uid + ');" class="button click-me" style="display: initial;"><span>R</span></a></div>';
        if(Number(rep) > minRep && uid != "4086099") {
            document.getElementsByClassName("infothead-lower")[x].innerHTML+= button;
        }
    }
    gucci();

})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function gucci(){
    var reps = document.getElementsByClassName("click-me");
    var amount = reps.length;
    for(var x = 0; x < amount; x++) {
        reps[x].click();
        await sleep(2000);
        var y = document.getElementsByTagName("input").length;
        var add = document.getElementsByTagName("input")[y-1].outerHTML;
        if(add.includes("Update") == true) {
            $(".close-modal")[0].click();
            await sleep(4000);
        } else {
            $("input")[y-1].click();
            await sleep(2000);
            document.getElementsByClassName("close-modal")[0].click();
        }
    }
}
