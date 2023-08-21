document.getElementById('btn-1').addEventListener('click' , function(){

    const price1 = getElementValueById ('price-1');
    const balance1 = getElementValueById('balance');
    const grandTotal1 = getElementValueById('balance-after-discount');
    
    const balanceUpdated1 = price1 + balance1 ;
    const balanceUpdatedToFixed1 = balanceUpdated1.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed1);
    
    const ultimateTotal1 = grandTotal1 + price1;
    const ultimateTotalToFixed1 = ultimateTotal1.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed1);

    entryItems('K. Accessories');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated1>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed1>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }


})


document.getElementById('btn-2').addEventListener('click' , function(){

    const price2 = getElementValueById ('price-2');
    const balance2 = getElementValueById('balance');
    const grandTotal2= getElementValueById('balance-after-discount');

    const balanceUpdated2 = price2 + balance2 ;
    const balanceUpdatedToFixed2 = balanceUpdated2.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed2);

    
    const ultimateTotal2 = grandTotal2 + price2;
    const ultimateTotalToFixed2 = ultimateTotal2.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed2);



    entryItems('K. Accessories');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated2>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed2>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }


})


document.getElementById('btn-3').addEventListener('click' , function(){

    const price3 = getElementValueById ('price-3');
    const balance3 = getElementValueById('balance');
    const grandTotal3 = getElementValueById('balance-after-discount');

    const balanceUpdated3 = price3 + balance3 ;
    const balanceUpdatedToFixed3 = balanceUpdated3.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed3);

    
    const ultimateTotal3 = grandTotal3 + price3;
    const ultimateTotalToFixed3 = ultimateTotal3.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed3);

    entryItems('Home Cooker');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated3>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed3>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }

    

})


document.getElementById('btn-4').addEventListener('click' , function(){

    const price4 = getElementValueById ('price-4');
    const balance4 = getElementValueById('balance');
    const grandTotal4 = getElementValueById('balance-after-discount');

    const balanceUpdated4 = price4 + balance4 ;
    const balanceUpdatedToFixed4 = balanceUpdated4.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed4);

    
    const ultimateTotal4 = grandTotal4 + price4;
    const ultimateTotalToFixed4 = ultimateTotal4.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed4);

    entryItems('Sports Back Cap');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated4>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed4>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }


    

})


document.getElementById('btn-5').addEventListener('click' , function(){

    const price5 = getElementValueById ('price-5');
    const balance5 = getElementValueById('balance');
    const grandTotal5 = getElementValueById('balance-after-discount');

    const balanceUpdated5 = price5 + balance5 ;
    const balanceUpdatedToFixed5 = balanceUpdated5.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed5);

    
    const ultimateTotal5 = grandTotal5 + price5;
    const ultimateTotalToFixed5 = ultimateTotal5.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed5);

    

    entryItems('Full Jersey Set');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated5>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed5>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }


  

})


document.getElementById('btn-6').addEventListener('click' , function(){

    const price6 = getElementValueById ('price-6');
    const balance6 = getElementValueById('balance');
    const grandTotal6 = getElementValueById('balance-after-discount');

    const balanceUpdated6 = price6 + balance6 ;
    const balanceUpdatedToFixed6 = balanceUpdated6.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed6);

    
    const ultimateTotal6 = grandTotal6 + price6;
    const ultimateTotalToFixed6 = ultimateTotal6.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed6);

    
    entryItems('Sports cates');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated6>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed6>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }





})


document.getElementById('btn-7').addEventListener('click' , function(){

    const price7 = getElementValueById ('price-7');
    const balance7 = getElementValueById('balance');
    const grandTotal7 = getElementValueById('balance-after-discount');

    const balanceUpdated7 = price7 + balance7 ;
    const balanceUpdatedToFixed7 = balanceUpdated7.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed7);

    
    const ultimateTotal7 = grandTotal7 + price7;
    const ultimateTotalToFixed7 = ultimateTotal7.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed7);

    entryItems('Single Relax Chair');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated7>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed7>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }


})


document.getElementById('btn-8').addEventListener('click' , function(){

    const price8 = getElementValueById ('price-8');
    const balance8 = getElementValueById('balance');
    const grandTotal8 = getElementValueById('balance-after-discount');

    const balanceUpdated8 = price8 + balance8 ;
    const balanceUpdatedToFixed8 = balanceUpdated8.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed8);

    
    const ultimateTotal8 = grandTotal8 + price8;
    const ultimateTotalToFixed8 = ultimateTotal8.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed8);

    entryItems('Children play');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated8>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }


    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed8>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }



})


document.getElementById('btn-9').addEventListener('click' , function(){

    const price9 = getElementValueById ('price-9');
    const balance9 = getElementValueById('balance');
    const grandTotal9 = getElementValueById('balance-after-discount');

    const balanceUpdated9 = price9 + balance9 ;
    const balanceUpdatedToFixed9 = balanceUpdated9.toFixed(2);
    setTextElementValueById('balance' , balanceUpdatedToFixed9);

    
    const ultimateTotal9 = grandTotal9 + price9;
    const ultimateTotalToFixed9 = ultimateTotal9.toFixed(2);
    setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed9);

    entryItems('Flexible Sofa');

    const btnApply = document.getElementById('apply-coupon');
    if(balanceUpdated9>=200){
        btnApply.removeAttribute('disabled');
    }
    else{
        btnApply.setAttribute('disabled' , true);
    }

    const btnMakePurchase = document.getElementById('make-purchase');
    if( balanceUpdatedToFixed9>0.00){
        btnMakePurchase.removeAttribute('disabled');
    }
    else{
        btnMakePurchase.setAttribute('disabled' , true);
    }



})