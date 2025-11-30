// ==========================
// 1) YOUR MEDICAL DATABASE
// ==========================

const medicalDB = {

    "symptoms_core": {
      "fever": {
        "causes": ["infection", "inflammation", "malignancy", "drug reaction"],
        "red_flags": ["altered mental status", "neck stiffness", "low blood pressure", "persistent fever > 5 days"],
        "notes": "Fever indicates cytokine release and hypothalamic set-point change."
      },
      "headache": {
        "causes": ["tension headache", "migraine", "meningitis", "subarachnoid hemorrhage"],
        "red_flags": ["worst ever headache", "photophobia", "sudden onset", "seizure"]
      },
      "chest_pain": {
        "causes": ["MI", "pneumonia", "pulmonary embolism", "reflux disease"],
        "red_flags": ["radiation to left arm", "sweating", "fainting"]
      },
      "cough": {
        "causes": ["viral infection", "pneumonia", "asthma", "COPD"],
        "red_flags": ["blood in sputum", "severe breathlessness"]
      }
    },
  
    "immunology_core": {
      "allergy": {
        "mechanism": "IgE-mediated hypersensitivity",
        "examples": ["asthma", "anaphylaxis", "hay fever"]
      },
      "autoimmune": {
        "mechanism": "Loss of self-tolerance",
        "examples": ["type 1 diabetes", "SLE", "RA"]
      }
    },
  
    "oncology_core": {
      "cancer_red_flags": [
        "unexplained weight loss",
        "night sweats",
        "bleeding",
        "mass present > 4 weeks"
      ]
    },
  
    "pain_types": {
      "nociceptive": "Due to tissue injury.",
      "neuropathic": "Due to nerve injury.",
      "mixed": "Combination of both."
    },
  
    "emergencies": {
      "sepsis": {
        "description": "Life-threatening organ dysfunction due to infection.",
        "symptoms": ["fever", "low BP", "confusion"],
        "investigations": ["blood tests", "lactate", "cultures"],
        "treatment": ["IV fluids", "antibiotics", "oxygen"]
      },
      "anaphylaxis": {
        "description": "Severe allergic reaction.",
        "symptoms": ["wheezing", "swelling", "rash"],
        "investigations": ["clinical"],
        "treatment": ["IM adrenaline", "IV fluids", "oxygen"]
      },
      "acute_asthma": {
        "description": "Severe asthma attack.",
        "symptoms": ["wheeze", "breathlessness"],
        "investigations": ["PEFR"],
        "treatment": ["nebulized bronchodilators", "steroids"]
      },
      "shock": {
        "types": ["hypovolemic", "cardiogenic", "septic", "anaphylactic"],
        "common_signs": ["tachycardia", "low BP", "poor perfusion"]
      }
    },
  
    "poisoning": {
      "paracetamol_toxicity": {
        "symptoms": ["nausea", "RUQ pain"],
        "investigations": ["paracetamol level", "LFTs"],
        "treatment": ["N-acetylcysteine"]
      },
      "opioid_overdose": {
        "symptoms": ["pinpoint pupils", "respiratory depression"],
        "investigations": ["clinical"],
        "treatment": ["naloxone"]
      }
    },
  
    "environmental": {
      "heat_stroke": {
        "symptoms": ["core temp > 40°C", "confusion"],
        "investigations": ["clinical"],
        "treatment": ["rapid cooling"]
      },
      "hypothermia": {
        "symptoms": ["shivering", "slow HR"],
        "investigations": ["core temp"],
        "treatment": ["rewarming"]
      }
    },
  
    "infectious_diseases": {
      "pneumonia": {
        "description": "Infection of lung tissue.",
        "symptoms": ["fever", "cough", "breathlessness"],
        "investigations": ["CXR", "CRP"],
        "treatment": ["amoxicillin", "macrolides"]
      },
      "tuberculosis": {
        "description": "Chronic Mycobacterium tuberculosis infection.",
        "symptoms": ["chronic cough", "weight loss", "night sweats"],
        "investigations": ["CXR", "sputum AFB"],
        "treatment": ["RIPE therapy"]
      },
      "covid_19": {
        "description": "Coronavirus respiratory infection.",
        "symptoms": ["fever", "loss of smell", "cough"],
        "investigations": ["PCR"],
        "treatment": ["supportive", "oxygen", "steroids"]
      },
      "influenza": {
        "description": "Seasonal viral infection.",
        "symptoms": ["fever", "myalgia", "headache"],
        "investigations": ["PCR"],
        "treatment": ["oseltamivir"]
      },
      "meningitis": {
        "description": "Infection of meninges.",
        "symptoms": ["fever", "neck stiffness", "headache"],
        "investigations": ["lumbar puncture"],
        "treatment": ["IV antibiotics"]
      },
      "uti": {
        "description": "Urinary tract infection.",
        "symptoms": ["burning urination", "frequency"],
        "investigations": ["urinalysis"],
        "treatment": ["nitrofurantoin"]
      },
      "hepatitis_b": {
        "description": "Viral liver infection.",
        "symptoms": ["jaundice", "fatigue"],
        "investigations": ["HBsAg"],
        "treatment": ["antivirals"]
      },
      "hiv": {
        "description": "Retrovirus causing immune suppression.",
        "symptoms": ["fever", "weight loss"],
        "investigations": ["HIV test", "CD4 count"],
        "treatment": ["ART"]
      },
      "syphilis": {
        "description": "Treponema pallidum infection.",
        "symptoms": ["chancre", "rash"],
        "investigations": ["RPR", "TPHA"],
        "treatment": ["penicillin"]
      },
      "malaria": {
        "description": "Mosquito-borne parasitic infection.",
        "symptoms": ["fever", "chills"],
        "investigations": ["blood smear"],
        "treatment": ["ACT therapy"]
      },
      "dengue": {
        "description": "Viral infection spread by Aedes mosquitoes.",
        "symptoms": ["fever", "joint pain", "rash"],
        "investigations": ["NS1 antigen"],
        "treatment": ["supportive"]
      }
    },
  
    "cardiology": {
      "hypertension": {
        "description": "High blood pressure.",
        "symptoms": ["headache", "dizziness"],
        "investigations": ["BP check", "ECG"],
        "treatment": ["ACE inhibitors", "calcium blockers"]
      },
      "heart_failure": {
        "description": "Weak pumping of heart.",
        "symptoms": ["breathlessness", "leg swelling"],
        "investigations": ["BNP", "echo"],
        "treatment": ["diuretics", "ACE inhibitors"]
      },
      "myocardial_infarction": {
        "description": "Heart muscle death due to ischemia.",
        "symptoms": ["chest pain", "sweating"],
        "investigations": ["troponin", "ECG"],
        "treatment": ["PCI", "aspirin"]
      }
    },
  
    "respiratory": {
      "asthma": {
        "description": "Chronic airway inflammation.",
        "symptoms": ["wheeze", "cough"],
        "investigations": ["spirometry"],
        "treatment": ["inhaled steroids", "bronchodilators"]
      },
      "copd": {
        "description": "Chronic obstruction due to smoking.",
        "symptoms": ["cough", "sputum", "breathlessness"],
        "investigations": ["spirometry"],
        "treatment": ["bronchodilators", "oxygen"]
      }
    },
  
    "neurology": {
      "stroke": {
        "description": "Brain blood flow blockage or bleed.",
        "symptoms": ["weakness", "facial droop"],
        "investigations": ["CT/MRI"],
        "treatment": ["thrombolysis", "aspirin"]
      },
      "epilepsy": {
        "description": "Recurring seizures.",
        "symptoms": ["convulsions"],
        "investigations": ["EEG"],
        "treatment": ["anti-epileptics"]
      }
    },
  
    "endocrinology": {
      "hyperthyroidism": {
        "description": "Excess thyroid hormone.",
        "symptoms": ["heat intolerance", "palpitations"],
        "investigations": ["TSH/T4"],
        "treatment": ["carbimazole"]
      },
      "hypothyroidism": {
        "description": "Low thyroid hormone.",
        "symptoms": ["fatigue", "cold intolerance"],
        "investigations": ["TSH/T4"],
        "treatment": ["levothyroxine"]
      }
    },
  
    "gastroenterology": {
      "gerd": {
        "description": "Reflux of stomach acid.",
        "symptoms": ["heartburn"],
        "investigations": ["endoscopy if severe"],
        "treatment": ["PPIs"]
      },
      "peptic_ulcer": {
        "description": "Ulcer of stomach/duodenum.",
        "symptoms": ["epigastric pain"],
        "investigations": ["endoscopy"],
        "treatment": ["PPIs", "H. pylori treatment"]
      }
    },
  
    "hematology": {
      "iron_deficiency_anemia": {
        "description": "Low iron levels causing anemia.",
        "symptoms": ["fatigue", "pale skin"],
        "investigations": ["Hb", "ferritin"],
        "treatment": ["iron tablets"]
      }
    },
  
    "rheumatology": {
      "rheumatoid_arthritis": {
        "description": "Autoimmune joint inflammation.",
        "symptoms": ["morning stiffness"],
        "investigations": ["RF", "anti-CCP"],
        "treatment": ["DMARDs"]
      }
    },
  
    "dermatology": {
      "eczema": {
        "description": "Chronic skin inflammation.",
        "symptoms": ["itching", "dry skin"],
        "investigations": ["clinical"],
        "treatment": ["steroids", "moisturizers"]
      }
    },
  
    "psychiatry": {
      "depression": {
        "description": "Low mood disorder.",
        "symptoms": ["sadness", "loss of interest"],
        "investigations": ["clinical"],
        "treatment": ["SSRIs", "therapy"]
      }
    }
  };
  
  
  // =====================================
  // 2) FREE-TEXT MEDICAL ANALYZER
  // =====================================
  
  document.getElementById("searchBtn").addEventListener("click", () => {
      const text = document.getElementById("symptomInput").value.toLowerCase();
      const output = document.getElementById("output");
  
      if (!text.trim()) {
          output.innerHTML = "<p>Please describe how you feel.</p>";
          return;
      }
  
      let extractedSymptoms = [];
  
      const symptomKeywords = [
          "fever","headache","cough","chest pain","vomit","vomiting","dizzy","dizziness",
          "weakness","breathlessness","shortness of breath","difficulty breathing",
          "pain","rash","burning","fatigue","tired","nausea","sweating","shaking",
          "cold","hot","palpitations","confusion","stiff neck","diarrhea","runny nose",
          "sore throat","abdominal pain","stomach pain","back pain","body ache"
      ];
  
      // extract symptoms from text
      symptomKeywords.forEach(sym => {
          if (text.includes(sym)) extractedSymptoms.push(sym);
      });
  
      if (extractedSymptoms.length === 0) extractedSymptoms.push(text);
  
      let matchedResults = [];
  
      // search through database
      for (let category in medicalDB) {
          for (let disease in medicalDB[category]) {
              let dis = medicalDB[category][disease];
  
              if (!dis.symptoms) continue;
  
              let matchCount = 0;
  
              extractedSymptoms.forEach(sym => {
                  dis.symptoms.forEach(dsym => {
                      if (dsym.toLowerCase().includes(sym)) matchCount++;
                  });
              });
  
              if (matchCount > 0) {
                  matchedResults.push({
                      name: disease.replace(/_/g, " "),
                      score: matchCount,
                      description: dis.description,
                      symptoms: dis.symptoms,
                      investigations: dis.investigations,
                      treatment: dis.treatment
                  });
              }
          }
      }
  
      matchedResults.sort((a, b) => b.score - a.score);
  
      if (matchedResults.length === 0) {
          output.innerHTML = "<p>No matching disease found. Try describing more symptoms.</p>";
          return;
      }
  
      output.innerHTML = matchedResults.slice(0, 3).map(r => `
          <div class="result-card">
              <h3>${r.name}</h3>
              <p><strong>Description:</strong> ${r.description}</p>
              <p><strong>Symptoms:</strong> ${r.symptoms.join(", ")}</p>
              <p><strong>Investigations:</strong> ${r.investigations.join(", ")}</p>
              <p><strong>Treatment:</strong> ${r.treatment.join(", ")}</p>
          </div>
      `).join("");
  });
  
