#  Basic Authentication System (Node.js + MongoDB)

A backend-only authentication system with user registration and login functionality using Node.js, Express, and MongoDB. Includes password hashing, form validation, and redirection to a basic dashboard upon login.

---

# Features

- ✅ User Sign-Up with validation:
  - Password must include 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 8 characters long.
- ✅ User Sign-In with email & password.
- ✅ Passwords are hashed securely using bcrypt.
- ✅ Prevents duplicate registrations via email.
- ✅ Redirects to `dashboard.html` on successful login.
- ✅ Proper error handling and console logging.
- ✅ MongoDB for data persistence.

# Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Security**: bcrypt for password hashing
- **Environment Management**: dotenv

---

# Getting Started

# 1. Clone the Repository

```bash
git clone https://github.com/Iamcoder101/techlearnsol.git
cd auth-system
````

# 2. Install Dependencies

```bash
npm install
```

# 3. Create `.env` File

Create a `.env` file in the root directory with the following content:

```
PORT=3000
MONGO_URI=mongodb+srv://<user_name>:<password>@cluster0.r1nqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
replace username and password with actual your username and password
Replace `MONGO_URI` with your actual MongoDB URI if using MongoDB Atlas.
i also used **MongoDB atlas**  in this project

### 4. Run MongoDB

Start your MongoDB service. If local:

```bash
mongod
```

### 5. Start the Server

```bash
node server.js
```

You should see:

```
Starting server...
MongoDB connected
Server running on port 3000
```

---

## 🧪 Test User Credentials

Use this test user to sign in directly:

* **Email**: `alicea@example.com`
* **Password**: `Strong@123`

You can also register a new user via the sign-up API.

---

## 🔑 API Endpoints

# POST `/api/auth/signup`

Registers a new user.

# Request Body (JSON)**

```json
{
  "name": "Test User",
  "email": "testuser@example.com",
  "mobile_number": "1234567890",
  "gender": "Other",
  "password": "Test@1234",
  "confirm_password": "Test@1234"
}
```

# Success Response**

```json
{
  "message": "User registered successfully"
}
```

# POST `/api/auth/signin`

Logs in an existing user.

# Request Body (JSON)**

```json
{
  "email": "testuser@example.com",
  "password": "Test@1234"
}
```

# Success

Redirects to `/dashboard.html`

# Failure

```json
{
  "error": "Invalid credentials"
}
```

# Dashboard Page

After successful login, you’ll be redirected to:

```
http://localhost:3000/dashboard.html
```

`dashboard.html` is a basic HTML page located in the `/views` folder.

---

# Folder Structure
``
auth-system/
├── controllers/         # Route logic
│   └── authController.js
├── models/              # Mongoose models
│   └── User.js
├── routes/              # API routes
│   └── authRoutes.js
├── views/               # Static HTML pages
│   └── dashboard.html
├── .env                 # Environment variables
├── .gitignore
├── server.js            # Main server file
├── package.json
└── README.md
``

**Logging**

Basic logs are printed to the console:

* Server start
* MongoDB connection
* User registration and login attempts
* Errors

**Notes**

* Make sure MongoDB is running before starting the server.
* Ensure password validation is met when registering.
* You can use [Postman](https://www.postman.com/) to test the APIs.

