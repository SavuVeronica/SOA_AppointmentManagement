# SOA_AppointmentManagement
Appointments management application


## 🌈 Preview


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
