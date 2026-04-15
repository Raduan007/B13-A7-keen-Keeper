import { createContext, useContext, useState } from "react";

const CheckInContext = createContext();

export const useCheckIn = () => {
  return useContext(CheckInContext);
};

export const CheckInProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addCheckIn = (type, friend) => {
    const newItem = {
      id: Date.now(),
      type,
      contactName: friend?.name,
      contactId: friend?.id,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <CheckInContext.Provider
      value={{
        timeline,
        addCheckIn,
      }}>
      {children}
    </CheckInContext.Provider>
  );
};