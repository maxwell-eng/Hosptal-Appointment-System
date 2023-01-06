package com.ihm.auth.services

import com.ihm.auth.dtos.*
import com.ihm.auth.entities.Appointment
import com.ihm.auth.entities.Doctor
import com.ihm.auth.entities.Patient
import com.ihm.auth.entities.User
import com.ihm.auth.repositories.AppointmentRepository
import com.ihm.auth.repositories.DoctorRepository
import com.ihm.auth.repositories.PatientRepository
import com.ihm.auth.repositories.UserRepository
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class AppointmentService(
    @Autowired
    private val appointmentRepository: AppointmentRepository
) {
    fun save(appointmentRegistrationDetails: RegisterDTO): AppointmentDTO {
        val appointment = Appointment();

        appointment.appointmentDate = appointmentRegistrationDetails.appointmentDate
        appointment.appointmentDetails = appointmentRegistrationDetails.appointmentDetails
        appointment.appointmentApproved = appointmentRegistrationDetails.appointmentApproved
        appointment.appointmentTime = appointmentRegistrationDetails.appointmentTime


        appointmentRepository.save(appointment)

        return appointment.let {
            AppointmentDTO(
                it.id,
                it.appointmentDate,
                it.appointmentDetails,
                it.appointmentApproved,
                it.appointmentTime,


            )
        }
    }


    fun getAppointments(): MutableList<Appointment> {
        return appointmentRepository.findAll()
    }

    fun findById(id: Int): Appointment? {
        return this.appointmentRepository.findById(id).orElse(null)
    }
}