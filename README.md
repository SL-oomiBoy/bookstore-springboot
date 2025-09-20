# 📚 PrawalaBooks — Online Bookstore  

PrawalaBooks is a full-stack **Spring Boot application** designed to manage an online bookstore. It provides APIs for books, categories, authors, users, carts, and orders with a MySQL database backend.  

---

## 🚀 Features  
- **Book Management**: Add, update, delete, and list books.  
- **Category & Subcategory Management**: Organize books into categories/subcategories.  
- **Author Management**: Store and manage author details.  
- **User Management**: Register and manage users.  
- **Shopping Cart**: Add books to cart, update quantities, and checkout.  
- **Orders & Shipping**: Place and manage customer orders.  

---

## 🛠️ Tech Stack  
- **Backend**: Spring Boot (Java)  
- **Database**: MySQL (`bookstore.sql` included)  
- **Build Tool**: Maven  
- **ORM**: Spring Data JPA (Hibernate)  
- **Testing**: JUnit, Spring Boot Test  

---

## 📂 Project Structure  
```
bookstoreb/
├── src/main/java/com/ijse/bookstore/
│   ├── controller/      # REST Controllers
│   ├── entity/          # JPA Entities
│   ├── repository/      # Data Access Layer
│   ├── service/         # Business Logic
│   └── BookstoreApplication.java
├── src/main/resources/
│   ├── application.properties  # App configuration
│   ├── static/                 # Static resources (if any)
│   └── templates/              # Thymeleaf templates (if any)
├── src/test/java/com/ijse/bookstore/
│   └── BookstoreApplicationTests.java
├── pom.xml                     # Maven dependencies
└── bookstore.sql                # Database schema & data
```

---

## ⚙️ Setup Instructions  

### 1. Clone Repository  
```bash
git clone https://github.com/your-username/prawalabooks.git
cd prawalabooks/bookstoreb
```

### 2. Configure Database  
- Create a MySQL database:  
  ```sql
  CREATE DATABASE bookstore;
  ```
- Import the schema & sample data:  
  ```bash
  mysql -u root -p bookstore < ../bookstore.sql
  ```
- Update `application.properties` with your DB credentials:  
  ```properties
  spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
  spring.datasource.username=root
  spring.datasource.password=yourpassword
  spring.jpa.hibernate.ddl-auto=update
  ```

### 3. Run Application  
```bash
./mvnw spring-boot:run
```

### 4. Access API  
- App will start on: `http://localhost:8080`  
- Example endpoints:  
  - `GET /books` → List all books  
  - `POST /books` → Add a new book  
  - `GET /categories` → List all categories  

---

## 🧪 Testing  
Run unit tests with:  
```bash
./mvnw test
```

---

## 📌 Future Enhancements  
- JWT-based authentication & role-based access.  
- Frontend (React/Angular) integration.  
- Payment gateway integration.  

---

## 🤝 Contributing  
Pull requests are welcome. Please open an issue first to discuss what you’d like to change.  

---

## 📄 License  
This project is licensed under the MIT License.  
