Starting the project, you'll notice that the challenge instructions are very simple. All we want to do is to be able to add notes and delete notes from our keeper app. The final functionality that you're looking for is when we add a note with a new title and when we click the Add button it clears those inputs and pushes a new note into our array of notes.

## Register Login App


![Login](https://github.com/anderson92zolis/Login_Register_App_React/blob/main/photo/Login.jpg)
![Register](https://github.com/anderson92zolis/Login_Register_App_React/blob/main/photo/register.jpg)


<br>


### Instructions

<br>

1. Implement the add note functionality.
    1. Create a constant that keeps track of the title and content.
    2. Pass the new note back to the App.
    3. Add new note to an array.
    4. Take array and render seperate Note components for each item.

2. Implement the delete note functionality.
    1. Callback from the Note component to trigger a delete function.
    2. Use the filter function to filter out the item that needs deletion.
    3. Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/


> Challenge: Without moving the userIsRegistered variable,
1. Show Login as the button text if userIsRegistered is true.
> Show Register as the button text if userIsRegistered is false.

2. Only show the Confirm Password input if userIsRegistered is false.
> Don't show it if userIsRegistered is true.

<br>


### Conditional Rendering 

Conditional rendering is a fundamental concept in React that allows you to show different components depending on a particular condition, we will learn how to use conditional rendering to:

> Show the login screen if the user is registered, and the register screen if the user is not registered.
> Show the confirm password input if the user is registering, and not show it if the user is logging in.

**Step 1: Passing Props**

The first step is to pass a prop called isRegistered from the App.js component to the form.jsx component. This prop will be used to determine whether to show the login or register screen.

**Step 2: Using the AND Operator**

The second step is to use the AND operator to check whether the isRegistered prop is equal to false inside the Form.jsx component. If it is, then the confirm password input will be shown. Otherwise, it will not be shown.

Alternative Approach: Ternary Operator

An alternative approach to using the AND operator is to use a ternary operator. The ternary operator is a concise way to evaluate a condition and return one value if the condition is true, and another value if the condition is false.

Shortest Possible Way

> !props.isRegistered is equivalent to props.isRegistered === false. This allows you to write the entire conditional rendering statement in one line.

Conclusion

Conditional rendering is a powerful tool that can be used to create dynamic and responsive user interfaces. By learning how to use conditional rendering, you can build more sophisticated React applications.