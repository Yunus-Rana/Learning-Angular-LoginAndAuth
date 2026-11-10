# Morrow

Morrow is a small Angular workspace demo with a calm, minimal interface. Sign in to explore the Home, About, and Contact pages, all presented within a shared layout and navigation.

## Features

- Responsive layout with a muted sage-and-neutral color palette
- Email and password sign-in form
- Home, About, and Contact pages with shared navigation
- Angular route guard that redirects visitors who are not signed in to `/login`
- Not-found page for unrecognized routes
- Login state stored in browser `localStorage`

## Getting started

### Requirements

- Node.js and npm

### Install and run

```bash
npm install
npm start
```

Open the local URL printed by Angular CLI (typically `http://localhost:4200/`).

## Demo sign-in

This project currently has no authentication server. The sign-in form accepts a valid email address and a non-empty password, then stores the email in `localStorage` under the `newuser` key. This is only a front-end demonstration and is not suitable for protecting real user data.

Use the **Logout** button to clear the stored value. If you need to reset the demo manually, remove `newuser` from the browser's local storage.

## Routes

| Route | Description | Access |
| --- | --- | --- |
| `/login` | Sign-in form | Public |
| `/home` | Workspace overview | Requires sign-in |
| `/about` | About the Morrow workspace | Requires sign-in |
| `/contact` | Contact information | Requires sign-in |
| Any unmatched URL | Not-found page | Public |

The Home, About, and Contact pages are child routes of the shared layout. The `canActivateChild` auth guard protects them.

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
- CSS
- Angular Router
