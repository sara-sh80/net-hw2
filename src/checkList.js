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
    var label = document.createElement("label")
    label.innerText = name
    label.id = name
    document.getElementById("demo").appendChild(label)

    //create input element
    var input = document.createElement("input")

    input.id = arr.length
    input.setAttribute('type', 'checkbox')
    input.name = name
    input.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        alert('checked');
      } else {
        alert('not checked');
      }
    })

    //create title attribute for task
    const titleAtt = document.createAttribute("title")
    titleAtt.value = name
    input.setAttributeNode(titleAtt)

    //create completed attribute for task
    const completedAtt = document.createAttribute("completed")
    completedAtt.value = "false"
    input.setAttributeNode(completedAtt)

    document.getElementById(name).appendChild(input)
    return input
}


var arr = []
getArrayFromLocalStorage()

var AddToList = () =>{

    //create label element
    var name = document.getElementById("inp1").value
    document.getElementById("inp1").value = ""

    input = addTaskToDemo(arr.length, name, false)
    arr.push(input)
    saveArrayToLocalStorage()

    var count = document.getElementById("c3").innerText
    count = Number(count)
    count = count + 1
    document.getElementById("c3").innerHTML = count

    var count = document.getElementById("c1").innerText
    count = Number(count)
    count = count + 1
    document.getElementById("c1").innerHTML = count

    saveArrayToLocalStorage(arr)

    // for (i = 0; i < arr.length; i++){
    //     // console.log(arr.length)
    //     if (arr[i].checked){
    //
    //         var count = document.getElementById("c1").innerText
    //         count = Number(count)
    //         count = count - 1
    //         document.getElementById("c1").innerHTML = count
    //
    //         var count = document.getElementById("c3").innerText
    //         count = Number(count)
    //         count = count - 1
    //         document.getElementById("c3").innerHTML = count
    //
    //         var count = document.getElementById("c2").innerText
    //         count = Number(count)
    //         count = count + 1
    //         document.getElementById("c2").innerHTML = count
    //
    //     }
    // }
}
