These are some of the Automation tests for Spot The Bug challenge.

List-of-Bugs-on-Register-Page.docx contains the list of bugs.
List of Bugs on Register Page

Form Validation Bugs
1.	Open form and click register button without filling any data. Only password field error is displayed. 
Error should be displayed for all missing fields.
2.	Label element’s “for” attribute doesn’t match the “id” attribute of the corresponding input field. This might prevent the accessibility tools from working correctly.

![alt text](image.png)

To run the tests on local follow the steps.
1. Clone the repository
2. cd into repo folder
3. npm run install
4. npm test or npm run test:user-registration for running user registration tests
