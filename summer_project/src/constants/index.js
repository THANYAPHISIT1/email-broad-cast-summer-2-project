export const CUSTOMER_LEVELS = [
  { value: "Silver", label: "Silver" },
  { value: "Gold", label: "Gold" },
  { value: "Platinum", label: "Platinum" },
  { value: "Diamond", label: "Diamond" },
];

export const VALIDATION_RULES = {
  USERNAME: {
    MIN_LENGTH: 4,
    MAX_LENGTH: 20,
    PATTERN: /^[a-zA-Z0-9]{4,20}$/,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 20,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  BROADCAST_NAME: {
    MIN_LENGTH: 4,
    MAX_LENGTH: 20,
  },
};

export const FILTER_BY_STATUS = [
  { label: 'Draft', value: 'Draft' },
  { label: 'Sent', value: 'Sent' },
  { label: 'Schedule', value: 'Schedule' },
];

export const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
];

export const TOKEN_EXPIRY_CHECK_INTERVAL = 5 * 60 * 1000;
