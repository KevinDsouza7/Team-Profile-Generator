# Team Profile Generator

This is a command-line application that generates a team profile HTML page based on user input. The application prompts the user to input information about the team manager, engineers, and interns. The generated HTML page displays a summary of the team members with their respective roles, names, employee IDs, email addresses, and additional information specific to their roles (office number for managers, GitHub username for engineers, and school for interns).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine.
   ```bash
   git clone : git@github.com:KevinDsouza7/Team-Profile-Generator.git
   ```

2. Navigate to the project directory.
   ```bash
   cd team-profile-generator
   ```

3. Install the required dependencies.
   ```bash
   npm install
   ```

## Usage

To run the application, use the following command:
```bash
node index.js
```

Follow the prompts to input information about the team members. You will be prompted to enter details for the team manager, engineers, and interns. Once you choose to finish building the team, the application will generate an HTML file in the `dist` directory.

The generated HTML file will be named `team-profile.html` and will include a summary of the team members you provided.

## Dependencies

The application relies on the following npm packages:

- [inquirer](https://www.npmjs.com/package/inquirer): Used for prompting the user with questions.
- [path](https://nodejs.org/api/path.html): A core module for working with file and directory paths.
- [fs](https://nodejs.org/api/fs.html): A core module for working with the file system.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.
4. Provide a detailed description of the changes made and the issue it fixes or feature it adds.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this code for your own purposes.