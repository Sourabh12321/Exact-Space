console.log("done")
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputData = form.text.value;
    
    try {
        const parsedData = JSON.parse(inputData);
        console.log("Valid JSON:", parsedData);
        console.log(inputData)
        fetch('http://localhost:3000/data',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(parsedData) 
        }).then(res=> res.json()).then((data)=>{
            Swal.fire({
                title: 'success',
                text: 'Request send successfully',
                icon: 'success'
            });
            console.log(data.msg);
            displayData(data.msg)
        }).catch((err)=>{
            console.log(err);
        })
        // Do something with the valid JSON, if needed
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter valid JSON',
            icon: 'error'
        });
        console.log("Not a valid JSON:", inputData);
        // Handle the case where inputData is not valid JSON
    }
});

function displayData(datas){
    let main = document.getElementById("form");
    for(let data in datas){
        let div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent = data;

        let input = document.createElement("input");
        input.value = datas[data];
        input.style.padding = "10px";
        input.style.border = "1px solid #ccc";
        // input.style.padding = "10px";
        div.style.marginTop = "5px"
        
        div.append(label,input);

        main.append(div);
    }
}
