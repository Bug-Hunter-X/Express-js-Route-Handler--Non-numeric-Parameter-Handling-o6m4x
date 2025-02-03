# Express.js Route Handler: Non-numeric Parameter Handling

This repository demonstrates a common error in Express.js route handlers: improper handling of non-numeric parameters.  The provided code showcases the bug and its solution.

## Bug Description

The `GET /users/:id` route attempts to fetch a user based on the provided `id`.  However, it fails to handle cases where the `id` is not a number. This can cause unexpected behavior, ranging from silent failures to database errors.

## Solution

The solution adds input validation to ensure the `id` parameter is a number before proceeding with the database operation.  This prevents unexpected failures and enhances the robustness of the application.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` (to observe the buggy behavior)
5. Run `node bugSolution.js` (to see the solution)