<br />
<p align="center">
  <a href="https://github.com/olivianicole/plantMe">
    <img src="react-app/src/site-images/coffee-solid.png" alt="Logo" width="80" height="80" style="">
  </a>

  <h3 align="center">plantMe - where people come together to buy and sell unique and beautiful greenery</h3>

  <p align="center">
   PlantMe is an e-commerce website where user's can create their own plant shop where they can sell plants, in addition to buying from other users. On the site's homepage a user can browse a beautiful selection of plants sold by various small shops created by other users! Users can favorite plants they'd like to view later, leave reviews after making a purchase, and manage their shop all from one account. 
    <br />
    <a href="https://github.com/olivianicole/plantMe/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://plant--me.herokuapp.com/">View Live Site</a>
    ·
    <a href="https://github.com/olivianicole/plantMe/issues">Report Bug</a>
    ·
    <a href="https://github.com/olivianicole/plantMe/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
[Click here to view plantMe live on the web!](https://plant--me.herokuapp.com/)
<br>
   <img src="siteImages/1.png"/>
   <img src="siteImages/2.png"/>
   <img src="siteImages/3.png"/>
</br>


### Built With

* [JavaScript]()
* [Python]()
* [React]()
* [Redux]()
* [Flask]()
* [SQLAlchemy]()
* [Docker]()
* [CSS]()



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with plantMe.

  * npm
  ```sh
  npm install npm@latest -g
  ```
  * pipenv
  ```
  pipenv install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/olivianicole/plantMe
   ```
2. Install NPM packages in the React App
   ```sh
   npm install
   ```
3. Install Dependencies
   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

4. Add a '.env' with your environment variables to the root of your local directory

5. Create a postgreSQL user
    ```sh
    CREATE USERS <<your username>> WITH PASSWORD <<your password>> CREATEDB
    ```
6. Create your database
    ```sh
   CREATE DATABASE <<database name>> WITH OWNER <<your username>>
    ```
7. Start a pipenv virtual environment
   ```bash
   pipenv shell
   ```
8. Migrate and seed your database
    ```sh
    flask db migrate
    ```
    ```bash
   flask db upgrade
   ```
   ```bash
   flask seed all
   ```
   ```bash
   flask run
   ```
9. Start your local development server in the React App
   ```bash
   npm start
   ```
## Obstacles

### AWS/S3

The initial building of plantMe was the first time I had successfully implemented the functionality for a user to upload photos to a site. I ran into a collection of small bugs from forgetting to change privacy settings to failed API requests on the backend. Via reading documentation, searching stackoverflow, and reaching out to peers, I was able to solve each bug and learn a ton about the process of using AWS.


### Database

Project planning is so important. I always try my best to plan my database out such that it accomodates any future changes I may want to implement. This time around I ended up having to add many tables and relationships to my database, that I had not originally anticipated. This process certainly taught me how to better anticipate the database requirements of an application I'm building.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/olivianicole/plantMe/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact 


* Olivia Young - [LinkedIn](https://www.linkedin.com/in/olivia-young-2437ba1b9/) - [GitHub](https://github.com/olivianicole)


Project Link: [https://github.com/olivianicole/plantMe](https://github.com/olivianicole/plantMe)


