const productPrice = new Map();

productPrice.set("apple", 50);
productPrice.set("orange", 40);
productPrice.set("banana", 30);

const product = "banana"

if(productPrice.has(product)){
    console.log(`The product value is ${productPrice.get(product)}`);
}else{
    console.log("There is no product");
}