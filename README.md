Todo List with vanilar javascript with html and css.

2020/05/23
Text in input tag vertical align setting should be made.

Todos data are overlapped in localStorage when page reloaded. It should be settled.

2020/05/24
Todo data overlapping error is fixed.

Add function for checking todo list and remove any thing clicked by user.

But, remove todo function has some error, some todos are not removed from todo list box, when user reloaded the web page.

2020/05/26
Find the reason, why some todos were not removed after remove todo function was proceeded.
Because of value mismatch between todos(list), newTodos(list in function:handleRemove)

Embeded function filter does not change the value of his target list. So, the list:todos value was different with newTodos value.

Clear and give newTodos value to todos: list
(Add new line : 'todos = newTodos')