package com.ihm.auth.repositories

import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DoctorRepository : JpaRepository<Doctor, Int> {
    fun findByEmail(email: String): Doctor?
}