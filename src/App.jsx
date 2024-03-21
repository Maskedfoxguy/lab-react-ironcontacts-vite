import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    
    const clonedPeople = [...people];
   

   
    const remainingContacts = contacts.filter((contact) => {
      for (let i = 0; i < clonedPeople.length; i++) {
        if (clonedPeople[i].id === contact.id) {
          return false;
        }
      }
      return true;
    });


   
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
   

    
    clonedPeople.push(randomContact);
   

    
    setPeople(clonedPeople);
  };

  const sortByName = () => {
    const clonedPeople = [...people];
    
    const sortedPeopleByName = clonedPeople.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  

    setPeople(sortedPeopleByName);
  };
 


  const sortByPopularity = () => {
    const clonedPeople = [...people];
  
    const sortedPeopleByPopularity = clonedPeople.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    });
  


    setPeople(sortedPeopleByPopularity);
  };

  const removeContact = (contactId) => {
    const filteredPeople = people.filter((contact) => {
      return contact.id !== contactId;
    });
    console.log("filteredPeople", filteredPeople);
    setPeople(filteredPeople);
  };


  
  
  
  
  
  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>
      <br />
      <button onClick={sortByName}>Sort by name</button>
      <br />
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <tbody>
          <tr>

            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          {people.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img src={actor.pictureUrl} />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>

                <td>{actor.wonOscar && <p>🏆</p>}</td>
                <td>{actor.wonEmmy && <p>🌟</p>}</td>
                <td>
                  <button onClick={() => removeContact(actor.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
