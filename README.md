## Task overview

This task is about creating a multi step login form which allows users to upload a profile picture, put their address and should have form validity. The project should be mobile responsive and should use technolgies like React, tailwindCSS and Fontawsome icons. The form should have the following steps:

Site is live at : [Click me](https://main--glowing-sunburst-a1e73b.netlify.app/)

![alt text](./Readme/image.png)
![alt text](./Readme/image-1.png)
![alt text](./Readme/image-2.png)
![alt text](./Readme/image-3.png)
![alt text](./Readme/image-4.png)
![alt text](./Readme/image-5.png)

## Steps to run the project

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the project
4. Open the browser and go to `http://localhost:3000/` to view the project

## Technologies used

1. React
2. TailwindCSS
3. Fontawsome icons

## Project usage

1. On first login page, user can enter any name and email, but the password should be atleast 6 characters long, if not, the user will not be able to proceed to the next step and will show an error message. In username field, user can enter any name expect "KrishT0", this predefined username is set to show the error functionality.

2. On second login page, user can upload a profile picture, if the user does not upload a picture and does not write anything on add loaction field, the user will not be able to proceed to the next step as the next button will not be active.

3. On third page the user can move to final page untill the user doe not select any one of the option, the options are multi-select. once the user selects any one of the option, the user can proceed to the final page.

4. Final page is a dummy page, where the user will be shown that an email has been sent to the user's email address.
