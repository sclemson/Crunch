# Crunch 

## Project Overview
_Crunch_ is a light-hearted number-guzzling app that was pair coded (with [Milo Bedini](https://github.com/milobedini)) over two days. We used React to create the project which consumed four endpoints from an external API.

## The Brief
The brief required our app to:
- Consume a public API.
- Feature several components.
- Use a router (if applicable).

## First Steps
Our initial conversations centred around the sort of API we should use and the type of app that we wanted to create. We found the [Numbers API](http://numbersapi.com/#42) and were both excited about the number of different potential endpoints that we could use as well as being genuinely interested in the content of the API. We decided to focus on the following end points:

- GET a series of year facts, each using a year.
- GET a number fact, using an integer.
- GET a date fact, using a day and a month.
- GET a math fact, using an integer.

Our MVP was to successfully access the API as above but with the year fact only taking one input. As with our previous project, we also built in ‘nice-to-have’ goals, one of which was the year facts taking a series of inputs from the user. From here, we proceeded to wire-frame the project and write some pseudocode ahead of starting the actual build.

## Day 1
The first day of the project was spent ensuring that we got as close to our MVP as possible by creating four **Axios** requests to the relevant endpoints. Each one of these had an accompanying component that handled the user input and then sent this to be rendered via the Axios request. We wanted to keep all of the functionality of the app on one page - initially this was a usability and aesthetic decision but it also provided us with a good opportunity to learn hooks within **React**. By the end of the first day we were close to realising our MVP (albeit with **Postman** requests) - this gave us the confidence to think that, not only would we be able to build in our first ‘nice-to-have’ (the series of year facts with the user entering as many years as they wished), but that we also might be able to build in some sort of functionality that ‘spaced out’ the year facts like a timeline with each fact occupying the relative position of each year entered.

## Day 2
Having successfully established each of our requests, we set about building the functionality in the year fact section. We did this by including a **yearsArray** to handle multiple user inputs and then using sort functionality to order those years. We then worked through various formulae to try and ensure that we could ‘space out’ the years to give the user a sense of the relative time passing between them, eventually finding a workable solution that displayed each year fact with the appropriate spacing in between them (you can see the effect of this in the **Walkthroughn** section below).

We finished the project using **Sass** for the styling and designing the logo with **Adobe Photoshop**. The 48-hour timeframe meant that we decided to keep the app relatively minimalistic, but with keeping the sense of fun and light-heartedness that we discussed right at the start of the project.

## Featured Code
The code within _Crunch_ required the user to input a particular number within a form component which was then passed into a fact component which accessed the API and returned the fact itself. **DateForm.js** handles the user input, specifically handling both a day and a month. This information  is then used in the **DateFact.js** file which returns the information to the user.

![Date Form](https://github.com/sclemson/Crunch/blob/main/src/images/DateForm.png)

![Date Fact](https://github.com/sclemson/Crunch/blob/main/src/images/DateFact.png)

## Crunch - Walkthrough
### Home Page
![Home Page](https://github.com/sclemson/Crunch/blob/main/src/images/Home%20Page.png)

### Year Inputs and Outputs
<p float="left">
  <img src="hhttps://github.com/sclemson/Crunch/blob/main/src/images/Year%20Inputs.png" width="49%"  />
  <img src="https://github.com/sclemson/Crunch/blob/main/src/images/Year%20Outputs.png" width="49%" /> 
</p>

## Number, Date, and Math Facts
![Number Date Math](https://github.com/sclemson/Crunch/blob/main/src/images/Number%20Date%20Math.png)



## Deployed -> [Crunch](https://crunch-app.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/bedb34ed-f10e-4570-ae3b-dc566b1c18ad/deploy-status)](https://app.netlify.com/sites/crunch-app/deploys)

## Code Installation:

Clone or download the repository and simply run the following within the terminal:

- `yarn start`

<img width="1256" alt="Screenshot 2021-12-29 at 14 56 31" src="https://user-images.githubusercontent.com/89992629/147674923-d0ccbb10-b91c-4b3a-9015-73671d8a87b0.png">

# The Brief

The web-app must:

- Consume a public API.
- Have several components.
- Use `react-router-dom` for routing.

# Technologies Used

#### Front-End

- React
- Sass
- Axios
- React Router Dom

#### Public API

- Numbers API - [Numbers API](http://numbersapi.com/#42)

#### Development Tools

- Postman
- Netlify (deployment)
- Git & GitHub

# Approach

## 1) Planning

Due to the project having a strict 48-hour deadline, the planning stage had to be completed over approximately half a day. The first stage was to agree on a suitable external API to use. We settled on the Numbers API, before creating a wireframe and some pseudocode ahead of starting the actual build.
The four external API endpoints that we used were:

- GET a date fact, using a day and a month.
- GET a maths fact, using an integer.
- GET a number fact, using an integer.
- GET a series of year facts, each using a year.

It was agreed that the MVP would consist of the above four trivia outputs, but with the year fact only containing one input. We agreed on using Sass (scss) for the enhanced ability to use theming and variables for the project, as well as for the experience of using it within a project for the first time.

## 2) Front-End

In our first experience with using React, we created four Axios requests to receive the relevant endpoints. We used an accompanying component for each one that handled the user’s input and sent said input to be rendered via the Axios request. We decided to show all of the web-app’s functionality within one main page, which in hindsight was a great way to understand the power of state in React.
For our year fact section, we had the idea to allow the user to enter as many years as they wished. The styling of the ‘timeline’ would then reflect the relative position of each year entered. The facts would then all be revealed at once after submission. Snippets of both the year input and output are included below:

#### Code Snippet - Year Input

<img width="517" alt="Screenshot 2022-01-03 at 15 45 22" src="https://user-images.githubusercontent.com/89992629/147953312-414e707e-4543-4ed7-850c-8f7153042444.png">

#### Code Snippet - Year Output

<img width="706" alt="Screenshot 2022-01-03 at 16 02 21" src="https://user-images.githubusercontent.com/89992629/147953334-6cd2cea0-58ad-4067-829e-e8fe637f1850.png">

## 3) Styling

As mentioned, Sass was used for the styling of a project. No styling libraries were used. After the functionality of the app was completed, we created the about page and designed the Crunch logo. Due to the strict timeframe of the project we kept the design fairly minimalistic but clean.

# Crunch - Screenshot Walkthrough

#### Home Page

<img width="581" alt="Screenshot 2022-01-03 at 15 49 25" src="https://user-images.githubusercontent.com/89992629/147953378-8388320d-0927-4771-8e89-45621eff73ca.png">

#### Year Inputs

<img width="870" alt="Screenshot 2022-01-03 at 15 43 19" src="https://user-images.githubusercontent.com/89992629/147953388-093a12af-5432-49bf-b220-aec03691ecfe.png">

#### Year Outputs

<img width="1021" alt="Screenshot 2022-01-03 at 15 44 02" src="https://user-images.githubusercontent.com/89992629/147953426-94b3991e-735c-44c7-89ae-8487eecd5e4c.png">

#### Number, Date and Math Facts

<img width="872" alt="Screenshot 2022-01-03 at 15 50 34" src="https://user-images.githubusercontent.com/89992629/147953436-214904b0-0aeb-43f8-b454-1a6731722a0b.png">

#### About Page

<img width="825" alt="Screenshot 2022-01-03 at 15 51 08" src="https://user-images.githubusercontent.com/89992629/147953455-553a0f6a-0cc2-495f-a339-0eafae429a25.png">

# Wins & Blockers

### **Wins**

- First experience of using React and understanding the power and ease of useState and useEffect.
- Pair coding a project in a 48-hour deadline over Zoom was a great way to develop both planning and collaborative skills.

### **Blockers**

- Due to not having used React before, understanding how to efficiently handle state variables took a little time initially.

# Bugs

- Unfortunately, the Numbers API that we used only has an `http` address, meaning the CORS request is refused by browsers in the deployed version. We are looking to resolve this soon.

# Future Improvements

- Have the year fact list appear more as a timeline stylistically.
- Add a feature for each fact that can provide a random input at the user’s request.

# Key Takeaways

Working in a team for the first time was a great experience of how to problem-solve together. The approach was congruent throughout, and our goals for any set period were always clear and ultimately achieved. The ability to talk through a plan with a colleague and clearly lay out what needed doing further emphasised the importance of this aspect of development. Additionally creating a first project using React was instrumental in highlighting its power, and I will definitely seek to use the framework in many future projects.
