let car = {
    brand : "Toyota",
    getBrand: function() {
        return this.brand;
    }
};

let getCarBrand = car.getBrand.bind(car);
console.log(getCarBrand()); // Output: Toyota