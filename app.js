let form = document.forms.mainForm;

const ESV = 1320;
const MIN_SALARY = 6000;

document.getElementById('esv').innerHTML = ESV;
form.newInCome.oninput = calcTaxes;

countFivePerCentTaxes = (total) => (total*5)/100;

function calcTaxes(){
    let newInCome = +form.newInCome.value;

    if(newInCome === 0 || !newInCome)  return;

    if(newInCome < MIN_SALARY && newInCome > 0){
        document.getElementById('warningInfo').innerHTML = "Зашла сумма меньше минималки";
        return;
    }

    document.getElementById('warningInfo').innerHTML = "";
    
    let tax_five = countFivePerCentTaxes(newInCome);
    let clearMoney = newInCome - countFivePerCentTaxes(newInCome) - ESV;
    
    document.getElementById('tax_five').innerHTML = tax_five;
    document.getElementById('clearMoney').innerHTML = clearMoney;
}

calcTaxes();


