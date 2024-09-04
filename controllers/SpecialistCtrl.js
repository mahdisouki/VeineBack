const Doctor = require('../models/Specialist'); // Adjust the path accordingly

const doctorManagement = {
  addDoctor: async (req, res) => {
    console.log('Request Body:', req.body);  // Log to see what you received
    
    try {
      const { firstName, lastName, phoneNumber, specialité, description } = req.body;

      if (!firstName || !lastName || !phoneNumber || !specialité || !description) {
        return res.status(400).json({ message: "Missing required fields: firstName, lastName, phoneNumber, specialité, and description are required." });
      }

      const newDoctor = new Doctor({
        firstName,
        lastName,
        phoneNumber,
        specialité,
        description,
       
      });
      
      await newDoctor.save();
      res.status(201).json({ message: "Doctor created successfully", doctor: newDoctor });
      
    } catch (error) {
      console.error('Error in addDoctor:', error);
      res.status(500).json({ message: "Failed to create doctor", error: error.message });
    }
  },
  
  getAllDoctors: async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.status(200).json({ message: "Doctors retrieved successfully", doctors });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve doctors", error: error.message });
    }
  },

  getDoctorById: async (req, res) => {
    const { id } = req.params;
    try {
      const doctor = await Doctor.findById(id);
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
      res.status(200).json({ message: "Doctor retrieved successfully", doctor });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve doctor", error: error.message });
    }
  },

  deleteDoctor: async (req, res) => {
    const { id } = req.params;
    try {
      const doctor = await Doctor.findByIdAndDelete(id);
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
      res.status(200).json({ message: "Doctor deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete doctor", error: error.message });
    }
  },

  updateDoctor: async (req, res) => {
    const { id } = req.params;
    let updateData = req.body; // Get any incoming fields for potential update

    try {
      const doctor = await Doctor.findByIdAndUpdate(id, { $set: updateData }, { new: true });
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
      res.status(200).json({ message: "Doctor updated successfully", doctor });
    } catch (error) {
      console.error('Error updating doctor:', error);
      res.status(500).json({ message: "Failed to update doctor", error: error.message });
    }
  }
};

module.exports = doctorManagement;
