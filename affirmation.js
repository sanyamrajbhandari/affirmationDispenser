const  getAffirmation = async ()=>{
    try{
        response = await fetch("https://www.affirmations.dev/")

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        data = await response.json();
        console.log(data)
    }catch(error){
        console.log("An errror occured!:",error.message)
    }
}

getAffirmation();
