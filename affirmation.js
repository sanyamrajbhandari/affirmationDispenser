const affirmation = document.getElementById("quote");
const button = document.getElementById("getMore");
const  getAffirmation = async ()=>{
    try{
        response = await fetch(`https://api.allorigins.win/raw?url=https://www.affirmations.dev/?t=${Date.now()}`)

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        data = await response.json();
        console.log(data)
        affirmation.textContent = data.affirmation;
    }catch(error){
        console.log("An errror occured!:",error.message)
    }
}

getAffirmation();
button.addEventListener("click",()=>{
    getAffirmation();
    console.log("Button clicked!")
});


