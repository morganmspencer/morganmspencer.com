---
title: How to Use a Query String to Pass Values Between Pages and Forms
published_at: 2019-10-02-10-00
category: web-development
tags:
  - html
  - javascript
  - jquery
thumbnail: https://mk0creativecachbk87k.kinstacdn.com/wp-content/uploads/sites/2/2019/10/edho-pratama-yeB9jDmHm6M-unsplash-min.jpg
excerpt: Learn how to utilize a query string to pass values between pages, forms
  and other fillable elements of your website.
---
Query strings are great for saving and generating data through a URL. There are many different applications and you have probably seen them before. Below I’ll explain exactly what they are and show you some use cases for them.

## What is a Query String?

A query string is a string of code that is attached to the end of a URL. It allows the web page to dynamically pull data from it without passing it through a database. For example, if you search my name in Google you can see that it attaches a query string for the search term to the end of the URL: `google.com/search?q=morgan+m+spencer`.

This creates dynamic content that fills in the search information on Google. If I refresh the page or send the link to a friend the page will always search “Morgan M Spencer”. Google takes the search query and runs it through the search function automatically.

The query string does not have to pass data visibly either. One of the most common query strings is one for tracking analytics campaigns and ad traffic. By passing a value on the end of the ad URL Google can track the analytics for that ad and pass additional data through the query string. Query strings are also commonly used to track affiliate data. So, if you click on an affiliate link on someone’s blog, the data is passed to the destination to recognize that the user was referred from the blog.

## Using Query Strings

How can we apply this to our own websites? I personally have used this several times, typically to create a more advanced search functionality.

For example, let’s say we have a search page with a list of options that filters as we type. So, as the user types in the search box, the list filters to only show matches to the input.

```javascript
$('#search input').keyup(function() { // as user types
	var entry = $(this).val(), // get what user types
		url = window.location.protocol, // get current url
		newURL = url + '?s=' + entry; // append the search query
	window.history.pushState({ path: newURL }, '', newURL); // change the url without reloading
	filterListing(search); // run the function to filter the listing by the search query
});
```

This function will generate a search query at the end of the URL in real-time as the user types it. It then uses whatever function is desired to filter the listing on the page.

This is great but if we refresh the page the search field resets and so does the filtering. All we have done is stored a value in the URL but we haven’t done anything with the value.

```javascript
if (document.location.search.length) { // if there is a query
	var search = document.location.search.replace('?s=',''); // get the query without the key
	$('#search input').val(search); // autofill the search field
	filterListing(search); // run the function to filter the listing by the search query
}
```

Here we checked to see if there was a query on the URL. then got the query value without the key. We then added the value to the search field. This would not filter the listing by default so we run the filter listing function to filter with the value provided.

Now if we refresh the page or send the link to someone the function will realize that there is already a default value and apply it to our search!

## More Advanced Applications

We can also add multiple query strings to a URL to auto-populate a form. This involves adding multiple query strings. To do that use the ampersand (`&`) for additional queries.

`example.com/my-form?first_name=Morgan&last_name=Spencer&location=Charleston`

You could then write a script to pass the data to the appropriate fields. Note that there are many different form plugins and features available and each one might process queries differently. For example, Ninja Forms has some [documentation on how to properly call queries](https://ninjaforms.com/docs/querystrings/) that do not involve writing a script.

There are a wide variety of uses for query strings and you’ll soon find that they are incredibly useful in web development. My most recent example is using it on a page that users can report website issues to me. I use a query string to get the last page they came from and pass that to the form submission. When I get the submission from the user I can see which page they came from to report the issue so I don’t have to go searching!