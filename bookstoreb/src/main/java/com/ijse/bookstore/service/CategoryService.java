package com.ijse.bookstore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ijse.bookstore.entity.Category;

@Service
public interface CategoryService {
    List<Category> getAllCategory();
    Category getCategoryById(Long id);
}
