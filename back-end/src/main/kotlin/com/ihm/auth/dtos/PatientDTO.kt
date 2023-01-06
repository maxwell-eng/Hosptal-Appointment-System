package com.ihm.auth.dtos

import java.time.LocalDate

data class PatientDTO(
    var id: Int? = null,
    var firstName: String = "",
    var lastName: String = "",
    var username: String = "",
    var disease: String = "",
    var email: String = "",
    var dateOfBirth: LocalDate? = null,
    var password: String = "",
)
