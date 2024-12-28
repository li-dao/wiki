---
# Title setting
# title of this page
title: This is a markdown template
# Control the display of the title
hide_title: false
# hide the table of contents
hide_table_of_contents: false

# Metadata settings
# This data will be used to generate the website, a good set of metadata can help
# search engines and social media to find our wiki.
keywords:
  - you
  - can
  - add
  - keywords
  - here
description: This is a description

# Sidebar settings
# This label control what will be displayed in the sidebar
sidebar_label: This is a sidebar label

# Other settings
# When the page is not ready, you can set draft to true
draft: false
last_update:
  # Last update date
  date: 2024-12-28
  author: developer and contributor of $Li
---

## Text Formatting

Regular text is written as-is. You can make text **bold**, *italic*, or ***both***. You can also use ~~strikethrough~~ text.

## Lists

### Unordered Lists

- First item
- Second item
  - Sub-item 1
  - Sub-item 2
- Third item

### Ordered Lists

1. First step
2. Second step
   1. Sub-step 1
   2. Sub-step 2
3. Third step

## Quotes Block

> This is a blockquote
>
> It can span multiple lines
>> And can be nested

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Links

[Internal link to home](/)
[External link to Google](https://www.google.com)

## Images

![Alt text for image](./place-holder.webp)

## Admonitions

:::note
This is a note admonition
:::

:::tip
This is a tip admonition
:::

:::info
This is an info admonition
:::

:::warning
This is a warning admonition
:::

:::danger
This is a danger admonition
:::

## Nested Admonitions

:::info[Important Information]
This is the parent admonition

::::warning
This is a nested warning

:::::tip
This is a deeply nested tip
:::::

## Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
  - [x] Nested completed task
  - [ ] Nested incomplete task

## Horizontal Rule

---

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
