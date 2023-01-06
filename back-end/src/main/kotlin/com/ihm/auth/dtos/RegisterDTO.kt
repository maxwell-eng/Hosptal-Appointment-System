package com.ihm.auth.dtos

import java.sql.Time
import java.time.LocalDate

class RegisterDTO {
    val firstName = ""
    val lastName = ""
    val specialization = ""
    val disease = ""
    val username = ""
    val appointmentApproved: Boolean = false
    val appointmentDetails = ""
    val appointmentDate: LocalDate = LocalDate.now()
    val email = ""
    val dateOfBirth: LocalDate = LocalDate.now()
    val password = ""
    val appointmentTime: String = ""

}