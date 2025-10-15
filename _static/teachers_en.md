---
name: Teachers
lang: en
---

Welcome to the DESI High **Teachers' Guide**! This page is here to help you get a hold of the tools and ressources available through DESI High.
Whether you want to learn more about the DESI High program, need help getting started with the notebooks, or are looking for additional support, we've got you covered.

<div class="notification is-danger is-dark">
    <button class="delete"></button>
    <div class="is-size-5 has-text-weight-bold">
        <span class="icon">
            <i class="fa-solid fa-hat-wizard"></i>
        </span>
        You shall not pass!
    </div>
    Students beware, this page is intended for teachers and educators. If you are a student, please refer to the <a href="intro.html">Introduction page</a> or the <a href="curriculum.html">curriculum page</a> instead.
</div>


### Curriculums and notebooks
Our [curriculums](curriculum.html) are designed as a suite of notebooks, each focusing on specific topics or skills. You can pick one and follow the noteboooks inside, or you can pick the notebook(s) that you are interested in to tailor the learning experience to your students' needs.

Each notebook is self-contained, enabling independent exploration or integration into a broader series. With interactive exercises and practical applications, students can engage deeply with the material.

<span class="icon has-text-info">
  <i class="fas fa-info-circle"></i>
</span>
*The solution to the exercises are provided at the bottom of each notebook in a collapsed section.*

Each notebook includes an introduction section that outlines the learning objectives, and prerequisites to complete the activities.
**We encourage you to test the exercises** (with or without the solutions) before assigning them to your students, to make sure they are adapted to your students' level and the time you have available.

Besides each notebook on the curriculum page, you will find a tag indicating the esimated **difficulty level**:
- <span class="tag is-success">Easy</span> Estimated **High school level**: Suitable for beginners with little to no prior experience. 
- <span class="tag is-warning">Medium</span> Estimated **Undergraduate level**: Requires some prior knowledge or experience.
- <span class="tag is-danger">Hard</span> Estimated **Graduate level**: Designed for those with a strong background in the subject.

<span class="icon has-text-info">
  <i class="fas fa-info-circle"></i>
</span>
*The data used in most of the notebooks is from the DESI collaboration. Some notebooks may use simulated data or data from other surveys for specific exercises.*


### Limitations and support
We use [Binder](https://mybinder.org/) to provide a cloud-based environment for running Jupyter notebooks. While Binder is a powerful tool, it does have some limitations, including:

- **Resource limitations**: Binder has a limited amount of resources (CPU, memory) available for each user. If your notebook requires more resources than Binder can provide, you may experience slow performance or timeouts.
- **Idle timeouts**: If a Binder session is inactive for a certain period, it may be automatically terminated.
- **User limits**: Binder can support up to 100 users simultaneously on a given repository. If you have a larger class (Masterclass, conference, etc.), consider splitting students into groups to work on the same computers.

<span class="icon has-text-primary">
  <i class="fas fa-bookmark"></i>
</span>
*You can look out the Binder user policies [here](https://mybinder.readthedocs.io/en/latest/about/user-guidelines.html).*


### Package and environments
If you want to run the notebooks locally or on your own server, the desihigh notebooks are designed to work in a very standard Python 3.11 environment. All the dependencies are handled through the installation of the `desihigh` package, through the following command:

`pip install git+https://github.com/DESIHIGH/desihigh/@minimal` (or `pip install .` if you have cloned the repository)

The notebooks, data and package are available on [GitHub](https://github.com/DESIHIGH/desihigh).

<span class="icon-text has-text-warning">
    <span class="icon has-text-warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
    </span>
    Warning:
</span>
*The notebooks have relative links to each other, data files and images. To run them locally, you need to clone the repository and keep the same folder structure.*


### You are not alone!
If you need further assistance, our team is here to help. Whether you're interested in an in-person intervention, a remote session, or training from a DESI High team member, we encourage you to reach out. 

We're also open to feedback and contributions, so don't hesitate to share your ideas or suggestions to help us improve. You can contact us through our [contact page](contact.html) or the [forum]({{ site.links.forum }}).

Finally, we offer a wealth of additional resources, including images, slides, and more, to support your teaching journey. Explore these materials to deepen your understanding and enhance your classroom experience.

<span class="icon has-text-primary">
    <i class="fa-solid fa-screwdriver-wrench"></i>
</span>
*Resources for presentation are available in the [resources page](resources.html).*

------

**Thank you for being a part of the DESI High community**. Together, we can inspire the next generation of learners and researchers!

<br/>
<div class="notification is-primary">
    <button class="delete"></button>
    <span class="icon">
        <i class="fa-solid fa-circle-question"></i>
    </span> 
    Did we forget something ? Check our <a href="faq.html">FAQ</a>, the answer might be there. If not, feel free to <a href="contact.html">contact us</a> !
</div>