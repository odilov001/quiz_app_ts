
JavaScript’da factory function (ya'ni "fabrika funksiyasi") — bu obyekt yaratadigan oddiy funksiya bo‘lib, har safar chaqirilganda yangi obyektni qaytaradi.

Ular class yoki constructor function (ya'ni new bilan ishlatiladigan funksiyalar) ga o‘xshash bo‘lsa-da, soddaroq va ko‘proq funksional yondashuvga asoslangan.

function createUser(name, age) {
return {
name: name,
age: age,
greet() {
console.log(`Salom, men ${this.name}, yoshim ${this.age}`);
}
};
}

const user1 = createUser("Ali", 25);
const user2 = createUser("Vali", 30);

user1.greet(); // Salom, men Ali, yoshim 25
user2.greet(); // Salom, men Vali, yoshim 30

🧠 Afzalliklari:
new kalit so'zini ishlatmasdan obyekt yaratadi.

Ko‘p obyektlar yaratish kerak bo‘lsa, kodni soddalashtiradi.



🆚 Factory function vs Constructor function
Factory Function Constructor Function (new)
Obyektni oddiy return bilan qaytaradi this orqali obyektni aniqlaydi
new kerak emas new bilan chaqiriladi
Oddiy funksiya

function User(name, age) {
this.name = name;
this.age = age;
this.greet = function() {
console.log(`Salom, men ${this.name}, yoshim ${this.age}`);
};
}

const user = new User("Ali", 25);
user.greet(); // Salom, men Ali, yoshim 25
