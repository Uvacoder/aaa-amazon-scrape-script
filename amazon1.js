var axios = require('axios');
let api_key = 'OIOV1R9GT1D75EMZIKOHROMFX8LLOP5NXMLIS5AYG1TIKE90MELPGFHE4DCCNC4F7GQIHGZ9LIWTI0Z8';
let siteUrl =encodeURIComponent("https://www.amazon.in/Apple-Watch-GPS-Cellular-44mm/dp/B07XWYCMQH/ref=sr_1_1_sspa?dchild=1&keywords=iphone+watch&qid=1628165940&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVjc4Tk5GQkwxUlFRJmVuY3J5cHRlZElkPUEwNjUwNjc1TDdMWTU4UUI4TjdHJmVuY3J5cHRlZEFkSWQ9QTA4MjUxMDFKUkhQRjhCR1lMTUQmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl");
let js_snippet ='dmFyIGxpbmsgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9scC10b3VjaC1saW5rJyk7CmlmIChsaW5rKSAKewogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9scC10b3VjaC1saW5rJykuY2xpY2soKQp9';
//let  wait = 3500; 
let  extract_rules ='{"productName":"%23productTitle","pdpprice":"%23priceblock_ourprice","pricesave":"%23regularprice_savings"}'
//let wait_for = "%23all-offers-display-scroller"
var config = {
  method: 'get',
  url: 'https://app.scrapingbee.com/api/v1?js_snippet='+js_snippet+'&url='+siteUrl+'&api_key='+api_key+'&extract_rules='+extract_rules
};

axios(config)
.then(function (response) {
  let responseData  = JSON.stringify(response.data);

  console.log(responseData.replace(/(\r\n|\n|\r)/gm,""));
})
.catch(function (error) {
  console.log(error);
});
