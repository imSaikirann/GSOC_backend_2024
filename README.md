
---

# ClinicalMatch Backend

Welcome to the backend of ClinicalMatch, a clinical trial matching application.

## Description

The ClinicalMatch backend is responsible for handling server-side logic, managing database operations, and serving data to the frontend. It is built using Node.js, Express.js, and MongoDB.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imSaikirann/GSOC_backend_2024
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the backend.

2. Add the following environment variables to the `.env` file:

   ```plaintext
   PORT=port_number
   username=your-username
   password=your-password
   dbName=ClinicalMatch
   MONGO_URL=mongodb+srv://<username>:<password>@cluster0.xkvayy6.mongodb.net/<dbName>
   ```

   Replace `<username>`, `<password>`, and `<dbName>` with your MongoDB Atlas username, password, and database name respectively.

## Usage

To start the server, run:

```bash
npm run dev
```

The server will start running on the specified port (default is 4000). You can now make requests to the backend API.

## API Endpoints

- `/api/db/Diabetes`: Endpoint for managing diabetes-related data.
- `/api/db/Asthma`: Endpoint for managing asthma-related data.

## Contributing

Contributions are welcome! If you'd like to contribute to the development of ClinicalMatch, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new pull request.



Feel free to customize this README file with additional information or instructions specific to your project.
