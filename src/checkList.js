// Save array to local storage
function saveArrayToLocalStorage() {
    console.log("saving")
    myarr = []
    for (i = 0; i < arr.length; i++){
        myarr.push({
            "id": arr[i].id,
            "title": arr[i].title,
            "completed": arr[i].checked
        })
    }
    console.log(myarr)
    localStorage.setItem("tasks", JSON.stringify(myarr))
}

// Retrieve array from local storage
function getArrayFromLocalStorage() {
    console.log("loading")
    const array = localStorage.getItem("tasks")
    console.log(array)
    myarr = array ? JSON.parse(array) : []
    for (i = 0; i < myarr.length; i++){
        arr.push(addTaskToDemo(
            myarr[i].id, myarr[i].title, myarr[i].completed
        ))
    }
}


function addTaskToDemo(id, name, completed) {
    total += 1
    if (completed) {
        done += 1
    } else {
        remaining += 1
    }

    var label = document.createElement("label")
    label.innerText = name
    label.id = name

    var btn = document.createElement("button")
    btn.style.float = 'right'
    var image = document.createElement('img')
    image.src = 'images.png'
    image.width = 8
    btn.appendChild(image)
    btn.onclick = function () {

    }
    var div = document.createElement("div")
    div.style.width="400px"
    div.appendChild(label)
    div.append(btn)
    document.getElementById("demo").appendChild(div)

    //create input element
    var input = document.createElement("input")

    input.id = arr.length
    input.setAttribute('type', 'checkbox')
    input.name = name
    input.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            remaining -= 1
            done += 1
        } else {
            done -= 1
            remaining += 1
        }
        document.getElementById("c2").innerHTML = done
        document.getElementById("c1").innerHTML = remaining
        saveArrayToLocalStorage()
    })
    input.checked = completed

    //create title attribute for task
    const titleAtt = document.createAttribute("title")
    titleAtt.value = name
    input.setAttributeNode(titleAtt)

    //create completed attribute for task
    const completedAtt = document.createAttribute("completed")
    completedAtt.value = "false"
    input.setAttributeNode(completedAtt)

    document.getElementById(name).appendChild(input)
    document.getElementById("c3").innerHTML = total
    document.getElementById("c2").innerHTML = done
    document.getElementById("c1").innerHTML = remaining

    return input
}


var arr = []
var done = 0
var remaining = 0
var total = 0
getArrayFromLocalStorage()

var AddToList = () =>{
    //create label element
    var name = document.getElementById("inp1").value
    document.getElementById("inp1").value = ""

    input = addTaskToDemo(arr.length, name, false)
    arr.push(input)
    saveArrayToLocalStorage()
}
