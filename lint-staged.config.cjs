module.exports = {
    '*.{js,jsx,ts,tsx}': (files) => {
        const chunkSize = 20;
        const chunks = [];
        for (let i = 0; i < files.length; i += chunkSize) {
            chunks.push(files.slice(i, i + chunkSize));
        }
        return chunks.map((chunk) => `eslint --fix ${chunk.map((f) => `"${f}"`).join(' ')}`);
    },
    '*.{json,css,md,mjs}': ['prettier --write'],
};
