document.getElementById('apply-coupon').addEventListener('click',function(){
    const totalPrice = getElementValueById('balance');
    const discountTotal = getElementValueById('discount');
    const grandTotal = getElementValueById('balance-after-discount');

    const inputValue = getInputFieldValueById('coupon-value')

    if(inputValue != 'SELL200'){
        alert ('Please provide a valid Coupon Code');
        return ;
    }
    else{
        const percentagedValue = percentage(totalPrice);
        const newDiscountTotalToFixed = percentagedValue.toFixed(2);
        setTextElementValueById ('discount' , newDiscountTotalToFixed);

        const grandTotalCalculate = totalPrice- newDiscountTotalToFixed;
        const ultimateTotalToFixed = grandTotalCalculate.toFixed(2)
        setTextElementValueById ('balance-after-discount' , ultimateTotalToFixed);
    }
})