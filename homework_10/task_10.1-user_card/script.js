const userInfo = {
    name: 'Adam',
    age: 30,
    city: 'Boston',
    sport: 'boxing',
    method() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.sport);
    }
};

userInfo.method();