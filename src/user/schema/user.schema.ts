import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: { type: String, unique: true, required: true },
    phone: Number,
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        default: [{}]
      },
    ],
    is_active: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
