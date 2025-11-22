function instagram(){
    window.location.href = "https://www.instagram.com/imperial_college_berhampur?igsh=MWpod3NuOHI4d3MwNQ=="
}

function facebook(){
    window.location.href = "https://www.facebook.com/share/17qCx6Xv4h/"
}

function youtube(){
    window.location.href = "https://youtube.com/@imperialcollege305?si=mDkP-1yDlfPOk89_"
}
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-toggle');
    const signupBtn = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const actionText = document.getElementById('action-text');
    const subText = document.getElementById('sub-text');

    if (loginBtn && signupBtn && loginForm && signupForm) {
        // Switch to Login
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            
            if(actionText) actionText.textContent = "Login to";
            if(subText) subText.textContent = "Welcome back to Imperial College community";
        });

        // Switch to Signup
        signupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            
            if(actionText) actionText.textContent = "Create Your";
            if(subText) subText.textContent = "Join Imperial College community today";
        });
    }
});