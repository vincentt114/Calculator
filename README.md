# Calculator Application - TakeHome for SS&C Eze SWE Position
-Created by Vincent T

INSTRUCTIONS
1. cd into the calculator folder
2. run npm install
3. if the browser did not automatically open localhost:3000, please run localhost:3000 on your browser
4. Enjoy!

Notes
1. There is no user input error handling, for example if you were to run '5 + - * 2', it would normally typically return as an error, but here it would return as 5.
2. In a typical calculator, a number next to a parentheses (ex: 5(4 + 2)), would be the equivalent of multiplying (ex: 5 * (4 + 2)), my application does not have that implicit conversion and would require an explicit '*' symbol.

How it Works
1. The user (hopefully with correct syntax) creates an input string through the use of the calculator's buttons.
2. Hitting the '=' sign runs the calculate function with the input string as its argument.
3. The calculate function can be broken down into the parts and are performed in the following order (which maintains the order of operations):

  A. The parens subfunction - iterates through the input string and looks for a '(' symbol. If it finds one, then it recursively calls the calculate function on the input that is enclosed between the two parentheses. It then creates and returns a new string, where the functions enclosed by the parentheses are calculated.

  B. The exponent subfunction - it splits the string into an array, where there is a empty space (this way the 2 or more digit numbers remain intact). Then it begins to perform exponent functions where there is a '^' and updates/returns the array, by splicing out the exponent function component elements with the calculated results.

  C. The multipleDivide subfunction - it is very similar to the exponent subfunction in that updates and returns the array by splicing out the relevant multiply and divide elements with the calculated results.

  D. The addSubtract subfunction - lastly, we ultimately return the first element of the array after adding and subtracting the remaining number elements based on the addition or subtraction symbol.
