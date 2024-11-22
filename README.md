# Project: Task Pro

## Description 📜
**Task Pro** - This web application is developed for people who like to plan, analyze, and prioritize their workday. [Live page](https://task-pro-frontend-delta.vercel.app/welcome)

## Functionality ⭐
The user can log in, add boards, columns, tasks, as well as edit and delete them. The web application has the functionality to change the theme of the user's choice, and the user can also make changes to their profile (name, email, password, avatar). If the web application is used by several users on the same device, it is possible to log out of the system to access the authorization page. If the user needs help using the application or has problems with its operation, they can use the "Need Help" button and send a message with a description. The application has filtering by task priority.

## Security 🔐
When a user logs in, a web token is assigned to them, a session is created with a lifetime and cookies that record all security data. In case of interception or hacking of the account, the hacker will not be able to steal data using these technologies. Also, if the user is away from the device they logged in from, after a while the session will stop working, and if another person wants to change or harm the user's data, they will be redirected to the authorization page with any action.

## Technical part 🛠️
The web application is made [Vite](https://vite.dev/)⚡builder and using this [Layout](https://www.figma.com/design/fJF13s2UlxPIwTMcPVrSiz/TaskPro?node-id=0-1&node-type=canvas&t=c8xIKG0vKg6aodLs-0)🎨

### Use skills:   
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Material UI](https://img.shields.io/badge/Material--UI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)

### Backend
We used our [backend](https://github.com/VadymLantukh/taskPro-backend) which was developed in Node.js and used the MongoDB database, it is deployed on [render.com](https://dashboard.render.com/), and links to [documentation](https://task-manager-0qvm.onrender.com/api-docs).


### Developers🧑‍💻:
- [Vadym Lantukh](https://github.com/VadymLantukh) (Team Lead)
- [Nicolai Dodeac](https://github.com/NicolaiDodeac) (Scrum Master)
- [Ivan Kolesnychenko](https://github.com/koleso8)
- [Julia Paramonova](https://github.com/juliaparamonova)
- [Yaroslav Mudrevskyi](https://github.com/yaroslav-mudrevskyi)
- [Dima Hutsol](https://github.com/dimahutsol)
- [Nichita Gramatchi](https://github.com/gramatchi)
- [Olha Mykhalchuk](https://github.com/OlhaMy)
- [Anastasia Zhurakovska](https://github.com/zhurakovska)
- [Anna Vasylenko](https://github.com/anna-vasylenko)
- [Vitalii Intelehator](https://github.com/Dekizber)
- [Ivan Lukin](https://github.com/lukinivan)
- [Gleb Yasynskyi](https://github.com/GYaskey)
- [Oksana](https://github.com/Oksanium)
- [Vlad Kuznetcov](https://github.com/Vlad-Kuznetcov)

### Use libraries📚:
- yup (v. 1.4.0) 
- redux-persist (v. 6.0.0)
- react-toastify (v. 10.0.6) 
- react-router-dom (v. 6.28.0)
- react-router (v. 6.28.0)
- react-responsive (v. 10.0.0)
- react-redux (v. 9.1.2)
- react-modal (v. 3.16.1)
- react-icons (v. 5.3.0)
- react-ellipsis-text (v. 1.2.1)
- react-dom (v. 18.3.1)
- react (v. 18.3.1)
- prop-types (v. 15.8.1)
- modern-normalize (v. 3.0.1)
- formik (v. 2.4.6)
- dayjs (v. 1.11.13)
- clsx (v. 2.1.1)
- axios (v. 1.7.7)
- @reduxjs/toolkit (v. 2.3.0)
- @mui/x-date-pickers (v. 7.22.2)
- @mui/material (v. 6.1.7)
- @emotion/styled (v. 11.13.0)
- @emotion/react (v. 11.13.3)
- @eslint/js (9.13.0)

### Project structure🗃️:
```
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── fonts/
│   ├── helpers/
│   ├── hooks/
│   ├── images/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── utils/
│   └── main.jsx
├── .gitignore
├── .prettierrc
├── eslint-config.js
├── index.js
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```