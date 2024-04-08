import { v4 as uuidv4 } from 'uuid';
var users = [];

export const addNewUser = (req, res) => {
    const user = req.body;
    console.log(user);
    users.push({ ...user, id: uuidv4() });
    res.send("successful user added to database");

};

export const getUserWithId = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
};

export const deleteUserWithId = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(users);
};

export const UpdateUserWithId = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id == id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(users);
};