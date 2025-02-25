# Structure and Flow

## header

### header#default

- h1 (Which North American Rapid Transit System Should You Try Next?)
- button#header-help
    - Click to go to the "section#help"
    - Click and change to "button#help-close"
- button#help-close
    - Click to go to main
    - Click and change to "button#header-help"

### header#operator

- div.operator-info
    - svg.logo
    - h1#operators-name (Operator's name)
- div.header-btns
    - button#location
        - Click to open the city's tourism page in a blank tab
    - button#close
        - Click to go to main
        - Click and change to "button#help"

## main

- section.input-box
    - h2#prompt (Enter Your Date of Birth to Find out/That was an invalid entry. Try again.)
    - div.main-btns
    - button#clear
        - Change the input to "MM/DD/YYYY"
    - input (MM/DD/YYYY)
    - button#submit (Find Your Train)
        - Click to change to the corresponding "section#content"
- button.thumbnail
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
    - section.personal-info
    - section.social-btns
        - button.social

### section#content

- section.left
    - picture.large
    - button#link (Visit the Operator's Website)
        - Click to open the operator's website in a blank tab
- section.right
    - div.zodiac
    - div.writing
