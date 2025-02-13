# idm231-tc3363

This is Tom Chen's Zodiac Sign Project for IDM 231.

## Zodiac System

- Aries: 03/21 - 04/20
- Taurus: 04/21 - 05/20
- Gemini: 05/21 - 06/20
- Cancer: 06/21 - 07/22
- Leo: 07/23 - 08/22
- Virgo: 08/23 - 09/22
- Libra: 09/23 - 10/22
- Scorpio: 10/23 - 11/21
- Sagittarius: 11/22 - 12/21
- Capicorn: 12/22 - 12/31 + 1/1 - 1/19
- Aquarius: 1/20 - 2/18
- Pisces: 2/19 - 03/20

## Required Functionalities
 
Enter valid birth date
- Return according to the western zodiac system for the input date

Re-enter valid birth date
- Application will re-computer the correct response

UI will
- Display all custom zodiac signs in an interactive format
- Allow user selection
- When user selects a sign, display
    - Corrsponding data
    - Effects

Each sign must
- Be represented in a unique visual way
- Play a unique sound effect

Help screen
- Define how the application works

---

## Theme

Heavy-rail rapid transit systems in the United States

### Why do I Make This? 

Heavy-rail rapid transit has been the most efficient way to transport a city's population since its creation. It is the perfect balance for passenger railways, combining the best of two worlds with the capacity of inter-urban railways and accessibility of urban trolleys.

The stories for this mode of transit in the United States have been through four phases since the turn of the 20th century, when cities like Chicago, Boston, New York, and Philadelphia

Source of Images: Wikipedia

### Operators

These are the systems with the highest ridership at this point:

- New York City Subway
- Washington Metro
- Chicago "L"
- MBTA Subway "The T"
- Port-Authority Trans-Hudson
- Bay Area Rapid Transit
- SEPTA Metro
- MARTA Rail
- Metro Rail
- Metrorail
- Staten Island Railway
- PATCO Speedline

### Locations

- New York, New York
- Washington, District of Columbia
- Chicago, Illinois
- Boston, Massachusetts
- San Francisco, California
- Philadelphia, Pennsylvania
- Atlanta, Georgia
- Los Angeles, California
- Miami, Florida

---

## Flowchart

### Header

- Title
- "Help & Information" button
    - Click to change to the "Help & Information" page
    - Click to play the airport sound
    - Button will maintain mouse-down state after being pressed
    - Button will return to default state after user closing the H&I page

### Main

#### Home

- 12 small images
    - Black & white at default state
    - When hover, change to colorful pictures
    - Click to change to the corrsponding content display page
- Date entry at the center
    - Prompt
        - "Enter Your Date of Birth to Find out"
        - When there is an error
            - Change to "Try to use the "MM/DD/YYYY" Format"
            - Play the error sound
    - "Clear" button
        - Change the input to "MM/DD/YYYY"
        - Click to play the woosh sound
    - Input box
        - "MM/DD/YYYY"
    - "Find Your Train" button
        - Click to change to the corresponding content display page

#### Help & Information

- "Close" button
    - Click to play the error sound
    - Click to return to homepage
- Site instructions
- Why am I making this?
- Contact information

#### Content Display

- Play the corresponding sound effects when opening
- Subheader
    - "Close" button
        - Click to play the error sound
        - Click to return to homepage
    - Operator
        - Operator's Logo
        - Name of transit system
        - Location button
            - Click to open the city's tourism page in a blank tab
- 1 large image
    - Display image in default state
    - When hover, reduce the brightness and show alt-text and source
- "Visit the Operator's Website" button
    - Click to open the operator's website in a blank tab
- Text display
    - Corrsponding time period
    - Description of the transit system

---

## Text Display

### System Text

- Which North American Rapid Transit System<br>Should You Try Next?
- Enter Your Date of Birth to Find out
- Try to use the "MM/DD/YYYY" Format
- MM/DD/YYYY

### Buttons

- Help & Information
- Find Your Train
- Clear
- Close
- Visit the Operator's Website
