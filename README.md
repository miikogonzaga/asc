# Steps to Create a Sign In Form Prototype

<img src="sign-in.png" alt="Sign in form" />

### Intro

This prototype was built with frontend technologies and tools. HTML, CSS, JavaScript, and Github pages are used to display the form page. I spent half a day working on this form and writing basic validation logic using vanilla JavaScript.

I started building the base structure HTML page with all the elements for user input. No CSS styles were added yet. Primarily, I focused on creating elements with IDs that can be targeted with JavaScript. Once set, I started on the validation programming for incorrect user input.

Programming needs

- Dynamic email validation check
- Dynamic password validation check
- Show password toggle
- Form submission validation


### 1. JavaScript

Using vanilla JavaScript, I targeted input elements and ran a blur event listener which detects when a user clicks outside of the input element. Inside the event listeners, certain functions run to check if conditions are met such as email format and non-empty password. Depending on user input after clicking away, ‘valid’ or ‘invalid’ CSS classes are added to the elements.

For the show password toggle button, I wrote a function which would run if a user clicks on the eye icon. In the HTML element, the onclick attribute is used to run the function. The logic checks the ‘type’ HTML attribute and toggles between ‘text’ and ‘password’.

Finally, the Continue button which submits the form needs to check if the email and password fields are validated. With a ‘click’ event listener running on the button, three conditional statements check to see if the form can be validated. If the form is valid, the user is signed in and redirected to a different page.


### 2. CSS

After the functionality was set, I started working on the form styling. I used basic CSS and flexbox for positioning certain elements on the page. The eye icon in particular used absolute positioning relative to its parent element to position the icon on the right side of the password input. For the vertical slant, I used a background vector image for a quick solution.

### 3. Deployment & Testing

After a half day of work, I pushed the working files to Github and hosted it through Github pages. Once the link was live, I started testing the input validity functionality of the form and checking for errors. Using google chrome developer tools, I tested the responsive layouts views on mobile phones all the way up to desktop browsers. 

### Conclusion

By following the steps in this guide, you should be able to build and test a working prototype that’s both visually and functionally appealing. Remember to prioritize user experience and keep everything simple and intuitive. 


**Note:** Fork or [download](https://github.com/xtianares/UX-coding-challenge/archive/refs/heads/main.zip) this repo, everything you need is in this repo including the assets used in the mockup.

