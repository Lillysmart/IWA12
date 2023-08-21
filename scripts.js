
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//overdue book
let status0= document.querySelector ('#book1 p .status')
const reserve0 = document.querySelector('#book1  .status')
const checkout0 = document.querySelector('#book1  .checkout')
let checkin0 = document.querySelector('#book1 .checkin')
console.log (checkin0)

//reserved book
const status1 = document.querySelector('#book2  p  .status')
const reserve1 = document.querySelector('#book2  .status')
const checkout1 = document.querySelector('#book2  .checkout')
const checkin1 = document.querySelector('#book2  .checkin')

//shelf book
const status2 = document.querySelector('#book3  p  .status')
const reserve2= document.querySelector('#book3  .reserve')
const checkout2 = document.querySelector('#book3 .checkout')
const checkin2= document.querySelector('#book3  .checkin')


checkin0.style.color ='';
status0.style.color = STATUS_MAP.overdue.color;
if ( STATUS_MAP.overdue.canReserve ){reserve0.disabled= false}
else if ( STATUS_MAP.overdue.canCheckout){checkout0.disabled= false}
else if (STATUS_MAP.overdue.canCheckIn) {checkin0.disabled=false};

checkin1.color = none
status1.style.color = STATUS_MAP.status.color
reserve1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin2.color = none
status2.style.color = STATUS_MAP.status.color
reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'