package com.ijse.bookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.bookstore.entity.Category;
import com.ijse.bookstore.repository.CategoryReposirory;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryReposirory categoryReposirory;


    public List<Category> getAllCategory(){

        return categoryReposirory.findAll();
    }

    public Category getCategoryById(Long id){

        return categoryReposirory.findById(id).orElse(null);
    }
}
