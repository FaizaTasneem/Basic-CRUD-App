package com.crudapp.bookstore.repository;

import com.crudapp.bookstore.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Books,Integer> {
}
