const express = require('express');
const router = express.Router();
const doctorManagement = require('../controllers/SpecialistCtrl'); // Ensure this path is correct

/**
 * @swagger
 * tags:
 *   name: Doctors
 *   description: Doctor management API
 */

/**
 * @swagger
 * /api/doctors:
 *   post:
 *     tags: [Doctors]
 *     summary: Create a new doctor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               specialité:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Doctor created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Failed to create doctor
 */
router.post('/doctors', doctorManagement.addDoctor);

/**
 * @swagger
 * /api/doctors:
 *   get:
 *     tags: [Doctors]
 *     summary: Retrieve a list of doctors
 *     responses:
 *       200:
 *         description: List of doctors retrieved successfully
 *       500:
 *         description: Failed to retrieve doctors
 */
router.get('/doctors', doctorManagement.getAllDoctors);

/**
 * @swagger
 * /api/doctors/{id}:
 *   get:
 *     tags: [Doctors]
 *     summary: Get a doctor by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the doctor to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Doctor retrieved successfully
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Failed to retrieve the doctor
 */
router.get('/doctors/:id', doctorManagement.getDoctorById);

/**
 * @swagger
 * /api/doctors/{id}:
 *   put:
 *     tags: [Doctors]
 *     summary: Update a doctor by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the doctor to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               specialité:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Doctor updated successfully
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Failed to update the doctor
 */
router.put('/doctors/:id', doctorManagement.updateDoctor);

/**
 * @swagger
 * /api/doctors/{id}:
 *   delete:
 *     tags: [Doctors]
 *     summary: Delete a doctor by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the doctor to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Doctor deleted successfully
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Failed to delete the doctor
 */
router.delete('/doctors/:id', doctorManagement.deleteDoctor);

module.exports = router;
