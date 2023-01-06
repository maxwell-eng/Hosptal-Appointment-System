package com.ihm.auth.controllers

import com.ihm.auth.config.JwtProperties
import com.ihm.auth.dtos.*
import com.ihm.auth.entities.*
import com.ihm.auth.services.*
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.Date

@RestController
@RequestMapping("api/auth/")
class AuthController(
    @Autowired
    private val userService: UserService,
    @Autowired
    private val doctorService: DoctorService,
    @Autowired
    private val patientService: PatientService,
    @Autowired
    private val adminService: AdminService,
    @Autowired
    private val appointmentService: AppointmentService,
    @Autowired
    private val jwtProperties: JwtProperties
) {

   @PostMapping("register") // localhost:8080/api/auth/register
   fun register(
       @RequestBody
       userRegistrationDetails: RegisterDTO
   ): ResponseEntity<UserDTO> {
        // simply retrieve information from the request body and save it to the database as a new user
        return ResponseEntity.ok(userService.save(userRegistrationDetails))
   }
    @GetMapping("users")
    fun getUsers(): MutableList<User>{
        return userService.getUsers()
    }


    @PostMapping("doctorRegistration") // localhost:8080/api/auth/doctorRegistration
    fun doctorRegistration(
        @RequestBody
        doctorRegistrationDetails: RegisterDTO
    ): ResponseEntity<DoctorDTO> {
        // simply retrieve information from the request body and save it to the database as a new user
        return ResponseEntity.ok(doctorService.save(doctorRegistrationDetails))
    }
    @GetMapping("getDoctors")
    fun getDoctors(): MutableList<Doctor>{
        return doctorService.getDoctors()
    }

    @PostMapping("patientRegistration") // localhost:8080/api/auth/patientRegistration
    fun patientRegistration(
        @RequestBody
        patientRegistrationDetails: RegisterDTO
    ): ResponseEntity<PatientDTO> {
        // simply retrieve information from the request body and save it to the database as a new user
        return ResponseEntity.ok(patientService.save(patientRegistrationDetails))
    }
    @GetMapping("getPatients")
    fun getPatients(): MutableList<Patient>{
        return patientService.getPatients()
    }

   /* @GetMapping("findByDisease")
    fun findByDisease(
        @RequestBody
        disease: String

    ): List<Patient>? {

        return patientService.findByDisease(disease)
    } */

    @PostMapping("admin") // localhost:8080/api/auth/admin
    fun admin(
        @RequestBody
        adminRegistrationDetails: RegisterDTO
    ): ResponseEntity<AdminDTO> {
        // simply retrieve information from the request body and save it to the database as a new user
        return ResponseEntity.ok(adminService.save(adminRegistrationDetails))
    }
    @GetMapping("getAdmins")
    fun getAdmins(): MutableList<Admin>{
        return adminService.getAdmins()
    }


    @PostMapping("appointment") // localhost:8080/api/auth/appointment
    fun appointment(
        @RequestBody
        appointmentRegistrationDetails: RegisterDTO
    ): ResponseEntity<AppointmentDTO> {
        // simply retrieve information from the request body and save it to the database as a new user
        return ResponseEntity.ok(appointmentService.save(appointmentRegistrationDetails))
    }
    @GetMapping("getAppointments")
    fun getAppointments(): MutableList<Appointment>{
        return appointmentService.getAppointments()
    }




    @GetMapping("login")
    fun login(
        @RequestBody
        userLoginDetails: LoginDTO,
        response: HttpServletResponse
    ): ResponseEntity<Any> {
        // check if user exists using email else return message "User not found"
        val user = userService.findByEmail(userLoginDetails.email)
            ?: return ResponseEntity.badRequest().body(Message("User not found"))

        // check if password is correct else return message "Incorrect password"
        if (!user.comparePassword(userLoginDetails.password)) {
            return ResponseEntity.badRequest().body(Message("Incorrect password"))
        }

        // populate jsonwebtoken with values including user id
        val issuer = user.id.toString()

        // time jsonwebtoken is valid for
        val expiryDate = Date(System.currentTimeMillis() + 60 * 24 * 1000) // 24 hours

        // create jsonwebtoken
        val jwt = Jwts.builder()
            .setIssuer(issuer)
            .setExpiration(expiryDate)
            .signWith(SignatureAlgorithm.HS256, jwtProperties.secret)
            .compact()

        // create cookie with jsonwebtoken
        val cookie = Cookie("jwt", issuer)
        cookie.isHttpOnly = true

        // add cookie to response
        response.addCookie(cookie)

        return ResponseEntity.ok(Message("Login successful"))
    }

    @PostMapping("logout")
    fun logout(
        response: HttpServletResponse
    ): ResponseEntity<Any> {
        // create cookie with empty value (this signifies that the user is logged out)
        val cookie = Cookie("jwt", "")
        cookie.isHttpOnly = true

        // add cookie to response
        response.addCookie(cookie)

        return ResponseEntity.ok(Message("Logout successful"))
    }
}