export {ESV, MIN_SALARY, EXTRA_EXPENSE} from './staticData.js'

class calcTaxes {

    static ESV = () => this.ESV;
    static MIN_SALARY = () => this.MIN_SALARY;
    static EXTRA_EXPENSE = () => this.EXTRA_EXPENSE;

    constructor(inCome){
        this.inCome = inCome;
    }


}