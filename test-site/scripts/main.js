var addBtn = document.getElementById('add');
var tab = document.querySelector('table');
var limBtn = document.getElementById('dlim');

function getRemaining() {
    var rem = document.getElementById('rem');
    var tot = document.getElementById('total');
    var dlim = document.getElementById('limit');

    rem.children[1].textContent = parseInt(dlim.children[1].textContent) - parseInt(tot.children[1].textContent);
    rem.children[2].textContent = parseInt(dlim.children[2].textContent) - parseInt(tot.children[2].textContent);
    rem.children[3].textContent = parseInt(dlim.children[3].textContent) - parseInt(tot.children[3].textContent);
    rem.children[4].textContent = parseInt(dlim.children[4].textContent) - parseInt(tot.children[4].textContent);
    rem.children[5].textContent = parseInt(dlim.children[5].textContent) - parseInt(tot.children[5].textContent);

    if(rem.children[1].textContent < 0)
    alert('You are exceeding your calorie limit');

}

addBtn.onclick = function() {    
    var row = document.createElement('tr');
    var tot = document.getElementById('total');

    var col = document.createElement('td');
    var foodName = document.getElementById('foodname');
    col.textContent = foodName.value;
    row.appendChild(col);

    var col = document.createElement('td');
    var calories = document.getElementById('cal');
    col.textContent = calories.value;
    tot.children[1].textContent = parseInt(tot.children[1].textContent) + Number(calories.value);
    row.appendChild(col);

    var col = document.createElement('td');
    var carbs = document.getElementById('car');
    col.textContent = carbs.value;
    tot.children[2].textContent = parseInt(tot.children[2].textContent) + Number(carbs.value);
    row.appendChild(col);

    var col = document.createElement('td');
    var fat = document.getElementById('fat');
    col.textContent = fat.value;
    tot.children[3].textContent = parseInt(tot.children[3].textContent) +  Number(fat.value);
    row.appendChild(col);

    var col = document.createElement('td');
    var protein = document.getElementById('pro');
    col.textContent = protein.value;
    tot.children[4].textContent = parseInt(tot.children[4].textContent) +  Number(protein.value);
    row.appendChild(col);

    var col = document.createElement('td');
    var sugar = document.getElementById('sug');
    col.textContent = sugar.value;
    tot.children[5].textContent = parseInt(tot.children[5].textContent) + Number(sugar.value);
    row.appendChild(col);

    getRemaining();


    var body = tab.lastElementChild;
    var arr = tab.firstElementChild;

    body.insertBefore(row, arr.lastElementChild.previousElementSibling.previousElementSibling);
}

limBtn.onclick = function(){
    var dlim = document.getElementById('limit');

    var dcalories = document.getElementById('dcal');
    dlim.children[1].textContent = Number(dcalories.value);

    var dcarbs = document.getElementById('dcar');
    dlim.children[2].textContent = Number(dcarbs.value);

    var dfat = document.getElementById('dfat');
    dlim.children[3].textContent = Number(dfat.value);

    var dprotien = document.getElementById('dpro');
    dlim.children[4].textContent = Number(dprotien.value);

    var dsugar = document.getElementById('dsug');
    dlim.children[5].textContent = Number(dsugar.value);

    getRemaining();
}

 var Url = window.location.href;

 var Url = Url.split('?');
 var det = Url[1].split('&');
 var fin = [];
 for(let i = 0; i < det.length; i++)
 {
     fin[i] = det[i].split('=')[1]
 }

 var welText = document.getElementById('welcome');
 welText.textContent += fin[0];

 /* Formula for Calorie count from age, height, weight CAL = (HGT/WGT) * AGE * 50 */

    var CAL  = Number(Math.floor( (fin[2] / fin[3]) * fin[1] * 50) );
    var cal = document.getElementById('dcal');
    cal.value = CAL;

    








































z




















/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/index.jpeg') {
        myImage.setAttribute ('src', 'images/download.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/index.jpeg');
    }

}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + 's totem';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 's totem';
}

myButton.onclick = function() {
    setUserName();
}
*/
