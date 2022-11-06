## Griot

&mdash; This is an api for a blog app built as an exam project from <a href="https://altschoolafrica.com/schools/engineering">AltSchool Africa</a>.

## Requirements

1. Users should have a first_name, last_name, email and password.

2. A user should be able to sign up and sign in into the blog app.

3. Use JWT as authentication strategy and expire the token after 1 hour.

4. A blog can be in two states; draft and published.

5. Logged in and not logged in users should be able to get a list of published blogs created.

6. Logged in and not logged in users should be able to to get a published blog

7. Logged in users should be able to create a blog.

8. When a blog is created, it is in draft state.

9. The owner of the blog should be able to update the state of the blog to published.

10. The owner of a blog should be able to edit the blog in draft or published state.

11. The owner of the blog should be able to delete the blog in draft or published state.

12. The owner of the blog should be able to get a list of their blogs.

13. The endpoint should be paginated.

14. It should be filterable by state.

15. Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.

16. The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated:

17. default it to 20 blogs per page.

18. It should also be searchable by author, title and tags.

19. It should also be orderable by read_count, reading_time and timestamp

20. When a single blog is requested, the api should return the user information (the author) with the blog. The read_count of the blog too should be updated by 1.

21. Come up with any algorithm for calculating the reading_time of the blog.

22. Write tests for all endpoints.


### Set up

- Install [Node.js](https://nodejs.org/en/download/), [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- Install project dependencies
- clone this repo
- update env with example.env
- run `npm run start:dev`


#### How to clone this repo

```sh
git clone https://github.com/adeyinkaoresanya/griot.git
```

#### Install project dependencies

```sh
npm install
```

#### Update .env with example.env

#### Run a development server

```sh
npm run start:dev
```

### Models
---

### User
| field        | data_type | constraints   |
|--------------|------------|-------------------|
|  id          | string     |  required         |
|  first_name  | string     |  required         |
|  last_name   |  string    |  required         |
|  username    |  string    |  optional         |
|  author_name |  string    |  derived          |
|  email       | string     |  required, unique |
|  password    |   string   |  required         |
| blogs        | ref - Blog |                    |


#### Blog

| field                     | data_type  |constraints                                               |
| --------------------------| ---------- | ---------------------------------------------------------|
| title                     | string     | required                                                 |
| description               | string     | required                                                 |
| content                   | string     | required                                                 |
| state                     | string     | required, default: 'draft', enum: ['draft', 'published'] |
| read_count                | Number     | default: 0                                               |
| tags                      | array      | optional                                                 |
| reading_time              | Number     |                                                          |
| author                    | ref - User |                                                          |
| postedAt (timestamp)      |            |                                                          |                   


## Usage

### Creating a user

- Route: /register
- Method: POST
- Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "johndoe@mail.com",
  "password": "johndoe126"
}
```

Response

```json
{
  "status": "success",
  "data": {
    "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "johndoe@mail.com",
    "_id": ""
  }

```


### Logging in

- Route: /login
- Method: POST

Body

```json
{
  "username": "johndoe",
  "password": "johndoe126"
}
```

Response

```json
{
  "token": { token }
}
```

### Create a Blog

- Route: /write
- Method: POST
- Header
- Authorization: {token}

Body

```json
{
  "title": "The Silent Echoes",
  "description": "doloremque aspernatu",
  "body": "Lorem ipsum dolor sit amet. Ut laborum debitis et blanditiis aperiam non error nulla est vitae..."
}

```

Response

```json
{

  "data": {

"_id": "6367b7a9bd878192d63e6f27",
"title":"The Silent Echoes",
"description":"doloremque aspernatu",
"content":"<p>Lorem ipsum dolor sit amet. Ut laborum debitis et blanditiis aperiam non error nulla est vitae voluptatem ut fugiat quae! Ut illo soluta et reprehenderit voluptate sit esse ducimus ab error quas est doloremque aspernatur. Et perspiciatis velit ab earum quaerat vel tempore nih",
"author":{"_id":"6365f9b9787b41472cc6d738"},
"state":"draft",
"read_count": 0,
"tags":[],
"postedAt":"Sun Nov 06 2022 14:14:39 GMT+0100 (West Africa Standard Time)",
"reading_time": 1
  }
}
```



---

### Update the state of a Blog

- Route: blog/:id
- Method: PUT
- Header
  - Authorization: {token}

: Body

```json
{
  
}
```

:point_down: Response

```json
{
  
  }
}
```



### Update the contents of a Blog

- Route: blog/:id
- Method: PUT
- Header
- Authorization: Bearer {token}

Body

```json
{
  
}
```

Response

```json
{
  
  }
}
```

---

...

## Contributor
- Adeyinka Oresanya