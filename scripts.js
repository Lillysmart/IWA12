
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
if (STATUS_MAP.overdue.canReserve === false) reserve0.disabled = true;
 if ( STATUS_MAP.overdue.canCheckout=== false )checkout0.disabled=true
  if (STATUS_MAP.overdue.canCheckIn===false) checkin0.disabled=true;

checkin1.style.color = '';
status1.style.color = STATUS_MAP.reserved.color;
if (STATUS_MAP.reserved.canReserve===false)reserve1.disabled=true;
if (STATUS_MAP.reserved.canCheckout===false)checkout1.disabled=true;
if (STATUS_MAP.reserved.canCheckIn===false)checkin1.disabled=true;


checkin2.style.color = '';
status2.style.color = STATUS_MAP.shelf.color;
if (STATUS_MAP.shelf.canReserve===false)reserve2.disabled=true;
if (STATUS_MAP.shelf.canCheckout===false)checkout2.disabled=true;
if (STATUS_MAP.shelf.canCheckIn===false) checkin2.disabled=true;
