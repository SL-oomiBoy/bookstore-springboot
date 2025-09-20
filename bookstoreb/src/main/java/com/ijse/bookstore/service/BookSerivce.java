package com.ijse.bookstore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ijse.bookstore.entity.Book;

@Service
public interface BookSerivce {
    List<Book> getAllBook();
    Book getBookById(Long id);
}
