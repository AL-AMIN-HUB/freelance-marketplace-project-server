const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const taskSchema = Schema({
    sellerEmail: {
        required: true,
        type: String,
    },
    buyerEmail: {
        required: true,
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "running", "complete"]
    },
    price: {
        required: true,
        type: String,
    },
    to: {
        required: true,
        type: String,
    },
    from: {
        type: Date,
        default: Date.now,
    }
})

module.exports = taskSchema;
// Something wrong