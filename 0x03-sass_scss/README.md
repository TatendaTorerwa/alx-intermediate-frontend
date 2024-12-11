# SASS (Syntactically Awesome Stylesheets)

SASS is a powerful CSS preprocessor that extends CSS with features like variables, nested rules, mixins, functions, and more. It helps write cleaner, more maintainable, and reusable styles for web projects.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Advanced Usage](#advanced-usage)
- [Compiling SASS](#compiling-sass)
- [SASS vs CSS](#sass-vs-css)
- [Resources](#resources)

## Introduction

SASS stands for **Syntactically Awesome Stylesheets**. It is a CSS preprocessor that adds programming features to CSS, making it more dynamic and powerful. It allows for variables, nesting, partials, and more, providing a structured way to organize CSS code.

## Features

- **Variables**: Store values like colors, fonts, or any other CSS values for reuse.
- **Nesting**: Nest CSS selectors in a way that mirrors HTML structure.
- **Mixins**: Reusable chunks of code that can be included in other rules.
- **Inheritance**: Share styles between selectors using `@extend`.
- **Partials**: Split large CSS files into smaller, manageable pieces.
- **Mathematical Operations**: Perform arithmetic like addition, subtraction, multiplication, and division within your stylesheets.

## Installation

To get started with SASS, you need to install it first.

### Using npm:

If you’re using Node.js, you can install SASS globally with npm:

```bash
npm install -g sass

## Basic Usage
- SASS files use the .scss (Sassy CSS) extension. Below are some basic examples demonstrating the key features of SASS:

### Variables
- Variables allow you to store values like colors, fonts, or any other CSS properties for reuse.

$primary-color: #3498db;
$font-size: 16px;

body {
  font-size: $font-size;
  color: $primary-color;
}

### Nesting
- Nesting allows you to mirror the HTML structure in your CSS, making it more readable and easier to maintain.

nav {
  background-color: #333;
  
  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
  }

  a {
    color: white;
    text-decoration: none;
  }
}

### Mixins
- Mixins allow you to define reusable chunks of code that can be included in other rules.

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}

### Inheritance
- Inheritance allows you to share styles between selectors using the @extend directive.

%button-style {
  padding: 10px 20px;
  background-color: #3498db;
  border-radius: 5px;
}

.button-primary {
  @extend %button-style;
}

.button-secondary {
  @extend %button-style;
  background-color: #2ecc71;
}

### Partials
- Partials allow you to break your CSS into smaller files, making it more manageable. Partials are saved with an underscore at the beginning of the file name.

/_variables.scss
/_buttons.scss

- Then, you can import them into your main SASS file:
@import 'variables';
@import 'buttons';

Compiling SASS
SASS needs to be compiled into regular CSS before it can be used in a browser. You can compile SASS files using the sass command in your terminal.

Example:
To compile a SASS file:
sass style.scss style.css
