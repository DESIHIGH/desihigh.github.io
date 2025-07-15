---
title: "DESIHIGH Site Architecture"
layout: markdown
---

{% include breadcrumbs.html breadcrumbs=true is_md=true %}

# Jekyll template explanation
This website is designed as a jekyll template for DESI High.

## Style
The website uses the [Bulma](https://bulma.io/) CSS framework as style. Some javascript functions and CSS properties are added in the `assets/` folder. The icons are taken from [Font Awesome 5](https://fontawesome.com/)

### Templates
Jekyll templates are defined in `_layouts/`. We use 2 main templates :
- `default.html` : Contains a header, a footer and includes the content of the page as pure html
- `markdown.html`: Same as default, but includes the parsed mlarkdown content in a set of divs to center it and make it pretty in the page. *Should be only used with markdown files*

> Note : Due to some `content` or `section` div properties, some elements might be offset in the display. I found workaround for some of them, but try to refrain using HTML classes in this template for consistency across the website.

## Navigation
The navigation part is modular, and is separated in 3 main parts :

### Header/Navbar
The page header includes a logo (`assets/img/logo_dark.png`), some buttons, a language selector (see [Translations](#translations)), and navigation tabs.

The page header style is defined in `_includes/navbar.html`. The navigations tabs are added from the list in `_data/header_nav.yml`. **To add a tab**, simply add its name and url to this file.
```yml
- name: New tab
  url: new_tab.html
```
> The URL needs to perfectly match the target in order for the is-active effect to appear !
> e.g. if the target is new-tab/ instead of new-tab.html, the effect will not appear !
> (Also, avoid leading slashes in the links, see [References](#references))

### Footer
The page footer contains 3 parts:
- A logo and copiright, directly defined in its file (`_include/footer.html`)
- Social media links defined in `_data/social.yml`
- Navigation links defined in `_data/footer_nav.yml`

**To add a social media **link, add its name, url and icon to the `social.yaml` file.
```yml
- name: New social
  url: new_social.html
  icon: fa-brand
```
> The icon is taken from font-awsome-5 *brand* icons ! Only add `fa-<brand-name>` to add it.

**To add a navigation link**, add its name and url to the `footer_nav.yaml` file.
```yml
- name: New tab
  url: new_tab.html
```

### Welcome Hero
The welcome `hero` is a banner that appears if included in the page body (see [Includes](#includes)).
It contains navigation tabs, defined in `_data/home_tabs.yml`. To add new navigation tabs, simply add its name, url and icon to the file.
```yml
- name: New tab
  url: new_tab.html
  icon: fas fa-icon # Full Font Awesome class !
```

### References
The `default` layout `head` contains a base url that is used to append every reference (except the anchors starting with `#`).
This means that every reference, such as `href`, `src` and others should not start with leading slashes, unless explicitely refering to the root of the website.
> This is done to solve an issue with Github Pages when pushing to a repo, where the website homepage would be hosted in `username.github.io/repository/`, but the root of the website would be in `username.github.io`.

**To change the base of the website**, add or edit the following line in `_config.yml`:
```yml
base_homepage: /repository/ # Leading and trailing slashes are important here !
```

## Includes

### Navigation
You can include the navigation bar in your files with the following options :
- `page_number`: If called in a paginated section, provide the current page number from the paginator to allow the `is-active` effect to appear on the active tab.

### Breadcrumbs
You can include breadcrumbs in your files with the following options :
- `size`: The size of the breadcrumbs font
- `back`: Do you want to display a "Back" button before the breadcrumbs ?
- `home`: Do you want to display a "Home" icon ? (otherwise the home does not appear in the breadcrumbs)
- `breadcrumbs`: Do you want to display the breadcrumbs ?
- `is_md`: If called in a markdown file, add a leading empty breadcrumb to fix an offset

> Do not call this is a div such as `section`, `content` or `container`, as it will offset the first crumb. (or call it with `is_md=true`)

### Welcome Hero banner
The Welcome Hero displays an image, a title, a subtitle and several navigation tabs (see [Welcome Hero](#welcome-hero)).
It can be called with the following options :
- `title`: The title to display
- `subtitle`: The subtitle to display
- `hero_size`: The size of the image (defaults to `is-small`)
- `hero_image`: The image to fill the banner with (defaults to `assets/img/Mayall-Star-Trails.jpg`)
- `page_number`: If called in a paginated section, provide the current page number from the paginator to allow the `is-active` effect to appear on the active tab.

### Language selector 
The language selector is a dropdown menu that links each available language to a sub-page of the current page with the language code appended. It discards the languages codes and the page number if provided.

> E.g. if called in `website/posts` or `website/posts/2`, the button will redirect to `website/posts/fr/`; `website/posts/en/` etc.

It can be called with the following options:
- `icon`: The icon to display besides the text
- `button_class`: the button CSS classes (defaults to `button`)
- `button_text`: The text contained in the button
- `button_i18n`: The button text translation tag
- `page_number`: If called in a paginated section, provide the current page number to remove from the redirection URL to avoid 404 errors

### Carousel posts
Include a carousel of posts that slides on desktop and piles up posts on mobile. Assumes the posts have 
Can be called with the following options:
- `title`: Title of the section to display
- `posts`: Which collection to display (defaults to `site.posts`)
- `post_nb`: The number of posts to display in the carousel (defaults to 5)
- `permalink`: The URL to link the "See all" button to (no button if not provided)
- `sort`: The field to sort the posts by (defaults to `date`)
- `reverse`: If the order of posts should be reversed in the display (defaults to `false`)

### Paginated posts 
Include a paginated list of posts that displays the posts in a grid. 
Only works if the page it is called in uses the `paginator` object to display the posts.

If the posts have a `lang` field in their front matter, the posts will be displayed with a flag icon representing the language of the post (see [Translations](#translations)). If the posts have a `categories` field including the language code, they can be filtered by language trough the [Language selector](#language-selector).

If the posts have a `summary` field in their front matter, it will be displayed as a short description of the post. If not provided, the first paragraph of the content will be used as the summary.

### Pagination
Include a pagination bar that displays the page navigation links, a previous and next button, and the current page number.
Can be called with the following options:
- `size`: The size of the pagination buttons (defaults to `is-small`)
- `display_number`: How many pages to display in the pagination bar including the current page (defaults to 5). The first and last pages are always displayed with ellipsis, and the current page is centered in the pagination bar.
- `hide_1`: If true, the pagination will not appear if there is only one page. Defaults to `false`.

## Collections
The website uses Jekyll collections to manage different types of content. 

### FAQ
Contains frequently asked questions and their answers.
- Each FAQ is represented by a Markdown file in the `_faq/` directory.
- The front matter of each file includes fields `tag` and `question`. The answer is stored in the content of the file.
- The `tag` field is used to categorize the FAQ and is used in the translation keys.

To add a new FAQ, create a new Markdown file in the `_faq/` directory with the following front matter:
```yaml
---
tag: <tag> # e.g. "FAQ_n"
question: <question> # The question to display
---
<answer> # The answer to the question
```

### Team
Contains information about the team members, including their names, images, and bios.
- Each team member is represented by a Markdown file in the `_team/` directory.
- The front matter of each file includes fields `name`, `image`, `email`, and `social` links.
  - Any field is optional and will not be displayed if not provided.
  - The `image` field should contain the filename of the team member's image, which should be stored in the `assets/img/team/` directory. For display consistency, the image should be a square PNG file.
  - The `social` field is a yaml object containing links to the team member's social media profiles, such as GitHub, Twitter, and LinkedIn. The `name` key should be provided if the icon is included in font-awesome brand icons. Otherwise, provide the `icon` key with the font-awesome class of the icon to use.
- The `tags` field is used to mark retired team members. If set to `active`, the member will be displayed on the About page, but if set to `legacy`, the member will be displayed on the Legacy page.
  - If the `tags` field is not provided, the member will not be displayed !
- The team members are displayed on the About page, sorted by name.
- Translation of the team members' bios is handled through the `assets/lang/` files, in the `team` key with slugified keys for each member.
- The Legacy page is a separate page that lists all retired team members, allowing them to be acknowledged for their contributions.

To add a new team member, create a new Markdown file in the `_team/` directory with the following front matter:
```yaml
---
name: <name> # The name of the team member
image: <image> # The filename of the team member's image (stored in assets/img/team/)
email: <email> # The email address of the team member (optional)
social: # A yaml object containing links to the team member's social media profiles
  github: <github_url> # GitHub profile URL
  twitter: <twitter_url> # Twitter profile URL
---
<bio> # The bio of the team member
```

### Partners
Contains information about the partners.
- Each partner is represented by a Markdown file in the `_partners/` directory.
- The front matter of each file includes field `name`, `summary`, `location` and `lang`.
- The `lang` field is used to specify the language of the partner's page.
- The `summary` field and the `location` fields can be translated through the `assets/lang/` files. under the partner's name tag.
  - If not provided, the `summary` field will default to the first paragraph of the content. (Not recommended)
- The partners are displayed on the Partners page, sorted by name.

To add a new partner, create a new Markdown file in the `_partners/` directory with the following front matter:
```yaml
---
name: <name> # The name of the partner
summary: <summary> # A brief description of the partner (optional)
location: <location> # The location of the partner (optional)
lang: <language_code> # The language code of the partner's page (e.g., "en", "fr", etc.)
---
<content> # The content of the partner's page
```

### Events & News
Contains information about upcoming events and news.
- Each event or news item is represented by a Markdown file in the `_events/` or `_news/` directory, respectively.
- The file needs to follow a naming convention of `YYYY-MM-DD-event-name.md` to ensure correct sorting by date.
- The front matter of each file includes fields `title`, `author`, `summary`, `lang` and `categories`.
- The `lang` field is used to specify the language of the event or news page and display the correct flag icon.
- The `categories` field is used to filter events or news by language, such as `fr` for French events or `en` for English events.
- The `summary` field is used to provide a brief description of the event or news item, which is displayed on the Events or News page.
  - If not provided, the first paragraph of the content will be used as the summary.
- The events and news items are displayed on their respective pages, sorted by date.
- The first 5 events or news items are displayed on the Home page, sorted by date.

To add a new event or news item, create a new Markdown file in the `_events/` or `_news/` directory with the following front matter:
```yaml
---
title: <title> # The title of the event or news item
author: <author> # The author of the event or news item (optional)
summary: <summary> # A brief description of the event or news item (optional)
lang: <language_code> # The language code of the event or news item (e.g., "en", "fr", etc.)
categories: <language_code> # The language code to filter the event or news item by language (e.g., "fr", "en", etc.)
---
<content> # The content of the event or news item
```

<hr>

## Curriculums
TODO
Notebooks
Curriculums
How to add
tags

## Translations
The data in the website is translated in 2 different ways :
- For usual HTML content, the website is written in english with data-i18n keys in the translated HTML elements. A javascript function will then replace the HTML content with the translation from the associated keys in the `assets/lang/` JSON files.
  - This function allows nested keys, separated by slashes, such as `home_tabs/tab1/title` to access the `title` key of the `tab1` object in the `home_tabs` object in the language file.
  - If a translation key is not found in the language file, the English version (HTML-encoded) will be used as a fallback.
  - The design tries to avoid html in the json file. It works but is not really readable.
  - Usually only done for paragraphs with links or special formatting. Otherwise, use keys and nested keys to keep the translation readable.

- For the term files, the translations are stored in separate Markdown files in the `_terms/` directory, with the filename format `Code_of_Conduct_<lang_code>.md` and `Privacy_Policy_<lang_code>.md`. As they are collections, they are rendered in the website with the `lang` field in the front matter.
> This was done to avoid having huge translation strings, as the JSON format forbids newlines and paragraphs.

Posts, such as News and Events or Partners, are *not* translated, but can be filtered by language using the `lang` field in the front matter. The language selector will display a flag icon representing the language of the post.
- To prevent confusion, the cards linking these pages will display a flag icon representing the language of the page.
- The Partners cards can be translated: the partners description and location can be translated through the `name/description` and `name/location` keys in the language files.


### Adding a new language
To add a new language to the website, follow these steps:
1. Update the `_data/lang.yml` file to include the new language to the list of available languages:
```yaml
- code: <lang_code> # e.g. "fr" for French, "de" for German, etc.
  name: <language_name> # e.g. "French", "German", etc.
```
2. Create a new JSON file in the `assets/lang/` directory with the language code as the filename (e.g., `de.json` for German).
3. Populate the JSON file with the translation keys and their corresponding values in the new language.
   - Check the existing language files to figure out the keys to use.
   - Be careful to respect the HTML structure in the translation values, as it is used to render the content correctly.
4. Ensure that the new language file follows the same structure as the existing language files.
5. Add a flag (from the [Twemoji cheatsheet website](https://twemoji-cheatsheet.vercel.app/)) to represent the new language in `assets/img/lang/`. This has to be a PNG file with the same name as the language code (e.g., `de.png` for German).
6. (optional) Add the translations of the code of conduct and privacy policy in the new language to the `_terms/` directory.
   - Copy the existing `Code_of_Conduct.md` and `Privacy_Policy.md` files, rename them to `Code_of_Conduct_<lang_code>.md` and `Privacy_Policy_<lang_code>.md`, and translate their content.
   - Ensure that the front matter includes the correct language code in the `lang` field.
8. (optional) If you plan on adding events or news in the new language, create a folder in the `events/` or `news/` directory with the language code as the name (e.g., `de/` for German) with the following `init.html` (here for News) file to allow the filters to render a page with only the posts in the new language:
```html
---
layout: news_index
title: News <!-- Can be translated --> 
pagination: 
    enabled: true
    collection: news
    category: <!-- language code -->
---
```



