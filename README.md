# Modified Prisoner's Dilemma 
This repository contains the code for an online modified prisoner's dilemma game created 
for an experiment completed at the William and Mary Cross-cultural Cognition Lab. 

## Getting started
These instructions are for getting a copy of the project working locally for
development and testing. 

### Prerequisites
1. Install Node.js. 
2. Install npm
3. Install Nodemon by typing `npm install -g nodemon`

Type `node -v` and `npm -v` into a terminal or console to verify that you're running at least
node `v4.x.x` and npm `3.x.x`.

### Getting started locally
1. Create a new project folder (named `game-pd`, for example) and clone this repo into it by typing the following command:
```git clone https://github.com/xzou/cooperation-mturk-study game-pd```.

2. Navigate into the project folder by typing `cd game-pd` (or whatever your folder is named) and type `npm install` 
to install the npm packages listed in the `package.json`.

3. Type `ng build --watch`.

4. Open up a new terminal window or tab, and again navigate into the project directory. Type `nodemon server.js`
You should see a message like `Listening on port 8080`. 

5. Open up a browser, and go to the URL `localhost:8080` (or whichever port was indicated in the message). 

### Making changes to probabilities and conditions
Navigate to the directory containing most of the game's logic by typing `cd src/app/pd-game` from the project's root directory. 
Open the file called `game.service.ts` to change the condition number (1, 2, or 3) and the initial probability of
cooperation (between 0 and 1).  

