package com.ihm.auth.dtos

import java.time.LocalDate

data class DoctorDTO(
    var id: Int? = null,
    var firstName: String = "",
    var lastName: String = "",
    var specialization: String = "",
    var username: String = "",
    var email: String = "",
    var dateOfBirth: LocalDate? = null,
    var password: String = "",
)
