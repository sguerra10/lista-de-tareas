const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Middleware de Mongoose para cifrar la contraseña antes de guardarla en la base de datos
userSchema.pre('save', async function (next) {
  try {
    // Solo cifra la contraseña si es nueva o ha sido modificada
    if (!this.isModified('password')) {
      return next();
    }

    // Generar un salt y cifrar la contraseña con bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);

    // Reemplazar la contraseña con la versión cifrada
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
