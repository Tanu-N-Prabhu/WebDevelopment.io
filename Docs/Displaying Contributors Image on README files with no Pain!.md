# Displaying Contributors Image on README files with no Pain!

## Use contributor-img to generate an image that displays contributors on your GitHub repository.


| ![space-1.jpg](https://miro.medium.com/max/1050/1*y5d_xjclUbHMeHrC1Qnv5w.jpeg) | 
|:--:| 
| **Photo by [Icons8 Team](https://unsplash.com/@icons8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/project?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)** |

# Introduction
In this beautiful world, contributors play a prominent role in contributing their wealth, knowledge, happiness to the community, projects, society, or even a solution to a never-ending problem. Whenever I hear the word contributors, one place that always comes to my mind is GitHub. Well, nothing crazy [GitHub](https://github.com/) has over **56+ million users aka developers**, **3+ million organizations**, and over **100+ million repositories**. Out of which there are over a million active contributors who push several hundred or thousands of lines of code to other repositories. This happens on a daily if not hourly basis.

Now, if you have a GitHub repository that has over a thousand [forks](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) or [stars](https://stars.github.com/). You might/will get a lot of pull requests as I do. This is a common fact. Each time you merge a pull request into your repository, the one that generated the initial request will automatically become the contributor to your repository. Well, I’ll tell you what folks, there is no other simple way to stop this. Just admit it.

---

# Navigating to the contributor dashboard
There is a way to navigate to the contributor's dashboard from your repository itself. All you have to do is navigate to **Insights → Contributors**. Here you can view the **additions, deletions, and commits** performed by your contributors on your repository. A screenshot of my not so famous repository is given down below.

| ![space-1.jpg](https://miro.medium.com/max/1050/1*DgzH24d0ZvJv0mwtaYGYBQ.png) | 
|:--:| 
| **There are 10 contributors bringing them all together was very throbbing. GitHub** |


---


# Contributors displayed by GitHub (not on the Readme.md file)
GitHub sorta does a good job in displaying the contributors at the bottom right-hand corner of your repository as shown below.

| ![space-1.jpg](https://miro.medium.com/max/513/1*yb50Ohl6Imca7R6Wo_CHYg.png) | 
|:--:| 
| **Contributors displayed by GitHub** |


But what if you need to need to display the contributors in your **Readme.md** file? Don’t even think of just bluntly writing all the contributors using Markdown. It’s 2021 there are amazing web applications that can generate the list of contributors as images. One such example is [contributors-img](https://contrib.rocks/preview).

---

# Contributors displayed by using contributors-img (on the Readme.md file)

> [contributors-img](https://dev.to/lacolaco/introducing-contributors-img-keep-contributors-in-readme-md-gci) — A web application that generates an image to display contributors of your GitHub repository. — [Suguru Inatomi](https://dev.to/lacolaco)

Generating the image is very trivial. All you have to do is navigate to [contributors-img](https://contrib.rocks/preview) and then paste the **name of your repository** along with your **username** to generate the URL as shown below.

| ![space-1.jpg](https://miro.medium.com/max/1050/1*eSrUBAB6RjJQKZDoKcMCPA.png) | 
|:--:| 
| **Using contributors-img to generate an image** |

Or you can also use the code to generate an image. Copy-paste it in your Readme.md file.

```HTML

<!-- Copy-paste in your Readme.md file -->

<a href = "https://github.com/Tanu-N-Prabhu/Python/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo = GitHub_username/repository_name"/>
</a>

Made with [contributors-img](https://contrib.rocks).

```

