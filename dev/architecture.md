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
  <span class="tag is-success">Content</span>
  **FAQ Page**: Frequently asked questions about DESIHIGH and its resources.
  <span class="tag is-danger">sections</span>
- <span class="tag is-danger">Design</span>
  <span class="tag is-danger">Content</span>
  **Teachers Page**: A dedicated section for teachers, offering resources and information.
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Partners section**: Information about the partners involved with DESIHIGH.
  <span class="tag is-danger">sections</span>
  - Each partner has a dedicated page.
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **About Page**: Details about the DESIHIGH initiative, its goals, and its team.
  <span class="tag is-danger">sections</span>
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Terms Page**: The code of conduct and terms of use for the website and its resources. Also includes the privacy policy.
    - <span class="tag is-danger">Content</span> Privacy Policy
- <span class="tag is-danger">Design</span>
  <span class="tag is-danger">Content</span>
  **Quickstart Page**: A guide to help users get started with DESIHIGH, linking to the curriculum and other resources.
    - Include Saul Perlmutter's letter here!!

## Secondary Pages (in the website footer if not in the header)

- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Credits Page**: Acknowledgments and credits for contributions to the DESIHIGH website.
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Contact Page**: A page for users to get in touch with the DESIHIGH team. Includes a contact form and a link to the GitHub forum.
  - <span class="tag is-success">Frontend&nbsp;</span> A form for users to submit questions, suggestions, or issues.
  - <span class="tag is-danger">Backend &nbsp;</span> A form that sends the user's message to the DESIHIGH team via email.
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Legacy Page**: A page that lists all retired team members, allowing them to be acknowledged for their contributions.
  <span class="tag is-danger">sections</span>

## Other Pages
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Curriculum Page**: The main page for the curriculum, providing an overview and links to the notebooks.
  <span class="tag is-danger">sections</span>
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **News section**: A section for news and updates related to DESIHIGH, including blog posts and announcements.
  <span class="tag is-danger">sections</span>
  - Each news item has a dedicated page.
- <span class="tag is-success">Design</span>
  <span class="tag is-success">Content</span>
  **Events section**: A section dedicated to upcoming events related to DESIHIGH, such as workshops and webinars.
  <span class="tag is-danger">sections</span>
  - Each event has a dedicated page.
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
- **Template Page**: A page that explains the modular parts of the Jekyll template, and how to add informations to the website.
- **Default Page**: A default page template used for various sections of the website. Default layout and styling for new pages is defined here and will be copied to all pages once fixed.