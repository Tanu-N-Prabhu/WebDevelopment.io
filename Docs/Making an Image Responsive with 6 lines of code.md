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

## CSS

Create a new CSS file called `styles.css` or whatever. Make sure the filename has `.css` as its extension. Anyway, now add a selector for the `img` tag bearing the class `center`. A selector selects HTML elements based on the element name. Inside the selector, you need to add 4 CSS properties with their values explained below.

* `display: block` — The `display` property displays an element as a block element. It takes up the entire width of the screen. [Read more](https://www.w3schools.com/cssref/pr_class_display.asp).

* `margin-left: auto` — As the name suggests, the `margin-left` sets the element on a left-margin. Given its value as `auto`, the browser automatically calculates a left margin and places the element accordingly. [Read more](https://www.w3schools.com/cssref/pr_margin-left.asp).

* `margin-right: auto` — Now you know, what `margin-right` does. Giving the value as `auto`, the browser automatically calculates a right margin and places the element accordingly. [Read more](https://www.w3schools.com/cssref/pr_margin-right.asp).

* `width:100%` — The `width` property sets the width of an element, be it the image, text, video, etc. Giving value in `%` for example `100%` defines the width in percent of the containing block. [Read More](https://www.w3schools.com/cssref/pr_dim_width.asp).

Below are the 6 lines of CSS code (comments are exceptions) that I was talking about at the beginning of this tutorial

```CSS
/*
FileName -     styles.css
Description -  CSS code for making the image responsive by setting the value of four properties such as display, margin-left, margin-right, width
Author -       Tanu Nanda Prabhu
 */

.center {
display: block;
margin-left: auto;
margin-right: auto;
width: 100%;
}
```

---


# Result
The most awaiting part has come. I am going to use **Google Chrome** to render the output on a Mobile device. For this, all you have to do is click on **Inspect (Ctrl-Shift-I)** and then click on the **Toggle device toolbar (Ctrl+Shift+M)**. From the drop-down, you can select any of the smartphone or tablet devices.

> **Activity**: Don’t include the CSS file, try executing only the HTML file, and see the result before jumping to a conclusion.

| ![space-1.jpg](https://miro.medium.com/max/1050/1*D10AMfDHdPcA0eisdfkLpA.png) | 
|:--:| 
|The result from Pixel 2XL Zoomed to 150% percent|


> From the above result, you don’t have to scroll the image left to right or top to bottom to see the full image. This is the beauty of adding CSS properties to make an image responsive.

---

# Conclusion

Congratulations, you have reached the end of this short tutorial named “***Making an Image Responsive with 6 lines of code***”. Well, there are many ways that you can make an image responsive, but this is one of the easiest ways to do so. If you know any other ways to create responsive images, please let me know via the comment section. In this way, you are not only helping me but also helping other readers as well. I hope you guys have learned something new from this tutorial. Stay tuned for more updates, and I wish you guys a thrilling new year 2021.
