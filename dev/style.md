---
title: Style Guide
layout: markdown
---

{% include breadcrumbs.html breadcrumbs=true is_md=true %}

# Style Guide for DESI High Website

This document provides a style guide for the DESI High website, including design elements, components, and best practices for creating a consistent user experience.

## Design Elements

### Layouts
- Use the `default` layout for all pages.
- If using Markdown, use the `markdown` layout (inherits from `default` but places the content in containers to avoid full-width pages).

### Includes
- Use the `navbar` include for the navigation bar.
- Use the `footer` include for the footer.
- Use the `back` include for breadcrumb navigation.
  - Options are `breadcrumb=true` to show the breadcrumb, or `home=true` to show a link to the home page and `back=true` to show a button to go back to the previous page.

### Colors
- Primary color : Bulma warning yellow

## Ideas
- "You've got mail!": A notification that shows up on the home page with a link to Saul's letter.
  - Link to fix
- Contact form : see [form subscription tools](https://stackoverflow.com/questions/24348223/send-email-from-static-page-hosted-on-github-pages)
  - [x] Create form style
  - [x] Add notification message for forum link
  - [ ] Javascript part to be implemented to have field checking, warning messages, and a success message after submission.
  - [ ] Which email to send the form to ?
  - [ ] Confirmation message to be displayed after successful form submission.
  - [ ] Add backend form processing to handle form submissions and send emails.

## Open questions
- Add Curriculum descriptions ?
  - 1 sentence max
- What order for the team members ?
  - Alphabetical order by first name
  - Alphabetical order by last name (Need new fields and tweak the template)
- Add an evaluation form ?
  - Would need backend and anonymous identification to avoid spam
    - Google forms might allow this
- Add a newsletter subscription form ?
  - Sends an update when a new post is made on the website (here, Event or News)
  - Can be done trough GitHub Worksflows and gmail API
    - How to check the update and only send the body of the new post files ?
    - How to store the email addresses ?
    - How to handle unsubscribe requests ?
  - Can be done trough third-party services, I guess ?
    - Which ones ? (free and open source preferred)


# Style guide for DESI High Notebooks

See the [trac documentation](https://desi.lbl.gov/trac/wiki/DesiHigh/StyleGuide) for now