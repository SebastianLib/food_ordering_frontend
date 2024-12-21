import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return <div className="pt-24 mt-5 px-5 flex flex-wrap gap-5">

  {[1,1,1].map((item, i) => <EventCard key={i} item={item}/>)}

  </div>;
};

export default Events;
