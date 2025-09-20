package com.ijse.bookstore.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class OrderDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderDetailsID;

    @Column
    private int quantity;

    @Column
    private double subTotal;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders order;

    

}
