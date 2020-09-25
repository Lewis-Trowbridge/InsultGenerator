# Slightly Silly Insult Generator
## I really couldn't come up with a better name. I tried.

An experiment using the Oxford Dictionaries API to come up with derivatives of words/names that already exist, which was as usual an idea inspired by a conversation with my friends.

## Acknowledgements / Requirements
- [Flask](https://pypi.org/project/Flask/)
- [Requests](https://pypi.org/project/requests/)

## How to use
1. You will need an API token from https://developer.oxforddictionaries.com (any type will do)
2. Place the app ID and key in a file called "credentials.json", under the names "app_id" and "app_key". For example (not a real set):
![A JSON containing the made-up app ID and key](https://i.imgur.com/541G6jw.png)
3. Run as you would any other Flask app.
