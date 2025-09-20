package com.ijse.bookstore.entity;

import java.util.Date;

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

public class Orders {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderID;

    @Column
    private Date orderDate;

    @Column
    private double totalPrice;

    @ManyToOne
    @JoinColumn(name = "shippingorder_id")
    private ShippingOrder shippingOrder;
}
