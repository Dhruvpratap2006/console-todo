let todo = [];

let req = prompt("Enter the request");

while(true) {
    req = req.toLowerCase();

    if(req == "quit") {
        console.log("Quitting app...");
        break;
    }

    else if(req == "list") {
        console.log("____________________");
        if(todo.length == 0) {
            console.log("No task yet!!");
        } else {
            for(let i = 0; i < todo.length; i++) {
            console.log(i , todo[i]);
            }
        }
        
        console.log("___________________");
    }

    else if(req == "add") {
        let task = prompt("Enter the task which you want to add");
        todo.push(task);
        console.log("task added");
    }

    else if(req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx , 1);
        console.log("task deleted successfully");
    }

    else {
        console.log("Wrong request. Try: add, list, delete, done, quit");
    }

    req = prompt("Please enter your request");
}
