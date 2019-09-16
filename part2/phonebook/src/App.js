import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const Persons = ({ persons }) => {
    return persons.map(person => (
      <div key={person.name}>
        <p>{person.name}</p>
      </div>
    ));
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                  type="text"
                  value={newName}
                  onChange={event => setNewName(event.target.value)}
                />
        </div>
        <div>
          <button onClick={() => setPersons([...persons, {name: newName}])} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App
