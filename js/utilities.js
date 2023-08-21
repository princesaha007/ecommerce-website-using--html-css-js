function getElementValueById (elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const TextElementValue = parseFloat(textElementValueString);
    
    return TextElementValue;
    
}

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    inputField.value = '' ;
   
    return inputFieldValue ;
}

function setTextElementValueById (elementId1 , newValue){
    const textElement = document.getElementById(elementId1);
    textElement.innerText = newValue;
}

function entryItems(items){
    const entryPlace = document.getElementById('items-entry');

    const count = entryPlace.childElementCount;

    const p = document.createElement('p');
    p.classList.add('font-bold');
    p.innerHTML = `${count + 1 }. ${items}` ;
    entryPlace.appendChild(p) ;
}


function percentage(balanceUpdated){
    const discountBalance = 20/100*balanceUpdated ;
    return discountBalance ;

}
