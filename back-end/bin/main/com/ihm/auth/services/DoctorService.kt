package com.ihm.auth.services

import com.ihm.auth.dtos.DoctorDTO
import com.ihm.auth.dtos.RegisterDTO
import com.ihm.auth.dtos.UserDTO
import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.User
import com.ihm.auth.repositories.DoctorRepository
import com.ihm.auth.repositories.UserRepository
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class DoctorService(
    @Autowired
    private val doctorRepository: DoctorRepository
) {
    fun save(doctorRegistrationDetails: RegisterDTO): DoctorDTO {
        val doctor = Doctor();

        doctor.firstName = doctorRegistrationDetails.firstName
        doctor.lastName = doctorRegistrationDetails.lastName
        doctor.username = doctorRegistrationDetails.username
        doctor.specialization = doctorRegistrationDetails.specialization
        doctor.email = doctorRegistrationDetails.email
        doctor.dateOfBirth = doctorRegistrationDetails.dateOfBirth
        doctor.password = doctorRegistrationDetails.password

        doctorRepository.save(doctor)

        return doctor.let {
            DoctorDTO(
                it.id,
                it.firstName,
                it.lastName,
                it.username,
                it.specialization,
                it.email,
                it.dateOfBirth,
            )
        }
    }

    fun findByEmail(email: String): Doctor? {
        return doctorRepository.findByEmail(email)
    }

    fun getDoctors(): MutableList<Doctor> {
        return doctorRepository.findAll()
    }

    fun findById(id: Int): Doctor? {
        return this.doctorRepository.findById(id).orElse(null)
    }
}