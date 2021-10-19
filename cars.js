function Cars(make, model, color, image, number, price) {
    this.make = make ;
    this.model = model ;
    this.color = color ;
    this.image = image ;
    this.number = number ;
    this.price = price ;
    this.editprice = function (newPrice){
        this.price = newPrice ;
        return newPrice
    }  
    this.showAll = function (){
        console.log(`car is ${this.make} model ${this.model} color ${this.color} image ${this.image} number ${this.number} price  ${this.price}`);
    }
}
console.log("Hi");
const car = new Cars("BMW" , "2020" , "black" , "image" ,1234 , 300000)
console.log(car.price);
// car.showll
car.editprice(100000);
console.log(car.price);