let company = {
    sales: [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 600}
    ],
    development: {
        web: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800}
        ],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function getSum() {
    const arrSalary = [];
    let summary = 0;
    let applyValue = (item) => arrSalary.push(item.salary);

    company.sales.forEach(applyValue);
    company.development.web.forEach(applyValue);
    company.development.internals.forEach(applyValue);

    return summary = arrSalary.reduce((a,b) => a + b);
}

getSum();