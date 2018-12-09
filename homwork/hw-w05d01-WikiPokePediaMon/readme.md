# WikiPokePediaMon

![](https://media.giphy.com/media/xuXzcHMkuwvf2/giphy.gif)

## Hey it's me, your Project Manager

The reviews for WikiPotterPedia were amazing!  The fanclub and all their users loved your work.  Let's read some reviews:

"I liked it"
- kid

"I did too"
- other kid

"I'm hungry"
- another kid

Absolutely stunning reviews by all accounts.  Word of your legendary coding skills has spread fast and now their sister fanclub wants to hire us as well.  This is a pokemon fan club who needs WikiPokePediaMon made STAT.  These nerds want more this time - for their app they want a database.  That's cool though, I hear you are wicked good at databases.  No time to waste, we gotta catch em all!!1!11!!!

## Set Up

Run `psql -f db/seeds.sql` to set up your pokemon database.

## This App Needs 2 Pages:

## Page 1 - A Homepage:
A user should be able to go to the homepage route `/` and see a html page that says: `Catch 'Em All!` and links the user to `/pokemon`

## Page 2 - An Index Page:
A user should be able to go `/pokemon` to see a list of all pokemon in the database with their names and images. 

There should also be a link back to the homepage.

## BONUS (optional):

### Add a show page:
A user should be able to go `/pokemon/:id` to an individual pokemon with their name, image, types, hitpoints, attack, defense, speed and if they are legendary!

There should also be links back to the homepage and the index page.

### Add pagination:
The index page should have a list of only the first 50 pokemon. Going to `/pokemon/page/2` will have pokemon 51 - 100 and `/pokemon/page/3` will have pokemon 101 - 150.

## Hints and Tips 

- Remember to build out your scaffolding! 
- Look back at the cheese app we made today to see how to set up pg-promise and construct your model.
- Use res.locals to store all of your pokemon.
- Send your pokemon to a view for mustache to render.

## Submission 
Homework is due tonight at midnight!