# To-Do List application 

![Add Note](https://github.com/anderson92zolis/keeper_del_add_app/blob/develop/photo/add%20note.jpg)
![Delete Note](https://github.com/anderson92zolis/keeper_del_add_app/blob/develop/photo/delete.jpg)
![Material ui](https://github.com/anderson92zolis/keeper_del_add_app/blob/develop/photo/material%20ui.jpg)


Starting the project, you'll notice that the challenge instructions are very simple. All we want to do is to be able to add notes and delete notes from our keeper app. The final functionality that you're looking for is when we add a note with a new title and when we click the Add button it clears those inputs and pushes a new note into our array of notes.

### betters
The project covers the process of styling the application using material-ui. It starts by adding icons to the application, then creates a floating action button using the Fab component. Next, it adds a zoom transition to the Fab button. Finally, it introduces conditional rendering to make the title input and zoom in button appear only when the content area is expanded.

Here are some key takeaways:

1. Material-ui is a library of pre-built React components that can be used to create a consistent and modern look for applications.
2. Conditional rendering can be used to show or hide components based on certain conditions.
3. Zoom transitions can be used to make components animate on screen.
4. Background images can be added to the application using CSS.


<br>

## Instructions

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

> This is the end result you're aiming for:
> https://pogqj.csb.app/

<br>
