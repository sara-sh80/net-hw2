var arr = []

var AddToList = () =>{

    //create label element
    var name = document.getElementById("inp1").value
    var label = document.createElement("label")
    label.innerText = name
    label.id = name
    document.getElementById("demo").appendChild(label)

    //create input element
    var input = document.createElement("input")
    arr.push(input)
    console.log(arr)
    input.id = arr.length
    input.setAttribute('type', 'checkbox')
    input.name = name

    //create title attribute for task
    const titleAtt = document.createAttribute("title")
    titleAtt.value = name
    input.setAttributeNode(titleAtt)

    //create completed attribute for task
    const completedAtt = document.createAttribute("completed")
    completedAtt.value = "false"
    input.setAttributeNode(completedAtt)

    document.getElementById(name).appendChild(input)


    var count = document.getElementById("c3").innerText
    count = Number(count)
    count = count + 1
    document.getElementById("c3").innerHTML = count

    var count = document.getElementById("c1").innerText
    count = Number(count)
    count = count + 1
    document.getElementById("c1").innerHTML = count


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
