# Crunch 

## Project Overview
_Crunch_ is a light-hearted number-guzzling app that was pair coded (with [Milo Bedini](https://github.com/milobedini)) over two days. We used React to create the project which consumed four endpoints from an external API.

You can access a video demonstration of _Crunch_ [here](https://crunch-demo.netlify.app/).

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
### Homepage
<img src="https://github.com/sclemson/Crunch/blob/main/src/images/Home%20Page.png" width="49%"  />

### Year Inputs and Outputs
<p float="left">
  <img src="https://github.com/sclemson/Crunch/blob/main/src/images/Year%20Inputs.png" width="48%"  />
  <img src="https://github.com/sclemson/Crunch/blob/main/src/images/Year%20Outputs.png" width="50%" /> 
</p>

### Number, Date, and Math Facts
![Number Date Math](https://github.com/sclemson/Crunch/blob/main/src/images/Number%20Date%20Math.png)

## Wins and Wishes
The chief win was successfully creating an app within a very tight timeframe. Working collaboratively was a fantastic experience and planning, communication, and clarity had to be exceptionally focussed in order to get everything done. _Crunch_ represented our first experience of using React and, in particular, using hooks within React. From a design perspective, the timeline view in the year fact section was also really pleasing, particularly as we weren’t sure that we would get this done in time.

In terms of future improvements, a key wish would be to have ensured that the timeline view appeared horizontally in appropriate relative positions across an arrow. We would also like to have added a random feature to generate a random input for each type of fact at the user’s request.

## Deployed: [Crunch](https://crunch-app.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/bedb34ed-f10e-4570-ae3b-dc566b1c18ad/deploy-status)](https://app.netlify.com/sites/crunch-app/deploys)

## Bugs
Unfortunately, the Numbers API that we used only has an http address, meaning the **CORS** request is refused by browsers in the deployed version. Cloning or downloading the repository and then running **yarn** followed by **yarn start** within the terminal will result in _Crunch_ running completely as intended!

Alternatively, this [link](https://crunch-demo.netlify.app/) will take you to a video demonstration of the app.

## Key Takeaways
Despite the deployment frustration, _Crunch_ was a brilliant project to work on. The tight timeframe and constant requirements to problem-solve collaboratively meant that we had to have very clear, well thought-out goals in order to ensure that we would meet our deadline. Working together in this way was also invaluable in terms of embedding core skills in communication and discussing ideas with a colleague, as well as more technical skills such as **JavaScript**, **React Hooks**, **CSS**, and **Node.js**.
