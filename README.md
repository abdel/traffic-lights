# traffic-lights

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
