const {Patient } = require("../models/Patient")
const resolvers = {
    Query: {
        patients: async () => {
          return await Patient.find({});
        }
    }
};
module.exports = resolvers;
