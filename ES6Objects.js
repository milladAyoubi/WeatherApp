//ES6 Objects and Destructring

const name = 'Millad'
const age = 21


const user = {
    name: name, 
    age: age,
    location: 'Frankfurt am Main'
}


console.log(user.name)



const productBook = {
    label: 'Red Notebook',
    price: 3, 
    stock: 201, 
    salePrice: 14.99  
}





const transaction = (type, product) => {
    const {label:productLabel} = product
console.log(productLabel)

}

transaction('order', productBook)