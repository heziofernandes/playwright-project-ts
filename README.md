This document outlines a Playwright automation project developed for a technical challenge, showcasing best practices in UI test automation with TypeScript. It features a comprehensive test suite using the Page Object Model, supports multiple environments, generates detailed reports, and integrates seamlessly with CI/CD pipelines via GitHub Actions. The project structure includes organized directories for pages, tests, and utilities, and provides clear instructions for setup and execution. Overall, it demonstrates a professional, scalable approach to automated testing that can be adapted to various project needs.

---

# Playwright Automation Challenge

This project was developed as part of a technical challenge to showcase skills in UI automation using **TypeScript** and **Playwright**. It demonstrates best practices in test organization, automation, and continuous integration, aligned with modern agile development standards.

---

## Project Objectives

- Implement a comprehensive UI test suite
- Utilize the Page Object Model (POM) to ensure maintainability and scalability
- Support multiple execution environments (local, development, production)
- Generate detailed visual reports for quick analysis
- Integrate test execution into CI/CD pipelines for continuous validation

---

## How to Run

Clone the repository and follow the steps below to execute the tests:

```bash
# Install project dependencies
npm install

# Run all tests
npm test

# Run tests with UI (headed mode)
npm run test:headed

# Run tests in development environment
npm run test:dev

# Run tests in production environment
npm run test:prod

# Generate test report
npm run report
```

---

## Project Structure

- `src/pages/` — Implements the Page Object Model for maintainability
- `src/tests/` — Automated test cases
- `src/utils/` — Configurations, utilities, and constants
- `.github/workflows/ci.yml` — Automated CI/CD pipeline with GitHub Actions

---

## Environments

This project supports the following environments, all pointing to [the-internet.herokuapp.com](https://the-internet.herokuapp.com) for consistency:

- **local** — Tests executed locally
- **dev** — Development environment
- **prod** — Simulated production environment

---

## CI/CD Integration

The pipeline defined in `.github/workflows/ci.yml` automates test execution on every push or pull request. This ensures continuous validation, reduces regression risks, and maintains high quality throughout the development lifecycle.