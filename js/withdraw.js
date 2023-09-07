document.getElementById('Withdraw-btn').addEventListener('click', function(){

    const withdrawelement = document.getElementById('withdraw-input')
    const withdrawelementValue = withdrawelement.value 
    const newWithdraw = parseFloat(withdrawelementValue)

    withdrawelement.value = ''

    if(isNaN(newWithdraw)){
        alert('please provide e number');
        return;
    }

    const withdrawInput = document.getElementById('withdraw-info')
    const withdrawInputValue = withdrawInput.innerText
    const afterWithdraw = parseFloat(withdrawInputValue)

    

    const withdrawBalance = document.getElementById('blance-info')
    const withdrawBalanceValue = withdrawBalance.innerText
    const totallWidthdrawBalance = parseFloat(withdrawBalanceValue)

    if(newWithdraw > totallWidthdrawBalance){
        alert('baper hotel e taka naii');
        return;
    }

    const totalWithdraw = newWithdraw + afterWithdraw
    withdrawInput.innerText = totalWithdraw

    const currentTotallWithdraw = totallWidthdrawBalance - newWithdraw
    withdrawBalance.innerText = currentTotallWithdraw

    
})