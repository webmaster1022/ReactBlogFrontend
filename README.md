# Blog Rendering using React
 A react front end UI which renders a blog page. The blog page data is fetched from a node backend created in node.js training. 
 
## Features

- fetches blogs from an node backend and displays all blogs on home page
- shows blog detail on clicking any blog card
- dynamically rendering blogs on detail page
- dynamic navigation based on logged in user
- react app is hosted on **Vercel**
- all auth login is implemented on node auth server running on heroku

## Drawbacks

- Local state management is used
- needs a global state management
- because of state management app is buggy - logout works only on home page
- app reloads on each requets

## Extented Features

Worked on all the Drawbacks previously mentioned

- Used Redux For Global State Management
- bugs fixed :- logout working from each routes, checking auth and Dynamic Navigation
- App reloads fixed using History object
- maintained and re-performs auth and display blogs after page relods ( as redux looses its state ob page reloads)
- Used Redux-Thunk as a Middleware
- Used Reactstrap and Bootstrap for layouting the Blog List (Blog Home)
