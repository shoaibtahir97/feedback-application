# Create React App

## 1). Deleting all the files in the source folder

Deleted all the files in the source folder to understand the workflow of React

## 2). StrictMode

StrictMode adds additional checks and warnings within our application. To use strictMode just wrap your parent component inside <StrictMode>

## 3). Using Styles in React

Create a global css file where all of your global classes are called

###########################################################################

# JSX

## 4). Return a single element from a component

Every component should always return a single component. There could be a div, but the problem is that the div will be rendered on the DOM. If you don't want a div to be rendered use an empty tag.

## 5). Use className instead of class attribute

## 6). Using JavaScript instead of JSX

We have a div with className of container and a child of h1 with the text My App

<!--
import React from 'react';

function App () {
    return React.createElement('div',{ className: 'container' },
    React.createElement('h1', {}, 'My App'))
}
 -->

## 7). Declaring varaibles and functions above the return statement

## 8). Using curly braces inside JSX to render variables and expressions

The curly braces are used not only to render variables but any kind of expressions e.g:
{5 + 5}. The result will be rendered on the DOM. You can also use Math.Random or any JS methods and expressions

## 9). Conditional Rendering

create an if else statement to render something when a condition is true or false. This can be done to render a piece of code or a complete component.
Using a AND operator to render the JSX is another way to use conditional rendering

#####################################################

# State

State is basically data.

## Types:

1). Component Level State => Data associated with one specific component
2). Global State => Data like a todo items which are required by all the components

## Functionality

UseState is a function that accepts a default value.
The array is destructured with the value which the function returns. The array accepts two values first is the name of the state and second is the function to update state.
