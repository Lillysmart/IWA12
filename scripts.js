
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
const reserve0 = document.querySelector('#book1  .reserve')
const checkout0 = document.querySelector('#book1  .checkout')
let checkin0 = document.querySelector('#book1 .checkin')
console.log (checkin0)

//reserved book
let status1 = document.querySelector('#book2  p  .status')
const reserve1 = document.querySelector('#book2  .reserve')
const checkout1 = document.querySelector('#book2  .checkout')
let checkin1 = document.querySelector('#book2  .checkin')

//shelf book
let status2 = document.querySelector('#book3  p  .status')
const reserve2= document.querySelector('#book3  .reserve')
const checkout2 = document.querySelector('#book3 .checkout')
let checkin2= document.querySelector('#book3  .checkin')

checkin0.style.color ='';
status0.style.color = STATUS_MAP.overdue.color;
if ( STATUS_MAP.overdue.canReserve ) reserve0.disabled= false
 if ( STATUS_MAP.overdue.canCheckout)checkout0.disabled= false
  if (STATUS_MAP.overdue.canCheckIn) checkin0.disabled=false;

checkin1.style.color = '';
status1.style.color = STATUS_MAP.reserved.color;
if (STATUS_MAP.reserved.canReserve){reserve1.disabled=false};
if (STATUS_MAP.reserved.canCheckout){checkout1.disabled=false};
if (STATUS_MAP.reserved.canCheckIn){checkin1.disabled=false};


checkin2.style.color = '';
status2.style.color = STATUS_MAP.shelf.color;

if (STATUS_MAP.shelf.canReserve)reserve2.disabled=false;
if (STATUS_MAP.shelf.canCheckout)checkout2.disabled=false;
if (STATUS_MAP.shelf.canCheckIn) checkin2.disabled=false;

console.log("Checking canReserve:", STATUS_MAP.overdue.canReserve);
console.log (reserve0)