---
---
{% include section.html size="full" %}

{%
  include hero.html
  eyebrow="University of Sydney · Robotics, Learning & Control"
  title="Computational methods for curious robots"
  text="We develop rigorous mathematical, algorithmic, and optimization methods for robotic learning and control. Led by [Dr. Ian Abraham](members/ian-abraham)."
  link="#latest-work"
  link-text="See our latest work"
  link2="contact"
  link2-text="Join the lab"
%}

{% include section.html %}

## Latest Work

New papers and preprints from the lab. The full list lives on our [publications page](research).

{% include latest-papers.html count=6 %}

{%
  include button.html
  link="research"
  text="All publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="outline"
%}

{% include section.html %}

## Research Areas

{% capture text %}

We develop fast numerical methods that let robots learn, adapt, and control themselves in real time, even when the underlying models are high-dimensional, uncertain, and contact-rich. We combine model-based structure with data-driven learning so that adaptation stays both efficient and reliable.

<c>Current Research Topic Areas</c>
- Data-driven dynamics via Koopman operators
- Stein-variational and uncertainty-adaptive model predictive control
- Contact-rich manipulation through differentiable simulation and contact-aware information maximization

{% endcapture %}

{%
  include feature.html
  image="images/hand_rubix.jpg"
  link="research"
  title="Numerical Methods for Adaptive, High-Dimensional Learning and Control"
  text=text
%}

{% capture text %}

We develop theory and algorithms that let robots search, explore, and act in the most extreme and remote environments, where sensing, energy, and time are limited and mistakes are costly. Ergodic control gives robots principled strategies for spending time in proportion to where information or coverage value lies.

<c>Current Research Topic Areas</c>
- Time- and scale-optimal ergodic search and coverage
- Exploration over complex, non-Euclidean domains and motion fields
- Safety- and reachability-guaranteed exploration

{% endcapture %}

{%
  include feature.html
  image="images/bunny_inspection_abstract_fig.png"
  link="research"
  title="Decision Making under Extreme Conditions"
  flip=true
  text=text
%}

{% capture text %}

We study how teams of robots coordinate to search, explore, and act together, and how to keep their decisions robust when models and environments are uncertain. This spans distributed and multi-objective optimization as well as distributionally robust control.

<c>Current Research Topic Areas</c>
- Multi-agent ergodic exploration under sensing/visibility constraints
- Multi-objective coordination via branch-and-bound and Pareto-optimal methods
- Distributionally robust control under uncertainty

{% endcapture %}

{%
  include feature.html
  image="images/multi-agent-erg.gif"
  link="research"
  title="Distributed Optimization and Robust Control"
  text=text
%}

{% include section.html %}

## We are recruiting!

Those interested in joining our [group](members) are expected to have strong competency in programming, optimization, systems and control theory, kinematics and dynamics of robotic systems, and rigorous mathematical theory and proof writing. Candidates should have a strong curiosity and drive to develop algorithms and deploy them on physical robots to expand the capabilities, analyze their performance, and prove reliability through mathematical rigor and repeated experimentation. 

Other useful skills: 

- ROS 1/2 or LCM experience 
- Extensive Python and C/C++ coding experience
- Exposure to modern ML/AI autodiff libraries like JAX/PyTorch
- Excellent speaking/writing abilities

If this sounds like you then please submit an [expression of interest (EOI)](https://www.sydney.edu.au/engineering/study/postgraduate-research.html) via this [form](https://sydney.au1.qualtrics.com/jfe/form/SV_e8xuYF3XBRZ97Zs).
Make sure to list Dr. Ian Abraham, School of Electrical and Computer Engineering as a potential advisor if possible. 

