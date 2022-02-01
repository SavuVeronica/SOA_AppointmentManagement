# SOA_AppointmentManagement

Appointments management application

## 🎊 Features

This project provides an appointment management system, allowing users to create and manage their appointments and their corresponding reminders.

It contains two microservices created in NestJS (`rest-service` and `admin-app`) which implement the backend functionality of the application.
- `rest-service` - provides an API with CRUD operations on the appointments database. It uses Auth0 in order to secure the access to database and notifies the `admin-app` API each time an appointment is modified.
- `admin-app` - provides an API with CRUD operations on the reminders database. It also uses Auth0 in order to secure the access to the database. In addition, it also defines a listener which adapts the reminders database each time an appointment is modified. 

The web application is created using React, Webpack 5 and Module Federation, having the following structure:
- `mf1` - first microfrontend, containing the list of appointments and a button for creating a new appointment. Each appointments has attached a delete button and an update button.
- `mf2` - second microfrontend, containing the list of reminders and a button for creating a new reminder. Each reminder has attached a delete button and an update button.
- `front-container` - holds the two microfrontends. It uses Auth0 authentication system in order to authenticate the user and get the token needed in order to modify the database.

A Web Socket Gateway is defined in the `admin-app` microservice, which handles the communication between the web application and the two microfrontends. Library `react-push-notification` was used in order to display to the user the notifications coming from the web socket.

MongoDB Cloud is used for storing the apointments and reminders databases.

## 🌈 Preview

![alt text](https://github.com/SavuVeronica/SOA_AppointmentManagement/blob/main/Preview.png)

## System Structure

The system was represented using a C4 diagram, in order to effectively represent its arhitecture and functionality.
The diagram has the following levels:
1. Context Diagram - represents the main purpose of the system
![alt text](https://github.com/SavuVeronica/SOA_AppointmentManagement/blob/main/Context_Diagram.png)
2. Container Diagram - represents the system containers at a high level
![alt text](https://github.com/SavuVeronica/SOA_AppointmentManagement/blob/main/Container_Diagram.png)
3. Component Diagram - shows a more detailed decomposition of the components
![alt text](https://github.com/SavuVeronica/SOA_AppointmentManagement/blob/main/Component_Diagram.png)
4. Code Diagram - this one was not included here due to a huge amount of files in the 5 applications composing this project, but can be generated for each one using the code editors.


## 🚀 Technologies & Modules

- NestJs
- React
- Webpack Module Federation
- Auth01
- Socket.io
- Bootstrap


## 🤔 Installation

Clone the project locally using command:
```
git clone https://github.com/SavuVeronica/SOA_AppointmentManagement.git
```

Run `npm install` in all subdirectories in order to install the required dependencies.


## 💡 How To Run

1. Run the Appointments service  
  ```
  cd rest-service
  nest start
  ```
  
2. Run the Reminders service & listener
  ```
  cd admin-app
  nest-start
  ```
  
  In another terminal, start the listener as well which will react to the notification received from the Appointments service.
  ```
  nest start --watch --config listener.json
  ```
 
3. Run the first microfrontend
 ```
 cd mf1
 yarn webpack serve
 ```
 
4. Run the second microfrontend
  ```
  cd mf2
  yarn webpack serve
  ```
 
5. Run the application container
  ```
  cd front-container
  yarn webpack serve
  ```


## 👤 Author

🤓 Savu Veronica Alexandra
/ *veronica.alexandra.savu@gmail.com*
