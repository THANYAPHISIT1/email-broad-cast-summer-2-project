import { VALIDATION_RULES } from '../../constants';

export const validateBName = (BName) => {
    if (!BName || !BName.trim()) {
        return "Broadcast's name is required.";
    }

    if (BName.length < VALIDATION_RULES.BROADCAST_NAME.MIN_LENGTH) {
        return `Broadcast's name must be at least ${VALIDATION_RULES.BROADCAST_NAME.MIN_LENGTH} characters long.`;
    }

    if (BName.length > VALIDATION_RULES.BROADCAST_NAME.MAX_LENGTH) {
        return `Broadcast's name cannot exceed ${VALIDATION_RULES.BROADCAST_NAME.MAX_LENGTH} characters.`;
    }

    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    if (!alphanumericRegex.test(BName)) {
        return "Broadcast's name can only contain letters and numbers.";
    }

    return true;
}
