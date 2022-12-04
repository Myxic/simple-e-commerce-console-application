var amount = 100000000;

console.log("Balance: ₦ " + amount);

console.log("Price List: \n"+
"Rice: ₦ 40000\n"+
"Yam: ₦ 2000\n"+
"Car: ₦ 50000000 \n"+
"Keke: ₦ 23450\n"+
"Tv: ₦ 230000\n"+
"Phone: ₦ 667500\n"+
"Suit: ₦ 65400\n"+
"Cooking_Gas: ₦ 234500\n"+
"Enter Break to End session\n");

var priceList =[
    40000, 2000, 50000000, 23450, 230000, 667500, 65400, 234500
]
Commerce();
function Commerce(){
var Input = prompt("What will you like to buy? sir"); 

switch (Input.toUpperCase()) {
  
    case "RICE":
        if (amount > priceList[0]){
            amount = amount - priceList[0];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[0]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[0]}`);
            console.clear;
            Commerce();
        }
        break;
    case "YAM":
        if (amount > priceList[1]){
            amount = amount - priceList[1];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[1]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[1]}`);
            console.clear;
            Commerce();
        }
        break;
    case "CAR":
        if (amount > priceList[2]){
            amount = amount - priceList[2];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[2]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[2]}`);
            console.clear;
            Commerce();
        }
        break;
    case "KEKE":
        if (amount > priceList[3]){
            amount = amount - priceList[3];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[3]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[3]}`);
            console.clear;
            Commerce();
        }
        break;
    case "TV":
        if (amount > priceList[4]){
            amount = amount - priceList[4];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[4]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[4]}`);
            console.clear;
            Commerce();
        }
        break;
    case "PHONE":
        if (amount > priceList[5]){
            amount = amount - priceList[5];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[5]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[5]}`);
            console.clear;
            Commerce();
        }
        break;
    case "SUIT":
        if (amount > priceList[6]){
            amount = amount - priceList[6];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[6]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[6]}`);
            console.clear;
            Commerce();
        }
        break;
    case "COOKING_GAS":
        if (amount > priceList[7]){
            amount = amount - priceList[7];
            console.log(`Purchase of ${Input} was successful, New balance will be ₦ ${amount - priceList[7]}`);
            console.clear;
            Commerce();
        }else{
            console.log(`Purchase of  was unsuccessful, your Balance was too low, Balance : ₦  ${amount}, Price of ${Input} : ₦ ${priceList[7]}`);
            console.clear;
            Commerce();
        }
    case "BREAK":
        break;

    default:
        console.log(`Item ${Input} not found `);
        console.clear;
        Commerce();
        break;
}
}