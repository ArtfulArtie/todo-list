# Todo List App

A responsive React todo-list application built with Vite. The app allows authenticated users to create, edit, complete, delete, search, sort, and filter todos. It also includes protected routes, a profile page with todo statistics, and an about page.

## Features

- User authentication and logout
- Protected todo and profile routes
- Add, edit, complete, and delete todos
- Search todos by title
- Sort todos by title or creation date
- Filter todos by active or completed status
- URL-based filtering with query parameters
- Profile statistics
- Loading, error, and empty states
- Responsive design
- Custom 404 page

## Screenshots

### Todos Page

<img width="1280" height="622" alt="image" src="https://github.com/user-attachments/assets/22e39aef-4826-4276-8a8a-d8ec96efa295" />

<img width="1272" height="581" alt="image" src="https://github.com/user-attachments/assets/2336b73e-dcb0-477d-b95f-40c9eb15ae49" />

### Profile Page
<img width="1278" height="615" alt="image" src="https://github.com/user-attachments/assets/bd60c0ce-e008-4427-a181-1f41240093ae" />


## Installation

1. Clone the repository.
2. Open the project folder in your terminal.
3. Install the project dependencies by running:

```bash
npm install
```

## Live Demo

A live demo is not currently available.

## Available Scripts

### `npm run dev`

Starts the development server.

### `npm run build`

Creates a production build.

### `npm run preview`

Previews the production build locally.

### `npm run lint`

Runs ESLint to check the codebase.

## Design Decisions

The app uses a warm, earthy color palette to create a cozy and approachable visual identity. This choice was made on purpose to cature the warmth cozy nature of autumn. Reusable React components organize the navigation, todo form, todo list, filtering, sorting, and authentication functionality.

Protected routes prevent unauthenticated users from accessing private pages. React state is used for todo interactions, while URL query parameters support status-based filtering.

The project uses global CSS for shared application styling and a CSS Module for navigation-specific styles. This keeps the overall layout consistent while allowing selected component styles to remain scoped.

## Future Improvements

- Add due dates and reminders
- Add todo categories or tags
- Add priority levels
- Add automated tests
- Add improved keyboard support for editing
- Add deployment configuration
- Add user profile customization

## License

This project was created for educational purposes.

## Contact

- GitHub: https://github.com/ArtfulArtie
- LinkedIn: https://www.linkedin.com/in/artfulartie/

## Technologies Used

* React
* Vite
* JavaScript
* CSS

