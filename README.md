# Giphy Slider UI Pattern
![intro](images/giphyIntro.png)

The purpose of this project was to utilize API's by implementing the data into a UI pattern of choice. Here is a slider UI that displays the current top 100 trending gifs (G-Rated) pulled from giphy.com!

---

## User Stories

Trying to visualize the process and functionality of displaying images pulled from an API endpoint while being able to navigate forward and back took some time because what is seen by the user is only an illusion created by the developer.

### The First Step

Before the image sliding transition was implemented, I decided to go for a simpler approach, which was to navigate through the array of the fetched endpoint (which included the image urls) by clicking two buttons that either go up or down the array's index. The process for this is as follows:

1. After loading into the browser, the **PREVIOUS** button is hidden. This is to prevent the user from trying to look at a previous image that doesn't exist (you start at the 0 index of the array). Once you click the **NEXT** button, the **PREVIOUS** button will then become visible.
2. Every time you click a button, the image in the center will change according to the index you shift to.
3. To keep track of how many images you've gone through, I added a counter (which starts at 0) that subtracts 1 if you press the **PREVIOUS** button and adds one if the user presses the **NEXT** button.
4. The counter has two purposes:
    * Determining the position of the array (**ex:** `imageArray[counter].image`)
    * Hiding the **PREVIOUS** button once the counter reaches 0 (you're back to where you started).
5. This endpoint is constantly being updated with new trending giphys, so you'll be able to see a new set of images at different times of the day. I added a condition to stop the counter at 99 (which is the end of the array) so if you ever reach that point, clicking the **NEXT** button will not display any change.

---

### Creating the Illusion

It took some time to come up with a way to trick you into thinking there were 100 slides of giphy's loaded into the page, but the solution I found was quite simple:

1. Have three `<li>` items in a row inside a `<ul>` flex container and shift the container **left** after clicking **NEXT** and shift the container **right** after clicking **PREVIOUS**.
2. To continue the *illusion*, I reset the container back to its original position. To keep the user from seeing this reset, I created the following method:
   1. Set the width of each `<li>` item to `100vw` (100% of your viewport width).
   2. By default, shift the container to the **left** by `100vw` (`transform: translateX(-100vw);`).
   3. Add event listeners to each button to set the transformation of the selected node (in this case the `<ul>` container) `transform: translateX(-200vw);` on **NEXT** click and `transform: translateX(0vw);` on **PREVIOUS** click.
   4. Call an asynchronous function that resets the transformation of the container back to `transform: translateX(-100vw);` without the transition time.
    
**Example:**

    `setTimeout(transitionSlide = () => {
            giphyContainer.style = 'transition: none; transform: translateX(-100vw);'
    }, 300);`

I set the timer to 300 (milliseconds) because the transitions of the transformations were set to `transition: 0.3s ease;`. In other words, *the container will wait until **after the transition is finished** to reset its position*. To the user, this reset happens instantaneously once the new image is *slid* in, so you won't notice anything fishy. All of the list items are actually given the same image to display. It's the transition matched with the changing of the image that gives off that sliding effect.

**Here's the result:**

![sliderExample](images/giphySlider.gif)

**Enjoy!**

---
---

## Technologies Used

* This project was developed with **Visual Studio Code** using HTML/Javascript/CSS
* The images used was pulled from the data given by this API endpoint from https://giphy.com:
https://api.giphy.com/v1/gifs/trending
* The background image was created personally through **Corel Draw x8**.

## Contribution Guidelines

Feel free to give feedback on any thoughts you have or if you have any issues with the project!

* Project Repository: https://github.com/stuvun/giphyslider
* Submit Issues: https://github.com/stuvun/giphyslider/issues
* Deployed Site: https://stuvun.github.io/giphyslider/
