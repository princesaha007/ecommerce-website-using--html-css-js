document.getElementById('go-home').addEventListener('click' ,function(){

    const totalPrice = document.getElementById('balance');
    const discountTotal = document.getElementById('discount');
    const grandTotal = document.getElementById('balance-after-discount');
    const itemsEntry = document.getElementById('items-entry');
    const btnApply = document.getElementById('apply-coupon');
    const btnMakePurchase = document.getElementById('make-purchase');

    
    totalPrice.innerText = 0.00 ;
    discountTotal.innerText = 0.00;
    grandTotal.innerText = 0.00;
    itemsEntry.innerText = ''

    btnApply.setAttribute('disabled' , true);
    btnMakePurchase.setAttribute('disabled' ,true) ;





})