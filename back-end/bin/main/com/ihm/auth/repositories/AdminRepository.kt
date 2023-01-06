package com.ihm.auth.repositories

import com.ihm.auth.entities.Admin
import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.Patient
import com.ihm.auth.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AdminRepository : JpaRepository<Admin, Int> {
    fun findByEmail(email: String): Admin?
}