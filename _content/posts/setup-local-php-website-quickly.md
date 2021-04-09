---
title: Set Up a PHP Website Locally in Less than a Minute
published_at: 2017-06-17-10-00
category: business
tags:
  - local-development
  - php
thumbnail: https://mk0creativecachbk87k.kinstacdn.com/wp-content/uploads/sites/2/2019/04/html-code-computer-screen.jpg
excerpt: Learn to set up a PHP website from your desktop on a local host. This
  will allow you to successfully test your PHP website in a realistic live web
  format.
---
While I was developing the [Spencer Creative Co.](https://spencercreative.co) website I worked through a few basic struggles. I thought it would be beneficial to teach fellow web developers, especially beginners, some basic practices that we found useful. The first is setting up a local PHP website to run on your web browser.

## Before We Begin: Understanding PHP and HTML

Why is setting up a local PHP website any different from an HTML one? The biggest difference is that an HTML website does not need a server to run. This means that the web browser can open the HTML files directly. PHP on the other hand requires a server to process the files first. These files are actually snippets of HTML combined with basic and complex lines of PHP codes to bring the website together properly. This is where the server comes in. The server takes these files, processes them, and spits them back out as a regular HTML website.

This sounds like way more time and effort, why would I want to do this? Although it does sound more complex than traditional HTML, this method actually saves the developer a ton of time. With a PHP file, the developer can separate the files into snippets of code and call the snippets into files. For example, a developer can put the website header navigation in its own file and call it into every page they would like. Now that they have a separate file the developer can edit the single header file and the navigation would change site-wide.

This can be a powerful method to utilize as you call snippets of HTML with PHP to create a final website.

## Navigating the terminal

Now that we understand the benefits of using PHP we will start to set up our local server. Like most people, I’m sure you don’t have a server lying around to do the hard work for you. We also do not want to have to re-upload our files to our website server every time we want to see a minor file change. This is why we will learn to create it locally using just our computer’s Terminal program.

I know that the Terminal can seem like an intimidating monster, so I’m going to show you only three commands to set up the PHP server. So let’s open our Terminal program!

We will start with the `ls` command. This command lists all the folders and files at the current level of your computer’s file tree. When you initially type this command and hit Enter you might see something like:

```
Applications
Desktop
Documents
Downloads
```

These are all the folders at the main level of your computer. Now we want to navigate to the appropriate folder so we will use the `cd` command. Let’s say our website folder is in the Downloads folder, we would type:

```
cd Downloads
```

After which we hit Enter. Now we have navigated into the Downloads folder of our file tree. You can use the `ls` command to see what’s in this folder if you would like. We will then navigate to our website folder:

```
cd spencercreativesite
```

We are now where we want to be to run our final command. If you get stuck remember to use `ls` to see where you are in the file tree. What if you go into the wrong folder and want to go back? Simply type `cd ..` and hit Enter. This brings you back up a level in the file tree.

### Pro-Tip

You can also navigate through multiple levels at once. We could have typed:

```
cd Downloads/spencercreativesite
```

This also brings you to the same place.

## Setting up the local server

Our next command will be the one that establishes the server at our current folder (our website). Type the following code then hit Enter:

```
php -S localhost:8000
```

Yes, it’s that simple! Now that we have done this you can navigate to your web browser and type:

```
http://localhost:8000
```

If you’ve done everything right you should see your locally hosted website! If you then make any changes to the files you can refresh this page to see the changes instantly. This is great for editing files and building your website before putting it up on your public website or server.

## Quick Recap

Open the Terminal program and navigate to the website folder. Then type:

```
php -S localhost:8000
```

Hit Enter, then go to your web browser and type the following:

```
http://localhost:8000
```

And now you are running your PHP website locally!