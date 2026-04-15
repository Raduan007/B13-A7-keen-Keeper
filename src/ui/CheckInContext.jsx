import React, { createContext, useContext, useState } from "react";

const CheckInContext = createContext();


export const CheckInProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addCheckIn = (type) => {
    const newItem = {
      id: Date.now(),
      type,
      contactName: "John Doe",
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <CheckInContext.Provider
      value={{
        timeline,
        addCheckIn,
      }}
    >
      {children}
    </CheckInContext.Provider>
  );
};
export const useCheckIn = () => {
  return useContext(CheckInContext);
};
