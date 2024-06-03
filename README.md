## Simple and Hex Color Flippers

This repository contains two fun and interactive webpages that allow you to play with colors! 

### Simple Color Flipper

This webpage utilizes JavaScript to generate a random color name and visually reflect it on the background when you click a button.

**Technologies Used:**

* HTML
* CSS
* JavaScript

**Running the Simple Color Flipper:**

1. Clone or download the repository.
2. Open the `index.html` file (for the simple color flipper) in a web browser.

**Functionality:**

* Clicking the button triggers a function that:
    * Selects a random color name from a predefined list stored in a JavaScript array.
    * Sets the background color of the webpage's body element to the chosen color name.
    * Updates the content of an element designated to display the color name (likely with a class "color") to the chosen color name.

**Customization:**

* You can customize the appearance of the button and text element using CSS.
* The list of color names in the JavaScript array can be modified to include your preferred colors.


### Hex Color Flipper

This webpage utilizes JavaScript to generate a random hexadecimal color code and display it on the background and as text when you click a button.

**Technologies Used:**

* HTML
* CSS
* JavaScript

**Running the Hex Color Flipper:**

1. Clone or download the repository.
2. Open the `index.html` file (for the hex color flipper) in a web browser.

**Functionality:**

* Clicking the button triggers a function that:
    * Starts building a new hex code string by initializing a variable.
    * Loops six times to generate each digit of the hex code:
        * Picks a random number and uses it to select a value from an array containing hexadecimal digits (0-9 and A-F).
        * Appends the selected value to the hex code string.
    * Sets the background color of the webpage's body element to the generated hex code.
    * Updates the content of the element with the class "color" (likely displaying the hex code) to the generated hex code.

**Customization:**

* You can customize the appearance of the button and text element using CSS.

**Additional Notes:**

This code generates random colors without any bias towards specific color palettes. If you'd like to explore including specific color ranges or themes, you can modify the code to achieve that.
