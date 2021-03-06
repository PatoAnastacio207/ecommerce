const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { type: String },
    salt: { type: String, default: "" },
    type: { type: String, default: "default" },
    checkoutInfo: 
      {
        address: { type: String, default: "" },
        phone: { type: String, default: "" },
      },
    
    favorites: [
      { type: String, required: true }
    ],
    isAdmin: { type: Boolean, default: false },
  },
  { versionKey: false }
);

// Para añadir metodos de instancia
userSchema.methods.switchAdmin = async function (password, salt) {
  await User.updateOne({ _id: this._id }, { isAdmin: !this.isAdmin });
};

userSchema.methods.addFavorite = async function (id) {
  await User.updateOne({ _id: this._id }, { $addToSet: { favorites: id }})
}

userSchema.methods.removeFavorite = async function (id) {
  await User.updateOne({ _id: this._id }, { $pullAll: [id] })
}

// Para añadir metodos de clase
userSchema.static("hash", function (password, salt) {
  if (!salt === "") return null;
  return bcrypt.hash(password, salt);
});

// Before create
userSchema.pre("save", async function (next) {
  // Checkear si es usuario default
  if (!(this.type === "default")) return next();
  // Prevenir que se cree un usuario admin
  this.isAdmin = false;
  // Crear el salt
  const salt = await bcrypt.genSalt(10, this.passowrd);
  // Guardar el salt
  this.salt = salt;
  // Generar la contraseña hasheada
  const hashedPassword = await User.hash(this.password, this.salt);
  // Guardar contraseña hasheada
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
