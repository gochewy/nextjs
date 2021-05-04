module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};