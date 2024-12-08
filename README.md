# Node.js Server Unexpected Crash

This repository demonstrates a common issue in Node.js where a server unexpectedly crashes after some time without providing clear error messages.  The provided `server.js` file contains the problematic code, while `serverSolution.js` offers a potential solution. 

## Bug Description

A seemingly simple HTTP server implementation crashes without logging any errors.  This makes debugging the issue extremely difficult.  The crash occurs intermittently, making it hard to pinpoint the exact cause. 

## Solution
The solution involves using process event listeners to catch unhandled exceptions and gracefully shut down the server. This allows for better error handling and diagnostics.