# BARF Calculator for Cat Diet

BARF Calculator is a Progressive Web Application (PWA) designed to help cat owners accurately calculate rations for the BARF (Biologically Appropriate Raw Food) diet.

The application allows for calculating both individual daily rations based on the cat's weight and large batch preparations by kilogram, adapting to different nutritional goals.
## Features

Daily Ration Calculator: Determines the total amount of food needed based on the cat's body weight (2% standard).

Batch Preparation Calculator: Calculates the exact amount of ingredients needed to prepare specific kilograms of food at once.

Diet Profiles: Supports three metabolic states:

    Maintenance: Standard balanced diet.
    
    Weight Loss: Adjusted to reduce fat while maintaining muscle mass.
    
    Weight Gain: Increased caloric density for cats needing to gain mass.

Detailed Breakdown: Results separated by muscle meat, raw meaty bones, secreting organs, liver, heart, and vegetables.

Offline Capability: Works without an internet connection thanks to the Service Worker integration.

Installable: As a PWA, it can be added to the home screen of a mobile device for quick access.

## Nutritional Ratios

The application uses the following percentages based on the selected diet type:

| Ingredient | Maintenance | Weight Loss | Weight Gain |
| :--- | :--- | :--- | :--- | 
| Muscle Meat | 60% | 70% | 85% |
| Meaty Bones	| 10%	| 15%	| 8% |
| Organs (others)	| 10%	| 5% | 2.3% |
| Liver	| 10% | 5% | 2.3% |
| Heart	| 10%	| 5% | 2.4% |
| Vegetables* | 10% | 50%*	| 2.5% |

    Note: Vegetables are calculated as an additional percentage on top of the target weight. For example, preparing 10 kg of meat will result in 11 kg of total food after adding 1 kg of vegetables.
    Note: In the weight loss profile, the higher vegetable ratio acts as a low-calorie filler to aid satiety.
    

## Technical Stack

    HTML5 / CSS3: Responsive interface using CSS variables for theme management.

    JavaScript (Vanilla): Calculation logic and DOM manipulation without external dependencies.

    Service Workers: Cache management for offline functionality.

    Web App Manifest: Configuration for cross-platform installation.

## Installation and Usage
### Desktop

  Clone the repository:
    Bash

    git clone https://github.com/romanbamo/barfcalculator.git

  Open the project:
    Launch the index.html file in any modern web browser.

### Smartphone (PWA Installation)

To use this application as a native app on your mobile device, follow these steps:
 - Android (Google Chrome)

    Open Google Chrome and navigate to the application URL.

    Tap the three dots menu (top right corner).

    Select Install app or Add to home screen.

    Confirm by tapping Install. The app will now appear in your app drawer and home screen.

 - iOS (Safari)

    Open Safari and navigate to the application URL.

    Tap the Share button (square with an upward arrow at the bottom).

    Scroll down and select Add to Home Screen.

    Tap Add in the top right corner. The icon will now appear on your home screen like a standard application.

## Legal Disclaimer

This application is a mathematical tool for diet formulation and does not replace professional veterinary advice. Every cat has unique nutritional requirements. It is strongly recommended to consult with a certified veterinary nutritionist before starting or modifying a raw diet to ensure it meets your pet's specific health needs.
Contact

Project maintained by [romanbamo](https://github.com/romanbamo/). Feel free to open an issue or pull request for suggestions and improvements.
