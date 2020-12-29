# HTML Forms vs Bootstrap Forms

## In this short tutorial, let us understand the prominence of using Bootstrap Forms over HTML forms.

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


