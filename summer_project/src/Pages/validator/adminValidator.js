export const validateEmail = (email) => {
    return email.includes('@')
}

export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/

    if (username.length < 4) {
        return "Username must be at least 4 characters long."
    }
    if (username.length > 20) {
        return "Username cannot exceed 20 characters."
    }

    if (!usernameRegex.test(username)) {
        return "Username can only contain letters and numbers."
    }

    return true
}

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/

    if (password.length < 8) {
        return "Password must be at least 8 characters long."
    }
    if (password.length > 20) {
        return "Password cannot exceed 20 characters."
    }

    if (!/(?=.*[a-z])/.test(password)) {
        return "Password must contain at least one lowercase letter."
    }

    if (!/(?=.*[A-Z])/.test(password)) {
        return "Password must contain at least one uppercase letter."
    }

    if (!/(?=.*\d)/.test(password)) {
        return "Password must contain at least one digit."
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
        return "Password must contain at least one special character (!@#$%^&*)."
    }

    if (!passwordRegex.test(password)) {
        return "Password can only contain letters, numbers, and special characters (!@#$%^&*)."
    }

    return true
}
