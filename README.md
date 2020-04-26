# React Calculator Application

This application functions as a simple calculator.

![React Calculator App](src/assets/calculator.png 'Design of the Calculator')

The functionalities include:

- Calculate through the arithmetic operations (excluding the modulus operation)
- Clear calculation histroy
- Clear previous calculation

### Components

- Calculator
- Screen
- Keypad
- Button

#### Calculator

App.js represents the Calculator component. It consists of two components: Screen and Keypad components. This is where state is stored - State: result and equation.

There are three methods.

1. calculate() - this method uses the mathjs library (https://mathjs.org/index.html) to perform calculations.

2. reset() - this method clears the calculator screen by setting all state to an empty string.

3. del() - this method removes the last button input on the screen.

4. click() - this method executes the appropriate function of each button on the calculator.

#### Screen

The Screen outputs two types of information: Result and Equation. The Result output is displayed when the equals button has been pressed, as long as an appropriate equation has been provided (output will be the result of the equation) or an error has been caught (output will display the word, error).

#### Keypad

The Keypad component outputs five rows of four buttons.

#### Button

A button is represented by a value (number or operation).
