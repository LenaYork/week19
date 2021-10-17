

class Validator {
    isEmail(string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(string);
    }

    isDomain(string) {
        const re = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/i;
        return re.test(string);
    }

    isDate(string) {
        let arrD = string.split(".");
        arrD[1] -= 1;
        let d = new Date(arrD[2], arrD[1], arrD[0]);
        if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
            return true;
        } else {
            return false;
        }
    }

    isPhone(string) {
        const re = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
        return re.test(string);
    }
}

let val1 = new Validator();
console.log(val1.isEmail('alisa@mail.ru')); 
console.log(val1.isDomain('itgirlschool.ru')); 
console.log(val1.isDate('12.05.2021')); 
console.log(val1.isPhone('+375291234567')); //Belarus

class ValidatorStatic {
    static isEmail(string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(string);
    }

    static isDomain(string) {
        const re = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/i;
        return re.test(string);
    }

    static isDate(string) {
        let arrD = string.split(".");
        arrD[1] -= 1;
        let d = new Date(arrD[2], arrD[1], arrD[0]);
        if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
            return true;
        } else {
            return false;
        }
    }

    static isPhone(string) {
        const re = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
        return re.test(string);
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021')); 
console.log(ValidatorStatic.isPhone('+375259876543'));