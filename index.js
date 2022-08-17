// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
        .then((resp) => resp.json())
        .then((data) => {
            const headerId = document.createElement('h1')
            headerId.innerHTML = data.id 
            document.querySelector('body').appendChild(headerId)
            
        })
        .catch((error) => {
            const eMessage = document.createElement('h1')
            eMessage.innerHTML = error
            document.querySelector('body').appendChild(eMessage)
        })
}