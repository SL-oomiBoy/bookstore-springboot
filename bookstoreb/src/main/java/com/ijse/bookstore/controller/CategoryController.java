package com.ijse.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ijse.bookstore.entity.Category;
import com.ijse.bookstore.service.CategoryService;



@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;


    @GetMapping("/category")
    public ResponseEntity<List<Category>> getAllCategory(){
        List<Category> categories = categoryService.getAllCategory();
        return new ResponseEntity<>(categories,HttpStatus.OK);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id){
        Category exisCategory = categoryService.getCategoryById(id);

        if(exisCategory !=null){
            return new ResponseEntity<>(exisCategory,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
