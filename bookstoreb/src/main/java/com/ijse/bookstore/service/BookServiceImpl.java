package com.ijse.bookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.bookstore.entity.Book;
import com.ijse.bookstore.repository.BookRepository;

@Service
public class BookServiceImpl implements BookSerivce {
    
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBook(){

        return bookRepository.findAll();
    }


    public Book getBookById(Long id){


        return bookRepository.findById(id).orElse(null);
    }
}
