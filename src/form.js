import { useState } from "react";
import { useHistory } from "react-router-dom";


const Form = () => {
    let [title, settitle] = useState('')
    let [producer, setproducer] = useState('')
    let [Budget, setBudget] = useState('')
    let [Hero, setHero] = useState('')
    let [Language, setLanguage] = useState('')
    let history = useHistory();



    let handlesubmit = (e) => {   // function "e" is called to event 
        e.preventDefault(); // preventDefault is used to not to get reload
        let data = { title, producer, Budget, Hero, Language }
        // console.log(data);
        fetch("http://localhost:5000/series", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert('data added successfully')
                history.push('./form')
            })
    }
    return (
        <div className="Form">
            <div>
                <img src="" alt="" />
            </div>

            <div>
                <form onSubmit={handlesubmit}>
                    <label >Title:     <input type="text" placeholder="Movie Name" value={title} onChange={(e) => { settitle(e.target.value) }} /> </label> <br />
                    <label >producer:     <input type="text" placeholder="gener" value={producer} onChange={(e) => { setproducer(e.target.value) }} /></label> <br />
                    <label >Budget: <input type="text" placeholder="Famousquote" value={Budget} onChange={(e) => { setBudget(e.target.value) }} /></label> <br />
                    <label >Hero: <input type="text" placeholder="Hero" value={Hero} onChange={(e) => { setHero(e.target.value) }} /> </label> <br />
                    <label >Language: <input type="text" placeholder="Language" value={Language} onChange={(e) => { setLanguage(e.target.value) }} /> </label> <br />
                    <button type="submit">Add</button>
                </form>
                <h1>{title}</h1>
                <h1>{producer}</h1>
                <h1>{Budget}</h1>
                <h1>{Hero}</h1>
                <h1>{Language}</h1>
            </div>

        </div>
    );
}

export default Form;