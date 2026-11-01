# india-bank-ifsc-api-client
ifsc, bank-api, india-banking, rapidapi, csharp, nodejs, python, neft, rtgs.

[![RapidAPI](https://img.shields.io/badge/RapidAPI-Subscribe%20Free-blue)](https://rapidapi.com/your-username/api/india-bank-ifsc-lookup-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A lightweight REST API to look up details for Indian bank branches by IFSC code. Returns bank name, branch, MICR, address, state, district and payment mode support (NEFT, RTGS, IMPS, UPI).

## Getting an API key
1. Sign up at https://rapidapi.com/.
2. Subscribe to the free tier of the India Bank & IFSC Lookup API.
3. Copy your `x-rapidapi-key` from the dashboard.

Keep your key out of source code. The examples read it from the `RAPIDAPI_KEY` environment variable.

## Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/ifsc/{code}` | Look up one branch by IFSC |
| GET | `/api/v1/ifsc/search?bank=&city=&page=1&pageSize=20` | Search branches by bank and/or city |

## Code examples
The `examples/` folder contains runnable clients:
- `examples/index.js`: Node.js with Axios (`npm install axios`)
- `examples/main.py`: Python with Requests (`pip install requests`)
- `examples/Program.cs`: C# console app (.NET 10)

Replace `YOUR-RAPIDAPI-HOST` with the host shown in your RapidAPI dashboard.

## Sample response
Run an example and paste the real response here, so the field names match what the API returns.

## License
MIT. See [LICENSE](LICENSE).

