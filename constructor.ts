class Price {
	private Vehiclename : string;
	private price : number;

	//Price class constructor
	constructor(Vname:string,Vprice:number){
		this.Vehiclename = Vname;
		this.price = Vprice;
    }

    //method whose return statement is created by using backtick
     display() {
         return `Cost of ` + this.Vehiclename + ` is ` + this.price + ` Lakhs`;
    }
}

let VnamePrice = new Price("Renault Duster", 8.9);
console.log(VnamePrice.display());