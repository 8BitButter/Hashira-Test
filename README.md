# 📜 Polynomial Coefficient Calculator (Hashira Placements Assignment)

## 🔎 Overview

This Node.js script is a solution for the **Hashira Placements programming assignment**.
It calculates the **coefficients of a monic polynomial** from a given set of its roots.

The script:

* Reads a **JSON object** from the terminal
* Processes roots from various **number bases**
* Outputs a detailed analysis of the resulting polynomial, including:

  * Its coefficients
  * A **human-readable string representation**

---

## 📝 Problem Statement Breakdown

The program interprets a JSON object containing the following:

* **n**: Total number of roots provided in the dataset
* **k**: Minimum number of data points required to uniquely define the polynomial (k = m + 1)
* **Polynomial Degree (m)**: Determined by the relation `m = k - 1`
* **Roots**: A list of polynomial roots, with each root’s value given in a specified base

👉 **Objective:** Use the first `m` roots to find the coefficients of the polynomial in standard form:

$$
P(x) = c_m x^m + c_{m-1} x^{m-1} + \dots + c_1 x + c_0
$$

---

## 🛠️ Algorithm & Approach

The script finds coefficients by simulating direct algebraic expansion.

1. **Parse Input**
   Reads and parses the JSON data from stdin.

2. **Determine Degree**
   Calculates polynomial degree `m = k - 1`.

3. **Decode Roots**
   Converts each root’s value from its given base into base-10.

4. **Select Roots**
   Picks the first `m` decoded roots.

5. **Iterative Multiplication**
   Starts with base polynomial `P(x) = 1` (represented by `[1]`)
   Iteratively multiplies by `(x - r)` for each root → builds final coefficient array.

6. **Format Output**
   Prints coefficients in standard order along with a polynomial string.

---

## 💻 Technology Stack

* **Language:** JavaScript
* **Runtime:** Node.js

---

## 🚀 How to Run

### Prerequisites

* Install **Node.js**

### Execution

#### Method 1: Pipe a JSON file (**Recommended**)

```bash
cat input.json | node solve.js
```

#### Method 2: Paste Directly into Terminal

```bash
node solve.js
```

* Paste JSON input
* End input with:

  * **Linux/macOS:** `Ctrl+D`
  * **Windows:** `Ctrl+Z` then `Enter`

---

## 📄 Input & Output Format

### ✅ Sample Input (`input.json`)

```json
{
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
```

### 🎯 Corresponding Output

```json
{
    "polynomialDegree": 2,
    "rootsUsed": [4, 7],
    "coefficients": [1, -11, 28],
    "polynomialString": "x^2 - 11x + 28"
}
```

---
