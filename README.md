# SOA_AppointmentManagement
Appointments management application


## 🌈 Preview


## System Structure

The system was represented using a C4 diagram, in order to effectively represent the system arhitecture and functionality.
The diagram has the following levels:
1. Context Diagram - represents the main purpose of the system
![alt text](https://github.com/SavuVeronica/SOA_AppointmentManagement/blob/main/Context_Diagram.png)
2. Container Diagram - represents the system containers at a high level
![alt text](https://github.com/SavuVeronica/SOA_AppointmentManagement/blob/main/Container_Diagram.png)
3. Component Diagram - shows a more detailed decomposition of the components
![alt text](https://github.com/SavuVeronica/SOA_AppointmentManagement/blob/main/Component_Diagram.png)
4. Code Diagram - this one was not included here due to a huge amount of files in the 5 applications, but can be generated individually using the code editors.


## 🚀 Technologies & Modules

- NestJs
- React
- Webpack Module Federation
- Auth01
- Socket.io
- Bootstrap


## 🤔 Installation

Run `npm install` in all subdirectories in order to install the required dependencies.


## 💡 How To Run

1. Run the Appointments service  
  - `cd rest-service`
  - `nest start`
  
2. Run the Reminders service & listener
  - `cd admin-app`
  - `nest-start`
  
  In another terminal, start the listener as well which will react to the notification received from the Appointments service.
  - `nest start --watch --config listener.json`
 
3. Run the first microfrontend
 - `cd mf1`
 - `yarn webpack serve`
 
4. Run the second microfrontend
  - `cd mf2`
  - `yarn webpack serve`
 
5. Run the application container
  - `cd front-container`
  - `yarn webpack serve`

## 🎊 Features


## 👤 Author

🤓 Savu Veronica Alexandra
/ *veronica.alexandra.savu@gmail.com*
