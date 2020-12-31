# Top 5 Advantages of a Good Responsive Design

## In this article, let’s see the benefits of a good responsive design

| ![space-1.jpg](https://miro.medium.com/max/1050/1*E-svoB_neNygg1SSrj_Kvg.jpeg) | 
|:--:| 
| Paper Forms; Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/forms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) |


## Form (HTML)
An HTML form aka a webform is used to collect data from the users. There are many ways that users can fill web forms such as text fields, radio buttons, drop-downs, and checkboxes. In this short tutorial, we will learn to implement a simple HTML and Bootstrap forms and see the difference between them. Primarily, you will understand the idea of responsiveness and its importance in this short tutorial.

---

## Implementing Forms using HTML and Bootstrap

So let’s do some basic frontend coding using HTML and Bootstrap. Now to make this easier, I have implemented two simple forms both with two input fields: **Full Name and Date of Birth**. Both of the forms have one thing in common, i.e. the base code for both is HTML, but the other has a Bootstrap framework associated with HTML tags with it as shown below.

### HTML Forms

Implementing a simple HTML form is relatively trivial. All you have to do is use a **form** tag and for the input fields, you need to use **input** tags inside the **form** tag itself. The **type** of the **input** tag is very important. Use it according to your preference. To know about the input types refer to the article below.

[HTML Input Tag](https://www.w3schools.com/tags/tag_input.asp)


Finally, the `label` tag provides the text for the `input` tag. On clicking the `submit` button, there would be no action. If you need any `action`, provide it in the action tag inside the `form` tag. Now let’s put all the theory you learned from above into coding as shown below.

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
