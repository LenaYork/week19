class Cat {
    constructor(nickname, userName, userPhone, breed, food, gender, comment) {
        this.nickname = nickname;
        this.userName = userName;
        this.userPhone = userPhone;
        this.breed = breed;
        this.food = food;
        this.gender = gender;
        this.comment = comment;
    }
}

const sendButton = document.querySelector("#send");
sendButton.addEventListener("click", function() {
    let checkedFood = [];
    let foods = document.querySelectorAll("input[name='food']");
    // console.log(foods);
    for (const item of foods) {
        if (item.checked) {
            checkedFood.push(item.id);
        }
    }

    let pickedGender = "not picked";
    if (document.querySelector('#male').checked) {
        pickedGender = "male";
    } 
    if (document.querySelector('#female').checked) {
        pickedGender = "female";
    } 
    if (document.querySelector('#unknown').checked) {
        pickedGender = "unknown";
    }

    let cat1 = new Cat(
        document.querySelector("#nickname").value || "not mentioned",
        document.querySelector("#owner-name").value || "not mentioned",
        document.querySelector("#owner-contacts").value || "not mentioned",
        document.querySelector("#breed").value || "not mentioned",
        checkedFood,
        pickedGender,
        document.querySelector('#comment').value || "not mentioned"
    );
    console.log(cat1);
});
