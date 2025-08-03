*** What I Learned *** 
--- 

### What is React 

- Open source js library.
- used for building UI and UI components.
- Created by facebook.
- main goal: fast, interactive and reusable ui 
- component based : Breaking down UI small, independent and reusable pieces.
    - default component
    - named component
- Virtual DOM
- Best for SPA 
    - JSX   : syntax extention (HTML like code).
    - props : components communicate each other using props(parent pass data to child through props). 
    - state : Data can change overtime using state. manage state using hook. 

--- 
### Node.js 
--- 
- js runtime allows to run js code outside of web browser.
- npm   : node package manager that comes with node.js, commandline
- vite  : modern and fast tool for project 
    - other tool like vite:
        - Webpack 
        - Next.js 
        - Gatsby 
- NVM   : (node version manager) easily switch between node version.
--- 
### Commands 
--- 
    - which node         : to locate where our node installed 
    - nvm ls             : list of all version 
    - nvm use <version>  : switch version 
    - nvm alias default <version> : to set a version default. 

--- 
### useState 
--- 
    - State changes over time when updated and your component to re-render.
    - The useState Hook takes an initial value as an argument and returns an array with two elements:
        I.  The current state value.
        II. A set function to update that value. 
    - const [stateVariable, setStateVariable] = useState(initialValue);

