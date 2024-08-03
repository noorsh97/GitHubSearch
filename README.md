# GitHub Search

## Introduction
An application that allows users to search for public repositories and users.


This is a Next.js project with a custom setup. It includes MobX for state management and uses Jest for unit testing.
. Follow the instructions below to set up and run application.


## Client Setup
1. Install the required dependencies:
    ```bash
    $ npm install
    ```
2. Copy .env.local.example to your .env.local
   
3. Run the development server:
    ```bash
    $ npm run dev
    ```
   This will start the client development server and open the application in your default web browser.
   this should be working on `localhost:3000` 

## Accessing the Application
Once client are running, you can access the application by opening your web browser and navigating to the specified URLs.

- Client URL: [http://localhost:3000]

## Live Example
You can view live example of this application by clicking the link below:
[here](https://github-search-alpha.vercel.app/)


## Testing
Tests are built using jest

To start the test type the following in your terminal 
```sh 
npm run test
```

## File structure
```
┣ 📂app
┃ ┣ 📜favicon.ico
┃ ┣ 📜layout.tsx
┃ ┗ 📜page.tsx
┣ 📂assets
┃ ┣ 📜arrowDownIcon.tsx
┃ ┣ 📜empty.png
┃ ┣ 📜eyeIcon.tsx
┃ ┣ 📜forkIon.tsx
┃ ┗ 📜index.ts
┣ 📂components
┃ ┣ 📂__tests__
┃ ┃ ┣ 📜Badge.test.tsx
┃ ┃ ┣ 📜Loader.test.tsx
┃ ┃ ┣ 📜RepoCard.test.tsx
┃ ┃ ┣ 📜SearchBar.test.tsx
┃ ┃ ┣ 📜SearchTypeSelector.test.tsx
┃ ┃ ┣ 📜Shimmer.test.tsx
┃ ┃ ┗ 📜UserCard.test.tsx
┃ ┣ 📂Containers
┃ ┃ ┣ 📜RepoCard.tsx
┃ ┃ ┣ 📜SearchResponse.tsx
┃ ┃ ┣ 📜SearchType.tsx
┃ ┃ ┗ 📜UserCard.tsx
┃ ┣ 📂UI
┃ ┃ ┣ 📜Badge.tsx
┃ ┃ ┣ 📜Loader.tsx
┃ ┃ ┣ 📜NoResults.tsx
┃ ┃ ┣ 📜SearchBar.tsx
┃ ┃ ┗ 📜Shimmer.tsx
┃ ┗ 📜index.ts
┣ 📂hooks
┃ ┣ 📜index.ts
┃ ┗ 📜useInfiniteScroll.ts
┣ 📂services
┃ ┣ 📜api.ts
┃ ┗ 📜index.ts
┣ 📂store
┃ ┣ 📜store.ts
┃ ┗ 📜StoreProvider.tsx
┣ 📂styles
┃ ┗ 📜globals.css
┣ 📂types
┃ ┣ 📜common.ts
┃ ┣ 📜index.ts
┃ ┣ 📜repo.ts
┃ ┗ 📜user.ts
┣ 📂utils
┃ ┣ 📂constants
┃ ┃ ┣ 📜constants.ts
┃ ┃ ┗ 📜mockData.ts
┃ ┗ 📜index.ts
```