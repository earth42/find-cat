# Find Cat
This package adds a cypress custom command, so you could get uncertain element for some unknown fun.

## Installation
```shell
npm install find-cat@latest
```

## Usage
### Add custom cmmand
```js
# Add following code in cypress/support/e2e.js file
import findcat from 'find-cat'
```
### Create cat jump funcion
```js
# Original function is as follows:
const catJump = () => {
    cy.log('Cat is alive, and jumps for no reason')
    console.log('Cat is alive, and jumps for no reason')
}
```
### Add it in general cy file
```js
cy.get('.header').findcat('button', catJump)
```