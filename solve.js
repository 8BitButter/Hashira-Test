function solvePolynomial(inputData) {
    const k = inputData.keys.k;
    const degree = k - 1;

    if (degree < 0) {
        console.error("k must be at least 1.");
        return;
    }
    
    const allRootsDecimal = [];
    for (const key in inputData) {
        if (key !== "keys") {
            const rootInfo = inputData[key];
            const value = rootInfo.value;
            const base = parseInt(rootInfo.base, 10);
            const decimalValue = parseInt(value, base);
            allRootsDecimal.push(decimalValue);
        }
    }
    
    const rootsToUse = allRootsDecimal.slice(0, degree);

    let coeffs = [1]; 

    for (const root of rootsToUse) {
        const newCoeffs = new Array(coeffs.length + 1).fill(0);

        for (let i = 0; i < coeffs.length; i++) {
            newCoeffs[i + 1] += coeffs[i];
        }

        for (let i = 0; i < coeffs.length; i++) {
            newCoeffs[i] -= root * coeffs[i];
        }
        
        coeffs = newCoeffs;
    }
    
    const finalCoeffs = coeffs.reverse();

    const output = {
        polynomialDegree: degree,
        rootsUsed: rootsToUse,
        coefficients: finalCoeffs,
        polynomialString: formatPolynomial(finalCoeffs),
    };

    console.log(JSON.stringify(output, null, 4));
}

function formatPolynomial(coeffs) {
    const degree = coeffs.length - 1;
    let parts = [];

    for (let i = 0; i < coeffs.length; i++) {
        const coeff = coeffs[i];
        const power = degree - i;

        if (coeff === 0) continue;

        let term = '';
        
        if (parts.length > 0) {
            term += (coeff > 0) ? ' + ' : ' - ';
        } else if (coeff < 0) {
            term += '-';
        }
        
        const absCoeff = Math.abs(coeff);
        
        if (absCoeff !== 1 || power === 0) {
            term += absCoeff;
        }

        if (power > 0) {
            term += 'x';
            if (power > 1) {
                term += '^' + power;
            }
        }
        parts.push(term);
    }
    return parts.join('');
}

// Read all data from the terminal input
let inputString = '';
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    inputString += chunk;
});

// When the input stream ends, parse the JSON and run the logic
process.stdin.on('end', () => {
    try {
        const inputData = JSON.parse(inputString);
        solvePolynomial(inputData);
    } catch (error) {
        console.error("Error: Failed to parse JSON from terminal input.", error.message);
    }
});