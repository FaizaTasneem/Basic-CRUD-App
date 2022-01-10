package com.crudapp.bookstore.service;

import com.crudapp.bookstore.model.Books;
import com.crudapp.bookstore.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;

@Service
public class BooksService {

    @Autowired
    BooksRepository booksRepository;


    public List<Books> getAllBooks(){
        return booksRepository.findAll();
    }

    public Books getBookById(int id){
        return booksRepository.findById(id).get();
    }

    public void save(Books books){
        booksRepository.save(books);
    }

    public void delete(int id){
        booksRepository.deleteById(id);
    }

    public void update(Books book, int id){
        booksRepository.findById(id)
                .map(b -> {
                    b.setName(book.getName());
                    b.setAuthor(book.getAuthor());
                    b.setPrice(book.getPrice());
                    return booksRepository.save(b);
                })
                .orElseGet(() -> {
                    book.setId(id);
                    return booksRepository.save(book);
                });
    }
}
