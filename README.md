# Real Estate App - Fullstack

![Banner](https://i.ibb.co/Zxy2MS0/banner.png)

## Table of Contents

- [About The Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About The Project

A full-stack real estate application built with React, GraphQL, Strapi, and Sass. This project provides a platform for users to browse, buy, and rent properties. The application leverages the power of React for building a dynamic and responsive user interface, Strapi for a flexible and scalable backend solution, Apollo Client for efficient data querying with GraphQL, and Sass for styling and responsive design.

<a href="https://i.ibb.co/D4khgD9/real-estate-app.gif" target="_blank"><img src="https://i.ibb.co/H7Y6pDt/real-estate-app.gif" alt="blog-app" border="0" /></a>

### Key Use Cases:

- Filter properties based on location and budget.
- Sort houses based on whether they are for rent or for sale.
- Efficient data querying using GraphQL.
- User-friendly and responsive interface built with Sass.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mr-smoke/real-estate-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd real-estate-app
   ```

3. Install the [dependencies](#dependencies) for the backend:

   ```bash
   cd backend
   npm install
   ```

4. Set up environment variables for the backend:

   - Create a `.env` file in the api directory and add the necessary environment variables.

5. Start the backend side development server:

   ```bash
   npm run develop
   ```

6. Open a new terminal and navigate to the project directory again:

   ```bash
   cd real-estate-app
   ```

7. Install the [dependencies](#dependencies) for the frontend:

   ```bash
   cd frontend
   npm install
   ```

8. Start the frontend development server:

   ```bash
   npm run dev
   ```

Now both the backend and frontend servers should be running, and you can use the application.

## Usage

To use the real estate app, follow these steps:

1. Open your browser and navigate to `http://localhost:5173`.
2. Search for houses available based on location and budget.
3. You can use navigation for properties available for rent or sale.

### Example Commands

- To find a house based on location and budget

  1. Enter your desired location and price range, then click the search button.
  2. Among the listed houses, click the view button on the one you are interested in to see the details.

## Features

- **Filter Houses**: Users can filter houses based on their preferred location and budget, making it easier to find suitable properties.
- **Sort Houses**: Users can sort houses based on whether they are for rent or for sale, allowing for a more targeted search.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-friendly Interface**: Intuitive and easy-to-use interface built with React and Sass.
- **Real-time Updates**: Dynamic updates without page reloads.
- **Database Integration**: Strapi for robust and reliable data storage, ensuring data integrity and performance.
- **GraphQL**: Efficient data querying and manipulation using GraphQL.

## Technologies Used

- [![React][React.js]][React-url]
- [![Strapi][Strapi]][Strapi-url]
- [![GraphQL][GraphQL]][GraphQL-url]
- [![Sass][Sass.css]][Sass-url]

## Dependencies

### Backend Dependencies

- **@strapi/plugin-cloud**: Cloud plugin for Strapi.
- **@strapi/plugin-graphql**: GraphQL plugin for Strapi.
- **@strapi/plugin-users-permissons**: Users and permissions plugin for Strapi.
- **@strapi/strapi**: Core Strapi package.
- **better-sqlite3**: SQLite client for Node.js.
- **react**: Core library for building the frontend interface.
- **react-dom**: React library for DOM rendering.
- **react-router-dom**: Declarative routing for React applications.
- **styled-components**: A library for writing CSS-in-JS, allowing for styled React components.

### Frontend Dependencies

- **@apollo/client**: Apollo Client for managing GraphQL data in your React application.
- **graphql**: A query language for your API.
- **react**: Core library for building the frontend interface.
- **react-dom**: React library for DOM rendering.
- **react-icons**: Collection of popular icons to enhance the UI.
- **react-router-dom**: Declarative routing for React applications.
- **sass**: Declarative routing for React applications.
- **swiper**: A modern touch slider for creating carousels, sliders, and swipeable components.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact

For questions or feedback, feel free to reach out:

- Email: [muhammetbakiduman@gmail.com](mailto:muhammetbakiduman@gmail.com)
- LinkedIn: [Baki Duman](https://www.linkedin.com/in/muhammet-baki-duman-019451195/)

---

[React.js]: https://img.shields.io/badge/react-000000?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://react.dev
[Strapi]: https://img.shields.io/badge/strapi-20232A?style=for-the-badge&logo=strapi&logoColor=61DAFB
[Strapi-url]: https://strapi.io
[GraphQL]: https://img.shields.io/badge/graphql-000000?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org
[Sass.css]: https://img.shields.io/badge/sass-20232A?style=for-the-badge&logo=sass&logoColor=61DAFB
[Sass-url]: https://sass-lang.com
