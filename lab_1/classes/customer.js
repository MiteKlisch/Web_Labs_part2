class Customer {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

let Customers = [];
const addCustomer = (name, phone) => {
    return Customers.push( new Customer(name, phone));
};

const patchCustomer = function (indexArr, name, phone) {
    Customers[indexArr].name = name;
    Customers[indexArr].phone = phone; 
};

const deleteCustomer = (indexArr) => {
    if (indexArr === 0) {
        Customers.splice(indexArr, indexArr + 1);
    } else {
        Customers.splice(indexArr, indexArr);
    } 
};

const findCustomer = (name) => {
    const res = Customers.find(el => el.name === name);
    console.log(res);    
};

addCustomer('DSS', '3123');
addCustomer('Kola', 'asdas');
addCustomer('Olya', '45544232');
patchCustomer(1, 'Andrew', '12312');
deleteCustomer(0);
findCustomer('Olya');

console.log(Customers);

module.exports = { patchCustomer, deleteCustomer,  Customer };