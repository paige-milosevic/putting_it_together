
import './App.css';
import People from './components/People';

function App() {

  const peopleList = [
    {
      firstName: "Jane",
      lastName : "Done",
      age: 45,
      hairColor: "Black"
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown"
    }
  ];
  return(
    <div className="App">
    {
      peopleList.map((mameber, index) => {
        return(
          <People
          key={index}
          firstName={mameber.firstName}
          lastName={mameber.lastName}
          age={mameber.age}
          hairColor={mameber.hairColor}
          />
        )
      }
      )
    }
    </div>
  )

}

export default App;
