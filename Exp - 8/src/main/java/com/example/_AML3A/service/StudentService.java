package com.example._AML3A.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example._AML3A.model.Student;
import com.example._AML3A.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // ✅ GET all
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // ✅ Save single
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // 🔥 Save multiple (ADD THIS INSIDE CLASS)
    public List<Student> saveAll(List<Student> students) {
        return repository.saveAll(students);
    }
}