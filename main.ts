game.splash("\"Calculate the area of a trapezoid.\"")
let A = game.askForNumber("\"Enter the length(1) of trapezoid (cm):\"")
let B = game.askForNumber("\"Enter the length(2) of trapezoid (cm):\"")
let height = game.askForNumber("\"Enter the height of trapezoid (cm):\"")
let area = A + B
game.splash("\"The area of trapezoid dimensions: \"" + A + "\"cm by \"" + B + "\"cm is \"" + convertToText(area) + "\" cm2. \"")
