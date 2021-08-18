import { ESV } from "./modules/staticData.mjs";


class calcTaxes {

    static ESV = () => 1350;
    static MIN_SALARY = () => 5000;
    static EXTRA_EXPENSE = () => 100;

    constructor(newInCome){
        // this.inCome = +form.newInCome.value;
        this.inCome = newInCome;
    }

    countFivePerCentTaxes = (total) => (total*5)/100;

    run(){
        if(this.inCome === 0 || !this.inCome)  return;
    
        if(this.inCome < this.MIN_SALARY){
            return;
        }
        
        this.tax_five = this.countFivePerCentTaxes(this.inCome);
        this.clearMoney = this.inCome - this.tax_five - this.ESV();
    }

    info(){
        console.log(this.inCome + " " + this.tax_five + " " + this.clearMoney);
    }
}


let a = new calcTaxes(10000);
a.run();
a.info();