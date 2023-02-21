import React from "react";

export default function Reservation({ data }) {
  return (
    <div className="reservation-card">
      <h2>Guest: {data.name}</h2>
      <p>Date: {data.date}</p>
      <p>Time: {data.time}</p>
      <p># in Party: {data.number}</p>
    </div>
  )
}