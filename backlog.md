# Weather App Backlog

Last updated: Mon 18, November

## Features

### Static components

- [ ] Create app static components (container + hard coded data):
  - [x] select form (manual selection with dropdown menu)
  - [x] map
  - [ ] dashboard (displayng data)

- [x] Import static components into HomePage

### Dynamic components

- [ ] Display list of availables cities for manual selection:
  - [ ] fetch public API?
  - [ ] update selector component

- [ ] Select location (1 option available at time):  make options available depending on user's selection:
  - [ ] select location manually (data: city)
  - [ ] place pin on map (data: lat, lng)

- [ ] Dynamically display data on dashboard:
  - [ ] request with lat and long as params
  - [ ] request with city as param
  - [ ] handle location update and data refresh
  - [ ] update store

## Design

- [ ] Create basic layout:
  - [x] global design and layout
  - [x] select form (manual selection)
  - [x] map
  - [ ] dashboard (displaying data)

- [ ] Refine layout and style:
  - [ ] HomePage component
  - [ ] Dashboard component
  - [ ] LocationForm component
  - [ ] Map component
