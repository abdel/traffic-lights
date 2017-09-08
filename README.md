# traffic-lights

[![Build Status](https://travis-ci.com/abdel/traffic-lights.svg?token=t7xyTiRR4wszKxRKqRLP&branch=master)](https://travis-ci.com/abdel/traffic-lights)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction
A basic traffic lights simulation in an intersection. The traffic lights change automatically every 5 minutes, with a 30 second delay between changing from yellow to red.

### Notes
- Turning left/right is not allowed in this intersection.
    - North & South traffic lights will change simultaneously
    - East & West traffic lights will change simultaneously
- The total time for changing traffic lights is 5 minutes **including** 30 second yellow light delay

## Getting Started

### Requirements
- Node v7+

### Installation
Follow the instructions below to get the project up and running on your machine

```
# Clone the repository from GitHub
git clone https://github.com/abdel/traffic-lights.git

# Change to the project directory
cd traffic-lights 

# Install dependencies
npm install

# Start the application
npm start
```

### Testing
The [tape](https://github.com/substack/tape) framework is used for testing and assertions. The `npm test` command checks for linting errors, then executes the tests available inside the `test/` directory.

## Sample Output

The sample output below was generated with an initial state `northSouth: Green, eastWest: Red`.

```
01:09:42 northSouth: Green
01:09:42 eastWest: Red
01:09:42 northSouth: Yellow
01:09:42 eastWest: Red
01:10:12 northSouth: Red
01:10:12 eastWest: Green
01:14:42 northSouth: Red
01:14:42 eastWest: Yellow
01:15:12 northSouth: Green
01:15:12 eastWest: Red
01:19:42 northSouth: Yellow
01:19:42 eastWest: Red
01:20:12 northSouth: Red
01:20:12 eastWest: Green
01:24:42 northSouth: Red
01:24:42 eastWest: Yellow
01:25:12 northSouth: Green
01:25:12 eastWest: Red
01:29:42 northSouth: Yellow
01:29:42 eastWest: Red
01:30:12 northSouth: Red
01:30:12 eastWest: Green
01:34:42 northSouth: Red
01:34:42 eastWest: Yellow
01:35:12 northSouth: Green
01:35:12 eastWest: Red
01:39:42 northSouth: Yellow
01:39:42 eastWest: Red
01:40:12 northSouth: Red
01:40:12 eastWest: Green
01:44:42 northSouth: Red
01:44:42 eastWest: Yellow
01:45:12 northSouth: Green
01:45:12 eastWest: Red
```