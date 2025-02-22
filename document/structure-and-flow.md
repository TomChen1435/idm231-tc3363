# Structure and Flow

## header

### header#default

- h1 (Which North American Rapid Transit System Should You Try Next?)
- button#help
    - Click to go to the "section#help"
    - Click and change to "button#close"

### header#operator

- div.operator-info
    - svg.logo
    - h1#operators-name (Operator's name)
- div.header-btns
    - a#location.btn
        - Click to open the city's tourism page in a blank tab
    - button#close
        - Click to go to main
        - Click and change to "button#help"

## main

- section.input-box
    - h2#prompt (Enter Your Date of Birth to Find out/Try to use the "MM/DD/YYYY" Format)
    - button#clear
        - Change the input to "MM/DD/YYYY"
    - input (MM/DD/YYYY)
    - button#submit (Find Your Train)
        - Click to change to the corresponding "section#content"
- button.image-small
    - Black & white at default state
    - When hover, change to colorful pictures
    - When mouse-down, adding yellow outlines
    - Click to play the corresponding sound effect
    - Click to change to the corrsponding "section#content"

## section

### section#help

- section (Site instructions)
- section (Sources of information)
- article (Why do I make this?)
- section (Contact information)
    - a#social.btn
        - [Tom Chen](tomchen0714@icloud.com)
        - [Discord](https://discordapp.com/users/tomchen1581)
        - [Bluesky](https://bsky.app/profile/tomchen1581.bsky.social)
        - [Flickr](https://www.flickr.com/photos/tomchen1581)
        - [GitHub](https://github.com/TomChen1435)

### section#content

- section.left
    - picture.large
    - a#link.btn (Visit the Operator's Website)
        - Click to open the operator's website in a blank tab
- section.right
    - div.zodiac
    - div.writing
