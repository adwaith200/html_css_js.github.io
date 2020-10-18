// Goal

// Add a todo

    // 1 Listen to click of button
document.querySelector('.button_add').addEventListener('click',function(event){
    // 2 Extract the value of the input form
    var todoinput=document.querySelector('.task_input').value;
    console.log(todoinput);

    if(todoinput=='')
    {
        alert('Plz input something');
    }
    else{
        // 3 Append the content to the todo-list
        var myhtml=`
        <div class="task">
            <div>
                <input type="checkbox">${todoinput}
            </div>
            <button class="delete_btn">X</button>
        </div>
        `;
        document.querySelector('.task_list').insertAdjacentHTML('beforeend',myhtml);
        
        // Clear the input for better experience
        document.querySelector('.task_input').value='';
    }
});

// Delete a todo
document.querySelector('.task_list').addEventListener('click',function(event){
    console.log(event.target.classList.contains('delete_btn'));
    if(event.target.classList.contains('delete_btn'))
    {
        console.log(event.target);
        console.log(event.target.parentElement);
        event.target.parentElement.remove();
    }
});
