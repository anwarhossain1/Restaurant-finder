# Restaurant Finder- A platform to find nearby restaurants within 3km

This is a web service by which users can pick a restaurant close to the office. Users can also be able to search restaurants by keyword arround them. By tapping a restaurant from the list exactly below the searchbar given in the platform, users can see the map view of the location.

## Prerequisites

> \*\*use node

## Installation

To run this project into your environment

```
git clone https://github.com/anwarhossain1/Restaurant-finder.git
cd Restaurant-finder
yarn or npm
yarn start or npm start
```

## Functions implemented In the Project

1. Random selection of a restaurant within 3 km of the Monstar Lab Bangladesh Office.
2. Map view showing the location of the selected restaurant.
3. Keyword search for restaurants within 3 km of the office.

## Technical Choices

- **React**- React has been used into this application because of making this application fast, scalable, and simple. It works only on user interfaces in the application. Also data can be changed without reloading the page.
- **Redux**- For giving the store's access to the class components, redux has been used as a state management tools which efficiently handles data flow and manupulates them into the state.
- **Redux Toolkit**- Redux toolkit is a tiny little tool that makes redux more easy to implement and also by it, state management of the functional component of the project has been maintained.
- **Axios**- Data fetch is a most important role into a web service. Here, for data fetching from the _API_, **Axios** has been used.

###### API

- **Foursquare Places API**- This API has been used to collect 3km nearest restaurants data of the Monstar Lab Bangladesh Office.
- **React Google Maps API**- For displaying map view of the restaurants with markar, this api has been used.

###### Testing

- **JEST**- For unit testing and accessing **DOM**, JEST has been used. It is often good enough for testing React components.
- **Enzyme**- For some integration testing.
- **React Testing Library**- For Tesing React components without relying on their implementation details.

###### Project Architechture

#### `src/`

This folder contains all the necessary folders and files of the application.

#### `src/assets`

This folder has been craeted for storing all the necessary graphical elements inside here.

#### `src/components`

For accessing all the reusable components from a specific location.

#### `src/pages`

For accessing all the pages from a specific location.

#### `src/redux/app`

Contains store of the project.

#### `src/redux/features`

This folder contains reducers and action creators.
