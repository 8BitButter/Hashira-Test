Polynomial Coefficient Calculator (Hashira Placements Assignment)This Node.js script calculates the coefficients of a monic polynomial given a set of its roots. It is designed to solve the problem specified in the Hashira Placements programming assignment.The script reads input in a specific JSON format directly from the terminal, processes the roots (including converting them from various number bases), and outputs the resulting polynomial's degree, the specific roots used, the calculated coefficients, and a human-readable polynomial string.📝 Problem Statement BreakdownThe program receives a JSON object containing a set of roots for a polynomial. The key parameters are:n: The total number of roots provided in the dataset.k: The minimum number of roots required to uniquely define the polynomial.Polynomial Degree (m): The degree of the polynomial is not given directly but is defined by the relationship m = k - 1.Roots: A list of roots, where each root's value is provided in a specified numerical base.The primary goal is to use the first m roots to determine the coefficients of the polynomial in its standard form:P(x)=c_mxm+c_m−1xm−1+ldots+c_1x+c_0🛠️ Algorithm & ApproachThe script implements a direct algebraic expansion approach to find the coefficients.Parse Input: It first reads and parses the JSON data provided via the terminal's standard input.Determine Degree: It calculates the polynomial's degree m using the formula m = k - 1.Decode Roots: It iterates through the provided root objects, converts each root's value from its given base into a standard decimal (base-10) integer, and stores them.Select Roots: The script selects the first m decoded roots to construct the polynomial, as this is the number of roots required to define it.Iterative Multiplication: The core logic constructs the polynomial by starting with a base polynomial P(x) = 1 (represented by the coefficient array [1]). It then iteratively "multiplies" this polynomial by the factor (x - r) for each of the m selected roots. This process algorithmically builds the final coefficient array.Format Output: The final array of coefficients is reversed to follow the standard order (from the highest degree term to the constant term) and printed as part of a final JSON object.🚀 How to RunPrerequisitesYou must have Node.js installed on your system to run the script.ExecutionThe script is designed to read from standard input. You can provide the input in one of two ways:Option 1: Pipe a JSON file (Recommended)Save your test case as a JSON file (e.g., input.json).Use a pipe (|) to send the file's content directly to the script.cat input.json | node solve.js
Option 2: Paste directly into the terminalRun the script without any arguments:node solve.js
The terminal will wait for input. Paste your entire JSON content into the terminal.Signal the end of the input by pressing:Ctrl+D on Linux or macOS.Ctrl+Z followed by Enter on Windows.📄 Input & Output FormatSample Input (input.json){
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
Corresponding Output{
    "polynomialDegree": 2,
    "rootsUsed": [
        4,
        7
    ],
    "coefficients": [
        1,
        -11,
        28
    ],
    "polynomialString": "x^2 - 11x + 28"
}
