import React, { useEffect, useState, createContext } from "react";
import socketClient from 'socket.io-client';

export const SocketContext = createContext();


export const SocketProvider = (props) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = socketClient("http://localhost:4001");
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  return (
    <SocketContext.Provider value={{socket}}>{props.children}</SocketContext.Provider>
  );
};

export default SocketProvider;
