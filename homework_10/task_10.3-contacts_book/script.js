const users = {
    arr: [
        {name: 'Viktoria',
        tel: '+38099555555',
        email: 'vika@gmail.com'
        },

        {name: 'Julia',
        tel: '+38099777777',
        email: 'julia@gmail.com'
        },

        {name: 'Iryna',
        tel: '38099888888',
        email: 'iryna@gmail.com'
        }
    ],

    searchContact: function(name) {
        let userInfo = this.arr.find(item => item.name == name);
        return userInfo;
    },

    addContact: function(arr) {
        this.arr.push(arr);
    }
};

let search = users.searchContact.bind(users);

console.log(search('Iryna'));
console.log(search('Julia'));
console.log(search('Viktoria'));
console.log(search('Anna')); // = undefined

 // add to arr users

users.addContact({
    name: 'Anna',
    tel: '+38099333333',
    email: 'anna@gmail.com'
    
});

console.log(search('Anna'));


