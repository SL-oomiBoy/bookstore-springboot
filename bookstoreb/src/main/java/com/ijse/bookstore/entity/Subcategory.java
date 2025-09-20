package com.ijse.bookstore.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Subcategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subcategoryID;

    @Column(unique = true)
    private String name;

    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;

    // @OneToMany(mappedBy = "subcategory_id")
    // private Book book;
}
