document.getElementById('deposit-btn').addEventListener('click', function(){

    const dipositinput = document.getElementById('deposit-input')
    const dipositinputValue = dipositinput.value;
    const newDeposit = parseFloat(dipositinputValue)

    dipositinput.value =''

    if(isNaN(newDeposit)){
        alert('please provide e number');
        return;
    }


    const depositElement = document.getElementById('deposit-info')
    const depositElementValue = depositElement.innerText
    const finalDeposit = parseFloat(depositElementValue)

    const newCurrentDeposit = newDeposit + finalDeposit

    depositElement.innerText = newCurrentDeposit


    const BalanceElement = document.getElementById('blance-info')
    const BalanceElementValue = BalanceElement.innerText
    const BalanceDeposit = parseFloat(BalanceElementValue)


    const currentTotallBalance = newDeposit + BalanceDeposit

    BalanceElement.innerText = currentTotallBalance


    
})