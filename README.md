# Morrow

Morrow is a small Angular workspace with a calm, minimal interface. Sign in to explore the Home, About, and Contact pages inside a shared layout with responsive navigation.

## Features

- Muted sage-and-neutral visual theme
- Email and password sign-in form
- Login request sent to the UserApp API
- Home, About, and Contact pages protected by an Angular child-route guard
- User email displayed in the workspace header
- Logout clears the locally stored login value
- Not-found page for unrecognized routes

## Getting started

### Requirements

- Node.js
- npm

### Install and run

```bash
npm install
npm start
```

Open the local URL printed by Angular CLI, typically `http://localhost:4200/`.

## Sign-in and route protection

The login form sends `EmailId` and `Password` to:

```text
https://projectapi.gerasim.in/api/UserApp/login
```

On a successful response, the app stores the returned email under the `newuser` key in browser `localStorage` and navigates to `/home`. The auth guard checks for that value before allowing access to the Home, About, and Contact child routes. Use **Logout** to remove it.

This is a front-end demo. A value in `localStorage` is not a secure authentication mechanism and should not be used to protect sensitive data in a production application.

## Routes

| Route | Description | Access |
| --- | --- | --- |
| `/login` | Sign-in form | Public |
| `/` | Redirects to `/home` | Requires sign-in |
| `/home` | Workspace overview | Requires sign-in |
| `/about` | About the Morrow workspace | Requires sign-in |
| `/contact` | Contact information | Requires sign-in |
| Any unmatched URL | Not-found page | Public |

Home, About, and Contact are child routes of the shared layout and are protected by a `canActivateChild` guard.

## Development commands

```bash
npm start                 # Start the development server
npm run build             # Create a production build in dist/
npm test                  # Run unit tests
npm run watch             # Rebuild on source changes
```

## Built with

- Angular
- TypeScript
- Angular Router
- Angular Forms
- RxJS
