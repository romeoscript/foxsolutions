import { Schema, model, models } from "mongoose";

const logisticSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    trackId: {
      type: String,
      required: true,
    },

    shipmentDate: {
      type: String,
      required: true,
    },
    stand: {
      type: String,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    deliveryDate: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
    },
    quantity: {
      type: String,
    },
    serviceType: {
      type: String,
    },
    packageLocation: {
      type: String,
    },
    senderName: {
      type: String,
    },
    senderAddress: {
      type: String,
    },
    receiverAddress: {
      type: String,
    },
    remark: {
      type: String,
    },
    currentLocation: {
      type: String,
    },
  },
  { timestamps: true }
);

const Logistic = models.Logistic || model("Logistic", logisticSchema);

export default Logistic;
