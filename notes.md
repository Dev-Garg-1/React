*** React Basics Notes ***

*** React is a Library, Not a Framework ***

Frameworks (e.g., Angular) enforce strict rules, while libraries (e.g., React) offer more flexibility.

React allows you to pick and choose additional tools (like React Router for navigation or Redux for state management).

*** Creating a React App ***
*** Two Methods: ***

Create React App (CRA):

Command: npx create-react-app project_name

Older, includes everything, sets up the full development environment.

Vite + React (Modern Approach):

Command: npm create vite@latest

Faster, minimal setup, requires manual installation of dependencies.

*** Node Modules in Vite vs CRA ***

CRA installs node_modules automatically when the project is created.

Vite requires running npm install manually after project setup.

*** Understanding package.json ***

Contains metadata about the project: name, version, dependencies, and scripts.

The "scripts" section defines commands like npm start, npm run build, etc.

*** File Extensions and Entry Points ***

CRA: Uses .js files inside src/.

Vite: Prefers .jsx files.

Components must start with a capital letter to be recognized.

Entry files:

CRA: Uses index.js as the main entry point.

Vite: Uses main.jsx as the entry point.

*** React's Tree Structure ***

React builds a virtual DOM tree where components are nested.

Updates are optimized using reconciliation, meaning React only updates changed parts instead of re-rendering the entire UI.

from usestate we get two things in array format (a value, and a function)

the feature of react is that it updates the value that we want to update in the ui at all the occurences 
by itself then we no longer need to change it everywhere in the code as we used to do in js 
that is by first accessing the element by using document query selector and then changing the 
inner html 

this usestate is an example of hook 

understood the concept of hooks by making a counter in which value decreases and increases upon 
clicking the respective button 
