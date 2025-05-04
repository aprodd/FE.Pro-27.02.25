function Student(name, lastname, birthday, rating) {
    this.name = name;
    this.lastname = lastname;
    this.birthday = birthday;
    this.rating = rating;
    this.visiting = [];
}

Student.prototype.getAge = function() {
    let currentYear = new Date().getFullYear();
    let age = currentYear - this.birthday;

    return `${this.name} ${this.lastname}: ${age} років`;
};

Student.prototype.averageScore = function() {
    let sum = 0;
    this.rating.forEach((num) => {
        sum += num;
    })
    let average = sum / this.rating.length
    return average;
};

Student.prototype.present = function() {
    if(this.visiting.length < 25) this.visiting.push(true);  
};

Student.prototype.absent = function() {
    if(this.visiting.length < 25) this.visiting.push(false);
};

Student.prototype.summary = function() {
    let averageScore = this.averageScore();
    let lessonCount = this.visiting.length;
    let isPresent = this.visiting.filter((visit) => visit === true).length;
    let averageVisiting = lessonCount > 0 ? isPresent / lessonCount : 0;

    if (averageScore > 90 && averageVisiting > 0.9) return "Молодець!";
    if (averageScore > 90 || averageVisiting > 0.9) return "Добре, але можна краще";

    return "Редиска!";
};



let student1 = new Student('Йовілла', 'Згурська', 1995, [90, 95, 100, 90, 100]); 
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1.getAge());
console.log('Середній бал:', student1.averageScore());
console.log(student1.summary());


let student2 = new Student('Магдалена', 'Юрковська', 1999, [60, 75, 90, 100, 100]);
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
console.log(student2.getAge());
console.log('Середній бал:', student2.averageScore());
console.log(student2.summary());


let student3 = new Student('Антоній', 'Щербак', 1990, [95]);
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
console.log(student3.getAge());
console.log('Середній бал:', student3.averageScore());
console.log(student3.summary());


let student4 = new Student('Лад', 'Атаманюк', 1988, [95, 65, 80]);
student4.present();
student4.absent();
student4.present();
student4.absent();
student4.present();
console.log(student4.getAge());
console.log('Середній бал:', student4.averageScore());
console.log(student4.summary());
