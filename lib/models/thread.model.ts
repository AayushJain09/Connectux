import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    community:{  // community the thread belongs to
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }, 
    parentId: {  // id of the parent thread
        type: String
    },
    children: [    // array of replies on the thread
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
        }
    ]
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;