let form = document.forms.mainForm;

const ESV = 1320;
const MIN_SALARY = 6000;
const EXTRA_EXPENSE = 100;
// extraExpense

form.newInCome.oninput = calcTaxes;

countFivePerCentTaxes = (total) => (total*5)/100;

showWarningMassage = () => document.getElementById('warningInfo').innerHTML = "Зашла сумма меньше минималки";
hideWarningMassage = () => document.getElementById('warningInfo').innerHTML = "";

function calcTaxes(){
    let newInCome = +form.newInCome.value;

    if(newInCome === 0 || !newInCome)  return;

    if(newInCome < MIN_SALARY && newInCome > 0){
        showWarningMassage();
        return;
    }

    hideWarningMassage();
    
    let tax_five = countFivePerCentTaxes(newInCome);
    let clearMoney = newInCome - countFivePerCentTaxes(newInCome) - ESV;
    
    document.getElementById('tax_five').innerHTML = tax_five;
    document.getElementById('esv').innerHTML = ESV;
    document.getElementById('clearMoney').innerHTML = clearMoney;
    document.getElementById('extraExpense').innerHTML = EXTRA_EXPENSE;
}

calcTaxes();


