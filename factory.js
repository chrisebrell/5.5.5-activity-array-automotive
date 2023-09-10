class Factory{
    constructor(location, owner) {
        this.location = location
        this.owner = owner
        this.vehicles = []
    } 
    createVehicle(vehicle) {
        this.vehicles.push(vehicle)
    }
    listVehicles() {
        for (let i = 0; i < this.vehicles.length; i++) {
            console.log(this.vehicles[i])
        }
            return this.vehicles
    }
    paintVehicle (vin, color) {
         for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === vin) {
                this.vehicles[i].paint(color)      
                return          
            } 
         }
    }
}