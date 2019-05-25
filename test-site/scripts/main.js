var addBtn = document.getElementById('add');
var tab = document.querySelector('table');
var limBtn = document.getElementById('dlim');

/*Recalculates the total, remaining values for Calories, fats etc after every deletion, edition, addition or limit change */

var clock = document.getElementById('clock');

function displayTime() {
    var date = new Date()
    
    var dateFinal = date.getDate() + "/"  + date.getMonth() + "/" + date.getFullYear() ; 
    dateFinal = dateFinal + " - " +  date.getHours( )+ ":" +  date.getMinutes() + ":" +  date.getSeconds();
    clock.textContent = dateFinal;

}

setTimeout(displayTime, 1000);
function getTotal() {
    var rows = document.querySelectorAll('tr');

    for(let j = 1; j <= 5; j++)
    {
        rows[rows.length - 3].children[j].textContent = '0';
        for(let i = 1; i < rows.length - 3; i++)
        {
            rows[rows.length - 3].children[j].textContent =  parseInt(rows[rows.length - 3].children[j].textContent) + parseInt(rows[i].children[j].textContent);
        }
        rows[rows.length - 1].children[j].textContent = parseInt(rows[rows.length - 2].children[j].textContent) - parseInt(rows[rows.length - 3].children[j].textContent); 
    }

    if(rows[rows.length - 1].children[1].textContent < 0)
    alert('You are exceeding your calorie limit');
}

/* To add elements to the food table */

addBtn.onclick = function() {    
    var row = document.createElement('tr');

    var delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    var col = document.createElement('td');
    var foodName = document.getElementById('foodname');
    col.textContent = foodName.value;
    row.appendChild(col);

    var col = document.createElement('td');
    var calories = document.getElementById('cal');
    col.textContent = calories.value;
    row.appendChild(col);

    var col = document.createElement('td');
    var carbs = document.getElementById('car');
    col.textContent = carbs.value;
    row.appendChild(col);

    var col = document.createElement('td');
    var fat = document.getElementById('fat');
    col.textContent = fat.value;
    row.appendChild(col);

    var col = document.createElement('td');
    var protein = document.getElementById('pro');
    col.textContent = protein.value;
    row.appendChild(col);

    var col = document.createElement('td');
    var sugar = document.getElementById('sug');
    col.textContent = sugar.value;
    row.appendChild(col);

    row.appendChild(delBtn);

    /* For the delete button */

    delBtn.onclick = function (e) {
        var x = row.parentElement;
        x.removeChild(row);
        getTotal();
    }
/* For the edit button  hides and unhides the dialog box*/
    
    editBtn.onclick = function(e) {
        var item = document.getElementById('about');

        if(item) {
            if(item.className == 'hidden') {
                item.className = 'unhidden';
            }
            else {
                item.className = 'hidden';
            }
        }

        var newFoodName = document.getElementById('efood');
        row.children[0].textContent = newFoodName .value;

        var newCalories = document.getElementById('ecal');
        row.children[1].textContent = newCalories.value;
    
        var newCarbs = document.getElementById('ecar');
        row.children[2].textContent = newCarbs.value;
    
        var newFat = document.getElementById('efat');
        row.children[3].textContent = newFat.value;
    
        var newProtein = document.getElementById('epro');
        row.children[4].textContent = newProtein.value;
    
        var newSugar = document.getElementById('esug');
        row.children[5].textContent = newSugar.value;

        getTotal();
        
    }   
    row.appendChild(editBtn);

    var body = tab.lastElementChild;
    var arr = tab.firstElementChild;

    body.insertBefore(row, arr.lastElementChild.previousElementSibling.previousElementSibling);

    getTotal();
}

/* To add the limit values for calories, carbs, etc comes with precalculated prefilled values */

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

    getTotal();
}

/*Extract the values of Age, Height, Weight from URL */

var Url = window.location.href;

var Url = Url.split('?');
var det = Url[1].split('&');
var fin = [];
for(let i = 0; i < det.length; i++)
{
    fin[i] = det[i].split('=')[1]
}

/* Formula for Calorie count from age, height, weight CAL = (HGT/WGT) * AGE * 50 */

var CAL  = Number(Math.floor( (fin[2] / fin[3]) * fin[1] * 50) );

var dcal = document.getElementById('dcal');
dcal.value = CAL;

var dcar = document.getElementById('dcar');
dcar.value = fin[2]*10;

var dfat = document.getElementById('dfat');
dfat.value = fin[3]*10;

var dpro = document.getElementById('dpro');
dpro.value = fin[1]*20;

var dsug = document.getElementById('dsug');
dsug.value = fin[1]*30;


    





























