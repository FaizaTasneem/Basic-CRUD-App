package com.crudapp.bookstore.controller;

import com.crudapp.bookstore.model.Books;
import com.crudapp.bookstore.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class BooksController {

    @Autowired
    BooksService booksService;

    @GetMapping("/books")
    public List<Books> getAllBooks(){
        return booksService.getAllBooks();
    }

    @GetMapping("/book/{id}")
    public Books getBookById(@PathVariable("id") int id){
        return booksService.getBookById(id);
    }

    @PostMapping("/book")
    public void saveBook(@RequestBody Books book){
        booksService.save(book);
    }

    @DeleteMapping ("/book/{id}")
    public void deleteBook(@PathVariable("id") int id){
        booksService.delete(id);
    }

    @PutMapping("/book/{id}")
    public void updateBook(@RequestBody Books book, @PathVariable("id")int id){
        booksService.update(book, id);
    }

}
