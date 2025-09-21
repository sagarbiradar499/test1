document.addEventListener('DOMContentLoaded', () => {
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.step-progress');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    let currentStep = 0;

    // Function to show the current step and update progress bar
    const showStep = (stepIndex) => {
        formSteps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        progressSteps.forEach((step, index) => {
            step.classList.toggle('active', index <= stepIndex);
        });
    };

    // Event listener for "Next" buttons
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentFormStep = formSteps[currentStep];
            const requiredInputs = currentFormStep.querySelectorAll('[required]');
            let isValid = true;

            // Simple validation for required fields
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (isValid) {
                currentStep++;
                if (currentStep < formSteps.length) {
                    showStep(currentStep);
                }
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });

    // Event listener for "Previous" buttons
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            if (currentStep >= 0) {
                showStep(currentStep);
            }
        });
    });

    // Initial load: show the first step
    showStep(currentStep);
});