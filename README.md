# Node.js API Project with Environment Variables and Testing

This repository contains a sample Node.js project demonstrating how to use environment variables with `dotenv`, implement unit tests with `Jest`, and set up GitHub Actions for continuous integration.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js installed on your machine
- Git installed on your machine

### Installation

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/BinaTet/api_security
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repository
   ```

3. **Install dependencies using npm:**

   ```bash
   npm install
   ```

### Setting Up Environment Variables

1. **Create a `.env` file in the root of the project directory.**

2. **Add your API endpoint configuration to the `.env` file:**

   ```plaintext
   API_URL=https://swapi.dev/api/planets/1/
   ```

### Running Tests

Execute the following command to run Jest tests:

```bash
npm test
```

Jest will automatically discover and execute test files (`*.test.js`) in the project directory.
```
