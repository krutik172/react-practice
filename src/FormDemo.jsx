function handleFormSubmit(evt){
    evt.preventDefault();
    console.log("form submitted");
}

export default function FormDemo(){
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}