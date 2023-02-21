import React, { useState } from "react";

export default function ResForm({ addNewRes }) {
  const [name, setName] = useState('') // name state
  const [date, setDate] = useState('') // date state
  const [time, setTime] = useState('') // time state
  const [party, setParty] = useState(0) // Party state


  return (
    <form className="res-form">
      <input type="text" name="name" value={name} placeholder="Enter name" onChange={(event) => setName(event.target.value)} />
      <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
      <input type="time" name="time" value={time} onChange={(event) => setTime(event.target.value)} />
      <input type="number" name="party" value={party} onChange={(event) => setParty(event.target.value)} />
      <button onClick={(event) => addNewRes(event, {
        id: Date.now(),
        name: name,
        date: date,
        time: time,
        number: party
      })}>Submit</button>
    </form>
  )
}