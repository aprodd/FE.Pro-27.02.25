let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function getSum() {
    const arrSalary = [];
    let summary = 0;

    company.sales.forEach((item) => {
        arrSalary.push(item.salary);
    })
    company.development.web.forEach((item) => {
        arrSalary.push(item.salary);
    })
    company.development.internals.forEach((item) => {
        arrSalary.push(item.salary);
    })

    return summary = arrSalary.reduce((a,b) => a + b);
}

getSum();