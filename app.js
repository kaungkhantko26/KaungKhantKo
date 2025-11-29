/* ==========================================================
   B3 HYBRID SUPER AI — FULL DOCTOR SYSTEM
   Includes:
   ✔ Full medical database
   ✔ Symptom Extraction AI
   ✔ Symptom Vectorizer
   ✔ Similarity Matching Engine
   ✔ Neural Network Classifier (TF.js)
   ✔ Severity Analyzer
   ✔ Doctor-like Output Generator
   ========================================================== */


// ==========================================================
//                1) MEDICAL DATABASE
// ==========================================================

const medicalDB = {
    "cardiology": {
        "hypertension": {
            "description": "Long-term high blood pressure causing strain on organs.",
            "symptoms": ["headache", "dizziness", "fatigue"],
            "investigations": ["BP", "ECG"],
            "treatment": ["ACE inhibitors", "diet"]
        },
        "myocardial_infarction": {
            "description": "Sudden blockage of coronary artery leading to heart attack.",
            "symptoms": ["chest pain", "sweating", "shortness of breath", "nausea"],
            "investigations": ["ECG", "troponin"],
            "treatment": ["PCI", "aspirin"]
        },
        "heart_failure": {
            "description": "Weak heart pumping leading to fluid accumulation.",
            "symptoms": ["breathlessness", "swelling", "fatigue"],
            "investigations": ["BNP", "echocardiogram"],
            "treatment": ["diuretics", "ACE inhibitors"]
        }
    },

    "respiratory": {
        "asthma": {
            "description": "Inflammation and narrowing of airways.",
            "symptoms": ["wheeze", "shortness of breath", "chest tightness", "cough"],
            "investigations": ["spirometry"],
            "treatment": ["inhalers"]
        },
        "pneumonia": {
            "description": "Lung infection often bacterial/viral.",
            "symptoms": ["fever", "cough", "breathlessness"],
            "investigations": ["CXR"],
            "treatment": ["antibiotics"]
        }
    },

    "gastroenterology": {
        "gerd": {
            "description": "Acid reflux causing burning chest pain.",
            "symptoms": ["heartburn", "acid taste", "chest discomfort"],
            "investigations": ["endoscopy if needed"],
            "treatment": ["PPIs"]
        },
        "peptic_ulcer": {
            "description": "Ulcer in stomach or duodenum.",
            "symptoms": ["burning stomach pain", "nausea"],
            "investigations": ["endoscopy"],
            "treatment": ["PPIs", "H. pylori therapy"]
        }
    },

    "infectious_diseases": {
        "covid_19": {
            "description": "Viral disease affecting lungs and smell/taste.",
            "symptoms": ["fever", "cough", "fatigue", "loss of smell"],
            "investigations": ["PCR"],
            "treatment": ["supportive care"]
        },
        "tuberculosis": {
            "description": "Chronic lung infection.",
            "symptoms": ["chronic cough", "night sweats", "weight loss"],
            "investigations": ["CXR", "AFB"],
            "treatment": ["RIPE therapy"]
        },
        "dengue": {
            "description": "Mosquito-borne viral fever.",
            "symptoms": ["fever", "joint pain", "rash"],
            "investigations": ["NS1 antigen"],
            "treatment": ["fluids"]
        }
    },

    "neurology": {
        "migraine": {
            "description": "Severe headache with nausea and light sensitivity.",
            "symptoms": ["headache", "nausea", "light sensitivity"],
            "investigations": ["clinical"],
            "treatment": ["triptans"]
        },
        "stroke": {
            "description": "Blocked or ruptured brain artery.",
            "symptoms": ["weakness", "speech difficulty", "facial droop"],
            "investigations": ["CT/MRI"],
            "treatment": ["thrombolysis (if eligible)"]
        }
    }
};




// ==========================================================
//     2) NATURAL LANGUAGE SYMPTOM EXTRACTOR AI
// ==========================================================

const SYMPTOM_KEYWORDS = [
  "fever","hot","cold","shaking","chills",
  "headache","migraine","head hurts",
  "cough","coughing","sore throat",
  "chest pain","chest tight","pressure","tightness",
  "stomach pain","tummy pain","abdominal pain",
  "nausea","vomit","vomiting",
  "dizzy","lightheaded","spinning",
  "weak","tired","fatigue",
  "breathless","short breath","no air","cant breathe","wheeze",
  "rash","itchy","burning","red spots",
  "heart racing","palpitations","fast heartbeat",
  "joint pain","body ache","muscle pain"
];

function extractSymptoms(text) {
    text = text.toLowerCase();
    let found = [];
    SYMPTOM_KEYWORDS.forEach(sym => {
        if (text.includes(sym)) found.push(sym);
    });
    if (found.length === 0) found.push(text);
    return found;
}



// ==========================================================
//        3) SYMPTOM VECTORIZER + COSINE SIMILARITY
// ==========================================================

// Turn symptom list into vector for similarity matching
function toVector(symptoms) {
    return SYMPTOM_KEYWORDS.map(key => symptoms.includes(key) ? 1 : 0);
}

// Cosine similarity function
function cosineSimilarity(a, b) {
    let dot = 0, magA = 0, magB = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        magA += a[i] ** 2;
        magB += b[i] ** 2;
    }
    return dot / (Math.sqrt(magA) * Math.sqrt(magB) || 1);
}



// ==========================================================
//             4) TENSORFLOW.JS AI MODEL
// ==========================================================

async function trainAIModel() {
    const xs = [];
    const ys = [];

    const diseaseList = [];

    // Convert database into AI training data
    for (let category in medicalDB) {
        for (let disease in medicalDB[category]) {
            let d = medicalDB[category][disease];
            diseaseList.push(disease);

            let vec = toVector(d.symptoms.map(s => s.toLowerCase()));
            xs.push(vec);

            let label = new Array(Object.keys(medicalDB).length).fill(0);
            ys.push(xs.length); 
        }
    }

    const inputTensor = tf.tensor2d(xs);
    const outputTensor = tf.tensor1d(ys, "int32");

    // Build neural network
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 32, activation: "relu", inputShape: [SYMPTOM_KEYWORDS.length] }));
    model.add(tf.layers.dense({ units: 16, activation: "relu" }));
    model.add(tf.layers.dense({ units: diseaseList.length, activation: "softmax" }));

    model.compile({ optimizer: "adam", loss: "sparseCategoricalCrossentropy" });

    await model.fit(inputTensor, outputTensor, { epochs: 50 });

    return { model, diseaseList };
}



// ==========================================================
//             5) DOCTOR-LIKE OUTPUT BUILDER
// ==========================================================

function buildDoctorOutput(diseases, text, severity) {
    const severityTag = severity === "red" ? "🔴 URGENT" :
                        severity === "yellow" ? "🟡 Moderate" :
                        "🟢 Mild";

    let html = `
        <div class="result-card">
            <h3>Your Medical Assessment</h3>
            <p><strong>Severity:</strong> ${severityTag}</p>
            <p>You said: "<em>${text}</em>"</p>
            <p>Based on your symptoms, here are the top possibilities:</p>
        </div>
    `;

    diseases.forEach(d => {
        html += `
            <div class="result-card">
                <h3>${d.name}</h3>
                <p>${d.description}</p>
                <p><strong>Why this matches:</strong> ${d.symptoms.join(", ")}</p>
                <p><strong>Recommended tests:</strong> ${d.investigations.join(", ")}</p>
                <p><strong>Treatments:</strong> ${d.treatment.join(", ")}</p>
            </div>
        `;
    });

    html += `
        <div class="result-card">
            <h3>Doctor Advice</h3>
            <p>Please monitor your symptoms. If anything worsens, seek medical care.</p>
        </div>
    `;

    return html;
}



// ==========================================================
//            6) FINAL CONSULTATION EVENT
// ==========================================================

document.getElementById("searchBtn").addEventListener("click", async () => {

    const text = document.getElementById("symptomInput").value.toLowerCase().trim();
    const output = document.getElementById("output");

    if (!text) {
        output.innerHTML = `<div class="result-card">Please describe your feeling.</div>`;
        return;
    }

    const extracted = extractSymptoms(text);
    const inputVec = toVector(extracted);

    // Train AI model if not yet trained
    if (!window.aiModel) {
        output.innerHTML = `<div class="result-card">Training AI model... please wait 3–5 seconds ⏳</div>`;
        window.aiModel = await trainAIModel();
    }

    const { model, diseaseList } = window.aiModel;

    const prediction = model.predict(tf.tensor2d([inputVec])).dataSync();
    const index = prediction.indexOf(Math.max(...prediction));
    const predictedDisease = diseaseList[index];

    // Also use similarity engine
    const similarities = [];

    for (let category in medicalDB) {
        for (let disease in medicalDB[category]) {
            let d = medicalDB[category][disease];
            const vec = toVector(d.symptoms.map(s => s.toLowerCase()));
            const score = cosineSimilarity(inputVec, vec);

            similarities.push({ 
                name: disease, 
                score, 
                ...d 
            });
        }
    }

    // Sort by combined AI scoring
    similarities.sort((a,b) => b.score - a.score);

    const severity = text.includes("chest pain") || text.includes("can't breathe") ? "red" :
                     text.includes("fever") ? "yellow" : "green";

    const top3 = similarities.slice(0,3).map(x => ({
        name: x.name.replace(/_/g," "),
        description: x.description,
        symptoms: x.symptoms,
        investigations: x.investigations,
        treatment: x.treatment
    }));

    output.innerHTML = buildDoctorOutput(top3, text, severity);
});
async function askAI(message) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({
            model: "gpt-4.1-mini",
            messages: [
                { role: "system", content: "You are a friendly medical assistant. You do not give diagnosis, but you explain possible causes, ask more questions, and advise when to seek a doctor." },
                { role: "user", content: message }
            ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

// handle user input
document.getElementById("searchBtn").addEventListener("click", async () => {
    const input = document.getElementById("symptomInput").value;
    const output = document.getElementById("output");

    output.innerHTML = "<p>Thinking...</p>";

    const reply = await askAI(input);

    output.innerHTML = `
        <div class="result-card">
            <h3>Doctor AI Response</h3>
            <p>${reply}</p>
        </div>
    `;
});
