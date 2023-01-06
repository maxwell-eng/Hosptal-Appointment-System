package com.ihm.auth.dtos

import java.sql.Time
import java.time.LocalDate

data class AppointmentDTO(
    var id: Int? = null,
    var appointmentDate: LocalDate? = null,
    var appointmentDetails: String = "",
    var appointmentApproved: Boolean = false,
    var appointmentTime: String = "",


    )
