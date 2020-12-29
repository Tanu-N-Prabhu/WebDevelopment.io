# HTML Forms vs Bootstrap Forms

## In this short tutorial, let us understand the prominence of using Bootstrap Forms over HTML forms.

#### December 28, 2020 - 5 min read

| ![space-1.jpg](https://cdn-images-1.medium.com/max/1200/1*E-svoB_neNygg1SSrj_Kvg.jpeg) | 
|:--:| 
| Paper Forms; Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/forms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) |


# Form (HTML)

An HTML form aka a webform is used to collect data from the users. There are many ways that users can fill web forms such as text fields, radio buttons, drop-downs, and checkboxes. In this short tutorial, we will learn to implement a simple HTML and Bootstrap forms and see the difference between them. Primarily, you will understand the idea of responsiveness and its importance in this short tutorial.

---

# Implementing Forms using HTML and Bootstrap
So let's do some basic frontend coding using HTML and Bootstrap. Now to make this easier, I have implemented two simple forms both with two input fields: **Full Name** and **Date of Birth**. Both of the forms have one thing in common, i.e. the base code for both is HTML, but the other has a Bootstrap framework associated with HTML tags with it as shown below.

## HTML Forms

Implementing a simple HTML form is relatively trivial. All you have to do is use a `form` tag and for the input fields, you need to use `input` tags inside the `form` tag itself. The `type` of the input tag is very important. Use it according to your preference. To know about the input types refer to the article below.

[HTML Input Tag and it's Types](https://www.w3schools.com/tags/tag_input.asp)

Finally, the `label` tag provides the text for the `input` tag. On clicking the `submit` button, there would be no action. If you need any action, provide it in the `action` tag inside the `form` tag. Now let's put all the theory you learned from above into coding as shown below.

```HTML
<!-- 
FileName -     regularForm.html
Description -  This is a regular HTML form takes two inputs name, and dob. No CSS or Bootstrap was used for styling
Author -       Tanu Nanda Prabhu
-->

<!DOCTYPE html>
<html lang="en"> 
<head>
    <title>HTML Form</title>
</head>
<body>
    <h1>Simple HTML Form</h1>

    <!-- Dummy Form, on submitting goes nowhere -->
    <form action="">

        <label>Full Name</label>
        <input type="text"><br><br>
        <label>Date of Birth</label>
        <input type="date"><br><br>
        <input type="submit" value="Submit">

    </form> 

    <p><b>If you click the "Submit" button, nothing happens. It's a dummy form</b></p>

</body>
</html>
```


---

## Result 
To see the result of the above code you need to type or copy-paste the above code into an IDE. I use [brackets](http://brackets.io/) to execute my frontend code. Anyways when you execute the above code, the result will be a simple form. But the important part when you click on **Inspect (Ctrl-I)** and then click on the **Toggle device toolbar (Ctrl+Shift+M)**.  From the drop-down, you can select any of the smartphone or tablet devices. This is used for checking the responsiveness of the webpage or website.



| ![space-1.jpg](https://cdn-images-1.medium.com/max/1200/1*4k5nafW0FIPUsIN0t4dDHw.png) | 
|:--:| 
| Form Result from Pixel 2XL Zoomed to 150% percent|


As seen from the above result, the form is very zoomed-out. Pardon my non-technical language, I mean to say, not responsive. If this is the case, then users would be very frustrated to use the above HTML forms. I wouldn't be happy. So then what is the solution you might ask?. Your answer is provided in the next section of the tutorial.

> **Let me give you a hint to make the forms responsive, always use the Bootstrap framework.**

---

## Bootstrap Forms
Implementing a simple Bootstrap form is relatively trivial. First, of all try to understand that Bootstrap is not a separate web development language, it is just an HTML, CSS, JavaScript **framework** that you might have to use inside HTML tags. Refer to the article given below for a better understanding of Bootstrap.

[What is Bootstrap: A Beginners Guide](https://careerfoundry.com/en/blog/web-development/what-is-bootstrap-a-beginners-guide/)

Firstly, we need to use a class called `container` inside a `div` tag, which is **required when using the default grid system for responsiveness**. Extending Bootstrap features can be done using its classes in each tag. Just as above for implementing a form, all you have to do is use a `form` tag. Use the form-group class for responsiveness. Similarly, for the input fields use the input tags inside the `form` tag itself, for this, you need to use the class `form-control` which will expand the fields as per the width of the screen to maintain responsiveness. 

Finally, the `label` tag provides the text for the `input` tag. On clicking the submit button, there would be no action. If you need any `action`, provide it in the action tag inside the `form` tag. Make sure you include all the necessary CSS, Javascript referencing inside the `head` tag. Refer to the below article below which explains the starter template for Bootstrap.

[Bootstrap Starter Template](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

Now let's put all the theory you learned above into coding as shown below.

```HTML
<!-- 
FileName -     bootstrapForm.html
Description -  This is a regular Bootstrap form takes two inputs name, and dob. Bootstrap was used for responsiveness
Author -       Tanu Nanda Prabhu
-->


<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Bootstrap Forms</title>
    <!-- Necessary libraries and adjustments of Bootstrap for responsiveness -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
</head>
<body>

    <div class="container">
        
        <h1>Simple Bootstrap Form</h1><br>

        <!-- Dummy Form, on submitting goes nowhere -->
        <form action="">
        <div class="form-group">
        <label>Full Name</label>
        <input  class="form-control" type="text">
        </div>
        <div class="form-group">
        <label>Date of Birth</label>
        <input class="form-control" type="date">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <br>
        <p><b>If you click the "Submit" button, nothing happens. It's a dummy form</b></p>

    </div>

</body>
</html>

```

---

## Result
When you execute the above code on a smartphone or tablet device, you will come to know the magic of responsiveness. The form now clearly and precisely fits the screen irrespective of its aspect ratio. Thanks to Bootstrap, I think now you got the answer to the above question.


| ![space-1.jpg](https://cdn-images-1.medium.com/max/1200/1*kr8LTzF6nBMAWA87GpAKFw.png) | 
|:--:| 
| Form Result from Pixel 2XL Zoomed to 100% percent|

---

## Conclusion
Congratulations, you have reached the end of the tutorial "**HTML Forms vs Bootstrap Forms**". I hope now you have understood the necessity of using Bootstrap when responsiveness is the key to your website or webpage. Well, there is more to learn and explore about Bootstrap. This is just a small tutorial on implementing forms, if there is something new that catches your attention, let me know. If you have any doubts regarding the code or suggestions use the comment section down below. I will respond to your ASAP. For now, that's if for this tutorial, stay tuned for more updates. Until then, Stay safe.


##### Written By Tanu Nanda Prabhu using Markdown

###### Version 1.1 - Last Updated on 28-12-2020 on 6:25 PM



