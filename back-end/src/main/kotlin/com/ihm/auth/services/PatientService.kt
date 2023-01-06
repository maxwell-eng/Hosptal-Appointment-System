package com.ihm.auth.services

import com.ihm.auth.dtos.DoctorDTO
import com.ihm.auth.dtos.PatientDTO
import com.ihm.auth.dtos.RegisterDTO
import com.ihm.auth.dtos.UserDTO
import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.Patient
import com.ihm.auth.entities.User
import com.ihm.auth.repositories.DoctorRepository
import com.ihm.auth.repositories.PatientRepository
import com.ihm.auth.repositories.UserRepository
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class PatientService(
    @Autowired
    private val patientRepository: PatientRepository
) {
    fun save(patientRegistrationDetails: RegisterDTO): PatientDTO {
        val patient = Patient();

        patient.firstName = patientRegistrationDetails.firstName
        patient.lastName = patientRegistrationDetails.lastName
        patient.username = patientRegistrationDetails.username
        patient.disease = patientRegistrationDetails.disease
        patient.email = patientRegistrationDetails.email
        patient.dateOfBirth = patientRegistrationDetails.dateOfBirth
        patient.password = patientRegistrationDetails.password

        patientRepository.save(patient)

        return patient.let {
            PatientDTO(
                it.id,
                it.firstName,
                it.lastName,
                it.username,
                it.disease,
                it.email,
                it.dateOfBirth,
            )
        }
    }

    fun findByEmail(email: String): Patient? {
        return patientRepository.findByEmail(email)
    }

    fun getPatients(): MutableList<Patient> {
        return patientRepository.findAll()
    }

   /* fun findByDisease(disease: String): List<Patient>? {
        return patientRepository.findByDisease(disease)
    } */

    fun findById(id: Int): Patient? {
        return this.patientRepository.findById(id).orElse(null)
    }
}