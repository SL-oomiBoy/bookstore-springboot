package com.ijse.bookstore.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class ShippingOrder {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shippingorder_id")
    private Long shippingOrderID;

    @Column
    private String name;

    @Column
    private String address;

    @Column 
    private String city;

    @Column 
    private String state;

    @Column 
    private String postal_code;

    @Column 
    private String country;

    

}
