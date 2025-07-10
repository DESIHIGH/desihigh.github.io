---
title: "DESIHIGH Site Architecture"
layout: markdown
---

# Site architecture and organization
<p class="subtitle">Last updated: 2025-07-08</p>

This document outlines the structure and organization of the DESIHIGH website.

## Main Pages (in the website header)

- [ ] **Home Page**: The landing page of the website, providing an overview of DESIHIGH, the last news and events.
- [ ] **FAQ Page**: Frequently asked questions about DESIHIGH and its resources.
- [ ] **Teachers Page**: A dedicated section for teachers, offering resources and information.
- [ ] **Partners section**: Information about the partners involved with DESIHIGH. --> One page per partner ?
- [ ] **About Page**: Details about the DESIHIGH initiative, its goals, and its team.
- [ ] **Terms Page**: The code of conduct and terms of use for the website and its resources. Also includes the privacy policy.
- [ ] **Quickstart Page**: A guide to help users get started with DESIHIGH, linking to the curriculum and other resources.
    - Include Saul Perlmutter's letter here !!

## Secondary Pages (in the website footer if not in the header)

- [ ] **Credits Page**: Acknowledgments and credits for contributions to the DESIHIGH website.
- [ ] **Contact Page**: A page for users to get in touch with the DESIHIGH team. Includes a contact form and a link to the GitHub forum.
  - [x] Frontend contact form: A form for users to submit questions, suggestions, or issues.
  - [ ] Backend contact form: A form that sends the user's message to the DESIHIGH team via email.


## Other Pages
- [ ] **Curriculum Page**: The main page for the curriculum, providing an overview and links to the notebooks.
- [ ] **News section**: A section for news and updates related to DESIHIGH, including blog posts and announcements.
- [ ] **Events section**: A section dedicated to upcoming events related to DESIHIGH, such as workshops and webinars.
- [ ] **Resources section**: A collection of resources, including notebooks, videos, and other educational materials.
    - Link with DESI outreach resources ?

## Utilities (dev) Pages
- [x] **404 Page**: A custom 404 error page that provides a friendly message when a page is not found.
- [ ] **Style Page**: A page that stores recommendations and ideas for the website styles.
- [ ] **Architecture Page**: This page, which outlines the structure and organization of the DESIHIGH website.
- [x] **Default Page**: A default page template used for various sections of the website. Default layout and styling for new pages is defined here and will be copied to all pages once fixed.

## Jekyll elements
- [ ] **Layouts**: The Jekyll layouts used for the website, including the default layout and any custom layouts.
  - [x] *default.html*: The main layout file that defines the structure of the website pages.
  - [x] *markdown.html*: A layout file for pages that use Markdown content.
  - [ ] Other layouts ?
- [x] **Includes**: The repeated elements used in the website, such as the header and footer.
  - [x] *navbar.html*: The navigation bar included in the website header.
  - [x] *footer.html*: The footer included in the website.
