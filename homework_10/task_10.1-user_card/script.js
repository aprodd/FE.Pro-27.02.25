const userInfo = {
    name: 'Adam',
    age: 30,
    city: 'Boston',
    sport: 'boxing',
    method: function() {
        let result = `${this.name} ${this.age} ${this.city} ${this.sport}`
        return result;
    }
};

userInfo.method();