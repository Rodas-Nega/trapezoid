// Created By: Rodas N
// Created On: Oct 5 2020
// 
// This program calculates the perimeter and area of a trapezoid with given inputs.
game.splash("Let's calculate the area and perimeter of a trapezoid.")
let base_A = game.askForNumber("Enter the base A of trapezoid (cm):")
let base_B = game.askForNumber("Enter the base B of trapezoid (cm):")
let base_C = game.askForNumber("Enter the base C of trapezoid (cm):")
let base_D = game.askForNumber("Enter the base D of trapezoid (cm):")
let perimeter = base_A + (base_B + (base_C + base_D))
game.splash("The perimeter of a trapezoid dimensions: " + base_A + "cm by " + base_B + "cm by " + base_C + "cm by " + base_D + "cm is " + convertToText(perimeter) + " cm ")
base_A = game.askForNumber("Enter the base A of trapezoid (cm):")
base_B = game.askForNumber("Enter the base A of trapezoid (cm):")
let height = game.askForNumber("Enter the height of trapezoid (cm):")
let area = height * ((base_A + base_B) / 2)
game.splash("The area of a trapezoid dimensions: " + base_A + "cm by " + base_B + "cm by " + height + "cm is " + convertToText(area) + " cm2 ")
