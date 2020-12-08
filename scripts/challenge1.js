function age(num) {
    
    if (num < 0) {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    } else if (num < 14 && num >= 0) {
        return "Drink Toddy";
    } else if (num < 18 && num >= 14) {
        return "Drink Coke";
    } else if (num < 21 && num >= 18) {
        return "Drink Beer";
    } else if (num < 130 && num >= 21) {
        return "Drink Whisky";
    } else if (num >= 130) {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }

}
console.log(age(130));