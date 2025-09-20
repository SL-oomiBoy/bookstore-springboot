package com.ijse.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ijse.bookstore.entity.Category;



@Repository
public interface CategoryReposirory extends JpaRepository<Category,Long>{
    
}
