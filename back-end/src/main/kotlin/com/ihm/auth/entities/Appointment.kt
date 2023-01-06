package com.ihm.auth.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import java.sql.Time
import java.time.LocalDate

@Entity
@Table(name = "appointment", schema = "public")
class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    var id: Int = 0

    @Column(name = "appointment_date")
    var appointmentDate: LocalDate = LocalDate.now()

    @Column(name = "appointment_details")
    var appointmentDetails: String = ""

    @Column(name = "appointment_approved")
    var appointmentApproved: Boolean = false

    @Column(name = "appointment_time")
    var appointmentTime: String = ""




}