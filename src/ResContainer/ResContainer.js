import React from "react";
import Reservation from "../Reservation/Reservation";

export default function ResContainer({ reservations }) {
  let resys;
  if (reservations) {
    resys = reservations.map((resData) => <Reservation data={resData} key={resData.id} />)
  }
  

  return (
    <div className="reservation-container">
      {resys}
    </div>
  )
}
