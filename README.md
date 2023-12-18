# Rainier Backend Challenge

#### Get Started:

- [POSTMAN API Documentation](https://documenter.getpostman.com/view/21489763/2s9YkobfY3)

## Endpoints

#### Login

```http
  POST /api/v1/auth/login
```

#### Create User

```http
  POST /api/v1/users
```

#### Create Course

```http
  POST /api/v1/courses
```

| Authorization  | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `access token` | `string` | **Required**. Access Token |

#### Get List of all Courses

```http
  GET /api/v1/courses
```

#### Get a Specific Course by ID

```http
  GET /api/v1/courses/{id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of course to fetch |

#### Update an existing course

```http
  PATCH /api/v1/courses/{id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of course to update |

| Authorization  | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `access token` | `string` | **Required**. Access Token |

#### Delete Course

```http
  DELETE /api/v1/courses/{id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of course to delete |

| Authorization  | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `access token` | `string` | **Required**. Access Token |
