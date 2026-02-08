function findFirstUniqueCode(codes: string[]): string {
    const codesSet: Set<string> = new Set();
    const duplicatesSet: Set<string> = new Set();

    for (const code of codes) {
        if (codesSet.has(code)) {
            duplicatesSet.add(code);
        } else {
            codesSet.add(code);
        }
    }

    for (const code of codes) {
        if (!duplicatesSet.has(code)) {
            return code;
        }
    }

    return "";
}