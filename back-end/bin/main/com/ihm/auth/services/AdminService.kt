package com.ihm.auth.services

import com.ihm.auth.dtos.*
import com.ihm.auth.entities.Admin
import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.Patient
import com.ihm.auth.entities.User
import com.ihm.auth.repositories.AdminRepository
import com.ihm.auth.repositories.DoctorRepository
import com.ihm.auth.repositories.PatientRepository
import com.ihm.auth.repositories.UserRepository
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class AdminService(
    @Autowired
    private val adminRepository: AdminRepository
) {
    fun save(adminRegistrationDetails: RegisterDTO): AdminDTO {
        val admin = Admin();

        admin.firstName = adminRegistrationDetails.firstName
        admin.lastName = adminRegistrationDetails.lastName
        admin.username = adminRegistrationDetails.username
        admin.email = adminRegistrationDetails.email
        admin.dateOfBirth = adminRegistrationDetails.dateOfBirth
        admin.password = adminRegistrationDetails.password

        adminRepository.save(admin)

        return admin.let {
            AdminDTO(
                it.id,
                it.firstName,
                it.lastName,
                it.username,
                it.email,
                it.dateOfBirth,
            )
        }
    }

    fun findByEmail(email: String): Admin? {
        return adminRepository.findByEmail(email)
    }

    fun getAdmins(): MutableList<Admin> {
        return adminRepository.findAll()
    }

    fun findById(id: Int): Admin? {
        return this.adminRepository.findById(id).orElse(null)
    }
}