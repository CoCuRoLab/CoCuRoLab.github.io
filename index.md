---
---
# About Us

The **Co**mputational methods for **Cu**rious **Ro**bots Lab is a robotics research group focused on the development of rigorous mathematical, algorithmic, and optimization methods for robotic learning and control led by [Dr. Ian Abraham](_members/ian-abraham.md). 

Our theoretical breakthroughs are deployed on a wide range of diverse robotic systems to expand their utility and overall success in both domestic and the most remote and extreme environments. 

# Interested in Joining?

Those interested in joining our [group](team/index.md) are expected to have strong competency is programming, optimization, systems and control theory, kinematics and dynamics of robotic systems, and rigorous mathematical theory and proof writing. Candidates should have a strong curiosity and drive to develop algorithms to expand the capabilities of robots, analyze their performance, and prove reliability through mathematical rigor and repeated experimentation. 

Other skills that are useful: 

- ROS 1/2 experience 
- Extensive Python and C/C++ coding experience
- Exposure to modern ML/AI autodiff libraries like JAX/PyTorch
- Proof writing abilities

If this research sounds exciting then reach email a cover letter, CV, and how you would contribute to the CoCuRo Lab to ian {dot} abraham {at} sydney.edu.au with the subject line In. 



<!-- {% include section.html %}

<!-- ## Demo


<div id="cube" style="--aspect-ratio:16/9;">
  <script type="module" src="demos/simple.js"></script>
</div> -->


## Highlights

{% capture text %}

Our research is at the intersection of robotics, optimal control, and learning, developing algorithms that enable robots to reliably learn, explore, and navigate complex environments.


{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/bunny_inspection_abstract_fig.png"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Our work spans a wide range of problems in optimal control, learning, exploration, manipulation, locomotion, and multi-agent coordination. We regularly provide demos and readily deployable open-source code.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/allegro_manip.gif"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Lab members consist of a diverse group of undergraduate, graduate, and postdoctoral students working on several exciting research fronts. For inquiries about our research, joining the lab, our outreach please see our [contact page](contact). 



{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/summer_cookout_2022_0.jpg"
  link="team"
  title="Our Team"
  text=text
%}
