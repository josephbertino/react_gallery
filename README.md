# React Gallery App
#### Author: Joe Bertino
#### Year: 2021
# 
## Description

This Single-Page-App (SPA), created with Create React App and powered by React, is a simple image search gallery, retrieving images from Flickr via its public developer API.

At the top of the page, the Header ("React Gallery App") is a button that redirects you to the home page ('/') to refresh your display. 

Below the Header is a text search form. You can enter any keyword or phrase and submit the form to retrieve images related to that phrase. If the search yields no results (unlikely unless you enter some really long garbage), you will be presented with a "No Results Found" screen. Otherwise you should expect to see up to 24 images related to your search phrase, arranged in a grid.

Next on the SPA are three buttons that automatically perform the image search for the phrases displayed on those buttons. This should get you rolling if you can't immediately think of something to search for!

Below the default phrase search buttons is the field which renders the images returned from Flickr. As you hover your mouse over each image, you should see an animation of the image zooming in.

## Bonus Features
+ You can navigate forward and backward in your browser to access historical routes generated in your search session.
+ If you refresh the page in your browser, you remain at the route for your most recent search term.
+ You can also search for images by manually changing the route in the browser's omnibar.