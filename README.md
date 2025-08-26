# Personal Brand Website

## Overview

This is the personal brand website for showcasing professional achievements, projects, and skills. It serves as a portfolio and a platform to connect with potential clients, collaborators, or employers.

## Features

- Responsive design for seamless viewing on all devices
- Portfolio section to highlight projects and achievements
- Contact form for inquiries and collaborations
- Blog section for sharing insights and updates
- Integration with email services for notifications
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
    git clone https://github.com/brandonkorous/personal.git
    cd personal
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
    RESEND_EMAIL_FROM=your_email_from
    RESEND_EMAIL_TO=your_email_to
    ```

### Tailwind CSS Configuration

The application uses a custom Tailwind CSS configuration located in globals.css. You can modify this file to adjust the theme, colors, or other Tailwind settings as needed.
NOTE: This application is use Tailwind CSS v4.1, which is not using `tailwind.config.js`.

### DaisyUI Configuration

This application uses a custom DaisyUI configuration located in `globals.css`.  You can modify this filie to adjust the theme, colors, or other DaisyUI components as needed.

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Screenshot Generation

This project includes an automated screenshot capture system for portfolio use. To generate screenshots:

```bash
# Start the development server
npm run dev

# In another terminal, generate screenshots
./scripts/generate-screenshots.sh
```

Screenshots will be saved to `public/images/` and can be used in the portfolio. See [SCREENSHOTS.md](SCREENSHOTS.md) for detailed documentation.

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
│   │       └── personal-brand/
│   │           └── components/
│   │               ├── about-section.tsx
│   │               ├── contact-form.tsx
│   │               ├── portfolio-section.tsx
│   │               ├── blog-section.tsx
│   │               ├── header.tsx
│   │               ├── footer.tsx
│   │               └── notification-service.tsx
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and scripts
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
