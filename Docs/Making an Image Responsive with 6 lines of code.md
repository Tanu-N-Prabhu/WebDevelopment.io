# Making an Image Responsive with 6 lines of code

## All you need to do is add 6 lines of CSS code to make an image responsive.

#### January 3, 2021 - 4 min read

| ![space-1.jpg](https://miro.medium.com/max/1050/1*j7bYDNKkq4PU5FhOPMUuWA.jpeg) | 
|:--:| 
|Photo by [Tanu Nanda Prabhu](https://unsplash.com/@tanuprabhu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@tanuprabhu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)|

# Responsive Images
Responsive images are those images that fit well to the screens, irrespective of their aspect ratios. Responsive images will naturally change in accordance by adjusting to the screen. A perfect responsive image should fit and easily be visible when you minimize the desktop screens or even use a smartphone with any resolutions (meaning you don’t need to scroll up-down or left-right to see the entire image). For example, refer to the below example for better understanding.

| ![space-1.jpg](https://miro.medium.com/max/1050/1*gbJL8HhzdnTtiwyCv5Sprg.png) | 
|:--:| 
|Photo by [Pete LePage](https://developers.google.com/web/resources/contributors/petelepage) at [Web Fundamentals](https://developers.google.com/web/fundamentals)|


As you can see, the same image (human on a kayak) fits very well with all four devices (desktop, laptop, smartphone, tablet) irrespective of their displays as illustrated above.

---


# Implementation
For the implementation, all you need to do is some basic HTML and CSS coding. Don’t worry, it’s not that hard. I have explained the code below as well.

## HTML
Everybody knows the creation of an HTML file, I mean an HTML document. Now inside the `.html` file, to render an image give the source of the image inside the `src` attribute of the `img` tag.

> Add a class called `center` so you can provide the properties to make it responsive in the CSS file.

Alright, enough of the jibber-jabber, below is the HTML code.


```HTML 

<!-- 
FileName -     responsiveImage.html
Description -  This is a HTML file which just displays an image. The responsive properties for the image is defined in the CSS file (styles.css)
Author -       Tanu Nanda Prabhu
-->

<!DOCTYPE html>
<html lang="en"> 
<head>
    <title>Responsive Images</title>
    <!-- Style Sheet referencing -->
    <link href = "styles.css" rel = "stylesheet">
</head>
<body>
    
    <h1 align = "center">Saskatchewan Legislative Building</h1>

    <!-- Add a class named "center" and define its properties in the CSS file" -->
    <img class="center" src="https://images.unsplash.com/photo-1592329724435-67ae98e9824f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1991&q=80"> 
    
    
    <p>The Saskatchewan Legislative Building is located in Regina, Saskatchewan, Canada, and houses the Legislative Assembly of Saskatchewan.</p>
     
</body>
</html>
```

---
