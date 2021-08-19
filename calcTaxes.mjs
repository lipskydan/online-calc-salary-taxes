export class calcTaxes {

    constructor(newInCome){
        // this.inCome = +form.newInCome.value;
        this.inCome = newInCome;

        this.ESV = 1350;
        this.MIN_SALARY = 5000;
        this.EXTRA_EXPENSE = 100;
    }

    countFivePerCentTaxes = (total) => (total*5)/100;

    run(){
        if(this.inCome === 0 || !this.inCome)  {
            console.log("calcTaxes::run() inCome is 0 or not a number");
            return;
        }
    
        if(this.inCome < this.MIN_SALARY){
            console.log("calcTaxes::run() inCome < min_salary");
            return;
        }
        
        this.tax_five = this.countFivePerCentTaxes(this.inCome);
        this.clearMoney = this.inCome - this.tax_five - this.ESV;
    }

    info(){
        if (!this.clearMoney) return;
        console.log("calcTaxes::info() " + this.inCome + " " + this.tax_five + " " + this.clearMoney);
    }
}


let a = new calcTaxes(10000);
a.run();
a.info();