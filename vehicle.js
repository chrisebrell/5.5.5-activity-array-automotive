class Vehicle{
    constructor(make, model, year, price, vin){
        this.make = make
        this.model = model
         this.year = year
          this.price = price
           this.vin = vin
    }
    drive(){
        return `${this.year} ${this.make} ${this.model} drives`
    }
     paint (color) {
        this.color = color
    }
}


class Sedan extends Vehicle{
    constructor(model, backupCamera){
        super(model)
        this.model = model
        this.backupCamera = backupCamera
    }
    drive(){
        return `${this.model} drives`
    }
}

class Suv extends Vehicle{
    constructor(model,offroadPackage){
        super(model)
        this.model = model
        this.offroadPackage = offroadPackage
    }
    drive(){
        return `${this.model} drives`
    }
}

class Truck extends Vehicle{
    constructor(model,towingCapacity){
        super(model)
        this.model = model
        this.towingCapacity = towingCapacity
    }
    drive(){
        return `${this.model} drives`
    }
}

class EVSedan extends Vehicle{
    constructor(model){
        super(model)
        this.model = model
    }
    drive(){
        return `${this.model} drives`
    }
    recharge(){
        return `${this.model} recharges`
    }
}