# Employee Management System

## Git Clone Instructions
To get started with the project, follow these steps:

**Clone the repository:**

<ul>
  <li><b>Clone command:</b> git clone https://github.com/SadamWebDeveloper/node-system.git</li>
  <li>npm install <b>Or</></b> pnpm install</li>
    <li><b>Run the project</b> npx ts-node src/index.ts</li>
</ul>
<br>

<br>


## Database query

```
create database NodeJs_Task;
use NodeJs_Task;
CREATE TABLE Users (
    id int auto_increment primary key,
    user_name varchar(55),
    email varchar(255),
    password varchar(255),
    created_at timestamp default current_timestamp
);


CREATE TABLE chatHistory (
    id int auto_increment primary key,
    user_id int(55),
    chat_message text not null,
    created_at timestamp default current_timestamp,
   FOREIGN KEY (user_id) REFERENCES users(id)

);
```

## Api Documentation

### Request methods


app.use('/api/v1/user',userRoutes);
app.use('/api/v1/user',userLogin);
app.use('/api/v1/chat',userChat);

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/v1/user/register`                         | Register Api Endpoint.                  |
| `POST`    | `api/v1/user/login`                      | Validate login Api with jwt .            |
| `POST`   | `/api/v1/chat`                         | Xlsx File upload endpoint but not completed.                   |

### Examples


<b>POST</b>
<code>http://localhost:4000/api/v1/user/register</code>

```

{
  "username": "sa****",
  "email": "****@gmail.com",
  "password": "*******"
}

```
<br>
<b>POST</b>
<code>http://localhost:4000/api/v1/user/login</code>

```
{
  "email": "*****",
  "password": "****"
}
```
<br>
<b>POST</b>
<code>http://localhost:3030/api/employees</code>
