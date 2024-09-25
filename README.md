# Event Management Dashboard Features

- **Past and Upcoming Events Display**: Implemented on the dashboard page, showing all relevant statistics.
- **Events Page Navigation**: Users can access the complete list of events via the Events page, available from the navigation bar.
- **CRUD Operations**: Full Create, Read, Update, Delete (CRUD) functionality for events is implemented. Any changes made here are reflected on the dashboard.
- **Event Details View**: Clicking on an event's ID redirects users to view the details of the individual event.
- **Attendees Management**: CRUD operations are also implemented for managing attendees.
- **User Authentication**: Implemented user authentication with the following logic:
  - If the user is not authenticated, they are redirected to the login screen.
  - If the user is already authenticated and tries to access the login screen, they are rerouted to the dashboard.
- **Pagination**: Pagination along with items per page has been added to improve the user experience when dealing with large data sets.
- **TypeScript**: The entire application has been implemented using TypeScript for type safety and better code quality.
- **Redux Toolkit**: Redux Toolkit is used for efficient state management across the application.
- **React Hook Form**: Form data handling is managed using React Hook Form for better control and validation.
- **Material UI and Tailwind CSS**: Both Material UI and Tailwind CSS have been integrated for the application's styling.
- **Error Boundary**: An error boundary has been added to gracefully handle errors within the application.
- **Toast Notifications**: Toast messages are implemented to provide users with necessary information and feedback.
- **Authentication with Next.js API Route Handlers**: Authentication is done using Next.js API route handlers, with secure access tokens being set upon login.
- **Logout Handling**: Upon logout, the access token is securely deleted to protect user data.
- **Email Validation**: While adding or editing attendees, a unique email check has been implemented to ensure no duplicates.
- **Data Display Order**: The latest appended data is shown at the top for easier access and visibility.
- **Responsive Design**: Responsive design is maintained throughout.
- **Webpage Metadata**: HTML title and description tags have been added to enhance SEO and improve the webpage's discoverability.

# Tech Stack

- **Nextjs**
- **Type Script**
- **Redux Toolkit**
- **React Hook Forms**
- **Axios**
- **Material UI**
- **Tailwind CSS**
- **JWT Authentication**
- **Vercel (for deployment)** : Deployed Link https://kodnest-interview.vercel.app/

# Login Credential

- **Email** : admin@xyz.com
- **Password** : admin@123
