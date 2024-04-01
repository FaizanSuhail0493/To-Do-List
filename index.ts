import inquirer from "inquirer";

// let todos = [];
// let condition = true;

// while (condition)
// {

// let addTask = await inquirer.prompt([
//         {
//             name: "todo",
//             type: "input",
//             message: "What do you want to Add in the list "
//         },
//         {
//             name: "addMore",
//             type: "confirm",
//             message: "Do you want to Add More ",
//             default: "false"
//         }
//     ]
// );
//     todos.push(addTask.todo);
//     condition = (addTask.addMore)
//     console.log(todos);
// };
console.log(`\n Hi Guys Welcome to Faizan's Todo List I have made 3 options for todo list just for practice`)
let daily = [`You have to do these following things `];
let eid = [`You have to do these following things `];
let trip = [`You have to do these following things `];
let condition = "true"
let answer = await inquirer.prompt(
[
    {
        name: "todolist",
        type: "list",
        choices: ["Dailyroutine", "eidActivities", "tripPlanning"],
        message: "Please select you todo list"
    }
])
if (answer.todolist === "Dailyroutine"){

    while (condition) {
    
    let addTask = await inquirer.prompt([
            {
                name: "todo1",
                type: "input",
                message: "What do you want to Add in the list "
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to Add More ",
                default: "false"
            }
        ]
    );
        daily.push(addTask.todo1);
        condition = (addTask.addMore)
        console.log(daily);
    };
} else if (answer.todolist === "eidActivities"){

    while (condition) {
    
    let addTask = await inquirer.prompt([
            {
                name: "todo2",
                type: "input",
                message: "What do you want to Add in the list "
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to Add More ",
                default: "false"
            }
        ]
    );
        eid.push(addTask.todo2);
        condition = (addTask.addMore)
        console.log(eid);
    }; 
}
else if (answer.todolist === "tripPlanning"){

        while (condition) {
        
        let addTask = await inquirer.prompt([
                {
                    name: "todo3",
                    type: "input",
                    message: "What do you want to Add in the list "
                },
                {
                    name: "addMore",
                    type: "confirm",
                    message: "Do you want to Add More ",
                    default: "false"
                }
            ]
        );
            trip.push(addTask.todo3);
            condition = (addTask.addMore)
            console.log(trip);
        };
} else {
    console.log("Please Select todos first")
};