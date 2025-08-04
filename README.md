# HRMS Database Service - MySQL Version

This is the MySQL implementation of the HRMS Database Service, providing a RESTful API for managing employees, departments, and attendance data.

## Features

- Full MySQL database integration
- RESTful API for all HRMS operations
- Connection pooling for optimal performance
- Comprehensive validation and error handling
- TypeScript for type safety

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL (v8.0 or higher)

## Database Setup

1. Create a new MySQL database for the HRMS system:

```sql
CREATE DATABASE hrms;
```

2. Initialize the database schema using the provided SQL script:

```bash
mysql -u your_username -p hrms < schema.sql
```

## Configuration

Configuration is managed through environment variables, which can be set in a `.env` file:

```
PORT=3002
HOST=0.0.0.0
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=hrms
DB_CONNECTION_LIMIT=10
DB_CONNECT_TIMEOUT=10000
DB_MULTIPLE_STATEMENTS=true
NODE_ENV=development
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Build the TypeScript code:

```bash
npm run build
```

3. Start the service:

```bash
npm start
```

For development with automatic reloading:

```bash
npm run dev
```

## Testing the Connection

You can use the included test script to verify your MySQL connection:

```bash
node test-db.js
```

## API Endpoints

### Departments

- `GET /api/departments` - Get all departments
- `GET /api/departments/:id` - Get a department by ID
- `POST /api/departments` - Create a new department
- `PUT /api/departments/:id` - Update a department
- `DELETE /api/departments/:id` - Delete a department

### Employees

- `GET /api/employees` - Get all employees
- `GET /api/employees/:id` - Get an employee by ID
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/:id` - Update an employee
- `DELETE /api/employees/:id` - Delete an employee

### Attendance

- `GET /api/attendance` - Get all attendance records
- `GET /api/attendance/:id` - Get an attendance record by ID
- `POST /api/attendance` - Create a new attendance record
- `PUT /api/attendance/:id` - Update an attendance record
- `DELETE /api/attendance/:id` - Delete an attendance record
- `POST /api/attendance/clock-in` - Clock in an employee
- `POST /api/attendance/clock-out` - Clock out an employee
- `GET /api/attendance/statuses` - Get attendance statuses
- `GET /api/departments/:id/summary` - Get department attendance summary
- `GET /api/employees/:id/summary` - Get employee attendance summary

## Database Query Structure

This MySQL implementation includes a compatibility layer that transforms MySQL query results to match the PostgreSQL format used in the original implementation:

```typescript
// MySQL query execution
const [rows, fields] = await pool.execute('SELECT * FROM employees WHERE id = ?', [id]);

// Transformed to match PostgreSQL format
return {
  rows: Array.isArray(rows) ? rows : [],
  rowCount: Array.isArray(rows) ? rows.length : 0,
  command: sql.trim().split(' ')[0].toUpperCase(),
  oid: 0,
  fields: fields || []
};
```

## Error Handling

The service provides detailed error responses for different scenarios:

- 400 Bad Request - Invalid input data
- 404 Not Found - Resource not found
- 409 Conflict - Resource already exists
- 500 Internal Server Error - Unexpected server error

All responses follow a consistent format:

```json
{
  "success": true|false,
  "data": {...} | null,
  "error": "Error message" | null
}
```

## Health Check

The service provides a health check endpoint:

```
GET /health
```

Response:

```json
{
  "status": "healthy",
  "service": "db-service",
  "timestamp": "2023-07-15T12:34:56.789Z"
}
```