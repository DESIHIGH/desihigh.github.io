---
title: "DESIHIGH Site Architecture"
layout: markdown
---

{% include breadcrumbs.html breadcrumbs=true is_md=true %}

# Site architecture and organization
<p class="subtitle">Last updated: 2025-07-08</p>

This document outlines the structure and organization of the DESIHIGH website.

## Main Pages (in the website header)

- <span class="tag is-success">Design</span> 
  <span class="tag is-success">Content</span>
  **Home Page**: The landing page of the website, providing an overview of DESIHIGH, the last news and events.
- <span class="tag is-success">Design</span>
  <span class="tag is-danger">Content</span>
  **FAQ Page**: Frequently asked questions about DESIHIGH and its resources.
- <span class="tag is-danger">Design</span>
  <span class="tag is-danger">Content</span>
  **Teachers Page**: A dedicated section for teachers, offering resources and information.
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Partners section**: Information about the partners involved with DESIHIGH. --> One page per partner ?
- <span class="tag is-success">Design</span>
  <span class="tag is-danger">Content</span>
  **About Page**: Details about the DESIHIGH initiative, its goals, and its team.
- <span class="tag is-success">Design</span>
  <span class="tag is-danger">Content</span>
  **Terms Page**: The code of conduct and terms of use for the website and its resources. Also includes the privacy policy.
- <span class="tag is-danger">Design</span>
  <span class="tag is-danger">Content</span>
  **Quickstart Page**: A guide to help users get started with DESIHIGH, linking to the curriculum and other resources.
    - Include Saul Perlmutter's letter here !!

## Secondary Pages (in the website footer if not in the header)

- <span class="tag is-danger">Design</span>
  <span class="tag is-danger">Content</span>
  **Credits Page**: Acknowledgments and credits for contributions to the DESIHIGH website.
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Contact Page**: A page for users to get in touch with the DESIHIGH team. Includes a contact form and a link to the GitHub forum.
  - <span class="tag is-success">Frontend&nbsp;</span> A form for users to submit questions, suggestions, or issues.
  - <span class="tag is-danger">Backend &nbsp;</span> A form that sends the user's message to the DESIHIGH team via email.


## Other Pages
- <span class="tag is-danger">Design</span>
  <span class="tag is-danger">Content</span>
  **Curriculum Page**: The main page for the curriculum, providing an overview and links to the notebooks.
- <span class="tag is-success">Design</span>
  <span class="tag is-danger">Content</span>
  **News section**: A section for news and updates related to DESIHIGH, including blog posts and announcements.
- <span class="tag is-success">Design</span>
  <span class="tag is-danger">Content</span>
  **Events section**: A section dedicated to upcoming events related to DESIHIGH, such as workshops and webinars.
- <span class="tag is-danger">Design</span>
  <span class="tag is-danger">Content</span>
  **Resources section**: A collection of resources, including notebooks, videos, and other educational materials.
    - Link with DESI outreach resources ?

## Utilities (dev) Pages
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **404 Page**: A custom 404 error page that provides a friendly message when a page is not found.
- **Style Page**: A page that stores recommendations and ideas for the website styles.
- **Architecture Page**: This page, which outlines the structure and organization of the DESIHIGH website.
- **Default Page**: A default page template used for various sections of the website. Default layout and styling for new pages is defined here and will be copied to all pages once fixed.

# Languages
- **English**: The primary language of the website.
  - The English content is encoded in the website itself, as the default language and therefore does not require a specific language file.
  - Other languages content have to be stored in a .json file in the `assets/lang/` directory, with the filename corresponding to the language code (e.g., `en.json` for English, `fr.json` for French, etc.).
  - If a translation key is not found in the language file, the English version will be used as a fallback.
- **French**: A translated version of the website for French-speaking users.
- **Spanish**: A translated version of the website for Spanish-speaking users.
- **Other languages**: Consider adding support for additional languages in the future.

> For practical reasons, the big markdown-rendered files trough the collections will *not* have a translation.
> This includes the News, Events, and Partners pages. To prevent confusion, the cards linking these pages will display a flag icon representing the language of the page.
> The cards themselves can be translated : e.g. *The partners description and location can be translated trough the `name/description` and `name/location` keys in the language files.*

### Adding a new language
To add a new language to the DESIHIGH website, follow these steps:
1. Create a new JSON file in the `assets/lang/` directory with the language code as the filename (e.g., `de.json` for German).
2. Populate the JSON file with the translation keys and their corresponding values in the new language.
   - Check the existing language files to figure out the keys to use.
   - Be careful to respect the HTML structure in the translation values, as it is used to render the content correctly.
3. Ensure that the new language file follows the same structure as the existing language files.
4. Update the `_data/lang.yml` file to include the new language to the list of available languages.
5. Add a flag (from the [Twemoji cheatsheet website](https://twemoji-cheatsheet.vercel.app/)) to represent the new language in `assets/img/lang/`. This has to be a PNG file with the same name as the language code (e.g., `de.png` for German).
6. (optional) If you plan on adding events or news in the new language, create a folder in the `events/` or `news/` directory with the language code as the name (e.g., `de/` for German) with the following `init.html` (here for News) file to allow the filters to render a page with only the posts in the new language:
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

## Collections
The website uses Jekyll collections to manage different types of content. The main collections are:
- **_faq**: Contains frequently asked questions and their answers.
  - Each FAQ is represented by a Markdown file in the `_faq/` directory.
  - The front matter of each file includes fields `tag` and `question`. The answer is stored in the content of the file.
  - The `tag` field is used to categorize the FAQ and is used in the translation keys. 
  
- **_team**: Contains information about the DESIHIGH team members, including their names, images, and bios.
  - Each team member is represented by a Markdown file in the `_team/` directory.
  - The front matter of each file includes fields `name`, `image`, `email`, and `social` links.
    - Any field is optional and will not be displayed if not provided.
    - The `image` field should contain the filename of the team member's image, which should be stored in the `assets/img/team/` directory. For display consistency, the image should be a square PNG file.
    - The `social` field is a yaml object containing links to the team member's social media profiles, such as GitHub, Twitter, and LinkedIn. The `name` key should be provided if the icon is included in font-awesome brand icons. Otherwise, provide the `icon` key with the font-awesome class of the icon to use.
  - The team members are displayed on the About page, sorted by name.
  - Translation of the team members' bios is handled through the `assets/lang/` files, in the `team` key with slugified keys for each member.

- **_partners**: Contains information about the partners involved with DESIHIGH.
  - Each partner is represented by a Markdown file in the `_partners/` directory.
  - The front matter of each file includes field `name`, `summary`, `location` and `lang`.
  - The `lang` field is used to specify the language of the partner's page.
  - The `summary` field and the `location` fields can be translated through the `assets/lang/` files. under the partner's name tag.
    - If not provided, the `summary` field will default to the first paragraph of the content.
  - The partners are displayed on the Partners page, sorted by name.

- **_events**: Contains information about upcoming events related to DESIHIGH.
  - Each event is represented by a Markdown file in the `_events/` directory.
  - The file needs to follow a naming convention of `YYYY-MM-DD-event-name.md` to ensure correct sorting by date.
  - The front matter of each file includes fields `title`, `author`, `summary`, `lang` and `categories`.
  - The `lang` field is used to specify the language of the event page and display the correct flag icon.
  - The `categories` field is used to filter events by language, such as `fr` for French events or `en` for English events.
  - The `summary` field is used to provide a brief description of the event, which is displayed on the Events page.
    - If not provided, the first paragraph of the content will be used as the summary.
  - The events are displayed on the Events page, sorted by date.
  - The first 5 events are displayed on the Home page, sorted by date.
  
> For practical reasons, the events are not translated. The content of the event pages is written in the language specified in the front matter, and the flag icon is displayed accordingly.
  
- **_news**: Contains news and updates related to DESIHIGH.
  - Same as events