import express from 'express';
import showBanner from 'node-banner';
import morgan from 'morgan';
import cors from 'cors';    

const app = express();
app.set('json spaces', 2);
const port = 3000;
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let user = {
    id: 0,
    first_name: 'Miguel',
    last_name: 'Mazariegos',
    position: 'Developer',
    avatar: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
    publication: '',
    comment: ''
}

let user1 = {
    id: 1,
    first_name: 'Angel',
    last_name: 'Ramirez',
    position: 'Developer',
    avatar: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
    publication: '',
    comment: ''
}

let user2 = {
    id: 2,
    first_name: 'Michael',
    last_name: 'Lawson',
    position: 'Developer',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    publication: '',
    comment: ''
}

let user3 = {
    id: 3,
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    position: 'QA',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    publication: '',
    comment: ''
}

let user4 = {
    id: 4,
    first_name: 'Tobias',
    last_name: 'Funke',
    position: 'RRHH',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    publication: '',
    comment: ''
}

let user5 = {
    id: 5,
    first_name: 'Byron',
    last_name: 'Fields',
    position: 'Developer',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    publication: '',
    comment: ''
}

let user6 = {
    id: 6,
    first_name: 'George',
    last_name: 'Edwards',
    position: 'Developer',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    publication: '',
    comment: ''
}

let user7 = {
    id: 7,
    first_name: 'Rachel',
    last_name: 'Howell',
    position: 'QA',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    publication: '',
    comment: ''
}

const users: { 
    id: number; 
    first_name: string; 
    last_name: string; 
    position: string; 
    avatar: string;
    publication: string;
    comment: string;
}[] = [];

users.push(user);
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);

app.get('/users', (req, res) => {
    res.json({users: users});
});

app.get('/users/:id', (req, res) => {
    try {
        const ids = req.params;
        users.forEach( (user) => {
            if (user.id === Number(ids.id)) {
                res.json(user);
                // console.log(user);
            }
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/users', (req, res) => {
    try {
        const newuser = req.body;
        // console.log(newuser);
        users.push(newuser);
        // res.json(newuser);
        res.json({mesage: 'User Created'})
    } catch (error) {
        console.log(error);
    }
});

app.put('/users/:id', (req, res) => {
    try {
        const id = req.params;
        const { first_name, last_name, avatar } = req.body;
        users.forEach((user) => {
            if (user.id === Number(id.id)) {
                user.first_name = first_name;
                user.last_name = last_name;
                user.avatar = avatar;
                res.json({mesage: 'User Updated'});
            }
        });
    } catch (error) {
        console.log(error);
    }
});

app.delete('/users/:id', (req, res) => {
    try {
        const id = req.params;
        users.forEach((user) => {
            if (user.id === Number(id.id)) {
                // users.splice(user.id);
                // delete users[user.id];
                let a = users.indexOf(user);
                console.log(a);
                users.splice(a, 1);
                res.json({mesage: 'User Delete'});
            }
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    showBanner('API DE TEST', `en el puero ${port}`);
});