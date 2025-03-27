# Project Intake Wizard

## Overview

The Project Intake Wizard is a web application designed to collect project information from potential clients. It guides users through a series of steps to gather essential details about their project, including contact information, project type, description, timeline, budget, and more.

## Features

- Multi-step form to collect project details
- Email notifications for new project submissions
- Save draft submissions to allow users to complete the form later
- Responsive design for various devices
- Easy to customize and extend

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS (with custom configuration)
- DaisyUI
- FontAwesome
- Resend (for email notifications)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/project-intake-wizard.git
    cd project-intake-wizard
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    RESEND_API_KEY=your_resend_api_key
    RESEND_EMAIL_PROJECT_FROM=your_project_from_email
    RESEND_EMAIL_TO=your_to_email
    ```

### Tailwind CSS Configuration

The application uses a custom Tailwind CSS configuration located in `tailwind.config.js`. You can modify this file to adjust the theme, colors, or other Tailwind settings as needed.

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

Then, to start the production server, run:

```bash
npm start
# or
yarn start
```

## Project Structure

```
.
├── .next/                  # Next.js build output
├── node_modules/           # Node.js dependencies
├── public/                 # Public assets
├── src/                    # Source code
│   ├── app/                # Next.js app directory
│   │   └── (pages)/        # Application pages
│   │       └── project-intake/
│   │           └── components/
│   │               ├── additional-info-step.tsx
│   │               ├── basic-info-step.tsx
│   │               ├── project-details-step.tsx
│   │               ├── project-intake-wizard.tsx
│   │               ├── project-type-step.tsx
│   │               ├── review-step.tsx
│   │               ├── success-step.tsx
│   │               └── draft-saving.tsx  # New component for saving drafts
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and scripts
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
