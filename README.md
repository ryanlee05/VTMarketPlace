# Web Development Final Project - *Virginia Tech Marketplace*

Submitted by: **Ryan Lee**

This web app: **Allows students from the Virginia Tech community an all-in-one stop to buy and sell items from a safe community. Post, edit, and delete items, like different posts, and utilize the chat feature to contact the owner for a meet up spot. Check out the site at vtmarketplace.netlify.app!**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms should have the *option* for users to add: 
    - additional textual content
    - an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - Web app must include home feed displaying previously created posts
  - By default, each post on the posts feed should show only the post's:
    - creation time
    - title 
    - upvotes count
  - Clicking on a post should direct the user to a new page for the selected post
- [x] **Users can view posts in different ways**
  - Users can sort posts by either:
    -  creation time
    -  upvotes count
  - Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - The app includes a separate post page for each created post when clicked, where any additional information is shown, including:
    - content
    - image
    - comments
  - Users can leave comments underneath a post on the post page
  - Each post includes an upvote button on the post page. 
    - Each click increases the post's upvotes count by one
    - Users can upvote any post any number of times

- [x] **A post that a user previously created can be edited or deleted from its post pages**
  - After a user creates a new post, they can go back and edit the post
  - A previously created post can be deleted from its post page

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://imgur.com/a/Mx4Kaf1.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

[ ] I had a blast creating this project. There may be lots of room for improvement and learning, but with the skills I learned and personally developed, I achieved my first fully deployed web application.

[ ] A critical learning opportunity I had was how to store each comment. I quickly designed a Comments table that stored the content and unique ID of each item in the table, and used a simple SQL query that would map each comment to the designated item.

## License

    Copyright [2025] [Ryan Lee]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
