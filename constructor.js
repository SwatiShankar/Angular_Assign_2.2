var Price = (function () {
    function Price(Vname, Vprice) {
        this.Vehiclename = Vname;
        this.price = Vprice;
    }
    Price.prototype.display = function () {
        return "Cost of " + this.Vehiclename + " is " + this.price + " Lakhs";
    };
    return Price;
}());
var VnamePrice = new Price("Renault Duster", 8.9);
console.log(VnamePrice.display());