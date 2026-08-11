const mongoose = require('mongoose');

// Define Lead Schema for MongoDB
const leadSchema = new mongoose.Schema({
    phone: { type: String, required: true },
    name: { type: String, default: 'Anonymous WhatsApp Lead' },
    serviceRequested: { type: String, required: true },
    city: { type: String, default: 'Not Provided' },
    details: { type: String, default: '' },
    timestamp: { type: Date, default: Date.now }
});

const LeadModel = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// In-memory fallback array if MongoDB is disabled
const memoryLeads = [];

/**
 * Save a new customer inquiry/lead
 */
async function saveLead({ phone, name, serviceRequested, city, details }) {
    const leadData = {
        phone,
        name: name || 'WhatsApp Contact',
        serviceRequested,
        city: city || 'Not Provided',
        details: details || '',
        timestamp: new Date()
    };

    console.log(`[LeadService] 📥 New Lead Captured:`, leadData);

    try {
        if (mongoose.connection.readyState === 1) {
            const newLead = new LeadModel(leadData);
            await newLead.save();
            console.log(`[LeadService] ✅ Saved lead to MongoDB successfully.`);
            return newLead;
        }
    } catch (err) {
        console.warn(`[LeadService] MongoDB save warning: ${err.message}. Saving to fallback memory.`);
    }

    memoryLeads.push(leadData);
    return leadData;
}

/**
 * Fetch recent leads
 */
async function getRecentLeads(limit = 20) {
    try {
        if (mongoose.connection.readyState === 1) {
            return await LeadModel.find().sort({ timestamp: -1 }).limit(limit);
        }
    } catch (err) {
        console.warn('[LeadService] Could not fetch from MongoDB:', err.message);
    }
    return memoryLeads.slice(-limit).reverse();
}

module.exports = {
    saveLead,
    getRecentLeads
};
