let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const nextBtn = document.getElementById("nextBtn");
const checkInBox = document.querySelector(".check-in");

function selectEmoji(element, type) {
    document.querySelectorAll(".emoji").forEach(e => e.classList.remove("selected"));
    element.classList.add("selected");
    sessionStorage.setItem("selectedMood", type);
}

function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown-menu");
    const profileIcon = document.querySelector(".profile-icon");

    if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});


function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        questions[currentQuestion].classList.remove("active");
        currentQuestion++;
        questions[currentQuestion].classList.add("active");

        if (currentQuestion === questions.length - 1) {
            nextBtn.innerText = "Proceed";
        }
    } else {
        displayFinalMessage();
    }
}

function displayFinalMessage() {
    document.querySelector(".title").innerText = "Your Emotional Check-in";
    document.querySelector(".question-container").style.display = "none";

    const mood = sessionStorage.getItem("selectedMood");
    let message = "";

    if (mood === "sad") {
        message = `
            <h3>It's okay to feel sad.</h3>
            <ul>
                <li><strong>Acknowledge feelings:</strong> "Allow yourself time to process those emotions."</li>
                <li><strong>Self-care:</strong> "Try gentle activities like listening to calming music, taking a warm bath, or spending time in nature."</li>
                <li><strong>Connect:</strong> "Talk to a trusted friend, family member, or therapist. Sharing can help. Book an appointment with a Mindful voices specialist of your choice or join the Mindful Voices community for support."</li>
                <li><strong>Small steps:</strong> "Focus on small, manageable tasks. Even a little progress can boost your mood."</li>
            </ul>`;
    } else if (mood === "happy") {
        message = `
            <h3>Enjoy this feeling!</h3>
            <ul>
                <li><strong>Savor the moment:</strong> "Let yourself fully experience the joy."</li>
                <li><strong>Share positivity:</strong> "Spread your good vibes! Share your happiness with others."</li>
                <li><strong>Reflect:</strong> "Think about what's contributing to your happiness. Doing more of that can maintain the feeling."</li>
                <li><strong>Stay grounded:</strong> "While enjoying the moment, remember to stay balanced and mindful."</li>
            </ul>`;
    } else if (mood === "neutral") {
        message = `
            <h3>Take this time to reflect.</h3>
            <ul>
                <li><strong>Explore:</strong> "Use this time to reflect on your overall well-being. Is there anything you want to improve?"</li>
                <li><strong>Self-care:</strong> "Even in a neutral state, self-care is important. Maintain healthy habits."</li>
                <li><strong>Mindfulness:</strong> "Practice mindfulness or meditation to stay present and aware of your feelings."</li>
                <li><strong>Set intentions:</strong> "Use this balanced state to set goals or intentions for the day."</li>
            </ul>`;
    } else {
        message = "<h3>Please select an option for an accurate check-in.</h3>";
    }

    checkInBox.innerHTML = message;
    checkInBox.classList.add("show");
    nextBtn.style.display = "none";
}