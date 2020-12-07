
// methode, is just object proprity who's value is a funstion

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft 
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
        console.log('Seating!')
    },
    removeParty: function (partySize) {
        console.log('Removing')
        this.guestCount = this.guestCount - partySize
    }
}

// seatParty (takes party size (people we are tryng to seat to be sited) and adds to guest acount)
// removeParty (takes party size that is leaving the restaurant and remove it from guest count )
// let status = restaurant.checkAvailability(4)
// console.log(status)

// let status1 = restaurant.seatParty(72)
// console.log(status1)

// let status3 = restaurant.removeParty(5)
// console.log(status3)

restaurant.seatParty(72) //false
console.log(restaurant.checkAvailability(4))  
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4)) //true