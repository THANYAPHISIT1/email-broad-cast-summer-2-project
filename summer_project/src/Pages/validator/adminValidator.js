import { VALIDATION_RULES } from '../../constants';

export const validateEmail = (email) => {
    if (!email || !email.trim()) {
        return "Email is required.";
    }

    if (!VALIDATION_RULES.EMAIL.PATTERN.test(email)) {
        return "Please enter a valid email address.";
    }

    return true;
}

export const validateUsername = (username) => {
    if (!username || !username.trim()) {
        return "Username is required.";
    }

    if (username.length < VALIDATION_RULES.USERNAME.MIN_LENGTH) {
        return `Username must be at least ${VALIDATION_RULES.USERNAME.MIN_LENGTH} characters long.`;
    }

    if (username.length > VALIDATION_RULES.USERNAME.MAX_LENGTH) {
        return `Username cannot exceed ${VALIDATION_RULES.USERNAME.MAX_LENGTH} characters.`;
    }

    if (!VALIDATION_RULES.USERNAME.PATTERN.test(username)) {
        return "Username can only contain letters and numbers.";
    }

    return true;
}

export const validatePassword = (password) => {
    if (!password) {
        return "Password is required.";
    }

    if (password.length < VALIDATION_RULES.PASSWORD.MIN_LENGTH) {
        return `Password must be at least ${VALIDATION_RULES.PASSWORD.MIN_LENGTH} characters long.`;
    }

    if (password.length > VALIDATION_RULES.PASSWORD.MAX_LENGTH) {
        return `Password cannot exceed ${VALIDATION_RULES.PASSWORD.MAX_LENGTH} characters.`;
    }

    if (!/(?=.*[a-z])/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    if (!/(?=.*[A-Z])/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    if (!/(?=.*\d)/.test(password)) {
        return "Password must contain at least one digit.";
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
        return "Password must contain at least one special character (!@#$%^&*).";
    }

    if (!VALIDATION_RULES.PASSWORD.PATTERN.test(password)) {
        return "Password can only contain letters, numbers, and special characters (!@#$%^&*).";
    }

    return true;
}
