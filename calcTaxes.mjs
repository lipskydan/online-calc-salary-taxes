import {ESV as esv, MIN_SALARY as m_s, EXTRA_EXPENSE as e_e} from './modules/staticData.mjs'

class calcTaxes {

    static ESV = () => esv;
    static MIN_SALARY = () => m_s;
    static EXTRA_EXPENSE = () => e_e;

    constructor(newInCome){
        // this.inCome = +form.newInCome.value;
        this.inCome = newInCome;
    }

    countFivePerCentTaxes = (total) => (total*5)/100;

    run(){
        if(this.inCome === 0 || !this.inCome)  return;
    
        if(this.inCome < MIN_SALARY()){
            return;
        }
        
        this.tax_five = countFivePerCentTaxes(this.inCome);
        this.clearMoney = this.inCome - countFivePerCentTaxes(this.inCome) - ESV();
    }

    info(){
        console.log(this.inCome + " " + this.tax_five + " " + this.clearMoney);
    }
}


let a = new calcTaxes(10000);
a.run;
a.info;