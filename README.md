## Setup Guide for TP-AI Tailwind Generator

This guide will help you set up the TP-AI Tailwind Generator project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- A package manager like npm or pnpm

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repository/TP-ai-tailwind-generator.git
   cd TP-ai-tailwind-generator
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using pnpm:
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory of the project and add the following line:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   ```
   Replace `your_openai_api_key_here` with your actual OpenAI API key.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Or if you are using pnpm:
   ```bash
   pnpm run dev
   ```

   This will start the development server and open the project in your default web browser.

### Usage

To generate Tailwind CSS based designs using AI, navigate to the web interface at `http://localhost:3000` (or the port specified by your development server), enter your design prompt in the provided text area, and click the "Generate" button.

