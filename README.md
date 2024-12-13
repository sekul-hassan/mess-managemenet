# Mess Management System

A full-stack web application designed for managing mess facilities, meal tracking, cost management, and automatic bill calculation. This system allows administrators to create and manage messes, track meals consumed by users, and calculate the monthly bill based on meal consumption.

## Features

- **Mess Creation & Management**: Allows administrators to create and manage multiple messes, assign meals, manage users, and set costs.
- **Daily Meal Tracking**: Track meals consumed by users on a daily basis with real-time updates.
- **Automatic Bill Calculation**: Automatically calculates the total monthly bill for each user based on the number of meals consumed.
- **User Authentication**: Secure login and access control using **JWT (JSON Web Tokens)** to ensure that only authorized users (admins and members) can access their data.
- **Meal Cost Management**: Track and manage daily meal costs, and provide a monthly summary of charges for each user.

## Technologies Used

- **Frontend**: 
  - **React.js** for building a dynamic and responsive user interface.
  
- **Backend**: 
  - **Spring Boot** for developing the RESTful backend services.
  - **Hibernate ORM** for efficient interaction with the MySQL database.
  
- **Database**: 
  - **MySQL** for persistent storage of user and meal data.
  
- **Security**: 
  - **JWT (JSON Web Tokens)** for secure authentication and authorization.

## Setup Instructions

### Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (for frontend development)
- **Java 8+** (for backend development)
- **Maven** (for building and managing Spring Boot projects)
- **MySQL** (for the database)
- **Postman** (for testing API endpoints, optional)

### Backend Setup (Spring Boot)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mess-management-system.git
   cd mess-management-system
   cd backend
