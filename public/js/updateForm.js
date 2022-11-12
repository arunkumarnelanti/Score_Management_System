var Update = document.getElementById("update_student")
Update.addEventListener('submit',UpdateStudent)

function UpdateStudent(event){
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
        method : 'PATCH',
        body : JSON.stringify(obj),
        headers : new Headers({
            'Content-Type' : 'application/json'
        })
    }

    fetch(`/update/${Email}`,options)
    .then(res => res.json())
    .then(data => {
        
        console.log(data);
        if(data.status === 200)
        window.open('/',target = "_self")

    })

}
