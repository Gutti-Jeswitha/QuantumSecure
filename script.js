// Switch between different sections
function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}


// Signature verification demo
function verifySignature() {

    const signatureId =
        document.getElementById("signatureId").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const result =
        document.getElementById("verificationResult");

    const forgery =
        document.getElementById("forgeryProbability");

    const accuracy =
        document.getElementById("verificationAccuracy");

    const decision =
        document.getElementById("decision");


    // Check input

    if (signatureId === "") {

        result.innerHTML =
            `<div class="result">
                ⚠️ Please enter a Signature ID.
            </div>`;

        return;
    }


    // Demo result

    result.innerHTML =

        `<div class="verification-success">

            <h2>🟢 SIGNATURE VALID</h2>

            <div class="verification-detail">
                <span>Signature ID</span>
                <b>${signatureId}</b>
            </div>

            <div class="verification-detail">
                <span>Integrity</span>
                <b>Verified</b>
            </div>

            <div class="verification-detail">
                <span>Authenticity</span>
                <b>Confirmed</b>
            </div>

            <div class="verification-detail">
                <span>Threat Status</span>
                <b>None Detected</b>
            </div>

        </div>`;


    // Demo metrics

    forgery.innerText = "0.3%";

    accuracy.innerText = "98.7%";

    decision.innerText = "ACCEPT";
}

// Attack simulation demo
function runSimulation() {

    const attack =
        document.getElementById("attackType").value;

    const tests =
        parseInt(document.getElementById("testCount").value);


    const result =
        document.getElementById("simulationResult");

    const testsPerformed =
        document.getElementById("testsPerformed");

    const threatsDetected =
        document.getElementById("threatsDetected");

    const detectionRate =
        document.getElementById("detectionRate");

    const riskLevel =
        document.getElementById("riskLevel");


    // Validate number of tests

    if (isNaN(tests) || tests < 10) {

        result.innerHTML =
            `<div class="result">
                ⚠️ Please enter at least 10 test attempts.
            </div>`;

        return;
    }


    // Demo simulation calculation

    let rate;

    let risk;


    if (attack === "Replay Attack") {

        rate = 96;
        risk = "CRITICAL";

    } else if (attack === "Forgery") {

        rate = 94;
        risk = "HIGH";

    } else if (attack === "Impersonation") {

        rate = 91;
        risk = "HIGH";

    } else {

        rate = 88;
        risk = "MEDIUM";
    }


    const detected =
        Math.round(tests * rate / 100);


    // Display result

    result.innerHTML =

        `<div class="simulation-success">

            <h2>🧪 SIMULATION COMPLETED</h2>

            <div class="simulation-detail">
                <span>Attack Type</span>
                <b>${attack}</b>
            </div>

            <div class="simulation-detail">
                <span>Tests Performed</span>
                <b>${tests}</b>
            </div>

            <div class="simulation-detail">
                <span>Threats Detected</span>
                <b>${detected}</b>
            </div>

            <div class="simulation-detail">
                <span>Detection Rate</span>
                <b>${rate}%</b>
            </div>

            <div class="simulation-detail">
                <span>Risk Classification</span>
                <b>${risk}</b>
            </div>

        </div>`;


    // Update dashboard metrics

    testsPerformed.innerText = tests;

    threatsDetected.innerText = detected;

    detectionRate.innerText = rate + "%";

    riskLevel.innerText = risk;
}