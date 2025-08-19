  const input = document.getElementById("todo-input")
    const savebtn = document.getElementById("Save")
    const cancelbtn = document.getElementById("cancel")
    const addbtn = document.getElementById("addBtn")
    const tasksList = document.getElementById("list-tasks")



    addbtn.addEventListener('click', function(){
        input.disabled = false;
        input.focus()
    })

    cancelbtn.addEventListener('click', function(){
        input.value = ""
        input.disabled = true
    })

    savebtn.addEventListener('click', function(){
        const text = input.value.trim()

        if(text === "") return;

        const li = document.createElement("li")

        const span = document.createElement("span")
        span.textContent = text
        span.className = "tasktext"

        const listbtns = document.createElement("div")
        listbtns.className = "ListButtons"

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.addEventListener('click', function(){

            const editing = span.isContentEditable

            if(!editing){
                span.contentEditable = true;
                editBtn.textContent = "Save"
            }
            else{
                span.contentEditable = false;
                editBtn.textContent = "Edit"
            }
        })

        const deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"
        deletebtn.addEventListener('click', function(){
            li.classList.toggle("strike")
            
            if(deletebtn.textContent === "Delete"){
                deletebtn.textContent = "Undo"
        }else{
            deletebtn.textContent = "Delete"
        }
        })
        

        listbtns.appendChild(editBtn)
        listbtns.appendChild(deletebtn)

        li.appendChild(span)
        li.appendChild(listbtns)
        tasksList.appendChild(li)

        input.value = ""
        input.disabled = true
    })

