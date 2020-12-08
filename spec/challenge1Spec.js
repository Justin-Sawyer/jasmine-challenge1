/*
If the age is less than 0, then it should return "Sorry. I can’t tell what drink because that age is incorrect!"
If the age is less than 14, then it should return "Drink Toddy"
If the age is less than 18, then it should return "Drink Coke"
If the age is less than 21, then it should return "Drink Beer"
If the age is less than 130, then it should return "Drink Whisky"
Else return "Sorry. I can’t tell what drink because that age is incorrect!"


I want to test for what I can drink
    I want to test what I can drink if I am in a certain age range
        I want to get the result of age is less than 0
            I expect the result of age is less than 0 to return "Sorry. I can’t tell what drink because that age is incorrect!"
        I want to get the result of age is more than 0 OR less than 14
            I expect the result of age is more than 0 OR less than 14 to return "Drink Toddy"
        I want to get the result of age is more than or equal to 14 OR less than 18
            I expect the result of age is more than or equal to 14 OR less than 18 to return "Drink Coke"
        I want to get the result of age is more than or equal to 18 OR less than 21
            I expect the result of age is more than or equal to 18 OR less than 21 to return "Drink Beer"
        I want to get the result of age is more than or equal to 21 OR less than 130
            I expect the result of age is more than or equal to 21 OR less than 130 to return "Drink Whisky"
        Else:
        I want to get the result of age is more than or equal to 130    
            I expect the result of age is more than or equal to 130 to return "Sorry. I can’t tell what drink because that age is incorrect!"

*/

/*
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
*/

/*
describe("calculator",function() { 
   
   //test case: 1  
   it("Should retain the current value of all time", function () {
      expect(Calculator.currentVal).toBeDefined();
      expect(Calculator.currentVal).toEqual(0);  
   }); 
   
   //test case: 2  
   it("should add numbers",function() {
      expect(Calculator.add(5)).toEqual(5); 
      expect(Calculator.add(5)).toEqual(10);  
   });         
    
   //test case :3   
   it("Should add any number of numbers",function () {
      expect(Calculator.addAny(1,2,3)).toEqual(6); 
   }); 
});*/

//describe the test
describe("whatCanIDrink", function() {
    //describe the parameter of the test
    describe("age", function() {
        //what should the parameter be?
        it("should exist, should not be undefined", function(){
            //expect("age(value")).toBe(true)
            expect(age).toBeDefined()
        });
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!' if age(-1)", function() {
            expect(age(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        //Refactoring?
        /*it("should return the age is not possible when called as a result of whatCanIDrink(age)", function() {
            //"result" must be defined
            let result = whatCanIDrink(-1);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });*/
        it("should return 'Drink Toddy' if age(13)", function() {
            expect(age(13)).toBe("Drink Toddy");
        });
        it("should return 'Drink Coke' if age(17)", function() {
            expect(age(17)).toBe("Drink Coke");
        });
        it("should return 'Drink Beer' if age(20)", function() {
            expect(age(20)).toBe("Drink Beer");
        });
        it("should return 'Drink Whisky' if age(129)", function() {
            expect(age(129)).toBe("Drink Whisky");
        });
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!' if age(131)", function() {
            expect(age(131)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });        
    });
});




