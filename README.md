![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/patacoing/twitch-removal-headers-bex/ci.yml)


This repository is a browser extension which aims to remove redundant layouts on twitch's chat.

## Usage

![image](https://github.com/user-attachments/assets/2056b3e0-4ce9-4dff-b6ac-817414970816)

By clicking on the extension icon, you access the configuration of the extension.
You are able to select which data you want to hide. You can finally
define an interval time when every X seconds, the extension will try to hide the 
elements you have selected.

Whenever you click either on the extension or when you modify the state of an input, an event
is sent to reset the preferences.

If data has already been hidden and you switch off to let the data visible, you will have to refresh
the page to see it (that's because we are deleting the content from the page).


## Why this BEX ?

I've only got one monitor, and when I'm watching a livestream, I like to do other things at the same time.
Because I only have one monitor, I have to reduce the size of the stream page and place it in the bottom right-hand corner.
I like to watch the stream's chat too, so I shrink the window to the limit where I can still see the chat.
But at that size, the chat's header and the gift banner take up a lot of space (almost 50% of the height). So, every time,
I go to the elements inspector to delete those annoying layouts. I got tired of doing this, so I built this tiny BEX to do
the work automatically every time I go on a Twitch stream.

![image](https://github.com/user-attachments/assets/d722a567-459d-45ab-8556-c6eb0b79b52c)

Becomes : 

![image](https://github.com/user-attachments/assets/4337e07d-94cd-4dea-a366-8b186ffa5ae5)

It's so much better, isn't it?

## Supported Browsers

- Tested on Chromium (Brave) ✔️


### Browser API support (from https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
|                                    | Chome    | Edge     | Firefox  | Opera    | Safari     |
|------------------------------------|----------|----------|----------|----------|------------|
| storage get                        |    ✅    | ✅<br>14 | ✅<br>45 | ✅<br>33 |  ✅<br>14  |
| storage set                        |    ✅    | ✅<br>14 | ✅<br>45 | ✅<br>33 |  ✅<br>14  |
| query                              |    ✅    | ✅<br>14 | ✅<br>45 |    ✅    |  ✅<br>14  |
| sendMessage                        |    ✅    | ✅<br>14 | ✅<br>45 |    ✅    |  ✅<br>14  |
| onMessage -<br>repond with Promise | ✅<br>26 |    ❌    | ✅<br>45 |    ❌    | ✅<br>15.4 |

## Installation

- Clone the project to your machine
- Run `npm ci --include=dev`
- Run `npm run build`
- then go to your browser's extensions page, and finally load the project.

## Developpement

- Clone the projet to your machine
- Run `npm ci --include=dev`
- Run `npm run dev`

Whenever you are modifying a file within popup/ or scripts/, the bundled files
will be recreated.

## Upcoming Features

- unit tests
- tests on different browsers
- Create release

## Build

Same as Installation

## Contribution

Feel free to contribute to the project if you have any ideas about features or anything else by submitting a pull request.
It would be nice if your are using another browser from the ones already tested and you test the extension on it.

## License

[MIT](https://choosealicense.com/licenses/mit/)
