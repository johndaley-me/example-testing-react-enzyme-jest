# React Testing Mini-Course with Enzyme and Jest

This README contains several exercises that illustrate basic concepts of using [Enzyme](http://airbnb.io/enzyme/) and [Jest](https://facebook.github.io/jest/) to test React applications and components. By working through these exercises you will learn:
* the difference between Enzyme [shallow](http://airbnb.io/enzyme/docs/api/shallow.html) and [mount](http://airbnb.io/enzyme/docs/api/mount.html) (shallow vs.deep rendering)
* how [Jest snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html#content) work and how they can simplify test writing
* how to run Jest (watch mode, update snapshots, run a single file, etc.)

With even just a basic knowledge of these tools and concepts you should be on your way to a more productive and enjoyable dev and test experience with React.

## Audience
This mini-course primarily targets those who are new at React unit testing or have not used Enzyme or Jest.

## Prerequisites
* Node >= 6
* npm >= 5

## Setup
```
git clone git@github.com:johndaley-me/example-testing-react-enzyme-jest.git
# or git clone https://github.com/johndaley-me/example-testing-react-enzyme-jest.git
npm install
# start the application and launch browser
npm start
# In another terminal window launch test watch mode
npm test
```
In the test terminal press `a` to run all tests. All tests should run green.

Once everything is started you will want to arrange your windows so that you can edit code, see the terminal test window, and see the browser all at the same time.

## Exercises
In these exercises you will mainly be changing application code. These changes will break existing tests. Jest will provide useful errors. By taking a close look at the errors you will learn how Enzyme renders React components and how Jest snapshots work.

Since you won't be writing tests and the code changes are quite small you can probably run through the exercises quickly if you want, or take time to experiment.

### Exercise 1 - Snapshot Intro
Modify the `Welcome to React` message to read `React Testing with Enzyme and Jest`.

_Hint: Look in `./src/App.js`_

After, making this change you should see the Jest error message in the test runner output. It displays a nice diff enabled with the Jest snapshot feature. At this point you are probably confident that this is the change you want to make so you can press `u` and Jest will automatically update the test snapshot to match the new welcome message.

Take a look at the corresponding test file in `./src/App.test.js`. Jest automatically looks for test files with a `test.js` or `spec.js` suffix or under a `__test__` folder.

### Exercise 2 - Shallow vs. Mount
Change the `Start` button text to `Start Car`.

_Hint: Look in `./src/Car.js`_

After, making this change you should see more Jest error messages. Take a look at the messages, and if you are sure you are making the right changes, then go ahead and press `u` to update the tests to expect the new button text.

Now, open `./src/App.test.js` and replace any instances of `mount` with `shallow`. You should see some new error messages. Now that you are using `shallow` rendering the snapshot is smaller because it stays flat without rendering child components. Press `u` to update the tests to expect the new button text.

Finally, change the button text back to `Start`. Now, you will get a Jest error but notice that it is only coming from `./src/Car.test.js` and not `./src/App.test.js`. Using `shallow` follows a more pure unit test pattern where the test only concerns itself with one component and if the correct properties are passed down to child components.

Press `u` to update the tests snapshots.

### Exercise 3 - CSS changes
Increase the size of the React logo to `120px`.

_Hint: Look for `.App-logo` in `./src/App.css`_

Were you expect to see a testing error? We can see that a Jest snapshot test is not the same thing as a visual regression that may compare actual screenshots.

Now, modify the Car snapshot test to pass the color `blue` instead of `red`.

_Hint: Look in `./src/Car.test.js`_

Besides the obvious error you should see about the text change in the Car heading, you should also see a different with the `style` property. The Jest snapshot includes any inline styles.

Press `u` to update the tests snapshots and fix any additional tests as needed.

### Exercise 4 - Redux Action
Modify the `handleStartCar` action to accept an object parameter with a `startTime` property and add `startTime` to the return object.

_Hint: Look in `./src/actions.js`_

Update the actions test file to pass an object with a `startTime` value.

_Hint: { startTime: 234 }_

Even though this isn't a change to a React component, you probably aren't too surprised by the Jest error message you should see now. Jest snapshots can be useful to test serializable values and reduce boilerplate for testing Redux actions and reducers.

Press `u` to update the tests snapshots and fix any additional tests as needed.

### Exercise 5 - Redux Reducer
Continuing on the theme from Exercise 4, change the reducer to return the `startTime` from the action in addition to the `isRunning` property that it already returns.

_Hint: Look in `./src/reducer.js`_

There's not much to say here that hasn't already been said in Exercise 4.

## Extra Credit
* Remove `export { Car };` from `./src/Car.js`. Add `export ` before `const Car`. What does the snapshot error tell you?
* Try importing the React Component in the tests using the default export and not the named export. Can you see how this would be significant if you were using higher-order components with a library such as [Recompose](https://github.com/acdlite/recompose)
* Replace the `toJson(wrapper)` in the tests with just `wrapper`. Take a look at how the snapshot output changes.
* Write some tests using other Jest matchers besides snapshots.
* Build something cool with this project as a just starter template. Write tests as you go. Check out Jest options like code coverage.
