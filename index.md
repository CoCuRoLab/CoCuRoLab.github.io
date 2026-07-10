---
---
## About Us

The **<u>Co</u>**mputational methods for **<u>Cu</u>**rious **<u>Ro</u>**bots Lab is a robotics research group focused on the development of rigorous mathematical, algorithmic, and optimization methods for robotic learning and control led by [Dr. Ian Abraham](members/ian-abraham). 

Our research breakthroughs are deployed on a wide range of diverse robotic systems to expand their utility and overall success in the most extreme and remote environments. Check out our ongoing projects below! 

## Ongoing Research Projects 

{% capture text %}

We develop theory and algorithms for ergodic control, steering robots to spend time in a space in proportion to its information or coverage value. This gives robots principled, scalable strategies for search and exploration under real-world constraints like limited sensing, energy, and time.

<c>Current Research Topic Areas</c>
- Time- and scale-optimal coverage
- Exploration over complex and non-Euclidean domains
- Safety- and reachability-guaranteed exploration

<!-- {%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%} -->

{% endcapture %}

{%
  include feature.html
  image="images/bunny_inspection_abstract_fig.png"
  link="research"
  title="Theory of Search & Exploration"
  text=text
%}

{% capture text %}

We combine model-based structure with learning, using data-driven dynamics models, differentiable simulation, and distributionally robust control, so robots can plan and act reliably, from contact-rich manipulation to legged locomotion and long-term field deployment.

<c>Current Research Topic Areas</c>
- Data-driven dynamics via Koopman operators
- Contact-rich manipulation through differentiable simulation
- Distributionally robust and Stein-variational control for uncertain and field environments

<!-- {%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%} -->

{% endcapture %}

{%
  include feature.html
  image="images/hand_rubix.jpg"
  link="research"
  title="Structured Learning and Control"
  flip=true
  text=text
%}


{% capture text %}

We study how teams of robots coordinate to search, explore, and act together, developing multi-agent ergodic control and coordination algorithms for heterogeneous robot teams.

<c>Current Research Topic Areas</c>
- Multi-agent ergodic exploration under sensing/visibility constraints
- Multi-objective coordination via branch-and-bound and Pareto-optimal methods
- Diverse, decentralized search strategies across robot teams


<!-- {%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%} -->

{% endcapture %}

{%
  include feature.html
  image="images/multi-agent-erg.gif"
  link="research"
  title="Collective Intelligence"
  text=text
%}

## Try It Yourself

Drag around one of our robots, then get a feel for the idea behind our ergodic search research by marking points of interest and watching a search agent balance lingering where it matters against covering the rest of the space.


<div class="ergodic-demo"></div>
<script type="module" src="demos/ergodic-demo.js"></script>

## Interested in [Joining](contact)? We are currently recruiting! 

Those interested in joining our [group](team/index.md) are expected to have strong competency is programming, optimization, systems and control theory, kinematics and dynamics of robotic systems, and rigorous mathematical theory and proof writing. Candidates should have a strong curiosity and drive to develop algorithms and deploy them on physical robots to expand the capabilities, analyze their performance, and prove reliability through mathematical rigor and repeated experimentation. 

Other useful skills: 

- ROS 1/2 or LCM experience 
- Extensive Python and C/C++ coding experience
- Exposure to modern ML/AI autodiff libraries like JAX/PyTorch
- Excellent speaking/writing abilities

If this sounds like you then please submit an [expression of interest (EOI)](https://www.sydney.edu.au/engineering/study/postgraduate-research.html) via this [form](https://sydney.au1.qualtrics.com/jfe/form/SV_6hQBMH6Xxo4BZ78).
Make sure to list Dr. Ian Abraham, School of Electrical and Computer Engineering as a potential advisor if possible. 

