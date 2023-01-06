package com.ihm.auth.repositories

import com.ihm.auth.entities.Appointment
import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.Patient
import com.ihm.auth.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface AppointmentRepository : JpaRepository<Appointment, Int> {
    override fun findById(id: Int): Optional<Appointment>
}