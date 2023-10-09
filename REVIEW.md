# Project Review (URL Shortener)

## Overall

Nice job! I hope that this project is a kick start for you in Back-End Development.

You have implemented a URL Shortener which works the same way as famous websites like [bit.ly](https://bitly.com/) and [shortURL](https://www.shorturl.at/).

Good job organizing the modules and writing clean functions. See the complete review for small tips.

## Functionality & Usability

The web application performs its main functionality correctly. The user is able to create shortened URLs, get his URL history and use the new URLs to navigate to the original ones.

## Handling Errors

* Good job handling the case where the URL doesn't exist. However, it will make more sense if the status code for a not found URL is `404` instead of `400`.
* There's a case where it would be nicer if there's a raised error there. If the user uses the same abbreviation more than once, he shouldn't be able to do this because it will make a conflict. For example: if the user used `http://localhost:3000/fb` as an abbreviation for both Facebook and Football, he won't be able to predict which one will open when he uses the link. **Conclusion: You should make sure that abbreviations are unique**

## Moduling & Architecture

It's nice that the code is splitted into many modules. Routes are separated according to their usage which is totally fine.

You may want to learn more about code architecture, especially MVC pattern, to get a good reference about how to organize your project.

## Extra Tips

* You may want to use back-end validation to the data you receive to make sure it's valid and safe to store inside the database. Take a look at validation libraries such as `express-validator`.
* You may think of ways to store your database credentials away from your code, because if your website is working on production it won't be safe to store production database credentials directly into your code.
* Have fun in your journey. Good work so far.