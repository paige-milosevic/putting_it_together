import React, {useState} from 'react';


const People = (props) => {

    const {firstName, lastName, age, hairColor} = props;

    const [currentAge, setCurrentAge] = useState(age);
    const addAge = () => {
        setCurrentAge(currentAge+1)
    }

    return(
        <div>
            <h1>{lastName}&#44; {firstName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={addAge}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
    }
export default People;