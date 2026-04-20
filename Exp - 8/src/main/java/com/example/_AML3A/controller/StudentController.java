package com.example._AML3A.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example._AML3A.model.Student;
import com.example._AML3A.service.StudentService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentService service;

    // ✅ GET (browser)
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    // ✅ POST single student
    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    // 🔥 ADD THIS (bulk insert)
    @PostMapping("/students")
    public List<Student> addAllStudents(@RequestBody List<Student> students) {
        return service.saveAll(students);
    }
}