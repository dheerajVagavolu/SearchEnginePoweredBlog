# A Reason To Live

## Short description

### What's the problem?

Struggling with mental stress is a serious problem especially due to the consequences of the pandemic. Poeple during lockdown have very few sources to depend on for support. Motivational videos, Books, and blogs. It is sometimes difficult to open up to people who are very close. Most of the blogs are only for storing and displaying information and are not personalized.

### How can technology help?
 
Integrating an advanced Search algorithm with the platform will help people to get similar and personalized posts so that they make a greater impact.

### The idea

A blog which is structured in such a way that people can share their story of a tough time and how they overcame it. The users can see that people in similar situations as them have survived. Basically, everyone contributes something to the wellness of the mentally stressed people.

## Demo video

[![Watch the video](https://img.youtube.com/vi/D1aDJ_Y1TeI/0.jpg)](https://youtu.be/D1aDJ_Y1TeI)

## The architecture

1. The user navigates to the site and can search for latest stories.
2. The stories are retrieved from cloudant.
3. User can add his story.
4. User can search for similar stories using the search bar.


## Getting started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

```bash
Install nodeJS and npm from browser.
```

### Installing

A step by step guide to get the software running.

First clone the repository:
Open a command line and use the following command.
```bash
git clone https://github.com/dheerajrox/AReasonToLive.git
```

Open a command line and navigate to the root directory
```bash
cd AReasonToLive
```
then use the following commands to start the back-end.
```bash
cd back-end
npm install
node app
Server running at http://127.0.0.1:5000/
```


Open another command line and navigate to the root directory
```bash
cd AReasonToLive
```
then use the following commands to start the front-end.
```bash
cd front-end
npm install
npm start
Server will start at localhost:3000
```

Now open the server at http://localhost:3000

## Built with

* [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used


## Authors

* **Dheeraj Vagavolu**


