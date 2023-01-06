package com.ihm.auth.repositories

import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.Patient
import com.ihm.auth.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface PatientRepository : JpaRepository<Patient, Int> {
    fun findByEmail(email: String): Patient?

    @Query(nativeQuery = true, value = "select * from patient where disease=:disease")
    fun findByDisease(disease: String): List<Patient>?

}