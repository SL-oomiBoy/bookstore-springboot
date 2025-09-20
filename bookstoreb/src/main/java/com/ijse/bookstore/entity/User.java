package com.ijse.bookstore.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    @Column
    private String name;

    @Column 
    private String userName;

    @Column 
    private String password;

    @Column
    private String email;

    @Column
    private String address;

    @OneToOne
    @JoinColumn(name = "shipping_information_id" , referencedColumnName = "shippingorder_id")
    private ShippingOrder shippingOrder;


}
