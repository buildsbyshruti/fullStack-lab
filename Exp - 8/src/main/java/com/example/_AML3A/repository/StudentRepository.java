package com.example._AML3A.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example._AML3A.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}