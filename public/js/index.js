var Create = document.getElementById("add_student")
Create.addEventListener('submit',AddStudent)

function AddStudent(event){
    event.preventDefault()
    var Name = event.target.name.value;
    var Email = event.target.email.value;
    var Ca1 = event.target.ca1.value;
    var Ca2 = event.target.ca2.value;
    var Ca3 = event.target.ca3.value;
    
    var obj = {
        name : Name,
        email : Email,
        ca1 : Ca1,
        ca2 : Ca2,
        ca3 : Ca3
    }
    
    console.log("Hello")
    console.log(obj)

    var options = {
        method : 'POST',
        body : JSON.stringify(obj),
        headers : new Headers({
            'Content-Type' : 'application/json'
        })
    }

    fetch('/add',options)
    .then(res => res.json())
    .then(data => {
        
        console.log(data);
        if(data.status === 200)
        window.open('/',target = "_self")

    })


}

function dlt(){
    console.log("Deleting..")


    var rowId = event.target.parentNode.parentNode.id;
    console.log(rowId)

    var id1 = document.getElementById(rowId);
    console.log(id1)
    var id = document.getElementById(rowId).getElementsByTagName("td")[2].innerHTML;

    var options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: null
    }
    fetch(`/delete/${id}`, options)
    .then(res => res.json())
    .then(data => {
        
        console.log(data);
        
        if(data.status === 200){
            window.open('/',target = "_self")
        }
        
    })

}



