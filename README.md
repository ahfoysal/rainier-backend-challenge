# Rainier Backend Challenge

#### Get Started:

- [POSTMAN API Documentation](s://documenter.getpostman.com/view/21489763/2s9YkobfY3)

## Endpoints

#### Login

```
  POST /api/v1/auth/login
```

#### Create User

```
  POST /api/v1/users
```

- [Example User Body](#example-user-body)

#### Create Course

```
  POST /api/v1/courses
```

| Authorization  | Type     | Description                                                        |
| :------------- | :------- | :----------------------------------------------------------------- |
| `access-token` | `string` | **Required**.You will find the access token in the login response. |

#### Get List of all Courses

```
  GET /api/v1/courses
```

#### Get a Specific Course by ID

```
  GET /api/v1/courses/{id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of course to fetch |

#### Update an existing course

```
  PATCH /api/v1/courses/{id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of course to update |

| Authorization  | Type     | Description                                                        |
| :------------- | :------- | :----------------------------------------------------------------- |
| `access-token` | `string` | **Required**.You will find the access token in the login response. |

#### Delete Course

```
  DELETE /api/v1/courses/{id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of course to delete |

| Authorization  | Type     | Description                                                        |
| :------------- | :------- | :----------------------------------------------------------------- |
| `access-token` | `string` | **Required**.You will find the access token in the login response. |

### Example User Body

```
{
    "name": "admin",
    "email": "admin@gmail.com",
    "password": "123456"
}
```

### Example Login Body

```
{
    "email": "admin@gmail.com",
    "password": "123456"
}
```

### Example Course Body

```
{
    "name": "Introduction to Web Development",
    "description": "A Comprehensive Introduction to Web Development.",
    "price": 5000,
    "duration": "8 weeks",
    "level": "Beginner",
    "topics": [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "schedule": {
        "startDate": "2023-02-15",
        "endDate": "2023-04-10",
        "classDays": [
            "Monday",
            "Wednesday",
            "Friday"
        ],
        "classTime": "18:00 - 20:00"
    }
}
```
