let productscontent= document.getElementById("products")
let fruitscontent= document.getElementById("fruList")
let vegList= document.getElementById("vegList")
fetch('https://localhost:5000/products')
.then (
    response =>{response.json()
    .then(data =>{
        let prdcts=data
        content.forEach(element => {
            let child= document.createElement("li");
            let features= document.createTextNode(element.name);
            child.append(features)
            fruitscontent.appendChild(child)
        });
    })
})
.catch(error=>{
    console.log(error)
})

fetch ('http://localhost:5000/fruList')
.then (
    response => {response.json()
        .then(content=>{
            let fruits=content
            content.forEach(element => {
                let child= document.createElement("li");
                let features= document.createTextNode(element.name);
                child.append(features)
                fruitscontent.appendChild(child)
            })
        })

    })
.catch(error=>{
    console.log(error)
})

fetch ('http://localhost:5000/vegList')
.then (
    response => {responsse.json()
        .then(content=>{
            let vegtables=content
            content.forEach(element =>{
                let child = document.createElement("li");
                let features= document.createTextNode(element.name);
                child.append(features)
                fruitscontent.appendChild(child)
            })
        })
    })
.catch (error=>{
    console.log(error)
})
    
