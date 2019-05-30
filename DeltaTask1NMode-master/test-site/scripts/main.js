var addBtn = document.getElementById('add');
var tab = document.querySelector('table');
var limBtn = document.getElementById('dlim');
var clock = document.getElementById('clock');

/* To display the time */
function displayTime() {
    var date = new Date()
    
    var dateFinal = date.getDate() + "/"  + date.getMonth() + "/" + date.getFullYear() ; 
    dateFinal = dateFinal + " - " +  date.getHours( )+ ":" +  date.getMinutes() + ":" +  date.getSeconds();
    clock.textContent = dateFinal;

/*To refresh the time every 1 sec */
    setTimeout(displayTime, 1000);
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


/*To refresh the time every 1 sec */
setTimeout(displayTime, 1000);

/*Recalculates the total, remaining values for Calories, fats etc after every deletion, edition, addition or limit change */
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

/* Status color changer for Calories */
    if(rows[rows.length - 1].children[1].textContent <= dcal.value && rows[rows.length - 1].children[1].textContent >= 0.3 * dcal.value)
    {
        var cell = rows[rows.length - 1].children[1];
        cell.style.backgroundColor = "green";
    }

    else if(rows[rows.length - 1].children[1].textContent >= 0 && rows[rows.length - 1].children[1].textContent <= 0.3 * dcal.value)
    {
        var cell = rows[rows.length - 1].children[1];
        cell.style.backgroundColor = "yellow";
    }

    else
    {
        var cell = rows[rows.length - 1].children[1];
        cell.style.backgroundColor = "red";
    }

/* Status color changer for Carbs */
    if(rows[rows.length - 1].children[2].textContent <= dcar.value && rows[rows.length - 1].children[2].textContent >= 0.3 * dcar.value)
    {
        var cell = rows[rows.length - 1].children[2];
        cell.style.backgroundColor = "green";
    }

    else if(rows[rows.length - 1].children[2].textContent >= 0 && rows[rows.length - 1].children[1].textContent <= 0.3 * dcar.value)
    {
        var cell = rows[rows.length - 1].children[2];
        cell.style.backgroundColor = "yellow";
    }

    else
    {
        var cell = rows[rows.length - 1].children[2];
        cell.style.backgroundColor = "red";
    }

/* Status color changer for fat */
    if(rows[rows.length - 1].children[3].textContent <= dfat.value && rows[rows.length - 1].children[3].textContent >= 0.3 * dfat.value)
    {
        var cell = rows[rows.length - 1].children[3];
        cell.style.backgroundColor = "green";
    }

    else if(rows[rows.length - 1].children[3].textContent >= 0 && rows[rows.length - 1].children[3].textContent <= 0.3 * dfat.value)
    {
        var cell = rows[rows.length - 1].children[3];
        cell.style.backgroundColor = "yellow";
    }

    else
    {
        var cell = rows[rows.length - 1].children[3];
        cell.style.backgroundColor = "red";
    }

/* Status color changer for Proteins */
    if(rows[rows.length - 1].children[4].textContent <= dpro.value && rows[rows.length - 1].children[4].textContent >= 0.3 * dpro.value)
    {
        var cell = rows[rows.length - 1].children[4];
        cell.style.backgroundColor = "green";
    }

    else if(rows[rows.length - 1].children[4].textContent >= 0 && rows[rows.length - 1].children[4].textContent <= 0.3 * dpro.value)
    {
        var cell = rows[rows.length - 1].children[4];
        cell.style.backgroundColor = "yellow";
    }

    else
    {
        var cell = rows[rows.length - 1].children[4];
        cell.style.backgroundColor = "red";
    }

/* Status color changer for Sugars */
    if(rows[rows.length - 1].children[5].textContent <= dsug.value && rows[rows.length - 1].children[5].textContent >= 0.3 * dsug.value)
    {
        var cell = rows[rows.length - 1].children[5];
        cell.style.backgroundColor = "green";
    }

    else if(rows[rows.length - 1].children[5].textContent >= 0 && rows[rows.length - 1].children[5].textContent <= 0.3 * dsug.value)
    {
        var cell = rows[rows.length - 1].children[5];
        cell.style.backgroundColor = "yellow";
    }

    else
    {
        var cell = rows[rows.length - 1].children[5];
        cell.style.backgroundColor = "red";
    }    
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

/*The edit button  hides and unhides the dialog box*/
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

        if(item.className == 'unhidden')
        {
            var newFoodName = document.getElementById('efood');
            newFoodName .value = row.children[0].textContent;

            var newCalories = document.getElementById('ecal');
            newCalories.value = Number(row.children[1].textContent);

            var newCarbs = document.getElementById('ecar');
            newCarbs.value = Number(row.children[2].textContent);

            var newFat = document.getElementById('efat');
            newFat.value = Number(row.children[3].textContent);

            var newProtein = document.getElementById('epro');
            newProtein.value = Number(row.children[4].textContent);

            var newSugar = document.getElementById('esug');
            newSugar.value = row.children[5].textContent;
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

    var saveBtn = document.getElementById('save');
    saveBtn.onclick = function() {
        editBtn.click();
    }

/* To insert the new element every time before the total row */
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

/* To set the daily limit without the uiser clicking it */
window.onload = function(){
    limBtn.click();
}



    





























