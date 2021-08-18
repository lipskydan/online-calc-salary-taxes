import {ESV, MIN_SALARY, EXTRA_EXPENSE} from './staticData.js'
import {showWarningMassage, hideWarningMassage} from './formAnimation.js'
class calcTaxes {

    static ESV = () => this.ESV;
    static MIN_SALARY = () => this.MIN_SALARY;
    static EXTRA_EXPENSE = () => this.EXTRA_EXPENSE;

    constructor(form){
        // this.inCome = inCome;
        this.inCome = +form.newInCome.value;
    }

    countFivePerCentTaxes = (total) => (total*5)/100;

    

    run(){
        // let newInCome = +form.newInCome.value;
    
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


}