var amount = 100000000;

console.log("Balance: ₦ " + amount);

console.log("Price List: \n"+
"Rice: ₦ 40000\n"+
"Yam: ₦ 2000\n"+
"Car: ₦ 100000000 \n"+
"Keke: ₦ 23450\n"+
"Tv: ₦ 230000\n"+
"Phone: ₦ 667500\n"+
"Suit: ₦ 65400\n"+
"Cooking_Gas: ₦ 234500");

var priceList =[
    40000,2000,10000000,23450, 230000,667500, 65400,234500
]
var Input = window.prompt("What will you like to buy? sir"); 

switch (Input.toUpperCase()) {
  
    case "RICE":
        if (amount >= priceList[0]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[0]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[0]}`);
        }
        break;
    case "YAM":
        if (amount >= priceList[1]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[1]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[1]}`);
        }
        break;
    case "CAR":
        if (amount >= priceList[2]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[2]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[2]}`);
        }
        break;
    case "KEKE":
        if (amount >= priceList[3]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[3]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[3]}`);
        }
        break;
    case "TV":
        if (amount >= priceList[4]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[4]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[4]}`);
        }
        break;
    case "PHONE":
        if (amount >= priceList[5]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[5]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[5]}`);
        }
        break;
    case "SUIT":
        if (amount >= priceList[6]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[6]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[6]}`);
        }
        break;
    case "COOKING_GAS":
        if (amount >= priceList[7]){
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[7]}`);
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[7]}`);
        }
        
        break;

    default:
        console.log(`Item ${Input} not found `)
        break;
}