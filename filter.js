function filterbycategory(products){
    return function(category){
        return products.filter(function(product){
            return product.category === category;
        });
    };
}

var products = [
    {name : "Shirt", category : "clothing"},
    {name : "pant", category : "clothing"},
    {name : "racing car", category : "gaming"},
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
]

var gamingproducts = filterbycategory(products)("gaming");

console.log(gamingproducts);